<template>
  <div class="data-container">
    <div class="projects"></div>
    <h1>Projects</h1>
    <br />
    <br />
    <br />
    <br />
    <div id="headers">
      <h2 id="header-left">Current</h2>
      <h2 id="header-right">System Type</h2>
    </div>
    <br />
    
    <div class="project-wrapper">
      <manastash-proj />
    </div>

    <div class="project-wrapper">
      <campus-plan-proj />
    </div>

    <div class="project-wrapper">
      <u-w-transportation-proj />
    </div>
    
    <br />
    <h2>Completed</h2>
    <br />

    <div class="project-wrapper">
      <mercer-proj />
    </div>

    <div class="project-wrapper">
      <grid-testbed-proj />
    </div>

    <div class="project-wrapper">
      <l-s-b-rooftop-proj />
    </div>

    <div class="project-wrapper">
      <port-seattle-proj />
    </div>
  </div>
</template>

<script>
import ManastashProj from '~/components/Manastash.vue';
import CampusPlanProj from '~/components/CampusPlan.vue';
import UWTransportationProj from '~/components/UWTrasportation.vue';
import MercerProj from '~/components/Mercer.vue';
import GridTestbedProj from '~/components/GridTestbed.vue';
import LSBRooftopProj from '~/components/LSBRooftop.vue';
import PortSeattleProj from '~/components/PortSeattle.vue';

export default {
  name: "Projects",
  layout: "secondary",
  components: {
    ManastashProj,
    CampusPlanProj,
    UWTransportationProj,
    MercerProj,
    GridTestbedProj,
    LSBRooftopProj,
    PortSeattleProj
  },
  head () {
    return {
      title: 'Projects | UW Solar'
    }
  },
};
</script>

<style scoped>
h1 {
  font-size: 3rem;
  border-bottom: 0.15em solid black;
  padding: 0.2em;
  color: black;
  width: fit-content;
  border-bottom-right-radius: 0.7rem;
}
h2, h3 {
  color: black;
}
h2#header-right {
  float: right;
}
h2#header-left {
  float: left;
}
div#headers {
  display: block;
  overflow: hidden;
}
h3 {
  float: left;
}
h3:hover {
  text-decoration: underline;
}
.project-wrapper >>> section {
  font-size: 1.3rem;
  color: black;
}
.project-wrapper >>> .carousel {
  width: 50%;
}
.project-wrapper >>> .collapse.show {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.projects {
  height: 15vh;
}
</style>
