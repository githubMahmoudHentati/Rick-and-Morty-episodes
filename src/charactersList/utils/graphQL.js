
import gql from "graphql-tag";

export const graphQLSchema = ()=> {

    const getEpisodesInfoQuery = gql`
        query($page:Int,$filter:FilterCharacter){
              characters(page:$page,filter:$filter){
                info {
                  count
                }
                results {
                  name
                  species
                  image
                }
              }
           
            }
    `;



    return({
        getEpisodesInfoQuery,
    })
}