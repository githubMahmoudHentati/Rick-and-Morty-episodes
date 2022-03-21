import {initialData} from './initialData'

const {constraintData,listCardMediaInfo,CharacterNameList}= initialData()

const INITIAL_STATE = {

    constraintData : constraintData(),
    listCardMediaInfo:listCardMediaInfo(),
    CharacterNameList:CharacterNameList()
}

export const  CharactersListReducer=(state=INITIAL_STATE , action)=>{

    switch (action.type){

        case "SET_listCardMediaInfo":
            const {listCardMediaInfo}=action.payload
            return{
                ...state,
                listCardMediaInfo: listCardMediaInfo
            }
        case "SET_CharacterNameList":
            const {CharacterNameList}=action.payload
            console.log("CharacterNameList-reducer",CharacterNameList)
            return{
                ...state,
                CharacterNameList: CharacterNameList
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