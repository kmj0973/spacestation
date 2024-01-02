import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { errorLogger } from "./middleware/logger.js";
import commentRouter from "./comments/comments.router.js";
import errorHandler from "./middleware/errorHandler.js";
import feedRouter from "./feed/feed.router.js";
import likeRouter from "./like/like.router.js";
import commentLikeRouter from "./comments/commentLike/commentLike.router.js";
import categoryRouter from "./category/category.router.js";
import followRouter from "./follow/follow.router.js";
import userRouter from "./user/user.router.js";
import authRouter from "./auth/auth.router.js";
import bookMarkRouter from "./bookmark/bookmark.router.js";
import parseRouter from "./parse/parse.router.js";

const { PORT, MONGODB_URL, FRONTEND_URL } = process.env;
if (!PORT || !MONGODB_URL || !FRONTEND_URL) {
  console.error("no env var");
  process.exit();
}

mongoose.connect(MONGODB_URL);
mongoose.connection.on("connected", () => {
  console.log("Successfully connected to MongoDB");
});

const app = express();

app.use(errorLogger);

app.use(express.json());
app.use(
  cors({
    origin: [FRONTEND_URL],
    credentials: true,
  }),
);
app.use(cookieParser());

app.use("/api/feeds", feedRouter);
app.use("/api/likes", likeRouter);
app.use("/api/commentLikes", commentLikeRouter);
app.use("/api/categorys", categoryRouter);
app.use("/api/comments", commentRouter);
app.use("/api/follows", followRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/bookmarks", bookMarkRouter);
app.use("/api/parse", parseRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`PORT:${PORT}`);
});
