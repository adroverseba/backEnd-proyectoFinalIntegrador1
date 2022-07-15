const express = require("express");
const app = express();
const routerApi = require("./routes");
const {
  logError,
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/errorHandler");
const { config } = require("./config/config");
const mongoose = require("mongoose");

const PORT = config.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//TODO: verificar archivos estaticos
// app.use(express.static(__dirname + "/public"));

//conf del ruteo
routerApi(app);
// confirucaion de middleware
app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// configuro arranque de mongo controlando su asincronidad en la conexion
const bootstrap = async () => {
  await mongoose.connect(config.mongoDbUrl);
  console.log("mongoDB connected");

  // configuracion del servidor luego de haber generado conexion con DB mongo
  const connectedServer = app.listen(PORT, () => {
    console.log(
      `Servidor conectado en el puerto ${connectedServer.address().port}`
    );

    connectedServer.on("error", (err) => {
      console.log(`Ocurrio un error en el servidor: ${err.message}`);
    });
  });
};

bootstrap();
