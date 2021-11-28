import React, { useEffect } from "react";
import '../styles/zone.css';

export const Zones = function () {

    
  useEffect(() => {
    // Update the document title using the browser API
    checkZoneSave();
  });

  const checkZoneSave = () => {
    if(!localStorage.getItem("browserMonLocation")){
      localStorage.setItem("browserMonLocation", "vforest");
    }
    const playerLocation = localStorage.getItem("browserMonLocation")
    displayZone(playerLocation);
  }
  const displayZone = function (zoneName){
    //move these _locations into a separate file
    var _locations = {
    "vforest"  : "Viridian Forest",
    "mtmoon"   : "Mt. Moon",
    "rtunnel"  : "Rock Tunnel",
    "digcave"  : "Digletts Cave",
    "kszone"   : "Kanto Safari Zone",
    "pwrplnt"  : "Kanto Power Plant",
    "sfisle"   : "Seafoam Island",
    "pkmnmnsn" : "Pokemon Mansion",
    "kvroad"   : "Kanto Victory Road",
    "ccave"    : "Cerulean Cave",
    "fish"     : "Fishing",
    "npark"    : "National Park",
    "ruinsoa"  : "Ruins of Alph",
    "iforest"  : "Ilex Forest",
    "ttower"   : "Tin Tower",
    "wisle"    : "Whirl Island",
    "mmortar"  : "Mt. Mortar",
    "lakerage" : "Lake of Rage",
    "icepath"  : "Ice Path",
    "dcave"    : "Dark Cave",
    "msilver"  : "Mt. Silver",
    "jvroad"   : "Johto Victory Road",
    "jfish"    : "Johto Fishing"
    };
  
    var _locationName = document.getElementById("location_name");
    _locationName.innerHTML = _locations[zoneName];
  
    var _locationElement = document.getElementById("zoneContainer");
    _locationElement.className = zoneName;
  };
  const renderTheList = () => {
    let mainZoneWindow = document.getElementById("totalZoneContainer");
    let zoneList = document.getElementById("zoneListContainer");
    mainZoneWindow.style.display = "none";
    zoneList.style.display = "block";
  }

    return(
      <div id="totalZoneContainer">
        <div id="zoneContainer">
            <div id="currentZone" className="zone">Now exploring <span id="location_name"></span></div>
                <span className="change" onClick={renderTheList}>Change Region</span>
        </div>
      </div>
    )
}