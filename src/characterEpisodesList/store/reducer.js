import {initialData} from './initialData'

const {constraintData,CardMediaEpisodeInfoList,charactersSameSpeciesList}= initialData()

const INITIAL_STATE = {

    constraintData : constraintData(),
    CardMediaEpisodeInfoList:CardMediaEpisodeInfoList(),
    charactersSameSpeciesList:charactersSameSpeciesList()
}

export const  CharacterEpisodesListReducer=(state=INITIAL_STATE , action)=>{

    switch (action.type){

        case "SET_CardMediaEpisodeInfoList":
            const {CardMediaEpisodeInfoList}=action.payload
            return{
                ...state,
                CardMediaEpisodeInfoList: CardMediaEpisodeInfoList
            }
        case "SET_CharactersSameSpeciesList":
            const {charactersSameSpeciesList}=action.payload
            return{
                ...state,
                charactersSameSpeciesList: charactersSameSpeciesList
            }
        case "SET_ConstraintData":
            const {constraintDataName, constraintDataValue} = action.payload
            const constraintDataOnOnchangeObj = {
                ...state.constraintData,
                [constraintDataName]: constraintDataValue
            }
            return {
                ...state,
                constraintData: constraintDataOnOnchangeObj
            }
        default:{
            return state
        }
    }
}