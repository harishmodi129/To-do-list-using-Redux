import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../redux/taskslice";
import { useNavigate, useParams } from "react-router-dom";

const EditTaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) =>
    state.tasks.tasks.find((task) => task.id === parseInt(id))
  );
  const [updatedTask, setUpdatedTask] = useState(task || {});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateTask({ id, updatedTask })).unwrap();
      navigate("/");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  if (!task) return <p>Task not found.</p>;

  return (
    <div>
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={updatedTask.title}
          onChange={(e) =>
            setUpdatedTask({ ...updatedTask, title: e.target.value })
          }
          required
        />
        <label>
          Completed:
          <input
            type="checkbox"
            checked={updatedTask.completed}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, completed: e.target.checked })
            }
          />
        </label>
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTaskPage;
