const initialState = {
    team: [],
    getDetails: {}
}
 const rootReducer = (state = initialState, action) => {
  switch(action.type) {
      case "GET_BY_ID":
          return {
              ...state,
              getDetails: action.payload
          }
       case "GET_BY_NAME":
           return {
             ...state,
             team: action.payload
           }   
  
  
          default : 
              return state;
}
  
}

export default rootReducer;