import express from 'express';
import { getUsers, getSummary, addTransaction, deleteUser } from '../controllers/user.js'; // Adicione a importação aqui




const router = express.Router();

router.get("/users", getUsers);
router.get("/summary", getSummary);
router.post("/transaction", addTransaction);
router.delete("/delete/:id", deleteUser);
export default router;
