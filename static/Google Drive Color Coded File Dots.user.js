// ==UserScript==
// @name         Google Drive Color Coded File Dots
// @namespace    http://snow.loophole.site/extras
// @version      0.1
// @description  Add color coded dots next to files in google drive
// @author       Shuchir Jain
// @match        https://drive.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(() => {
        let files = []
        let allElems = document.getElementsByTagName("div")
        console.log(allElems)
        for (let i=0; i<allElems.length; i++) {
            if (allElems[i].innerHTML == "Files" && allElems[i].getAttribute("aria-hidden") == "true") {
                let container = allElems[i].parentNode.getElementsByTagName("c-wiz")[0]
                let container2 = container.getElementsByTagName("div")[0]
                let possibleValues = container2.getElementsByTagName("c-wiz")
                for (let j=0; j<possibleValues.length; j++) {
                    files.push(possibleValues[j])
                }
            }
        }

        for (let i=0; i<files.length; i++) {
            console.log("loop", files.length)
            setInterval(() => {
                let fileId = files[i].getElementsByTagName("div")[0].getAttribute("data-id")
                let color = localStorage.getItem(fileId)
                console.log(color)
                if (!color) {
                    color = "#000000"
                }
                let injectElem = files[i].querySelector(".uXB7xe")
                injectElem.setAttribute("style", "display: flex; align-items: center;");
                if (injectElem.querySelector("input") == null) {
                injectElem.innerHTML += `<input type="color" value="${color}" style="margin: .4rem; width: 25px; height: 25px; border-radius: 50%; border: none;" id="${fileId}" />`
                console.log(fileId)
                document.getElementById(fileId).addEventListener("change", () => {
                    console.log(fileId, "changed")
                    localStorage.setItem(fileId, document.getElementById(fileId).value)
                })
                }
                }, 100)
        }
    }, 1000)
})();