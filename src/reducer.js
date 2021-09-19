export const initialState = {
  user: null,
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
      };

    default:
      return { ...state };
  }
};
