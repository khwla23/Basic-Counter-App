export const initialState = {
  count: 0,
  step: 1,
  backgroundColor: "#f8dfdf",
  displayMessage: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "setStep":
      return { ...state, step: action.step };
    case "toggleBackground":
      return {
        ...state,
        backgroundColor:
          state.backgroundColor === "#f8dfdf" ? "#dff8df" : "#f8dfdf",
      };
    case "setDisplayMessage":
      return { ...state, displayMessage: action.displayMessage };
    default:
      throw new Error();
  }
};
