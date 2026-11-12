import { Router } from "express";

const router = Router()

router.get("/all", getAllUsers)

export default router