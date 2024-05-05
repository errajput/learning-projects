import { useState } from 'react';

import './App.css';

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 5;
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Counter adding</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p> footer:{counter}</p>
    </>
  );
}

export default App;
