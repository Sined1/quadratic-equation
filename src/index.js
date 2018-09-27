module.exports = function solveEquation(equation) {
  let ar = equation.split(' ');
  let a, b, c;

  //definition a, b and c for further equation
  a = parseInt(ar[0]);
  if (ar[3] == '-') {
    b = parseInt(ar[3] + ar[4]);
  } else b = parseInt(ar[4]);
  if (ar[7] == '-') {
    c = parseInt(ar[7] + ar[8])
  } else c = parseInt(ar[8]);

  let d = b * b - 4 * a * c;
  let x1 = Math.round((-b + Math.sqrt(d)) / 2 / a);
  let x2 = Math.round((-b - Math.sqrt(d)) / 2 / a);

  //right output sequence
  if (a > 0) {
    return [x2, x1];
  } else return [x1, x2];
}
