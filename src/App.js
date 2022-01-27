import logo from './logo.svg';
import './App.css';
import Comp from './Comp';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
     <h1>Welcome</h1>
     <Comp name="Sudais" status="Alive" savings="25000 USD"/>
    </div>
  );
}

export default App;
