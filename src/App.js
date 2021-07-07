import logo from './logo.svg';
import './App.css';

function Food({ name }) {
  return <h1> I like {name} </h1>;
}

function App() {
  return (
  <div>
   <Food name="potato" />
   <Food name="suishi" />
  </div>
  );
}


export default App;
