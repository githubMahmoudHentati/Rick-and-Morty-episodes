import {combineReducers} from 'redux'
import {Reducer} from "./reducer"
import {CharactersListReducer} from "../charactersList/store/reducer";
import {CharacterEpisodesListReducer} from "../characterEpisodesList/store/reducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['Reducer']
};

const RootReducer = combineReducers({
    Reducer,
    CharactersListReducer,
    CharacterEpisodesListReducer
})

export default  persistReducer(persistConfig , RootReducer)

