import logo from './logo.svg';
import './App.css';
import StartGameButton from './components/StartGameButton';
import MainScreen from './components/MainScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Let's Play War</h1>
      </header>
      <div>
      
      <div>
        <MainScreen />
        </div>
      </div>
    </div>
  );
}

export default App;
