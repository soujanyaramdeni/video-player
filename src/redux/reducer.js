// export const movie_tickets = {
//     totalTickets: 100,
//     filledTickets: 50,
//     unfilledTickets: 50,
//     holdTickets:2
// }
// export const movieReducer=(state=movie_tickets,action)=>{
//     switch(action.type){
//         case "buy_ticket":
//             return{...state,filledTickets:state.filledTickets+1,unfilledTickets:state.unfilledTickets-1}
//         case "hold_tickets":
//             return{...state,holdTickets:state.holdTickets+1}
//         default:
//             return state
//     }
// }