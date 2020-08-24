<template>
  <div>
    <!-- The toggler for the dropdown. -->
    <div v-b-toggle="'one'" id="project" class="card-header">
      <h3>Manastash Ridge Observatory</h3>
      <img class="project-icon" alt="Ground Mounted Solar Array" src="~/static/groundPV.svg">
    </div>
    <!-- The content inside of the b-collapse appear on click on a project. -->
    <b-collapse id="one">
      <br />
      <section>
        UW Solar is working with the Astronomy Department at the University of Washington
        to make the Manastash Ridge Observatory more energy efficient and resilient. Currently,
        we are working on installing an array of 36 solar panels and integrating this into
        the electrical systems of the Observatory to provide emergency power to close the dome
        of the telescope and essential services inside the building.
      </section>
      <br />
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slides with image only -->
        <b-carousel-slide img-src="~/static/Manastash Ridge Observatory/MRO1.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Manastash Ridge Observatory/MRO2.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Manastash Ridge Observatory/MRO3.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Manastash Ridge Observatory/MRO4.png"></b-carousel-slide>
      </b-carousel>
      <br />
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'ManastashProj',
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
