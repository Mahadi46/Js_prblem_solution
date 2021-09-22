//problem
function a(a,b,c,d,...args){
   console.log("all argument passed"); // 13, 17,33
}

function b(){
   a(); // with all arguments positioned in even numbers
}
b(11,13,15,17,19,33)



//use apply
function a(...args){
    console.log(...arguments)
}
function b(){
    a.apply(this,[[...arguments].filter((item,index)=>
    index%2===1 ).toString()])
}
b(10,20,30,40,50,60)

//use call

function a(...args){
    console.log(...arguments)
}
function b(){
    a.call(this,[...arguments].filter((item,index)=>index%2===1).toString())
}
b(10,20,30,40,50,60)

// bind

function a(...args){
    console.log(...arguments)
}
function b(){
    var bind=a.bind(this,[...arguments].filter((item,index)=>index%2===1).toString())
    bind()
}
b(10,20,30,40,50,60)
