let result = document.getElementById("ip");

function calculate(number){
        result.value += number;
        }

function equal(){
    result.value = eval(result.value);
}

function clr(){
    result.value=" ";
}
function del(){
    result.value = result.value.slice(0,-1);
}


