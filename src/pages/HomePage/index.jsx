import { useState } from 'react';
import { TShirt } from '../../components/TShirt';
import { TShirtSetup } from '../../components/TShirtSetup';
import './style.css';

export const HomePage = () => {

  const [typeOfTshirt, setTypeOfTshirt] = useState("normalShortSleeve" );
  const [colorOfTshirt, setColorOfTshirt] = useState("yellow");
  const [textOnTshirt, setTextOnTshirt] = useState("Ahoj světe");

  const changeOftype = (type) => {
    setTypeOfTshirt(type)
  }

  const changeOfColor = (color) => {
    setColorOfTshirt(color)
  }

  const changeOfText = (text) => {
    setTextOnTshirt(text)
  }

  return (
    <div className="container">
      <div className="tshirt-panel">
        <div className="tshirt-panel__tshirt">
          <TShirt type={typeOfTshirt} color={colorOfTshirt} print={textOnTshirt}/>
        </div>
        <div className="tshirt-panel__setup">
          <h2>Možnosti:</h2>
          <TShirtSetup onTypeChange={changeOftype} onColorChange={changeOfColor} onPrintChange={changeOfText}/>
        </div>
      </div>
    </div>
  );
};
