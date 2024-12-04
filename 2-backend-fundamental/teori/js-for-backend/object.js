// initiate
const task = {
  title: "ini judul kerja-nya",
  description: "ceritain detail pekerjaanya disini",
  isDone: false,
};

// const task2 = new Object("test");

console.log(task);
// console.log(task2);

//Spread (ES6)
const taskSpread = { ...task };
console.log("task spread: ", taskSpread);

// destruct object
const { title, description, isDone } = task;
console.log("destruct -> title: ", title);
console.log("destruct -> description: ", title);
console.log("destruct -> isDone: ", isDone);
