let nuppElement = document.getElementById('nupp');
let nimiElement = document.getElementById('nimi');
let hinnangElement = document.getElementById('hinnang');

nuppElement.addEventListener('click', hindaNime);

function hindaNime() {
    let nimePikkus = nimiElement.value.length;
    console.log(nimePikkus)
} 
