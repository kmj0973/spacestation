import { Router } from "express";
import followController from "./follow.controller.js";

const followRouter = Router();

followRouter.get("/", followController.getFollows);
followRouter.post("/", followController.postFollow);
followRouter.delete("/:follower", followController.deleteFollow);

export default followRouter;
