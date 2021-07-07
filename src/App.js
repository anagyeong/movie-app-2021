import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000)
    /* JS구문 */
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"} </div>;
  }
}

export default App;
