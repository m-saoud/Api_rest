import  express  from "express";

const router = express.Router()
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
    if (student) {
      response.json(student);
    } else {
      response.status(404);
    }
  });
  
  export default router 