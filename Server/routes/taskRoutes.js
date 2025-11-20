const express = require("express");
const auth = require("../middleware/authMiddleware");
const { createTask, getSingleTask, getTasks, updateTask, deleteTask } = require("../controllers/taskcontroller");



const router = express.Router();

router.post("/", auth, createTask);
router.get("/", auth, getTasks);
router.get("/:id", auth, getSingleTask);
router.put("/:id", auth, updateTask);
router.delete("/:id", auth, deleteTask);

module.exports = router;
