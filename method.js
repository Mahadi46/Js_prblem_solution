function a(a,b,c,d,...args){
   console.log(); // 13, 17
}

function b(){
   a(); // with all arguments positioned in even numbers
}
b(11,13,15,17)

function a(...args){
    var argsArray=[]
    for(i=0;i<args.index;i++){
        if(i%2===1){
            argsArray.push(args[i])
            
        }
    }
    console.log(array)
}
function b(){
    b.apply(this,[array])
}
b(2,4,6,8,10,12,14,16)