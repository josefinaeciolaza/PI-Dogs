import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from "../../redux/action"; 
//import Card from "../../Componentes/Cards/cards";
import SearchBar from "../../Componentes/SearchBar/searchBar";
import "./homePage.css"
import CardList from "../../Componentes/DogsCards/dogsCards";
import { useNavigate } from "react-router-dom";

export default function Home (){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allDogs = useSelector((state) => state.allDogs)

    useEffect(()=>{
        dispatch(getDogs())
    }, [dispatch])

    function handleClick() {
        navigate('/dogs/create');
      }

    return(
        <div >
            <button onClick={handleClick}>Create Dog</button>
            <SearchBar/>
            <CardList allDogs={allDogs}/>
        </div>
    )
};