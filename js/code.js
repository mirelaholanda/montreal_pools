const listPiscines = 20;

function envoyerRequete(){
    var request = new XMLHttpRequest();
    request.open("GET", "http://donnees.ville.montreal.qc.ca/dataset/4604afb7-a7c4-4626-a3ca-e136158133f2/resource/e202c0f4-d65d-4d5f-893d-dc392d83298d/download/piscines.geojson");

    request.onreadystatechange = function() { 
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var reponse = JSON.parse(this.responseText);
            console.log(reponse);
            var resultat = reponse.features;

            for(var i = 0; i < listPiscines; i++){
                var noeudLi = document.createElement("li");
                noeudLi.textContent = resultat[i].properties.NOM + " - " + resultat[i].properties.ADRESSE;
                document.getElementById("list").appendChild(noeudLi);
            }
        }
    }
    request.send();
}

