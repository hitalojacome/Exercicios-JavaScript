const n1 = parseInt(prompt(nome + " digite o primeiro valor"))
const n2 = parseInt(prompt("Digite o segundo valor"))

alert("Antes da troca: \nPrimeiro valor: " + n1 + "\nSegundo valor: " + n2);

const temp = n1;
n1 = n2;
n2 = temp;

alert("Depois da troca: \nPrimeiro valor: " + n1 + "\nSegundo valor: " + n2);