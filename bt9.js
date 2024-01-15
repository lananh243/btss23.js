const inputNumber = parseInt(prompt("Nhập một số nguyên dương bất kỳ"));
let a = 0;
let b = 1;

if(inputNumber < 0){
    console.log("Không hợp lệ");
}else{
    console.log("Dãy Fibonacci:");
    console.log(a);
    let sum = a + b;
    while (sum < inputNumber) {
    console.log(b);
    [a, b] = [b, a + b];
    sum += b;
    }  
}
