import Constantes from './Constantes'


export const actionLogin = datos => ({
    type: Constantes.LOGIN,
    datos,
});

export const actionRegistro = values => ({
    type: Constantes.REGISTRO,
    datos: values,
});

export const actionEstablecerSesion = (usuario) => ({
    type: Constantes.ESTABLECER_SESION,
    usuario,
});

export const actionCerrarSesion = () => ({
    type: Constantes.CERRAR_SESION,

});

export const actionCargarImagen = (imagen) => ({
    type: Constantes.CARGAR_IMAGEN_SIGNUP,
    imagen,
});

export const actionLimpiarImagen = () => ({
    type: Constantes.LIMPIAR_IMAGEN_SIGNUP,
});