import { useNavigate } from "react-router-dom"
import Detail from "../../Componentes/CardDetail/cardDetail";

export default function DetailDog (){

const navigate = useNavigate();

function handleClick(){
    navigate('/home')
}

    return(
        <div>
            <button onClick={handleClick}>Home</button>
            <Detail/>
        </div>
    )
};