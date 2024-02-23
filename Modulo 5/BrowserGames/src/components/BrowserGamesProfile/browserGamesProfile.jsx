import "./browserGamesProfile.css";
import DropDownMenu from "../DropDownMenu/dropDownMenu";
import GamesContainer from "../GamesContainer/gamesContainer";
import Card from "../CardGame/cardgame";

const BrowserGamesProfile = () => {
  return (
    <section>
      <div className="browser-games-container">
        <h2 className="browser-games-container-title">Seus Browser Games</h2>
        <DropDownMenu />
      </div>
      <div className="teste-container">
        <GamesContainer />        
      </div>
    </section>
  );
};

export default BrowserGamesProfile;
