(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(t,e,r){"use strict";e.a=function(t,e){e("academicYear",(function(t,e){var r=new Date,n=r.getFullYear(),o=r.getMonth()+1;return e>=9&&o>=9?n===t:e>=9?n-1===t:o<9&&t===n})),e("mapMonth",{January:1,February:2,March:3,April:4,May:5,June:6,July:7,August:8,September:9,October:10,November:11,December:12})}},152:function(t,e,r){t.exports=r.p+"img/skyline.4e5a80f.png"},153:function(t,e,r){var content=r(228);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("2658b9db",content,!0,{sourceMap:!1})},154:function(t,e,r){var content=r(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("1d8bb259",content,!0,{sourceMap:!1})},155:function(t,e,r){var content=r(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("62ee60a0",content,!0,{sourceMap:!1})},156:function(t,e,r){var content=r(241);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("149bcc73",content,!0,{sourceMap:!1})},186:function(t,e,r){"use strict";r(10),r(33),r(34),r(1);var n=r(90),o=r(91),l={name:"DefaultLayout",components:{UWSHeader:n.a,UWSFooter:o.a},mounted:function(){this.winHeight=window.innerHeight,window.addEventListener("scroll",this.handleScroll),this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t,e=window.pageYOffset/this.winHeight,r=Math.min(2.5*e,.65);t=.65==r?"5":Math.floor(5*Math.min(1,e)).toString(),document.getElementById("background-white").style["background-color"]="rgba(255, 255, 255, "+r.toString()+")",document.getElementById("background-blur").style.filter="blur("+t+"px)"}}},c=(r(236),r(29)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"__main"}},[e("div",{attrs:{id:"background-blur"}}),t._v(" "),e("div",{attrs:{id:"background-white"}}),t._v(" "),e("u-w-s-header"),t._v(" "),e("nuxt"),t._v(" "),e("u-w-s-footer")],1)}),[],!1,null,null,null);e.a=component.exports},187:function(t,e,r){"use strict";var n=r(90),o=r(91),l={name:"secondary",components:{UWSHeader:n.a,UWSFooter:o.a}},c=(r(240),r(29)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"__main"}},[e("div",{attrs:{id:"background-blur"}}),t._v(" "),e("div",{attrs:{id:"background-white"}}),t._v(" "),e("u-w-s-header"),t._v(" "),e("nuxt"),t._v(" "),e("u-w-s-footer")],1)}),[],!1,null,"15f2bbcf",null);e.a=component.exports},190:function(t,e,r){t.exports=r(191)},227:function(t,e,r){"use strict";r(153)},228:function(t,e,r){var n=r(37)(!1);n.push([t.i,"nav[data-v-512c5a47]{position:fixed;width:100%;top:0;display:flex;justify-content:space-between;z-index:10}a[data-v-512c5a47]{font-weight:400}a[data-v-512c5a47]:hover{text-decoration:underline}.navbar-toggler.collapsed[data-v-512c5a47],.navbar-toggler.not-collapsed[data-v-512c5a47]{border-color:#000;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='%23000' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");background-size:100% 100%}.navbar[data-v-512c5a47]{font-size:1.2em}.nav-item[data-v-512c5a47]{padding-left:1.5rem;display:flex;align-items:center}.nav-link[data-v-512c5a47]{color:#000}.fix-offset[data-v-512c5a47]{margin-bottom:4.5rem}.nuxt-link-exact-active[data-v-512c5a47]{font-weight:bolder}.navbar-brand[data-v-512c5a47]{font-size:inherit}#UIL-logo[data-v-512c5a47]{display:flex;flex-direction:row-reverse;align-items:center;text-decoration:none}#UIL-logo img[data-v-512c5a47]{width:auto;max-height:2.5rem;margin-left:1rem;margin-right:2rem;border-radius:20%}#special-link[data-v-512c5a47]:hover{text-decoration:underline}@media screen and (min-width:992px){#nav-collapse[data-v-512c5a47]{display:flex;justify-content:space-between}}",""]),t.exports=n},229:function(t,e,r){t.exports=r.p+"img/UWFooterBlack.f2196c4.png"},230:function(t,e,r){t.exports=r.p+"img/facebook.1550683.png"},231:function(t,e,r){t.exports=r.p+"img/instagram.0554dd3.png"},232:function(t,e,r){t.exports=r.p+"img/map.1a2fea7.png"},233:function(t,e,r){t.exports=r.p+"img/email.e7f1e3a.png"},234:function(t,e,r){"use strict";r(154)},235:function(t,e,r){var n=r(37)(!1);n.push([t.i,"footer[data-v-74a2678c]{margin-top:10rem}.footerImg[data-v-74a2678c]{width:15%;display:flex;justify-content:center;align-items:center;margin-left:.5rem;margin-right:.5rem;filter:invert(100%)}.footerImg[data-v-74a2678c]:hover{filter:invert(0)}#hrFooter[data-v-74a2678c]{width:90%;border:1px solid #000}#UWFooter[data-v-74a2678c]{width:70%;filter:grayscale(100%);display:block;margin-left:auto;margin-right:auto}#UWFooter[data-v-74a2678c]:hover{filter:invert(100%)}#footerDiv[data-v-74a2678c]{text-align:center;width:70%;margin-left:auto;margin-right:auto;display:flex;justify-content:center}@media (min-width:550px){#footerDiv[data-v-74a2678c],#UWFooter[data-v-74a2678c]{width:30%}.footerImg[data-v-74a2678c]{width:10%}}",""]),t.exports=n},236:function(t,e,r){"use strict";r(155)},237:function(t,e,r){var n=r(37),o=r(238),l=r(239),c=n(!1),d=o(l);c.push([t.i,"body,html{height:100vh;color:#000}a{text-decoration:none;font-weight:bolder;color:inherit}h1{font-size:3rem;border-bottom:.15em solid #000;padding:.2em;width:-moz-fit-content;width:fit-content;border-bottom-right-radius:.4rem}h3{margin:0}.card-header h3{text-align:center}section{font-size:1.3rem}.data{height:15vh}#__layout,#__main,#__nuxt{height:100%}#background-blur{background:linear-gradient(to bottom right,rgba(0,0,0,.19) 0,hsla(0,0%,100%,.21)),url("+d+");background-repeat:no-repeat,repeat;background-size:cover;background-attachment:fixed;z-index:-10}#background-blur,#background-white{height:100%;width:100%;position:fixed}#background-white{background-color:transparent;z-index:-9}.project-icon{width:30%;margin-top:1rem}.card-header{display:flex;flex-direction:column;align-items:center;justify-content:center;height:auto}.card-header:hover{background-color:hsla(0,0%,100%,.4);text-decoration:underline}@media (min-width:650px){.card-header h3{text-align:left;text-align:initial}#project.card-header{flex-direction:row;justify-content:space-between;height:25vh}.project-icon{width:10%}}@media (min-width:750px){#project.card-header{height:15vh}}@media (min-width:1200px){#project.card-header{height:25vh}}",""]),t.exports=c},239:function(t,e,r){t.exports=r.p+"img/UWSolarBackground.fa50bfb.png"},240:function(t,e,r){"use strict";r(156)},241:function(t,e,r){var n=r(37)(!1);n.push([t.i,"#background-blur[data-v-15f2bbcf]{filter:blur(5px)}#background-white[data-v-15f2bbcf]{background-color:hsla(0,0%,100%,.65)}.data-container[data-v-15f2bbcf]{width:75%;display:block;margin-left:auto;margin-right:auto}",""]),t.exports=n},90:function(t,e,r){"use strict";r(61),r(44),r(10),r(33),r(34),r(2),r(36),r(30),r(31),r(1);var n={name:"Header",computed:{currentPage:function(){var path=this.$route.path;return path.includes("projects")?1:path.includes("map")?2:path.includes("data")?3:path.includes("news")?4:path.includes("people")?5:0}},data:function(){return{winHeight:void 0,winWidth:void 0,currColor:"black",currFilter:0}},mounted:function(){var t=this;this.winHeight=window.innerHeight,window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize),this.handleResize(),setTimeout((function(){return t.handleScroll()}),20)},destroyed:function(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){if(!this.expanded()){var t=window.pageYOffset,e=Math.min(t/this.winHeight*15,.9),r=(255*Math.min(1,t/this.winHeight*10)).toString(),n="rgb("+r+", "+r+", "+r+")";document.getElementById("fading-background").style["background-color"]="rgba(0, 0, 0, "+e.toString()+")";var o=document.getElementsByClassName("nav-link");Array.from(o).forEach((function(t){t.style.color=n})),this.currColor="color: "+n;var filter="invert("+(100*Math.min(t/this.winHeight*10,1)).toString()+"%)";document.getElementById("UILLogo").style.filter=filter,this.currFilter="filter: "+filter,document.getElementsByClassName("navbar-toggler collapsed")[0].style.filter=filter}},handleFocus:function(){if(!this.expanded()){document.getElementById("fading-background").style["background-color"]="rgba(0, 0, 0, 0.9)";var t=document.getElementsByClassName("nav-link");Array.from(t).forEach((function(t){t.style.color="white"})),this.currColor="color: white",document.getElementById("UILLogo").style.filter="invert(100%)",this.currFilter="filter: invert(100%)",document.getElementsByClassName("navbar-toggler collapsed")[0].style.filter="invert(100%)"}},handleResize:function(){var t=this,e=window.innerWidth;e>991&&setTimeout((function(){return t.handleScroll()}),20),this.winWidth=e,this.winHeight=window.innerHeight},expanded:function(){return 0===document.getElementsByClassName("navbar-toggler collapsed").length}}},o=(r(227),r(29)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"navbar navbar-expand-lg",attrs:{id:"fading-background"},on:{mouseover:this.handleFocus,mouseout:this.handleScroll}},[e("b-navbar-toggle",{attrs:{target:"nav-collapse"},on:{click:this.handleFocus}}),t._v(" "),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("\n          Home\n          "),0===t.currentPage?e("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/projects"}},[t._v("\n          Projects\n          "),1===t.currentPage?e("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/map"}},[t._v("\n          Map\n          "),2===t.currentPage?e("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/data"}},[t._v("\n          Data\n          "),3===t.currentPage?e("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/news"}},[t._v("\n          News\n          "),4===t.currentPage?e("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/people"}},[t._v("\n          People\n          "),5===t.currentPage?e("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])],1),t._v(" "),this.winWidth<992?e("li",{staticClass:"nav-item"},[e("b-navbar-brand",{attrs:{id:"UIL-logo",href:"http://uil.be.uw.edu/",target:"_blank"}},[e("img",{style:t.currFilter,attrs:{id:"UILLogo",src:r(152)}}),t._v(" "),e("p",{staticClass:"nav-link",style:t.currColor,attrs:{id:"special-link"}},[t._v("Urban Infrastructure Lab")])])],1):t._e()]),t._v(" "),this.winWidth>991?e("div",{attrs:{id:"UIL-logo"}},[e("a",{attrs:{href:"http://uil.be.uw.edu/",target:"_blank"}},[e("img",{style:t.currFilter,attrs:{id:"UILLogo",src:r(152)}})]),t._v(" "),e("a",{staticClass:"nav-link",style:t.currColor,attrs:{href:"http://uil.be.uw.edu/",target:"_blank"}},[t._v("\n        Urban Infrastructure Lab\n      ")])]):t._e()])],1)}),[],!1,null,"512c5a47",null);e.a=component.exports},91:function(t,e,r){"use strict";var n=[function(){var t=this,e=t._self._c;return e("footer",[e("hr",{attrs:{id:"hrFooter"}}),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("a",{attrs:{href:"http://www.washington.edu/",target:"_blank"}},[e("img",{attrs:{id:"UWFooter",src:r(229)}})]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",{attrs:{id:"footerDiv"}},[e("a",{staticClass:"footerImg",attrs:{href:"https://www.facebook.com/UW-Solar-251198231673083/",target:"_blank"}},[e("img",{staticClass:"w-100 m-auto",attrs:{src:r(230)}})]),t._v(" "),e("a",{staticClass:"footerImg",attrs:{href:"https://www.instagram.com/uwsolar/",target:"_blank"}},[e("img",{staticClass:"w-100 m-auto",attrs:{src:r(231)}})]),t._v(" "),e("a",{staticClass:"footerImg",attrs:{href:"https://www.google.com/maps/place/Gould+Hall/@47.6549618,-122.3149216,490m/data=!3m2!1e3!4b1!4m5!3m4!1s0x549014f2574c64b3:0xa7800607c2811e5e!8m2!3d47.6549618!4d-122.3127329",target:"_blank"}},[e("img",{staticClass:"w-100 m-auto",attrs:{src:r(232)}})]),t._v(" "),e("a",{staticClass:"footerImg",attrs:{href:"mailto:solaruw@uw.edu"}},[e("img",{staticClass:"w-100 m-auto",attrs:{src:r(233)}})])]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br")])}],o={name:"Footer"},l=(r(234),r(29)),component=Object(l.a)(o,(function(){this._self._c;return this._m(0)}),n,!1,null,"74a2678c",null);e.a=component.exports}},[[190,8,1,9]]]);