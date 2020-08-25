<template>
  <div>
    <div v-b-toggle="'seven'" id="project" class="card-header">
      <h3>Port of Seattle</h3>
      <img class="project-icon" alt="Pole Mounted Solar Array" src="~/static/polePV.svg">
    </div>
    <!-- The content inside of the b-collapse appear on click on a project. -->
    <b-collapse id="seven">
      <br />
      <section>
        In the Autumn of 2016, the Port of Seattle Maritime’s Environment and Planning group
        commissioned the UW-Solar group at the University of Washington to examine the potential 
        of several Port sites for solar energy development. Foremost of these was the Charles E. 
        Mitson (CEM) site, a former municipal landfill, capped with a geomembrane, a methane collection 
        system, and asphalt, adjacent to a rail yard and Terminal 5. The historical and adjacent uses 
        of this brownfield site reduce its chances for many land uses, but at approximately 16 acres 
        in size, unobstructed by shade, the site is ideal for solar development.
      </section>
      <br />
      <b-carousel
        id="carousel-7"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slides with image only -->
        <b-carousel-slide img-src="~/static/Port of Seattle/PS1.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Port of Seattle/PS2.png"></b-carousel-slide>
      </b-carousel>
      <br />
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'PortSeattleProj',
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
