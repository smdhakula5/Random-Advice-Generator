import React, { useState } from 'react';
import './styles.css';

function App() {
  const [advice, setAdvice] = useState("");

  async function getQuote() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="App">
      <div className="box">
        {advice && <h1>{advice}</h1>}
        <button onClick={getQuote}>Get Advice</button>
      </div>
      <div id="footer">
        Made by Sumedh Akula
      </div>
    </div>
  );
}

export default App;

