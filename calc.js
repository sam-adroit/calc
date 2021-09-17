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
let input_arr = ["OFF"];
let results = "";

function display() {
    let display = "";
    for(let i = 0; i < input_arr.length; i++){
        if(i === 0){
            display = input_arr[i];
        }else{
            display = display + input_arr[i];
        }
    }
    document.getElementsByTagName("p")[0].innerHTML = display; 
}


function operation_arr(input){
    if(input_arr[0] !== "OFF"){
        if(input_arr.toString().length < 25){
            if(input_arr[input_arr.length - 1] === "0"){
                input_arr[input_arr.length - 1] = input === "." ? "0.":`${input}`;
                if(typeof(input) === "string" && input !== "."){
                    input_arr[input_arr.length - 1] = input === "-" ? "-":"0";
                }

            }else if(input_arr[input_arr.length - 1] !== "0" && input !== "+" && input !== "-" && input !== "/" && input !== "*"){
                let last_input = input_arr[input_arr.length - 1];
                if(last_input !== "+" && last_input !== "-" && last_input !== "*" && last_input !== "/"){
                    if (input === "."){
                        input_arr[input_arr.length - 1] = last_input.indexOf(".") === -1 ? `${last_input}`+`${input}`:`${last_input}`;
                    }else{
                        input_arr[input_arr.length - 1] = `${last_input}`+`${input}`;
                    }
                }else{
                    input_arr[input_arr.length] = input === "." ? "0.":`${input}`;
                }
            }else{
                let last_input = input_arr[input_arr.length - 1];
                if(last_input === "+" || last_input === "-" || last_input === "*" || last_input === "/"){
                    input_arr[input_arr.length-1] = `${input}`;
                }else{
                    input_arr[input_arr.length] = `${input}`;
                }
            }
        }
    }
    display();
}

function result(){
    if(input_arr[0] !== "OFF"){
        let last_input = input_arr[input_arr.length - 1];
        if(last_input === "+" || last_input === "-" || last_input === "/" || last_input === "*"){
            input_arr.pop();
        }
        if(input_arr[0] === "-"){
            let sign = input_arr.shift();
            input_arr[0] = `${sign}` + `${input_arr[0]}`;
        }
        for(let i=0; i<input_arr.length; i++){
            if(i % 2 === 0){
                input_arr[i] = parseFloat(input_arr[i]);
            }
        }
        let operands = [];
        let operands_index = [];
        for(let i = 0; i < input_arr.length; i++){
            if(typeof(input_arr[i]) === "string") {
                operands.push(input_arr[i]);
                operands_index.push(i);
            }
        }

        for(let i = 0; i < operands_index.length; i++){
            if(i === 0){
                if(operands[i]==="+"){
                    input_arr.push(input_arr[operands_index[i]-1] + input_arr[operands_index[i]+1])
                }else if(operands[i]==="-"){
                    input_arr.push(input_arr[operands_index[i]-1] - input_arr[operands_index[i]+1])
                }else if(operands[i]==="*"){
                    input_arr.push(input_arr[operands_index[i]-1] * input_arr[operands_index[i]+1])
                }else if(operands[i]==="/"){
                    input_arr.push(input_arr[operands_index[i]-1] / input_arr[operands_index[i]+1])
                }
            }else{
                if(operands[i]==="+"){
                    input_arr[input_arr.length -1] = input_arr[input_arr.length -1 ] + input_arr[operands_index[i]+1];
                }else if(operands[i]==="-"){
                    input_arr[input_arr.length -1] = input_arr[input_arr.length -1 ] - input_arr[operands_index[i]+1];
                }else if(operands[i]==="*"){
                    input_arr[input_arr.length -1] = input_arr[input_arr.length -1 ] * input_arr[operands_index[i]+1];
                }else if(operands[i]==="/"){
                    input_arr[input_arr.length -1] = input_arr[input_arr.length -1 ] / input_arr[operands_index[i]+1];
                }  
            }    
        }
        results = input_arr.pop();
        input_arr = [];
        input_arr[0] = results;
        document.getElementsByTagName("p")[0].innerHTML = results;
    }

}

function control(ctrl) {
    switch (ctrl) {
        case "ON":
            input_arr = ["0"];
            break;
        case "CLR":
            if (input_arr[0] !== "OFF"){
                input_arr = ["0"];
            }    
            break;
        case "DEL":
            if (input_arr[0] !== "OFF"){
                let input_len = input_arr[input_arr.length-1].length;
                if(input_len > 1){
                    input_arr[input_arr.length-1] = input_arr[input_arr.length-1].slice(0,(input_len-1));
                }else{
                    if(input_arr.length > 1){
                        input_arr.pop();
                    }else{
                        input_arr[0] = "0";
                    }   
                }
            }   
            break;   
        default :
            input_arr[0] = "OFF";
            break;
    }
    display();
}

n1.addEventListener("click", function(){operation_arr(1)});
n2.addEventListener("click", function(){operation_arr(2)});
n3.addEventListener("click", function(){operation_arr(3)});
n4.addEventListener("click", function(){operation_arr(4)});
n5.addEventListener("click", function(){operation_arr(5)});
n6.addEventListener("click", function(){operation_arr(6)});
n7.addEventListener("click", function(){operation_arr(7)});
n8.addEventListener("click", function(){operation_arr(8)});
n9.addEventListener("click", function(){operation_arr(9)});
n0.addEventListener("click", function(){operation_arr(0)});
dot.addEventListener("click", function(){operation_arr(".")});
add.addEventListener("click", function(){operation_arr("+")});
sub.addEventListener("click", function(){operation_arr("-")});
div.addEventListener("click", function(){operation_arr("/")});
mult.addEventListener("click", function(){operation_arr("*")});
on.addEventListener("click", function(){control("ON")});
off.addEventListener("click", function(){control("OFF")});
del.addEventListener("click", function(){control("DEL")});
clr.addEventListener("click", function(){control("CLR")});
ans.addEventListener("click", function(){result()});
