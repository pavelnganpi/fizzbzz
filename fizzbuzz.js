function three( n){
    return n%3===0;
}

function five(n){
    return n%5===0;
}

function fiz(n){
    for(var i=0;i<=n;i++){
        if(five(i) && three(i)){
            console.log("FizzBuzz");
        }
        else if(three(i)){
            console.log("Fizz");
        }
        else if(five(i)){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
}
    
}
