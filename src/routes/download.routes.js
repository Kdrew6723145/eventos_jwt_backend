
import express from 'express';
import { downloadFile } from '../controllers/download.js';

const router = express.Router();

// ...

router.get('/download/:filename', downloadFile);

// ...

export default router;
