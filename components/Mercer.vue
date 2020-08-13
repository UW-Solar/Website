<template>
  <div>
    <div v-b-toggle="'four'" class="card-header">
      <h3>UW Mercer A</h3>
      <img class="project-icon" alt="Roof Mounted Solar Array" src="~/static/roofPV.svg">
    </div>
    <!-- The content inside of the b-collapse appear on click on a project. -->
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
      <b-carousel
        id="carousel-4"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slides with image only -->
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
  name: 'MercerProj',
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
