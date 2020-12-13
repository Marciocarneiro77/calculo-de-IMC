function CalculoIMC(){

    //pegar os valores de peso e altura
let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value;

//calcular o IMC --> PESO / (ALTURA * ALTURA)
let imc = peso / (altura*altura);
console.log(imc);

if(imc<20){
    //SE FOR, MOSTRAR "MAGRO"
    document.getElementById("mensagem").innerText = "Sou pobre, porém honrado!";
    document.getElementById("imagem").src="images/magro_mais.gif";
}

if(imc>25){
    // SE FOR MOSTRAR "SOBREPESO"
    document.getElementById("mensagem").innerText = "NOSSA, PROCURE AJUDA..VOCÊ ESTÁ OBESO.";
    document.getElementById("imagem").src="images/seu_barriga.gif";
}

else{
    //SE NÃO, MOSTRAR "OK"
    document.getElementById("mensagem").innerText = "Ok, VC ESTÁ DE PARABÉNS!";
    document.getElementById("imagem").src="images/normal.gif";
}
} 