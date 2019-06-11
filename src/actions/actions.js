import { actionTypes } from "./actionTypes";

export const start = seconds => {
  return {
    type: actionTypes.START,
    payload: seconds,
  };
};

export const addConfig = payload => {
  return {
    type: actionTypes.ADD_CONFIG,
    payload
  };
};

export const pause = () => {
  return {
    type: actionTypes.PAUSE,
    payload: null,
  };
};

export const resume = () => {
  return {
    type: actionTypes.RESUME,
    payload: null,
  };
};

export const reset = () => {
  return {
    type: actionTypes.RESET,
    payload: null,
  };
}

export const decrement = (seconds) => {
  return {
    type: actionTypes.DECREMENT,
    payload: seconds,
  }
}
