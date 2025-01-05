# To-Do List Manager

A responsive web application built using **React.js** to manage tasks efficiently. The application supports viewing, adding, and editing tasks while maintaining state using **Redux Toolkit** or **Context API**. It interacts with a dummy REST API ([JSONPlaceholder](https://jsonplaceholder.typicode.com)) to fetch and update task data.

---

## Features

### 1. Home Page

- Displays a list of tasks with their **title**, **description**, and **status**.
- Fetches task data from the dummy API and displays it in a responsive layout.
- Allows navigation to the **Add Task** and **Edit Task** pages.

### 2. Add Task Page

- Provides a form for users to create new tasks.
- Includes fields for entering the task title, description, and status (e.g., completed or pending).
- Saves the new task locally (since JSONPlaceholder does not persist new data).

### 3. Edit Task Page

- Allows users to update the status of an existing task.
- Updates task details using the dummy API.

---

## Tech Stack

### Frontend

- **React.js**: For building the user interface.
- **Redux Toolkit** (or Context API): For managing the application state.
- **Axios** (or Fetch API): For making REST API calls.
- **CSS Modules** (or Bootstrap): For styling and ensuring responsiveness.

---

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- npm or yarn (package manager)

---

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/harishmodi129/To-do-list-using-Redux.git
   cd To-do-list-using-Redux
   ```
