const uploadFile = (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No se proporcionó ningún archivo' });
    }
  
    // Lógica adicional del controlador para procesar el archivo cargado
  
    res.json({ message: 'Archivo cargado exitosamente' });
  };
  
  export default {
    uploadFile
  };
  