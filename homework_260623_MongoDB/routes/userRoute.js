import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js"

const router = express.Router()

router.post('/create', createUser);
router.get('/get-all', getAllUsers);
router.get('/get/:name', getUser);
router.delete('/delete/:name', deleteUser)
router.put('/update/:name', updateUser)

export default router;