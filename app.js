// Importa la biblioteca Express
const express = require('express');

// Crea una instancia de la aplicación Express
const app = express();

// Define una ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Define el puerto en el que escuchará el servidor
const port = process.env.PORT || 3000;

// Inicia el servidor y escucha en el puerto especificado
app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port}`);
});