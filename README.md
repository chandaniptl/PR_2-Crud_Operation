<img width="1920" height="984" alt="emp1" src="https://github.com/user-attachments/assets/8df86387-fdbe-45fe-8fcf-d7a8f80cfe53" />

<img width="1920" height="969" alt="emp2" src="https://github.com/user-attachments/assets/693721d0-41ff-440a-81b9-af3de23d4bca" />

<img width="1920" height="955" alt="emp3" src="https://github.com/user-attachments/assets/b536ff5a-acd4-4fca-baa4-76e24a3d5514" />

<img width="1920" height="964" alt="emp4" src="https://github.com/user-attachments/assets/f815b8c0-fea0-4987-a08c-ec3f3fdcc140" />

<img width="1920" height="971" alt="emp5" src="https://github.com/user-attachments/assets/b031ecb3-b1d1-41a9-87f1-bfe2f8b8e310" />


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
