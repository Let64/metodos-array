// 1. includes() - "Tem esse item?"
//Responde á pergunta: "Existe" (retorna true ou falso)

console.log("=== 1. includes() ===");

//Exemplo1 - lista de frutas
const frutas = ["Maçã", "Banana", "Laranja"];

console.log("Tem Banana?", frutas.includes("Banana")); //true (porque Banana está no array)

console.log("Tem Uva?", frutas.includes("Uva")); // false (porque Uva não está no array)

//Exemplo2 - usando if/else
 if(frutas.includes("Banana")) {
    console.log("Tem Banana");
 } else {
    console.log("Não tem Banana");
 }

 // Exemplo3 -- lista de alunos
 const alunos = ["Ana", "João", "Carlos"];
 const nome = "João";

 if (alunos.includes(nome)) {
    console.log("Aluno encontrado!");
 } else {
    console.log("Aluno não encontrado");
 }