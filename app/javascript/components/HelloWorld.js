import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import { getThingsSuccess, getWordRequest, incrementScoreAction, updateWinner } from "../redux/actions/thingActions"

const HelloWorld = (props) => {
  const things = useSelector((state) => state.allThings.things)
  const word = useSelector((state) => state.allThings.word)
  const teamOneScore = useSelector((state) => state.scoreReducer.teamOne)
  const teamTwoScore = useSelector((state) => state.scoreReducer.teamTwo)
  const winner = useSelector((state) => state.scoreReducer.winner)
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

  const startGame = () => {
    setTimeout(function(){ alert("Times up!"); }, 90000);
    getWord()
  }

  const incrementScore = (team) => {
    if (team === "teamOne" && teamOneScore === 6) {
      dispatch(updateWinner("teamOne"))
      dispatch(incrementScoreAction(team))
    } else if (team === "teamTwo" && teamTwoScore === 6) {
      dispatch(updateWinner("teamTwo"))
      dispatch(incrementScoreAction(team))
    } else {
      dispatch(incrementScoreAction(team))
    }
  }
  
  const thingsList = things.map((thing, i) => {
    return <li key={i}>{thing.name} {thing.guid}</li>
  })

  // useEffect(() => {
  //   getWord()
  // }, [])

  return (
    <React.Fragment>
      Greeting: {props.greeting}
      <button className="getThingsBtn" onClick={() => getThings()}>getThings</button>
      <button className="getWordBtn" onClick={() => startGame()}>Start Game</button>
      <br />
      <ul>{ thingsList }</ul>
      <button className="incrementBtn" onClick={() => incrementScore("teamOne")}>Team one</button>
      <button className="incrementBtn" onClick={() => incrementScore("teamTwo")}>Team two</button>
      <ul>Team one: {teamOneScore}</ul>
      <ul>Team two: {teamTwoScore}</ul>
      <ul>{ word }</ul>
      <button className="getWordBtn" onClick={() => getWord()}>NEXT</button>
      <h1>{winner && `${winner} WINS!!`}</h1>
    </React.Fragment>
  );
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld;
