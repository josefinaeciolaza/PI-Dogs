const { allGetDogs } = require('./controller');

const getRaza = async (req, res) => {
    const { id } = req.params;
    const dogs = await allGetDogs();
     const findDong = dogs.filter(dog => dog.id == id);
     if(findDong){
        res.status(200).send(findDong);
     }else{
        res.status(404).send("No found dogs")
     }

};

module.exports = { getRaza };