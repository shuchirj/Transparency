// ==UserScript==
// @name         Google Slides Zoom
// @namespace    http://snow.loophole.site/
// @version      0.1
// @description  zoom a google slides with pinch zoom
// @author       Shuchir Jain
// @match        https://docs.google.com/presentation/*
// @icon         none
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
    let style1 = document.getElementById("workspace-container").getAttribute("style");
    document.getElementById("workspace-container").setAttribute("style", style1+"overflow: scroll auto;");
    }, 100)

    let dist = 1;

    window.addEventListener('wheel', function(e) {
        let amt = e.deltaY/100;
        amt < 1 ? dist -= amt : dist += amt;
        console.log(e);
        console.log(dist);
 document.getElementById("workspace").setAttribute("style", `transform: scale(${dist}); width: 0px; height: 0px;`);

}, {passive: true})

})();