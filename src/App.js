import "./App.css";
import HOME from "./components/home/HOME";

function App() {
  const imie = "world";

  return (
    <div className="App">
      <HOME text={imie} />
    </div>
  );
}

export default App;
