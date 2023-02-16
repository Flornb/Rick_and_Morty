import CharacterDetail from '../characterDetail/CharacterDetail';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCharacters } from "../../redux/actions";
import CharacterCard from "../characterCard/CharacterCard";

//useSelector >> HOOK que funciona igual que el mapStateToPorps
//useDispatch >> HOOK que funciona igual que el mapDispatchToProps
//useEffect >> HOOK que emula los ciclos de vida del componente (montaje, actualizacion, desmontaje) )
const Characters = () => {
   const dispatch = useDispatch ();
   const characters = useSelector (state => state.characters);
   //se puede usar destructuring 
   // const {cards} = useSelector(state=>state)

   useEffect(() => {
      dispatch (getAllCharacters())
   }, []);

   // console.log (characters);
   return (
      <>
      {
         characters.map(character => {
            return <CharacterCard
              key={character.id}
              name={character.name}
              id={character.id}
              gender={character.gender}
              image={character.image}
            
            />
         })
      }
      </>
   )
}

   // return(
   //       <div>
   //          {
   //             characters.map(({id, name, species, gender, image}) => {
   //               return <CharacterDetail
   //                key ={id}
   //                name={name}
   //                species={species}
   //                gender={gender}
   //                image={image}
   //                onClose={() => window.alert('Emulamos que se cierra la card')}
   //                />
   //             })
   //          }
   //       </div>
   //       )
   //    }


// function Characters({characters}) {
  
//    return(
//    <div>
//       {
//          characters.map(({id, name, species, gender, image}) => {
//            return <Card
//             key ={id}
//             name={name}
//             species={species}
//             gender={gender}
//             image={image}
//             onClose={() => window.alert('Emulamos que se cierra la card')}
//             />
//          })
//       }
//    </div>
//    )
// }

export default Characters;