import { Router } from "express";
import multer from 'multer';
import uploadController from '../controllers/upload.js';


const router = Router()
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

router.post('/upload', upload.single('file'), uploadController.uploadFile);

export default router;
