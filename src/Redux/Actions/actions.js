import axios from "axios";


import {
  GET_BY_ID,
  GET_BY_NAME,
  BASE_URL,
  ACCESS_TOKEN,

} from '../Constants/constants'

//GET BY ID
export const findById = (id) => async (dispatch) => {
  try {
    const apiCall = await axios.get(`${BASE_URL}${ACCESS_TOKEN}/${id}`);
    const res = apiCall.data;
    console.log(res);
    dispatch({
      type: GET_BY_ID,
      payload: res,
    });
  } catch (err) {
    console.log(err);
  }
};

//GET BY NAME
export const searchByName = (value) => async (dispatch) => {
  console.log('NAME: ', value);
    try {
      const { heroName } = value;
    const getName = await axios.get(`${BASE_URL}${ACCESS_TOKEN}/search/${heroName}`);
    const res = getName.data.results;
    console.log(res);
    dispatch({
        type: GET_BY_NAME,
        payload: res
    })
    } catch(err) {
        console.log(err)
    }
}




