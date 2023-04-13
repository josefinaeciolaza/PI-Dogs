const { allGetDogs } = require('./controller')
//const axios = require('axios');

const getDogs = async (req, res) => {
    const { name } = req.query;
    try{
        const dogs = await allGetDogs();
        if(name){
        const namedog =  dogs.filter(
            dog => dog.name.toLowerCase().includes(name.toLowerCase()) //toLowerCase verifica las mayusculas minusculas, y includes lo que hace es que verifica si lo que pasamos por query esta en el string de name(ej: americano pasamos por query me va a devolver todo los perros que por name tengan en su strang americano)
        )
        namedog.length ? res.status(200).send(namedog) : res.status(400).send("No dogs with that name found")
        }else{
            res.status(200).json(dogs);
        };
    }catch (error){
        res.status(404).json("Bad request")
    }

};

module.exports = {getDogs};