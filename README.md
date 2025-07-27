# Employee Management Dashboard - Project Documentation

## 🔧 Technologies Used

* **Backend**: Node.js, Express.js
* **Templating**: EJS
* **Frontend**: HTML5, CSS3, Bootstrap 5
* **Utilities**: Body-Parser, Path

## 🔢 Folder Structure

```
Employee_Management/
├── public/               # Static files (CSS, JS)
├── views/                # EJS Templates
│   ├── index.ejs         # Welcome Page
│   ├── view.ejs          # View All Employees
│   ├── edit.ejs          # Edit Employee Form
│   ├── task.ejs          # Assign Task Form
│   ├── task_table.ejs    # View All Tasks
│   ├── edit_task.ejs     # Edit Task Form
├── app.js                # Main server file
├── package.json          # NPM Dependencies
```
---

## 🔌 Features

### ✍️ Employee Management

* Add New Employees
* Edit Existing Employee Details
* Delete Employee
* View List of Employees

### 📅 Task Management

* Assign Task to an Employee
* Edit Task Details
* Delete Task
* View All Tasks in a Table Format

### 🌎 Navigation & UI

* Bootstrap-based layout for professional UI
* Welcome Page
* Navbar navigation: Add Employee, View Employee, View Tasks

---

## 🚀 Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-repo/employee-management-dashboard.git
   cd employee-management-dashboard
   ```
2. **Install Dependencies**

   ```bash
   npm install
   ```
3. **Start the Server**

   ```bash
   node app.js
   ```
4. **Access the Application**
   Navigate to `http://localhost:3000` in your browser

---

## 📄 Sample Routes

| Route              | Method | Description                        |
| ------------------ | ------ | ---------------------------------- |
| `/`                | GET    | Welcome Page                       |
| `/add`             | POST   | Add a New Employee                 |
| `/view`            | GET    | View All Employees                 |
| `/edit/:id`        | GET    | Edit Employee Form                 |
| `/edit/:id`        | POST   | Submit Employee Edit               |
| `/delete/:id`      | GET    | Delete Employee                    |
| `/task/:id`        | GET    | Assign Task Form for an Employee   |
| `/emp/task/:id`    | POST   | Submit Task Assignment to Employee |
| `/tasks`           | GET    | View All Assigned Tasks            |
| `/task/edit/:id`   | GET    | Edit Task Form                     |
| `/task/edit/:id`   | POST   | Submit Task Edit                   |
| `/task/delete/:id` | GET    | Delete a Task                      |

---

## 💡 Future Enhancements

* Connect to MongoDB or MySQL database for persistence
* Add authentication for admin access
* Filter/search functionality for employees and tasks
* Task status updates and completion tracking

---

## 🙏 Credits

> This project serves as a foundational tool for managing employees and their tasks within a mid-sized organization. It can be scaled further with DB integration and user role management.
