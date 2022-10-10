function prindiNimi() {
    let nimi = document.getElementById('nimeInput').value;
    document.getElementById('nimiPealkirjas').innerHTML = nimi;
    console.log(nimi);
}

document.getElementById('nupp').addEventListener('click', prindiNimi);