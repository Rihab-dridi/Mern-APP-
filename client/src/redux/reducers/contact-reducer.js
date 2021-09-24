import { FETCH } from "../action-types/contact-action-types"

const initialState={
    contacts:[]
}
export const contactReducer=(state=initialState, action )=>{
switch (action.type) {
  case FETCH: return {
      ...state,
      contacts:action.payload
  }

    default:return state
       
}
}