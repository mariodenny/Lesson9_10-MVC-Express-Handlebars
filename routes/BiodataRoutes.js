import express from 'express'
const router = express.Router()

import {indexPage, aboutPage} from '../controllers/BiodataController.js'

router.get("/", indexPage)
router.get("/about", aboutPage)

export default router