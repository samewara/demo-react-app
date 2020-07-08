import React, { Component } from "react";
 
class Counters extends Component {
  constructor(props) {
    super(props)

    this.state = {
        time : Date(Date.now()).toString(),
        delay : 200,
        start : Date(Date.now()).toString(),
        counter: 0
    }
  }

  componentDidMount() {
      this.interval = setInterval(() => 
        { 
          this.setState({
            time: Date(Date.now()).toString(),
            counter: this.state.counter+1
          })
        })
  };

  componentWillUnmount() {
      clearInterval(this.interval);
  };

  render() {
    return (
      <div>
          <h2>Timer!</h2>
          <hr></hr>
          <p>
              Counter started at: {this.state.start}
          </p>
          <hr></hr>
          <p>
              Counter: {this.state.counter}
          </p>
          <hr></hr>
          <p>
              Current Local Time: {this.state.time}
          </p>
          <hr></hr>
      </div>
    );
  }
}
 
export default Counters;