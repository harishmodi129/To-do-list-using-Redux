import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchTasks as fetchTasksAPI,
  addTask as addTaskAPI,
  editTask as editTaskAPI,
} from "../services/api.js";

// Async Thunks
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  console.log("Fetching tasks...");
  const tasks = await fetchTasksAPI();
  console.log("Fetched tasks:", tasks);
  return tasks;
});

export const addTask = createAsyncThunk("tasks/addTask", async (newTask) => {
  console.log("Adding task:", newTask);
  const task = await addTaskAPI(newTask);
  console.log("Added task:", task);
  return task;
});

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, updatedTask }) => {
    console.log(`Updating task with ID ${id}:`, updatedTask);
    const task = await editTaskAPI(id, updatedTask);
    console.log("Updated task:", task);
    return task;
  }
);

// Redux Slice
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Tasks
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Add Task
      .addCase(addTask.fulfilled, (state, action) => {
        console.log("Adding task to state:", action.payload);
        const newTask = {
          ...action.payload,
          id:
            state.tasks.length > 0
              ? state.tasks[state.tasks.length - 1].id + 1
              : 1,
        };
        state.tasks.push(newTask);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.error = action.error.message;
      })

      // Update Task
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        if (index !== -1) state.tasks[index] = action.payload;
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default tasksSlice.reducer;
