
var turma = [];




function enviar(){
    //pegar o valor de uma caixa de texto e amarzenar numa variavel
    var aluno1 = document.getElementById("aluno1").value;
    var aluno2 = document.getElementById("aluno2").value;
    var aluno3 = document.getElementById("aluno3").value;
    var aluno4 = document.getElementById("aluno4").value;
    var aluno5 = document.getElementById("aluno5").value;
    //colocar a variavel na lista
    turma.push(aluno1);
    turma.push(aluno2);
    turma.push(aluno3);
    turma.push(aluno4);
    turma.push(aluno5);
    //imprimir a lista no html
    console.log(turma);
    
    






};