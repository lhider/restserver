
const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { saldo, pagina = '1' } = req.query;

    res.json({
        msg : 'get API - controlador',
        saldo, pagina
    })
}


const usuariosPUT = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg : 'get API - controlador',
        id
    })
}

const usuariosPOST = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg : 'get API - controlador',
        nombre,
        edad
    })
}

const usuariosDelete = (req, res = response) => {

    res.json({
        msg : 'get API - controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPOST,
    usuariosPUT
}