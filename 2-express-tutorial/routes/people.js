///// PEOPLE ROUTER
const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// router.get("/", getPeople);
// router.post("/", createPerson); // REST API kind of POST request
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

/////////////// ANOTHER WAY - ROUTERS
router.route("/").get(getPeople).post(createPerson);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
