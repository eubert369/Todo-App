// import e from "express";
import { Router } from "express";
// import cors from "cors";
import "dotenv/config";
import Todo from "../models/Todo.js";
const apiRouter = Router();


// apiRouter.use(e.json());
apiRouter.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", `${process.env.FRONTEND_URL}`);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

apiRouter.get("/", async (req, res) => {
  try {
    var items = await Todo.find({});
    res.send(items);
  } catch (error) {
    console.error(error);
  }
});

apiRouter.get("/find/:id", async (req, res) => {
  try {
    var query = await Todo.findById(req.params.id);
    res.send(query);
  } catch (error) {
    console.error(error);
  }
});

apiRouter.post("/add", async (req, res) => {
  try {
    var data = new Todo(req.body);
    var query = await data.save();
    console.log("query", query);
    res.send({ message: "finished task" });
  } catch (error) {
    console.error(error);
  }
});

apiRouter.delete("/delete/:id", async (req, res) => {
  try {
    var query = await Todo.findByIdAndDelete(req.params.id);
    res.send({ message: "backend received the request", status: query });
  } catch (error) {
    console.error(error);
  }
});

apiRouter.put("/finish/:id", async (req, res) => {
  try {
    var query = await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: "request received at backend", data: query });
  } catch (error) {
    console.error(error);
  }
});

apiRouter.put("/update/:id", async (req, res) => {
  try {
    var query = await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: "request received at backend", data: query });
  } catch (error) {
    console.error(error);
  }
});

export default apiRouter;
