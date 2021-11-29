import React, { useEffect } from "react";
import '../styles/banner.css';

export const Banner = function () {
    
    useEffect(() => {
        // Update the document title using the browser API
        prepForEncounter();
    });
    const prepForEncounter = () => {
        if(!localStorage.getItem("browserMonFrequency")){
            localStorage.setItem("browserMonFrequency", "uncommon");
        }
        let encounterTimer;
        const encounterFreq = localStorage.getItem("browserMonFrequency");
        switch(encounterFreq) {
            case "uncommon": encounterTimer = 2000;
            break;
            case "common": encounterTimer = 1000;
            break;
            case "rare": encounterTimer = 5000;
            break;
            case "veryrare": encounterTimer = 10000;
            break;
            case "random": encounterTimer = Math.random();
            break;
            default: encounterTimer = 2000;
            break;

        }
        setTimeout(createPoke(), encounterTimer);
    }
    const createPoke = () => {
        alert("A Wild Pokemon Appeared!!!  You need to rewrite the battle script from pokemon safari and implement it here dude.");
    }
    return(
        <div id="bannerContainer">
            <span>Browser Safari Continued!!!</span>
        </div>
    )
}