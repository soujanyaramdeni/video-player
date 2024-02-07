// import axios from "axios"
// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { addProductAction, productApiError, productListAction, productListing } from "../redux/products/action"

// export const ProductListing = () => {
//     const dispatch = useDispatch()
//     const productDetails = useSelector(state => state.productData)
//     const [loader, setLoader] = useState(false)
//     console.log(productDetails)
//     useEffect(() => {

//     }, [])
//  const loadProducts = () => {
//         dispatch(ProductListing(
//             () => {
//                 alert("success")
//             },
//             () => {
//                 alert("error occured")
//             },
//             () => {
//                 setLoader(true)
//             },
//             () => {
//                 setLoader(false)
//             }
//         ))
//     }
//     // console.log(load)
//     return (
//         <>
//             <h3>products</h3>
//             {/* {
//                 loader ?
//                     <Audio
//                         height="80"
//                         width="80"
//                         radius="9"
//                         color="green"
//                         ariaLabel="three-dots-loading"
//                         wrapperStyle
//                         wrapperClass
//                     /> :
//                     <h2>Products loaded</h2>
//             } */}
//         </>
//     )
// }
