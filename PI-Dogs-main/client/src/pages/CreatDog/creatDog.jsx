import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTemperaments } from "../../redux/action";


function validate(form){
    let errors = {}
    // VALIDACIÓN NAME:
        if(!form.name){
        errors.name = "Obligatory field";
        }else{
            errors.name = "" ;
        }
    //Altura
        if(!form.height_min){
         errors.height_min = "Obligatory field"
        }else if (!/^[0-9]+$/.test(form.height_min)) {
           errors.height_min =  'solo puede contener numeros';
        }else{
           errors.height_min = "";
        }
        //max
        if(!form.height_max){
           errors.height_max = "Obligatory field";
        }else if(!/^[0-9]+$/.test(form.height_max)) {
            errors.height_max = 'Solo puede contener números';
        } else if (parseInt(form.height_max) <= parseInt(form.height_min)) {
            errors.height_max =  'La altura máxima debe ser mayor que la altura mínima';
        } else {
            errors.height_max = "";
        }
    //PESO
        if(!form.weight_min){
            errors.weight_min = "Obligatory field";
        }else if (!/^[0-9]+$/.test(form.weight_min)) {
            errors.weight_min = 'Solo puede contener números';
        }else {
            errors.weight_min = "";
        }
        //max
        if(!form.weight_max){
            errors.weight_max = "Obligatory field";
        }else if(!/^[0-9]+$/.test(form.weight_max)) {
           errors.weight_max =  'Solo puede contener números';
        } else if (parseInt(form.weight_max) <= parseInt(form.weight_min)) {
            errors.weight_max = 'El peso máximo debe ser mayor que el peso minimo';
        } else {
            errors.weight_max = "";
        }
    //ESPERANZA DE VIDA
        if(!form.life_span){
           errors.life_span = "Obligatory field";
        }else if(!/^[0-9]+$/.test(form.life_span)) {
            errors.life_span = "Solo puede contener números";
        }else {
            errors.life_span = "";
        }
        
        return errors;

    };

export default function Formulario (){

    const navigate = useNavigate();
    const dispatch = useDispatch(); 

    const temperamentsList = useSelector(state => state.temperaments); // mediante la funcion useSelector se accede al estado temperaments y se obtiene la lista de temperamentos 


    useEffect(() => {
      dispatch(getTemperaments());
    }, [dispatch]);

    const [form, setForm] = useState({ //estado inicial del formulario
        name:"",
        height_min:"",
        height_max:"",
        weight_min:"",
        weight_max:"",
        life_span: "",
        imagen: "",
        temperament: []
    })

    const [errors, setErrors] = useState({
    })

    function handleChange (event){ // cambio del estado inicial al que escriba el usuario
        const property = event.target.name; 
        const value = event.target.value;

        setErrors(validate({...form, [property]: value}))
        setForm({
            ...form,
            [property]: value
        })
    }
    function selectHandle (event){
        setForm({
            ...form,
            temperament: [...form.temperament, event.target.value],
        })
    };
    function handleDelete(event) {
        setForm({
          ...form,
          temperament: form.temperament.filter((temp) => temp !== event),
        });
      }


    function handleClick() { //funcion que navega al home
      navigate('/home');
    }
  
    return(
        <form>
      <button onClick={handleClick}>
        Go to Home
      </button>
        {/* NOMBRE */}
           <div>
            <label>Name: </label>
            <input type="text" value={form.name} name="name" onChange={handleChange}/>
            {errors.name && <span>{errors.name}</span>}
           </div>
        {/* ALTURA */}
           <div>
            <label>Height min: </label>
            <input type="text" value={form.height_min} name="height_min" onChange={handleChange}/>
            {errors.height_min && <span>{errors.height_min}</span>}
           </div>
           <div>
            <label>Height max: </label>
            <input type="text" value={form.height_max} name="height_max" onChange={handleChange}/>
            {errors.height_max && <span>{errors.height_max}</span>}
           </div>
        {/* PESO */}
           <div>
            <label>Weight min: </label>
            <input type="text" value={form.weight_min} name="weight_min" onChange={handleChange}/>
            {errors.weight_min && <span>{errors.weight_min}</span>}
           </div>
           <div>
            <label>Weight max: </label>
            <input type="text" value={form.weight_max} name="weight_max" onChange={handleChange}/>
            {errors.weight_max && <span>{errors.weight_max}</span>}
           </div>
        {/* ESPERANZA DE VIDA */}
           <div>
            <label>Life span: </label>
            <input type="text" value={form.life_span} name="life_span" onChange={handleChange}/>
            {errors.life_span && <span>{errors.life_span}</span>}
           </div>
        {/* IMAGEN */}
            <div>
                <label >Imagen: </label>
                <input type="url" value={form.imagen} name="imagen" onChange={handleChange}/>
            </div>
        {/* TEMPERAMENTOS */}
            <div>
                <label>Temperament: </label>
                <select id="temperament" name="temperament" onChange={selectHandle}>
                    <option value="">Select a temperament</option>
                    {temperamentsList.map(temperament => (
                    <option key={temperament} value={temperament}>{temperament}</option>
                    ))}
                </select>
                <div>
                    {form.temperament.map(temp => (
                    <span key={temp}>
                    {temp}
                    <button onClick={() => handleDelete(temp)}>Remove</button>
                    </span>
                    ))}
                </div>
            </div>
        </form>
    )
};