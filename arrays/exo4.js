/*
  Ecrire une fonction "searchOcc"
  qui nous renvoie l'index d'une occurrence dans un tableau.
  Si l'occurrence est introuvable dans le tableau, renvoyer -1;
  
  Prototype:
      nbr searchOcc(arr, occurence);

  Fonctions interdites:
      - Array.prototype.indexOf
*/

//  écrire votre code sous ce commentaire
function searchOcc(arr, value){
  let indexOcc = -1;
  for (let i = 0; i < arr.length ; i++){
    if (arr[i] === value){
      indexOcc = i;
    }
  }
  return indexOcc;
}
/*
  Test 1
  Résultat attendu : 2
*/
searchOcc(["Salut", "ça", "va", "?"], "va");
/*
  Test 2
  Résultat attendu : -1
*/
searchOcc(["Salut", "ça", "va", "?"], "Ahahahah");

/* DO NOT TOUCH */
module.exports = {
  searchOcc: searchOcc
}
