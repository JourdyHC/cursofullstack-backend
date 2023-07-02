require('dotenv').config();
const http = require("http");

const requestController=()=>{
    //Lógica de la función
    console.log("Recibimos una nueva request"+__filename);
}

//Configuración del servidor
const server = http.createServer(requestController);

const PORT = process.env.PORT;

server.listen(PORT, function (){
    console.log(`Aplicación crriendo en el puerto: ${PORT}`);
});