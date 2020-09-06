# CONTENT

This directory contains another directory called `news` which contains all the news entries for the **News** page of the UW Solar website.

---

## NEWS

This directory contains all news articles found on the **News** page of the UW Solar website.

In order to add a news article, create a markdown (`.md`) file and use the following template:

```
---
title: ""
date: ""
author: ""
content: ""
image: ""
---
```

Below is a table with the breakdown of what each component of the template means:

Component | Meaning
--- | ---
title | The Title of the News Post.
date | The date the News Post was created. **MAKE SURE THERE IS NO 'TH' OR ANY OTHER DATE ABBREVIATION IN THE DATE. DATES SHOULD BE OF THE FORMAT: MONTH (full word, e.g. January, February, etc) DD, YEAR**.
author | The author of the News Post.
content | The text associated with the news article. All text will be displayed as one large paragraph so if you have a longer blog post, try to split it up into several that summarize the news that you'd like to report.
image | **THE IMAGE IS OPTIONAL**. No image required for a news entry, however if you'd like to have an image go along with the news post, place the image into `static/News` and give only the file name here. Example: If you wanted to include a image called "newsarticle.png" with your news post, you would paste this image into the `static/News` folder, and then in the template you'd write `image: "newsarticle.png"`.

## Example News Entry

```
---
title: "Life Sciences Building Construction Complete"
# Make sure there are no 'th' or anything in the date
date: "November 14, 2019"
author: "Evan Mickelson"
content: "Artisan Electric has completed construction and all final inspections on the rooftop solar array. Testing was conducted to ensure the system is properly functioning before connecting it into the building’s electrical panels."
# An image is optional
image: "NewsLSBInstall.png"
---
```