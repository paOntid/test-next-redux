import { createWrapper } from "next-redux-wrapper";
import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
  Store,
  CombinedState,
  Reducer,
} from "redux";
import createSagaMiddleware, { Task } from "redux-saga";

import { IRootState, rootReducer } from "./Root.reducer";
import { rootSagas } from "./Root.saga";

export interface SagaStore extends Store<IRootState> {
  sagaTask: Task;
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window !== "undefined" &&
  // process.env.REACT_APP_DEVELOPMENT === 'development' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const bindMiddleware = composeEnhancers(applyMiddleware(sagaMiddleware));

const store: any = createStore(
  rootReducer as Reducer<CombinedState<IRootState>, any>,
  bindMiddleware
);

(store as SagaStore).sagaTask = sagaMiddleware.run(rootSagas);

const makeStore = () => {
  return store;
};

export const wrapper = createWrapper<SagaStore>(makeStore);
