export const initialData = ()=>{

    const CardMediaEpisodeInfoList=()=>{
        return(
            [{
                name:'',
                species:'',
                image:'',
                episodes:[]
            }]
        )
    }
    const charactersSameSpeciesList=()=>{
        return(
            []
        )
    }
    const constraintData = () => {
        return (
            {
                listMediaCardLoading:true,
                episodeCardHeight:null

            }
        )
    }
    return({
        constraintData,
        CardMediaEpisodeInfoList,
        charactersSameSpeciesList
    })

}