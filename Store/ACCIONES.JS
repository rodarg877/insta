import Constantes from './Constantes'


export const actionLogin = datos => ({
    type: Constantes.LOGIN,
    datos,
});

export const actionRegistro = values =>({
    type: Constantes.REGISTRO,
    datos: values,
});

export const actionEstablecerSesion = (usuario) => ({
    type: Constantes.ESTABLECER_SESION,
    usuario,
});

export const actionCerrarSesion = () => ({
    type: Constantes.CERRAR_SESION,

})