/*
    Ecrire une fonction "boostedAddition",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre étant l'addition de tous les nombre du tableau

*/

//  écrire votre code sous ce commentaire

function boostedAddition(tab) {
  let somme = 0;
  for (let i = 0; i < tab.length; i++) {
    somme += tab[i];
  }
  return somme;
}

/*
  Test 1
  Résultat attendu : 15
*/

console.log(boostedAddition([4, 5, 6]));

/*
  Test 2
  Résultat attendu : 44
*/
console.log(boostedAddition([4, 4, 6, 8, 10, 12]));

/* DO NOT TOUCH */
module.exports = {
  boostedAddition: boostedAddition
}
