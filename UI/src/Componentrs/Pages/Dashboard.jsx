import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/tasks", form);
    setTasks([...tasks, res.data]);
    setForm({ title: "", description: "", priority: "" });
    setShowModal(false);
  };

  const getTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">

      {/* HEADER */}
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800">
          Task Dashboard
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition"
        >
          + Add Task
        </button>
      </div>

      {/* TASK LIST */}
      <div className="mt-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white shadow-md rounded-xl p-5 border-t-4"
              style={{
                borderColor:
                  task.priority === "High"
                    ? "#e11d48"
                    : task.priority === "Medium"
                    ? "#f59e0b"
                    : "#10b981",
              }}
            >
              <h3 className="text-lg font-bold text-gray-900">{task.title}</h3>
              <p className="text-gray-700 mt-2">{task.description}</p>

              <span
                className={`inline-block mt-3 px-3 py-1 text-sm text-white rounded-lg ${
                  task.priority === "High"
                    ? "bg-red-600"
                    : task.priority === "Medium"
                    ? "bg-yellow-600"
                    : "bg-green-600"
                }`}
              >
                {task.priority}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center p-4 z-50">

          {/* MODAL CARD */}
          <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 animate-fadeIn relative">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition text-xl"
            >
              ✖
            </button>

            <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
              Add New Task
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                name="description"
                placeholder="Task Description"
                value={form.description}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                rows="4"
              ></textarea>

              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Priority</option>
                <option className="text-red-600" value="High">High</option>
                <option className="text-yellow-600" value="Medium">Medium</option>
                <option className="text-green-600" value="Low">Low</option>
              </select>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-lg transition"
              >
                Add Task
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Dashboard;
