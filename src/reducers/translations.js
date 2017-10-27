import { TRANSLATE_INPUT } from '../actions/translate';

export default function(state = [], action) {
  switch(action.type){
    case TRANSLATE_INPUT:
      return [...state, action.payload];
    default:
      return state;
  }
}