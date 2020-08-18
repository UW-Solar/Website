<template>
  <div class="data-container">
    <div class="data"></div>
    <div>
      <h1>People</h1>
      <br />
      <br />
      <br />
      <br />
      <h2>Faculty</h2>
      <br />
      <section>
        Jan Whittington | Faculty Advisor<br />
        Stefanie Young | Lab Founder
      </section>
      <br />
      <br />
      <h2>Students</h2>
      <br />
      <div class="column">
        <section>
          Christoph Strouse<br />
          Whitney Thomas<br />
          Elizabeth Perkins<br />
          Alex Eidt<br />
          Saharsh Parakh<br />
          Markus Schiffer<br />
          Shayne Simpson<br />
          Gabby Easthouse<br />
          Kyler VandenBosch<br />
          Evan Mickelson<br />
          Boyang Sa<br />
          Ryan Finney<br />
          Colton Brailsford<br />
          James Clough<br />
          Collin Cunneely<br />
          Abdulaziz Alqadhib<br />
          Mary Gregorich<br />
          Brendan Hutchins<br />
          Aliah Marzolf<br />
          Alisa Huang<br />
          Charlie Chung<br />
          Lam Pham
        </section>
      </div>
      <br />
      <br />
      <h2>Alumni</h2>
      <br />
      <div class="column">
        <section>
          Tyr Bernard<br />
          Ishmeet Singh<br />
          Matt Larsen<br />
          Chiva Chun<br />
          Ken Yu<br />
          John Gannon<br />
          Kasey French<br />
          Lucas Reber<br />
          Prerna Agarwal<br />
          Feiyang Sun<br />
          Alexander Ratcliff<br />
          Lucy (Jiawen Gao)<br />
          Meghan Gattuso<br />
          Yuxuan Chen<br />
          Shuheng Wang<br />
          Austin Bell<br />
          Shruti Misra<br />
          Kenneth Wilhelm<br />
          Melissa Guaghan<br />
          Lauren Hoerr<br />
          Bry Osmonson<br />
          Jake Tracy<br />
          Heta Koso­nen<br />
          Ben Lukes<br />
          Justin Cher­veny<br />
          Dustin Wolfe<br />
          Dillinger James<br />
          Zach Holle<br />
          Banks Hall<br />
          Daniel Kim<br />
          Jae Jose<br />
          Jia Yuan<br />
          Michael Olson<br />
          Urooj Qureshi<br />
          Danny Rowl­ings<br />
          Abby Danao<br />
          Jacob Debernardi<br />
          Bowei Liang<br />
          Bran­don Chen<br />
          Lingzhi Sun<br />
          Ezekiel Jones<br />
          Zexia Ding<br />
          Sunni Wiss­mer<br />
          Bruce Reed<br />
          Otis Alexander<br />
          Kristen Gelino<br />
          Michele Hill<br />
          Lydia Fulton<br />
          Jeff Bernard<br />
          Justin Brecese<br />
          Casey Rodgers<br />
          Kaiwen Sun<br />
          Nicholas Steckler<br />
          Allison McGrath
        </section>
      </div>
      <br />
      <br />
      <h2>Friends</h2>
      <br />
      <div class="column">
        <section>
          Chanaka Keerthisinghe<br />
          Austin Miller<br />
          Mar­i­lyn Ostergren<br />
          Duncan Clauson<br />
          Oliver Fraser<br />
          Evan Leonard<br />
          Steve Babinec<br />
          George Donegan<br />
          Anne Eskridge<br />
          Alex Hansen<br />
          Jeremy Park<br />
          Devin Kleiner<br />
          Daniel Kirschen<br />
          J. Devin MacKenzie<br />
          Daniel T. Schwartz<br />
          Hyun Woo "Chris" Lee<br />
          Michael B. Pomfret<br />
          Norm Menter<br />
          Claudia Frere-Anderson<br />
          Claudia Christensen<br />
          JR Fulton
        </section>
      </div>
      <br />
      <h2>Partners</h2>
      <br />
      <section>
        <a href="https://csf.uw.edu/" target="_blank">UW Campus Sustainability Fund</a><br />
        <a href="https://www.cei.washington.edu/" target="_blank">UW Clean Energy Institute</a><br />
        <a href="https://hfs.uw.edu/About/Sustainability" target="_blank">UW Housing and Food Services Sustainability Office</a><br />
        <a href="https://green.uw.edu/" target="_blank">UW Office of Sustainability</a><br />
        <a href="https://www.commerce.wa.gov/" target="_blank">Washington State Department of Commerce</a><br />
        <a href="https://uwstf.org/" target="_blank">UW Student Technology Fee</a><br />
        <a href="http://www.b-e-f.org/" target="_blank">Bonneville Environmental Foundation</a><br />
      </section>
      <br />
      <br />
      <br />
      <section>
        UW-Solar would like to offer a special thanks to <b>DC Grant</b>
        (Masters Infrastructure Planning and Management and Center for 
        Information Assurance and Cybersecurity) and <b>Jonathan Olds</b> 
        (Evans School of Public Affairs and Master of Urban Planning) whose 
        initial work on this project helped get it off the ground.
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: "People",
  layout: "secondary",
  head () {
    return {
      title: 'People | UW Solar'
    }
  },
}
</script>

<style scoped>
div.column {
  column-count: 1;
}

@media (min-width: 768px) {
  div.column {
    column-count: 3;
  }
}
</style>
