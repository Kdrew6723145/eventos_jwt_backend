import express from 'express';
import { getFileNames } from '../controllers/info_files.js';

const router = express.Router();

router.get('/info', getFileNames);

export default router;
