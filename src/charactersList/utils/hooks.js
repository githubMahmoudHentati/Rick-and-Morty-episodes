import {useDispatch, useSelector} from "react-redux";
import {setConstraintDataCharactersList} from "../store/actions";
import {useHistory} from "react-router-dom";
import {setConstraintDataEpisodeList} from "../../characterEpisodesList/store/actions";
import {setCharacterNameSelected, setCharacterSpeciesSelected} from "../../store/actions";

export const Hooks =(getEpisodeDataCall)=>{
    const history=useHistory()
    const dispatch = useDispatch()

    const getCurrentPage=(page)=>{
        dispatch(setConstraintDataCharactersList({constraintDataName:'listMediaCardLoading',constraintDataValue:true}))
        dispatch(setConstraintDataCharactersList({constraintDataName:'currentPage',constraintDataValue:page}))
        getEpisodeDataCall({page:page})
    }

     const getCharacterEpisodesList=async (media)=>{
          dispatch(setCharacterNameSelected({characterNameSelected:media.name}))
          dispatch(setCharacterSpeciesSelected({characterSpeciesSelected:media.species}))
          history.push("/episodes")
          dispatch(setConstraintDataCharactersList({constraintDataName:'listMediaCardLoading',constraintDataValue:true}))
     }

    return(
        {
            getCurrentPage,
            getCharacterEpisodesList
        }
    )
}