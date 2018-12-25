export const REQUEST_WISHES = 'REQUEST_WISHES'
export const REQUEST_WISHES_SUCCESS = 'REQUEST_WISHES_SUCCESS'
export const REQUEST_WISHES_FAILURE = 'REQUEST_WISHES_FAILURE'

export function fetchAllWishes(){
  return {
    type: REQUEST_WISHES 
  }
}

