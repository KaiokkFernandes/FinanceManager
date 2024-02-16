import express from 'express';
import { getUsers, getSummary } from '../controllers/user.js'; // Adicione a importação aqui




const router = express.Router();

router.get("/users", getUsers);
router.get("/summary", getSummary);
export default router;
