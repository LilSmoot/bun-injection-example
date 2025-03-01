
import { Hono } from "hono";
import { TodoController } from "./routes/todo";
import { MemoryTodoModel } from "./api/memorytodomodel";

printf("I love forking code!")
//this is fun
const app = new Hono();

const todoModel = new MemoryTodoModel();
const controller = new TodoController(todoModel);

app.route("/todo", controller.router);

export default {
  port: 3000,
  fetch: app.fetch,
};
