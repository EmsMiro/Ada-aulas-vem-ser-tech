import "./home.css";
import Icon from "../IconsList/icon";

const Home = () => {
  return (
    <section className='home'>
    <div className="container">
        <h1>Best Browser Games</h1>
        <div className="subtitle-container">
            <Icon name='arcade'/>
            <h3 className="subtitle">Curta, comente e indique</h3>
        </div>        
    </div>
</section>
  );
};

export default Home;
