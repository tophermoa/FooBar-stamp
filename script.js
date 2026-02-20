const arr = [...Array(100).keys()].map(i => i + 1);

// function check prime number
const checkIsPrime = (num) => {
    // must be greater than 1
    if(num <= 1) return false;

    // find low numb that can be mod
    for(let i=2; i<num;i++){
        if(num%i === 0){
            return false;
        }
    }

    return true;
}

const reverse = arr.filter((val) => !checkIsPrime(val)).map((val) => {
    if(val % 5 === 0 && val % 3 === 0) return "FooBar"
    if(val % 3 === 0) return "Foo"
    if(val % 5 === 0) return "Bar"
        
    return val;
})

document.getElementById("output-foobar").innerHTML = reverse.reverse().join(", ");