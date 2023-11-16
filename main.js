
function validateForm(){
    var inp1=document.getElementById("inp1").value;
    var inp2=document.getElementById("inp2").value;
    var inp3=document.getElementById("inp3").value;
    var inp1p=document.getElementById("inp1p");
    var inp2p=document.getElementById("inp2p");
    var inp3p=document.getElementById("inp3p");
    var span1=document.getElementById("span1");
    var span2=document.getElementById("span2");
    var span3=document.getElementById("span3");
    var pp=document.getElementById("pp");
    var pp2=document.getElementById("pp2");
    var pp3=document.getElementById("pp3");
    
    var btninp1=document.getElementById("inp1");
    var btninp2=document.getElementById("inp2");
    var btninp3=document.getElementById("inp3");

    if((inp1==="") || (inp2==="") || (inp3==="")){
        btninp1.style.border="1px solid hsl(0, 100%, 67%)";
        btninp2.style.border="1px solid hsl(0, 100%, 67%)";
        btninp3.style.border="1px solid hsl(0, 100%, 67%)";

        inp1p.innerHTML="<i>This field is required</i>";
        inp2p.innerHTML="<i>This field is required</i>";
        inp3p.innerHTML="<i>This field is required</i>";
        pp.style.color="hsl(0, 100%, 67%)";
        pp2.style.color="hsl(0, 100%, 67%)";
        pp3.style.color="hsl(0, 100%, 67%)";
    }
    else if((inp1>=32) || (inp1>=13) || (inp3>=2024)){
        inp1p.innerHTML="<i>Must be a valid day</i>";
        inp2p.innerHTML="<i>Must be a valid month</i>";
        inp3p.innerHTML="<i>Must be in the past</i>";
    }
    else{        
        span1.innerHTML= 2023-inp3;
        span2.innerHTML= inp2;
        span3.innerHTML= inp1;
    }
}



