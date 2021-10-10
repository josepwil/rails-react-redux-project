import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import { getThingsSuccess, getWordRequest } from "../redux/actions/thingActions"

const HelloWorld = (props) => {
  const things = useSelector((state) => state.allThings.things)
  const word = useSelector((state) => state.allThings.word)
  const dispatch = useDispatch();


  const getThings = () => {
    console.log('getThings() Action!!')
      fetch('v1/things.json')
        .then(response => response.json())
        .then(json => dispatch(getThingsSuccess(json)))
        .catch(error => console.log(error));
  };

  const getWord = () => {
    console.log('getting word')
    fetch('https://random-word-form.herokuapp.com/random/noun/')
      .then(response => response.json())
      .then(words => dispatch(getWordRequest(words[0])))
      .catch(error => console.log(error));
  }
  
  const thingsList = things.map((thing, i) => {
    return <li key={i}>{thing.name} {thing.guid}</li>
  })

  useEffect(() => {
    getWord()
  }, [])

  return (
    <React.Fragment>
      Greeting: {props.greeting}
      <button className="getThingsBtn" onClick={() => getThings()}>getThings</button>
      <br />
      <ul>{ thingsList }</ul>
      <ul>{ word }</ul>
    </React.Fragment>
  );
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld;
