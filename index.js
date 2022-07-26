const url = 'https://blockchain.info/ticker';

function recupererPrix(){


    // créer une requête

    let requete = new XMLHttpRequest();  // créer un objet
    requete.open('GET', url);            // Premier paramètre GET POST
    requete.responseType = 'json';       // Nous attendons du JSON   
    requete.send();                      // Nous envoyons la requête

    // Dès que l'on reçoit une réponse, cette fonction est exécutée

    requete.onload = function() {
        if(requete.readyState === XMLHttpRequest.DONE){
            if(requete.status === 200) {
                let reponse = requete.response; // on stocke la réponse
                let prixEnEuros = reponse.EUR.last;
                document.querySelector('#price_label').textContent = prixEnEuros;
            }
            else {
                alert('un problème est intervenu, merci de revenir plus tard');
            }
        }
    }
    console.log("prix actualisé");
}

setInterval(recupererPrix, 2000);