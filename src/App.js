import angel from './angel.svg';
import './App.css';

console.log(fetch('/db').then((data) => console.log(data)))

function App() {
  return (
    <div className="App">
      <h1>How many angels are dancing on the head of a pin?</h1>
      <img src={angel} alt="angel"/>
    </div>
  );
}

export default App;
