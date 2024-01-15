let a = prompt("Nhập a");
let b = prompt("Nhập b");
if(a > 0 && b > 0){
   for(let i = 1; i <= a; i++){
    if(i % b === 0){
        console.log(i);
    } 
    }
}else{
    console.log("Không hợp lệ");
}
