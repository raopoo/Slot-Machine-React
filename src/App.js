import './App.css';
import SlotMachine from "./slotMachine.js"

function App() {
  return (
    <div className="App">
      <div>
        <h1>React Test</h1>
        <SlotMachine s1={1} s2={5} s3={1} />
      </div>
    </div>
  );
}

export default App;
