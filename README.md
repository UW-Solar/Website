# UWSolar2.0

Website for **UW Solar** Registered Student Organization at the University of Washington.

This website was made using Vue and Nuxt.js.

* To learn more about Vue, [click here](https://www.youtube.com/watch?v=Wy9q22isx3U)
* To learn more about Nuxt.js [click here](https://www.youtube.com/watch?v=ltzlhAxJr74)

## Directory Structure

To read about the directory structure from the official `nuxt` documentation, click [here](https://nuxtjs.org/guide/directory-structure/). 

**Note:** The `Assets`, `Middleware`, `Store`, and `Plugins` directories have been removed from this project because they are not being used.

Directory | Description
--- | ---
`.nuxt` | This directory contains all the packages required for this Vue/nuxt framework to function. This directory already contains all the necessary files and there is no need to change it.
`components` | This directory contains all the individual projects from the **Projects** page. Additionally, it contains two files with the navigation bar and the footer found on each page. `Header.vue` is the file for the navigation bar at the top of each page. The `Footer.vue` file contains the footer found on each page
`content` | This directory contains another directory called `news`. The `news` directory contains all news entries for the news page. This is also where new news entries will be added.
`layouts` | The layouts directory contains two files that serve as the templates for the pages found in this website. `default.vue` is the template for the Home page. `secondary.vue` is the template for all other pages.
`pages` | The pages directory contains every page in the website. `index.vue` is the Home page, otherwise, the name of each file is the name of the page it represents.
`static` | This directory contains all the files that don't change (hence the name static). For this website, the static directory only contains the icons and images used in the website. There are several directories within the static directory that contain the images for projects in the **Projects** page and the images for the news articles in the **News** page.

---

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).