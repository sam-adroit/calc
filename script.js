let n1 = document.getElementsByTagName("p")[1];
let n2 = document.getElementsByTagName("p")[2];
let n3 = document.getElementsByTagName("p")[3];
let n4 = document.getElementsByTagName("p")[5];
let n5 = document.getElementsByTagName("p")[6];
let n6 = document.getElementsByTagName("p")[7];
let n7 = document.getElementsByTagName("p")[9];
let n8 = document.getElementsByTagName("p")[10];
let n9 = document.getElementsByTagName("p")[11];
let n0 = document.getElementsByTagName("p")[14];
let dot = document.getElementsByTagName("p")[15];
let on = document.getElementById("on");
let off = document.getElementById("off");
let del = document.getElementById("del");
let clr = document.getElementById("clr");
let add = document.getElementsByTagName("p")[8];
let sub = document.getElementsByTagName("p")[12];
let mult = document.getElementsByTagName("p")[17];
let div = document.getElementsByTagName("p")[13];
let ans = document.getElementsByTagName("p")[20];
let state;
let last_input = "num";
let variable = [];
let res = [];
let t = 0;

function chk_dot(value, index, array) {
    return value === "."; 
}

function input(n) {
    if(state === 1){
        if(document.getElementsByTagName("p")[0].innerHTML.length < 21){
            if(variable.length === 0 & t===0){
                console.log(typeof(n))
                variable = n==="."? "0.".split(""):`${n}`.split("");
                document.getElementsByTagName("p")[0].innerHTML = variable.join("");
                last_input = "num";
            }else if(variable.length > 0 & t===0){
                if (n === "."){
                    variable.filter(chk_dot).length > 0? variable:variable.push(n);
                    document.getElementsByTagName("p")[0].innerHTML = variable.join("");
                    last_input = "num";
                }else{
                    variable.push(n);
                    document.getElementsByTagName("p")[0].innerHTML = variable.join("");
                    last_input = "num";
                }
            }else if(variable.length === 0 & t===1){
                variable = n==="."? "0.".split(""):`${n}`.split("");
                document.getElementsByTagName("p")[0].innerHTML = variable.join("");
                t = 0;
                last_input = "num";
            }
        }
    }
    
    
}

function math_op(par) {
    if (state === 1){
        if(t === 0){
            let op = parseFloat(document.getElementsByTagName("p")[0].innerHTML);
            res.push(op);
            res.push(par);
            variable = [];
            t = 1;
            last_input = "op";
        }else{
            if(variable.length !== 0){
                let op = parseFloat(document.getElementsByTagName("p")[0].innerHTML);
                res.push[op];
                res.push(par);
                variable = [];
                last_input = "op";
            }else{
                res.pop();
                res.push(par);
                last_input = "op";
            }
            
    
        }
    }    
}

function answer(){
    if(state ===1){
        if (last_input==="op"){
            res.pop();
        }
        let op = parseFloat(document.getElementsByTagName("p")[0].innerHTML);
        res.push(op);
        let operands = [];
        let operands_index = [];
        for(let i = 0; i < res.length; i++){
            if(typeof(res[i]) === "string") {
                operands.push(res[i]);
                operands_index.push(i);
            }
        }

        for(let i = 0; i < operands_index.length; i++){
            if(i === 0){
                if(operands[i]==="ADD"){
                    res.push(res[operands_index[i]-1] + res[operands_index[i]+1])
                }else if(operands[i]==="SUB"){
                    res.push(res[operands_index[i]-1] - res[operands_index[i]+1])
                }else if(operands[i]==="MULT"){
                    res.push(res[operands_index[i]-1] * res[operands_index[i]+1])
                }else if(operands[i]==="DIV"){
                    res.push(res[operands_index[i]-1] / res[operands_index[i]+1])
                }
            }else{
                if(operands[i]==="ADD"){
                    res[res.length -1] = res[res.length -1 ] + res[operands_index[i]+1];
                }else if(operands[i]==="SUB"){
                    res[res.length -1] = res[res.length -1 ] - res[operands_index[i]+1];
                }else if(operands[i]==="MULT"){
                    res[res.length -1] = res[res.length -1 ] * res[operands_index[i]+1];
                }else if(operands[i]==="DIV"){
                    res[res.length -1] = res[res.length -1 ] / res[operands_index[i]+1];
                }  
            }
            
        }
        document.getElementsByTagName("p")[0].innerHTML = res.pop();
        res = [];
        variable = [];
        t = 0;
    }    
}

function control(ctrl) {
    let a = document.getElementsByTagName("p")[0].innerHTML;
    switch (ctrl) {
        case "ON":
            document.getElementsByTagName("p")[0].innerHTML = "0";
            res = [];
            variable = [];
            state = 1;
            break;
        case "CLR":
            if (document.getElementsByTagName("p")[0].innerHTML !== ""){
                document.getElementsByTagName("p")[0].innerHTML = "0";
                res = [];
                variable = [];
            }    
            break;
        case "DEL":
            if (a !== ""){
                if(a.length > 1 & a !== "Infinity" & a !== "-Infinity"){
                    b = a.split("")
                    b.pop()
                    c = b.join("")
                    document.getElementsByTagName("p")[0].innerHTML = c;
                }else{
                    document.getElementsByTagName("p")[0].innerHTML = "0";
                }  
            }  
            
            break;   
        default :
            document.getElementsByTagName("p")[0].innerHTML = "OFF";
            state = 0;
            break;
    }
}

n1.addEventListener("click", function(){input(1)});
n2.addEventListener("click", function(){input(2)});
n3.addEventListener("click", function(){input(3)});
n4.addEventListener("click", function(){input(4)});
n5.addEventListener("click", function(){input(5)});
n6.addEventListener("click", function(){input(6)});
n7.addEventListener("click", function(){input(7)});
n8.addEventListener("click", function(){input(8)});
n9.addEventListener("click", function(){input(9)});
n0.addEventListener("click", function(){input(0)});
dot.addEventListener("click", function(){input(".")});
on.addEventListener("click", function(){control("ON")});
off.addEventListener("click", function(){control("OFF")});
del.addEventListener("click", function(){control("DEL")});
clr.addEventListener("click", function(){control("CLR")});
add.addEventListener("click", function(){math_op("ADD")});
sub.addEventListener("click", function(){math_op("SUB")});
div.addEventListener("click", function(){math_op("DIV")});
mult.addEventListener("click", function(){math_op("MULT")});
ans.addEventListener("click", function(){answer()});
