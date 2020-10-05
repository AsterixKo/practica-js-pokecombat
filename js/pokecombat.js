let lifeFighterLeft;
let damageFighterLeft;
let defenseFighterLeft;
let lifeFighterRight;
let damageFighterRight;
let defenseFighterRight;
let whoAttack = 0;
let nameLeft;
let nameRight;
let positionScrollablePanelInfoId = 0;


loadLastValuesFromLocalStorage();

// OBTENEMOS LOS VALORES DE LOS INPUTS
function readInputs() {
    lifeFighterLeft = document.getElementById('id-life-fighter-left').value;
    damageFighterLeft = document.getElementById('id-damage-fighter-left').value;
    defenseFighterLeft = document.getElementById('id-defense-fighter-left').value;

    lifeFighterRight = document.getElementById('id-life-fighter-right').value;
    damageFighterRight = document.getElementById('id-damage-fighter-right').value;
    defenseFighterRight = document.getElementById('id-defense-fighter-right').value;
    // console.log('-------LEFT------');
    // console.log('lifeFighterLeft:', lifeFighterLeft);
    // console.log('damageFighterLeft:', damageFighterLeft);
    // console.log('defenseFighterLeft:', defenseFighterLeft);
    // console.log('-------RIGHT------');
    // console.log('lifeFighterRight:', lifeFighterRight);
    // console.log('damageFighterRight:', damageFighterRight);
    // console.log('defenseFighterRight:', defenseFighterRight);
}

function readNames() {
    nameLeft = document.getElementById('id-fighter-left').innerText;
    nameRight = document.getElementById('id-fighter-right').innerText;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function writePanelInfo(text) {
    const panelInfo = document.getElementById('id-panel-info-fight');
    var node = document.createElement('P');
    node.setAttribute('id', 'id-scrollable-' + positionScrollablePanelInfoId);

    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    panelInfo.appendChild(node);

    //seteamos el scroll
    var myElement = document.getElementById('id-scrollable-' + positionScrollablePanelInfoId);
    var topPos = myElement.scrollIntoView();
    positionScrollablePanelInfoId++;
}

function figth() {
    if (whoAttack === 1) { //ataca jugador izquierdo
        whoAttack = 2;

        if (defenseFighterRight > 0) { //restamos a la defensa
            defenseFighterRight = defenseFighterRight - damageFighterLeft;
            // Mostramos información en la pagina
            writePanelInfo(`Defensa de ${nameRight}: ${defenseFighterRight}`);
            console.log('defenseFighterRight:', defenseFighterRight);
        } else { //restamos a la vida
            lifeFighterRight = lifeFighterRight - damageFighterLeft;
            // Mostramos información en la pagina
            writePanelInfo(`Vida de ${nameRight}: ${lifeFighterRight}`);
            console.log('lifeFighterRight:', lifeFighterRight);
        }

    } else if (whoAttack === 2) { //ataca jugador derecho
        whoAttack = 1;

        if (defenseFighterLeft > 0) { //restamos a la defensa
            defenseFighterLeft = defenseFighterLeft - damageFighterRight;
            // Mostramos información en la pagina
            writePanelInfo(`Defensa de ${nameLeft}: ${defenseFighterLeft}`);
            console.log('defenseFighterLeft:', defenseFighterLeft);
        } else { //restamos a la vida
            lifeFighterLeft = lifeFighterLeft - damageFighterRight;
            // Mostramos información en la pagina
            writePanelInfo(`Vida de ${nameLeft}: ${lifeFighterLeft}`);
            console.log('lifeFighterLeft:', lifeFighterLeft);
        }
    }
}

function actionButton() {
    document.getElementById('id-panel-info-fight').innerHTML = ''; //limpiamos panel de info
    stopMoveFighterLeft();
    stopMoveFighterRight();
    moveFighters();
    readInputs();
    saveLastInputValues();
    readNames();

    whoAttack = getRandomInt(1, 3);
    console.log('starts player:', whoAttack);
    // while (lifeFighterLeft > 0 || lifeFighterRight > 0) {
    //     console.log('dentro del bucle');
    //     setTimeout(figth, 500);

    // }
    var theInterval = setInterval(function () {
        figth();
        if (lifeFighterLeft <= 0 || lifeFighterRight <= 0) {
            if (lifeFighterLeft <= 0) {
                writePanelInfo(`Gana ${nameRight}`);
                stopMoveFighterLeft();
            }
            if (lifeFighterRight <= 0) {
                writePanelInfo(`Gana ${nameLeft}`);
                stopMoveFighterRight();
            }
            clearInterval(theInterval);
        }
    }, 200);
}


// SELECT FIGTHER
function selectFighter1() {
    const srcFighter1 = 'img/pokemons/icons8-bullbasaur-96.png';
    const nameFighter1 = 'Bullbasaur';
    const element = document.getElementById('id-img-fighter-left');
    element.src = srcFighter1;
    document.getElementById('id-fighter-left').innerText = nameFighter1;
    saveFighterLeftInLocalStorate(srcFighter1, nameFighter1);
}

function selectFighter2() {
    const srcFighter2 = 'img/pokemons/icons8-charmander-96.png';
    const nameFighter2 = 'Charmande';
    const element = document.getElementById('id-img-fighter-left');
    element.src = srcFighter2;
    document.getElementById('id-fighter-left').innerText = nameFighter2;
    saveFighterLeftInLocalStorate(srcFighter2, nameFighter2);
}

function selectFighter3() {
    const srcFighter3 = 'img/pokemons/icons8-dratini-96.png';
    const nameFighter3 = 'Dratini';
    const element = document.getElementById('id-img-fighter-left');
    element.src = srcFighter3;
    document.getElementById('id-fighter-left').innerText = nameFighter3;
    saveFighterLeftInLocalStorate(srcFighter3, nameFighter3);
}

function selectFighter4() {
    const srcFighter4 = 'img/pokemons/icons8-eevee-96.png';
    const nameFighter4 = 'Eevee';
    const element = document.getElementById('id-img-fighter-left');
    element.src = srcFighter4;
    document.getElementById('id-fighter-left').innerText = nameFighter4;
    saveFighterLeftInLocalStorate(srcFighter4, nameFighter4);
}

function selectFighter5() {
    const srcFighter5 = 'img/pokemons/icons8-jigglypuff-96.png';
    const nameFighter5 = 'Jigglypuff';
    const element = document.getElementById('id-img-fighter-right');
    element.src = srcFighter5;
    document.getElementById('id-fighter-right').innerText = nameFighter5;
    saveFighterRightInLocalStorate(srcFighter5, nameFighter5);
}

function selectFighter6() {
    const srcFighter6 = 'img/pokemons/icons8-mankey-96.png';
    const nameFighter6 = 'Mankey';
    const element = document.getElementById('id-img-fighter-right');
    element.src = srcFighter6;
    document.getElementById('id-fighter-right').innerText = nameFighter6;
    saveFighterRightInLocalStorate(srcFighter6, nameFighter6);
}

function selectFighter7() {
    const srcFighter7 = 'img/pokemons/icons8-meowth-96.png';
    const nameFighter7 = 'Meowth';
    const element = document.getElementById('id-img-fighter-right');
    element.src = srcFighter7;
    document.getElementById('id-fighter-right').innerText = nameFighter7;
    saveFighterRightInLocalStorate(srcFighter7, nameFighter7);
}

function selectFighter8() {
    const srcFighter8 = 'img/pokemons/icons8-pikachu-pokemon-96.png';
    const nameFighter8 = 'Pikachu';
    const element = document.getElementById('id-img-fighter-right');
    element.src = srcFighter8;
    document.getElementById('id-fighter-right').innerText = nameFighter8;
    saveFighterRightInLocalStorate(srcFighter8, nameFighter8);
}

// SELECT BACKGROUND
function selectBackground1() {
    const urlBackground1 = "url('img/escenario1.jpg')";
    document.body.style.backgroundImage = urlBackground1;
    saveBackgroundInLocalStorate(urlBackground1);
}

function selectBackground2() {
    const urlBackground2 = "url('img/escenario2.png')";
    document.body.style.backgroundImage = urlBackground2;
    saveBackgroundInLocalStorate(urlBackground2);
}

function selectBackground3() {
    const urlBackground3 = "url('img/escenario3.webp')";
    document.body.style.backgroundImage = urlBackground3;
    saveBackgroundInLocalStorate(urlBackground3);
}

function selectBackground4() {
    const urlBackground4 = "url('img/escenario4.svg')";
    document.body.style.backgroundImage = urlBackground4;
    saveBackgroundInLocalStorate(urlBackground4);
}

//MOVE FIGTHERS
function moveFighters() {
    let fighterLeft = document.getElementById('id-img-fighter-left');
    fighterLeft.classList.add('animate-image');
    let fighterRight = document.getElementById('id-img-fighter-right');
    fighterRight.classList.add('animate-image');
}

function stopMoveFighterLeft() {
    let fighterLeft = document.getElementById('id-img-fighter-left');
    fighterLeft.classList.remove('animate-image');
}

function stopMoveFighterRight() {
    let fighterRight = document.getElementById('id-img-fighter-right');
    fighterRight.classList.remove('animate-image');
}

/**
 * Load last values from localStorage.
 */
function loadLastValuesFromLocalStorage() {
    loadLastInputValues();
    loadLastSelectedPokemons();
    loadLastBackground();
}

/**
 * Load last background from localStorage.
 */
function loadLastBackground() {
    console.log('loading last background...');
    const urlBackground1 = "url('img/escenario1.jpg')";
    let urlBackground = localStorage.getItem('combat-background');
    console.log(urlBackground);
    if (urlBackground === null) {
        console.log('combat-background is null');
        urlBackground = urlBackground1;
    }
    document.body.style.backgroundImage = urlBackground;
}

/**
 * Load last input values from the pannels from localStorage.
 */
function loadLastInputValues() {
    console.log('loading last input values...');

    lifeFighterLeft = localStorage.getItem('life-fighter-left') === null ? 101 : localStorage.getItem('life-fighter-left');
    damageFighterLeft = localStorage.getItem('damage-fighter-left') === null ? 11 : localStorage.getItem('damage-fighter-left');
    defenseFighterLeft = localStorage.getItem('defense-fighter-left') === null ? 101 : localStorage.getItem('defense-fighter-left');

    lifeFighterRight = localStorage.getItem('life-fighter-right') === null ? 101 : localStorage.getItem('life-fighter-right');
    damageFighterRight = localStorage.getItem('damage-fighter-right') === null ? 11 : localStorage.getItem('damage-fighter-right');
    defenseFighterRight = localStorage.getItem('defense-fighter-right') === null ? 101 : localStorage.getItem('defense-fighter-right');

    document.getElementById('id-life-fighter-left').value = lifeFighterLeft;
    document.getElementById('id-damage-fighter-left').value = damageFighterLeft;
    document.getElementById('id-defense-fighter-left').value = defenseFighterLeft;

    document.getElementById('id-life-fighter-right').value = lifeFighterRight;
    document.getElementById('id-damage-fighter-right').value = damageFighterRight;
    document.getElementById('id-defense-fighter-right').value = defenseFighterRight;
}

/**
 * Load last selected pokemons from localStorage
 */
function loadLastSelectedPokemons() {
    console.log('loading last selected pokemons');
    //default values;
    const srcFighter1 = 'img/pokemons/icons8-bullbasaur-96.png';
    const nameFighter1 = 'Bullbasaur';
    const srcFighter5 = 'img/pokemons/icons8-jigglypuff-96.png';
    const nameFighter5 = 'Jigglypuff';

    //from localStorage
    const srcFighterLeft = localStorage.getItem('fighter-left-src');
    const nameFighterLeft = localStorage.getItem('fighter-left-name');
    const srcFighterRight = localStorage.getItem('fighter-right-src');
    const nameFighterRight = localStorage.getItem('fighter-right-name');
    if (srcFighterLeft === null || nameFighterLeft === null) { //default values
        console.log('srcFighterLeft || nameFighterLeft is null');
        const element = document.getElementById('id-img-fighter-left');
        element.src = srcFighter1;
        document.getElementById('id-fighter-left').innerText = nameFighter1;
    } else {
        console.log('srcFighterLeft || nameFighterLeft is not null');
        const element = document.getElementById('id-img-fighter-left');
        element.src = srcFighterLeft;
        document.getElementById('id-fighter-left').innerText = nameFighterLeft;
    }
    if (srcFighterRight === null || nameFighterRight === null) { //default values
        console.log('srcFighterRight || nameFighterRight is null');
        const element = document.getElementById('id-img-fighter-right');
        element.src = srcFighter5;
        document.getElementById('id-fighter-right').innerText = nameFighter5;
    } else {
        console.log('srcFighterRight || nameFighterRight is not null');
        const element = document.getElementById('id-img-fighter-right');
        element.src = srcFighterRight;
        document.getElementById('id-fighter-right').innerText = nameFighterRight;
    }

}

/**
 * Save background in to local storage with key combat-background.
 * @param {*} url example "url('img/escenario1.jpg')"
 */
function saveBackgroundInLocalStorate(url) {
    localStorage.setItem('combat-background', url);
}

/**
 * Save Fighter left in local storage with key fighter-left-name y fighter-left-src
 * @param {*} src resouce of the image example 'img/pokemons/icons8-bullbasaur-96.png'
 * @param {*} name Name of the pokemon example 'Bullbasaur'
 */
function saveFighterLeftInLocalStorate(src, name) {
    localStorage.setItem('fighter-left-src', src);
    localStorage.setItem('fighter-left-name', name);
}

/**
 * Save Fighter right in local storage with key fighter-right-name y fighter-right-src
 * @param {*} src resouce of the image example 'img/pokemons/icons8-bullbasaur-96.png'
 * @param {*} name Name of the pokemon example 'Bullbasaur'
 */
function saveFighterRightInLocalStorate(src, name) {
    localStorage.setItem('fighter-right-src', src);
    localStorage.setItem('fighter-right-name', name);
}

/**
 * Save last input values of the pannels.
 */
function saveLastInputValues() {
    const saveLifeFighterLeft = document.getElementById('id-life-fighter-left').value;
    const saveDamageFighterLeft = document.getElementById('id-damage-fighter-left').value;
    const saveDefenseFighterLeft = document.getElementById('id-defense-fighter-left').value;
    localStorage.setItem('life-fighter-left', saveLifeFighterLeft);
    localStorage.setItem('damage-fighter-left', saveDamageFighterLeft);
    localStorage.setItem('defense-fighter-left', saveDefenseFighterLeft);

    const saveLifeFighterRight = document.getElementById('id-life-fighter-right').value;
    const saveDamageFighterRight = document.getElementById('id-damage-fighter-right').value;
    const saveDefenseFighterRight = document.getElementById('id-defense-fighter-right').value;
    localStorage.setItem('life-fighter-right', saveLifeFighterRight);
    localStorage.setItem('damage-fighter-right', saveDamageFighterRight);
    localStorage.setItem('defense-fighter-right', saveDefenseFighterRight);
}