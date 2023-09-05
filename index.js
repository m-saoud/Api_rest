import express from "express";
import studentRouter from "./routers/students.js";

const app = express();

const PORT = 4000;
app.use(express.json())

app.use("/students", studentRouter);

app.listen(PORT, () => {
  console.log(`server is runing on ${PORT}`);
});
app.get("/", (request, response) => {
  response.send("Welcome to the home route!");
});
