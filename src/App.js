import React from 'react';
import './App.css';

function App() {
  var operacao = parseInt(prompt("Digite o número do exercício que deseja realizar (1 ao 13):")); 
  switch (operacao) {
      case 1:
        // Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de 
        // conversão é F ← (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
        var celsius = parseInt(prompt("Digite a temperatura em celsius:"));
        var fahrenheit = (9 * celsius + 160) / 5;
        alert("A temperatura convertida em Fahrenheit é de: " + fahrenheit +"°");
        break;
        case 2:
          // Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de 
          // conversão é C ← (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
          var fahrenheit = parseInt(prompt("Digite a temperatura em Fahrenheit:"));
          var celsius = (fahrenheit - 32)*(5/9);
          alert("A temperatura em Celsius é de: " + celsius);
          break;
          case 3:
            // Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:
            // Volume = pi * Raio^2 * Altura  
            var raio = parseInt(prompt("Digite o valor do raio:"));
            var altura = parseInt(prompt("Digite o valor da altura:"));
            var volume = 3.14*Math.pow(raio, 2)*altura;
            alert("O volume é de: " + volume);          
            break;
            case 4:
              //  Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um 
              // automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto 
              // (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a 
              // distância percorrida com a fórmula DISTANCIA ← TEMPO * VELOCIDADE. Possuindo o valor da 
              // distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula 
              // LITROS_USADOS ← DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade 
              // média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a 
              // quantidade de litros (LITROS_USADOS) utilizada na viagem.
              var tempo = parseInt(prompt("Digite o tempo gasto:"));
              var velocidade = parseInt(prompt("Digite a velocidade média:"));
              var distancia = tempo * velocidade;
              var litrousados = distancia / 12
              alert("A velocidade média foi: " + velocidade + ". O tempo gasto foi: " + tempo +
              ". A distância percorrida foi de: " + distancia + ". E foram gastos: " + litrousados +
              " litros de gasolina.");
              break;
              case 5:
                // Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula 
                // PRESTACAO ← VALOR + (VALOR * TAXA/100) * TEMPO.
                var valor = parseInt(prompt("Digite o valor:"));
                var taxa = parseInt(prompt("Digite a taxa:"));
                var tempo = parseInt(prompt("Digite o tempo de atraso:"));
                var prestacao = valor+(valor*taxa/100)*tempo;
                alert("O valor da prestação atrasada é de: R$"+prestacao);                       
                break;
                case 6:
                  // Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de 
                  // forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da 
                  // variável A. Apresentar os valores trocados
                  var valor1 = parseInt(prompt("Digite o primeiro valor:"));
                  var valor2 = parseInt(prompt("Digite o segundo valor:"));
                  var valorreserva = valor1;
                  var valor1 = valor2;
                  var valor2 = valorreserva;
                  alert("O primeiro valor passou a ser: " + valor1 + ". E o segundo valor passou a ser: " + valor2);
                  break;
                  case 7:
                    // Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na 
                    // utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, 
                    // devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim 
                    // C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de 
                    // multiplicação e apresentar doze resultados de saída. 
                    var numero1 = parseInt(prompt("Digite o primeiro número:"));
                    var numero2 = parseInt(prompt("Digite o segundo número:"));
                    var numero3 = parseInt(prompt("Digite o terceiro número:"));                      var numero4 = parseInt(prompt("Digite o quarto número:"));
                    var result1 = numero1+numero2;
                    var result2 = numero1+numero3;
                    var result3 = numero1+numero4;
                    var result4 = numero2+numero3;
                    var result5 = numero2+numero4;
                    var result6 = numero3+numero4;
                    var result7 = numero1*numero2;
                    var result8 = numero1*numero3;
                    var result9 = numero1*numero4;
                    var result10 = numero2*numero3;
                    var result11= numero2*numero4;
                    var result12 = numero3*numero4;                      alert("A soma entre "+numero1+" e "+numero2+" é de: "+result1);
                    alert("A soma entre "+numero1+" e "+numero3+" é de: "+result2);
                    alert("A soma entre "+numero1+" e "+numero4+" é de: "+result3);
                    alert("A soma entre "+numero2+" e "+numero3+" é de: "+result4);
                    alert("A soma entre "+numero2+" e "+numero4+" é de: "+result5);
                    alert("A soma entre "+numero3+" e "+numero4+" é de: "+result6);
                    alert("A multiplicação entre "+numero1+" e "+numero2+" é de: "+result7);
                    alert("A multiplicação entre "+numero1+" e "+numero3+" é de: "+result8);
                    alert("A multiplicação entre "+numero1+" e "+numero4+" é de: "+result9);
                    alert("A multiplicação entre "+numero2+" e "+numero3+" é de: "+result10);
                    alert("A multiplicação entre "+numero2+" e "+numero4+" é de: "+result11);
                    alert("A multiplicação entre "+numero3+" e "+numero4+" é de: "+result12);
                    break;
                    case 8:
                      // Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula 
                      // VOLUME ← COMPRIMENTO * LARGURA * ALTURA.
                      var altura = parseInt(prompt("Digite a altura:"));
                      var largura = parseInt(prompt("Digite a largura:"));
                      var comprimento = parseInt(prompt("Digite o comprimento:"));
                      var volume = comprimento*largura*altura;
                      alert("O volume é de: " + volume);
                      break;
                      case 9:
                        // Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo 
                        // segundo.
                        var numero1 = parseInt(prompt("Digite o primeiro número:"));
                        var numero2 = parseInt(prompt("Digite o segundo número:"));
                        var diferenca = numero1-numero2;
                        var quadrado = diferenca*diferenca;
                        alert("O quadrado da diferença entre: " + numero1 + " e "+numero2+ " é de: "+quadrado);
                        break;
                        case 10:
                          // Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em 
                          // dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares 
                          // disponível com o usuário, para que seja apresentado o valor em moeda brasileira
                          var valordolar = parseInt(prompt("Digite o valor do dólar:"));
                          var quantdolar = parseInt(prompt("Digite quantos dólares você tem:"));
                          var real = quantdolar * valordolar;
                          alert("Você tem o equivalente à: R$"+real);
                          break;
                          case 11:
                            // Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em 
                            // real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível 
                            // com o usuário, para que seja apresentado o valor em moeda americana.
                            var valordolar = parseInt(prompt("Digite o valor do dólar:"));
                            var quantreal = parseInt(prompt("Digite quantos reais você tem:"));
                            var dolar = quantreal / valordolar;
                            alert("Você tem o equivalente à: R$" + dolar);
                            break;
                            case 12:
                              // Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à 
                              // soma dos quadrados dos três valores lidos.
                              var valor1 = parseInt(prompt("Digite o primeiro valor:"));
                              var valor2 = parseInt(prompt("Digite o segundo valor:"));
                              var valor3 = parseInt(prompt("Digite o terceiro valor:"));
                              var result = (Math.pow(valor1, valor1)+Math.pow(valor2, valor2)+Math.pow(valor3, valor3));
                              alert("O resultado da soma dos quadrados dos valores é de: " + result);
                              break;
                              case 13:
                                // Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o 
                                // quadrado da soma dos três valores lidos.
                                var valor1 = parseInt(prompt("Digite o primeiro valor:"));
                                var valor2 = parseInt(prompt("Digite o segundo valor:"));
                                var valor3 = parseInt(prompt("Digite o terceiro valor:"));
                                var result = (valor1+valor2+valor3);
                                var quadrado = result*result;
                                alert("O quadrado da soma dos valores é de: " + quadrado);                              
                                break;
  
    default:
      break;
  }
  return (

    <div className="App">
      
    </div>
  );
}

export default App;
