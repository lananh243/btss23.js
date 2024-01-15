const inputNumber = parseInt(prompt("Nhập số hàng của tam giác:"));
for (let i = 1; i <= inputNumber; i++) {
  let row = "*".repeat(i);
  console.log(row);
}
for (let i = 1; i <= inputNumber; i++) {
  let row = " ".repeat(inputNumber - i) + "*".repeat(i);
  console.log(row);
}