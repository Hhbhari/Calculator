const value = document.querySelector('.display');
let count=0, dotCount=0, negCount=0, result=0;

class Stack{
    constructor(){
        this.items=[];
    }

    add(ele){
        this.items.push(ele);
    }

    pop(){
        return this.items.pop();
    }

    isEmpty(){
        return this.items.length==0;
    }

    peek(){
        return this.items[this.items.length-1];
    }

    size(){
        return this.items.length;
    }

    clear(){
        this.items=[];
    }
}

let stack = new Stack();


const buttonsAll = document.querySelectorAll('button');

buttonsAll.forEach((buttons)=>{
    buttons.addEventListener('click',()=>{
        if(buttons.innerHTML.match(/^\+|\-|\x|\/|\=$/g) && buttons.innerHTML!='+/-'){
            if(negCount!='0'){
                console.log('yes');
                negCount.classList.remove('present');
            }
            negCount=buttons;
            negCount.classList.add('present');
        }
        else if(negCount==0){
            console.log('Go on');
        }
        else{
            negCount.classList.remove('present');
        }
        calculation(buttons.innerHTML);
    });
})

document.addEventListener('keydown', (event)=>{
    let keyValue=event.key;
    console.log(keyValue);
    if(keyValue=='Enter'){keyValue='='};
    if(keyValue=='*'){keyValue='x'};
    if(keyValue=='Escape'){keyValue='AC'};
    let currentButton = [...buttonsAll].filter(buttons=>buttons.innerHTML==keyValue);
    if(currentButton.length!==0){
        if(currentButton[0].innerHTML.match(/^\+|\-|\x|\/|\=$/g) && currentButton[0].innerHTML!='+/-'){
            if(negCount!='0'){
                console.log(negCount);
                console.log('yes');
                negCount.classList.remove('present');
            }
            negCount=currentButton[0];
            negCount.classList.add('present');
        }
        else if(negCount==0){
            console.log('Go on');
        }
        else{
            negCount.classList.remove('present');
        }
    }
    console.log(keyValue);

    if(keyValue=='AC'){
        calculation(keyValue);
    }
    else if(keyValue.match(/^\+|\-|\/|\x|\%|\.|\=$/g)){
        calculation(keyValue);
    }
    else if(keyValue.match(/^\d$/g)){
        calculation(keyValue);
    }
    else if(keyValue=='Backspace'){
        console.log(value.innerHTML.length);
        value.innerHTML = value.innerHTML.length==1? '0' : value.innerHTML.split('').slice(0,value.innerHTML.length-1).join('');
    }
    else{
        
    }
},false);

function calculation(selection){
    if (selection=='AC'){
        value.innerHTML='0';
        count=0;
        dotCount=0;
        negCount=0;
        stack.clear();
    }
    else if(selection.match(/^\d$/g)){
        if (count==0 || value.innerHTML=='0'){
            value.innerHTML=selection;
            count++;
        }
        else{
            value.innerHTML+=selection;
        }
    }
    else if(selection=='.'){
        if(parseFloat(value.innerHTML)%1==0 ){
            value.innerHTML+=selection;
            count++;
        }
    }
    else if(selection=='+/-'){
        value.innerHTML=='0' ? console.log('lol') : value.innerHTML<0 ? console.log('Nope') : value.innerHTML=`${'-'}${value.innerHTML}`;
    }
    else if(selection=='%'){
        if(stack.size()==0 || stack.size()==1 || stack.peek()=='='){
            value.innerHTML=0;
            count=0;
        }
        else if(stack.peek()=='x' || stack.peek()=='/'){
            value.innerHTML/=100;
        }
        else if(stack.peek()=='+' || stack.peek()=='-'){
            value.innerHTML = (stack.items[0]*value.innerHTML)/100;
        }

    }
    else if(selection.match(/^\+|\-|\x|\/|\=$/g)){
        if(stack.size()==0){
            stack.add(value.innerHTML);
            stack.add(selection);
            count=0;
            console.log(stack.items);

        }
        else if(stack.peek().match(/^\+|\-|\x|\/|\=$/g) && count==0){
            stack.pop();
            stack.add(selection);
            console.log(stack.items);

        }
        else{
            switch(stack.peek()) {
                case '+':
                    addition(selection);
                    console.log('add');
                    break;
                case '-':
                    sub(selection);
                    console.log('sub');
                    break;
                case 'x':
                    multiply(selection);
                    console.log('multiply');
                    break;
                case '/':
                    division(selection);
                    console.log('multiply');
                    break;
                case '=':
                    equal(selection);
                    console.log('equal');
                    break;
                // default:
                //     console.log('check');
            }
        }
    }
    else{
        value.innerHTML='NaN'
    }
}

function addition(selection){
    stack.pop();
    result = parseFloat(stack.pop())+parseFloat(value.innerHTML);
    stack.add(result.toString());
    stack.add(selection);
    value.innerHTML= result;
    count=0;
    console.log(result);
    console.log(stack.items);
}

function sub(selection){
    stack.pop();
    result = parseFloat(stack.pop())-parseFloat(value.innerHTML);
    stack.add(result.toString());
    stack.add(selection);
    value.innerHTML= result;
    count=0;
    console.log(result);
    console.log(stack.items);
}

function multiply(selection){
    stack.pop();
    result = parseFloat(stack.pop())*parseFloat(value.innerHTML);
    stack.add(result.toString());
    stack.add(selection);
    value.innerHTML= result;
    count=0;
    console.log(result);
    console.log(stack.items);
}

function division(selection){
    stack.pop();
    result = parseFloat(stack.pop())/parseFloat(value.innerHTML);
    if(result=='Infinity'){
        result='Cannot Divide by Zero';
    }
    stack.add(result.toString());
    stack.add(selection);
    value.innerHTML= result;
    count=0;
    console.log(result);
    console.log(stack.items);
}

function equal(selection){
    if(stack.size()==2){
        stack.items[0]=value.innerHTML;
        stack.pop()
        stack.add(selection);
        count=0;
        console.log(stack.items);
    }
}
