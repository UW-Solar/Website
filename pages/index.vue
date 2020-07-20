<template>
  <div class="container" id="white-back">
    <div class="occupy-solo">
      <img id="header-img" class=".mx-auto" src="../static/uwsolar.png" alt="UW Solar logo and title" title="UW Solar log and title">
    </div>
    <!-- <div class="occupy-solo container">
      <div v-for="(article, index) in myContent" :key="index">
        <header class="display-2">{{ article.header }}</header>
        <p>{{ article.body }}</p>
      </div>
    </div> -->
    <h1>About</h1>

    <br>

    <div id="text">

        <p>

            UW Solar is an RSO that aims to provide clean and sustainable power production to reduce reliance

            on outside energy sources, reduce emissions and make the UW’s power system more resilient.

            Students from various disciplines and class standings (Freshman to PhD) work together on a

            diverse set of projects spanning (but not limited to) engineering, architecture, construction

            management, public policy and administration, business and urban planning.

        </p>

    </div>

    <br>

    <h2>Location</h2>

    <br>

    <div id="text">

        <p>

            UW Solar meets on Mondays and Wednesdays from 6:00 - 8:00 pm in the basement of

            <a href="http://be.uw.edu/spaces/facilities/gould-hall/" target="_blank"><b>Gould Hall</b></a>

            room <b>012C</b>.

            <br><br>

            UW Solar can also be taken for 1-2 credits as

            <a href="https://myplan.uw.edu/course/#/courses/ENGR%20297?id=5511afbb-18e5-4b6c-940f-95b14f046817&states=N4Ig7gDgziBcLADrgJYDsAmB7MAJApigOYAWALsrAIxUCsAbADTJjrZgAKWUKZKWaSgCYAHAAYAviAlA" target="_blank"><b>ENGR 297/497</b></a> or

            <a href="https://myplan.uw.edu/course/#/courses/URBDP%20498?id=68500d39-af14-4837-ad0e-d20fd202f96c&states=N4Ig7gDgziBcLADrgJYDsAmB7MAJApigOYAWALsrAIxUCcA7ADTJjrZgAKWUKZKWaSgAYAviBFA" target="_blank"><b>URBDP 498/598</b></a>.

            <br><br>

            <i>If you decide to take UW Solar for credit, you must take any of the courses listed for two

                consecutive quarters. Add codes are available at meetings.

            </i>

        </p>

    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      winHeight: 0,
      myContent: [{header: 'HEADER1', body: 'this is 1 text'}, {header: 'HEADER2', body: 'this is 2 text'}, {header: 'HEADER3', body: 'this is 3 text'}]
    }
  },
  mounted () {
    this.winHeight = window.innerHeight
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event) {
      const scrollTop = window.pageYOffset;
      const opacity = Math.min(scrollTop / this.winHeight * 0.75, 0.65);
      document.body.style["background-color"] = "rgba(255, 255, 255, " + (opacity).toString() + ")";
    }
  }
}
</script>

<style scoped>
.occupy-solo {
  height: 65vh;
  display: flex;
  align-items: center;
}
p {
  font-size: 2rem;
}
#header-img {
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
