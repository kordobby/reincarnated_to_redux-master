import axios from 'axios';
import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode';
import { toBeEnabled } from '@testing-library/jest-dom/dist/matchers';

const cookies = new Cookies();


/* action type */
const LOGIN = 'login/LOGIN';

function login(payload) {
  console.log(payload);
  return { type : LOGIN, payload : payload }
}

/* THUNK */
export const loginFunc = (payload) => async (dispatch, getSTate, { history }) => {
  // payload === { id : "####", pw : "@@@@@" };
  console.log(payload);

  const { data : { token } } = await axios.get("http://localhost:3000/user");

  cookies.set("myJwt", token, { path : "/"});
  const { userId, name } = jwt_decode(token);
  cookies.set("userId", userId, {path : "/"});
  cookies.set("name", name, {path : "/"});

  // main page 로 이동
  history.push("/");

  // redux로 2차 dispatch
  dispatch(login({userId : userId, name : name}));
};

// initial State
const initialState = {
  isLogin : false,
  userId : "",
  name : ""
};

// reducer
export const loginReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case LOGIN :
      return {
        ...state,
        isLogin : true,
        userId : action.payload.userId,
        name : action.payload.name
      }
    default :
      return state;
  }
};

