import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';


// Use function for stateless components (no need to be changed)
// const Hello = (props) => {     // Here props was passed directly as parametre
//   return (
//     <div className="container">
//       <h1>Hello, {props.name}</h1>    //No need for this.props, just use props
//     </div>
//   );
// };

// Use class for stateful components (need to be changed at some point)
class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      counter: 0
    };
  }

  handleClick = () => {
    // TODO: change the state
    this.setState({  // it changes the state clicked and it triggers render
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  }

  render() {
    // Build and return HTML
    return ( // Need to use this.props to access parameters
      <div className={this.state.clicked ? 'clicked' : null}
      onClick={this.handleClick}>
        Hello
        {this.props.name}
        {this.state.counter}
      </div>
    );
  }
}


const root = document.getElementById('root');
console.log(root);

if (root) {
  ReactDOM.render(
    <Hello name="Savina" />,
    root
  );
}
