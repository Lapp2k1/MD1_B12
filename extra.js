// console.time()
// let a = prompt("M co yeu t khong");
// while(a !== "yes"){ a = prompt("M co yeu t khong")}
// // console.timeEnd()
let n = +prompt("nhap so lon");
let flag = true;

    for (i = 2; i < n; i++) {
        if (n % i === 0) {
          let flag = false;
          break;
        } else {
          console.log(`${n} la so nguyen to`);
        }
      }
 


// let n = +prompt("nhap so lon");
// let flag = true; // 'flag' should be declared outside the loop
// for (let i = 2; i < n; i++) { // 'i' should be declared with 'let' to limit its scope to the loop
//   if (n % i === 0) {
//     flag = false; // 'let' should not be used here, it's reassigning not redeclaring
//     break; // This should be inside the 'if' block to stop the loop if a divisor is found
//   }
// }
// if (flag && n > 1) { // Check if 'flag' is true and 'n' is greater than 1
//   console.log(`${n} là số nguyên tố`);
// } else {
//   console.log(`${n} không phải là số nguyên tố`);
// }
let money = +prompt("Nhập số tiền gốc:");
let profit = +prompt("Nhập số tỉ giá lãi suất theo tháng(%)") /100;
let time = +prompt("Nhập mức kỳ hạn(tháng):");

for (let i = 1; i < time; i++) {
    console.log(`Số tiền trả tháng${i} là: ${money}|| Tiền lãi là ${money*profit}`);
    money += money*profit
}