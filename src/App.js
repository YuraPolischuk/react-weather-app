import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by Yurii Polihchuk and is open-sourced on{" "}
        <a href="https://github.com/YuraPolischuk/react-weather-app">GitHub</a>{" "}
        and hosted on Netlify
      </footer>
    </div>
  );
}

export default App;
