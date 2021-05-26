const express = require("express");
const socketIo = require("socket.io");
const http = require("http");
const SerialPort = require("serialport");
const Delimiter = require("@serialport/parser-delimiter");
const app = express();
const server = http.createServer(app);
//const io = socketIo.listen(server);
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort("COM3", {
  baudRate: 9600,
});


var firebaseConfig = {
    apiKey: "AIzaSyA6UFps0L8cY7HgovZ0Ekqb8Kw8Zoki6ss",
    authDomain: "estacionmicro.firebaseapp.com",
    projectId: "estacionmicro",
    storageBucket: "estacionmicro.appspot.com",
    messagingSenderId: "163202982007",
    appId: "1:163202982007:web:9af8fcd5869c8ff809a672"
};

//const parser2 = port.pipe(new Delimiter({ delimiter: "\r" }));
const parser = new Readline();

port.on("open", function () {
    console.log("Puerto abierto");
});

port.on("data", function (data) {
    console.log(data.toString());
});

port.on("err", function (err) {
    console.log(err.message);
});

/*io.on("connection", function (socket) {
    console.log("Un nuevo socket conectado");
});*/

server.listen(3000, () => {
    console.log("server on port", 3000);
});