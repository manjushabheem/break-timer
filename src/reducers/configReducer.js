import { actionTypes } from "../actions/actionTypes";

const config = (
    state = {
        name: "",
        time: 0
    },
    action
) => {
    let newName = state.name;
    let newTime = state.time;
    switch (action.type) {
        case actionTypes.ADD_CONFIG:
            newName = action.payload.name;
            newTime = action.payload.time;
            return Object.assign({}, state, {
                name: newName, time: newTime
            });
        default:
            return state;
    }
};

export default config;