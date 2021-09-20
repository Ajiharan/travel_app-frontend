export const initialState = {
  user: null,
  userInfo: null,
  guideDetails: [],
  userDetails: [],
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
        guideDetails: [],
        userDetails: [],
      };
    case "GET_USER_INFO":
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case "GET_GUIDE_DETAILS":
      return {
        ...state,
        guideDetails: action.guideDetails,
      };
    case "GET_USER_DETAILS":
      return {
        ...state,
        userDetails: action.userDetails,
      };

    default:
      return { ...state };
  }
};
