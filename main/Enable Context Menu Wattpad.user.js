// ==UserScript==
// @name         Enable Context Menu Wattpad
// @version      0.2.5
// @namespace    https://github.com/SuperCALIENTITO/return-rightclick
// @homepage     https://github.com/SuperCALIENTITO/return-rightclick
// @description  Trae devuelta el menu de contexto a la pagina Wattpad
// @author       Vicentefelipechile
// @author       https://stackoverflow.com/users/1727984/user1727984
// @icon         https://raw.githubusercontent.com/SuperCALIENTITO/return-rightclick/main/main/wattpad-logo.png
// @downloadURL  https://github.com/SuperCALIENTITO/return-rightclick/raw/main/main/Enable%20Context%20Menu%20Wattpad.user.js
// @updateURL    https://github.com/SuperCALIENTITO/return-rightclick/raw/main/main/Enable%20Context%20Menu%20Wattpad.user.js
// @match        *.wattpad.com/*
// @exclude      *.wattpad.com/myworks*
// @exclude      *.wattpad.com/notifications*
// @exclude      *.wattpad.com/library
// @exclude      *.wattpad.com/archive
// @exclude      *.wattpad.com/list
// @exclude      *.wattpad.com/1*/comment
// @exclude      *.wattpad.com/2*/comment
// @exclude      *.wattpad.com/3*/comment
// @exclude      *.wattpad.com/4*/comment
// @exclude      *.wattpad.com/5*/comment
// @exclude      *.wattpad.com/6*/comment
// @exclude      *.wattpad.com/7*/comment
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
