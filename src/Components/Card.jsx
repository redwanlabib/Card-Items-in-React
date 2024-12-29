
import { FaStopwatch } from "react-icons/fa6";
import { GiForkKnifeSpoon } from "react-icons/gi";

import "../Style/Style.css"
const Card = ({ image, text , Text , Text2}) => {
  return (
    <div className="card_contain">
        <div className="card">
            <img src={image} alt="image" />
            <h3>{text}</h3>
            <div className="time">
              <p className="color"><FaStopwatch className="Emoji"/> {Text2}</p>
              <span className="color"><GiForkKnifeSpoon className="Emoji"/>{Text}</span>
            </div>
        </div>
    </div>
  )
}

export default Card