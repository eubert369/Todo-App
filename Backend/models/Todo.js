import { Schema, model } from "mongoose";

const TodoSchema = new Schema({
  title: String,
  description: String,
  finished: Boolean,
});

const Todo = model("todo", TodoSchema);
export default Todo;
