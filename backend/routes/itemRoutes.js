import express from 'express';

import { create, getAllItems, deleteItem, markAsCollected } from '../controller/itemController.js';

const router = express.Router();

router.post('/items', create);
router.get('/items', getAllItems);
router.delete('/items/:id', deleteItem);
router.patch('/items/:id/collect', markAsCollected);

export default router;