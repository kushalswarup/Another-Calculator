let display = document.querySelector('#dis');
let data=[];
let operator='';
let buttons = Array.from(document.querySelectorAll('button'));
// console.log(buttons);

buttons.map((btn)=>{
    btn.addEventListener('click',(e)=>{
        let btnText=e.target.innerText;
        // console.log(btnText);
        if(btnText==='DEL'){
            display.innerText=display.innerText.slice(0,-1);
        }
        else if(btnText==='RESET'){
            display.innerText='';
            data=[]
            operator=''
        }
        else if(btnText==='.'){
            if(!display.innerText.includes('.')){
                display.innerText+=btnText;
            }
        }
        else if(btnText==='='){
            data.push(display.innerText);  /// adding entire operation into the array
            let res = eval(data.join(' '));
            display.innerText=res;
            data=[]
            operator=''

        }
        else if(isNaN(parseInt(btnText))){
            operator=btnText;
            data.push(display.innerText);
            data.push(operator);
            display.innerText=''
        }
        else{
            display.innerText+=btnText;
        }

    })
})

