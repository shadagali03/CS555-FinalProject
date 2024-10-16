import { Router } from "express";
const router = Router();
import * as userService from "./users.service.js";

router.route("/").post(async (req, res) => {
  try {
    const user = req.body;
    const userId = await userService.addUser(user);
    res.status(201).send(userId);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.route("/:id").get(async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
