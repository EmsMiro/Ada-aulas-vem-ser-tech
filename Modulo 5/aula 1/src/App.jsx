import "./App.css";
import Nav from "./assets/nav";
import Logo from "./assets/logo";

function App() {
  return (
    <main>
      <section className="home">
        <header>
          <Logo />
          <Nav />
        </header>
        <h1>Radiola</h1>
      </section>
    </main>
  );
}

export default App;
