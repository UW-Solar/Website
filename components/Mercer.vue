<!-- Markus Schiffer and Alex Eidt -->
<!-- This file is the Mercer project on the Projects page. -->
<!-- For many of the details, refer to the Vue Bootstrap documentation. -->

<template>
  <div>
    <!-- The toggler for the dropdown. -->
    <div v-b-toggle="'four'" id="project" class="card-header">
      <h3>UW Mercer A</h3>
      <!-- This image is the black icon for the project. -->
      <img class="project-icon" alt="Roof Mounted Solar Array" src="~/static/roofPV.svg">
    </div>
    <!-- This content appears when the accordian menu drops down. -->
    <b-collapse id="four">
      <br />
      <section>
        The Mercer A Installation was a student led initiative to bring more solar panels to the 
        Campus. The project placed a solar array atop Mercer A was completed in Spring of 2014. 
        The entire array has a power rating of 35 kW and helps provide power to the students 
        living in the apartment complex. Upon completion of the project, the students working on 
        it wanted to do similar projects and thus created UW Solar.
      </section>
      <br />
      <!-- THIS ID MUST BE UNIQUE!!! DO NOT FORGET TO CHANGE IF YOU COPY AND PASTE. -->
      <!-- The rest of the elements should be copy and pasted. -->
      <b-carousel
        id="carousel-4"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Image Carousel. -->
        <b-carousel-slide img-src="~/static/UW Mercer A/UWM1.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/UW Mercer A/UWM2.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/UW Mercer A/UWM3.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/UW Mercer A/UWM4.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/UW Mercer A/UWM5.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/UW Mercer A/UWM6.png"></b-carousel-slide>
      </b-carousel>
      <br />
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'MercerProj',  // This should be different for each project.
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
