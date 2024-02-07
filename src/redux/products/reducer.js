// const initialState = {
//     all_products: [],
//     cart_products: [],
//     products_load_success:false,
//     error:null,
//     api_call_started:false
// }
// const productReducer = (state = initialState, action) => {
//    switch(action.type){
//     case "api_started":
//         return{...state,api_call_started:true}
//         case "all_products_success":
//        const newArray=action.playload.map(callback)
//        function callback(ele){
//         return{...ele,count:0}
//        }
//        return{...state,all_products:newArray,products_load_success:true} 
//        case "api_error":  
//        return{...state,error:"error occured"}  
//        case "add_to_cart":
//         return{...state,cart_products:["item10"]}
//         default:
//             return state
//    }
// }
// export default productReducer