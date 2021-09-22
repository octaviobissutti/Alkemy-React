import axios from "axios";


import {
  BASE_URL,
  ACCESS_TOKEN,
  GET_BY_ID,
  GET_BY_NAME,
  ERROR_HERO,
  ERROR_TEAM,
  SAVE_TEAM

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

//ADD HERO

export const addHeroToTeamAction = (id) => (dispatch, getState) => {
  console.log("id de afuera", id);
  const { heroes, team } = getState();
  const heroSelect = heroes.filter((hero) => hero.id === id);
  console.log(heroSelect, "hero");
  //checkear si hay 6 integrantes
  if (team.length === 6) {
    dispatch({
      type: ERROR_TEAM,
      payload: "Your team is complete",
    });
    setTimeout(() => {
      dispatch({
        type: ERROR_TEAM,
        payload: "",
      });
    }, 1000);
    return;
  }

  const checkHeroTeam = team.map((hero) => {
    return hero.id === id;
  });
  if (checkHeroTeam.includes(true)) {
    dispatch({
      type: ERROR_TEAM,
      payload: "Hero is already in your team",
    });
    setTimeout(() => {
      dispatch({
        type: ERROR_TEAM,
        payload: "",
      });
    }, 1000);
    return;
  } else {
    //control 3 good heroes
    if (heroSelect[0].biography.alignment === "good") {
      const control3good = team.filter(
        (hero) => hero.biography.alignment === "good"
      );
      if (control3good.length === 3) {
        dispatch({
          type: ERROR_TEAM,
          payload: "To many GOOD Heroes",
        });
        setTimeout(() => {
          dispatch({
            type: ERROR_TEAM,
            payload: "",
          });
        }, 1000);
        return;
      } else {
        dispatch({
          type: SAVE_TEAM,
          payload: heroSelect[0],
        });
      }
    } else if (heroSelect[0].biography.alignment === "bad") {
      //control 3 bad heroes
      const control3bad = team.filter(
        (hero) => hero.biography.alignment === "bad"
      );
      if (control3bad.length === 3) {
        dispatch({
          type: ERROR_TEAM,
          payload: "To many BAD Heroes",
        });
        setTimeout(() => {
          dispatch({
            type: ERROR_TEAM,
            payload: "",
          });
        }, 1000);
        return;
      } else {
        dispatch({
          type: SAVE_TEAM,
          payload: heroSelect[0],
        });
      }
    } else {
      dispatch({
        type: SAVE_TEAM,
        payload: heroSelect[0],
      });
    }
  }
};