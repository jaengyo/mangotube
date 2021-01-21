// var express = require("express");
import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

const handleListening = () => {
  console.log(`listening on http://localhost:${PORT}`);
};

const handleHome = (req, res) => {
  res.send("hello it is response");
};

const handelProfile = (req, res) => {
  res.send("you are on my profile");
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true})
app.use(morgan("dev"));
app.use(helmet());

app.get("/", handleHome);
app.get("/profile", handelProfile);
app.listen(4000, handleListening);
