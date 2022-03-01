import logo from './WhitLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= {logo} className="App-logo" alt="logo" />
        <p>
          Behavioral Management Project
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to Begin
        </a>
      </header>
    </div>
  );
}

export default App;
