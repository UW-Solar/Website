<template>
  <div>
    <div id="background-blur"></div>
    <div id="background-white"></div>
    <div class="container">
    <div class="occupy-solo">
      <img id="header-img" class="mx-auto animated fadeIn" src="../static/uwsolar.png" alt="UW Solar logo and title" title="UW Solar log and title">
    </div>
    <h1>About</h1>
    <br>
    <p>
        UW Solar is an RSO that is part of the <a href="http://uil.be.uw.edu/" target="_blank">Urban Infrastructure Lab</a>
        and aims to provide clean and sustainable power production to reduce reliance
        on outside energy sources, reduce emissions and make the UW’s power system more resilient.
        Students from various disciplines and class standings (Freshman to PhD) work together on a
        diverse set of projects spanning (but not limited to) engineering, architecture, construction
        management, public policy and administration, business and urban planning.
    </p>
    <br>
    <h1>Meetings</h1>
    <br>
    <h3>When and Where?</h3>
    <br>
    <p class="meetings">
        UW Solar meets on Mondays and Wednesdays from 6:00 - 8:00 pm in the basement of 
        <a href="http://be.uw.edu/spaces/facilities/gould-hall/" target="_blank">Gould Hall</a>
        room <b>012C</b>.
    </p>
    <br>
    <h3>Who?</h3>
    <br>
    <p class="meetings">
        Anyone can join! Feel free to come to any meeting. We have a diverse group of students 
        from Freshman to PhD and there are always several projects to work on.
    </p>
    <br>
    <h3>Taking UW Solar for Credit</h3>
    <br>
    <p class="meetings">
        UW Solar can also be taken for 1-2 credits as
        <a href="https://myplan.uw.edu/course/#/courses/ENGR%20297?id=5511afbb-18e5-4b6c-940f-95b14f046817&states=N4Ig7gDgziBcLADrgJYDsAmB7MAJApigOYAWALsrAIxUCsAbADTJjrZgAKWUKZKWaSgCYAHAAYAviAlA" target="_blank">ENGR 297/497</a> or
        <a href="https://myplan.uw.edu/course/#/courses/URBDP%20498?id=68500d39-af14-4837-ad0e-d20fd202f96c&states=N4Ig7gDgziBcLADrgJYDsAmB7MAJApigOYAWALsrAIxUCcA7ADTJjrZgAKWUKZKWaSgAYAviBFA" target="_blank">URBDP 498/598</a>.
    </p>
    <p class="meetings">
        If you decide to take UW Solar for credit, you must take any of the courses listed for two
        consecutive quarters. Add codes are available at meetings.
    </p>
    <br>
    <h3>Contact</h3>
    <br>
    <p class="meetings">
        Lab Founder: Stefanie Young: sy10@uw.edu
        <br>
        RSO Officer: Evan Mickelson: evan@uw.edu
    </p>
  </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  layout: 'default',
  mounted () {
    this.winHeight = window.innerHeight;
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event) {
      const scrollTop = window.pageYOffset;
      const opacity = Math.min(scrollTop / this.winHeight * 2.5, 0.55);
      const blurPX = (Math.floor(5 * Math.min(1, scrollTop / this.winHeight))).toString();
      document.getElementById("background-white").style["background-color"] = "rgba(255, 255, 255, " + (opacity).toString() + ")";
      document.getElementById("background-blur").style["filter"] = "blur(" + blurPX + "px)";
    }
  }
}
</script>

<style scoped>
.occupy-solo {
  height: 85vh;
  display: flex;
  align-items: center;
}
p {
  font-size: 1.5rem;
}
p.meetings {
    padding-left: 5%;
}
h3 {
    text-indent: 1%;
}
#header-img {
  width: 80%;
  display: block;
}

.animated {
  -webkit-animation-duration: 3.5s;
  animation-duration: 3.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
</style>
