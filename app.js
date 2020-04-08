alert("SALUT TOI !\n" +
    "Alors je vais te présenter le site:\n" +
    "Tu vas trouver un carré, au départ rouge, ainsi que\n" +
    "quelques boutons d'actions qui te permettront:\n" +
    "- soit de faire aller ce carré de gauche à droite en répétant à l'infini\n" +
    "- soit de le faire tourner (à l'infini toujours)\n" +
    "- soit les deux en même temps.\n" +
    "Tu trouveras également un sélecteur de couleur pour changer celle du carré.\n" +
    "Et enfin un bouton stop pour arrêter le mouvement.\n\n" +
    "Ce qui est génial c'est que c'est tout ce que tu peux y faire.\n" +
    "Allez ENJOY!");
alert("Oh et puis un dernier truc : Si ton navigateur te demande\n" +
    "si tu veux empecher l'ouverture d'autre fenêtres de dialogue évite de cocher la case\n" +
    "Ne t'inquiète pas elles n'apparaissent pas pour rien n'importe quand");



let first = true;
let premiereV = true;
let premiereF = true;
function changeColor(couleur){
    document.querySelector('#carre').style.backgroundColor = couleur;
}

function changeClass(className){
    document.querySelector('#carre').className = className;
}

document.querySelector('#couleur').addEventListener('click',function () {
    if (first === true){
        alert("OUPS j'ai oublié de te dire un truc HYPER important\n" +
            "Évite de mettre le carré en noir ou très sombre parce que tu ne le verrais plus.\n\n" +
            "Ce message ne s'affichera qu'une seule fois");
        first=false;
    }
});
function colorSplit(hexaColor){
    let cSplit = hexaColor.split("",7);
    cSplit.shift();
    if(cSplit[0] === "0" && cSplit[2] === "0" && cSplit[4] === "0"){
        if(Number(cSplit[1]) >= 7 || Number(cSplit[3]) >= 7 || Number(cSplit[5]) >= 7 || isNaN(Number(cSplit[1])) || isNaN(Number(cSplit[3])) || isNaN(Number(cSplit[5])) >= 7){
            alert(premiereV);
            if(premiereV === true) {
                alert("Parfait !\n" +
                    "Normalement là il est visible\n\n" +
                    "Ce message ne s'affichera qu'une seule fois");
                premiereV = false;
            }
        }else{
            if(premiereF === true) {
                alert("Ah !\n" +
                    "Je t'avais prévenu, mais j'étais sûr que tu allais quand même tenter\n\n" +
                    "Ce message ne s'affichera qu'une seule fois");
                premiereF = false;
            }
        }
    }else{
        if(premiereV === true) {
            alert("Parfait !\n" +
                "Normalement là il est visible\n\n" +
                "Ce message ne s'affichera qu'une seule fois");
            premiereV = false;
        }
    }
}
document.querySelector('#couleur').addEventListener('change',function () {
    let col = document.getElementById("couleur").value;
    changeColor(col);
    colorSplit(col);
});

document.querySelector('#rotate').addEventListener('click',function () {
    changeClass("rotating");
});

document.querySelector('#translate').addEventListener('click',function () {
    changeClass("slider");
});

document.querySelector('#rotaslate').addEventListener('click',function () {
    changeClass("rotslate");
});

document.querySelector('#stop').addEventListener('click',function () {
    changeClass(null);
});



