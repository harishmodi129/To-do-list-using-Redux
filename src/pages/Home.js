import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../redux/taskslice";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    if (tasks.length === 0) {
      dispatch(fetchTasks());
    }
  }, [dispatch, tasks.length]);

  // Render the tasks

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error fetching tasks: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task List</h1>
      <Link to="/add-task">
        <button style={{ marginBottom: "20px" }}>Add New Task</button>
      </Link>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <h3>{task.title}</h3>
            <p>Status: {task.completed ? "Completed" : "Pending"}</p>
            <Link to={`/edit-task/${task.id}`}>
              <button>Edit</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
