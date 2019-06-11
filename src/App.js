import React, { Component } from "react";
import "./App.css";
import rootReducer from "./reducers/reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import TimerContainer from './components/TimerContainer';
class App extends Component {
 
  render() {
    return (
      <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
      <div className="App">
        <TimerContainer/>
      </div>
      </Provider>
    );
  }
}
export default App;