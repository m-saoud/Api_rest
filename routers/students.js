import express, { request, response } from "express";
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();
let students = [
  {
    id: "1",
    name: "sami",
    degree: 70,
  },
  {
    id: "2",
    name: "mjk",
    degree: 89,
  },
];
router.get("/", (request, response) => {
  response.json(students);
});
router.get("/:id", (request, response) => {
  const id = request.params.id;
  const student = students.filter((student) => student.id === id);
  if (student.length > 0) {
    response.json(student);
  } else {
    response.send("stdent not found ");
  }
});
router.delete("/:id", (request, response) => {
  const id = request.params.id;
  students = students.filter((student) => student.id !== id)
  response.send(`the student with ${id} has benn deleted`)
});

router.post('/', (request, response) => {
  const student = request.body;
  const studentWithId={...student,id:uuidv4()}
  students.push(studentWithId)
  response.json(` the student has been ${student.request.name} addedd`)
}) 

export default router;
