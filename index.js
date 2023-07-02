const http = require("http");

const requestController=()=>{
    //Lógica de la función
    console.log("Recibimos una nueva request"+__filename);
}

//Configuración del servidor
const server = http.createServer(requestController);

server.listen(8080);