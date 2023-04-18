// function pulaLinha(){
//     document.write('<br>');
// }
// function mostra(frase){
//     document.write(frase);
//     pulaLinha();
// }
// function calculaIMC(peso, altura){
//     var imc = peso / (altura * altura);
//     mostra('O IMC é: ' + imc)
//     pulaLinha();
// }


// calculaIMC(90, 1.72);

// var pesoDiogo = 72;
// var alturaDiogo = 1.86;

// var imcDiogo = pesoDiogo / (alturaDiogo * alturaDiogo);

// var pesoAmigo = 68;
// var alturaAmigo = 1.62;
// var imcAmigo = pesoAmigo / (alturaAmigo * alturaAmigo);

// mostra('O IMC de Diogo é ' + Math.round(imcDiogo) + ' e o IMC do seu amigo é: ' + imcAmigo);

// pulaLinha();

// // return


// function calcularIMC(peso, altura){
//     //var imc = peso / (altura * altura);
//     pulaLinha();
//     //return imc;

//     //ou 
//     return imc = peso / (altura * altura);

// }

// var rodrigo = calcularIMC(152, 1.92);
// var pedro = calcularIMC(58, 1.5);
// mostra(rodrigo);
// mostra(pedro);
// var SomaImc = rodrigo + pedro
// document.write(SomaImc)

// function pulaLinha(){
//     document.write('<br>');
// }
// function mostra(frase){
//     document.write(frase);
//     pulaLinha();
// }
// function calculaIMC(peso, altura){
//     return imc = peso / (altura * altura);
// }

// var alturaInformada = prompt('qual sua altura? ');
// var pesoInformado = prompt('qual seu peso? ');

// var imc = calculaIMC(pesoInformado, alturaInformada)
// mostra(imc)

// function mostra(mostra){
//     document.write(mostra);
//     pulaLinha();
// }
// function pulaLinha(){
//     document.write('<br>');
// }

// var anoCopa = 1930;
// var limite = parseInt(prompt('entre com o limite'));
// while(anoCopa <= limite){
//     mostra(anoCopa);
//     anoCopa +=4;
// }

// function mostra(mostra){
//     document.write(mostra);
//     pulaLinha();
// }
// function pulaLinha(){
//     document.write('<br>');
// }

// var fator1 = parseInt(prompt('tabuada de quê? '));
// var mult = 1;
// while(mult <= 10){
//     mostra(mult + ' x ' + fator1 + ' = ' + (mult*fator1))
//     mult++
// }

// var tabu = parseInt(prompt('Tabuada de qual? '));
// for(mult = 1; mult <= 10; mult++){
//     mostra(mult + ' x ' + tabu + ' = ' + (mult*tabu));
// }

// mostra('FIM!');

// function mostra(mostra){
//     document.write(mostra);
//     pulaLinha();
// }
// function pulaLinha(){
//     document.write('<br>');
// }

// var totalFamiliares = parseInt(prompt('Quantidade de familiares: '));
// var totalIdades = 0;
// var contador = 1;
// while(contador <= totalFamiliares){
//     var idade = parseInt(prompt('Qual idade? '));
//     var totalIdades = totalIdades + idade;
//     contador++;
// }
// var mediaIdades = totalIdades/totalFamiliares;
// mostra('a media é: ' + mediaIdades);

// function mostra(mostra){
//     document.write(mostra);
//     pulaLinha();
// }
// function pulaLinha(){
//     document.write('<br>');
// }

// var numeroGerado = Math.round(Math.random()*10);

// contador = 1;
// while(contador <=3){
//     var numeroUser = parseInt(prompt('Digite um numero: '))
//     if (numeroUser == numeroGerado){
//         mostra('Vc acertou!')
//         break;
//     }else{
//         mostra('Erreou. Tente novamente!')
//     }
//     contador++;
// }

// function mostra(mostra){
//     document.write(mostra);
//     pulaLinha();
// }
// function pulaLinha(){
//     document.write('<br>');
// }

// for(var linha = 1; linha <=3; linha++){
//     for(var coluna = 1; coluna <= 10; coluna++){
//         document.write('*')
//     }
//     pulaLinha();
// }

// var segredo = Math.round(Math.random()*10);



function sorteia() {

    return Math.round(Math.random() * 10);
}

function sorteiaNumeros(quantidade) {

    var segredos = [];

    var numero = 1;

    while(numero <= quantidade) {

        var numeroAleatorio = sorteia();

        if(numeroAleatorio !== 0 ) {

            var achou = false;

            for(var posicao = 0; posicao < segredos.length; posicao++) {

                if(segredos[posicao] == numeroAleatorio) {
                    achou = true;
                    break;
                }
            }

            if(achou == false) {
                segredos.push(numeroAleatorio);	
                numero++;
            } 
        }
    }

    return segredos;
}

var segredos = sorteiaNumeros(5);

console.log(segredos);

var input = document.querySelector("input");
input.focus();	

function verifica() {

    var achou = false;

    for(var posicao = 0; posicao < segredos.length; posicao++) {

        if(input.value == segredos[posicao]) {

            alert("Você ACERTOU!");
            achou = true;
            break;
        }
    }

    if(achou == false) {

        alert("Você ERROU!");	
    }
    

    input.value = "";
    input.focus();		
}

var button = document.querySelector("button");

button.onclick = verifica;


