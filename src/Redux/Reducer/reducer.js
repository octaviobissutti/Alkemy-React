import {
 GET_BY_ID,
 GET_BY_NAME
} from '../Constants/constants'




const initialState = {
    team: [],
    heroes: [],
    loading: false,
    error: "",
    getDetails: {}
}


 const rootReducer = (state = initialState, action) => {
  switch(action.type) {
      case GET_BY_ID:
          return {
              ...state,
              getDetails: action.payload
          }
       case GET_BY_NAME:
           return {
             ...state,
             heroes: action.payload
           }   
  
  
          default : 
              return state;
}
  
}

export default rootReducer;