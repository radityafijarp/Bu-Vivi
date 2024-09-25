import logo from './logo.svg';
import './App.css';
import { Name } from './components/name';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World</p>
        <Name 
        name={"Dinda"}/>
        <Name
        name={"Cika"}/>
        <Name
        name={"Rudi"}/>
        <Name
        name={"Ben"}/>
      </header>
    </div>
  );
}

export default App;
