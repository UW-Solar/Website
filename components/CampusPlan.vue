<template>
  <div>
    <div v-b-toggle="'two'" class="card-header">
      <h3>UW Campus Plan</h3>
      <img class="project-icon" alt="Roof Mounted Solar Array" src="~/static/roofPV(black).png">
    </div>
    <!-- The content inside of the b-collapse appear on click on a project. -->
    <b-collapse id="two">
      <br />
      <section>
        UW Solar is developing a 30 year Solar Energy Plan for the UW Seattle campus which 
        aims to maximize solar PV capacity on all viable buildings, reduce peak energy use, 
        and provide grid resiliency while supporting opportunities for student research. 
        UW Solar has assessed all buildings on campus for feasibility and will coordinate 
        with appropriate departments, facilities, and capital planning and development to 
        determine the criteria for selecting future solar PV projects. UW Solar is collaborating 
        with the UW Sustainability Office and UW Transportation Services to integrate solar PV 
        plus battery storage and EV charging stations into the first Comprehensive Campus 
        Sustainability Plan. The Solar Energy Plan, as part of the Campus Sustainability Plan, 
        will help the UW achieve its 2050 carbon neutrality goals of its Climate Action Plan by 
        generating clean renewable energy and reducing our carbon footprint.
      </section>
      <br />
      <b-carousel
        id="carousel-2"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slides with image only -->
        <b-carousel-slide img-src="~/static/Campus Plan/CP1.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Campus Plan/CP2.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Campus Plan/CP3.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Campus Plan/CP4.png"></b-carousel-slide>
      </b-carousel>
      <br />
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'CampusPlanProj',
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