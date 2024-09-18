import e from "express";
import mongoose from "mongoose";
import router from "./routes/index.js";
import apiRouter from "./routes/api.js";
import "dotenv/config";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

const app = e();
const port = process.env.BACKEND_PORT;

app.use(e.json());
app.use("/", router);
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
