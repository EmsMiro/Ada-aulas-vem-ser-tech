import "./browserGamesProfile.css";
import DropDownMenu from "../DropDownMenu/dropDownMenu";

const BrowserGamesProfile = () => {
  return (
    <section className="browser-games-container">
      <h2 className="browser-games-container-title">Seus Browser Games</h2>
      <DropDownMenu />
    </section>
  );
};

export default BrowserGamesProfile;
