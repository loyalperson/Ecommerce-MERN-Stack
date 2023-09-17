import express from "express"

const router = express.Router()

import { login, createAdmin } from '../controllers/userController.js'

router.post("/login", login)
router.post('/addAdmin', createAdmin)

export default router
