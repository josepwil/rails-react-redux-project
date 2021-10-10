import React, { useState } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import { getThingsSuccess } from "../redux/actions/thingActions"

const HelloWorld = (props) => {
  const things = useSelector((state) => state.allThings.things)
  const dispatch = useDispatch();


  const getThings = () => {
    console.log('getThings() Action!!')
      fetch('v1/things.json')
        .then(response => response.json())
        .then(json => dispatch(getThingsSuccess(json)))
        .catch(error => console.log(error));
  };
  
  const thingsList = things.map((thing, i) => {
    return <li key={i}>{thing.name} {thing.guid}</li>
  })

  return (
    <React.Fragment>
      Greeting: {props.greeting}
      <button className="getThingsBtn" onClick={() => getThings()}>getThings</button>
      <br />
      <ul>{ thingsList }</ul>
    </React.Fragment>
  );
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld;
