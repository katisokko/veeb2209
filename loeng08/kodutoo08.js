let nuppElement = document.getElementById('nupp');
let nimiElement = document.getElementById('nimi');
let hinnangElement = document.getElementById('hinnang');

nuppElement.addEventListener('click', hindaNime);

function hindaNime() {
    hinnangElement.style.display = 'block';
    let nimePikkus = nimiElement.value.length;

    if (!nimePikkus) {
        hinnangElement.style.display = 'none';
    }

    if (nimePikkus < 6) {

        hinnangElement.innerHTML = "Küll sul on kena lühke nimi"
    }

    if (nimePikkus >= 6) {

        hinnangElement.innerHTML = "Küll sul on kena pikk nimi"
    }

} 
