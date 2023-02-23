import React, { useEffect } from "react";
import style from "./CharacterDetail.module.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCharacterDetail, cleanCharacterDetail } from "../../redux/actions";

const CharacterDetail = () => {
   const { id } = useParams();
   const dispatch = useDispatch();
   const { image, name, species, origin, gender, status } = useSelector (state => state.characterDetail);
   
   useEffect (() => {
      dispatch(getCharacterDetail(id))

      return () => dispatch (cleanCharacterDetail ())
   }, [])

   return (
      <div>
         <img src={image}/>
         <h1>{name}</h1>
         <p>Specie: {species}</p>
         <p>Gender: {gender}</p>
         <p>Status: {status}</p>
         <p>Origin: {origin?.name}</p>
      </div>
   );
}
export default CharacterDetail;

