import { useQuery} from "@apollo/client";
import {graphQLSchema} from "./graphQL";
import {useDispatch, useSelector} from "react-redux";
import {
    setCardMediaEpisodeInfoList,
    setCharactersSameSpeciesList,
    setConstraintDataEpisodeList
} from "../store/actions";


export const GraphQLFetchData=()=> {
    const dispatch = useDispatch()
    const persistData = useSelector((state) => state.Reducer)

    const {data: getEpisodeData}
        = useQuery(graphQLSchema().getEpisodesInfoQuery, {
        context: { clientName: 'fetchClient' },
        fetchPolicy: 'cache-and-network',
        variables:{filter: { name: persistData.characterNameSelected }},
        onCompleted: async (data) => {
            dispatch(setCardMediaEpisodeInfoList({CardMediaEpisodeInfoList:data.characters.results[0]}))
            dispatch(setConstraintDataEpisodeList({constraintDataName:'listMediaCardLoading',constraintDataValue:false}))
            console.log('data', data)
        }
    })
    const {data: getCharactersSameSpecies}
        = useQuery(graphQLSchema().getCharactersSameSpeciesInfoQuery, {
        context: { clientName: 'fetchClient' },
        fetchPolicy: 'cache-and-network',
        variables:{filter: { species: persistData.characterSpeciesSelected }},
        onCompleted: async (data) => {
            dispatch(setCharactersSameSpeciesList({charactersSameSpeciesList:data.characters.results}))
            console.log('data2', data)
        }
    })
    return({
        getEpisodeData,
        getCharactersSameSpecies
    })
}

