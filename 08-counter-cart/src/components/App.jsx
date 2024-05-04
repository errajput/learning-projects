import { useState } from 'react';

import './index.css';

function App() {
  const [counts, setCounts] = useState([]);

  const insertProduct = () => {
    console.log('counts', counts);
    if (counts.length >= 10) {
      return;
    }
    counts.push(0);
    setCounts([...counts]);
  };
  const add = (index) => {
    const count = counts[index];
    console.log('add', index, count);
    if (count >= 5) {
      return;
    }
    counts[index] = count + 1;
    setCounts([...counts]);
  };

  const less = (index) => {
    const count = counts[index];
    console.log('less', index, count);
    if (count == 0) {
      return;
    }
    counts[index] = count - 1;
    setCounts([...counts]);
  };

  return (
    <div>
      <h1>Counter</h1>
      <button className='add-button' onClick={insertProduct}>
        Add Product
      </button>
      <div className='button-container'>
        {/* <h2>{JSON.stringify(counts)}</h2> */}
        {counts.map((count, index) => {
          return (
            <div className='button' key={index}>
              <button className='left-button' onClick={() => add(index)}>
                add
              </button>
              <h2>{count}</h2>
              <button className='right-button' onClick={() => less(index)}>
                less
              </button>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default App;
