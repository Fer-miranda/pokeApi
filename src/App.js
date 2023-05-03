import { useState } from "react";

function App() {
  const [pokemonNames, setPokemonNames] = useState([]); //lista de nombres de Pokémon que se mostrará en la página (pokemonNames), 
  //y la función que se utilizará para actualizar la lista de nombres (setPokemonNames)

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807") //fetch para obtener los datos de la API
      .then((response) => {
        return response.json();//toma la respuesta HTTP y la convierte en un objeto JSON
      })
      // .then(response => {
      //   console.log(response);
      // })
      .then((response) => { //response es el objeto json que contiene un array de objetos con las caract de cada pokemon llamada results.
        const names = response.results.map((pokemon) => pokemon.name); //map itera sobre la matriz results y crear una nueva matriz que contiene solo los nombres de los Pokémon.
        setPokemonNames(names);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ol>
        {pokemonNames.map((name, index) => (// map itera sobre el array pokemonNames. Para ello toma el parámetro name y el parámetro index (posición del nombre dentro de la matriz)
          <li key={index}>{name}</li>//La función devuelve un elemento li con el name como su contenido y index como su clave única.
          //Cada elemento de una lista debe tener una "key" única para que React pueda identificar cuál elemento cambió, se eliminó o se agregó en la lista.
        ))}
      </ol>
    </div>
  );
}

export default App;

