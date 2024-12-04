// global scope

var gVar = "ini global var";
let gLet = "ini global let";
const gConst = "ini global const";

console.log(gVar, gLet, gConst);

gVar = "ganti isi var";
gLet = "ganti isi let";
// gConst = "ganti isi const"; // TypeError: Assignment to constant variable.

console.log(gVar, gLet, gConst);

// function scope
function fnScope() {
  var fnScopeVar = "ini fnScope var";
  let fnScopeLet = "ini fnScope let";
  const fnScopeConst = "ini fnScope const";

  console.log("fnScopeVar (fnScope): ", fnScopeVar);
  console.log("fnScopeLet (fnScope): ", fnScopeLet);
  console.log("fnScopeConst (fnScope): ", fnScopeConst);
}
fnScope();

// block scope
if (true) {
  var blockVar = "ini block Var";
  let blockLet = "ini block let";
  const blockConst = "ini block const";

  console.log("blockVar: ", blockVar);
  console.log("blockLet: ", blockLet);
  console.log("blockConst: ", blockConst);
}

// hoisting scope : variable blm di inisiasikan
function fnHoistingVariables() {
  console.log("fnHoistingVar: ", fnHoistingVar); // bukti var tidak aman digunakan
  //   console.log("fnHoistingLet: ", fnHoistingLet); // Cannot access 'fnHoistingLet' before initialization
  //   console.log("fnHoistingConst: ", fnHoistingConst); // Cannot access 'fnHoistingConst' before initialization

  var fnHoistingVar = "ini hoisting var";
  let fnHoistingLet = "ini hoisting let";
  const fnHoistingConst = "ini hoisting const";
}

fnHoistingVariables();
