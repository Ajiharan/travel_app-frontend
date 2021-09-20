export const initialState = {
  user: null,
  userInfo: null,
  guideDetails: [],
  userDetails: [],
  bookingDetails: [],
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
        bookingDetails: [],
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
    case "GET_BOOKING_DETAILS":
      return {
        ...state,
        bookingDetails: action.bookingDetails,
      };
    default:
      return { ...state };
  }
};
