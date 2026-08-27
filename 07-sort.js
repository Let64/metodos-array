// 7. sort()- Organizando
//Ordena os elementos do array (por padrão como texto/ordem alfabética).
//ATENÇÃO: sort() altera o array original!

console.log("=== 7. sort() ===");

//Exemplo 1 - nomes (ordem alfabética)
const nomes = ["Carlos", "Ana", "Pedro", "Bruno"];
nomes.sort();
console.log("Nomes ordenados:", nomes);

//Exemplo 2 - cidades (ordem alfabética)
const cidades = ["São Paulo", "Campinas", "Valinhos", "Vinhedo"];
cidades.sort();
console.log("Cidades ordenadas:" , cidades)

//Exemplo 3 - números (A famosa pegadinha!)
const numeros = [10, 2, 30, 5];
// Se usarmos apenas numeros.sort()
//O JS converte para texto e ordem como string ("10", "2", "30", "5") dando:
//[10, 2, 30, 5] ou 
numeros.sort((a, b) => a -b);
console.log("Números ordenados corretamente:" , numeros);