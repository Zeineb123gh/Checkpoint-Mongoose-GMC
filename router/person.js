const express = require("express");
const router = express.Router();
const {
  getAllPersons,
  getPersonById,
  getOnePerson,
  addPerson,
  deletePerson,
  deletePersons,
  updatePerson,
  queryChain
} = require("../controllers/person.controllers");

//Create new person
router.post("/", addPerson);
//Get (All Personadd) methode
router.get("/", getAllPersons);

//Get person by ID
router.get("/:id", getPersonById);

//Get one person
router.get("/:id", getOnePerson);

//delete person
router.delete("/:id", deletePerson);

//delete many persons
router.delete("/:id", deletePersons);

//Update person
router.put("./:id", updatePerson);
//Chain Search
router.search("./:id", queryChain);
module.exports = router;
