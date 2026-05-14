<!-- Markus Schiffer and Alex Eidt -->
<!-- This file is the UW Transportation project on the Projects page. -->
<!-- For many of the details, refer to the Vue Bootstrap documentation. -->

<template>
  <div>
    <!-- The toggler for the dropdown. -->
    <div v-b-toggle="'three'" id="project" class="card-header">
      <h3>UW Transportation</h3>
      <!-- This image is the black icon for the project. -->
      <img class="project-icon" alt="Car Port Solar Array" src="~/static/carportPV.svg">
    </div>
    <!-- This content appears when the accordian menu drops down. -->
    <b-collapse id="three">
      <br />
      <section>
        UW Solar has been working with UW Transportation on a plan to electrify the 
        University of Washington vehicle fleet. This project consists of four major components:
        <ul>
          <li>
            A recommended timeline for the type and quantity of battery electric vehicles 
            to be purchased by the University based on and understanding of the current EV 
            market, maturity of the technology, and projections of vehicle availability over 
            the next 15 years.
          </li>
          <li>
            An EV charging deployment plan both to support the electrification of University vehicles, 
            but also the electrification of vehicles owned by faculty, staff, students, community, 
            and visitors parking in and around the Seattle campus.
          </li>
          <li>
            Two pilot projects to gather information about actual electric vehicle use, operations 
            and maintenance, as well as existing charging options.
          </li>
          <li>
            An evaluation of all parking lots and parking garages on the Seattle Campus for their potential 
            to support solar carports.  Three feasibility studies will be completed for the most promising 
            locations, and will include evaluations for the co-location of EV charging and energy storage.
          </li>
        </ul>
      </section>
      <br />
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'UWTransportationProj',  // This should be different for each project.
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