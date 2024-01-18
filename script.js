
 function buttonResult(){

    //Guardando o valor na variavel 
    let numbType = parseFloat(document.getElementById('salaryInput').value)


    if(isNaN(numbType)){ //validação 
        alert("Precisa ser um número")
    }

    //Exibir valor obtido 
    let resulNumb = document.getElementById('salary2');
    resulNumb.innerHTML = ` Salário antes do Reajuste: <strong> R$ ${numbType}  `;

    percentage(numbType)
 }
// submit para impedir de atualizar 
document.getElementById('salaryForm').addEventListener('submit', function(event){
    event.preventDefault()
    buttonResult()
})

function percentage(numbType){

    let porcent = 0;

    if(numbType <= 280 ){
        porcent = 0.2

    } else if( numbType > 280 && numbType <= 700){
        porcent = 0.15

    } else if (numbType > 700 && numbType <= 1500){
        porcent = 0.1

    } else if (numbType > 1500){
        porcent = 0.05
    }

    let aumentPorcent = porcent * 100
   

    let resultPorcent = document.getElementById('salary3')
    resultPorcent.innerHTML = `Percentual de aumento aplicado: <strong> ${aumentPorcent}%  ` 

    valueAument(numbType, aumentPorcent)
 }

 // valor do aumento
 function valueAument(numbType, aumentPorcent){

    let valueAument = numbType * aumentPorcent

    let value = Math.floor(valueAument/ 100)


    let result = document.getElementById('salary4')
    result.innerHTML = `Valor do Aumento:<strong>  R$ ${value}`

    newSalary(valueAument, numbType)
 }

 
 function newSalary(valueAument, numbType){

    let newSalary = numbType + valueAument

    let newS = Math.floor(newSalary/10)

    let resultNewSalary = document.getElementById('salary5')
    resultNewSalary.innerHTML = `Novo salário, após o Aumento: <strong> R$ ${newS}`


 }