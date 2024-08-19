var textWrapper = document.querySelectorAll('.ml12');

textWrapper.forEach(function(el) {
    el.innerHTML = el.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
    .add({
        targets: '.ml12 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1500,
        delay: (el, i) => 500 + 100 * i
    })
})


setTimeout(() => document.querySelector("#page").style.opacity = "1", 1750);