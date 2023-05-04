
//AXIOS

import { useState } from "react";
import axios from "axios";

function App() {
  const [pokemonNames, setPokemonNames] = useState([]);

  const fetchPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807") //AXIOS ya convierte la respuesta en un objeto JavaScript por defecto, y no es necesario llamar a un objeto json como con fetch
      .then((response) => {
        const names = response.data.results.map((pokemon) => pokemon.name); //La propiedad data esp. de axios contiene los datos de la respuesta de la petición. 
        //En este caso sabemos que la propiedad data contiene un objeto JSON que tiene una propiedad results, que a su vez es un arreglo de la API que contiene información sobre los Pokémon
        //con map estamos accediendo solo al name de cada uno de los pokemon. Todo se guarda en la variable names
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
        {pokemonNames.map((name, index) => (//devuelve un elemento li con el name como su contenido y index como su clave única
          <li key={index}>{name}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;




//FETCH

// import { useState } from "react";

// function App() {
//   const [pokemonNames, setPokemonNames] = useState([]); //lista de nombres de Pokémon que se mostrará en la página (pokemonNames), 
//   //y la función que se utilizará para actualizar la lista de nombres (setPokemonNames)

//   const fetchPokemon = () => {
//     fetch("https://pokeapi.co/api/v2/pokemon?limit=807") //fetch para obtener los datos de la API
//       .then((response) => {
//         return response.json();//toma la respuesta HTTP y la convierte en un objeto JSON
//       })
//       // .then(response => {
//       //   console.log(response);
//       // })
//       .then((response) => { //response es el objeto json que contiene un array de objetos con las caract de cada pokemon llamada results.
//         const names = response.results.map((pokemon) => pokemon.name); //map itera sobre la matriz results y crear una nueva matriz que contiene solo los nombres de los Pokémon.
//         setPokemonNames(names);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <button onClick={fetchPokemon}>Fetch Pokemon</button>
//       <ol>
//         {pokemonNames.map((name, index) => (// map itera sobre el array pokemonNames. Para ello toma el parámetro name y el parámetro index (posición del nombre dentro de la matriz)
//           <li key={index}>{name}</li>//La función devuelve un elemento li con el name como su contenido y index como su clave única.
//           //Cada elemento de una lista debe tener una "key" única para que React pueda identificar cuál elemento cambió, se eliminó o se agregó en la lista.
//         ))}
//       </ol>
//     </div>
//   );
// }

// export default App;

