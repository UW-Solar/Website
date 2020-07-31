<template>
  <div class="data-container">
    <div class="projects"></div>
    <h1>Projects</h1>
    <br />
    <br />
    <br />
    <br />
    <h2>Current</h2>
    <br>
    <!-- The toggler for the dropdown. -->
    <div v-b-toggle="'one'" class="card-header text-center">
      <h3>Manastash Ridge Observatory</h3>
    </div>
    <!-- The content inside of the b-collapse appear on click on a project. -->
    <b-collapse id="one">
      <br>
      <section>UW Solar is working with the Astronomy Department at the University of Washington
          to make the Manastash Ridge Observatory more energy efficient and resilient. Currently,
          we are working on installing an array of 36 solar panels and integrating this into
          the electrical systems of the Observatory to provide emergency power to close the dome
          of the telescope and essential services inside the building.
      </section>
      <br>
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
        <!-- Slides with image only -->
        <b-carousel-slide img-src="~/static/Manastash Ridge Observatory/MRO1.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Manastash Ridge Observatory/MRO2.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Manastash Ridge Observatory/MRO3.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Manastash Ridge Observatory/MRO4.png"></b-carousel-slide>

      </b-carousel>
      <br>
    </b-collapse>

    <div v-b-toggle="'two'" class="card-header text-center">
      <h3>UW Campus Plan</h3>
    </div>
    <!-- The content inside of the b-collapse appear on click on a project. -->
    <b-collapse id="two">
      <br>
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
      <br>
      <b-carousel
        id="carousel-2"
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
        <!-- Slides with image only -->
        <b-carousel-slide img-src="~/static/Campus Plan/CP1.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Campus Plan/CP2.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Campus Plan/CP3.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Campus Plan/CP4.png"></b-carousel-slide>
      </b-carousel>
      <br>
    </b-collapse>

    <div v-b-toggle="'three'" class="card-header text-center">
      <h3>UW Transportation</h3>
    </div>
    <!-- The content inside of the b-collapse appear on click on a project. -->
    <b-collapse id="three">
      <br>
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
      <br>
      <b-carousel
        id="carousel-3"
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
        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
      </b-carousel>
      <br>
    </b-collapse>
    
  <br>
  <h2>Completed</h2>
  <br>
  <div v-b-toggle="'four'" class="card-header text-center">
      <h3>UW Mercer A</h3>
    </div>
    <!-- The content inside of the b-collapse appear on click on a project. -->
    <b-collapse id="four">
      <br>
      <section>
            The Mercer A Installation was a student led initiative to bring more solar panels to the 
            Campus. The project placed a solar array atop Mercer A was completed in Spring of 2014. 
            The entire array has a power rating of 35 kW and helps provide power to the students 
            living in the apartment complex. Upon completion of the project, the students working on 
            it wanted to do similar projects and thus created UW Solar.
      </section>
      <br>
      <b-carousel
        id="carousel-4"
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
        <!-- Slides with image only -->
        <b-carousel-slide img-src="~/static/UW Mercer A/UWM1.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/UW Mercer A/UWM2.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/UW Mercer A/UWM3.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/UW Mercer A/UWM4.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/UW Mercer A/UWM5.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/UW Mercer A/UWM6.png"></b-carousel-slide>
      </b-carousel>
      <br>
    </b-collapse>

    <div v-b-toggle="'five'" class="card-header text-center">
      <h3>UW CEI/PNW Smart Grid Testbed</h3>
    </div>
    <!-- The content inside of the b-collapse appear on click on a project. -->
    <b-collapse id="five">
      <br>
      <section>
            Daniel Kirschen, UW Electrical Engineering Close Professor and CEI Faculty Advisory 
            Board Member, proposed building smart microinverter testbeds at UW for the CETC smart 
            grid research in May of 2015. With the funding for smart microinverters from Washington 
            Clean Energy Fund, Prof. Kirschen approached Jan Whittington, UW Urban Design and Planning 
            Associate Professor and UW Solar Faculty Advisor, to discuss the possibility of building a 
            PV system on campus to host those smart microinverters. Professor Whittington led students 
            in UW Solar to develop a 100 KW PV project. Due to the successful collaboration between UW 
            Solar and UW HFS, HFS generously agreed to use three HFS residence halls, Maple Hall, Alder 
            Hall, and Elm Hall as the locations of the PV systems. UW Solar seeked further funding 
            opportunities from the Department of Commerce Grant and Seattle City Light Greenup Grant 
            to cover the cost of purchasing PV panels and building the system. Later on, Artisan Electric 
            was selected as the contractor through Request for Proposal (RFP) process. The construction 
            started in October of 2016 and the project was completed in its entirety in March of 2017.
      </section>
      <br>
      <b-carousel
        id="carousel-5"
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
        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
      </b-carousel>
      <br>
    </b-collapse>

    <div v-b-toggle="'six'" class="card-header text-center">
      <h3>UW Life Sciences Building Rooftop/BIPV</h3>
    </div>
    <!-- The content inside of the b-collapse appear on click on a project. -->
    <b-collapse id="six">
      <br>
      <section>
            UW Solar Team collaborated with Perkins+Will architecture team to develop the schematic 
            plans for a 5 kW building integrated photovoltaic (BIPV) system of vertical shading fins on 
            the southern facade of the Life Sciences Building on the UW Seattle Campus. The 5 kW BIPV 
            system provides enough energy to power the light systems in the main floors. In Autumn 2019,
            a 100 kW rooftop solar array was completed by Artisan Electric.
      </section>
      <br>
      <b-carousel
        id="carousel-6"
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
        <!-- Slides with image only -->
        <b-carousel-slide img-src="~/static/Life Sciences Building/LSB1.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Life Sciences Building/LSB2.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Life Sciences Building/LSB3.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Life Sciences Building/LSB4.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Life Sciences Building/LSB5.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Life Sciences Building/LSB6.png"></b-carousel-slide>
      </b-carousel>
      <br>
    </b-collapse>

    <div v-b-toggle="'seven'" class="card-header text-center">
      <h3>Port of Seattle</h3>
    </div>
    <!-- The content inside of the b-collapse appear on click on a project. -->
    <b-collapse id="seven">
      <br>
      <section>
            
      </section>
      <br>
      <b-carousel
        id="carousel-7"
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
        <!-- Slides with image only -->
        <b-carousel-slide img-src="~/static/Port of Seattle/PS1.png"></b-carousel-slide>
        <b-carousel-slide img-src="~/static/Port of Seattle/PS2.png"></b-carousel-slide>
      </b-carousel>
      <br>
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
    font-size: 3rem;
    border-bottom: 0.15em solid black;
    padding: 0.2em;
    color: black;
    width: fit-content;
    border-bottom-right-radius: 0.7rem;
}
h2, h3 {
    color: black;
}
h3 {
    text-align: right;
}
h3:hover {
    text-decoration: underline;
}
.projects {
  height: 15vh;
}
section {
  font-size: 1.3rem;
  color: black;
}
</style>
