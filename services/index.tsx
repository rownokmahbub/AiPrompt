import { request, gql } from "graphql-request";

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
  "https://api-ap-south-1.hygraph.com/v2/cllkqbjmc061m01um2av07w7k/master",
  query
);
return result
}