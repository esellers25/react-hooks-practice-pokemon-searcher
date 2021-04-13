import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onNewPokemon}) {
  const [name, setName] = useState("")
  const [hp, setHp] = useState(0)
  const [frontImage, setFrontImage] = useState("")
  const [backImage, setBackImage] = useState("")

  const formData = {
    name: name, 
    hp: parseInt(hp), 
    sprites: {
      front: frontImage,
      back: backImage
    }
  }

  function handleNewPokeSubmit(){
    fetch("http://localhost:3001/pokemon", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r =>r.json())
    .then(newPokemon => onNewPokemon(newPokemon))

  }
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleNewPokeSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
          fluid label="Name" 
          placeholder="Name" 
          name="name" 
          value={name}
          onChange={e => setName(e.target.value)}
          />
          <Form.Input 
          fluid label="hp" 
          placeholder="hp" 
          name="hp" 
          value={hp}
          onChange={e => setHp(e.target.value)}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={frontImage}
            onChange={e => setFrontImage(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={backImage}
            onChange={e => setBackImage(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
