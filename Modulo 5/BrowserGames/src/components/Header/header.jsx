import Icon from "../IconsList/icon";
import NavList from "../NavList/navlist";
import "./header.css";

const Header = () => {
  return (
    <header>
      <Icon name="logo" />
      <NavList />
    </header>
  );
};

export default Header;
