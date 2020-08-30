<!-- Markus Schiffer and Alex Eidt -->
<!-- This file is the Life Science Building Rooftop project on the Projects page. -->
<!-- For many of the details, refer to the Vue Bootstrap documentation. -->

<template>
  <div>
    <!-- The toggler for the dropdown. -->
    <div v-b-toggle="'six'" id="project" class="card-header">
      <h3>UW Life Sciences Building Rooftop/BIPV</h3>
      <!-- This image is the black icon for the project. -->
      <img class="project-icon" alt="Ground Mounted Solar Array" src="~/static/groundPV.svg">
    </div>
    <!-- This content appears when the accordian menu drops down. -->
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
      <!-- THIS ID MUST BE UNIQUE!!! DO NOT FORGET TO CHANGE IF YOU COPY AND PASTE. -->
      <!-- The rest of the elements should be copy and pasted. -->
      <b-carousel
        id="carousel-6"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Image Carousel. -->
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
  name: 'LSBRooftopProj',  // This should be different for each project.
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
