import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskslice";
import { useNavigate } from "react-router-dom";

const AddTaskPage = () => {
  console.log("AddTaskPage Component Rendered");

  const [task, setTask] = useState({ title: "", completed: false });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(addTask(task)).unwrap();
      // Log the result
      navigate("/");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div>
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          required
        />
        <label>
          Completed:
          <input
            type="checkbox"
            checked={task.completed}
            onChange={(e) => setTask({ ...task, completed: e.target.checked })}
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskPage;
