let uudised = [
    {
        pildiUrl: 'pilt1.JPG',
        pealkiri: 'Jalgpall',
        kirjeldus: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Curabitur eu elit vulputate, feugiat augue a, accumsan nunc. 
        Pellentesque nec suscipit ipsum. Ut et bibendum nunc.',
        viideUudisele: 'loeedasi1.html',
    },
    {
        pildiUrl: 'pilt2.JPG',
        pealkiri: 'Võrkpall',
        kirjeldus: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Curabitur eu elit vulputate, feugiat augue a, accumsan nunc. 
        Pellentesque nec suscipit ipsum. Ut et bibendum nunc.',
        viideUudisele: 'loeedasi2.html',
    },
    {
        pildiUrl: 'pilt3.JPG',
        pealkiri: 'Male',
        kirjeldus: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Curabitur eu elit vulputate, feugiat augue a, accumsan nunc. 
        Pellentesque nec suscipit ipsum. Ut et bibendum nunc.',
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

}