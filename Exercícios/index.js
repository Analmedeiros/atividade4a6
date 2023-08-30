
    // Exercício 4: Jogo de Cartas
    // Pedro e seus amigos estão jogando um jogo de cartas. Crie um programa que represente as
    // cartas de um baralho usando arrays. Em seguida, distribua 5 cartas aleatórias para cada

// function criarBaralho() {
//     const naipes = ['Copas', 'Espadas', 'Ouros', 'Paus'];
//     const valores = ['Ás', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valete', 'Dama', 'Rei'];
//     const baralho = [];

//     for (const naipe of naipes) {
//         for (const valor of valores) {
//             baralho.push(`${valor} de ${naipe}`);
//         }
//     }

//     return baralho;
// }

// function embaralharArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// function distribuirCartas(baralho, numCartas, numJogadores) {
//     const maos = [];

//     for (let i = 0; i < numJogadores; i++) {
//         const mao = [];
//         for (let j = 0; j < numCartas; j++) {
//             mao.push(baralho.pop());
//         }
//         maos.push(mao);
//     }

//     return maos;
// }


// const baralho = criarBaralho();
// embaralharArray(baralho);


// const numJogadores = 4;
// const numCartasPorJogador = 5;


// const maosDosJogadores = distribuirCartas(baralho, numCartasPorJogador, numJogadores);
// for (let i = 0; i < numJogadores; i++) {
//     console.log(`Mão do jogador ${i + 1}: ${maosDosJogadores[i].join(', ')}`);
// }


    // João está com muitas tarefas para fazer durante o dia. Crie um programa que permita que
    // João adicione suas tarefas a uma lista. Ao final do dia, exiba todas as tarefas que ele precisa
    // realizar.

//     let armazenar = [];

// function adicionarSemana() {
//   let novo = prompt("Digite uma tarefa para sua semana");
//   armazenar.push(novo);
//   alert("Tarefa adicionada: " + novo);
// }

// function removerItem() {
//   if (armazenar.length === 0) {
//     alert("Você não adicionou nenhuma tarefa");
//     return;
//   }

//   let remover = prompt("Digite o número para ser removido (0 até " + (armazenar.length - 1) + "):");
//   remover = parseInt(remover);

//   if (isNaN(remover) || remover < 0 || remover >= armazenar.length) {
//     alert("Número inválido.");
//     return;
//   }

//   let removido = armazenar.splice(remover, 1);
//   alert("Você removeu a tarefa" + removido[0]);
// }

// function exibirEstoque() {
//   if (armazenar.length === 0) {
//     alert("A lista está vazia.");
//     return;
//   }

//   let listaItens = "Tarefa\n";
//   armazenar.forEach(function (item, index) {
//     listaItens += index + ": " + item + "\n1";
//   });

//   alert(listaItens);
// }

// while (true) {
//   let opcao = prompt("Escolha uma opção:\n1. Adicionar tarefa\n2. Remover\n3. Exibir\n4. Sair");

//   switch (opcao) {
//     case "1":
//       adicionarSemana();
//       break;
//     case "2":
//       removerItem();
//       break;
//     case "3":
//       exibirEstoque();
//       break;
//     case "4":
//       alert("Até mais :)");
//       break;
//     default:
//       alert("Opção inválida.");
//   }
// }

// Exercício 6: Controle de Gastos
// Fernanda quer controlar seus gastos mensais. Crie um programa que permita que ela insira
// seus gastos diários em um array. No final do mês, exiba a soma total dos gastos.

// let gastosMensais = [];

// function adicionarGasto() {
//   let novoGasto = parseFloat(prompt("Digite o valor do gasto:"));
//   gastosMensais.push(novoGasto);
//   alert("Gasto adicionado: R$ " + novoGasto.toFixed(2));
// }

// function exibirGastos() {
//   if (gastosMensais.length === 0) {
//     alert("Você não adicionou nenhum gasto.");
//     return;
//   }

//   let listaGastos = "Gastos Mensais\n";
//   gastosMensais.forEach(function (gasto, index) {
//     listaGastos += index + ": R$ " + gasto.toFixed(2) + "\n";
//   });

//   alert(listaGastos);
// }

// function calcularSoma() {
//   let soma = 0;
//   for (let i = 0; i < gastosMensais.length; i++) {
//     soma += gastosMensais[i];
//   }
//   alert("A soma total dos gastos é: R$ " + soma.toFixed(2));
// }

// while (true) {
//   let opcao = prompt("Escolha uma opção:\n1. Adicionar gasto\n2. Exibir gastos\n3. Calcular soma\n4. Sair");

//   switch (opcao) {
//     case "1":
//       adicionarGasto();
//       break;
//     case "2":
//       exibirGastos();
//       break;
//     case "3":
//       calcularSoma();
//       break;
//     case "4":
//       alert("Até mais :)");
//       break;
//     default:
//       alert("Opção inválida.");
//   }
// }

