import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [verified, setVerified] = useState(false);

  return (
    <div className="App">
      <h1>Super secret site</h1>
      <form className="form" onSubmit={e => e.preventDefault()}>
        <h4>Enter the password:</h4>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="password-input"
          type="password"
        />
        <button
          onClick={() => {
            if (password === '252') {
              setVerified(true);
            }
          }}
          className="btn"
        >
          Gimme the secret link!
        </button>
      </form>
      {verified && (
        <p>
          SUPER SECRET LINK:{' '}
          <a href="https://drive.google.com/file/d/1LW5MlBN8A3L2ZP2iu-jrICTcdW9OQphw/view?usp=sharing">
            https://drive.google.com/file/d/1LW5MlBN8A3L2ZP2iu-jrICTcdW9OQphw/view?usp=sharing
          </a>
        </p>
      )}
    </div>
  );
}

export default App;
