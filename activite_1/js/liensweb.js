/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

var ulElt = document.createElement("ul"); // Création de la liste

listeLiens.forEach(function (lien) {
    var liElt = document.createElement("li");
    liElt.className = "lien";

    //création du lien sur le titre
    var titreElt = document.createElement("h3");
    titreElt.id = "titre";
    titreElt.style.color = "#428bca";
    
    var lienElt = document.createElement("a");
    lienElt.textContent = lien.titre;
    lienElt.href = lien.url;
    lienElt.style.textDecoration = "none";

    var urlElt = document.createElement("p");
    urlElt.textContent = lien.url;

    var auteurElt = document.createElement("p");
    auteurElt.textContent = 'Ajouté par '+lien.auteur;
    titreElt.appendChild(lienElt);
    liElt.appendChild(titreElt);
    liElt.appendChild(urlElt);
    liElt.appendChild(auteurElt);
    ulElt.appendChild(liElt);
});

document.getElementById("contenu").appendChild( ulElt); // Ajout de la liste à la page
