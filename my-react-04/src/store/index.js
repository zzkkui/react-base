import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer';
import todoSagas from './sagas'

//redux中间件 是作用于dispatch
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);
const store = createStore(reducer, enhancer);

sagaMiddleware.run(todoSagas)

export default store;