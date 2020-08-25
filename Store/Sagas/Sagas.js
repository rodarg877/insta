import { takeEvery, call } from 'redux-saga/effects';
import { autenticacion, baseDeDatos } from '../Servicios/Firebase';
import Constantes from '../Constantes';


const registroEnFirebase = (values) => autenticacion
    .createUserWithEmailAndPassword(values.correo, values.password)
    .then(success => success.toJSON());
const registroEnBaseDeDatos = (uid, nombre, email) => baseDeDatos.ref(` usuarios/${uid}`).set({
    nombre,
    correo,
});


function* sagaRegistro(values) {
    try {
        const registro = yield call(registroEnFirebase, values.datos)
        const { email, uid } = registro;
        const { datos: { nombre } } = values;
        yield call(registroEnBaseDeDatos, { uid, email, nombre });
    } catch (error) {
        console.log(error)
    }
}
function* sagaLogin(values){
    try {
        const login =yield call(loginEnFirebase, values.datos)
    } catch (error) {
        console.log (error);
    }
}
const loginEnFirebase =({correo, password })=>firebase.auth()
.signInWithEmailAndPassword(correo, password)
.then(success=> success.toJSON());

export default function* funcionPrimaria() {
    yield takeEvery(Constantes.REGISTRO, sagaRegistro)
    yield takeEvery(Constantes.LOGIN, sagaLogin)
}