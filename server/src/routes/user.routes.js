import { Router } from "express";

const router = Router();

router.route("/home").get((req, res) => {
  res.send("Home Page");
});

export default router;
