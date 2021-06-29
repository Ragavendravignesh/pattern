let input = "welcome";
let n = input.length;
console.log(n);

let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < i; k++) {
    let element = k + (n / 2);

    string += input.substr(element !==n ? element: 0 ,1);
  }
  string += "\n";
}
console.log(string);