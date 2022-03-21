import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Component Updated");
      document.title = `clicked ${this.state.count} times`;
    }
  }
  //   componentWillUnmount() {

  //   }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          clicked {this.state.count} times
        </button>
        <div>
          <input
            type="tpext"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
      </div>
    );
  }
}

export default ClassComponent;
