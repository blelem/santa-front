import { REQUEST_WISHES_SUCCESS } from '../actions'

function rootReducer(state = {wishes:[]}, action) {
  console.log("Reducing", action)
  switch (action.type) {
    case REQUEST_WISHES_SUCCESS :
    console.log("Wishes", action)
      return {
        ...state,
        wishes: action.wishes,
      }
    default:
      return state
  }
}

export default rootReducer
