export function kalkulatorMenu(angka1,angka2,operator) {
  angka1 = parseFloat(angka1);
  angka2 = parseFloat(angka2);
  let hasil;

  switch (operator) {
    case "+":
      hasil = angka1 + angka2;
      break;

    case "-":
      hasil = angka1 - angka2;
      break;

    case "*":
      hasil = angka1 * angka2;
      break;

    case "/":
      if (angka2 === 0) {
        hasil = "Error: tidak bisa dibagi 0";
      } else {
        hasil = angka1 / angka2;
      }
      break;

    default:
      hasil = "Operator tidak valid!";
      break;
  }

  return("Hasil: " + hasil);
}