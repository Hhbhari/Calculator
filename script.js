const value = document.querySelector('.display');
let count=0, dotCount=0, negCount=0;

class Stack{
    constructor(){
        this.items=[];
    }

    add(ele){
        this.items.push(ele);
    }

    remove(){
        if(this.items.length>0){
            return this.items.pop();
        }
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





