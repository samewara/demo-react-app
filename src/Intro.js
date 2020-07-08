import React, { Component } from "react";
 
class Introduction extends Component {
  render() {
    return (
      <div>
        <h2>Hola!</h2>
        <p>This is a ReactJS based sample application</p>
        <p>built for learning and explaining demo use to beginners.</p>
        <br />
        <line></line>
        <p>------- </p>
        <p>
        <a
          className="App-link"
          href="https://learnbyinsight.com"
          target="_blank"
        >
          Sandeep Mewara
        </a></p>
      </div>
    );
  }
}
 
export default Introduction;