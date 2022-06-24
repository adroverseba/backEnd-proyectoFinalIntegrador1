// configuro middleware para logear error y llevar registro de los mismos
function logError(err, req, res, next) {
  console.log(err);
  next(err);
}

// middleware para mandarle al cliente
function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

//middleware para manejar errores del tipo boom
function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    //consulto si el error que ingresa es del tipo boom
    const { output } = err; //destructuring para el error que ingresa del tipo boom
    res.status(output.statusCode).json(output.payload); //utilizo las propiedades que vienen dentro del objeto boom
  }
  next(err);
}

module.exports = { logError, errorHandler, boomErrorHandler };
