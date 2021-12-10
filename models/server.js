const express = require('express');
const cors = require('cors');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';


        //middleware 
        this.middlewares();


        //rutas de app
        this.routes();
    }


    middlewares(){
        //cors
        this.app.use(cors());

        //parseo lectrua body
        this.app.use( express.json() );

        //directpori publico
        this.app.use(express.static('public'));

    }

    routes() {
       this.app.use( this.usuariosPath , require('../routes/usuarios') );
    }

    listen(){
        this.app.listen(this.port,() => {
            console.log(`Servidor ejecutandose en puerto: ${this.port} `);
        } );
    }

}

module.exports =  Server;