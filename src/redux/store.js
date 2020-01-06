import {createStore, combineReducers, compose, applyMiddleware} from "redux"
import userReducer, { restorSessionAction } from "./userDuck";
import charsReducer, {getCharactersAction} from "./charsDuck";
import thunk from "redux-thunk"

let rootReducer = combineReducers({
    user: userReducer,
    characters: charsReducer
})

// Herramientas de desarrollador
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function generateStore(){
    let store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk)))
    // Consiguiendo los personajes por primera vez
    getCharactersAction()(store.dispatch, store.getState)
    restorSessionAction()(store.dispatch)
    return store;
}