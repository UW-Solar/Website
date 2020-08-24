<template>
  <div class="data-container">
    <div class="data"></div>
    <h1>Projects</h1>
    <br />
    <br />
    <br />
    <br />
    <!--Current Projects-->
    <div class="headers">
      <h2 id="header-left">Current</h2>
    </div>
    <div class="header-right">
      <h2>System Type</h2>
    </div>
    <br /> 
    <!--Manastash Ridge Observatory-->
    <div class="project-wrapper">
      <manastash-proj />
    </div>
    <!--UW Campus Plan-->
    <div class="project-wrapper">
      <campus-plan-proj />
    </div>
    <!--UW Transporation-->
    <div class="project-wrapper">
      <u-w-transportation-proj />
    </div>
    
    <br />
    <br />

    <!--Completed Projects-->
    <div class="headers">
      <h2>Completed</h2>
    </div>
    <div class="header-right">
      <h2>System Type</h2>
    </div>
    <br />
    <!--Mercer A-->
    <div class="project-wrapper">
      <mercer-proj />
    </div>
    <!--PNW/CEI Campus Grid Testbed-->
    <div class="project-wrapper">
      <grid-testbed-proj />
    </div>
    <!--Life Sciences Building Rooftop/BIPV-->
    <div class="project-wrapper">
      <l-s-b-rooftop-proj />
    </div>
    <!--Port of Seattle-->
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
/* Styles for "Current" and "Completed" Headers */
.headers {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
/* Semi-transparent clickable boxes */
.project-wrapper {
  border-bottom: 2px solid black;
}
/* Font size within accordion menu */
.project-wrapper >>> section {
  font-size: 1.3rem;
}
/* Images width within accordion menu carousels */
.project-wrapper >>> .carousel {
  width: 100%;
}
/* Images within accordian menu not collapsed. */
.project-wrapper >>> .collapse.show {
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* Applies borders to carousel images. */
.project-wrapper >>> .carousel-item img {
  border: 2px solid black;
}
/* Header with text "System Type" to inidcate what type of solar racking system
    was installed. When screen width is less than 650px, this header will disappear (as
    shown by display: none in the style below), because the icons next to each project
    are moved underneath the header text, making the "System Type" text out of place and confusing. */
.header-right {
  display: none;
}
/* Style for the distinct underline of the "System Type" text */
.header-right h2 {
  font-size: 1.5rem;
  border-bottom: 0.25em solid black;
  padding: 0.2em;
  width: fit-content;
  border-bottom-right-radius: 0.3rem;
}
/* When screen width is larger than 650px, the "System Type" header is right-aligned
    above the first icon in "Current" and "Completed" projects */
@media (min-width: 650px) {
  .header-right {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
  }
}
@media (min-width: 768px) {
  .project-wrapper >>> .carousel {
    width: 50%;
  }
}
</style>
