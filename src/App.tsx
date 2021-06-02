import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [verified, setVerified] = useState(false);
  const [attempts, setAttempts] = useState(4);

  return (
    <div className="App">
      <h1>Super secret site</h1>
      {attempts === 0 ? (
        <h1>Yeah sorry but you ran out of attempts!</h1>
      ) : (
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
              if (password === '1900') {
                setVerified(true);
              } else {
                setAttempts(attempts - 1);
                alert(`WRONG PASSWORD!! YOU HAVE ${attempts} MORE ATTEMPTS`);
              }
            }}
            className="btn"
          >
            Gimme the secret link!
          </button>
        </form>
      )}
      {verified && (
        <p>
          SUPER SECRET LINK:{' '}
          <a href="https://drive.google.com/file/d/1LW5MlBN8A3L2ZP2iu-jrICTcdW9OQphw/view?ts=60b73771">
            https://drive.google.com/file/d/1LW5MlBN8A3L2ZP2iu-jrICTcdW9OQphw/view?ts=60b73771
          </a>
        </p>
      )}
    </div>
  );
}

export default App;
