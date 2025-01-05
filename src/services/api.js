import axios from "axios";

// Create an Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch tasks
export const fetchTasks = async () => {
  try {
    const response = await axiosInstance.get("/");
    return response.data.slice(0, 10); // Fetch the first 10 tasks
  } catch (error) {
    console.error("Error fetching tasks:", error.message);
    throw error; // Throw error for further handling
  }
};
let localTaskId = 1;
// Add a task (local simulation only; won't reflect on the dummy API)
export const addTask = async (task) => {
  try {
    const response = await axiosInstance.post("/", task);
    const simluatedResponse = { ...response.data, id: localTaskId++ };
    return simluatedResponse; // Return the added task data
    console.log("Add Task API Response:", response.data);
  } catch (error) {
    console.error("Error adding task:", error.message);
    throw error;
  }
};

// Edit a task (local simulation only; won't reflect on the dummy API)
export const editTask = async (id, task) => {
  try {
    const response = await axiosInstance.put(`/${id}`, task);
    return response.data; // Return the updated task data
  } catch (error) {
    console.error(`Error editing task with ID ${id}:`, error.message);
    throw error;
  }
};
