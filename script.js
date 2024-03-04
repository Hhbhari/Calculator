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


const buttonsAll = document.querySelectorAll('button')

buttonsAll.forEach((buttons)=>{
    buttons.addEventListener('click',()=>{
        calculation(buttons.innerHTML);
    });
})

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
        if(dotCount==0){
            value.innerHTML+=selection;
            dotCount++;
        }
    }
    else if(selection=='+/-'){
        value.innerHTML=='0' ? console.log('lol') : value.innerHTML=`${'-'}${value.innerHTML}`, negCount++,console.log(negCount);
    }
    else if(selection.match(/^\+|\-|\x|\/|\=$/g)){
        if(stack.size()==0){
            stack.add(value.innerHTML);
            stack.add(selection);
            count=0;
            console.log(stack.items);

        }
        else if(stack.peek().match(/^\+|\-|\x|\/$/g) && count==0){
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
                // case 'x':
                //     multiply();
                // case '/':
                //     division();
                // case '=':
                //     equal();
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
