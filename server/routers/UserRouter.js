const UserRouter = require("express").Router()

const { Register, verifyEmail, resetOtp, Login, getMe, logout, address } = require("../controller/UserController")
const { protect } = require("../middleware/auth")

UserRouter.post("/create", Register)
UserRouter.post("/verify-otp", verifyEmail)
UserRouter.post("/reset-otp", resetOtp)
UserRouter.post("/login", Login)
UserRouter.get("/get", protect, getMe)
UserRouter.post("/logout", logout)
UserRouter.post("/address", address)



module.exports = UserRouter