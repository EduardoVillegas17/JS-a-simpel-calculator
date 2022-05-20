function calculation(){
    let num1 =Number(prompt("Enter the num1: "));
    let num2 =Number(prompt("Enter the num1: "));
    sum(num1,num2);
    mult(num1,num2);

    //sum result
    document.getElementById("results").innerHTML=`
    <p>${num1}+${num2}=${sum(num1,num2)}</p>
    <p>${num1}-${num2}=${subs(num1,num2)}</p>
    <p>${num1}*${num2}=${mult(num1,num2)}</p>
    <p>${num1}/${num2}=${div(num1,num2)}</p>`; 

}

function sum(a,b){
    return a+b;
}

    //subs function
function subs(a,b){
    return a-b;
}
    //multi function
    function mult(a,b){
        return a*b;
    }
    //division function
    function div(a,b){
        return a/b;
    }