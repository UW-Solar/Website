<template>
  <div>
    <!-- The toggler for the dropdown. -->
    <div v-b-toggle="'eight'" id="project" class="card-header">
      <h3>UW Campus Plan</h3>
      <!-- This image is the black icon for the project. -->
      <img class="project-icon" alt="Roof Mounted Solar Array" src="~/static/roofPV.svg">
    </div>
    <!-- This content appears when the accordian menu drops down. -->
    <b-collapse id="eight">
      <br />
      <section>
        UW Solar is working on an e-bike charging project to help encourage the use of electrified transportation
        and demonstrate the feasibility and environmental benefits of off-grid charging stations. The goal of the
        e-bike charging project is to formulate the design and oversee the installation of solar-powered electric
        bicycle charging stations that use second life electric vehicle batteries for energy storage. This project
        began after receiving the Clean Energy Prize at the Alaska Airlines Environmental Innovation Challenge in
        spring 2021 under the company name PotentiaLi Energy. Since then, the project has received funding from the
        Campus Sustainability Fund and has been taken on by UW Solar. With the help of UW Solar’s partnership with
        UW Transportation, the project team aims to complete a pilot installation of a bike charging station by
        spring 2022, followed by 2 more installations to create a bike charging network at UW.
      </section>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'ElectricBike',  // This should be different for each project.
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