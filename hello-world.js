import { createServer } from 'node:http';
import os from 'node:os';
import pc from "picocolors"

const hostname = '127.0.0.1';
const port = 0;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('Plataforma:', os.platform());
  console.log('Arquitectura:', os.arch());
  console.log('Versión del SO:', os.version());
  console.log('Memoria total (bytes):', os.totalmem());
  console.log('Memoria libre (bytes):', os.freemem());
  console.log('Directorio temporal:', os.tmpdir());
  console.log('Nombre del host:', os.hostname());
  console.log('CPU:', os.cpus());
  console.log('Información de usuario actual:', os.userInfo());
  console.log('Directorio de inicio del usuario actual:', os.homedir());
  console.log(pc.green(`How are ${pc.italic(`you`)} doing?`));
}); 