// ==UserScript==
// @name         Blackboard Checkmarks
// @namespace    http://shuchir.dev/
// @version      0.1
// @description  Add checkmarks
// @author       Shuchir Jain
// @match        https://northallegheny.blackboard.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=northallegheny.blackboard.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(() => {
        let classes = []
        let allElems = document.getElementsByClassName("coursefakeclass")[0].getElementsByTagName("li")
        console.log(allElems)
        for (let i=0; i<allElems.length; i++) {
           allElems[i].innerHTML = `<input type="checkbox" id="inp${i}" style="margin-bottom: 5px";>` + allElems[i].innerHTML
	   let checkState = localStorage.getItem(`inp${i}`)
           document.getElementById(`inp${i}`).checked = Boolean(checkState)
		if (checkState == "on") {
			let allA = allElems[i].getElementsByTagName("a")
			allA[0].setAttribute("style", "text-decoration: line-through")
		}
		else {
			let allA = allElems[i].getElementsByTagName("a")
			allA[0].setAttribute("style", "text-decoration: none")
		}
		if ((new Date() - localStorage.getItem(`inp${i}_d`)) / 3600000 >=24 ) {
			localStorage.setItem(`inp${i}`, "")
			let allA = allElems[i].getElementsByTagName("a")
			allA[0].setAttribute("style", "text-decoration: none")
			document.getElementById(`inp${i}`).checked = ""
		}
	   document.getElementById(`inp${i}`).addEventListener("change", () => {
		let checkState = localStorage.getItem(`inp${i}`)
		let val
		if (checkState == "on") {val = ""}
		else {val = "on"}
		localStorage.setItem(`inp${i}`, val)
		console.log(document.getElementById(`inp${i}`).value)
		if (val == "on") {
			let allA = allElems[i].getElementsByTagName("a")
			allA[0].setAttribute("style", "text-decoration: line-through")
		}
		else {
			let allA = allElems[i].getElementsByTagName("a")
			allA[0].setAttribute("style", "text-decoration: none")
		}
		localStorage.setItem(`inp${i}_d`, new Date())
		console.log(localStorage.getItem(`inp${i}_d`))
	})
        }
    }, 1000)
})();
