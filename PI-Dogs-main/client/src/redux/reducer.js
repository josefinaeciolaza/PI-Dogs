import { GET_BY_NAME, GET_DETAIL, GET_DOGS, CLEAR_DETAIL,GET_TEMPERAMENTS } from "./action";

const inicialState = {
    dogs: [],
    allDogs: [],
    temperaments: [],
    detail: []
};

const reducer = (state = inicialState, action) =>{
    switch(action.type){
        case GET_DOGS:
         return{
            ...state,
            dogs: action.payload,
            allDogs: action.payload
        };
        case GET_BY_NAME:
          return {
            ...state,
            allDogs: action.payload
          };
        case GET_DETAIL:
          return{
            ...state,
            detail: action.payload
          };      
        case CLEAR_DETAIL:
          return {
            ...state,
            detail: [],
          };
        case GET_TEMPERAMENTS:
          return{
            ...state,
            temperaments: action.payload
          };
        default: 
        return state;
    }
};

export default reducer;
