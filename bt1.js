let inputa = prompt("Nhập a");
let a =parseInt(inputa);
if(!isNaN(a) && a>0){
for(let i = 1 ; i < a ; i++){
    console.log(i);
}
}else{
    console.log("Không hợp lệ");
}