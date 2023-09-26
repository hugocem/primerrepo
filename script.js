console.log("hola mundo");
const x = "Hola";
console.log(x);

// datos mandados con la solicutud POST
let _datos = {
  titulo: "foo",
  principal: "bar",
  Id: 1,
};
var i = 0;
var resultado = "nada";
fetch("https://jsonplaceholder.typicode.com/todos/", {
  method: "GET",
  headers: { "Content-type": "application/json;charset=UTF-8" },
})
  .then((response) => response.json())
  .then((data) => {
    // console.log(json);
    this.i = this.i + 1;
    this.resultado = data;
  });
console.log(this.resultado);

var x = fetch("https://api.quotable.io/random")
  .then((res) => res.json())
  .then((json) => json.content);
console.log(x);
