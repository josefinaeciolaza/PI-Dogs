const { Temperament, Dog } = require('../db');

const postDog = async (req, res) => {
    let { name, min_height, max_height, min_weight, max_weight, life_span, temperament, image } = req.body;

    const hHeight = [] //array al cual se le pusheara la altura min y max;
    const minHeight = min_height;
    const maxHeight = max_height;
    hHeight.push(minHeight, maxHeight)

 
    const wWeight = [] //array al cual se le pusheara el peso min y max;
    const minWeight = min_weight;
    const maxWeight = max_weight;
    wWeight.push(minWeight, maxWeight)
    
    // if(!image){ //si no proporciona una imagen se le asigna una por defecto;
    //   image: "https://img.freepik.com/vector-gratis/perro-pug-lindo-flotando-globo-dibujos-animados-vector-icono-ilustracion-animal-naturaleza-dibujos-animados-planos_138676-4287.jpg?w=740&t=st=1681494814~exp=1681495414~hmac=0b94f7dda23a9a5a4e88714f1c552292ca70ceec5094f30cdd2c99c7f689de84";
    //}

    try {
        // Verificamos si se proporcionan todos los campos requeridos
        if (!name || !hHeight || !wWeight || !life_span || !temperament) {
          return res.status(400).json({ message: 'Please provide all required fields' });
        }
      
        // Creamos un nuevo perro con los datos proporcionados
        const newDog = await Dog.create({
          name,
          height: hHeight.join(" - "),
          weight: wWeight.join(" - "),
          life_span,
          image,
        });

         let temp = await Temperament.findAll({
             where: { name: temperament},
         })
        newDog.addTemperament(temp);
     
        res.status(201).json({ message: 'Dog created successfully', dog: newDog });
      } catch (error) {
        console.log(error);
        res.status(500).send('Error creating dog');
      }
};

module.exports = { postDog };