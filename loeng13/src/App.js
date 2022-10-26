import logo from './logo.svg';
import './App.css';

function Pealkiri() {
  return (
    <h1>Pealkiri</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Pealkiri />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          selline lugu
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
