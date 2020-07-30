<template>
  <div class="my-my-container">
    <div id="background-blur"></div>
    <div id="background-white"></div>
    <div class="data-container">
    <div class="occupy-solo">
      <img id="header-img" class="mx-auto animated fadeIn" src="../static/uwsolar.png" alt="UW Solar logo and title" title="UW Solar log and title">
    </div>
    <h2>About</h2>
    <br>
    <section>
        UW Solar is a <a href="https://vip.uw.edu/about" target="_blank">Vertically Integrated Project</a>
        and Registered Student Organization that is part of the
        <a href="http://uil.be.uw.edu/" target="_blank">Urban Infrastructure Lab</a> at the University of
        Washington. We aim to provide clean and sustainable power production to reduce reliance
        on outside energy sources, reduce emissions and make the UW's power system more resilient.
        Students from various disciplines and class standings (Freshman to PhD) work together on a
        diverse set of projects spanning (but not limited to) engineering, architecture, construction
        management, public policy and administration, business and urban planning.
        <br><br>
        Our partners include the <a href="https://csf.uw.edu/" target="_blank">Campus Sustainability Fund</a>
        and the <a href="https://www.cei.washington.edu/">Clean Energy Institute</a>. UW Solar is an 
        active participant in the <a href="https://green.uw.edu/sustainability-plan" target="_blank">UW Sustainability Action Plan</a>,
        and a proud recipient of the <a href="https://green.uw.edu/hga/husky-green-award-nomination" target="_blank">Husky Green Award</a>.
    </section>
    <br>
    <h2>Meeting Details</h2>
    <br>
    <section>
        <b>Who: </b>Students of all majors and every class standing. No experience or application is necessary.<br>
        <b>Where: </b>We currently meet on <a href="https://washington.zoom.us/j/99108117155" target="_blank">Zoom Meetings</a>.
        Once UW reopens we will resume our normal meeting space at <a href="http://be.uw.edu/spaces/facilities/gould-hall/" target="_blank">Gould Hall</a> room <b>012C</b>.<br>        
        <b>When: </b>We currently meet every two weeks on Mondays from 6:00 - 8:00 pm. Once UW reopens we will resume our normal meeting times of Mondays and Wednesdays from 6:00 - 8:00 pm.<br>
        <br>
        UW Solar always has several current projects which develop skills in Urban Planning, Architecture, Engineering, Public Policy and Administration and many more.
        Below are a few examples of the work we do:
        <br><br>
        <ul>
            <li>Surface Level/Detailed Site Evaluations for various infrastructure</li>
            <li>Structural and Shading Analysis using HelioScope, Sketchup and BlueBeam software</li>
            <li>Use of Architectural, Mechnanical and Electrical schematics to design rooftop solar arrays</li>
            <li>Analysis of electrical one-line diagrams and the campus grid to determine how solar projects will tie in</li>
            <li>Determining which electrical equipment is needed for a project based on panel capacity, safety and grid tie-in location</li>
            <li>Creating policy documents with sections for Industry Trends, Federal Regulations, State Law, City Code and UW Policy</li>
            <li>Developing a project plan from conceptual design to construction</li>
        </ul>
        <br>
        UW Solar can also be taken for 1-2 credits as
        <a href="https://myplan.uw.edu/course/#/courses/ENGR%20297?id=5511afbb-18e5-4b6c-940f-95b14f046817&states=N4Ig7gDgziBcLADrgJYDsAmB7MAJApigOYAWALsrAIxUCsAbADTJjrZgAKWUKZKWaSgCYAHAAYAviAlA" target="_blank">ENGR 297/497</a> or
        <a href="https://myplan.uw.edu/course/#/courses/URBDP%20498?id=68500d39-af14-4837-ad0e-d20fd202f96c&states=N4Ig7gDgziBcLADrgJYDsAmB7MAJApigOYAWALsrAIxUCcA7ADTJjrZgAKWUKZKWaSgAYAviBFA" target="_blank">URBDP 498/598</a>.
        <br>
        If you decide to take UW Solar for credit, you must take any of the courses listed for two
        consecutive quarters. Add codes are available at meetings.
    </section>
    <br>
    <h2>Contact</h2>
    <br>
    <section>
        If you have any questions, feel free to contact us at <a href="mailto:Solar_at_uw@uw.edu">Solar_at_uw@uw.edu</a>
    </section>
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
    handleScroll () {
      const scrollTop = window.pageYOffset;
      const scrollWindow = scrollTop / this.winHeight;
      const opacity = Math.min(scrollWindow * 2.5, 0.65);
      var blurPX;
      if (opacity == 0.65) {
          blurPX = "5";
      } else {
          blurPX = (Math.floor(5 * Math.min(1, scrollWindow))).toString();
      }

      document.getElementById("background-white").style["background-color"] = "rgba(255, 255, 255, " + opacity.toString() + ")";
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
section {
  font-size: 1.3rem;
  color: black;
}
h2 {
  font-size: 2.5rem;
  color: black;
}
.data-container {
    width: 75%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
#header-img {
  padding-top: 2rem;
  width: 80%;
  display: block;
}
.animated {
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
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
.my-container {
  width: 90%;
}
.my-my-container {
  display: flex;
  justify-content: center;
}
</style>
