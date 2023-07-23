let TheTextBox = document.getElementById("Mytextbox")
let s= document.getElementById("input1")
let hist=document.getElementById("datastore")
function clr()
{
    TheTextBox.value = ""
}
function datacollect(a,b)
{
    let store=""
    store="\n"+a+"="+b
    hist.innerText+=store
}
/*To enter character in textbox*/
function btn(text)
{
    TheTextBox.value = TheTextBox.value + text
}
/*To calculate string*/
function calculate()
{    
    s.value=TheTextBox.value
    if(s.value=="123..")
    {
        window.open("index.html","_self")
    }
    TheTextBox.value=eval(TheTextBox.value)
    datacollect(s.value,TheTextBox.value)
}
/*To delete last character of string*/
function del()
{
    TheTextBox.value=TheTextBox.value.substring(0,TheTextBox.value.length-1)
}
/*To calculate percentage*/
function percentage()
{
    s.value = "("+TheTextBox.value+")*1/100"
    TheTextBox.value=TheTextBox.value/100
    datacollect(s.value,TheTextBox.value)
    s.value=TheTextBox.value
}
/*To enter value of Pi*/
function Pi()
{
    TheTextBox.value+=22/7
}
/*To calculate root of string*/
function root()
{
    s.value = "√("+TheTextBox.value+")" 
    TheTextBox.value=Math.sqrt(TheTextBox.value)
    datacollect(s.value,TheTextBox.value)
}
/*To calculate square of string*/
function square()
{
    s.value = "("+TheTextBox.value+")²" 
    TheTextBox.value=Math.pow(TheTextBox.value,2)
    datacollect(s.value,TheTextBox.value)
}
/*To calculate reciprocal of string*/
function reciprocal()
{
    s.value = "1/("+TheTextBox.value+")" 
    TheTextBox.value=1/TheTextBox.value
    datacollect(s.value,TheTextBox.value)
}
/*To calculate log of given string for base 10*/
function log10()
{
    s.value = "log("+TheTextBox.value+")" 
    TheTextBox.value=Math.log10(TheTextBox.value)
    datacollect(s.value,TheTextBox.value)
}
/*To calculate log of given string for base e*/
function loge()
{
    s.value = "ln("+TheTextBox.value+")" 
    TheTextBox.value=Math.log(TheTextBox.value)
    datacollect(s.value,TheTextBox.value)
}
/*To calculate sin of given string*/
function sin()
{
    s.value = "sin("+TheTextBox.value+")" 
    TheTextBox.value=Math.sin(TheTextBox.value)
    datacollect(s.value,TheTextBox.value)
}
/*To calculate cos of given string*/
function cos()
{
    s.value = "cos("+TheTextBox.value+")" 
    TheTextBox.value=Math.cos(TheTextBox.value)
    datacollect(s.value,TheTextBox.value)
}
/*To calculate tan of given string*/
function tan()
{
    s.value = "tan("+TheTextBox.value+")" 
    TheTextBox.value=Math.tan(TheTextBox.value)
    datacollect(s.value,TheTextBox.value)
}
/*To change the sign of string*/
function sign()
{ 
    TheTextBox.value=TheTextBox.value*(-1)
}
function cleardata()
{
    hist.innerText=""
    s.value=""
}
TheTextBox.addEventListener("keydown",function(e){
    if (e.code === "Enter") 
    { 
        calculate()
    }
})