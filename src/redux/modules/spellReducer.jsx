/* Action Type */
const ADD_SPELL = 'spellReducer/ADD_SPELL';
const DEL_SPELL = 'spellReducer/DEL_SPELL';

/* Action Function */
export const addSpell = (payload) => {
  return { type : ADD_SPELL, payload}
};

export const delSpell = (payload) => {
  return { type : DEL_SPELL, payload } 
};

/* Init State */
const initialState = {
  list : []
}

/* Reducer */
export default function spellReducer( state = initialState, action ) {
  console.log(action);
  switch (action.type) {
    case ADD_SPELL :
      return { ...state, list : [ ...state.list, action.payload ] }
    case DEL_SPELL :
      return { list : state.list.filter((value, index) => index !== action.payload)}
    default :
      return state;
  }
}