const Person = require("../models/Person");
//Get (All Personadd) methode
exports.getAllPersons = async (req, res) => {
  try {
    const personList = await Person.find();
    res.send({ persons: personList, msg: "get al person" });
  } catch (error) {
    res.status(400).send({ msg: "failed", error });
  }
};
//Get person by ID
exports.getPersonById = async (req, res) => {
  try {
    const { id } = req.params;
    const findPerson = await Person.findById(id);
    res.send({ msg: "get the person", person: findPerson });
  } catch (error) {
    res.status(400).send({ msg: "failed to get the person", error });
  }
};
//Get one person
exports.getOnePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const findOnePerson = await Person.findOne({ _id: id });
    res.send({ msg: "get the person", person: findOnePerson });
  } catch (error) {
    res.status(400).send({ msg: "failed to get the person", error });
  }
};

//Create new person
exports.addPerson = async (req, res) => {
  try {
    const findUser = await Person.findOne({ Name: req.body.Name });
    if (findUser) {
      return res.status(400).send({ msg: "Name should be unique" });
    }
    const newPerson = new Person({ ...req.body });
    await newPerson.save();
    res.send({ msg: "user added", person: newPerson });
  } catch (error) {
    res.status(400).send({ msg: "user not saved", error });
  }
};
//delete person by id
exports.deletePerson = async (req, res) => {
  try {
    const { id } = req.params;
    await Person.deleteOne({ _id: id });
    res.send({ msg: "delete succ" });
  } catch (error) {
    res.status(400).send({ msg: "failed to delete person", error });
  }
};
//delete many persons
exports.deletePersons = async (req, res) => {
  try {
    const personList = await Person.deleteMany();
    res.send({ persons: personList, msg: "delete succ" });
  } catch (error) {
    res.status(400).send({ msg: "failed to delete person", error });
  }
};
//update person by id
exports.updatePerson = async (req, res) => {
  try {
    const { id } = req.params;
    await Person.updateOne({ _id: id }, { $set: { ...req.body } });
    res.send({ msg: "updated succ" });
  } catch (error) {
    res.status(400).send({ msg: "failed to update person", error });
  }
};
// Chain Search Query Helpers to Narrow Search Results

exports.queryChain = async (req, res) => {
  try {
    const foodToSearch = "Spaguetti";
    const Object = { favoriteFoods: foodToSearch };
    await Person.find(Object).sort({ name: 1 }).limit(2).select({ age: 20 });
    res.send({ msg: "search succ" });
  } catch (error) {
    res.status(400).send({ msg: "not result ", error });
  }
};
