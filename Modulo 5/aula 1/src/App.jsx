import "./App.css";
import Nav from "./assets/nav";
import Logo from "./assets/logo";
import Categories from "./assets/categories";
import SearchBar from "./assets/search-bar";
import CartLogo from "./assets/cart-logo";
import AsideSection from "./assets/aside-section";
import OfferProducts from "./offer-products";

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
        <div className="categories-nav">
          <Categories />
        </div>
        <SearchBar />
      </section>
      
      <div className="two-sections-container">
      <section className="Aside">
      <AsideSection />
      </section>

      <section className="products">
        <h2 className="title-section-products">Ofertas</h2>
        <OfferProducts />               
      </section>
      </div>
     
    </main>
  );
}

export default App;
