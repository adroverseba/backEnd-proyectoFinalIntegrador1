const express = require("express");
const app = express();
const routerApi = require("./routes");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));
//conf del ruteo
routerApi(app);

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// configuracion del servidor
const connectedServer = app.listen(PORT, () => {
  console.log(
    `Servidor conectado en el puerto ${connectedServer.address().port}`
  );
});

connectedServer.on("error", (err) => {
  console.log(`Ocurrio un error en el servidor: ${err.message}`);
});
