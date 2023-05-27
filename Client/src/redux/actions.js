import axios from 'axios';
import { GET_CHARACTERS, ADD_FAVORITES, REMOVE_FAVORITES } from "./actions-type";

const getCharacters = () => {
    return async function (dispatch) {
        try {
            let response = await axios.get("https://rickandmortyapi.com/api/character");
            return dispatch({ type: GET_CHARACTERS, payload: response.data.results });
        } catch (error) {
            console.log(error);
        }
    }
};


export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return (dispatch) => {
      axios.post(endpoint, character).then(({ data }) => {
         return dispatch({
            type: 'ADD_FAV',
            payload: data,
         });
      });
   };
};

export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return (dispatch) => {
      axios.delete(endpoint).then(({ data }) => {
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
      });
      });
   };
};



export default getCharacters;