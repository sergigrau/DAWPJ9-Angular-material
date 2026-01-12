/*
 * Server en Node per a demostrar les crides amb HttpClient d'Angular
 * @author  sergi.grau@fje.edu
 * @version 1.0
 * date 28.12.2017
 * format del document UTF-8
 *
 * CHANGELOG
 * 
 * -Server en Node per a demostrar les crides amb HttpClient d'Angular
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */
var http = require("http");
var url = require("url");
var querystring = require("querystring");
var fs = require('fs');

let alumnes = [{"nom":"sergi", "cognom":"grau"},{"nom":"joan", "cognom":"angular"}];

function iniciar() {
	function onRequest(request, response) {

		response.setHeader('Access-Control-Allow-Origin', '*');
		response.setHeader('Access-Control-Request-Method', '*');
		response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
		response.setHeader('Access-Control-Allow-Headers', '*');
	if ( request.method === 'OPTIONS' ) {
		response.writeHead(200);
		response.end();
		return;
	}

		var sortida;
		var pathname = url.parse(request.url).pathname;
		var consulta = url.parse(request.url, true).query;
		var res = parseInt(consulta['res']);



		if (pathname == '/consultarTots') {
			response.writeHead(200, {
				"Content-Type": "application/json; charset=utf-8"
			});
			response.write(JSON.stringify(alumnes));
			response.end();
		} 
		else if(pathname == '/audio1.mp3'){

			console.log('audio');
            fs.readFile('./audio1.mp3', function (err, sortida) {
                response.writeHead(200, {
                    'Content-Type': 'audio/mpeg'
                });

                response.write(sortida);
                response.end();
});
		}
		else if(pathname == '/afegirAlumne'){
			alumnes.push({"nom":"foo", "cognom":"bar"})
			
			response.writeHead(200, {
				"Content-Type": "application/json; charset=utf-8"
			});
			response.write(JSON.stringify(alumnes));
			response.end();
		}
		
		else {
			response.writeHead(404, {
				"Content-Type": "text/html; charset=utf-8"
			});
			sortida = "404 NOT FOUND";
			response.write(sortida);
			response.end();
		}
	}
	http.createServer(onRequest).listen(8888);
	console.log("Servidor iniciat.");
}
exports.iniciar = iniciar;
