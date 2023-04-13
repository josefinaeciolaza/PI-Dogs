const { Router } = require('express');
const { getDogs } = require('../controllers/dogController');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', getDogs);

module.exports = router;
