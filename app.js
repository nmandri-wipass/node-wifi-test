// Importa las bibliotecas necesarias
const express = require('express');
const path = require('path');

// Crea una instancia de la aplicación Express
const app = express();

// Configura el directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Define una ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Configura el puerto en el que escuchará el servidor
const port = process.env.PORT || 3000;

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor web funcionando en el puerto ${port}`);
});
