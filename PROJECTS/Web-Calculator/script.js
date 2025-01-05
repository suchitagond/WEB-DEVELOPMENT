let inp_text=document.getElementById('inp-text');
btn=document.querySelectorAll('button');
let screenValue='';
for (item of btn){
    item.addEventListener('click',(e)=>{
        btnText=e.target.innerText;
        console.log('Button text is ', btnText);
        if(btnText=='AC'){
            screenValue='';
            inp_text.value=screenValue;
        }
        else if(btnText=='='){
            a=eval(screenValue);
            screenValue=a;
            inp_text.value=a;
        }
        else if(btnText=='x'){
            btnText='*';
            screenValue+=btnText;
            inp_text.value=screenValue;
        }
        else{
            screenValue+=btnText;
            inp_text.value=screenValue;
        }
    })
}
