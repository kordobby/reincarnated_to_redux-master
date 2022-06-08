import { createSlice } from '@redux/toolkit';

export const postSlice = createSlice({
  name : 'post',
  initialState : {
    lists : [],
    loading : false,
    error : null
  },
  reducers : {
    // add action
    addPost : function (state, {type, payload}) {
      state.lists.push(payload);
    }
  }
})