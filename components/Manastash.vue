<!-- Markus Schiffer and Alex Eidt -->
<!-- This file is the Manastash Ridge project on the Projects page. -->
<!-- For many of the details, refer to the Vue Bootstrap documentation. -->

<template>
  <div>
    <!-- The toggler for the dropdown. -->
    <div v-b-toggle="'one'" id="project" class="card-header">
      <h3>Manastash Ridge Observatory</h3>
      <!-- This image is the black icon for the project. -->
      <img class="project-icon" alt="Ground Mounted Solar Array" src="~/static/groundPV.svg">
    </div>
    <!-- This content appears when the accordian menu drops down. -->
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
      <!-- THIS ID MUST BE UNIQUE!!! DO NOT FORGET TO CHANGE IF YOU COPY AND PASTE. -->
      <!-- The rest of the elements should be copy and pasted. -->
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Image Carousel. -->
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
  name: 'ManastashProj',  // This should be different for each project.
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
