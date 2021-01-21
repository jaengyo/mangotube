// var express = require("express");
import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router.js";

const app = express();

const handleHome = (req, res) => {
  res.send("hello it is response");
};

const handelProfile = (req, res) => {
  res.send("you are on my profile");
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile", handelProfile);
app.use("/user", userRouter);

export default app;
