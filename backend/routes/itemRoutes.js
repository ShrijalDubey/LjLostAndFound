import express from 'express';

import { create } from '../controller/itemController.js';
import { getAllItems } from '../controller/itemController.js';
import { deleteItem } from '../controller/itemController.js';

const router = express.Router();

router.post('/items', create);
router.get('/items', getAllItems);
router.delete('/items/:id', deleteItem);


export default router;