// ==UserScript==
// @name         Enable Context Menu Wattpad
// @version      0.1
// @namespace     https://gist.github.com/SuperCALIENTITO/2cfc5117eaaad5200ffd25b451ad5d38
// @description  Trae devuelta el menu de contexto a la pagina Wattpad
// @author       Vicentefelipechile
// @author       https://stackoverflow.com/users/1727984/user1727984
// @icon         https://raw.githubusercontent.com/SuperCALIENTITO/return-rightclick/main/main/wattpad-logo.png
// @downloadURL  https://gist.githubusercontent.com/SuperCALIENTITO/2cfc5117eaaad5200ffd25b451ad5d38/raw/f1b648827abfce7f92a9ffae8ebf53289e694acc/reenableRightClick.js
// @updateURL    https://gist.githubusercontent.com/SuperCALIENTITO/2cfc5117eaaad5200ffd25b451ad5d38/raw/f1b648827abfce7f92a9ffae8ebf53289e694acc/reenableRightClick.js
// @match        *.wattpad.com/*
// @grant        none
// ==/UserScript==

// Codigo creado originalmente por https://stackoverflow.com/users/1727984/user1727984
// Implementación por Vicentefelipechile
(function(w){
    var arr = ['contextmenu','copy','cut','paste','mousedown','mouseup','beforeunload','beforeprint'];
    for(var i = 0, x; x = arr[i]; i++){
        if(w['on' + x])w['on' + x] = null;
        w.addEventListener(x, function(e){e.stopPropagation()}, true);
    };
    for(var j = 0, f; f = w.frames[j]; j++){try{w.callee(f)}catch(e){}}})(window);
