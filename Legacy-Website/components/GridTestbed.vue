<!-- Markus Schiffer and Alex Eidt -->
<!-- This file is the Grid Testbed project on the Projects page. -->
<!-- For many of the details, refer to the Vue Bootstrap documentation. -->

<template>
  <div>
    <!-- The toggler for the dropdown. -->
    <div v-b-toggle="'five'" id="project" class="card-header">
      <h3>UW CEI/PNW Smart Grid Testbed</h3>
      <!-- This image is the black icon for the project. -->
      <img class="project-icon" alt="Roof Mounted Solar Array" src="~/static/roofPV.svg">
    </div>
    <!-- This content appears when the accordian menu drops down. -->
    <b-collapse id="five">
      <br />
      <section>
        Daniel Kirschen, UW Electrical Engineering Close Professor and CEI Faculty Advisory 
        Board Member, proposed building smart microinverter testbeds at UW for the CETC smart 
        grid research in May of 2015. With the funding for smart microinverters from Washington 
        Clean Energy Fund, Prof. Kirschen approached Jan Whittington, UW Urban Design and Planning 
        Associate Professor and UW Solar Faculty Advisor, to discuss the possibility of building a 
        PV system on campus to host those smart microinverters. Professor Whittington led students 
        in UW Solar to develop a 100 KW PV project. Due to the successful collaboration between UW 
        Solar and UW HFS, HFS generously agreed to use three HFS residence halls, Maple Hall, Alder 
        Hall, and Elm Hall as the locations of the PV systems. UW Solar seeked further funding 
        opportunities from the Department of Commerce Grant and Seattle City Light Greenup Grant 
        to cover the cost of purchasing PV panels and building the system. Later on, Artisan Electric 
        was selected as the contractor through Request for Proposal (RFP) process. The construction 
        started in October of 2016 and the project was completed in its entirety in March of 2017.
      </section>
      <br />
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'GridTestbedProj',  // This should be different for each project.
  // The rest of this code should be the same for each project. DO NOT MODIFY.
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
}
</script>
