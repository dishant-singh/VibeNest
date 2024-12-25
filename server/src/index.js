import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

// const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is started on port ${process.env.PORT}`);
});
