import logo from './logo.svg';
import './App.css';
import GroceryList from './components/GroceryList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <GroceryList/>
    </div>
  );
}

export default App;
