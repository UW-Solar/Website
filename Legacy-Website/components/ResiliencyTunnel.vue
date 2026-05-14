<template>
  <div>
    <!-- The toggler for the dropdown. -->
    <div v-b-toggle="'nine'" id="project" class="card-header">
      <h3>Resiliency Tunnel</h3>
      <!-- This image is the black icon for the project. -->
      <img class="project-icon" alt="Pole Mounted Solar Array" src="~/static/polePV.svg">
    </div>
    <!-- This content appears when the accordian menu drops down. -->
    <b-collapse id="nine">
      <br />
      <section>
        Our proposed system is essentially a glorified “high tunnel” greenhouse, meaning it is composed of opaque walls 
        that can be manipulated to allow for ventilation, access, and versatility in the use of the space, i.e. growing 
        food and providing UW students learning opportunities at the UW Farm in inclement weather. It is considered 
        off-the-grid as it generates power, collects water, and grows food simultaneously by way of reactive solar 
        installations, a roof stormwater catchment system, and conditions more stable than the natural environment. The 
        subsequent agriculture has greater nutritional value as well as overall yields, which would more effectively 
        feed members of the greater UW community, including those who utilize the UW Food Pantry. For this project, cost
        estimation and the design have been completed and handed over to UW Farm for implementation.
        Learn more on our <a href="https://resiliency-tunnel.webflow.io">website</a> or reach out over <a href="mailto:resiliencytunnel@gmail.com">email</a>!
      </section>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'ResiliencyTunnel',  // This should be different for each project.
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