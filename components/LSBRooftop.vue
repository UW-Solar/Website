<template>
  <div>
    <div v-b-toggle="'six'" class="card-header">
      <h3>UW Life Sciences Building Rooftop/BIPV</h3>
      <img class="project-icon" alt="Ground Mounted Solar Array" src="~/static/groundPV.svg">
    </div>
    <!-- The content inside of the b-collapse appear on click on a project. -->
    <b-collapse id="six">
      <br />
      <section>
        UW Solar Team collaborated with Perkins+Will architecture team to develop the schematic 
        plans for a 5 kW building integrated photovoltaic (BIPV) system of vertical shading fins on 
        the southern facade of the Life Sciences Building on the UW Seattle Campus. The 5 kW BIPV 
        system provides enough energy to power the light systems in the main floors. In Autumn 2019,
        a 100 kW rooftop solar array was completed by Artisan Electric.
      </section>
      <br />
      <b-carousel
        id="carousel-6"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slides with image only -->
        <b-carousel-slide img-src="~/static/Life Sciences Building/LSB1.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Life Sciences Building/LSB2.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Life Sciences Building/LSB3.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Life Sciences Building/LSB4.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Life Sciences Building/LSB5.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Life Sciences Building/LSB6.png"></b-carousel-slide>
      </b-carousel>
      <br />
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'LSBRooftopProj',
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
