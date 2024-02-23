import "./headerprofile.css";
import { NavLink } from "react-router-dom";
import Icon from "../IconsList/icon";

const HeaderProfile = () => {
  return (
    <header>
      <Icon name="logo" />
      <nav>
        <ul className="navList">
          <li>
            <NavLink to="/" className="NavLink">
              Home
            </NavLink>
          </li>
          <li>Meus dados</li>
          <button className="btn-logout">Logout</button>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderProfile;
