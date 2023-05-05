const axios = require('axios');
require('dotenv').config();
const { URL, API_KEY } = process.env
const { Dog, Temperament } = require('../db.js')

//Me traigo todo lo que necesito de la api
const dogsGetApi = async () => {
 const response = await axios.get(`${URL}?api_key=${API_KEY}`);
 const allRespons = response.data.map((elemet) => {
    return {
        id: elemet.id,
        name: elemet.name,
        image: elemet.image.url,
        height: elemet.height.metric,
        weight: elemet.weight.metric,
        life_span: elemet.life_span,
        temperament: elemet.temperament,

    }
 });
    return allRespons;
};

//me traigo todo lo que necesito de la BD

const dogsGetDb = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through:{
                attributes: []
            }
        }
    });

};

//Uno la info de la DB y de la API.

const allGetDogs = async () => {
    const apiInfo = await dogsGetApi();
    const dbInfo = await dogsGetDb();

    const unionInfo = [...apiInfo,...dbInfo]
    return unionInfo;
};

module.exports = { allGetDogs };


