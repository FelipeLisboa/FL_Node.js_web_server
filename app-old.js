const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Felipe',
            edad: 30,
            url: req.url
        }

        res.write(JSON.stringify(salida));

        //res.write('Hola mundo');
        res.end(); //finaliza de crear la respuesta
    })
    .listen(8080);
//escuchando el puerto 8080