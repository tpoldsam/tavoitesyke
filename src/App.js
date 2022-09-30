
import { useState } from 'react';
import './App.css';

function App() {

  const [age, setAge] = useState('')
  const [lower, setLower] = useState(0)
  const [upper, setUpper] = useState(0)

  function calculate(e) {
    e.preventDefault()
    setLower((220 - age) * 0.85)
    setUpper((220 - age) * 0.65)
  }

  return (
    <div id="content">

      <div>
      <h2>Heart rate limits calculator</h2>
      </div>
      
      <form onSubmit={calculate}>
        <div>
          <label>Age</label>
          <input value={age} onChange={e => setAge(e.target.value)}/>
        </div>

        <div>
          <label>Heart rate limits</label>
          <output>{upper.toFixed(0)} - {lower.toFixed(0)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
