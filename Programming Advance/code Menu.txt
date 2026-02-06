import { kalkulatorMenu } from "./rumus.js";
import readline from 'readline';

const inputUser = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

inputUser.question('Masukan angka pertama:', angka1 => {
inputUser.question('Masukan operator (+-*/):', operator => {
inputUser.question('Masukan angka kedua:', angka2 => {



    const hasil = kalkulatorMenu(angka1, angka2, operator);
      console.log("Hasil:", hasil);
  
     inputUser.close();
  })
 
    });
  });