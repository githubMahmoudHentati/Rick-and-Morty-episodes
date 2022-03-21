import { useQuery} from "@apollo/client";
import {graphQLSchema} from "./graphQL";
import {useDispatch, useSelector} from "react-redux";
import gql from "graphql-tag";
import {setCharacterNameList, setConstraintDataCharactersList, setListCardMediaInfo} from "../store/actions";
import {CharactersListReducer} from "../store/reducer";


export const GraphQLFetchData=()=> {
    const dispatch = useDispatch()
    const charactersList = useSelector((state) => state.CharactersListReducer)

    const {data: getEpisodeData,refetch:getEpisodeDataCall}
        = useQuery(graphQLSchema().getEpisodesInfoQuery, {
        context: { clientName: 'fetchClient' },
        fetchPolicy: 'cache-and-network',
        onCompleted: async (data) => {
            dispatch(setCharacterNameList({CharacterNameList:
                    data.characters.results.map(({name:value
                                                 },index)  => ({
                        value,
                    }))
            }))
            console.log("charactersList.constraintData.searchTerm",charactersList.constraintData.searchTerm)
            if(!charactersList.constraintData.searchTerm){
                dispatch(setListCardMediaInfo({listCardMediaInfo:data.characters.results}))
                dispatch(setConstraintDataCharactersList({constraintDataName:'listMediaCardLoading',constraintDataValue:false}))
            }
            dispatch(setConstraintDataCharactersList({constraintDataName:'charactersListLoadingSearch',constraintDataValue:false}))
            console.log('data', data)
        },
        onError: async (error)=>{
            dispatch(setCharacterNameList({CharacterNameList:[]}))
            dispatch(setConstraintDataCharactersList({constraintDataName:'charactersListLoadingSearch',constraintDataValue:false}))
        }
    })

    return({
        getEpisodeData,
        getEpisodeDataCall,
    })
}

