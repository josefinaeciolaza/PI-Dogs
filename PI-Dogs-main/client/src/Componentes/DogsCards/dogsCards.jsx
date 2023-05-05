import React from "react";
import Card from "../Cards/cards";
import "./list.css"

export default function CardList ({allDogs}){

    const dogsList = allDogs;

    return(
    <div className="dogList">
        {dogsList?.map(dog => (      
        <Card dog={dog} />     
        ))}
    </div>
    )
};