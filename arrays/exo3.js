/*
  Ecrire une fonction "editStringAt"
  qui modifie une chaine de caractères à une certaine position.
  La fonction retourne cette même chaine de caractères avec les modifications attendues.
  
  Prototype:
      str editStringAt(str, position, char);
*/

//  écrire votre code sous ce commentaire
function editStringAt (str, position, char) {
  let tabStr = str.split('');
  tabStr[position] = char;
  return tabStr.join('');
}
/*
  Test 1
  Résultat attendu : "Bondour"
*/
editStringAt("Bonjour", 3, "d");

/*
  Test 2
  Résultat attendu : "Hello World"
*/
editStringAt("Hello world", 6, "W");

/* DO NOT TOUCH */
module.exports = {
  editStringAt: editStringAt
}
