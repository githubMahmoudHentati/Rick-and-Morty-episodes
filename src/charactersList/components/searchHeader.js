import React, {useEffect} from "react";
import {useUpdateEffect} from 'react-use';
import {Row, Col,Card} from 'antd';
import { Input, AutoComplete } from 'antd';
import '../charactersList.scss';
import {setConstraintDataCharactersList} from "../store/actions";
import {useDispatch} from "react-redux";

export const SearchHeader =({getEpisodeDataCall,charactersList})=>{
    const dispatch = useDispatch()

    useEffect(async () => {
        console.log("option",charactersList.CharacterNameList)
    }, [charactersList.CharacterNameList]);

    useUpdateEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            console.log(charactersList.constraintData.searchTerm);
            // Send Axios request here
            if (charactersList.constraintData.searchTerm==='empty'){
                getEpisodeDataCall({filter: { name:''}});
            }else if(charactersList.constraintData.searchTerm){
                dispatch(setConstraintDataCharactersList({constraintDataName:'charactersListLoadingSearch',constraintDataValue:true}))
                getEpisodeDataCall({page:1,filter: { name:charactersList.constraintData.searchTerm}});
            }
        }, 3000);

        return () => clearTimeout(delayDebounceFn);
    }, [charactersList.constraintData.searchTerm]);

    const handleSearch=(value)=>{
        if(!value){
            dispatch(setConstraintDataCharactersList({constraintDataName:'searchTerm',constraintDataValue:'empty'}))
        }else
            dispatch(setConstraintDataCharactersList({constraintDataName:'searchTerm',constraintDataValue:value}))
    }
    const onSelectCharacter=(value)=>{
        dispatch(setConstraintDataCharactersList({constraintDataName:'searchTerm',constraintDataValue:''}))

        getEpisodeDataCall({page:1,filter: { name:value}});
    }
    return(
            <AutoComplete
                onSearch={handleSearch}
                className={"AutoComplete-MediaList"}
                dropdownClassName={'dropdownClassName-Autocomplete'}
                options={charactersList.CharacterNameList}
                onSelect={onSelectCharacter}

               >
                <Input.Search loading={charactersList.constraintData.charactersListLoadingSearch} className={'ant-select-selector'} size="large" placeholder="Choose a specific character" />
            </AutoComplete>
    )
}