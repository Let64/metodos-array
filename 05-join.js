//5. join() - Transformando array em texto
//Une todos os elementos do array em uma única String usando um separador.

console.log("=== 5. join() ===");

//Exemplo 1 - separador padrão (vírgula)
const nomes = ["Ana", "João", "Carlos"];
console.log("Com separador padrão:", nomes.join()); // "Ana","João","Carlos"

//Exemplo 2 - escolhendo separador personalizado
console.log("Com hífen:", nomes.join(" - ")); //"Ana"  - "João" - "Carlos"

//Exemplo 3 - lista de tecnologias
const tecnologias = ["HTML", "CSS", "javascript", "React"];
const texto = tecnologias.join(" | ");
console.log("Tecnologias formadas:", texto);

//💡 Dica: O array guarda dados. O join() ajuda a tramsformar esses dados em apresentação textual!