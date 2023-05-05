const { Router } = require('express');
const { getDogs } = require('../controllers/dogNameController');
//const { allGetDogs } = require('../controllers/controller');
const { getRaza } = require('../controllers/dogRazaController');
const { postDog } = require('../controllers/postController');
const { getTemperament } = require('../controllers/temperamentController');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getDogs);
router.get('/dogs/:id', getRaza);
router.post('/dogs', postDog);
router.get('/temperament', getTemperament);
//router.use(express.json());

module.exports = router;
