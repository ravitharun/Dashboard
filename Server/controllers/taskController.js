const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const { title, description, priority } = req.body;

    const task = new Task({
      title,
      description,
      priority,
      userId: req.user.id,
    });

    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id }).sort({ _id: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
};

exports.getSingleTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, userId: req.user.id });

    if (!task) return res.status(404).json({ msg: "Task not found for this user" });

    res.json(task);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const updatedData = req.body;

    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      updatedData,
      { new: true }
    );

    if (!task) return res.status(404).json({ msg: "Task not found or unauthorized" });

    res.json(task);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!task) return res.status(404).json({ msg: "Task not found or unauthorized" });

    res.json({ msg: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
};
