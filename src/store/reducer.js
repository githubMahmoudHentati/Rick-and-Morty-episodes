
const INITIAL_STATE = {

    characterNameSelected : '',
    characterSpeciesSelected:''
}

export const  Reducer=(state=INITIAL_STATE , action)=>{

    switch (action.type){

        case "SET_CharacterNameSelected":
            const {characterNameSelected}=action.payload
            return{
                ...state,
                characterNameSelected: characterNameSelected,
            }
        case "SET_CharacterSpeciesSelected":
            const {characterSpeciesSelected}=action.payload
            return{
                ...state,
                characterSpeciesSelected: characterSpeciesSelected
            }
        default:{
            return state
        }
    }
}