# COMPONENTS

This directory contains files with content for several pages on the UW Solar website. The three categories are **Projects**, **Header/Footer**, and **News**.

## Projects

The first group of files are the files that contain the content that appears in the accordion menus on the **Projects** page. These files are listed below:

* `CampusPlan.vue`
* `GridTestbed.vue`
* `LSBRooftop.vue`
* `Manastash.vue`
* `Mercer.vue`
* `PortSeattle.vue`
* `UWTransportation.vue`

The images below show an example of how the content in the files listed above are embedded in the accordion menus on the **Projects** page.

Accordion Menus on **Projects** page | Content provided from each file
<img src="../static/Documentation/Projects1.png"> | <img src="../static/Documentation/Projects2.png">

## Header/Footer

The `Header.vue` file contains the code for the Navigation Bar found at the top of each page. Images of the light and dark versions of the navigation bar are shown below. The light version of the navbar is the default version. If the user hovers over the navigation bar, the background turns black and the text/icon turn white. When the user scrolls down the page, the navigation bar slowly fades to the black background with white text/icon.

<img src="../static/Documentation/navbar1.png" alt="Light Navigation Bar">

---

<img src="../static/Documentation/navbar2.png" alt="Dark Navigation Bar">


The `Footer.vue` file contains the code for the footer found at the bottom of each page. An image of the footer is shown below:

<img src="../static/Documentation/footer.png" alt="Footer of UW Solar website">

## News

`NewsArticle.vue` is the template for each news entry on the **News** page. Below is a zoomed out screenshot of the website with several news articles.

<img src="../static/Documentation/news1.png" alt="News Page">

Every news entry is separated by a thick black horizontal line. The file where all the news entries are put onto the news page is the `news.vue` file in the `pages` directory.
