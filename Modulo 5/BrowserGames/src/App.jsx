import "../src/App.css";
import Header from "./components/Header/header";
import Home from "./components/SectionHome/home";
import Aside from "./components/Aside/aside";
import GamesContainer from "./components/GamesContainer/gamesContainer";

function App() {
  return (
    <>
      <Header />
      <Home />      
      <main>
        <Aside />
        <GamesContainer />
      </main>
    </>
  );
}

export default App;
