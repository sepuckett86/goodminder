import { GET_STORED_PROMPTS } from '../actions/types';

// These are the prompts that will be displayed to the user in add prompt
const initialState = [];
export default function(state = initialState, action) {
  switch(action.type) {
    case GET_STORED_PROMPTS:
      return action.payload;
    default:
      return state;
  }
}
