export const initialData = ()=>{

    const listCardMediaInfo=()=>{
        return(
            [{
                name:'',
                species:'',
                image:'',
            }]
        )
    }

    const CharacterNameList=()=>{
        return(
            [{
                name:'',
            }]
        )
    }
    const constraintData = () => {
        return (
            {
                listMediaCardLoading:true,
                currentPage:1,
                charactersListLoadingSearch:false,
                characterSelected:'',
                searchTerm:'',
            }
        )
    }
    return({
        constraintData,
        listCardMediaInfo,
        CharacterNameList
    })

}