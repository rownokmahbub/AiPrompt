import { request, gql } from "graphql-request";
import { Result } from "postcss";
const Master_URL= "https://api-ap-south-1.hygraph.com/v2/cllkqbjmc061m01um2av07w7k/master"
export const getCarList =async()=>{
   const query = gql`
     query CarLists {
       carLists {
         carAvg
         createdAt
         id
         name
         price
         publishedAt
         updatedAt
         image {
           url
         }
         carType
         carBrand
       }
     }
   `;
const result = await request(
  Master_URL,
  query
);
return result
}
export const getStoreLocations = async ()=>{
  const query = gql`
    query CarLists {
      storesLocations {
        address
      }
    }
  `;
  const result = await request(Master_URL,query);
}