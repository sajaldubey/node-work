let { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).json({ success: true, person: name });
  }
  res.status(401).json({ success: false, msg: "Pls provide name" });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  console.log(id, name);
  res.send("DONE");
};

const deletePerson = (req, res) => {
  const { id } = req.params;

  console.log(id);
  res.send("Deleted");
};

module.exports = { getPeople, createPerson, updatePerson, deletePerson };
