
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { clearDetail } from "../../redux/action";
import "./card.css"

export default function Card ({dog}){
    const {id, name, image, weight, temperament} = dog

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(clearDetail())
        navigate(`/dogs/${id}`)
    }

    return(
        <div className="card-conteiner" onClick={handleClick}>
            <img src={image} alt={name} />
            <h2>{name}</h2> 
            <h3>{temperament}</h3>
            <h3>{weight} KG</h3>
            
        </div>
    )
};