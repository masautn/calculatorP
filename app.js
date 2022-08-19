let operation = {
    num1: '',
    num2: '',
    operator: '',
    firstFlag:true, 
    result: 0
};

function add(num1, num2) {
console.log(num1);
console.log(num2);
return parseInt(num1) + parseInt(num2);

};

function subtract (num1, num2) {
    
    return parseInt(num1) - parseInt(num2);
};

function multiply(num1, num2) {
    
        return parseInt(num1) * parseInt(num2);
   

};

function divide(num1, num2) {
    
    
      return parseInt(num1) / parseInt(num2);

  };

const btns = document.querySelectorAll("#subgrid");
const rst = document.getElementById("reset");
rst.addEventListener('click',resetOp );


function init(){
btns.forEach(btn => {
    
    btn.addEventListener('mouseover',e => {e.target.style.backgroundColor = "gray";});
    btn.addEventListener('mouseout',e => {e.target.style.backgroundColor = "white";});
    btn.addEventListener('click',getNum);
});
}


function getNum(e){
    const mode = e.target.className;
    
    switch (mode){
        case 'btn1':
            addNum(1);
            break;
        case 'btn2':
            addNum(2);
            break;
        case 'btn3':
            addNum(3);
            break;
        case 'btn4':
            addNum(4);
            break;
        case 'btn5':
            addNum(5);
            break;
        case 'btn6':
            addNum(6);
            break;
        case 'btn7':
            addNum(7);
            break;
        case 'btn8':
            addNum(8);
            break;
        case 'btn9':
            addNum(9);
            break;
        case 'btn0':
            addNum(0);
            break;
        case 'btn+':
            addOp('+');
            break;
        case 'btn-':
            addOp('-');
            break;
        case 'btn/':
            addOp('/');
            break;
        case 'btn*':
            addOp('*');
            break;
        case 'btn.':
            addDot('.');
            break;
        case 'btn=':
            equal();
            break;
    }
}

function addNum (n){
    console.log(operation.firstFlag);
    if(operation.firstFlag){
        
        operation.num1 = `${operation.num1}${n}`;
        showOnDisplay(operation.num1);
        console.log(operation.num1);
    }else{
        operation.num2 = `${operation.num2}${n}`;
        console.log(operation.num2);
        showOnDisplay(operation.num2);
    }

    

}
function addOp(o){
    if(operation.firstFlag){
        operation.operator = `${o}`;
        operation.firstFlag = false;
    }
}

function equal () {
    if(!operation.firstFlag){
        if(operation.num2 == '') operation.result = operation.num1;
        switch (operation.operator) {
            case '+': 
                operation.result = add(operation.num1,operation.num2);
                console.log(operation.result);
                showOnDisplay(operation.result);
                break;
            case '-': 
                operation.result = subtract(operation.num1,operation.num2);
                console.log(operation.result);
                showOnDisplay(operation.result);
                break;
            case '*': 
                operation.result = multiply(operation.num1,operation.num2);
                console.log(operation.result);
                showOnDisplay(operation.result);
                break;
            case '/': 
                operation.result = divide(operation.num1,operation.num2);
                console.log(operation.result);
                showOnDisplay(operation.result);
                break;
                
        }


    }
    
}

function resetOp(){

    operation.num1 = '';
    operation.num2 = '';
    operation.operator = '';
    operation.firstFlag = true;
    operation.result = 0;
    const display = document.getElementById("disp");
    display.textContent = ' ';

}

function showOnDisplay(x){
    const display = document.getElementById("disp");
    console.log(`cambiamos a ${x}`);
    display.textContent = x;

}
init();




/*function changeColor(e){
    e.target.style.backgroundColor = "gray";
}*/