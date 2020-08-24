import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import functionPrimaria from './Sagas/Sagas';
import CONSTANTES from './CONSTANTES';


const reducersPrueba = (state = [], action) => state;

const reducerSesion = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.ESTABLECER_SESION:
            return action.usuario ;
        case CONSTANTES.CERRAR_SESION:
            return null;
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    reducerSesion,
    reducersPrueba,
    form
});
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(functionPrimaria);

export default store;