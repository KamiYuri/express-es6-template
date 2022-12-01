import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import passport from "passport";
import LocalStrategy from "passport-local";

//Import router
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import db from "./database/models/index.js";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Using router
app.use("/", indexRouter);
app.use("/users", usersRouter);

// db.sequelize.sync({ alter: true });

export default app;
