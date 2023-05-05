
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../redux/action";

export default function Detail (){

    const detail = useSelector((state) => state.detail[0])
    const {id} = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id]);

    if (!detail) {
        return <div>Cargando...</div>;
      }

    return(
        <div>
            <h2>{detail.name}</h2>
            <img src={detail.image} alt={detail.name} />
            <h2>{detail.id}</h2>
            <h2>{detail.temperament}</h2>
            <h3>{detail.height} M</h3>
            <h3>{detail.weight} KG</h3>
            <h3>{detail.life_span}</h3>

        </div>
    )

};