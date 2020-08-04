<template>
  <div>
    <div v-b-toggle="'three'" class="card-header">
      <h3>UW Transportation</h3>
      <img class="project-icon" alt="Pole Mounted Solar Array" src="~/static/polePV(black).png">
    </div>
    <!-- The content inside of the b-collapse appear on click on a project. -->
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
      <b-carousel
        id="carousel-3"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
      </b-carousel>
      <br />
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'UWTransportationProj',
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