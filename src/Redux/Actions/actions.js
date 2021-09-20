import axios from "axios";
const BASE_URL = "https://superheroapi.com/api.php/";
const ACCESS_TOKEN = 10227175874088628;

//GET BY ID
export const findById = (id) => async (dispatch) => {
  try {
    const apiCall = await axios.get(`${BASE_URL}${ACCESS_TOKEN}/${id}`);
    const res = apiCall.data;
    console.log(res);
    dispatch({
      type: "GET_BY_ID",
      payload: res,
    });
  } catch (err) {
    console.log(err);
  }
};

//GET BY NAME
export const searchByName = (name) => async (dispatch) => {
    try {
    const getName = await axios.get(`${BASE_URL}${ACCESS_TOKEN}/search/${name}`);
    const res = getName.data;
    console.log(res);
    dispatch({
        type: "GET_BY_NAME",
        payload: res
    })
    } catch(err) {
        console.log(err)
    }
}
