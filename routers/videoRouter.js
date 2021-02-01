import express from "express";
import {
  getUpload,
  postUpload,
  deleteVideo,
  editVideo,
  videoDetail,
  search,
  upload,
} from "../controllers/videoController";
import routes from "../routes.js";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
