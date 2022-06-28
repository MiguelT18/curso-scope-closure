// Variables

var a; // declarando
var b = "b"; // declaramos / asignamos
b = "bb"; // reasignación
var a = "aa"; // redeclaración

// Global Scope

var fruit = "Apple"; // global

console.log(fruit);
function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "Bolivia"; // global
  console.log(country);
}

countries();
console.log(country);
