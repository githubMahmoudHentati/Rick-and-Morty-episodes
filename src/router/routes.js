import {CharactersList} from '../charactersList/charactersList'
import {CharacterEpisodeList} from '../characterEpisodesList/characterEpisodeList'


const routes = [
    {
        path: '/',
        component: CharactersList,
        key: '/CharactersList',
    },
    {
        path: '/episodes',
        component: CharacterEpisodeList,
        key: '/episodes',
    },
];

export default routes;