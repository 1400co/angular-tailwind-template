const folderPath = './src/'; // Ruta de tu proyecto
const outputPath = './output/archivosArbolado.txt'; // Ruta para guardar el archivo de texto

const fs = require('fs');
const path = require('path');
const txtStream = fs.createWriteStream(outputPath);


function listarArchivosDirectorio(directorio) {
  return new Promise((resolve, reject) => {
      fs.readdir(directorio, (error, archivos) => {
          if (error) {
              reject(error);
          } else {
              resolve(archivos);
          }
      });
  });
}

function leerArchivo(rutaArchivo) {
  return new Promise((resolve, reject) => {
      fs.readFile(rutaArchivo, 'utf8', (error, contenido) => {
          if (error) {
              reject(error);
          } else {
              resolve(contenido);
          }
      });
  });
}

function esArchivoDeInteres(archivo) {
  return archivo.endsWith('.ts') || archivo.endsWith('.html') || archivo.endsWith('.scss');
}

async function buscarArchivos(directorio) {
  const archivos = await listarArchivosDirectorio(directorio);

  for (const archivo of archivos) {
      const rutaCompleta = path.join(directorio, archivo);
      const stats = fs.statSync(rutaCompleta);

      if (stats.isDirectory()) {
          await buscarArchivos(rutaCompleta); // Llamada recursiva si es un directorio
      } else if (esArchivoDeInteres(archivo)) {
          const contenido = await leerArchivo(rutaCompleta);

          txtStream.write(`---------------------------------------\n${archivo}\n************\n${contenido}\n`);
      }
  }
}

async function generarArchivoTexto() {
  try {


      await buscarArchivos(folderPath);

      txtStream.end();
      console.log('Archivo de texto generado exitosamente.');
  } catch (error) {
      console.error('Ocurrió un error:', error);
  }
}

generarArchivoTexto();
