import * as type from "./actionType.js";

const RootReducer = (state, action) => {
  switch (action.type) {
    case type.INCREMENT:
      return { firstCounter: state.firstCounter + 1 };
    case type.DECREMENT:
      return { firstCounter: state.firstCounter - 1 };
    case type.RESET:
      return { firstCounter: 0 };

    default:
      return state;
  }
};

export default RootReducer;
