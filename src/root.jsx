import React, { Component } from "react";
import App from "./App.jsx";
export default class Root extends Component {
  constructor(props) {
    super(props);

    console.log("constractr");
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("componentDidmaut");
  }
  componentWillMout() {
    console.log("componentwul");
  }
  // shouldComponentUpdate() {
  //   console.log("est");
  //   return true;
  // }
  render() {
    console.log("render");

    return (
      <div>
        vas
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
        <App />
      </div>
    );
  }
}

// import React, { useState } from "react";

// const Root = () => {
//   const [count] = useState(0);

//   return (
//     <div>
//       <h1>Hooks count: {(count, setCount)}</h1>
//       <button></button>
//     </div>
//   );
// };

// export default Root;
