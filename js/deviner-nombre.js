/**
 * Jeu du nombre mystère
 * @author  Juan Ahmed
 * @version 2.0
 * @since   2018-09-09 (date de création)
 */

'use strict';

/**
 * Retourne un nombre entier aléatoire compris entre min et max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function tireNombre(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//déclaration de variables
let nbMystere = 0;
let nbEssais = 0;
let reponse = 0;
let message = 'Entrez un nombre entre 1 et 100';

//attribution d'une fonction tireNombre à la variable nbMystere
nbMystere = tireNombre(1, 100);

do {

    //attribution de la saisie utilisateur à une variable + mise en place d'un compteur
    reponse = parseInt(prompt(message));
    nbEssais++;

    //Mise en place de conditions en fonction de la saisie utilisateur
    //Si la saisie est plus petite que le nombre mystère
    if (reponse < nbMystere) {

        //change le message du prompt
        message = 'C\'est plus grand !';
    }
    //Si la saisie est plus grande que le nombre mystère
    else if (reponse > nbMystere) {

        //change le message du prompt
        message = 'C\'est plus petit !';
    }
} while (reponse !== nbMystere);

alert(`Vous avez trouvé après ${nbEssais} essais.`);


