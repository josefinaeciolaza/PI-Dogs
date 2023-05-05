import React, {useState} from "react";
import { useDispatch } from "react-redux";
import "./searchBar.css"
import { getByName } from "../../redux/action";

export default function SearchBar () {

    const dispatch = useDispatch();
    const [searchDog, setSearchDog] = useState("");

    const handleInput = (e) => {
        e.preventDefault()
        setSearchDog(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getByName(searchDog));
    }

    return(
        <div className="search-Bar">
        <form>
            <input type="text" onChange={handleInput} placeholder="Busqueda" />
            <button type="submit" onClick={handleSubmit}>Buscar</button>
        </form>
        </div>
    )
};