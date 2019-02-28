
// initialisation des variables/ : les réponses sont un tableau "rep" de 10 valeurs, les questions faites un tableau "faite"
// le score est mis à zéro au départ
 

var rep = new Array;

var faite = new Array;

var score = 0;
 
 

// rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
// initialisation des bonnes réponses
// valeurs à modifier (a b c ou d : sont les réponses justes, une par question rep[1] est la réponse à la question 1, etc..) 
 
 

rep[1] = "b";

rep[2] = "b";

rep[3] = "c";

rep[4] = "c";

rep[5] = "a";

rep[6] = "c";

rep[7] = "b";

rep[8] = "c";

rep[9] = "a";

rep[10] = "d";
 

// rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
// les parties en bleu apparaissent en commentaire, elles peuvent être modifiées
// la fonction "engine" vérifie si la réponse est bonne ("question" est le numéro de la question,
// "reponse" est la réponse de l'utilisateur, il a un point de plus si elle est bonne, - 1 s'il a déjà répondu.

function truc(){
alert("c'est un point de vue");
}

function Engine(question, reponse) {

        if (reponse != rep[question]) {

                if (!faite[question]) {

                        faite[question] = -1;

                        alert("Faux !!   La bonne réponse était en - " + rep[question] + " -");

                        }

                else {

                        alert("Tu as déjà répondu à cette question !");

                        }

                }

        else {

                if (!faite[question]) {

                        faite[question] = -1;

                        score++;

                        alert("Bonne réponse !! ");

                        }

                else { 

                        alert("Tu as déjà répondu à cette question !");

                        }

                }

}

// commentaires pour le résultat final

function NextLevel () {

        if (score > 10) {

                alert("Tricheur !");

                }

        if (score > 8 && score <= 10) {

                alert(score + "/10. " + "Un coup de maître !");

                }

        if (score > 6 && score <= 8) {

                alert(score + "/10. " + "Bien, mais... pas parfait.");

                }
 
 

        if (score >= 4 && score < 6) {

                alert(score + "/10. " + "Pas terrible... un autre essai ?");

                }

        if (score < 4) {

                alert(score + "/10. " + "Il faut refaire l'exercice");

                }
 
 
 

// ======================================================

// ligne qui suit à modifier pour envoyer le formulaire

// (mais indiquez la méthode dans la balise du formulaire) :

// document.quest.submit()
 
 

// ligne qui suit pour vider le formulaire :

faite = new Array;

score = 0;

//ligne suivante à désactiver si IE3 ou -

document.quest.reset();

} 