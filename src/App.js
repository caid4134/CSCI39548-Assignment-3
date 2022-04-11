//import logo from './logo.svg';
import './App.css';
// //<img src={logo} className="App-logo" alt="logo" />

import ReactDOM from 'react-dom' 

function App() {
  return (
    <div className="App">
        <h1>
          Bank of Hunter
        </h1>
        <h2>
          Welcome User. It is currently:
        </h2>
        
    </div>
  );
}

//Time component

function tick() {
  const element = (
      <p>{new Date().toLocaleTimeString()}</p>
  );
  ReactDOM.render(
    element,
    document.getElementById('time')
  );
}

setInterval(tick, 1000);


export default App;
