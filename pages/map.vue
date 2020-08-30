<!-- Markus Schiffer and Alex Eidt -->
<!-- This file contains the page which displays tableau map of each of the
     UW Solar projects. -->

<template>
  <!-- Each page template must contain a data-containter div to hold all other elements. -->
  <div class="data-container">
    <!-- The following div adds spacing between page title and navbar. -->
    <div class="data"></div>
    <h1>Map</h1>
    <br />
    <br />
    <br />
    <br />
    <!--UW Solar Embedded Campus Map. This code is taken from embed direction on Tableau website. -->
    <div class='tableauPlaceholder' id='viz1597281256657' style='position: relative'>
      <noscript inline-template>
        <a href='#'>
          <img alt=' ' src='https://public.tableau.com/static/images/68/68G68CFX6/1_rss.png' style='border: none' />
        </a>
      </noscript>
      <object class='tableauViz'  style='display:none;'>
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='path' value='shared/68G68CFX6' />
        <param name='toolbar' value='yes' />
        <param name='static_image' value='https://public.tableau.com/static/images/68/68G68CFX6/1.png' />
        <param name='animate_transition' value='yes' />
        <param name='display_static_image' value='yes' />
        <param name='display_spinner' value='yes' />
        <param name='display_overlay' value='yes' />
        <param name='display_count' value='yes' />
        <param name='language' value='en' />
      </object>
    </div>
  </div>
</template>

<script>
export default {
  name: "Map",  // Name of the page.
  layout: "secondary",  // The layout used (from layouts folder).
  head () {  // The name of the page displayed on the browser tab.
    return {
      title: 'Map | UW Solar'
    }
  },
  // Mounted runs when the HTML is set. Initializes JavaScript for Tableau map.
  // This code is copied from the Tabeau website.
  mounted () {
    const divElement = document.getElementById('viz1597281256657');
    const vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width='100%';
    vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
    const scriptElement = document.createElement('script');      
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';             
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }
}
</script>

<style scoped>

</style>