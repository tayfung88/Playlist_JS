
// Déclarer la variable playlist pour stocker / placer les fichiers audio dans un tableau pour manipuler efficacement ces fichiers. 

index = 0;

let playlist = [
    {
        song:'audio/Blue_Skies.mp3',
        name : 'Blue Skies',
        singer : 'Louis Armstrong & Ella Fitzgerald'
    },
    {
        song : 'audio/Cartoon_Hoedown.mp3',
        name : "Cartoon Hoedown",
        singer : "Media Right Productions"
    },
    {
        song : 'audio/Earthy_Crust.mp3',
        name : 'Earthy',
        singer : 'Jingle Punks'
    },
    {
        song : 'audio/Hold_On_a_Minute.mp3',
        name : 'Hold On Minute',
        singer : 'Ray Flowers'
    },
    {
        song : 'audio/JohnDunbarTheme.mp3',
        name : 'John Dunbar',
        singer : 'John Barry'
    },
    {
        song : 'audio/Stay_With_You.mp3',
        name : 'Stay With You',
        singer : 'John Legend'
    },
    {
        song : 'audio/Symphony_No_5_by_Beethoven.mp3',
        name : 'Symphony',
        singer : 'Beethoven'
    },
]

// Initier la fonction init pour déclarer que la playlist (musique) commence à l'indice 0 du tableau, donc le premier élément du tableau playlist.
function init() {
    // Charge la première piste audio
    document.getElementById('lecteur').src = playlist[index].song;

    // load_track(index);
    
    // Mise à jour du titre et de l'artiste
    document.getElementById('nomArt').innerHTML = playlist[0].name;
    document.getElementById('nomChan').innerHTML = playlist[0].singer;
}

function lecture() {
	// document.getElementById('lecteur').play();

    let lecteur = document.getElementById('lecteur');
    if (lecteur.paused) {
        lecteur.play();
    } else {
        lecteur.pause();
    }
}



//***** PREV - NEXT *****/

function prev() {
    index--; 

    if (index < 0) {
        // Si l'index dépasse la longueur du tableau (en passant au-delà du premier élément), revenez au dernier élément du tableau.
        index = playlist.length - 1;
    }

    //  Accéder aux propriétés name et singer de la piste actuelle dans le tableau playlist
    document.getElementById('nomArt').innerHTML = playlist[index].name;
    document.getElementById('nomChan').innerHTML = playlist[index].singer;

    // Accéder à la piste audio dans le tableau playlist
    document.getElementById('lecteur').src = playlist[index].song;
    
    lecture();
}



function next() {
    index++; 

    if (index >= playlist.length -1) {
        // Si l'index dépasse la longueur du tableau (en passant au-delà du dernier élément), revenez au premier élément du tableau.
        index = 0;
    }

    //  Accéder aux propriétés name et singer de la piste actuelle dans le tableau playlist
    document.getElementById('nomArt').innerHTML = playlist[index].name;
    document.getElementById('nomChan').innerHTML = playlist[index].singer;

    // Accéder à la piste audio dans le tableau playlist
    document.getElementById('lecteur').src = playlist[index].song;

    lecture();
}



//***** VOLUME *****//

// Création d'une fonction pour baisser le volume : 
function volumeMoins() {
    // Si volume de l'élément est supérieur à 0 (toFixed = arrondie à 1 chiffre après la virgule) 
    if (document.getElementById('lecteur').volume.toFixed(1)>0) {

        // Pour baisser le volume -> Volume atm - (volume - 0.1)
        document.getElementById("lecteur").volume -= 0.1;
    
    // Valeur de range 'barrevolume' est égal à valeur du volume de l'élément ID 'lecteur' 
    document.getElementById('barrevolume').value=document.getElementById('lecteur').volume;
    }
}

// Création d'une fonction pour monter le volume : 
function volumePlus() {
    // Si volume de l'élément est inférieur à 1 (toFixed = arrondie à 1 chiffre après la virgule)
    if (document.getElementById('lecteur').volume.toFixed(1)<1) {

        // Pour monter le volume -> Volume atm + (volume + 0.1)
        document.getElementById("lecteur").volume += 0.1;

    // Valeur de range 'barrevolume' est égal à valeur du volume de l'élément ID 'lecteur' 
    document.getElementById('barrevolume').value=document.getElementById('lecteur').volume;
    }
}

// Création d'une fonction pour modifier le volume avec la range (onchange) 
function volumechange() {

    // le volume de l'élément ('lecteur') est égal à la valeur de l'élément ('barrevolume')
    document.getElementById('lecteur').volume=document.getElementById('barrevolume').value;
}



//***** MUSIQUE CARTE *****/

function lecturemusique(index) {
    // Charge la piste correspondante 
    document.getElementById('lecteur').src = playlist[index].song;

    // Met à jour le titre et l'artiste dans la section titreactuel
    document.getElementById('nomArt').innerHTML = playlist[index].name;
    document.getElementById('nomChan').innerHTML = playlist[index].singer;

	document.getElementById('lecteur').play();
}



//***** PROGRESSION MUSIQUE *****/

// pour connaitre la durée max de la piste audio
function changeDuration() { 
    //  attribut max du  Range et lui donne la valeur max de la piste audio
    document.getElementById('tempsmusique').setAttribute('max', document.getElementById('lecteur').duration);
}

function changeTimeSpend() { 
    //  donne la valeur currentTime à l'input Range 
    document.getElementById('tempsmusique').value=document.getElementById('lecteur').currentTime;
}

function changeRangeTime() {
    // onchange sur la barre Temps et modifie la valeur currentTime en lui donnant la valeur de l'input Range  
    document.getElementById('lecteur').currentTime=document.getElementById('tempsmusique').value;
}



/*****  Temps en Mins et Secs de la musique *****/

// Créer un intervalle qui s'exécute toutes les 10 millisecondes (0,01 seconde).
let update = setInterval(function() {
    // Cette fonction est exécutée à chaque intervalle.

    // Calcul des minutes écoulées en divisant le temps en cours (en secondes) par 60 et en arrondissant vers le bas.
    let mins1 = Math.floor(document.getElementById('lecteur').currentTime / 60);

    // Calcul des secondes écoulées en prenant le reste de la division du temps en cours par 60 et en arrondissant vers le bas.
    let secs1 = Math.floor(document.getElementById('lecteur').currentTime % 60);


    // Calcul des minutes écoulées en divisant le temps en cours (en secondes) par 60 et en arrondissant vers le bas.
    let mins2 = Math.floor(document.getElementById('lecteur').duration / 60);

    // Calcul des secondes écoulées en prenant le reste de la division du temps en cours par 60 et en arrondissant vers le bas.
    let secs2 = Math.floor(document.getElementById('lecteur').duration % 60);



    // Si les secondes sont inférieures à 10, ajoute un zéro devant le chiffre pour l'affichage.
    if (secs1 < 10) {
      secs1 = '0' + String(secs1);
    }

    if (secs2 < 10) {
        secs2 = '0' + String(secs2);
    }


    // Met à jour le contenu de l'élément avec l'ID 'timer' pour afficher les minutes et les secondes au format 'MINUTES:SECONDES'.
    document.getElementById('timer').innerHTML = mins1 + ':' + secs1 + ' / ' + mins2 + ':' +secs2;
  }, 10);


  