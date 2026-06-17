import express from 'express'
const router = express.Router()

import {indexPage, aboutPage, biodataPage} from '../controllers/BiodataController.js'

router.get("/", indexPage)
router.get("/about", aboutPage)
router.get("/home", biodataPage)

export default router