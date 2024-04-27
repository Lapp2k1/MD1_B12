document.write("Bài 1:");
let a = +prompt("Nhập số a:");
let b = +prompt("Nhập số b:");

if (b === 0) {
  document.write("Không thể chia cho 0");
} else {
  document.write(a % b === 0 ? "a chia hết cho b" : "a không chia hết cho b");
}

document.write("</hr> </br>");
document.write("Bài 2:");
let age = +prompt("Nhập số tuổi:");

if (age < 15) {
  document.write("Học sinh không đủ điều kiện vào học lớp 10");
} else {
  document.write("Học sinh đủ điều kiện vào học lớp 10");
}

document.write("</hr> </br>");
document.write("Bài 3:");
let num = +prompt("Nhập số nguyên:");

if (num > 0) {
  document.write("Số nguyên lớn hơn 0");
} else if (num < 0) {
  document.write("Số nguyên nhỏ hơn 0");
} else {
  document.write("Đó là số 0");
}

document.write("</hr> </br>");
document.write("Bài 4:");
let x = +prompt("Nhập số a:");
let y = +prompt("Nhập số b:");
let z = +prompt("Nhập số c:");
let max;

if (x > y && x > z) {
  max = x;
} else if (y > z) {
  max = y;
} else {
  max = z;
}

document.write("Max là " + max);

document.write("</hr> </br>");
document.write("Bài 5:");
let testscr = +prompt("Nhập số điểm bài kiểm tra:");
let midscr = +prompt("Nhập số điểm thi giữa kỳ:");
let endscr = +prompt("Nhập số điểm thi cuối kỳ:");

let avg = (testscr + midscr + endscr) / 3;
if (avg >= 8) {
  document.write("Giỏi");
} else if (avg >= 6.5) {
  document.write("Khá");
} else if (avg >= 5) {
  document.write("Trung bình");
} else {
  document.write("Yếu");
}
