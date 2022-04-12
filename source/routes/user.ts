import express from "express";
import controller from '../controllers/user'

const router = express.Router()

router.get('./validate', controller.validateToken)
router.get('./register', controller.register)
router.get('./login', controller.login)
router.get('./get/all', controller.getAllUsers)

export = router