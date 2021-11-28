import React, { useEffect } from "react";
import '../styles/battle.css';
import { Pokedex } from '../scripts/data.js';
import { Habitats } from "../scripts/habitats";

export const Battle = () => {
    useEffect(() => {
        // Update the document title using the browser API
        checkBattleSave();
    });

    const checkBattleSave = () => {
        let habitats = {}; //_location for each pokemon
        let condition = 'wary'; // Either wary, angry, or eating
        let pokemon, sprite, pokeindex;
        let crate = 0, counter = 0, turn = 1, level = 20, tangled = 0;
        let iv = Math.floor(Math.random() * 15) + 1;
        let trainer = JSON.parse(localStorage.getItem("browserMonTrainer"));
        let dex = JSON.parse(localStorage.getItem("browserMonPokedex"));
        let currentToss = "";
        let inKanto = localStorage._location == 'fish' || localStorage._location == 'mtmoon' || localStorage._location == 'digcave' || localStorage._location == 'vforest' || localStorage._location == 'rtunnel' || localStorage._location == 'kszone' || localStorage._location == 'pwrplnt' || localStorage._location == 'pkmnmnsn' || localStorage._location == 'kvroad' || localStorage._location == 'ccave' || localStorage._location == 'sfisle';
        let inJohto = localStorage._location == 'npark' || localStorage._location == 'ruinsoa' || localStorage._location == 'iforest' || localStorage._location == 'ttower' || localStorage._location == 'wisle' || localStorage._location == 'mmortar' || localStorage._location == 'lakerage' || localStorage._location == 'icepath' || localStorage._location == 'dcave' || localStorage._location == 'msilver' || localStorage._location == 'jvroad' || localStorage._location == 'jfish';
        let inHoenn = localStorage._location == 'jungle' || localStorage._location == 'sea' || localStorage._location == 'mountain';
        let shiny = Math.random() < 0.02;
        let cry; let victory; let ssData = {};
        let PokedexUrl = Pokedex;
        let HabitatsUrl = Habitats;
    }
    function initializeVars(){

        let pokemonGenerator = {
            requestPokemon: function() {
                _location = getLocation();
                chrome.browserAction.setIcon({"path":'/images/icons/toolbarRegion/'+_location + ".png"});
                chrome.browserAction.setPopup({"popup":"/html/menu.html"});
                chrome.notifications.clear("poke", function(){});
                pokeindex = choosePokemon();
                pokemon = ssData[pokeindex-1];
    
                this.showPokemon();
                this.initBattle();
            },
    
            showPokemon: function (e) {
    
            if (localStorage.sound == "on") {
                cry = new Audio(audiofy(pokeindex));
                cry.play();
            }
    
            let pokemonView = document.getElementById("Pokemon");
    
            if (dex[pokeindex]) {
                let caught = document.createElement('img');
                caught.src = "/images/caughtSymbol.png";
                caught.id = "symbol";
                document.getElementById("Pokemon").appendChild(caught);
            }
    
            sprite = urlifyNumber(pokeindex); // Actual sprite
            let pokeName = pokemon.Pokemon;
            let txtNode = document.createTextNode(" Wild " + pokeName.toUpperCase()+" appeared! ");
            if(shiny){
                let cls = pokemonView.getAttribute('class');
                pokemonView.setAttribute('class', cls+' header-shiny');
            }
            pokemonView.appendChild(txtNode);
    
            pokemonView.appendChild(document.createElement('br'));
            let img = document.createElement('img');
            img.src = sprite;
            img.id = "sprite";
            pokemonView.appendChild(img);
            },
    
            initBattle: function (e) {
    
            crate = pokemon.Catch; 
    
            let options = document.getElementById('Options');
            options.appendChild(createButton('safaributton', 'Safari Ball', throwBall));
            options.appendChild(document.createElement('br'));
            options.appendChild(createButton('baitbutton', 'Bait', throwBait));
            options.appendChild(createButton('rockbutton', 'Rock', throwRock));
    
            if(trainer.greatballs && trainer.greatballs > 0) {
                options.appendChild(document.createElement('br'));
                options.appendChild(createButton('gbbutton', 'Great Ball (x' + trainer.greatballs + ')', throwGreatBall));
            }
    
            if(trainer.nets && trainer.nets > 0) {
                if(trainer.greatballs <= 0){
                options.appendChild(document.createElement('br'));
                }
                options.appendChild(createButton('netbutton', 'Net (x' + trainer.nets + ')', throwNet));
            }
    
            if(trainer.masterballs && trainer.masterballs > 0) {
                if(trainer.greatballs>0 && trainer.nets>0){
                options.appendChild(document.createElement('br'));
                }else if(trainer.greatballs <= 0 || trainer.nets <= 0){
                options.appendChild(document.createElement('br'));
                }
                options.appendChild(createButton('mbbutton', 'Master Ball (x' + trainer.masterballs + ')', throwMasterBall));
            }
    
        }
    };
    return(
        <div id="battleContainer">
            <div id='Pokemon' className='header strong'> </div>
            <div className='showzone'>
            <div id='battlefield' className='battlefield'></div>
            </div>
            <div id='userinput' >
            <div id='Options' className='navibar'></div>
            </div>
            <div id='turn' className='title'>Turn 1</div>
            <div id='sysoutput' className='console'>
            <div id='console'></div>
            <div id='status'></div>
            <div id='caught'></div>
            <div id='yield'></div>
            <div id="exit"></div>
            <div id='safari'></div>
            </div>
        </div>
    )
}