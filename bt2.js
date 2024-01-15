let number = prompt("Nhập số nguyên dương");


if(isNaN(number) || number<=0){
    console.log("Không hợp lệ");
}else{
    let fact = 1;
    for (let c=1;c <= number;c++){
    fact = fact * c;
    }
     console.log("Giai thừa của "+ number +" là "+ fact); 
}

