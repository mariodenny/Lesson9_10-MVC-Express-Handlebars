import express from 'express'
const router = express.Router()

import { registerPage, 
    loginPage, 
    registerUser,
    loginUser,
    logoutUser,
    userDashboard } from '../controllers/AuthController.js'

import { isAuthenticated } from '../middlewares/authMiddleware.js'

router.get("/register", registerPage)
router.post('/register', registerUser)
router.get("/login", loginPage)
router.post('/login', loginUser)

// protect link pake auth, supaya gabisa akses sbeleum login
router.get("/dashboard", isAuthenticated, userDashboard)

export default router