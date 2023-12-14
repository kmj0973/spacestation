// TODO: 프로젝트 구조를 보여주기위한 샘플 파일임. 구조 잡히면 지우기.
import { Router } from "express";
import followController from "./follow.controller.js";

const followRouter = Router();

followRouter.get("/", followController.getFollows);
followRouter.post("/", followController.postFollow);
followRouter.delete("/:follower", followController.deleteFollow);

export default followRouter;
