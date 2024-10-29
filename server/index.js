import express from "express";
import withAuth from "./middlewares/authentication.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/public", (req, res) => {
  res.send("Hello World!");
});

app.get(
  "/protected",
  withAuth({ permission: "call-protected-route" }),
  (req, res) => {
    res.send("This all Data are protected");
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
