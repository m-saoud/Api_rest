import express, { request, response } from "express";
import studentRouter from "./routers/students";
const app = express();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is runing on ${PORT}`);
});
app.get("/", (request, response) => {
  response.send("ertert");
});

app.use("/students",studentRouter)