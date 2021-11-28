import React, { useEffect } from "react";
import '../styles/pokedex.css';
import unknownPokemonImage from '../images/fancies/unknown_pokemon.png';

export const Pokedex = () => {
    
    useEffect(() => {
        // Update the document title using the browser API
        checkPokedex();
    });

    const checkPokedex = () => {
        var pkdex = JSON.parse(localStorage.getItem("browserMonPokedex"));
        var totalmon = 151;
        var trainer = JSON.parse(localStorage.getItem("browserMonTrainer"));
        var shiny = false;
        if (trainer.jticket > 0)
          totalmon = 251;
        if (trainer.hticket > 0)
          totalmon = 386;    
      
        var rootElement = document.getElementById('pokedex');
        rootElement.setAttribute('className', 'pokedex');
        var heading = document.createElement('h3');
        heading.setAttribute('className', 'header');
        heading.innerText = "Pokedex: (" + (Object.keys(pkdex).length) + "/" + totalmon + ")";
        rootElement.appendChild(heading);
      
        var table = document.createElement('table');
        rootElement.appendChild(table);
      
        var tableBody = document.createElement('tbody');
        table.appendChild(tableBody);
        for (var i = 1; i <= totalmon; i++){
          var row = document.createElement('tr');
          var col_dex = document.createElement('td');
          var col_img = document.createElement('img');
          if (!pkdex[i]){
            col_dex.innerHTML = "<strong>"+i + "</strong>: ???";
            col_img.src = unknownPokemonImage;
          } else {
            shiny = pkdex[i].shiny;
            col_dex.innerHTML = "<strong>"+i + ": " + pkdex[i].name+"</strong>";
            col_img.setAttribute('src', urlifyNumber(i, shiny));
          }
          row.appendChild(col_dex);
          row.appendChild(col_img);
          tableBody.appendChild(row);
        }}
        const urlifyNumber = function(dexNum, isShiny) {
            var dexNumString = '' + dexNum;
            while (dexNumString.length < 1)
              dexNumString = '0' + dexNumString;
            if (isShiny) {
                if (localStorage.getItem("browserMonStyle") === '2d')
                  return '/images/pokemon/shinypokemon/' + dexNumString + '.png';
                else
                  return 'http://www.serebii.net/Shiny/XY/' + dexNumString + '.png';
            }
            if (localStorage.style === '2d')
              return '/images/pokemon/pokemon/' + dexNumString + '.png';
            else
              return 'http://www.serebii.net/xy/pokemon/' + dexNumString + '.png';
          };

    return(
        <div id="pokedexContainer">
            <div id="pokedex" className="topmargin"></div>
        </div>
    )
}