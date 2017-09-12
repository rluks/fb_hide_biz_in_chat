// ==UserScript==
// @name         fb_hide_biz_in_chat
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  hide facebook biz pages in chat
// @author       rluks
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

function checkSuggestions(){
    items = document.querySelector("div._1ltv._9bp._50z3");
    //console.log(items);
    items.innerHTML = "";
}

(function() {
    'use strict';
    setTimeout(checkSuggestions, 1000);

    document.addEventListener('visibilitychange', function(){
        setTimeout(checkSuggestions, 1000);
    });

    document.addEventListener('resize', function(){
        setTimeout(checkSuggestions, 1000);
    });
})();