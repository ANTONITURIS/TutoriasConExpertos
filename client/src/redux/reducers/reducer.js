import { GET_TECNOLOGIAS } from '../actions/actions';
const INITIAL_STATE = {
  tecnologias: [],

}

export default function rootReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case GET_TECNOLOGIAS:
      return {
        ...state,
        categorieId: action.payload,
      };


    default:
      return INITIAL_STATE
  }

}