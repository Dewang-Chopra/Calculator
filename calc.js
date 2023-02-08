// let screen = document.getElementById("answer");
// console.log(screen)
// let buttons = document.querySelectorAll("button"); 
// console.log(buttons)
// let screenvalue = "";
// for(item of buttons)
// {
//     item.addEventListener("click", (e)=> {
//         buttonText =  e.target.innerText;
//         screen.value = buttonText;
//     });
// }
// for(item of buttons)
// {
// item.addEventListener("click", function()
// {
//  screen.value = buttons.textContent + screenvalue;
// })
// 
let string = ""
let input = document.getElementById("answer")
const numberEl = document.querySelectorAll("#number")
console.log(numberEl)
console.log(clearAll)
console.log(clear)
Array.from(numberEl).forEach((button) =>
{
    button.addEventListener("click", (e)=>{
        try{if(e.target.textContent === "=")
        {
            string = eval(string);
            input.value = string;
            console.log(e.target)
        }
        else if(e.target.textContent === "\u232b" )
        {
            string = string.slice(0,-1)
            input.value = string
        }
        else if(e.target.textContent === "%")
        {
            string = string + "/100"
            input.value = string
        }
        else if(e.target.textContent === "AC"){
            string = "";
            console.log(e.target)
            input.value = string;
        }
        else{
            string = string + e.target.textContent;
        input.value = string;
        console.log(e.target)
        }
    }
        catch(err)
        {
            string = "";
            console.log(e.target)
            input.value = string;
        }
    })  
})
document.addEventListener("keypress" , (e)=>{
try{
        if(e.key == "Enter")
    {
    string = input.value
    string = eval(string) ;  
    input.value = string  ; 
    console.log(string) 
    }
}
catch(err)
{
string = "";
input.value = string ;
console.log(string)
}
})