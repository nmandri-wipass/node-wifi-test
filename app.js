const http = require('http');
const fs = require('fs');

// Crear un servidor HTTP simple
const server = http.createServer((req, res) => {
  // Si la solicitud es para la página principal
  if (req.url === '/' || req.url === '/index.html') {
    // Leer el archivo HTML
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error interno del servidor');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    // Si la solicitud es para otros recursos, como CSS o JavaScript
    const resourcePath = req.url.slice(1); // Eliminar el primer carácter "/" de la URL
    fs.readFile(resourcePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Recurso no encontrado');
      } else {
        // Determinar el tipo de contenido en función de la extensión del archivo
        let contentType = 'text/plain';
        if (resourcePath.endsWith('.html')) {
          contentType = 'text/html';
        } else if (resourcePath.endsWith('.css')) {
          contentType = 'text/css';
        } else if (resourcePath.endsWith('.js')) {
          contentType = 'text/javascript';
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      }
    });
  }
});

// Escuchar en el puerto 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${port}`);
});
