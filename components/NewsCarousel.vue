<!-- Markus Schiffer -->
<!-- This file is the carousel used for news articles with multiple pictures on the News page. -->
<!-- For many of the details, refer to the Vue Bootstrap documentation. -->

<template>
  <div>
    <b-carousel
        :id="'carousel-' + title"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        img-height="300"
        img-width="300"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        
      >
        <!-- Image Carousel. -->
        <b-carousel-slide
          v-for="(image, index) in imageArray"
          :key="'news-image-' + index"
          :img-src="'/News/' + image">
        </b-carousel-slide>
      </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'NewsCarousel',  // This is unique.
  props: {
    imageArray: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
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
