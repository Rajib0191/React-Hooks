export const initialState = {
  loading: true,
  post: {},
  error: "",
};
const FetchReducer = (state, action) => {
  //   console.log(state);
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    }
    case "FETCH_ERROR": {
      return {
        loading: false,
        post: {},
        error: "Something Went wrong!",
      };
    }
    default: {
      return state;
    }
  }
};
export default FetchReducer;
