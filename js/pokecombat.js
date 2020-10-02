let lifeFigtherLeft;
let damageFigtherLeft;
let defenseFigtherLeft;
let lifeFigtherRight;
let damageFigtherRight;
let defenseFigtherRight;
let whoAttack = 0;
let nameLeft;
let nameRight;
let positionScrollablePanelInfoId = 0;

// OBTENEMOS LOS VALORES DE LOS INPUTS
function readInputs() {
    lifeFigtherLeft = document.getElementById('id-life-figther-left').value;
    damageFigtherLeft = document.getElementById('id-damage-figther-left').value;
    defenseFigtherLeft = document.getElementById('id-defense-figther-left').value;

    lifeFigtherRight = document.getElementById('id-life-figther-right').value;
    damageFigtherRight = document.getElementById('id-damage-figther-right').value;
    defenseFigtherRight = document.getElementById('id-defense-figther-right').value;
    // console.log('-------LEFT------');
    // console.log('lifeFigtherLeft:', lifeFigtherLeft);
    // console.log('damageFigtherLeft:', damageFigtherLeft);
    // console.log('defenseFigtherLeft:', defenseFigtherLeft);
    // console.log('-------RIGHT------');
    // console.log('lifeFigtherRight:', lifeFigtherRight);
    // console.log('damageFigtherRight:', damageFigtherRight);
    // console.log('defenseFigtherRight:', defenseFigtherRight);
}

function readNames() {
    nameLeft = document.getElementById('id-figther-left').innerText;
    nameRight = document.getElementById('id-figther-right').innerText;
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

        if (defenseFigtherRight > 0) { //restamos a la defensa
            defenseFigtherRight = defenseFigtherRight - damageFigtherLeft;
            // Mostramos información en la pagina
            writePanelInfo(`Defensa de ${nameRight}: ${defenseFigtherRight}`);
            console.log('defenseFigtherRight:', defenseFigtherRight);
        } else { //restamos a la vida
            lifeFigtherRight = lifeFigtherRight - damageFigtherLeft;
            // Mostramos información en la pagina
            writePanelInfo(`Vida de ${nameRight}: ${lifeFigtherRight}`);
            console.log('lifeFigtherRight:', lifeFigtherRight);
        }

    } else if (whoAttack === 2) { //ataca jugador derecho
        whoAttack = 1;

        if (defenseFigtherLeft > 0) { //restamos a la defensa
            defenseFigtherLeft = defenseFigtherLeft - damageFigtherRight;
            // Mostramos información en la pagina
            writePanelInfo(`Defensa de ${nameLeft}: ${defenseFigtherLeft}`);
            console.log('defenseFigtherLeft:', defenseFigtherLeft);
        } else { //restamos a la vida
            lifeFigtherLeft = lifeFigtherLeft - damageFigtherRight;
            // Mostramos información en la pagina
            writePanelInfo(`Vida de ${nameLeft}: ${lifeFigtherLeft}`);
            console.log('lifeFigtherLeft:', lifeFigtherLeft);
        }
    }
}

function actionButton() {
    document.getElementById('id-panel-info-fight').innerHTML = '';//limpiamos panel de info
    stopMoveFigtherLeft();
    stopMoveFigtherRight();
    moveFigthers();
    readInputs();
    readNames();

    whoAttack = getRandomInt(1, 3);
    console.log('starts player:', whoAttack);
    // while (lifeFigtherLeft > 0 || lifeFigtherRight > 0) {
    //     console.log('dentro del bucle');
    //     setTimeout(figth, 500);

    // }
    var theInterval = setInterval(function () {
        figth();
        if (lifeFigtherLeft <= 0 || lifeFigtherRight <= 0) {
            if (lifeFigtherLeft <= 0) {
                writePanelInfo(`Gana ${nameRight}`);
                stopMoveFigtherLeft();
            }
            if (lifeFigtherRight <= 0) {
                writePanelInfo(`Gana ${nameLeft}`);
                stopMoveFigtherRight();
            }
            clearInterval(theInterval);
        }
    }, 200);
}


// SELECT FIGTHER
function selectFigther1() {
    const element = document.getElementById('id-img-fighter-left');
    element.src = 'img/pokemons/icons8-bullbasaur-96.png';
    document.getElementById('id-figther-left').innerText = 'Bullbasaur';
}

function selectFigther2() {
    console.log('cambio icono 2')
    const element = document.getElementById('id-img-fighter-left');
    element.src = 'img/pokemons/icons8-charmander-96.png';
    document.getElementById('id-figther-left').innerText = 'Charmande';
}

function selectFigther3() {
    const element = document.getElementById('id-img-fighter-left');
    element.src = 'img/pokemons/icons8-dratini-96.png';
    document.getElementById('id-figther-left').innerText = 'Dratini';
}

function selectFigther4() {
    const element = document.getElementById('id-img-fighter-left');
    element.src = 'img/pokemons/icons8-eevee-96.png';
    document.getElementById('id-figther-left').innerText = 'Eevee';
}

function selectFigther5() {
    const element = document.getElementById('id-img-fighter-right');
    element.src = 'img/pokemons/icons8-jigglypuff-96.png';
    document.getElementById('id-figther-right').innerText = 'Jigglypuff';
}

function selectFigther6() {
    const element = document.getElementById('id-img-fighter-right');
    element.src = 'img/pokemons/icons8-mankey-96.png';
    document.getElementById('id-figther-right').innerText = 'Mankey';
}

function selectFigther7() {
    const element = document.getElementById('id-img-fighter-right');
    element.src = 'img/pokemons/icons8-meowth-96.png';
    document.getElementById('id-figther-right').innerText = 'Meowth';
}

function selectFigther8() {
    const element = document.getElementById('id-img-fighter-right');
    element.src = 'img/pokemons/icons8-pikachu-pokemon-96.png';
    document.getElementById('id-figther-right').innerText = 'Pikachu';
}

// SELECT BACKGROUND
function selectBackground1() {
    document.body.style.backgroundImage = "url('img/escenario1.jpg')";
}

function selectBackground2() {
    document.body.style.backgroundImage = "url('img/escenario2.png')";
}

function selectBackground3() {
    document.body.style.backgroundImage = "url('img/escenario3.webp')";
}

function selectBackground4() {
    document.body.style.backgroundImage = "url('img/escenario4.svg')";
}

//MOVE FIGTHERS
function moveFigthers(){
    let figtherLeft = document.getElementById('id-img-fighter-left');
    figtherLeft.classList.add('animate-image');
    let figtherRight = document.getElementById('id-img-fighter-right');
    figtherRight.classList.add('animate-image');
}

function stopMoveFigtherLeft(){
    let figtherLeft = document.getElementById('id-img-fighter-left');
    figtherLeft.classList.remove('animate-image');
}

function stopMoveFigtherRight(){
    let figtherRight = document.getElementById('id-img-fighter-right');
    figtherRight.classList.remove('animate-image');
}