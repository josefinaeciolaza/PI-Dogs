const { Temperament } = require('../db');
const { URL, API_KEY } = process.env
require('dotenv').config();
const axios = require('axios');

const getTemperament = async (req, res) => {

 const temperamentsApi = await axios.get(`${URL}?api_key=${API_KEY}`); 
 const mapTemp = temperamentsApi.data.map(elem => elem.temperament)
 const temp = mapTemp.toString().split(",");
 
 temp.forEach(element => {
   const temLimpio =  element.trim();
   Temperament.findOrCreate({
     where: { name: temLimpio}
   })
 });

 const totalTemp = await Temperament.findAll({
    attributes: {
        exclude: ['updatedAt', 'createdAt']
    }
 });

res.status(200).send(totalTemp)

};

module.exports = { getTemperament };