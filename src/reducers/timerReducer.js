import { actionTypes } from "../actions/actionTypes";
import converters from '../Util/timeConverts';

const { convertSecs } = converters;


export default function (state = {
  display: {hrs: 0, mins: 0, secs: 0},
  countSecs: 0,
  isPause: false,
  isInTimer: false,
}, action) {

  const newState = state;
  switch (action.type) {
    case actionTypes.START:
      state.countSecs = action.payload;
      state.isInTimer = true;
      state.display = convertSecs(action.payload);

      return Object.assign({}, state, newState);
    case actionTypes.PAUSE:
      state.isPause = true;

      return Object.assign({}, state, newState)
    case actionTypes.RESUME:
      state.isPause = false;

      return Object.assign({}, state, newState)
    case actionTypes.RESET:
      state.isInTimer = false;

      return Object.assign({}, state, {
        display: { hrs: 0, mins: 0, secs: 0 },
        countSecs: 0,
        isPause: false,
        isInTimer: false,
      });
    case actionTypes.DECREMENT:
      const decremented = action.payload -= 1;
      state.display = convertSecs(decremented);
      state.countSecs = action.payload;

      return Object.assign({}, state, newState)
    default:
      return state;
   }
}
