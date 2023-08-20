const getAllTasks = (req, res) => {
  res.send("Get All Tasks");
};

const createTask = (req, res) => {
  res.send("Create Task");
};

const getSingleTask = (req, res) => {
  res.send("Get One Task");
};

const updateTask = (req, res) => {
  res.send("Update Task");
};

const deleteTask = (req, res) => {
  res.send("delete Task");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
