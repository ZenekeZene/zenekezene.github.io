(function(t){function e(e){for(var i,s,r=e[0],c=e[1],l=e[2],u=0,d=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},o=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/social/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0311":function(t,e,n){},"0a2c":function(t,e){var n="<h1 id=imq>IMQ</h1> ";t.exports=n},"0b0a":function(t,e,n){"use strict";var i=n("36e0"),a=n.n(i);a.a},"22bd":function(t,e,n){},"24b8":function(t,e){var n="<img data-src=../../../img/portfolio/caracoles/caracoles-grande.jpg>";t.exports=n},"2fb4":function(t,e,n){},"36e0":function(t,e,n){},4277:function(t,e){var n="<h1 id=imq>IMQ</h1> ";t.exports=n},"471b":function(t,e){var n="<img data-src=../../../img/portfolio/121/cabeza1.png> <h1 id=otro-titulo>Otro titulo</h1> <hr> ";t.exports=n},"4f03":function(t,e){var n="<img data-src=../../../img/portfolio/mercante/mercante1.jpg>";t.exports=n},"51c5":function(t,e){var n="<img data-src=../../../img/portfolio/barley/barley4.jpg>";t.exports=n},5375:function(t,e,n){"use strict";var i=n("5625"),a=n.n(i);a.a},5504:function(t,e,n){"use strict";var i=n("b8e0"),a=n.n(i);a.a},5625:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=n("8c4f"),o=n("7212"),s=n.n(o),r=n("0086"),c=n.n(r),l=n("b9dd"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Glass"),n("LightBox"),n("Structure",{ref:"structure"}),n("Content"),0===t.currentSlide?n("div",{staticClass:"fab-wrapper"},[t.claimIsVisible?n("p",[t._v("Descargate el CV")]):t._e(),t._m(0)]):t._e(),2===t.currentSlide?n("button",{staticClass:"fab"},[n("span",{staticClass:"icon-port-share",staticStyle:{"margin-left":"-3px"}})]):t._e()],1)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"fab"},[n("span",{staticClass:"icon-port-download"})])}],d=n("5530"),f=n("2f62"),m=n("2ef0");function h(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px")),window.addEventListener("resize",Object(m["debounce"])((function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))}),100))}var v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t.isExpanded&&1===t.currentSlide&&t.isMini?n("span",{staticClass:"close icon-port-cross",on:{click:t.handCloseExpanded}}):t._e(),n("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],ref:"work",staticClass:"work",style:t.lightBoxStyle},[t.lightBoxItem?n("div",{domProps:{innerHTML:t._s(t.lightBoxItem.content)}}):t._e()])])},b=[],g={name:"LightBox",computed:Object(d["a"])({},Object(f["c"])(["isExpanded","currentSlide","isMini"]),{work:function(){return this.$refs.work},structure:function(){return this.$parent.$refs.structure.$el}}),data:function(){return{lightBoxItem:null,lightBoxStyle:{}}},mounted:function(){var t=this;this.$root.$on("launch:ligth-box",(function(e){return t.launchLightBox(e)}))},methods:Object(d["a"])({},Object(f["b"])(["setIsExpanded"]),{launchLightBox:function(t){var e=this,n=t.item;this.lightBoxItem=t.data;var i=document.getElementById("scrollbar").scrollTop,a=n.offsetTop,o=n.offsetLeft,s=n.offsetWidth,r=n.offsetHeight;this.lightBoxStyle={top:"calc(".concat(this.structure.offsetHeight+a-i,"px + 0.5rem)"),left:"calc(".concat(o,"px + 1.2rem)"),width:"".concat(s,"px"),height:"".concat(r,"px")},setTimeout((function(){e.work.classList.add("--expanded")}),100)},handCloseExpanded:function(){this.lightBoxItem=null,this.lightBoxStyle=null,this.setIsExpanded({isExpanded:!1}),this.work.classList.remove("--expanded")}})},w=g,_=(n("a875"),n("2877")),x=Object(_["a"])(w,v,b,!1,null,null,null),k=x.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"glass"},[n("div",{staticClass:"shine"})])}],y=(n("5504"),{}),j=Object(_["a"])(y,C,S,!1,null,null,null),E=j.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"--mini":t.isMini}},[n("TheHeader"),n("Profile",{attrs:{author:"Héctor Villar",role:"Software Engineer"}}),n("TheMenu",{attrs:{options:t.menuSwiperOptions},on:{"go:to":function(e){return t.handGo(e)}}})],1)},I=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"info"},[n("h1",{staticClass:"author"},[t._v(t._s(t.author)+" "),n("span",{staticClass:"hand-size",class:t.isMini?"icon-port-info":"icon-port-minimize",on:{click:t.toggleIsMini}})]),n("p",{staticClass:"role"},[t._v(t._s(t.role))])]),n("img",{staticClass:"background",attrs:{src:"/img/avatar2.jpg"}}),n("swiper",{ref:"aboutSwiper",staticClass:"slider",attrs:{options:t.optionsSwiper}},[n("swiper-slide",{staticClass:"description"},[n("p",[t._v("Creo "),n("span",{staticClass:"font-bold"},[t._v("aplicaciones web")]),t._v(" e "),n("span",{staticClass:"font-bold"},[t._v("híbridas")]),t._v(" con "),n("span",{staticClass:"font-bold"},[t._v("estándares web")]),t._v(", en entornos ágiles, con tests y clean code. Además, hago "),n("span",{staticClass:"font-bold"},[t._v("videojuegos")]),t._v(", desde el arte hasta animación y desarrollo. "),n("br"),n("br"),n("span",{staticClass:"badge"},[n("span",{staticClass:"icon-port-js"}),t._v("JS")]),n("span",{staticClass:"badge"},[n("span",{staticClass:"icon-port-vue"}),t._v("Vue")]),n("span",{staticClass:"badge"},[n("span",{staticClass:"icon-port-react"}),t._v("React")]),n("span",{staticClass:"badge"},[n("span",{staticClass:"icon-port-ionic"}),t._v("Ionic")]),n("span",{staticClass:"badge"},[n("span",{staticClass:"icon-port-nuxt"}),t._v("Nuxt")]),n("span",{staticClass:"badge"},[n("span",{staticClass:"icon-port-firebase"}),t._v("Firebase")]),n("span",{staticClass:"badge"},[n("span",{staticClass:"icon-port-sass"}),t._v("SASS")]),n("span",{staticClass:"badge"},[n("span",{staticClass:"icon-port-css"}),t._v("CSS")]),n("span",{staticClass:"badge"},[n("span",{staticClass:"icon-port-html5"}),t._v("HTML")])])]),n("swiper-slide")],1),1===t.currentStep?n("div",{staticClass:"button-prev",on:{click:t.previous}},[n("span",{staticClass:"icon-port-arrow-left"})]):t._e(),0===t.currentStep?n("div",{staticClass:"button-next",on:{click:t.next}},[n("span",{staticClass:"icon-port-arrow-left"})]):t._e()],1)},$=[],z={name:"Profile",props:{author:String,role:String},computed:Object(d["a"])({},Object(f["c"])(["isMini"])),data:function(){return{optionsSwiper:{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},currentStep:0}},mounted:function(){var t=this;this.$refs.aboutSwiper.$swiper.on("slideChange",(function(){t.currentStep=t.$refs.aboutSwiper.$swiper.activeIndex}))},methods:Object(d["a"])({},Object(f["b"])(["toggleIsMini"]),{next:function(){this.$refs.aboutSwiper.$swiper.slideNext()},previous:function(){this.$refs.aboutSwiper.$swiper.slidePrev()}})},P=z,T=(n("68cf"),Object(_["a"])(P,M,$,!1,null,"58a44063",null)),D=T.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("p",{staticClass:"header__datetime"},[t._v(t._s(t.time))]),t._m(0)])},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"header__icons"},[n("span",{staticClass:"icon-port-signal"}),n("span",{staticClass:"icon-port-wifi"}),n("span",{staticClass:"icon-port-battery"})])}],L=(n("fb6a"),{name:"Header",computed:{time:function(){var t=new Date;return("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)}}}),B=L,W=(n("0b0a"),Object(_["a"])(B,H,A,!1,null,null,null)),V=W.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",{staticClass:"menu"},t._l(t.sections,(function(e,i){return n("li",{key:"section-"+e.name,class:{active:t.currentSlide===i},on:{click:function(e){return t.handGo(i)}}},[t._v(" "+t._s(e.text)+" ")])})),0)},N=[],q={name:"TheMenu",computed:Object(d["a"])({},Object(f["c"])(["currentSlide"])),data:function(){return{sections:[{name:"about",text:"CV"},{name:"portfolio",text:"Portafolio"},{name:"networks",text:"Contacto"}]}},methods:{handGo:function(t){this.$emit("go:to",{slideIndex:t})}}},G=q,U=(n("d352"),Object(_["a"])(G,F,N,!1,null,null,null)),J=U.exports,Q={name:"Structure",components:{Profile:D,TheHeader:V,TheMenu:J},computed:Object(d["a"])({},Object(f["c"])(["isMini"])),data:function(){return{menuSwiperOptions:{slidesPerView:3}}},methods:{handGo:function(t){var e=t.slideIndex;this.$root.$emit("change:slide",{slideIndex:e})}}},R=Q,X=Object(_["a"])(R,O,I,!1,null,null,null),Z=X.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"content"},[n("div",{staticClass:"content__main"},[n("vue-custom-scrollbar",{ref:"scrollbar",staticClass:"scroll-area",attrs:{id:"scrollbar",settings:t.settingsScroll},on:{"ps-y-reach-end":t.reachEnd,"ps-scroll-y":t.onScroll}},[n("swiper",{ref:"contentSwiper",attrs:{options:t.contentSwiperOptions}},[n("swiper-slide",[n("Experience")],1),n("swiper-slide",[n("Portfolio")],1),n("swiper-slide",[n("Social")],1)],1)],1)],1)])},K=[],tt=n("4b70"),et=n.n(tt),nt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",{staticClass:"experience"},[n("li",[n("h4",{staticClass:"title"},[t._v("Init")]),n("p",{staticClass:"role"},[t._v("Frontend developer"),n("span",[t._v("(2017 - Hoy)")])]),n("p",[t._v("Desarrollo de apps híbridas de salud, con Ionic, Angular8, Vue, Nuxt. Manager de equipo de UX / Front. ")])]),n("li",[n("h4",{staticClass:"title"},[t._v("Suggiero")]),n("p",{staticClass:"role"},[t._v("Frontend / UI"),n("span",[t._v("(2015 - 2017)")])]),n("p",[t._v("Diseño UX / UI y desarrollo Front de plataformas web enfocadas en apuestas deportivas. JS, Gulp, Webpack, SASS.")])]),n("li",[n("h4",{staticClass:"title"},[t._v("Diario de un videojuego")]),n("p",{staticClass:"role"},[t._v("Game developer"),n("span",[t._v("(2014 - 2015)")])]),n("p",[t._v("Fundador y redactor principal de Diario de un Videojuego (htttp://diariodeunvideojuego.es). Sigue todo el proceso de creación de un videojuego 2D para Android/IOs, desde los primeros bocetos hasta el producto final.")])]),n("li",[n("h4",{staticClass:"title"},[t._v("Seotec")]),n("p",{staticClass:"role"},[t._v("Full Stack"),n("span",[t._v("(2012 - 2014)")])]),n("p",[t._v("Desarrollo Front-End y Back-End, HTML5, CSS3, MySQL, PHP, Yii, Javascript, Backbone, JQuery, Illustrator, Photoshop. Desarrollo de aplicaciones móviles basados en tecnologías web con Phonegap, JS y HTML5.")])])])}],at=(n("5375"),{}),ot=Object(_["a"])(at,nt,it,!1,null,null,null),st=ot.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",{staticClass:"social"},[n("li",[n("input",{staticClass:"dropdown__checkbox",attrs:{type:"checkbox",id:"dropdown"},domProps:{checked:t.isMini}}),n("label",{staticClass:"link--as-button dropdown__label",attrs:{for:"dropdown"},on:{click:t.handContact}},[n("span",{staticClass:"icon-port-bubble"}),t._m(0),n("span",{staticClass:"icon-port-arrow-left dropdown__arrow"})]),t._m(1)]),n("li",[n("WhatsApp",[t._v("Whatsapp")])],1),t._m(2),t._m(3),t._m(4)])},ct=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Escríbeme a"),n("br"),n("span",{staticClass:"font-bold"},[t._v("hectorvillarm@gmail.com")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown__content",attrs:{id:"dropdown"}},[n("input",{staticStyle:{margin:"0","padding-left":"0"},attrs:{type:"text",placeholder:"Escribe tu email"}}),n("textarea",{staticStyle:{"padding-left":"0"},attrs:{placeholder:"Escribe tu mensaje",rows:"2"}}),n("button",[t._v("Enviar")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"link--as-button",attrs:{href:"https://twitter.com/zenekezene"}},[n("span",{staticClass:"icon-port-twitter"}),t._v("Twitter ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"link--as-button",attrs:{href:"https://www.linkedin.com/in/hectorvillarm/"}},[n("span",{staticClass:"icon-port-linkedin"}),t._v("Linkedin ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"link--as-button",attrs:{href:"https://www.instagram.com/zenekezene/"}},[n("span",{staticClass:"icon-port-instagram"}),t._v("Instagram ")])])}],lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"link--as-button",attrs:{href:t.apilink}},[n("span",{staticClass:"icon-port-whatsapp"}),t._t("default")],2)},pt=[],ut={isMobile:function(){var t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t}},dt={name:"WhatsApp",data:function(){return{phone:"+34685735968",apilink:"",text:""}},watch:{text:function(t){this.apilink="http://",this.apilink+=ut.isMobile()?"api":"web",this.apilink+=".whatsapp.com/send?phone="+this.phone+"&text="+encodeURI(this.text)}},created:function(){this.apilink="http://",this.apilink+=ut.isMobile()?"api":"web",this.apilink+=".whatsapp.com/send?phone="+this.phone+"&text="+encodeURI("Hola, Héctor.")}},ft=dt,mt=Object(_["a"])(ft,lt,pt,!1,null,null,null),ht=mt.exports,vt={name:"Social",components:{WhatsApp:ht},computed:Object(d["a"])({},Object(f["c"])(["isMini"])),methods:Object(d["a"])({},Object(f["b"])(["setIsMini"]),{handContact:function(){var t=this;setTimeout((function(){t.isMini||t.setIsMini({isMini:!0}),t.$root.$emit("update:swiper")}),100)}})},bt=vt,gt=(n("d783"),Object(_["a"])(bt,rt,ct,!1,null,null,null)),wt=gt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img "},expression:"{ selector: 'img '}"}],ref:"portfolio",staticClass:"portfolio",class:{"--mini":t.isMini}},t._l(t.works,(function(e,i){return n("li",{key:e.key,ref:"work-"+i,refInFor:!0,on:{click:function(e){return t.showWork(i)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.previewImage,expression:"work.previewImage"}],attrs:{lazy:"loading"}})])})),0)},xt=[],kt=(n("4de4"),n("4160"),n("d81d"),n("d3b7"),n("ac1f"),n("466d"),n("5319"),n("1276"),n("159b"),n("ddb0"),n("cb80")),Ct=kt.keys().map((function(t){return kt(t)})),St={getWorkData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;return-1===t?Ct:Ct[t]},getPreviewImage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=St.getWorkData(t).split("\n")[0];e=e.replace(/"/gi,"");var n=/src=(.*?)>/,i=e.match(n);return i?i[1]:""},mountedWorks:function(){var t=[];return kt.keys().forEach((function(e,n){var i=e.split("./")[1].split(".md")[0],a={key:i,previewImage:St.getPreviewImage(n),content:St.getWorkData(n)};t.push(a)})),t.sort((function(t,e){return parseInt(t.key)-parseInt(e.key)}))}},yt=St,jt={name:"Portfolio",computed:Object(d["a"])({},Object(f["c"])(["isMini","isExpanded"]),{works:function(){return yt.mountedWorks().filter((function(t){return t.previewImage}))}}),methods:Object(d["a"])({},Object(f["b"])(["setIsMini","setIsExpanded"]),{showWork:function(t){this.setIsMini({isMini:!0}),this.setIsExpanded({isExpanded:!0}),this.generateWork(t)},generateWork:function(t){var e=this.$refs["work-".concat(t)][0];this.$root.$emit("launch:ligth-box",{item:e,data:this.works[t]})}})},Et=jt,Ot=(n("5974"),Object(_["a"])(Et,_t,xt,!1,null,null,null)),It=Ot.exports,Mt={name:"Content",components:{vueCustomScrollbar:et.a,Experience:st,Social:wt,Portfolio:It},computed:Object(d["a"])({},Object(f["c"])(["isMini","isExpanded","currentSlide"]),{contentSwiper:function(){return this.$refs.contentSwiper.$swiper}}),data:function(){return{contentSwiperOptions:{slidesPerView:1,autoHeight:!0},settingsScroll:{maxScrollbarLength:60,suppressScrollX:!0}}},methods:Object(d["a"])({},Object(f["b"])(["setIsExpanded","setIsMini","setCurrentSlide"]),{onScroll:function(t){t.target.scrollTop>135&&!1===this.isMini&&this.setIsMini({isMini:!0}),this.claimIsVisible=!1},reachEnd:function(t){if(t.target.scrollTop>0&&!1===this.claimIsVisible)return this.claimIsVisible=!0,!1}}),mounted:function(){var t=this;this.contentSwiper.slideTo(this.currentSlide),this.$root.$on("change:slide",(function(e){var n=e.slideIndex;return t.contentSwiper.slideTo(n)})),this.$root.$on("update:swiper",(function(){t.contentSwiper.updateAutoHeight()})),this.contentSwiper.on("slideChange",(function(){t.$refs.scrollbar.$el.scrollTop=0,t.setCurrentSlide({currentSlide:t.contentSwiper.activeIndex}),t.isExpanded&&t.setIsExpanded({isExpanded:!1})}))}},$t=Mt,zt=(n("eb9f"),Object(_["a"])($t,Y,K,!1,null,null,null)),Pt=zt.exports,Tt={name:"App",components:{Glass:E,LightBox:k,Structure:Z,Content:Pt},computed:Object(d["a"])({},Object(f["c"])(["currentSlide"])),data:function(){return{claimIsVisible:!1}},mounted:function(){h()}},Dt=Tt,Ht=Object(_["a"])(Dt,p,u,!1,null,null,null),At=Ht.exports;i["default"].use(a["a"]);var Lt=[{path:"/",name:"default",component:wt},{path:"/experience",name:"experience",component:st},{path:"/networks",name:"networks",component:wt},{path:"/portfolio",name:"portfolio",component:It}],Bt=new a["a"]({mode:"history",base:"social",routes:Lt}),Wt=Bt;i["default"].use(f["a"]);var Vt=new f["a"].Store({state:{isMini:!0,isExpanded:!1,currentSlide:1},mutations:{setIsExpanded:function(t,e){var n=e.isExpanded;t.isExpanded=n},setIsMini:function(t,e){var n=e.isMini;t.isMini=n},toggleIsMini:function(t){t.isMini=!t.isMini},setCurrentSlide:function(t,e){t.currentSlide=e.currentSlide}}}),Ft=Vt,Nt=n("caf9"),qt=n("9483");Object(qt["a"])("".concat("/social/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("a7a3"),n("2fb4");i["default"].use(a["a"]),i["default"].use(s.a),i["default"].use(c.a),i["default"].use(l["a"]),i["default"].use(Nt["a"],{preLoad:1.3,error:"/img/warning.svg",loading:"/img/spinner.svg",attempt:1,listenEvents:["scroll","wheel","mousewheel","touchmove"]}),i["default"].config.productionTip=!1,new i["default"]({router:Wt,store:Ft,render:function(t){return t(At)}}).$mount("#app")},5974:function(t,e,n){"use strict";var i=n("22bd"),a=n.n(i);a.a},"68ac":function(t,e){var n="<img data-src=../../../img/portfolio/cheesekito/captura8.jpg>";t.exports=n},"68cf":function(t,e,n){"use strict";var i=n("6f33"),a=n.n(i);a.a},"6a37":function(t,e){var n="<img data-src=../../../img/portfolio/frozen.jpg> ";t.exports=n},"6f33":function(t,e,n){},"6ff1":function(t,e){var n="<img data-src=../../../img/portfolio/especialista/captura1_2.png> <h1 id=el-especialista>El Especialista</h1> <p>Videojuego 2D de temática Zombie, que aúna géneros Shoot&#39; em up y Runner. Se ha desarrollado a lo largo de 8 meses como trabajo de final de carrera de manera solitaria, con el motor Unity3D, obteniendo una calificación final de Sobresaliente.</p> <img data-src=../../../img/portfolio/especialista/captura1.png> <img data-src=../../../img/portfolio/especialista/captura3.png> <p mb-0>He llevado a cabo todos los apartados:</p> <ul> <li>Implementación en C#</li> <li>Character Design</li> <li>Artwork y fondos</li> <li>Animación 2D</li> <li>Diseño de niveles</li> <li>Documentación técnica, estudio de viabilidad / mercado</li> <li>Análisis</li> </ul> <img data-src=../../../img/portfolio/especialista/captura4.png> <div class=panel> <ul> <li>Descargar demo en Android.</li> <li>Código fuente en GitHub.</li> </ul> </div> ";t.exports=n},7327:function(t,e){var n="<img data-src=../../../img/portfolio/bichos.jpg> ";t.exports=n},"743e":function(t,e){var n="";t.exports=n},"81df":function(t,e){var n="";t.exports=n},"89fb":function(t,e){var n="<img data-src=../../../img/portfolio/moebius.jpg>";t.exports=n},"8ac3":function(t,e){var n="<img data-src=../../../img/portfolio/emprendizaje.jpg>";t.exports=n},9721:function(t,e){var n="<img data-src=../../../img/portfolio/diariode.jpg> ";t.exports=n},a35e:function(t,e,n){},a875:function(t,e,n){"use strict";var i=n("0311"),a=n.n(i);a.a},b1b7:function(t,e){var n="";t.exports=n},b68d:function(t,e){var n="<img data-src=../../../img/portfolio/bichos/bichos1.jpg> <h1 id=titulito>Titulito</h1> ";t.exports=n},b8e0:function(t,e,n){},bf17:function(t,e,n){},cb80:function(t,e,n){var i={"./10_Croniccare_work.md":"b1b7","./11_Abacus_work.md":"81df","./12_cheesekito_work.md":"68ac","./13_emprendizaje_work.md":"8ac3","./14_cafe_mercante_work.md":"4f03","./15_head_work.md":"471b","./16_moebius_work.md":"89fb","./17_barley_work.md":"51c5","./18_caracoles_work.md":"24b8","./1_elespecialista_work.md":"6ff1","./2_frozen_monkeys_work.md":"6a37","./3_bichos_work.md":"7327","./4_diariode_work.md":"9721","./5_IMQ_work.md":"0a2c","./6_IMQ_ZZ_work.md":"4277","./7_IMQ_Igurco_work.md":"cfb7","./8_Linea_directa_work.md":"f682","./9_Coronacare_work.md":"743e","./ganga_work.md":"b68d"};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id="cb80"},cfb7:function(t,e){var n="";t.exports=n},d352:function(t,e,n){"use strict";var i=n("f173"),a=n.n(i);a.a},d783:function(t,e,n){"use strict";var i=n("a35e"),a=n.n(i);a.a},eb9f:function(t,e,n){"use strict";var i=n("bf17"),a=n.n(i);a.a},f173:function(t,e,n){},f682:function(t,e){var n="";t.exports=n}});
//# sourceMappingURL=app.c624978b.js.map