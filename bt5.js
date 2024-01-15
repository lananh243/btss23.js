let b = parseInt(prompt("Nhập vào số ngẫu nhiên"));
for(let a=1; a <= 10; a++) {
    if(b === a){
        console.log("Kết quả đúng");
        break;
    }else if(b < 1){
        console.log("Số nhỏ hơn số ngẫu nhiên");
    }else if(b > 10){
        console.log("Số lớn hơn số ngẫu nhiên");
    } 
}