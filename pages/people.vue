<template>
  <div class="container">
    <div class="people"></div>
    <div>
        <h1>People</h1>
        <br><br><br><br>
        <h2>Founders</h2>
        <br>
        <p>
            <b>Jan Whittington</b> | Faculty Advisor<br>
            <b>Stefanie Young</b> | Lab Founder
        </p>
        <br><br>
        <h2>Current Members</h2>
        <br>
        <div class="column">
            <p>
                Christoph Strouse<br>
                Whitney Thomas<br>
                Elizabeth Perkins<br>
                Alex Eidt<br>
                Saharsh Parakh<br>
                Kasey French<br>
                Markus Schiffer<br>
                Shayne Simpson<br>
                Gabby Easthouse<br>
                Kyler VandenBosch<br>
                Evan Mickelson<br>
                Chanaka Keerthisinghe<br>
                John Gannon<br>
                Boyang Sa<br>
                Ken Yu<br>
                Ryan Finney<br>
                Colton Brailsford<br>
                Matt Larsen<br>
                Chiva Chun<br>
                James Clough<br>
                Collin Cunneely<br>
                Ishmeet Singh<br>
                Abdulaziz Alqadhib<br>
                Mary Gregorich<br>
                Tyr Bernard<br>
                Brendan Hutchins<br>
                Aliah Marzolf<br>
                Alisa Huang<br>
                Charlie Chung<br>
                Lam Pham
            </p>
        </div>
        <br><br>
        <h2>Past Members</h2>
        <br>
        <div class="column">
            <p>
                Lucas Reber<br>
                Austin Miller<br>
                Prerna Agarwal<br>
                Feiyang Sun<br>
                Alexander Ratcliff<br>
                Lucy (Jiawen Gao)<br>
                Meghan Gattuso<br>
                Yuxuan Chen<br>
                Shuheng Wang<br>
                Austin Bell<br>
                Shruti Misra<br>
                Kenneth Wilhelm<br>
                Melissa Guaghan<br>
                Lauren Hoerr<br>
                Bry Osmonson<br>
                Jake Tracy<br>
                Heta Koso­nen<br>
                Ben Lukes<br>
                Justin Cher­veny<br>
                Dustin Wolfe<br>
                Dillinger James<br>
                Zach Holle<br>
                Banks Hall<br>
                Daniel Kim<br>
                Jae Jose<br>
                Jia Yuan<br>
                Michael Olson<br>
                Urooj Qureshi<br>
                Danny Rowl­ings<br>
                Abby Danao<br>
                Jacob Debernardi<br>
                Bowei Liang<br>
                Bran­don Chen<br>
                Lingzhi Sun<br>
                Ezekiel Jones<br>
                Zexia Ding<br>
                Sunni Wiss­mer<br>
                Mar­i­lyn Ostergren<br>
                Duncan Clauson<br>
                Bruce Reed<br>
                Otis Alexander<br>
                Kristen Gelino<br>
                Michele Hill<br>
                Lydia Fulton<br>
                Jeff Bernard<br>
                Justin Brecese<br>
                Casey Rodgers<br>
                Kaiwen Sun<br>
                Nicholas Steckler<br>
                Allison McGrath
            </p>
        </div>
        <br>
        <br>
        <br>
        <p>
            UW-Solar would like to offer a special thanks to <b>DC Grant</b>
            (Masters Infrastructure Planning and Management and Center for 
            Information Assurance and Cybersecurity) and <b>Jonathan Olds</b> 
            (Evans School of Public Affairs and Master of Urban Planning) whose 
            initial work on this project helped get it off the ground.
        </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "People",
  layout: "secondary",
}
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
.people {
  height: 15vh;
}
div.column {
  column-count: 3;
}
p {
  font-size: 1.5rem;
}
</style>
