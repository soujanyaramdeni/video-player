
// import axios from "axios";
// import { reduxStore } from "../store";

// const dispatch=reduxStore.dispatch
// export const ProductListing=(success,failure,loadingStarted,stopLoader)=>{
//     return async()=>{
//         try{
//             loadingStarted()
//             dispatch({
//                 type:"api_started"
//             })
//             axios.get("https://fakestoreapi.com/products")
//             .then(response=>{
//                 success()
//                 dispatch({
//                     type:"all_products_success",
//                     payload:response.data 
//                 })
//             })
//             .catch(response=>{
//                 failure()
//                 dispatch({
//                     type:"api_error"
//                 })
//             })
//         }
//         catch(err){
//             console.log(err)
//         }finally{
//             console.log("finally")
//             stopLoader()
//         }
//     }
// }