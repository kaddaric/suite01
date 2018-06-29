/*
    Ecrire une fonction "isAllEven",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre:
        - 1 si tous les nombres du tableau sont pair
        - 0 si au moins un nombre du tableau est impair

    CRITERE DE VALIDATION OBLIGATOIRE
    --> Réutiliser la fonction isEven
        que vous aviez codé dans les exercices précédents ;)
        INTERDICTION d'écrire le contenu de isEven dans la même fonction
        Vous devez donc bien avoir 2 fonctions différentes;

*/

//  écrire votre code sous ce commentaire

function isEven(nb){
  let type = 0;
  if (nb % 2 === 0){
    type = 1;
  }
  return type;
}

function isAllEven(tabNb) {
  let ctrl = 1;
  for (let i = 0; i < tabNb.length; i++) {
    if (isEven(tabNb[i]) === 0) {
      ctrl = 0;
      break;
    }
  }
  return ctrl;
}
/*
  Test 1
  Résultat attendu : 0
*/

console.log(isAllEven([4, 5, 6]));

/*
  Test 2
  Résultat attendu : 1
*/

console.log(isAllEven([4, 4, 6, 8, 10, 12]));

/* DO NOT TOUCH */
module.exports = {
  isAllEven: isAllEven
}
