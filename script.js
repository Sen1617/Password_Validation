//function to validate the password
function validate(){

/*variables for the input box and the p tag*/
var pass=document.getElementById("passwird");
var out=document.getElementById("output");
/*variables for length of the password(len),
  identify Uppercase(up),Lowercase(lo),Number(nu)*/
var len=pass.value.length
var up=0,lo=0,nu=0;

/*reading each character to identify up,lo,nu is present or not */
    for(let i=0;i<=len;i++){
        var txt=pass.value.charAt(i);
        var val=txt.charCodeAt(0);
        if(val>=65 && val<=90)up++;
        if(val>=97 && val<=122)lo++;
        if(val>=48 && val<=57)nu++;
    }

/* variables for calculating total value to return(tot)
   and equ variable for identify number of three character equals are present */
    var tot=0,equ=0;
        if(up<1)tot++;
        if(lo<1)tot++;
        if(nu<1)tot++;
    for(let i=0;i<=len-2;i++){
        var t1=pass.value.charCodeAt(i);
        var t2=pass.value.charCodeAt(i+1);
        var t3=pass.value.charCodeAt(i+2);
        if((t1==t2)&&(t1==t3))
            equ++;
    }

/*validating length and up,lo,nu present or not */
    out.innerHTML="";
    if((len>=6 && len<=20) && (up>=1 && lo>=1 && nu>=1)){
        //if all present check for any triple character 
        if(equ==0)
            out.innerHTML+="Strong Password<br>minimum steps : 0";
        else
        out.innerHTML+="Weak Password<br>minimum steps : "+equ;
    }
    //if length is greater than 20
    else if(len>20){
        var less=len-20;
            less+=tot+equ;
            out.innerHTML+="Weak Password<br>minimum steps : "+less;
    }
    //if ength is lesser than 6
    else if(len<=6){
        var high=6-len;
        high+=equ;
            if(up>=1 && lo>=1 && nu>=1){
                out.innerHTML+="Weak Password<br>minimum steps : "+high;    
            }
            else if(tot==high || tot>high){
                out.innerHTML+="Weak Password<br>minimum steps : "+tot;    
            }
            else if(tot<high){
                out.innerHTML+="Weak Password<br>minimum steps : "+high;
            }
    }
    //when length is correct but something is not present up,lo,nu
    else{
        out.innerHTML+="Weak Password<br>minimum steps : "+tot;
    }
}
