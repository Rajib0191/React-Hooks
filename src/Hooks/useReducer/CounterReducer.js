export const Reducerstate = {
  initialState: 0,
  CounterState: 0,
};

export const CounterReducer = (state, action) => {
  //   console.log(state);
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        initialState: state.initialState + 1,
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        initialState: state.initialState - 1,
      };
    }

    case "RESET": {
      return Reducerstate;
    }

    case "INCREMENT_BY_5": {
      return {
        ...state,
        CounterState: state.CounterState + action.payload.value,
        initialState: state.CounterState + action.payload.value,
      };
    }

    default: {
      return state;
    }
  }
};
