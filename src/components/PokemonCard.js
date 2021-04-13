import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const {sprites, name, hp} = pokemon
  const {front, back} = sprites
  const [showFront, setShowFront] = useState(true)

  function handleImageClick(){
    setShowFront(showFront => !showFront)
  }

  return (
    <Card>
      <div onClick={handleImageClick}>
        <div className="image">
          <img src={showFront ? front : back}
          alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
