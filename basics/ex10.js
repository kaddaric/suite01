/*
    Ecrire une fonction "shoppingList",
    qui prend un paramètre un tableau de paniers;

    Un panier est un tableau de mots;

    La fonction retourne un objet contenant:
        - comme clef le nom du produit rencontré
        - comme valeur le nombre de fois qu'il à été rencontré

    Important -> l'ordre n'a aucune importance
*/

//  écrire votre code sous ce commentaire

function shoppingList(tabPanier) {
  let objPanier = {};
  let ingredient;
  for (let j = 0; j < tabPanier.length; j++){
    for (let i = 0; i < tabPanier[j].length; i++){
      ingredient = tabPanier[j][i];
      if (!objPanier[ingredient]) {
        objPanier[ingredient] = 1;
      } else {
        objPanier[ingredient] = objPanier[ingredient] + 1;
      } 
    }
  }
  return objPanier;
}

true, 1, "coucou", {}, [] // truthy
false, null, undefined, 0 // falsy

/*
  Test 1
  Résultat attendu : {
    "orange": 8,
    "kiwi": 4,
    "ananas": 3,
    "prune": 2,
    "banane": 2,
    "pamplemousse": 1
  }
*/

shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]);

/* DO NOT TOUCH */
module.exports = {
  shoppingList: shoppingList
}
