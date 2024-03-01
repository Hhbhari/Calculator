const value = document.querySelector('.display');
let start=0;
let var1=0;
let prevOp =0;

const buttonsAll = document.querySelectorAll('button')

buttonsAll.forEach((buttons)=>{
    buttons.addEventListener('click',()=>{
        calculation(buttons.innerHTML);
    });
})

function calculation(selection){
    console.log('check');
}