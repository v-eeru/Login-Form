/*let name=document.querySelector(".inputh1");
let Uname=document.querySelector(".un")
name.onclick=function(){
    if(Uname.value.length<9)
    {
       Uname.style.border="1px solid red";
       //name.style="margin:5px 0px 0px 110px;border:1px solid black;background-color:white;color:red;padding:2px;"
       name.innerText="please fill up the form";
       Uname.focus();

    }
}*/
/*name.addEventListener('textInput',()=>{
    name.style="border:1px solid silver;"
    Uname.style.display="none";  
})*/
let name=document.querySelector('#un');
let email=document.querySelector('#en');
let phno=document.querySelector('#pn');
let pass=document.querySelector('#p');
let cpass=document.querySelector('#cpl');
let btn=document.querySelector('.btn');
let Uname=document.querySelector('.inputh1');
let ename=document.querySelector('.inputh2');
let pname=document.querySelector('.inputh3');
let pasname=document.querySelector('.inputh4');
let cpname=document.querySelector('.inputh5');
/*btn.onclick=function(){
    if(name.value.length <5)
    {
        name.style="border:1px solid red;"
        Uname.style.display="block";
        Uname.innerText="Enter atleast 5 Chrs"
        Uname.style="margin:5px 0px 0px 110px;border:1px solid black;background-color:white;color:red;padding:2px;";   
         }
         else{
            name.addEventListener('textInput',()=>{
                name.style="border:1px solid silver;"
                Uname.style.display="none";
                Uname.innerText="" ;  
            }
            )
         }
}
*/
name.addEventListener('textInput',()=>{
    if(name.value.length <5)
    {
        name.style="border:1px solid red;"
        Uname.style.display="block";
        Uname.innerText="enter atleast 5 charecters";
        Uname.style="margin:5px 0px 0px 90px;border:1px solid black;background-color:white;color:red;padding:2px;"
    }
    else if((name.value=="") || (name.value.length>5)){
        name.style="border:1px solid silver;"
        Uname.style.display="none";
        Uname.innerText="";
    }
})
btn.onclick=function(){
    switch(name.value.length,email.value.length,phno.value.length,pass.value.length,cpass.value.length)
        {
            case 0:alert("fill your credentials completly");
            break;
            
            default:
                break;
    }
    if(!(pass.value)==(cpass.value))
    {
        cpname.innerText="password doesnt match"
    }
}

email.addEventListener('textInput',()=>{

    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email.style="border:1px solid red;"
        ename.style.display="block";
        ename.innerText="please enter your mail id correctly";
        ename.style="margin:5px 0px 0px 90px;border:1px solid black;background-color:white;color:red;padding:2px;"
    }
    else if((email.value=="")||(email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)))
    {
        email.style="border:1px solid silver;"
        ename.style.display="none";
        ename.innerText="";
    }
})

phno.addEventListener('textInput',()=>

{ if(!phno.value.length==10){
        phno.style="border:1px solid red;"
        pname.style.display="block";
        pname.innerText="Enter valid Phone Number";
        pname.style="margin:5px 0px 0px 90px;border:1px solid black;background-color:white;color:red;padding:2px;"
    }
    else if((phno.value.length=="")||(phno.value.length==10))
    {
        phno.style="border:1px solid silver;"
        pname.style.display="none";
        pname.innerText="";
    }
})
cpass.addEventListener('textInput',()=>

{ if(!(cpass.value.length)==(pass.value.length)){
        cpass.style="border:1px solid red;"
        cpname.style.display="block";
        cpname.innerText="password doesn't match";
        cpname.style="margin:5px 0px 0px 90px;border:1px solid black;background-color:white;color:red;padding:2px;"
    }
    else 
    {
        cpass.style="border:1px solid silver;"
        cpname.style.display="none";
        cpname.innerText="";
    }
})
