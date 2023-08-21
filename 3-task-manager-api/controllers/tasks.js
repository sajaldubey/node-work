const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.status(200).json({ allTasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    console.log("Task Created");
    res.status(201).json({ task });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: error });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    // Error if syntax of ID matches but ID isnt present in DB
    if (!task) {
      return res.status(404).json({ msg: `No task found with ID ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    // Generic error if incoming ID is invalid
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    // IMPPPP
    // without options the returned task object is old object & validators dont run
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
      // Used for PUT requests
      // overwrite:true
    });
    if (!task) {
      return res.status(404).json({ msg: `No task found with ID ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `No task found with ID ${taskID}` });
    }
    // Ways to send Delete API responses

    // res.status(200).json({ task });
    // res.status(200).send();
    res.status(200).json({ msg: `Task with ID ${taskID} deleted!!` });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
