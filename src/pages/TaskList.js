import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "./redux/tasksSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.list);

  useEffect(() => {
    // Simulating a fetch call
    const fetchTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      dispatch(setTasks(data.slice(0, 10))); // Fetch first 10 tasks
    };

    fetchTasks();
  }, [dispatch]);

  return (
    <div className="task-list-container">
      <h1>Task List</h1>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span className="task-title">{task.title}</span>
            <span
              className={`task-status ${
                task.completed ? "completed" : "pending"
              }`}
            >
              {task.completed ? "Completed" : "Pending"}
            </span>
            <button className="edit-btn">Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
