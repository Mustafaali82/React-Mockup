import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Copyright from "./components/copyright";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Copyright></Copyright>
    </div>
  );
}

export default App;
