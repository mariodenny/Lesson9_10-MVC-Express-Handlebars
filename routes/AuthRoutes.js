import express from 'express'
const router = express.Router()

import { registerPage } from '../controllers/AuthController.js'

router.get("/register", registerPage)

export default router