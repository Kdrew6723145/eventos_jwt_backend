import fs from 'fs';

export const getFileNames = (req, res) => {
  const directoryPath = './uploads'; // Ruta de la carpeta que contiene los archivos

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error al leer la carpeta:', err);
      res.status(500).json({ error: 'Error al leer la carpeta' });
      return;
    }

    res.send({files});
  });
};
