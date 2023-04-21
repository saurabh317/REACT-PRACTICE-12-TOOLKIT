// import  {legacy_createStore as createStore} from "redux";


// //setting up the reducer which is responsible for the state change
// const counterReducer = (state = { counter: 0 , showToggle: true}, action) =>{
// if (action.type === "increment") {
//   return {
//     counter : state.counter + 1,
//     showToggle : state.showToggle
//   }
// }

// if (action.type === "decrease") {
//   return {
//     counter : state.counter - action.payload,
//     showToggle : state.showToggle
//   }
// }

// if (action.type === "decrement") {
//   return{
//     counter : state.counter - 1,
//     showToggle : state.showToggle
//   }
// }
// if (action.type === "toggle"){
//   return{
//     counter : state.counter,
//     showToggle : !state.showToggle
//   }
// }
// return state;

// }
 //setting up the store and making store aware about the reducer
// const store = createStore(counterReducer);






