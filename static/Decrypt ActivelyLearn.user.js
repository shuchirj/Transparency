// ==UserScript==
// @name           Decrypt ActivelyLearn
// @description    Allow for copying text
// @author         Shuchir Jain
// @include        https://reader.activelylearn.com/student/*
// @version        1.0
// ==/UserScript==

(function () {
    'use strict';

    let letterMap = {
        "A": "l",
        "B": "z",
        "C": "y",
        "D": "v",
        "E": "g",
        "F": "E",
        "G": "h",
        "H": "i",
        "I": "I",
        "J": "V",
        "K": "r",
        "L": "Q",
        "M": "N",
        "N": "n",
        "O": "T",
        "P": "j",
        "Q": "c",
        "R": "t",
        "S": "W",
        "T": "s",
        "U": "o",
        "V": "q",
        "W": "u",
        "X": "D",
        "Y": "P",
        "Z": "a",
        "a": "x",
        "b": "e",
        "c": "p",
        "d": "R",
        "e": "O",
        "f": "K",
        "g": "Z",
        "h": "H",
        "i": "S",
        "j": "A",
        "k": "k",
        "l": "M",
        "m": "U",
        "n": "w",
        "o": "G",
        "p": "d",
        "q": "C",
        "r": "L",
        "s": "f",
        "t": "Y",
        "u": "J",
        "v": "B",
        "w": "b",
        "x": "X",
        "y": "m",
        "z": "F"
    }

    setTimeout(() => {
        let divs = document.getElementsByTagName("div");
        for (let i = 0; i < divs.length; i++) {
            let classList = divs[i].getAttribute("class")
            if (classList) {
                if (classList.includes("encrypted")) {
                    for (const child of divs[i].children) {
                        let txt = "";
                        for (let j = 0; j < child.innerText.length; j++) {
                            if (child.innerText[j] in letterMap) {
                                txt += letterMap[child.innerText[j]]
                            }
                            else {
                                txt += child.innerText[j]
                            }
                        }
                        child.innerText = txt
                        child.setAttribute("style", "font-family: var(--font-family) !important")
                    }
                }
            }
        }
    }, 4000);
})();