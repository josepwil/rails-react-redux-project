import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    console.log('hi')
    console.log(this.props.greeting)
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
