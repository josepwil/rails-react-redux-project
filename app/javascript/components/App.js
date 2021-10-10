import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";

import HelloWorld from "./HelloWorld";

import store from "../redux/configureStore";



function App() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => "Home!"} />
            <Route path="/hello" render={() => <HelloWorld greeting="Friend"/>} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }

export default App
