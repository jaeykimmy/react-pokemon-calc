import './Input.css';
import { useState } from 'react';
import Axios from "axios"


function Input() {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonChosen, setPokemonChosen] = useState(false)
  const [pokemonSpeed, setPokemonSpeed] = useState('')
  const [pokemon, setPokemon] = useState({
          img: '',
  })
  let [nature, setNature] = useState('')
  let [ev, setEv] = useState(0)
  let [iv, setIv] = useState(0)
  let [level, setLevel] = useState(0)

let minusNature = ['brave', 'relaxed', 'quiet', 'sassy', 'minus'];
if (minusNature.includes(nature)) {
  nature = 0.9;
}
let plusNature = ['timid', 'naive', 'jolly', 'hasty', 'plus'];
if (plusNature.includes(nature)) {
  nature = 1.1;
}
let neutralNature = ['bashful', 'docile', 'serious', 'quirky', 'hardy', 'bold', 'lonely', 'adamant', 'naughty', 'impish', 'lax', 'calm', 'gentle', 'careful', 'mild', 'rash'];
if (neutralNature.includes(nature)) {
  nature = 1;
}
if (isNaN(nature)) {
  nature = 1;
}
if (isNaN(ev)) {
  ev = 255;
}
if (isNaN(level)) {
  level = 50;
}
if (isNaN(iv)) {
  iv = 31;
}
  const submitNameHandler = (event) => {
    setPokemonName(event.target.value)
  }

  const submitNatureHandler = (event) => {
    setNature(event.target.value)
  }
  const submitIvHandler = (event) => {
    setIv(event.target.value)
  }
  const submitEvHandler = (event) => {
    setEv(event.target.value)
  }
  const submitLevelHandler = (event) => {
    setLevel(event.target.value)
  }
  
  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(results => {
        setPokemon({
          img: results.data.sprites.front_default,
        })
        setPokemonChosen(true)
        setPokemonSpeed(results.data.stats[5].base_stat)
        
      })
    }
    let speedCalc = Math.floor((Math.floor(((((2 * pokemonSpeed + parseInt(iv) + (parseInt(ev) / 4)) * level) / 100) + 5))) * nature);
    let maxCalc = Math.floor((Math.floor(((((2 * pokemonSpeed + 31 + (255 / 4)) * level) / 100) + 5))) * 1.1);
    let minCalc = Math.floor((Math.floor((((2 * pokemonSpeed * level) / 100) + 5))) * 0.9);
    let CapName = pokemonName.charAt(0).toUpperCase() + pokemonName.substring(1);
  return (
    <div className="App">
      <div className="TitleSection">
        <input type='text' placeholder='Pokemon' onChange={submitNameHandler}></input>
        <input type='text' placeholder='Nature' onChange={submitNatureHandler}></input>
        <input type='number' placeholder='EV' onChange={submitEvHandler}></input>
        <input type='number' placeholder='IV' onChange={submitIvHandler}></input>
        <input type='number' placeholder='Level' onChange={submitLevelHandler}></input>
        <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
      <div className="DisplaySection">
        {!pokemonChosen ?
          (<h1>Please enter a Pokemon</h1>
          ) : (
            <>
            <h1>{CapName}</h1>
            <img src={pokemon.img} />
              <h1>{speedCalc} Speed</h1>
              <p>{CapName} with {nature}x nature at level {level} with {ev} EV and {iv} IV</p>
              <h3>{CapName} at level {level} has a min/max speed of {minCalc}/{maxCalc}</h3>
              <p>Base Speed: {pokemonSpeed}</p>
            </>
          )}
      </div>
      
    </div>
  );
}

export default Input;