(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(t,e,n){"use strict";n(63),n(91),n(35),n(1),n(34),n(3),n(52),n(38),n(2);var r={name:"Header",computed:{currentPage:function(){var path=this.$route.path;return path.includes("projects")?1:path.includes("map")?2:path.includes("data")?3:path.includes("news")?4:path.includes("people")?5:0}},data:function(){return{winHeight:void 0,winWidth:void 0,currColor:"black",currFilter:0}},mounted:function(){var t=this;this.winHeight=window.innerHeight,window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize),this.handleResize(),setTimeout((function(){return t.handleScroll()}),20)},destroyed:function(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){if(!this.expanded()){var t=window.pageYOffset,e=Math.min(t/this.winHeight*15,.9),n=(255*Math.min(1,t/this.winHeight*10)).toString(),r="rgb("+n+", "+n+", "+n+")";document.getElementById("fading-background").style["background-color"]="rgba(0, 0, 0, "+e.toString()+")";var o=document.getElementsByClassName("nav-link");Array.from(o).forEach((function(t){t.style.color=r})),this.currColor="color: "+r;var filter="invert("+(100*Math.min(t/this.winHeight*10,1)).toString()+"%)";document.getElementById("UILLogo").style.filter=filter,this.currFilter="filter: "+filter,document.getElementsByClassName("navbar-toggler collapsed")[0].style.filter=filter}},handleFocus:function(){if(!this.expanded()){document.getElementById("fading-background").style["background-color"]="rgba(0, 0, 0, 0.9)";var t=document.getElementsByClassName("nav-link");Array.from(t).forEach((function(t){t.style.color="white"})),this.currColor="color: white",document.getElementById("UILLogo").style.filter="invert(100%)",this.currFilter="filter: invert(100%)",document.getElementsByClassName("navbar-toggler collapsed")[0].style.filter="invert(100%)"}},handleResize:function(){var t=this,e=window.innerWidth;e>991&&setTimeout((function(){return t.handleScroll()}),20),this.winWidth=e,this.winHeight=window.innerHeight},expanded:function(){return 0===document.getElementsByClassName("navbar-toggler collapsed").length}}},o=(n(331),n(47)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"navbar navbar-expand-lg",attrs:{id:"fading-background"},on:{mouseover:this.handleFocus,mouseout:this.handleScroll}},[e("b-navbar-toggle",{attrs:{target:"nav-collapse"},on:{click:this.handleFocus}}),t._v(" "),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("\n          Home\n          "),0===t.currentPage?e("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/projects"}},[t._v("\n          Projects\n          "),1===t.currentPage?e("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/map"}},[t._v("\n          Map\n          "),2===t.currentPage?e("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/data"}},[t._v("\n          Data\n          "),3===t.currentPage?e("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/news"}},[t._v("\n          News\n          "),4===t.currentPage?e("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/people"}},[t._v("\n          People\n          "),5===t.currentPage?e("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])],1),t._v(" "),this.winWidth<992?e("li",{staticClass:"nav-item"},[e("b-navbar-brand",{attrs:{id:"UIL-logo",href:"http://uil.be.uw.edu/",target:"_blank"}},[e("img",{style:t.currFilter,attrs:{id:"UILLogo",src:n(233)}}),t._v(" "),e("p",{staticClass:"nav-link",style:t.currColor,attrs:{id:"special-link"}},[t._v("Urban Infrastructure Lab")])])],1):t._e()]),t._v(" "),this.winWidth>991?e("div",{attrs:{id:"UIL-logo"}},[e("a",{attrs:{href:"http://uil.be.uw.edu/",target:"_blank"}},[e("img",{style:t.currFilter,attrs:{id:"UILLogo",src:n(233)}})]),t._v(" "),e("a",{staticClass:"nav-link",style:t.currColor,attrs:{href:"http://uil.be.uw.edu/",target:"_blank"}},[t._v("\n        Urban Infrastructure Lab\n      ")])]):t._e()])],1)}),[],!1,null,"512c5a47",null);e.a=component.exports},136:function(t,e,n){"use strict";var r=[function(){var t=this,e=t._self._c;return e("footer",[e("hr",{attrs:{id:"hrFooter"}}),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("a",{attrs:{href:"http://www.washington.edu/",target:"_blank"}},[e("img",{attrs:{id:"UWFooter",src:n(333)}})]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",{attrs:{id:"footerDiv"}},[e("a",{staticClass:"footerImg",attrs:{href:"https://www.facebook.com/UW-Solar-251198231673083/",target:"_blank"}},[e("img",{staticClass:"w-100 m-auto",attrs:{src:n(334)}})]),t._v(" "),e("a",{staticClass:"footerImg",attrs:{href:"https://www.instagram.com/uwsolar/",target:"_blank"}},[e("img",{staticClass:"w-100 m-auto",attrs:{src:n(335)}})]),t._v(" "),e("a",{staticClass:"footerImg",attrs:{href:"https://www.google.com/maps/place/Gould+Hall/@47.6549618,-122.3149216,490m/data=!3m2!1e3!4b1!4m5!3m4!1s0x549014f2574c64b3:0xa7800607c2811e5e!8m2!3d47.6549618!4d-122.3127329",target:"_blank"}},[e("img",{staticClass:"w-100 m-auto",attrs:{src:n(336)}})]),t._v(" "),e("a",{staticClass:"footerImg",attrs:{href:"mailto:janwhit@uw.edu"}},[e("img",{staticClass:"w-100 m-auto",attrs:{src:n(337)}})])]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br")])}],o={name:"Footer"},l=(n(338),n(47)),component=Object(l.a)(o,(function(){this._self._c;return this._m(0)}),r,!1,null,"b6834c88",null);e.a=component.exports},178:function(t,e,n){"use strict";e.a=function(t,e){e("academicYear",(function(t,e){var n=new Date,r=n.getFullYear(),o=n.getMonth()+1;return e>=9&&o>=9?r===t:e>=9?r-1===t:o<9&&t===r})),e("mapMonth",{January:1,February:2,March:3,April:4,May:5,June:6,July:7,August:8,September:9,October:10,November:11,December:12})}},233:function(t,e,n){t.exports=n.p+"img/skyline.212ac33.png"},234:function(t,e,n){var content=n(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("702466d9",content,!0,{sourceMap:!1})},235:function(t,e,n){var content=n(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("f55dfeda",content,!0,{sourceMap:!1})},236:function(t,e,n){var content=n(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("2bf76ee2",content,!0,{sourceMap:!1})},237:function(t,e,n){var content=n(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("7cd7d296",content,!0,{sourceMap:!1})},269:function(t,e,n){"use strict";n(1),n(34),n(2);var r=n(135),o=n(136),l={name:"DefaultLayout",components:{UWSHeader:r.a,UWSFooter:o.a},mounted:function(){this.winHeight=window.innerHeight,window.addEventListener("scroll",this.handleScroll),this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t,e=window.pageYOffset/this.winHeight,n=Math.min(2.5*e,.65);t=.65==n?"5":Math.floor(5*Math.min(1,e)).toString(),document.getElementById("background-white").style["background-color"]="rgba(255, 255, 255, "+n.toString()+")",document.getElementById("background-blur").style.filter="blur("+t+"px)"}}},c=(n(340),n(47)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"__main"}},[e("div",{attrs:{id:"background-blur"}}),t._v(" "),e("div",{attrs:{id:"background-white"}}),t._v(" "),e("u-w-s-header"),t._v(" "),e("nuxt"),t._v(" "),e("u-w-s-footer")],1)}),[],!1,null,null,null);e.a=component.exports},270:function(t,e,n){"use strict";var r=n(135),o=n(136),l={name:"secondary",components:{UWSHeader:r.a,UWSFooter:o.a}},c=(n(344),n(47)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"__main"}},[e("div",{attrs:{id:"background-blur"}}),t._v(" "),e("div",{attrs:{id:"background-white"}}),t._v(" "),e("u-w-s-header"),t._v(" "),e("nuxt"),t._v(" "),e("u-w-s-footer")],1)}),[],!1,null,"15f2bbcf",null);e.a=component.exports},273:function(t,e,n){t.exports=n(274)},331:function(t,e,n){"use strict";n(234)},332:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,"nav[data-v-512c5a47]{display:flex;justify-content:space-between;position:fixed;top:0;width:100%;z-index:10}a[data-v-512c5a47]{font-weight:400}a[data-v-512c5a47]:hover{-webkit-text-decoration:underline;text-decoration:underline}.navbar-toggler.collapsed[data-v-512c5a47],.navbar-toggler.not-collapsed[data-v-512c5a47]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='%23000' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");background-size:100% 100%;border-color:#000}.navbar[data-v-512c5a47]{font-size:1.2em}.nav-item[data-v-512c5a47]{align-items:center;display:flex;padding-left:1.5rem}.nav-link[data-v-512c5a47]{color:#000}.fix-offset[data-v-512c5a47]{margin-bottom:4.5rem}.nuxt-link-exact-active[data-v-512c5a47]{font-weight:bolder}.navbar-brand[data-v-512c5a47]{font-size:inherit}#UIL-logo[data-v-512c5a47]{align-items:center;display:flex;flex-direction:row-reverse;-webkit-text-decoration:none;text-decoration:none}#UIL-logo img[data-v-512c5a47]{border-radius:20%;margin-left:1rem;margin-right:2rem;max-height:2.5rem;width:auto}#special-link[data-v-512c5a47]:hover{-webkit-text-decoration:underline;text-decoration:underline}@media screen and (min-width:992px){#nav-collapse[data-v-512c5a47]{display:flex;justify-content:space-between}}",""]),r.locals={},t.exports=r},333:function(t,e,n){t.exports=n.p+"img/UWFooterBlack.4be081e.png"},334:function(t,e,n){t.exports=n.p+"img/facebook.7ef6863.png"},335:function(t,e,n){t.exports=n.p+"img/instagram.825114a.png"},336:function(t,e,n){t.exports=n.p+"img/map.7ff5635.png"},337:function(t,e,n){t.exports=n.p+"img/email.acf375c.png"},338:function(t,e,n){"use strict";n(235)},339:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,"footer[data-v-b6834c88]{margin-top:10rem}.footerImg[data-v-b6834c88]{align-items:center;display:flex;filter:invert(100%);justify-content:center;margin-left:.5rem;margin-right:.5rem;width:15%}.footerImg[data-v-b6834c88]:hover{filter:invert(0)}#hrFooter[data-v-b6834c88]{border:1px solid #000;width:90%}#UWFooter[data-v-b6834c88]{display:block;filter:grayscale(100%);margin-left:auto;margin-right:auto;width:70%}#UWFooter[data-v-b6834c88]:hover{filter:invert(100%)}#footerDiv[data-v-b6834c88]{display:flex;justify-content:center;margin-left:auto;margin-right:auto;text-align:center;width:70%}@media (min-width:550px){#UWFooter[data-v-b6834c88],#footerDiv[data-v-b6834c88]{width:30%}.footerImg[data-v-b6834c88]{width:10%}}",""]),r.locals={},t.exports=r},340:function(t,e,n){"use strict";n(236)},341:function(t,e,n){var r=n(56),o=n(342),l=n(343),c=r((function(i){return i[1]})),d=o(l);c.push([t.i,"body,html{color:#000;height:100vh}a{color:inherit;font-weight:bolder;-webkit-text-decoration:none;text-decoration:none}h1{border-bottom:.15em solid #000;border-bottom-right-radius:.4rem;font-size:3rem;padding:.2em;width:-moz-fit-content;width:fit-content}h3{margin:0}.card-header h3{text-align:center}section{font-size:1.3rem}.data{height:15vh}#__layout,#__main,#__nuxt{height:100%}#background-blur{background:linear-gradient(to bottom right,rgba(0,0,0,.19),hsla(0,0%,100%,.21)),url("+d+");background-attachment:fixed;background-repeat:no-repeat,repeat;background-size:cover;z-index:-10}#background-blur,#background-white{height:100%;position:fixed;width:100%}#background-white{background-color:transparent;z-index:-9}.project-icon{margin-top:1rem;width:30%}.card-header{align-items:center;display:flex;flex-direction:column;height:auto;justify-content:center}.card-header:hover{background-color:hsla(0,0%,100%,.4);-webkit-text-decoration:underline;text-decoration:underline}@media (min-width:650px){.card-header h3{text-align:left;text-align:initial}#project.card-header{flex-direction:row;height:25vh;justify-content:space-between}.project-icon{width:10%}}@media (min-width:750px){#project.card-header{height:15vh}}@media (min-width:1200px){#project.card-header{height:25vh}}",""]),c.locals={},t.exports=c},343:function(t,e,n){t.exports=n.p+"img/UWSolarBackground.2b74a50.png"},344:function(t,e,n){"use strict";n(237)},345:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,"#background-blur[data-v-15f2bbcf]{filter:blur(5px)}#background-white[data-v-15f2bbcf]{background-color:hsla(0,0%,100%,.65)}.data-container[data-v-15f2bbcf]{display:block;margin-left:auto;margin-right:auto;width:75%}",""]),r.locals={},t.exports=r}},[[273,8,1,9]]]);