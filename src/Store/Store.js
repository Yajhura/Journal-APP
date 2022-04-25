import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { AuhtReducer } from "../Reducers/AuthReducer";
import { NotesReducer } from "../Reducers/NoteReducer";
import { uiReducer } from "../Reducers/uiReducers";

const reducers = combineReducers({
  auth: AuhtReducer,
  ui: uiReducer,
  notes: NotesReducer,
});
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
