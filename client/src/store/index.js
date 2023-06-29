import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from "redux-persist";
import exampleSlice from "./slices/exampleSlice";
import promotionSlice from './slices/promotionsSlace'

const persistConfig = {

    key: 'root',
    storage,

    blacklist: ['example', "promotions"]

}
// const userPersistConfig = {
//   key: 'isLogged',
//   storage,
// }
const rootReducer = combineReducers({
    example: exampleSlice,
    promotions: promotionSlice
})


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});
export const persistor = persistStore(store);
export default store;
