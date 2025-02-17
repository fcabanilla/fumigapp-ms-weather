import express from "express";
import authRouter from "./routes/auth";

const app = express();
app.use(express.json());
app.use("/auth", authRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Auth service listening on port ${port}`);
});
