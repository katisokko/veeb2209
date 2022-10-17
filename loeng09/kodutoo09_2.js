let uudised = [
    {
        pildiUrl: 'pilt1.JPG',
        pealkiri: 'Jalgpall',
        kirjeldus: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu elit vulputate, feugiat augue a, accumsan nunc. Pellentesque nec suscipit ipsum. Ut et bibendum nunc.',
        viideUudisele: 'loeedasi1.html',
    },
    {
        pildiUrl: 'pilt2.JPG',
        pealkiri: 'Võrkpall',
        kirjeldus: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu elit vulputate, feugiat augue a, accumsan nunc. Pellentesque nec suscipit ipsum. Ut et bibendum nunc.',
        viideUudisele: 'loeedasi2.html',
    },
    {
        pildiUrl: 'pilt3.JPG',
        pealkiri: 'Male',
        kirjeldus: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu elit vulputate, feugiat augue a, accumsan nunc. Pellentesque nec suscipit ipsum. Ut et bibendum nunc.',
        viideUudisele: 'loeedasi3.html',
    }
];

let uudisedElement = document.querySelector('.uudised');
for (let i = 0; i < uudised.length; i++) {
    let uudisElement = document.createElement('div');
    uudisElement.classList = ['uudis'];

    let pildiElement = document.createElement('img');
    pildiElement.src = uudised[i].pildiUrl;
    uudisElement.appendChild(pildiElement);

    let pealkiriElement = document.createElement('h3');
    pealkiriElement.classList = ['pealkiri'];
    pealkiriElement.innerHTML = uudised[i].pealkiri;
    uudisElement.appendChild(pealkiriElement);

    let kirjeldusElement = document.createElement('div');
    kirjeldusElement.classList = ['kokkuvote'];
    kirjeldusElement.innerHTML = uudised[i].kirjeldus;
    uudisElement.appendChild(kirjeldusElement);

    let viideElement = document.createElement('a');
    viideElement.href = uudised[i].viideUudisele;
    viideElement.innerHTML = 'Loe edasi';
    uudisElement.appendChild(viideElement);

    uudisedElement.appendChild(uudisElement);
}