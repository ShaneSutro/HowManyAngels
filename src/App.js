import angel from './angel.svg';
import { Button } from '@material-ui/core'
import './App.css';
import { useState, useEffect } from 'react';

console.log(fetch('/db').then((data) => console.log(data)))

function App() {

  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch('/db')
      .then((data) => data.json())
      .then((response) => setCount(response[0].count))
  }, [])

  const changeCount = (by) => {
    fetch('/db', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({by})
    })
      .then(setCount(count + by))
  }

  return (
    <div className="App">
      <h2>How many angels are dancing on the head of a pin?</h2>
      <img src={angel} alt="angel"/>
      <div>
        <h1>{count}</h1>
      </div>
      <div className="buttons">
        <Button variant="contained" color="default" onClick={() => changeCount(-1)}>-</Button>
        <Button variant="contained" color="default" onClick={() => changeCount(1)}>+</Button>
      </div>
    </div>
  );
}

export default App;
