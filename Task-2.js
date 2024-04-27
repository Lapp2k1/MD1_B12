document.write("Bài 1: ");
let doC = +prompt("Nhập số độ C:");

document.write(doC + " độ C bằng " + ((doC * 9) / 5 + 32) + " độ F");

document.write("</hr> </br>");
document.write("Bài 2:");

let m = +prompt("Nhập số mét:");

document.write(m + " mét bằng " + m * 3.2808 + " feet");

document.write("</hr> </br>");
document.write("Bài 3:");
let canh = prompt("Nhập độ dài cạnh của hình vuông:");
let area = canh * canh;
document.write("Diện tích hình vuông là: " + area);

document.write("</hr> </br>");
document.write("Bài 4:");
let length = prompt("Nhập chiều dài hình chữ nhật:");
let width = prompt("Nhập chiều rộng hình chữ nhật:");
let areahcn = length * width;
document.write("Diện tích hình chữ nhật là: " + areahcn);

document.write("</hr> </br>");
document.write("Bài 5:");
let canhKeA = prompt("Nhập độ dài cạnh kề a của tam giác vuông:");
let canhKeB = prompt("Nhập độ dài cạnh kề b của tam giác vuông:");
let area3c = (canhKeA * canhKeB) / 2;
document.write("Diện tích tam giác vuông là: " + area3c);

document.write("</hr> </br>");
document.write("Bài 6:");
let A = prompt("Nhập hệ số a của phương trình bậc 1 (ax + b = 0):");
let B = prompt("Nhập hệ số b của phương trình bậc 1 (ax + b = 0):");
if (A == 0) {
  if (B == 0) {
    document.write("Phương trình có vô số nghiệm.");
  } else {
    document.write("Phương trình vô nghiệm.");
  }
} else {
  let X = -B / A;
  document.write("Phương trình có nghiệm x = " + X);
}

document.write("</hr> </br>");
document.write("Bài 7:");
let a = prompt("Nhập hệ số a của phương trình bậc 2 (ax^2 + bx + c = 0):");
let b = prompt("Nhập hệ số b của phương trình bậc 2 (ax^2 + bx + c = 0):");
let c = prompt("Nhập hệ số c của phương trình bậc 2 (ax^2 + bx + c = 0):");
let delta = b * b - 4 * a * c;
if (delta > 0) {
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  document.write(
    "Phương trình có 2 nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2
  );
} else if (delta == 0) {
  let x = -b / (2 * a);
  document.write("Phương trình có nghiệm kép: x1 = x2 = " + x);
} else {
  document.write("Phương trình vô nghiệm.");
}

document.write("</hr> </br>");
document.write("Bài 8:");
let num = prompt("Nhập số nguyên:");
if (num > 0 && num < 120) {
  document.write("Số nguyên là tuổi của một người.");
} else {
  document.write("Số nguyên không phải là tuổi của một người.");
}

document.write("</hr> </br>");
document.write("Bài 9:");

let canh1 = prompt("Nhập số thực a:");
let canh2 = prompt("Nhập số thực b:");
let canh3 = prompt("Nhập số thực c:");
if (
  canh1 > 0 &&
  canh2 > 0 &&
  canh3 > 0 &&
  canh1 + canh2 > canh3 &&
  canh2 + canh3 > canh1 &&
  canh1 + canh3 > canh2
) {
  document.write("Ba số a, b, c có thể là cạnh của một tam giác.");
} else {
  document.write("Ba số a, b, c không thể là cạnh của một tam giác.");
}

document.write("</hr> </br>");
