# Redux Toolkit - ADD feature

```javascript
import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name : 'post',
  initialState : {
    lists : [],
    loading : false,
    error : null
  },
  reducers : {
    addPost : function 
  }
})