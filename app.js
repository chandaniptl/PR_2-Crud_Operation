const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

let employees = [];
let tasks = [];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/add", (req, res) => {
  const { name, department, salary } = req.body;
  const id = Date.now().toString();
  employees.push({ id, name, department, salary });
  console.log("Employee Added:", employees[employees.length - 1]);
  res.redirect("/view");
});

app.get("/view", (req, res) => {
  res.render("view", { employees });
});

app.get("/edit/:id", (req, res) => {
  const employee = employees.find(e => e.id === req.params.id);
  res.render("edit", { employee });
});

app.post("/emp/edit/:id", (req, res) => {
  const id = req.params.id;
  const index = employees.findIndex(emp => emp.id === id);
  if (index === -1) return res.send("Employee not found");

  const { name, department, salary } = req.body;

  employees[index] = {
    ...employees[index],
    name,
    department,
    salary
  };

  console.log("Employee Updated:", employees[index]);
  res.redirect("/view");
});

app.get("/delete/:id", (req, res) => {
  employees = employees.filter(e => e.id !== req.params.id);
  res.redirect("/view");
});

app.get("/task/delete/:id", (req, res) => {
  const id = req.params.id;
  const deletedTask = tasks.find(t => t.id === id);

  if (deletedTask) {
    console.log("Task Deleted:", deletedTask);
    tasks = tasks.filter(t => t.id !== id);
  } else {
    console.log("Attempted to delete unknown task ID:", id);
  }

  res.redirect("/tasks");
});

app.get("/task/:id", (req, res) => {
  const employee = employees.find(e => e.id === req.params.id);
  res.render("task", { employee });
});

app.post("/emp/task/:id", (req, res) => {
  const id = req.params.id;
  const employee = employees.find(emp => emp.id === id);
  if (!employee) return res.send("Employee not found");

  const { task, description } = req.body;
  employee.task = task;
  employee.description = description;

  console.log("Task Assigned to:", employee);
  res.redirect("/view");
});

app.post("/task", (req, res) => {
  const { name, priority, description, deadline } = req.body;
  const taskId = Date.now().toString();
  tasks.push({ id: taskId, name, priority, description, deadline });
  res.redirect("/tasks");
});

app.get("/tasks", (req, res) => {
  res.render("task_table", { tasks });
});

app.get("/task/edit/:id", (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  res.render("edit_task", { task });
});

app.post("/task/edit/:id", (req, res) => {
  const { name, priority, description, deadline } = req.body;
  const index = tasks.findIndex(t => t.id === req.params.id);
  tasks[index] = { id: req.params.id, name, priority, description, deadline };
  res.redirect("/tasks");
});

app.get("/task/delete/:id", (req, res) => {
  tasks = tasks.filter(t => t.id !== req.params.id);
  res.redirect("/tasks");
});

app.post("/emp/task/:id", (req, res) => {
  const employee = employees.find(emp => emp.id === id);
  if (!employee) return res.send("Employee not found");

  const { task, description } = req.body;
  employee.task = task;
  employee.description = description;

  console.log("Task Assigned to:", employee);
  res.redirect("/view-employee");
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
