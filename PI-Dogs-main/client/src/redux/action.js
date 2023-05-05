import axios from 'axios';

export const GET_DOGS = "GET_DOGS";
export const GET_BY_NAME = "GET_BY_NAME"
export const GET_DETAIL = "GET_DETAIL";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const CLEAR_DETAIL = "CLEAR_DETAIL";

export function getDogs (){
    return async function(dispatch){
        const response = await axios('http://localhost:3001/dogs')
        return dispatch({
            type: 'GET_DOGS',
            payload: response.data
        })
    }
}

export function getByName(name){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/dogs?name=${name}`)
        return dispatch({
            type: 'GET_BY_NAME',
            payload: response.data
        })
    }
}

export function getDetail(id){
    return async function(dispatch){
      try {
        const response = await axios(`http://localhost:3001/dogs/${id}`)
        console.log(response.data); // Agregar esta línea para imprimir en la consola
        return dispatch({
          type: 'GET_DETAIL',
          payload: response.data
        })
      } catch (error) {
        console.log(error);
      }
    }
  };

  export const clearDetail = () => ({
    type: "CLEAR_DETAIL",
  });

  export const getTemperaments = () => {
    return async function(dispatch){
      const response = await axios('http://localhost:3001/temperament')
      const tempeForm = response.data.map(element => element.name)
      return dispatch({
        type: 'GET_TEMPERAMENTS',
        payload: tempeForm
      })
    }
  };
  