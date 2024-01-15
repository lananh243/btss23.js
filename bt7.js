let x =parseInt(prompt("Nhập một số bất kì"));
let s=0;
for(let i=0; i<x; i++){
    if(x % i === 0){
        s += i;
    }
}
if(s === x){
        console.log("Là số hoàn hảo");
    }else{
        console.log("Không phải số hoàn hảo");
    }
