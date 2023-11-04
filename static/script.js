const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = element;

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });


$(document).ready(function(){

    $(window).on('scroll', function(){
        let cards = []
        let h1 = document.getElementsByTagName('h1') 
        let h2 = document.getElementsByTagName("h2") 
        let h3 = document.getElementsByTagName("h3")
        let h4 = document.getElementsByTagName("h4")
        let h5 = document.getElementsByTagName("h5")
        let h6 = document.getElementsByTagName("h6")
        let p = document.getElementsByTagName("p")
        let a = document.getElementsByTagName("a")
        let li = document.getElementsByTagName("li")
        let span = document.getElementsByTagName("span")
        let button = document.getElementsByTagName("button")
        let input = document.getElementsByTagName("input")
        let small = document.getElementsByTagName("small")
        // for (let i = 0; i < h1.length; i++) {cards.push(h1[i])}
        // for (let i = 0; i < h2.length; i++) {cards.push(h2[i])}
        // for (let i = 0; i < h3.length; i++) {cards.push(h3[i])}
        // for (let i = 0; i < h4.length; i++) {cards.push(h4[i])}
        // for (let i = 0; i < h5.length; i++) {cards.push(h5[i])}
        // for (let i = 0; i < h6.length; i++) {cards.push(h6[i])}
        // for (let i = 0; i < p.length; i++) {cards.push(p[i])}
        // for (let i = 0; i < a.length; i++) {cards.push(a[i])}
        // for (let i = 0; i < li.length; i++) {cards.push(li[i])}
        // for (let i = 0; i < span.length; i++) {cards.push(span[i])}
        // for (let i = 0; i < button.length; i++) {cards.push(button[i])}
        // for (let i = 0; i < input.length; i++) {cards.push(input[i])}
        // for (let i = 0; i < small.length; i++) {cards.push(small[i])}

        console.log(cards)
        let cardsArray = Array.from(cards)
        for (let i=0; i<cardsArray.length; i++) {
            let card = cardsArray[i]
            let $elem = $(card)
            let $window = $(window)
            var docViewTop = $window.scrollTop();
            var docViewBottom = docViewTop + $window.height();
            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.height();
            if (elemBottom < docViewBottom) {
                $elem.css('opacity', 1)
                if ($(card).hasClass('already_animated')) return
                let textContent = card.textContent
                let all = []
                for (let j=0; j<textContent.length; j++) {
                    let letter = textContent[j]
                    let t
                    if (letter === " ") {
                        t = "&nbsp"
                        all.push(t)
                    }
                    else {
                        t = letter
                        all.push(t)
                    }
                }
                card.innerHTML = ""
                for (let j=0; j<all.length; j++) {
                    let letter = all[j]
                    let span = document.createElement('span')
                    span.innerHTML = letter
                    span.setAttribute("style", `--i:${j}`)
                    card.appendChild(span)
                }
                $(card).addClass("letter")

                console.log("animated", card)
                $(card).addClass('already_animated')
            }
        }

    });

})