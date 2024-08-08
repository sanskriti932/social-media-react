import express from "express";

const router = express.Router();

router.get("/signup",signupUser);

export default router;