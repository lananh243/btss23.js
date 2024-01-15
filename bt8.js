let number = parseInt(prompt("Nhập một số nguyên dương bất kỳ"));
console.log(`Các số nguyên tố nhỏ hơn ${number}:`);
if(number <0){
    console.log("Không hợp lệ");
}else{
    for (let i = 2; i < number; i++) {
    let isPrime = true;

     for (let j = 2; j < i; j++) {
        if (i % j === 0) {
        isPrime = false;
        break;
        }
    }

  if (isPrime) {
    console.log(i);
  }
}   
}
