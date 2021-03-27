const REQUEST_SIGNUP_SUCCESS = 'auth/REQUEST_SIGNUP_SUCCESS';
const REQUEST_LOGIN_SUCCESS = 'auth/REQEUST_LOGIN_SUCCESS';
const LOGOUT = 'auth/LOGOUT';

export const requestSignupSuccess = (token) => ({
  type: REQUEST_SIGNUP_SUCCESS,
  token,
});

export const requestLoginSuccess = (token) => ({
  type: REQUEST_LOGIN_SUCCESS,
  token,
});

export const logout = () => ({
  type: LOGOUT,
});

const initialState = {
  token: null,
  isLogin: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SIGNUP_SUCCESS:
    case REQUEST_LOGIN_SUCCESS:
      const { token } = action;

      return {
        ...state,
        token,
        isLogin: true,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isLogin: false,
      };
    default:
      return state;
  }
}
