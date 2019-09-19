<template>
    <div>
        <vue-typer text="Hello. I am an AQI Index Analyser. Please enter two cities, and I'll take care of the rest."
         type-delay = '60'
                :repeat='0' @completed='onComplete'></vue-typer>
    </div>
</template>

<script>

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}


export default {
   methods: {
    onComplete: function() {

      var x = 1; //y-axis pixel displacement
var y = 1; //delay in milliseconds

setInterval(function() {
    window.scroll(0, x);
    x = x + 3; //if you want to increase speed simply increase increment interval
}, y);
      window.scroll(0,10000)
      disableScroll()

    }
  }

}
</script>

<style scoped>

div {
  height: 10em;
  margin-top: 20vh;
  display: flex;
  align-items: center;
  justify-content: center
}
.vue-typer {
  font-family: 'Lexend Deca', sans-serif;
  font-size: 1.5em;
}

.vue-typer .custom.char.typed {
  color: black;
}

</style>