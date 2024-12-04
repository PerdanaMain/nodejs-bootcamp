const task = {
  title: "ini judul kerja-nya",
  description: "ceritain detail pekerjaanya disini",
  isDone: false,
};

function getString(arg) {
  return `Task ini berjudul: ${arg.title}, dan pekerjaan nya ${
    task.isDone ? "Telah Selesai" : "Belum Selesai"
  }`;
}
console.log(getString(task));
