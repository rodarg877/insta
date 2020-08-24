import CONSTANTES from './CONSTANTES'


export const actionLogin = datos => ({
    type: CONSTANTES.LOGIN,
    datos,
});

export const actionRegistro = values =>({
    type: CONSTANTES.REGISTRO,
    datos: values,
});

export const actionEstablecerSesion = (usuario) => ({
    type: CONSTANTES.ESTABLECER_SESION,
    usuario,
});

export const actionCerrarSesion = () => ({
    type: CONSTANTES.CERRAR_SESION,

})