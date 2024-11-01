import { Router } from "express";
import security from "../../middlewares/security.js";
const router = Router();
import * as userService from "./users.service.js";

router.get("/", async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { user, userToken } = await userService.loginUser(req.body);
    return res.status(200).json({ user: user, token: userToken });
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const { user, userToken } = await userService.registerUser(req.body);
    return res.status(201).json({ user: user, token: userToken });
  } catch (err) {
    next(err);
  }
});

router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { user } = res.locals;
    if (user) {
      console.log("Retrieved User: ", user);
      res.status(200).json({ user });
    } else {
      console.log("No User Found", res.locals);
      next();
    }
  } catch (err) {
    console.log("Unexpected Error: ", err);
    next(err);
  }
});

export default router;
