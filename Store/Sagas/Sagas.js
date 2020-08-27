import { takeEvery, call, select } from 'redux-saga/effects';
import { autenticacion, baseDeDatos } from '../Servicios/Firebase';
import Constantes from '../Constantes';


const registroEnFirebase = (values) => autenticacion
    .createUserWithEmailAndPassword(values.correo, values.password)
    .then(success => success.json());

const registroEnBaseDeDatos = (uid, nombre, email, fotoUrl) => baseDeDatos.ref(` usuarios/${uid}`).set({
    nombre,
    email,
    fotoUrl,
});
const registroFotoCloudinary = ({ imagen }) => {
    const { uri, type } = imagen;
    const splitName = uri.split('/');
    const name = { ...splitName }.pop();
    const foto = { uri, type, name };
    const formImagen = new FormData();

    formImagen.append('upload_preset', Constantes.CLOUDINARY_PRESET);
    formImagen.append('file', foto);
    return fetch(Constantes.CLOUDINARY_NAME, {
        method: 'POST',
        body: formImagen
    }).then(response => response.json())
};

function* sagaRegistro(values) {
    console.log(values);
    try {
        const imagen = yield select(state => state.reducerImageSignUp);
        const urlFoto = yield call(registroFotoCloudinary, imagen);
        const fotoUrl = urlFoto.secure_url;
        const registro = yield call(registroEnFirebase, values.datos);
        const { email, uid } = registro;
        const { datos: { nombre } } = values;
        yield call(registroEnBaseDeDatos, { uid, email, nombre, fotoUrl });
    } catch (error) {
        console.log(error)
    }
}
function* sagaLogin(values) {
    try {
        const login = yield call(loginEnFirebase, values.datos)
    } catch (error) {
        console.log(error);
    }
}
const loginEnFirebase = ({ correo, password }) => autenticacion
    .signInWithEmailAndPassword(correo, password)
    .then(success => success.toJSON());

export default function* funcionPrimaria() {
    yield takeEvery(Constantes.REGISTRO, sagaRegistro)
    yield takeEvery(Constantes.LOGIN, sagaLogin)
}   