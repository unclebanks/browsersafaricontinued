import React, { useEffect } from "react";
import '../styles/playerStats.css';

export const PlayerStats = function () {
    
    useEffect(() => {
        // Update the document title using the browser API
        checkPlayerSave();
    });
    const checkPlayerSave = function() {
        if(!localStorage.getItem("browserMonTrainer")){
          localStorage.setItem("browserMonTrainer", JSON.stringify({poke:0}));
        }
        if(!localStorage.getItem("browserMonPokedex")){
          localStorage.setItem("browserMonPokedex", JSON.stringify({}));
        }
        if(!localStorage.getItem("browserMonNotifications")){
          localStorage.setItem("browserMonNotifications", "on");
        }
        if(!localStorage.getItem("browserMonStyle")){
          localStorage.setItem("browserMonStyle", "2d");
        }
        if(!localStorage.getItem("browserMonSound")){
          localStorage.setItem("browserMonSound", "on");
        }
        var trainer = JSON.parse(localStorage.getItem("browserMonTrainer"));
        var pokedex = JSON.parse(localStorage.getItem("browserMonPokedex"));
        document.getElementById('balance').innerHTML = trainer.poke;
        document.getElementById('found_pokemon').innerHTML = Object.keys(pokedex).length;
        var totalPokemon = 151;
        if(trainer.jticket){
            totalPokemon = 251;
        }
        if(trainer.hticket){
            totalPokemon = 386;
        }
        document.getElementById('total_pokemon').innerHTML = totalPokemon;
    };	
    return(
        <div id="playerStatsContainer">
            <div id="playerPokeMoney"><span id="balance">0</span> PokeDollars</div>
            <div id="playerRegionMonStatus"><span id="found_pokemon">0</span> of <span id='total_pokemon'>151</span> Pokemon</div>
        </div>
    )
}