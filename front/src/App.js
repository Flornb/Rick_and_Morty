import './App.css';
import CharacterDetail from './components/characterDetail/CharacterDetail';
import Characters from './components/characters/Characters';
import SearchBar from './components/SearchBar/SearchBar';
import characters, { Rick } from './data.js'
import { Routes, Route } from "react-router-dom";

function App () {
  return (
    <Routes>
        <Route path="/characters" element={<Characters/>} />
        <Route path="/detail/:id" element={<CharacterDetail/>} />
    </Routes>
  );
}
//     <div className='App' style={{ padding: '25px' }}>
//       <div>
//         <Card
//           name={Rick.name}
//           species={Rick.species}
//           gender={Rick.gender}
//           image={Rick.image}
//           onClose={() => alert('Emulamos que se cierra la card')}
//         />
//       </div>
//       <hr />
//       <div>
//         <Cards
//           characters={characters}
//         />
//       </div>
//       <hr />
//       <div>
//         <SearchBar
//           onSearch={(characterID) => alert(characterID)}
//         />
//       </div>
//     </div>
//   )
// }

//ejercicio 4 del 02 web server
//Conectar front - back
//Abre tu proyecto en la carpeta front para poder hacer un pequeño cambio.
//Dentro del archivo app.js tienes una función llamada onSearch. La URL a la que le haces la petición es, 
//https://rickandmortyapi.com/api/character/. Tienes que reemplazarla por esta nueva URL: http://localhost:3001/rickandmorty.
//[NOTA]: recuerda agregar a la ruta el id.

export default App;
