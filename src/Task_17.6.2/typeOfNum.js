export function typeOfNumber(a) {
  let d = 1;

  for (let i = 1; i < a; i = i + 1) {
    let e = a % i;

    if (e === 0) {
      d++;
    }
  }

  if (a <= 1 || a > 1000) {
    console.log("Ошибка");
    return "Ошибка";
  } else {
    if (d > 2) {
      console.log(a + " — составное число");
      return a + " — составное число";
    } else {
      console.log(a + " — простое число");
      return a + " — простое число";
    }
  }
}
