let lifeFigtherLeft;
let damageFigtherLeft;
let defenseFigtherLeft;
let lifeFigtherRight;
let damageFigtherRight;
let defenseFigtherRight;
let whoAttack = 0;

// OBTENEMOS LOS VALORES DE LOS INPUTS
function readInputs() {
    lifeFigtherLeft = document.getElementById('id-life-figther-left').value;
    damageFigtherLeft = document.getElementById('id-damage-figther-left').value;
    defenseFigtherLeft = document.getElementById('id-defense-figther-left').value;

    lifeFigtherRight = document.getElementById('id-life-figther-right').value;
    damageFigtherRight = document.getElementById('id-damage-figther-right').value;
    defenseFigtherRight = document.getElementById('id-defense-figther-right').value;
    console.log('-------LEFT------');
    console.log('lifeFigtherLeft:', lifeFigtherLeft);
    console.log('damageFigtherLeft:', damageFigtherLeft);
    console.log('defenseFigtherLeft:', defenseFigtherLeft);
    console.log('-------RIGHT------');
    console.log('lifeFigtherRight:', lifeFigtherRight);
    console.log('damageFigtherRight:', damageFigtherRight);
    console.log('defenseFigtherRight:', defenseFigtherRight);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function writePanelInfo(text){
    const panelInfo = document.getElementById('id-panel-info-fight');
    var node = document.createElement('P'); 
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    panelInfo.appendChild(node);
}

function figth() {
    if (whoAttack === 1) { //ataca jugador izquierdo
        whoAttack = 2;

        if (defenseFigtherRight > 0) { //restamos a la defensa
            defenseFigtherRight = defenseFigtherRight - damageFigtherLeft;
            // Mostramos información en la pagina
            writePanelInfo(`Defensa right: ${defenseFigtherRight}`);
            console.log('defenseFigtherRight:',defenseFigtherRight);
        } else { //restamos a la vida
            lifeFigtherRight = lifeFigtherRight - damageFigtherLeft;
            // Mostramos información en la pagina
            writePanelInfo(`Vida right: ${lifeFigtherRight}`);
            console.log('lifeFigtherRight:',lifeFigtherRight);
        }


    } else if (whoAttack === 2) { //ataca jugador derecho
        whoAttack = 1;

        if (defenseFigtherLeft > 0) { //restamos a la defensa
            defenseFigtherLeft = defenseFigtherLeft - damageFigtherRight;
            // Mostramos información en la pagina
            writePanelInfo(`Defensa left: ${defenseFigtherLeft}`);
            console.log('defenseFigtherLeft:',defenseFigtherLeft);
        } else { //restamos a la vida
            lifeFigtherLeft = lifeFigtherLeft - damageFigtherRight;
            // Mostramos información en la pagina
            writePanelInfo(`Vida left: ${lifeFigtherLeft}`);
            console.log('lifeFigtherLeft:',lifeFigtherLeft);
        }
    }
}

function actionButton() {
    readInputs();

    whoAttack = getRandomInt(1, 3);
    console.log('starts player:', whoAttack);
    // while (lifeFigtherLeft > 0 || lifeFigtherRight > 0) {
    //     console.log('dentro del bucle');
    //     setTimeout(figth, 500);

    // }
    var theInterval = setInterval(function (){
        figth();
        if(lifeFigtherLeft <= 0 || lifeFigtherRight <= 0){
            if(lifeFigtherLeft <= 0){
                writePanelInfo('Gana right');
            }
            if(lifeFigtherRight <= 0){
                writePanelInfo('Gana left');
            }
            clearInterval(theInterval);
        }
    }, 200);
}


// SELECT FIGTHER
function selectFigther1() {
    const element = document.getElementById('id-img-fighter-left');
    element.src = 'img/pokemons/icons8-bullbasaur-96.png';
}

function selectFigther2() {
    console.log('cambio icono 2')
    const element = document.getElementById('id-img-fighter-left');
    element.src = 'img/pokemons/icons8-charmander-96.png';
}

function selectFigther3() {
    const element = document.getElementById('id-img-fighter-left');
    element.src = 'img/pokemons/icons8-dratini-96.png';
}

function selectFigther4() {
    const element = document.getElementById('id-img-fighter-left');
    element.src = 'img/pokemons/icons8-eevee-96.png';
}

function selectFigther5() {
    const element = document.getElementById('id-img-fighter-right');
    element.src = 'img/pokemons/icons8-jigglypuff-96.png';
}

function selectFigther6() {
    const element = document.getElementById('id-img-fighter-right');
    element.src = 'img/pokemons/icons8-mankey-96.png';
}

function selectFigther7() {
    const element = document.getElementById('id-img-fighter-right');
    element.src = 'img/pokemons/icons8-meowth-96.png';
}

function selectFigther8() {
    const element = document.getElementById('id-img-fighter-right');
    element.src = 'img/pokemons/icons8-pikachu-pokemon-96.png';
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