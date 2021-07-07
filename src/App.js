import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true
  };
  getMovies = async () => {
    const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
  };

  componentDidMount() {
    this.getMovies();
  }
  /* axios.get? */

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"} </div>;
  }
}

export default App;
