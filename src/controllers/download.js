import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

export const downloadFile = (req, res) => {
  const filename = req.params.filename;
  const currentFileUrl = import.meta.url;
  const currentFilePath = fileURLToPath(currentFileUrl);
  const currentDir = dirname(currentFilePath);
  const file = join(currentDir, '../../uploads', filename);
  console.log(file);
  res.download(file, (err) => {
    if (err) {
      console.error('Error al descargar el archivo:', err);
      res.status(404).send('No se encontró el archivo');
    }
  });
};
