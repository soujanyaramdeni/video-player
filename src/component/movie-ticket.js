// import React from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { buyTicketAction, holdTicketAction } from "../redux/action"


// const MovieTickets=()=>{
//     const dispatch=useDispatch()
//     const reduxState=useSelector(state=>state.movieData)
//     const productState=useSelector(state=>state.productData)
//     console.log(productState)
//     const buyTicket=()=>{
//        dispatch(buyTicketAction())
//     }
//     const holdTicket=()=>{
//         dispatch(holdTicketAction())
//      }
   
//     return(
//         <div>
//             <h2>Total Tickets{reduxState.totalTickets}</h2>
//             <h4>filled Tickets{reduxState.filledTickets}</h4>
//             <h4>unfilled Tickets{reduxState.unfilledTickets}</h4>
//             <h4>hold Tickets{reduxState.holdTickets}</h4>
//             <button  onClick={buyTicket}>    BUY-TICKET</button>
//             <button  onClick={holdTicket}>    HOLD-TICKET</button>
//         </div>
//     )
// }
// export default MovieTickets