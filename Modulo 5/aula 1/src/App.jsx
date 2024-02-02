import "./App.css";
import Nav from "./assets/nav";
import Logo from "./assets/logo";
import Categories from "./assets/categories";
import SearchBar from "./assets/search-bar";
import CartLogo from "./assets/cart-logo";

function App() {
  return (
    <main>
      <section className="home">
        <header>
          <Logo />
          <Nav />
          <CartLogo />
        </header>
        <h1>Radiola</h1>
        <h3>A sua lojinha na web dos clássicos do passado</h3>
        <Categories />
        <SearchBar />
      </section>
      <section className="products">
        
      </section>
    </main>
  );
}

export default App;
