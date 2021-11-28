import React, { useEffect } from "react";
import '../styles/shop.css';
import greatBall from '../images/balls/greatball.png';
import masterBall from '../images/balls/masterball.png';
import pokeNet from '../images/items/net.png';
import ssTicket from '../images/tickets/ssticket.png';
import hTicket from '../images/tickets/hticket.png';
import zoomLens from '../images/items/zoomlens.png';

export const Shop = () => {

    
    useEffect(() => {
        // Update the document title using the browser API
        checkShopSave();
    });
    const checkShopSave = () => {
        const items = [
            {name:"Great Ball", cost:5, id:"greatballs", img:greatBall, desc:"A stronger Pokeball"},
            {name:"Net", cost:5, id:"nets", img: pokeNet, desc:"Stuns a Pokemon for 2-3 turns"},
            //{name:"Pal Ball", cost:5000, id:"palballs", rq:50, img:"palball.png", desc:"Befriends caught Pokemon"},
            {name:"Master Ball", cost:1, id:"masterballs", rq:30, img:masterBall, desc:"Automatically catches a Pokemon"},
            {name:"S.S. Anne Tickets", cost:500, id:"jticket", rq:150, img: ssTicket, desc:"Allows you to sail to another nearby region", onlyone:true},
            {name:"Slateport Tickets", cost:500, id:"hticket", rq:249, img: hTicket, desc:"Allows you to sail to a tropical region", onlyone:true},
            {name:"Zoom Lens", cost:200, id:"zoomlens", rq:300, img: zoomLens, desc:"A peculiar binocular that is used to study Pokemon far up in the sky", onlyone:true}
        ];
        var trainer = JSON.parse(localStorage.getItem("browserMonTrainer"));
        var dex = JSON.parse(localStorage.getItem("browserMonPokedex"));
        document.getElementById('balance').textContent = trainer.poke;
        var stk = document.getElementById('stock');

        while (stk.firstChild) {
            stk.removeChild(stk.firstChild);
        }
        for(var i=0; i<items.length; i++){
            var item = items[i];
    
            var container = document.createElement('div');
            container.setAttribute('className', 'shopItem');
    
            var row1 = document.createElement('div');
            row1.setAttribute('className', 'shopItemRow');
            container.appendChild(row1);
            if (item.rq && item.rq > Object.keys(dex).length) {
                row1.innerHTML = "<strong>???</strong>: Requires <strong>" + item.rq + "</strong> Pokemon";
            } else {
                    var symbol = document.createElement('img');
                 symbol.src = item.img;
                 symbol.setAttribute('className', 'shopItemCell');
              row1.appendChild(symbol);
    
                    var itemName = document.createElement('span');
                    itemName.innerText = item.name;
                 itemName.setAttribute('className', 'shopItemCell shopItemTitle');
                    row1.appendChild(itemName);
    
                    var row2 = document.createElement('div');
                    row2.setAttribute('className', 'shopItemRow');
    
                    var itemDesc = document.createElement('span');
                    itemDesc.innerText = item.desc;
                    itemDesc.setAttribute('className', 'shopItemCell');
                    row2.appendChild(itemDesc);
    
                    var row3 = document.createElement('div');
                    row3.setAttribute('className', 'shopItemRow');
                    var cost;
                    if (trainer[""+item.id] >= 1 && item.onlyone){
                    cost = document.createElement('span');
                    cost.innerHTML = ' <strong>Already purchased.</strong>';
                    cost.setAttribute('className', 'shopItemCell');
                        row3.appendChild(cost);
                    } else {
                    var buttonBuy = document.createElement("input");
                    buttonBuy.type = "button";
                    buttonBuy.value = "Buy";
                    buttonBuy.onclick = buy(item);
                    buttonBuy.setAttribute('className', 'shopItemCell');
                    row3.appendChild(buttonBuy);
    
                    cost = document.createElement('span');
                       var quantityInBag =  trainer[""+item.id]? '<strong>'+trainer[""+item.id] + "</strong> in bag." : "";
                    cost.innerHTML = ' <strong>'+item.cost + "</strong> poke. " + quantityInBag;
                    cost.setAttribute('className', 'shopItemCell');
                        row3.appendChild(cost);
                    }
    
                container.appendChild(row2);
                container.appendChild(row3);
            }
            stk.appendChild(container);
        }
    }
    const buy = function (e) {
        return function() {
            var t = JSON.parse(localStorage.getItem("browserMonTrainer"));
            console.log(t.poke + " " + e.cost);
            if (t.poke >= e.cost) {
                console.log(t[""+e.id]);
                if(!t[""+e.id])
                    t[""+e.id] = 0;
                t[""+e.id]++;
                t.poke -= e.cost;
                localStorage.setItem("browserMonTrainer", JSON.stringify(t));
                checkShopSave();
            }
        };
    };

    return(
        <div id="shopContainer">
            <div id="shopHeader">Shop</div>
            <p className="dollars"><span id="balance"></span> PokeDollars</p>
            <div id="stock"></div>
        </div>
    )
}