<template>
  <div class="container">
    <div class="projects"></div>
    <h1>Projects</h1>
    <br />
    <br />
    <br />
    <br />
    <!-- The toggler for the dropdown. -->
    <div v-b-toggle="'alpha'" class="card-header text-center">
      <!-- <img src="~/static/facebook.png" alt="temp" class="project-image"> -->
      <h3 class="display-4">Project Name</h3>
    </div>
    <!-- The things inside of the b-collapse appear on click on a project. -->
    <b-collapse id="alpha">
      <p>content</p>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h3>Hello world!</h3>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide>
      </b-carousel>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: "Projects",
  layout: "secondary",
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
};
</script>

<style scoped>
h1 {
  font-size: 4rem;
  border-bottom: 0.15em solid black;
  padding: 0.2em;
  color: black;
  width: fit-content;
  border-bottom-right-radius: 0.7rem;
}
.projects {
  height: 15vh;
}
p {
  font-size: 1.5rem;
}
</style>
