
const { Router } = require('express');
const { usuariosGet, usuariosPOST, usuariosPUT, usuariosDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );

router.put('/:id', usuariosPUT);

router.post('/', usuariosPOST);

router.delete('/', usuariosDelete);


module.exports = router;