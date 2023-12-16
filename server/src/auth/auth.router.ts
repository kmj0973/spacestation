import { Router } from "express";
import authController from "./auth.controller.js";

const authRouter = Router();

authRouter.get("/oauth", authController.handleKakaoOAuthProcess);

authRouter.post("/login", authController.handleLogin);

authRouter.post("/join", authController.handleJoin);

export default authRouter;
