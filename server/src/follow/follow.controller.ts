import { Request } from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import { CustomError } from "../middleware/errorHandler.js";
import followService from "./follow.service.js";

const followController = {
  getFollows: asyncHandler(async (_, res) => {
    const follows = await followService.getFollows();
    res.json(follows);
  }),

  postFollow: asyncHandler(
    async (req: Request<{}, {}, { follower: string}>, res) => {
      const {  follower } = req.body;
      if (!follower )
        throw new CustomError({
          status: 400,
          message: "전달된 내용이 없습니다.",
        });

        followService.postFollow({ follower });
      res.status(200).end();
    },
   
  ), 
  deleteFollow: asyncHandler(
      async (req, res) => {
        const {  follower } = req.params;
        followService.deleteFollow({follower});
        res.status(200).end();
      }
    )
};


export default followController;
