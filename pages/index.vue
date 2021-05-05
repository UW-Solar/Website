<!-- Markus Schiffer and Alex Eidt -->
<!-- This file contains the landing/about page for UW Solar. -->

<template>
  <div class="data-container">
    <!-- Each page template must contain a data-containter div to hold all other elements. -->
    <div class="occupy-solo">
      <img id="header-img" class="mx-auto animated fadeIn" src="../static/uwsolar.png" alt="UW Solar Logo" title="UW Solar Logo">
    </div>
    <h2>About</h2>
    <br />
    <!-- Main content. Notice how you can put links in it with a tags. target="_blank" opens in new tab. -->
    <section>
      UW Solar is a <a href="https://vip.uw.edu/about" target="_blank">Vertically Integrated Project</a>
      and Registered Student Organization that is part of the
      <a href="http://uil.be.uw.edu/" target="_blank">Urban Infrastructure Lab</a> at the University of
      Washington. We participate in the planning, design, and development of solar and related electrification 
      (e.g., electric vehicles, charging, energy storage) projects and information systems on campus, and 
      advise public organizations off-campus (e.g., other colleges, schools, and large public organizations) 
      in this subject matter. Students from various disciplines and class standings (Freshman to PhD) work 
      together on a diverse set of projects spanning (but not limited to) engineering, architecture, 
      construction management, public policy and administration, business and urban planning. Below is a list
      of services we provide in Project Development and Advising.
      <br />
      <br />
      <!-- Uses bootstrap row and column classes to make two even columns. -->
      <div class="row">
        <div class="column">
          <h3>Project Development</h3>
          <ul>
            <li>Site Evaluations and Shading Analysis</li>
            <li>Photovoltaic (PV) System Preliminary Design</li>
            <li>Cost Estimation and Financial Modeling of Solar Arrays</li>
            <li>Creating and reviewing policy documents with sections for Industry Trends, Federal Regulations, State Law, City Code and UW Policy</li>
            <li>Procurement of Funding</li>
            <li>Request for Proposal (RFP) Drafting</li>
            <li>Contractor Selection</li>
            <li>Reviewing of Installation and Comissioning</li>
          </ul>
        </div>
        <div class="column">
          <h3>Research & Advising</h3>
          <ul>
            <li>Research and Evaluation of Photovoltaic (PV) and Electrical Vehicle (EV) Technologies</li>
            <li>Compile Databases of Available Technologies</li>
            <li>Financial Modeling for implementation of PV/EV Technologies</li>
            <li>Decision Making Models</li>
            <li>Strategic and Spatial Planning</li>
          </ul>
        </div>
      </div>
      <br />
      UW Solar is also offered as a 1-2 credit course in the College of Engineering
      (<a href="https://myplan.uw.edu/course/#/courses/ENGR%20297?id=5511afbb-18e5-4b6c-940f-95b14f046817&states=N4Ig7gDgziBcLADrgJYDsAmB7MAJApigOYAWALsrAIxUCsAbADTJjrZgAKWUKZKWaSgCYAHAAYAviAlA" target="_blank">ENGR 297/497</a>)
      and in the Department of Urban Design and Planning of the College of Built Environments
      (<a href="https://myplan.uw.edu/course/#/courses/URBDP%20498?id=68500d39-af14-4837-ad0e-d20fd202f96c&states=N4Ig7gDgziBcLADrgJYDsAmB7MAJApigOYAWALsrAIxUCcA7ADTJjrZgAKWUKZKWaSgAYAviBFA" target="_blank">URBDP 498/598</a>).
      If you decide to take UW Solar for credit, you must take any of the courses listed for two
      consecutive quarters. Add codes are available at meetings.
      <br />
      <br />
      UW Solar is an active participant in the <a href="https://green.uw.edu/sustainability-plan" target="_blank">UW Sustainability Action Plan</a>,
      and a proud recipient of the <a href="https://green.uw.edu/hga17" target="_blank">Husky Green Award</a>.
    </section>
    <br />
    <h2>Meeting Details</h2>
    <br />
    <section>
      <b>Who: </b>Students of all majors and every class standing. No experience or application is necessary.<br />
      <b>Where: </b>We currently meet on <a href="https://washington.zoom.us/j/99108117155" target="_blank">Zoom Meetings</a>.
      Once UW reopens we will resume our normal meeting space at <a href="http://be.uw.edu/spaces/facilities/gould-hall/" target="_blank">Gould Hall</a> room <b>012C</b>.<br />        
      <b>When: </b>We currently meet every week on Mondays and Wednesdays from 6:00 - 7:00 pm.<br />
    </section>
    <br />
    <h2>Contact</h2>
    <br />
    <!-- Mailto opens the user's mail client. -->
    <section>
      If you have any questions, feel free to contact us at <a href="mailto:solaruw@uw.edu">solaruw@uw.edu</a>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",  // Name of the page.
  layout: "default",  // The layout used (from layouts folder).
}
</script>

<style scoped>
/* div containing the UW Solar Logo Header Image */
.occupy-solo {
  height: 85vh;
  display: flex;
  align-items: center;
}
/* The actual UW Solar Logo Header Image */
#header-img {
  padding-top: 2rem;
  width: 80%;
  display: block;
}
/* Headers on the Home Page. Includes "About", "Meeting Details" and "Contact" */
h2 {
  font-size: 2.5rem;
}
/* Header for "Project Development" and "Research & Advising" */
h3 {
  text-align: center;
  padding-bottom: 1rem;
}
/* Container for all the content on this page */
.data-container {
  width: 75%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
/* Once the width of the page exceeds 768px (i.e full screen mode), the 
    "Project Development" and "Research & Advising" section will be organized
    in two side by side columns. */
@media (min-width: 768px) {
  .column {
    flex: 50%;
  }
  .row {
    display: flex;
  }
}
/* The following styles are responsible for the UW Solar Logo/Header
    Image fade-in on screen load. */
.animated {
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
/* UW Solar Logo/Header Image fade in styles end here */
</style>
