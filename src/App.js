import './App.css';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import UserDetails from './FinalProject/project';
import showProducts, { Shop } from './FinalProject/Components/Shop'
import store from './Redux/store';



  function App() {
  // Functions
  return (
  <div >
    <header className="App-header">
      <a1>Hi, React</a1>
      {/* <button onClick={ShowProducts}>show data</button> */}
      <Provider store={store}>
        {<showProducts></showProducts>}
      </Provider>
      {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </header>
  </div>

  );
}

  export default App;
