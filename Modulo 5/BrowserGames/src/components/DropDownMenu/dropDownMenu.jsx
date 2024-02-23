import "./dropDownMenu.css";
import { useState } from "react";

const DropDownMenu = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <select
        className="dropdown"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="">Selecione...</option>
        <option value="Classificados">Games Classificados</option>
        <option value="Comentados">Games Comentados</option>
      </select>
    </div>
  );
};

export default DropDownMenu;
