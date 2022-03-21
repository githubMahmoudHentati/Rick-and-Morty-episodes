import {CharactersList} from '../charactersList/charactersList'
import {CharacterEpisodeList} from '../characterEpisodesList/characterEpisodeList'


const routes = [
    {
        path: '/Rick-and-Morty-episodes',
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