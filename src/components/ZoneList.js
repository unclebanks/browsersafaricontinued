import React, { useEffect } from "react";
import '../styles/zoneList.css';

export const ZoneList = () => {
    
    useEffect(() => {
        // Update the document title using the browser API
        checkZoneList();
    });

    const createZone = function(id, name){
        var zone = document.createElement('div');
        zone.className = 'button '+id;
        zone.id = id;
        zone.innerHTML = '<span>'+name+'</span>';
        zone.onclick = () => {changeRegion(id)};
        return zone;
    };
    const changeRegion = (id) => {
        localStorage.setItem("browserMonLocation", id);
        console.log(localStorage.getItem("browserMonLocation")+" Getting set item");
        document.getElementById("zoneListContainer").style.display = "none";
        document.getElementById("zoneContainer").style.display = "block";
    }
    
    const createHeader = function(name){
            var header = document.createElement('div');
            header.className = "title";
            header.innerHTML = name;
            return header;
    };

    const checkZoneList = () => {
        const unlockedPasses = JSON.parse(localStorage.getItem("browserMonTrainer"));
        const container = document.getElementById("zoneListContainer");
        
            container.appendChild(createHeader('Johto Region'));
            container.appendChild(createZone('npark', 'National Park'));
            container.appendChild(createZone('ruinsoa', 'Ruins of Alph'));
            container.appendChild(createZone('iforest', 'Ilex Forest'));
            container.appendChild(createZone('ttower', 'Tin Tower'));
            container.appendChild(createZone('wisle', 'Whirl Islands'));
            container.appendChild(createZone('mmortar', 'Mt. Mortar'));
            container.appendChild(createZone('lakerage', 'Lake of Rage'));
            container.appendChild(createZone('icepath', 'Ice Path'));
            container.appendChild(createZone('dcave', 'Dark Cave'));
            container.appendChild(createZone('msilver', 'Mt. Silver'));
            container.appendChild(createZone('jvroad', 'Victory Road'));
            container.appendChild(createZone('jfish', 'Fishing'));
            if (unlockedPasses.hticket) {
            container.appendChild(createHeader('Hoenn Tour'));
            container.appendChild(createZone('jungle', 'Jungle'));
            container.appendChild(createZone('sea', 'Miracle Sea'));
            container.appendChild(createZone('mountain', 'Mt. Chimney'));
        }
    }
    return(
        <div id="zoneListContainer">
        <div className="title">
                Kanto Region
        </div>
        
        <div id="vforest" className="button" onClick={e => {changeRegion(e.target.id)}}>
            <span>Viridian Forest</span>
        </div>
        
        <div id="mtmoon" className="button" onClick={e => {changeRegion(e.target.id)}}>
            <span>Mt. Moon</span>
        </div>
        
        <div id="rtunnel" className="button" onClick={e => {changeRegion(e.target.id)}}>
            <span>Rock Tunnel</span>
        </div>
        
        <div id="digcave" className="button" onClick={e => {changeRegion(e.target.id)}}>
            <span>Digletts Cave</span>
        </div>
        
        <div id="kszone" className="button" onClick={e => {changeRegion(e.target.id)}}>
            <span>Safari Zone</span>
        </div>
        
        <div id="pwrplnt" className="button" onClick={e => {changeRegion(e.target.id)}}>
            <span>Power Plant</span>
        </div>
        
        <div id="sfisle" className="button" onClick={e => {changeRegion(e.target.id)}}>
            <span>Seafoam Islands</span>
        </div>
        
        <div id="pkmnmnsn" className="button" onClick={e => {changeRegion(e.target.id)}}>
            <span>Pokemon Mansion</span>
        </div>
        
        <div id="kvroad" className="button" onClick={e => {changeRegion(e.target.id)}}>
            <span>Victory Road</span>
        </div>
        
        <div id="ccave" className="button" onClick={e => {changeRegion(e.target.id)}}>
            <span>Cerulean Cave</span>
        </div>
        
        <div id="fish" className="button" onClick={e => {changeRegion(e.target.id)}}>
            <span>Fishing</span>
        </div>
        </div>
    )
}