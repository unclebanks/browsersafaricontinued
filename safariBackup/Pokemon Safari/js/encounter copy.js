////////REGION ID FOR TOOLBAR ICON

function getLocation() {
		switch(localStorage._location){
/////////KANTO REGION			
			case 'fish':
			_location = 'beach0';
			break;
		case 'pkmnmnsn':
			_location = 'city0';
			break;
		case 'pwrplnt':
			_location = 'city0';
			break;
		case 'vforest':
			_location = 'forest0';
			break;
		case 'sfisle':
			_location = 'glacier0';
			break;
		case 'kszone':
			_location = 'park0';
			break;
		case 'ccave':
			_location = 'tower0';
			break;
		case 'mtmoon':
			_location = 'glacier0';
			break;
		case 'rtunnel':
			_location = 'tunnel0';
			break;
		case 'digcave':
			_location = 'tunnel0';
			break;
		case 'kvroad':
			_location = 'tunnel0';
			break;
			
//////////JOHTO REGION

		case 'npark':
			_location = 'park1';
			break;
		case 'ruinsoa':
			_location = 'tunnel1';
			break;
		case 'iforest':
			_location = 'forest1';
			break;
		case 'ttower':
			_location = 'tower1';
			break;
		case 'wisle':
			_location = 'beach1';
			break;
		case 'mmortar':
			_location = 'glacier1';
			break;
		case 'lakerage':
			_location = 'beach1';
			break;
		case 'icepath':
			_location = 'glacier1';
			break;
		case 'dcave':
			_location = 'tunnel1';
			break;
		case 'msilver':
			_location = 'glacier1';
			break;
		case 'jvroad':
			_location = 'tunnel1';
			break;
		case 'jfish':
			_location = 'beach1';
			break;
			
//////////HOENN REGION

		case 'pwoods':
			_location = 'forest2';
			break;
		case 'gcave':
			_location = 'tunnel2';
		case 'fpath':
			_location = 'tunnel2';
			break;
		case 'mfalls':
			_location = 'tunnel2';
			break;
		case 'nmville':
			_location = 'city2';
			break;
		case 'hszone':
			_location = 'park2';
			break;
		case 'mpyre':
			_location = 'glacier2';
			break;
		case 'spillar':
			_location = 'tower2';
			break;
		case 'schamber':
			_location = 'tunnel2';
			break;
		case 'seacave':
			_location = 'tunnel2';
			break;
		case 'hvroad':
			_location = 'tunnel2';
			break;
		case 'hfish':
			_location = 'beach2';
			break;
		
///////////DEFAULT

		default:
			_location = 'forest0';
			break;
			}
		return _location;
	}

var start = function(e) {
	if(!localStorage.trainer) { update(); }
 	_location = getLocation();
  	chrome.browserAction.setIcon({"path":"/images/icons/toolbarRegion/"+_location+ ".png"});
	chrome.alarms.create("", {"delayInMinutes":1});
};

var setAlarm = function(e) {
	if(localStorage.frequency == "veryrare")
		chrome.alarms.create("", {"delayInMinutes":10});
	else if(localStorage.frequency == "rare")
		chrome.alarms.create("", {"delayInMinutes":5});
	else if(localStorage.frequency == "uncommon")
		chrome.alarms.create("", {"delayInMinutes":2});
	else if(localStorage.frequency == "random") 
		chrome.alarms.create("", {"delayInMinutes":(Math.random() * 120)});
	else
		chrome.alarms.create("", {"delayInMinutes":.2});
};

var pokemonFound = function(e) {
	setAlarm();
	chrome.browserAction.setIcon({"path":"/images/icon!.png"});
	chrome.browserAction.setPopup({"popup":"/html/battle.html"});
	var opt = {
        type: "basic",
        title: "Wild Pokemon Appeared!",
        message: "Select the \"!\" icon in your browser to battle!",
        iconUrl: "/images/notification.png"
    };
  if (localStorage.notifications != "off") {
		chrome.notifications.create("poke", opt, function () {});
		console.log(localStorage.notifications != "off");
	}
	else {
		chrome.notifications.clear("",function(e){});
		console.log("um");
	}
	if (localStorage.sound == "on") {
		var aud = new Audio('http://50.7.60.82:777/ost/pokemon-gameboy-sound-collection/fllwdebjsg/107-battle-vs-wild-pokemon-.mp3#t=,4.7');
		aud.play();
	}
};

document.addEventListener('DOMContentLoaded', function () {
	start();
});

var update = function() {
	localStorage.frequency = "uncommon";
	localStorage.notifications = "on";
	localStorage.trainer = JSON.stringify({poke:0});
	localStorage.pokedex = JSON.stringify({});
	for (var i = 1; i < 152; i++) {
		if (localStorage[i]) {
			var pk = JSON.parse(localStorage.pokedex);
			pk[i] = JSON.parse(localStorage[i]);
			localStorage.pokedex = JSON.stringify(pk);
		}
	}
};

// var reset = function() {
//   localStorage.frequency = "common";
//   localStorage.notifications = "on";
//   localStorage._location = "forest";
//   localStorage.trainer = JSON.stringify({poke:0});
//   localStorage.pokedex = JSON.stringify({});
// };

chrome.alarms.onAlarm.addListener(pokemonFound);