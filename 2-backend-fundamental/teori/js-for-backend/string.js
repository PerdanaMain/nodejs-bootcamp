const task = {
  title: "ini judul kerja-nya",
  description: "ceritain detail pekerjaanya disini",
  isDone: false,
};
const { title, description, isDone } = task;

// Literal (ES6)
const taskStringFromDestruct = `task title: ${title}, description: ${description}, isDone: ${isDone}`;
const taskStringFromObject = `task title: ${task.title}, description: ${task.description}, isDone: ${task.isDone}`;

console.log("taskStringFromDestruct: ", taskStringFromDestruct);
console.log("taskStringFromObject: ", taskStringFromObject);
