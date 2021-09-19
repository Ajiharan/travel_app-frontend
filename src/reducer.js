export const initialState = {
  user: null,
  userInfo: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.user,
      };
    case "RESET_USER":
      return {
        ...state,
        user: null,
        userInfo: null,
      };
    case "GET_USER_INFO":
      return {
        ...state,
        userInfo: action.userInfo,
      };

    default:
      return { ...state };
  }
};
