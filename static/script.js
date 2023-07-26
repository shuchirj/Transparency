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

    let cards = document.getElementsByClassName('card')
    let cardsArray = Array.from(cards)
    cardsArray.forEach((card) => {
        let $elem = $(card)
        $elem.css('opacity', 0)
    })
    
    $(window).on('scroll', function(){
        let cards = document.getElementsByClassName('card')
        let cardsArray = Array.from(cards)
        cardsArray.forEach((card) => {
            let $elem = $(card)
            let $window = $(window)
            var docViewTop = $window.scrollTop();
            var docViewBottom = docViewTop + $window.height();
            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.height();
            if (elemBottom < docViewBottom) {
                $elem.css('opacity', 1)
                if ($(card).hasClass('already_animated')) return
                animateCSS(card, 'jackInTheBox')
                $(card).addClass('already_animated')
            }
        })
    });
})