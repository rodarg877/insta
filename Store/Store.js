import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import functionPrimaria from './Sagas/Sagas';
import Constantes from './Constantes';


const reducersPrueba = (state = [], action) => state;

const reducerSesion = (state = null, action) => {
    switch (action.type) {
        case Constantes.ESTABLECER_SESION:
            return action.usuario ;
        case Constantes.CERRAR_SESION:
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