let butAC = document.getElementById('operatorAC')
let butmodulus = document.getElementById('operatormodulus')
let butdiv = document.getElementById('operatordiv')
let but7 = document.getElementById('operator7')
let but8 = document.getElementById('operator8')
let but9 = document.getElementById('operator9')
let butmultiply = document.getElementById('operatormultiply')
let but4 = document.getElementById('operator4')
let but5 = document.getElementById('operator5')
let but6 = document.getElementById('operator6')
let butminus = document.getElementById('operatorminus')
let but1 = document.getElementById('operator1')
let but2 = document.getElementById('operator2')       
let but3 = document.getElementById('operator3')
let butplus = document.getElementById('operatorplus')
let but0 = document.getElementById('operator0')
let butdec = document.getElementById('operatordec')
let butequal = document.getElementById('operatorequal')
let butdel = document.getElementById('operatordel')
let screenInput = document.getElementById("screen-input")
let answer = document.getElementById("answer")

function displayScreen(value){
    // screenInput.innerText=value //value is displaying lekin vo jo value phele display h usko hata ke aara h isliye append use karenge
    let span = document.createElement("span")
    span.innerHTML=value
    screenInput.appendChild(span)
}
function ClearIt(){
    screenInput.innerHTML=" "
    answer.innerHTML=" "
}
function DeleteOne(){
    let previous = screenInput.innerText
    let newscreenInput = previous.substring(0,previous.length-1)
    screenInput.innerText=newscreenInput
}
function EqualOperation(expression){
answer.innerText=eval(expression)
}
but7.addEventListener("click",function(){
    displayScreen("7")
})
but2.addEventListener("click",function(){
    displayScreen("2")
});
but3.addEventListener("click",function(){
    displayScreen("3")
})
but4.addEventListener("click",function(){
    displayScreen("4")
});
but5.addEventListener("click",function(){
    displayScreen("5")
})
but6.addEventListener("click",function(){
    displayScreen("6")
});
but8.addEventListener("click",function(){
    displayScreen("8")
})
but9.addEventListener("click",function(){
    displayScreen("9")
});
but0.addEventListener("click",function(){
    displayScreen("0")
});
but1.addEventListener("click",function(){
    displayScreen("1")
});
butplus.addEventListener("click",function(){
    displayScreen("+")
});
butminus.addEventListener("click",function(){
    displayScreen("-")
});
butdiv.addEventListener("click",function(){
    displayScreen("/")
});
butmultiply.addEventListener("click",function(){
    displayScreen("*")
});
butdec.addEventListener("click",function(){
    displayScreen(".")
});
butmodulus.addEventListener("click",function(){
    displayScreen("%")
});
butAC.addEventListener("click",function(){
    ClearIt()
    window.location.reload()
});
butdel.addEventListener("click",function(){
    DeleteOne()
});
butequal.addEventListener("click",function(){
    EqualOperation(screenInput.innerText)
});



