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

export default App;
