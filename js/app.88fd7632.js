(function(t){function e(e){for(var o,a,l=e[0],c=e[1],n=e[2],u=0,m=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&m.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,n||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],o=!0,l=1;l<s.length;l++){var c=s[l];0!==r[c]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=s[0]))}return t}var o={},r={app:0},i=[];function a(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=o,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(s,o,function(e){return t[e]}.bind(null,o));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var n=0;n<l.length;n++)e(l[n]);var d=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"193f":function(t,e,s){"use strict";var o=s("d6c6"),r=s.n(o);r.a},"1cb1":function(t,e,s){"use strict";var o=s("3e04"),r=s.n(o);r.a},"1dfb":function(t,e,s){},2484:function(t,e,s){"use strict";var o=s("f2c2"),r=s.n(o);r.a},"3e04":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col mx-auto text-center lg:w-9/12 w-11/12",attrs:{id:"app"}},[1===t.showedMenu?s("div",{staticClass:"w-screen h-screen top-0 left-0 fixed",attrs:{id:"tapar"},on:{click:t.hideNavBar}}):t._e(),s("nav-bar",{staticClass:"absolute top-0 w-11/12 lg:w-9/12"}),s("router-view",{staticClass:"mt-40"})],1)},i=[],a=s("5530"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"z-10"},[s("nav",{staticClass:"w-8/12 flex flex-col w-full"},[s("div",{staticClass:"flex flex-col w-full bg-gray-300 lg:flex-row lg:py-8"},[s("div",{staticClass:"flex flex-row justify-around items-center lg:w-4/12 md:w-full"},[s("img",{staticClass:"logo",attrs:{src:"https://via.placeholder.com/201x30"}}),s("i",{staticClass:"fas fa-bars lg:hidden",on:{click:function(e){t.showOptions=!t.showOptions}}})]),t.screenWidth>=1024||t.showOptions?s("ul",{staticClass:"flex flex-col w-full items-center lg:flex-row justify-around"},[s("li",{staticClass:"bg-gray-500 uppercase w-full lg:bg-transparent"},[s("span",{staticClass:"cursor-pointer",on:{click:t.toggleMenu}},[t._v("PRODUCTOS")])]),s("ul",{directives:[{name:"show",rawName:"v-show",value:1===t.showedMenu,expression:"showedMenu === 1"}],staticClass:"w-full lg:hidden"},[s("li",{staticClass:"flex flex-col",on:{click:function(e){return t.setProduct(1)}}},[s("span",{staticClass:"bg-gray-400"},[t._v("Photobooks")]),s("ul",{directives:[{name:"show",rawName:"v-show",value:1===t.showedProduct,expression:"showedProduct === 1"}],staticClass:"bg-gray-300 w-full"},[s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[t._v("Clasico")])],1),s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[t._v("Tradicional")])],1),s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[t._v("Premium")])],1),s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[t._v("Deluxe")])],1)])]),s("li",{staticClass:"flex flex-col",on:{click:function(e){return t.setProduct(2)}}},[s("span",{staticClass:"bg-gray-400"},[t._v("Foto Album")]),s("ul",{directives:[{name:"show",rawName:"v-show",value:2===t.showedProduct,expression:"showedProduct === 2"}],staticClass:"bg-gray-300 w-full"},[s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[t._v("Anillado")])],1),s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[t._v("Tapa Dura")])],1)])]),s("li",{staticClass:"flex flex-col",on:{click:function(e){return t.setProduct(3)}}},[s("span",{staticClass:"bg-gray-400"},[t._v("Home Decor")]),s("ul",{directives:[{name:"show",rawName:"v-show",value:3===t.showedProduct,expression:"showedProduct === 3"}],staticClass:"bg-gray-300 w-full"},[s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[t._v("Tazas")])],1),s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[t._v("Foto Cuadros")])],1),s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[t._v("Foto Calendarios")])],1)])]),s("li",{staticClass:"flex flex-col",on:{click:function(e){return t.setProduct(4)}}},[s("span",{staticClass:"bg-gray-400"},[t._v("Impresiones")]),s("ul",{directives:[{name:"show",rawName:"v-show",value:4===t.showedProduct,expression:"showedProduct === 4"}],staticClass:"bg-gray-300 w-full"},[s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[t._v("Clasicas")])],1),s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[t._v("Polaroid")])],1)])]),s("li",{staticClass:"bg-gray-400",on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[t._v("Gift Box")])],1)]),s("li",{staticClass:"bg-gray-500 uppercase w-full lg:bg-transparent",on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/promociones"}},[t._v("Promociones")])],1),s("li",{staticClass:"bg-gray-500 uppercase w-full lg:bg-transparent",on:{click:t.hideNavBar}},[t._v("PICTURE BLOG")]),s("li",{staticClass:"bg-gray-500 uppercase w-full lg:bg-transparent",on:{click:t.hideNavBar}},[t._v("Regalos")])]):t._e()]),s("div",{directives:[{name:"show",rawName:"v-show",value:1===t.showedMenu,expression:"showedMenu === 1"}],staticClass:"hidden lg:flex"},[s("ul",{staticClass:"lg:block lg:w-2/12"},[s("li",{staticClass:"cursor-pointer flex flex-col py-4 bg-gray-400 border-r border-t border-red-200 lg:flex-row",on:{click:function(e){return t.setProduct(1)}}},[s("span",{staticClass:"w-full"},[t._v("Photobooks")])]),s("li",{staticClass:"cursor-pointer flex flex-col py-4 bg-gray-400 border-r border-t border-red-200 lg:flex-row",on:{click:function(e){return t.setProduct(2)}}},[s("span",{staticClass:"w-full"},[t._v("Foto Album")])]),s("li",{staticClass:"cursor-pointer flex flex-col py-4 bg-gray-400 border-r border-t border-red-200 lg:flex-row",on:{click:function(e){return t.setProduct(3)}}},[s("span",{staticClass:"w-full"},[t._v("Home Decor")])]),s("li",{staticClass:"cursor-pointer flex flex-col py-4 bg-gray-400 border-r border-t border-red-200 lg:flex-row",on:{click:function(e){return t.setProduct(4)}}},[s("span",{staticClass:"w-full"},[t._v("Impresiones")])]),s("li",{staticClass:"cursor-pointer bg-gray-400 py-4 border-r border-t border-red-200",on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[t._v("Gift Box")])],1)]),s("div",{staticClass:"cajitas w-10/12"},[s("ul",{directives:[{name:"show",rawName:"v-show",value:1===t.showedProduct,expression:"showedProduct === 1"}],staticClass:"gap-1 bg-gray-300 w-full h-full lg:grid lg:grid-cols-2"},[s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[s("hover-card-underline",{attrs:{image:"https://via.placeholder.com/600x255",titulo:"CLASICO"}})],1)],1),s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[s("hover-card-underline",{attrs:{image:"https://via.placeholder.com/600x255",titulo:"TRADICIONAL"}})],1)],1),s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[s("hover-card-underline",{attrs:{image:"https://via.placeholder.com/600x255",titulo:"PREMIUM"}})],1)],1),s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[s("hover-card-underline",{attrs:{image:"https://via.placeholder.com/600x255",titulo:"DELUXE"}})],1)],1)]),s("ul",{directives:[{name:"show",rawName:"v-show",value:2===t.showedProduct,expression:"showedProduct === 2"}],staticClass:"gap-1 h-full bg-gray-300 w-full lg:grid lg:grid-cols-2"},[s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[s("hover-card-underline",{attrs:{image:"https://via.placeholder.com/600x460",titulo:"ANILLADO"}})],1)],1),s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[s("hover-card-underline",{attrs:{image:"https://via.placeholder.com/600x460",titulo:"TAPA DURA"}})],1)],1)]),s("ul",{directives:[{name:"show",rawName:"v-show",value:3===t.showedProduct,expression:"showedProduct === 3"}],staticClass:"gap-1 h-full bg-gray-300 w-full lg:grid lg:grid-cols-3"},[s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[s("hover-card-underline",{attrs:{image:"https://via.placeholder.com/600x460",titulo:"TAZAS"}})],1)],1),s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[s("hover-card-underline",{attrs:{image:"https://via.placeholder.com/600x460",titulo:"FOTO CUADROS"}})],1)],1),s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[s("hover-card-underline",{attrs:{image:"https://via.placeholder.com/600x460",titulo:"FOTO CALENDARIOS"}})],1)],1)]),s("ul",{directives:[{name:"show",rawName:"v-show",value:4===t.showedProduct,expression:"showedProduct === 4"}],staticClass:"h-full bg-gray-300 w-full gap-1 lg:grid lg:grid-cols-2"},[s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[s("hover-card-underline",{attrs:{image:"https://via.placeholder.com/600x460",titulo:"CLASICAS"}})],1)],1),s("li",{on:{click:t.hideNavBar}},[s("router-link",{attrs:{to:"/productos-con-diseño"}},[s("hover-card-underline",{attrs:{image:"https://via.placeholder.com/600x460",titulo:"POLAROID"}})],1)],1)])])])])])},c=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"homeImportantProduct relative w-full h-full",style:"background-image: url("+this.image+");",on:{mouseover:function(e){t.showBtn=!0},mouseleave:function(e){t.showBtn=!1}}},[s("h3",{staticClass:"float-left ml-3 mt-3",class:{underline:!0===t.showBtn}},[t._v(t._s(this.titulo))]),s("btn-hover",{directives:[{name:"show",rawName:"v-show",value:!0===t.showBtn,expression:"showBtn === true"}],staticClass:"absolute right-0 bottom-0 mr-4 mb-4",attrs:{texto1:"ver más","main-color":"blue-400","hover-color":"white",px:"10",py:"1","font-size":"sm","border-size":"2","hover-font-color":"black"}})],1)},d=[],u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"uppercase rounded-full outline-none",class:t.stringClass},[t._v(t._s(t.texto1))])},m=[],p={props:{texto1:String,mainColor:String,hoverColor:String,px:String,py:String,fontSize:String,hoverFontColor:String,borderSize:String,fontColor:String},name:"BtnHover",data:function(){return{color:"",stringClass:"bg-"+this.mainColor+" hover:bg-"+this.hoverColor+" text-"+this.fontColor+" hover:text-"+this.hoverFontColor+" px-"+this.px+" py-"+this.py+" text-"+this.fontSize+" border-"+this.hoverColor+" border-"+this.borderSize}}},v=p,f=s("2877"),h=Object(f["a"])(v,u,m,!1,null,"0ad20552",null),g=h.exports,x={components:{BtnHover:g},props:{image:String,titulo:String},name:"HoverCardUnderline",data:function(){return{showBtn:!1}}},b=x,C=Object(f["a"])(b,n,d,!1,null,"29ca520a",null),w=C.exports,_=s("2f62"),y={name:"NavBar",data:function(){return{showOptions:!1}},components:{HoverCardUnderline:w},computed:Object(a["a"])({},Object(_["c"])(["showedProduct","showedMenu","screenWidth"])),methods:Object(a["a"])(Object(a["a"])({},Object(_["b"])(["hideNavBar","toggleMenu"])),{},{setProduct:function(t){this.$store.commit("showProduct",{idProduct:t})},refreshWidth:function(t){t.isTrusted&&this.$store.commit("setScreenWidth",{})}}),created:function(){window.addEventListener("resize",this.refreshWidth)},destroyed:function(){window.removeEventListener("resize",this.refreshWidth)}},k=y,P=(s("1cb1"),Object(f["a"])(k,l,c,!1,null,"2b0f2b24",null)),O=P.exports,B={name:"App",components:{NavBar:O},computed:Object(a["a"])({},Object(_["c"])(["showedMenu"])),methods:Object(a["a"])({},Object(_["b"])(["hideNavBar"]))},N=B,E=(s("7ff8"),Object(f["a"])(N,r,i,!1,null,"2ef954b1",null)),S=E.exports,L=s("8c4f"),j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"productWidthDesign"},[s("product-description-one",{staticClass:"bg-gray-300"}),s("div",{staticClass:"flex flex-col mt-8 lg:flex-row"},[s("design-categories",{staticClass:"bg-gray-300 lg:w-2/12"}),s("div",{staticClass:"mt-2 lg:w-10/12"},[s("formats-product",{staticClass:"bg-gray-300 mb-1"}),s("design-container",{staticClass:"bg-gray-300"})],1)],1),s("carousel-product-description-two",{staticClass:"mt-6"})],1)},A=[],T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col lg:flex-row"},[t._m(0),s("div",{staticClass:"flex flex-col text-left my-4 lg:ml-4 lg:w-1/2"},[s("h2",{staticClass:"uppercase my-4 text-xl md:text-center lg:text-left"},[t._v("detalles: lorem ipsum")]),s("span",{staticClass:"text-sm my-4 md:text-center lg:text-left"},[t._v("Lorem ipsum dolor sit amet,consectetur adipisicing elit. Aliquam cupiditate dolorem doloribus consectetur adipisicing elit. Aliquam cupiditate dolorem doloribus")]),t._m(1),s("btn-hover",{staticClass:"mt-4 w-10/12 self-center lg:self-start lg:w-4/12",attrs:{texto1:"compra ya!","main-color":"white","hover-color":"blue-400",px:"4",py:"1","font-size":"sm","border-size":"2","hover-font-color":"white"}})],1)])},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lg:w-1/2 flex justify-center items-center"},[s("img",{attrs:{src:"https://via.placeholder.com/513x357"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"lista text-sm"},[s("li",{staticClass:"my-2 flex items-center"},[s("i",{staticClass:"fal fa-circle mr-2 text-blue-400"}),t._v("Lorem ipsum dolor sit amet, consectetur")]),s("li",{staticClass:"my-2 flex items-center"},[s("i",{staticClass:"fal fa-circle mr-2 text-blue-400"}),t._v("Lorem ipsum dolor sit amet, consectetur")]),s("li",{staticClass:"my-2 flex items-center"},[s("i",{staticClass:"fal fa-circle mr-2 text-blue-400"}),t._v("Lorem ipsum dolor sit amet, consectetur")]),s("li",{staticClass:"my-2 flex items-center"},[s("i",{staticClass:"fal fa-circle mr-2 text-blue-400"}),t._v("Lorem ipsum dolor sit amet, consectetur")]),s("li",{staticClass:"my-2 flex items-center"},[s("i",{staticClass:"fal fa-circle mr-2 text-blue-400"}),t._v("Lorem ipsum dolor sit amet, consectetur")]),s("li",{staticClass:"my-2 flex items-center"},[s("i",{staticClass:"fal fa-circle mr-2 text-blue-400"}),t._v("Lorem ipsum dolor sit amet, consectetur")])])}],D={name:"ProductDescriptionOne",components:{BtnHover:g}},M=D,$=(s("a2de"),Object(f["a"])(M,T,I,!1,null,"1a5570d8",null)),z=$.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex justify-center items-center flex-col lg:justify-start"},[s("h3",{staticClass:"text-xl lg:my-2"},[t._v("CATEGORÍA")]),s("p",{directives:[{name:"show",rawName:"v-show",value:!1===t.showall,expression:"showall === false"}],staticClass:"border-2 border-blue-400 rounded-full cursor-pointer lg:hidden lg:border-0 w-10/12",on:{click:function(e){t.showall=!0}}},[t._v(t._s(t.elegido)),s("i",{staticClass:"fal fa-chevron-down ml-4"})]),s("ul",{directives:[{name:"show",rawName:"v-show",value:!0===t.showall,expression:"showall === true"}],staticClass:"border-2 border-blue-400 rounded-lg flex flex-col lg:border-0 w-10/12 lg:w-full"},[s("li",{staticClass:"text-blue-400 order-1",attrs:{id:"d-0"},on:{click:function(e){return t.clicked("d-0")}}},[t._v("Todos (x)")]),s("li",{staticClass:"order-2",attrs:{id:"d-1"},on:{click:function(e){return t.clicked("d-1")}}},[t._v("Cat1 (x)")]),s("li",{staticClass:"order-2",attrs:{id:"d-2"},on:{click:function(e){return t.clicked("d-2")}}},[t._v("Cat2 (x)")]),s("li",{staticClass:"order-2",attrs:{id:"d-3"},on:{click:function(e){return t.clicked("d-3")}}},[t._v("Cat3 (x)")]),s("li",{staticClass:"order-2",attrs:{id:"d-4"},on:{click:function(e){return t.clicked("d-4")}}},[t._v("Cat4 (x)")]),s("li",{staticClass:"order-2",attrs:{id:"d-5"},on:{click:function(e){return t.clicked("d-5")}}},[t._v("Cat5 (x)")]),s("li",{staticClass:"order-2",attrs:{id:"d-6"},on:{click:function(e){return t.clicked("d-6")}}},[t._v("Cat6 (x)")]),s("li",{staticClass:"order-2",attrs:{id:"d-7"},on:{click:function(e){return t.clicked("d-7")}}},[t._v("Cat7 (x)")]),s("li",{staticClass:"order-2",attrs:{id:"d-8"},on:{click:function(e){return t.clicked("d-8")}}},[t._v("Cat8 (x)")]),s("li",{staticClass:"order-2",attrs:{id:"d-9"},on:{click:function(e){return t.clicked("d-9")}}},[t._v("Cat9 (x)")])])])},q=[],H={name:"DesignCategories",data:function(){return{anterior:"d-0",elegido:"Todos (x)",showall:window.innerWidth>=1024}},methods:{clicked:function(t){var e=document.getElementById(this.anterior);e.classList.remove("text-blue-400"),e.classList.add("text-black");var s=document.getElementById(t);s.classList.remove("text-black"),s.classList.add("text-blue-400"),this.anterior=t,this.elegido=s.innerHTML,window.innerWidth<1024&&(e.classList.remove("order-1"),e.classList.add("order-2"),s.classList.remove("order-2"),s.classList.add("order-1"),this.showall=!1)}}},W=H,F=(s("8322"),Object(f["a"])(W,R,q,!1,null,"b034ddb2",null)),U=F.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid lg:grid-cols-2"},[s("card-diseno"),s("card-diseno"),s("card-diseno"),s("card-diseno"),s("card-diseno"),s("card-diseno"),s("card-diseno"),s("card-diseno"),s("card-diseno"),s("card-diseno")],1)},G=[],J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cardDis flex flex-col py-4 px-2 justify-center items-center",on:{mouseover:function(e){t.showPedir=!0},mouseleave:function(e){t.showPedir=!1}}},[s("div",[s("div",{staticClass:"relative"},[s("span",{staticClass:"p-2 bg-yellow-400 absolute top-0 right-0 mx-3 my-3 rounded-full p-1 text-xs"},[t._v("RECOMENDACIÓN")]),s("img",{attrs:{src:"https://via.placeholder.com/480x238"}}),s("btn-hover",{directives:[{name:"show",rawName:"v-show",value:!0===t.showPedir,expression:"showPedir === true"}],staticClass:"centrar self-center",attrs:{texto1:"PEDIR AHORA","main-color":"white","hover-color":"blue-400",px:"4",py:"1","font-size":"sm","border-size":"2","hover-font-color":"white"}})],1)]),s("span",{staticClass:"mt-4"},[t._v("NOMBRE DISEÑO")])])},V=[],Z={name:"CardDiseno",components:{BtnHover:g},data:function(){return{showPedir:!1}},methods:{}},K=Z,Q=(s("193f"),Object(f["a"])(K,J,V,!1,null,"6096abc6",null)),Y=Q.exports,tt={name:"DesignContainer",components:{CardDiseno:Y}},et=tt,st=Object(f["a"])(et,X,G,!1,null,"c99ed9ce",null),ot=st.exports,rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"formats flex flex-col py-5 justify-center items-center lg:flex-row"},[s("h3",{staticClass:"mr-3 mb-4 text-xl lg:mb-0"},[t._v("FORMATO")]),s("div",{staticClass:"icons grid grid-cols-3 gap-4 w-full lg:flex"},[s("div",{staticClass:"icono text-blue-400 lg:border-l lg:border-gray-400 lg:px-4 lg:mx-2",attrs:{id:"f-1"},on:{click:function(e){return t.clicked("f-1")}}},[s("p",{staticClass:"text-xl"},[t._v("icono")]),s("span",{staticClass:"text-sm"},[t._v("Lorem")])]),s("div",{staticClass:"icono lg:border-l lg:border-gray-400 lg:px-4 lg:mx-2",attrs:{id:"f-2"},on:{click:function(e){return t.clicked("f-2")}}},[s("p",{staticClass:"text-xl"},[t._v("icono")]),s("span",{staticClass:"text-sm"},[t._v("Lorem")])]),s("div",{staticClass:"icono lg:border-l lg:border-gray-400 lg:px-4 lg:mx-2",attrs:{id:"f-3"},on:{click:function(e){return t.clicked("f-3")}}},[s("p",{staticClass:"text-xl"},[t._v("icono")]),s("span",{staticClass:"text-sm"},[t._v("Lorem")])]),s("div",{staticClass:"icono lg:border-l lg:border-gray-400 lg:px-4 lg:mx-2",attrs:{id:"f-4"},on:{click:function(e){return t.clicked("f-4")}}},[s("p",{staticClass:"text-xl"},[t._v("icono")]),s("span",{staticClass:"text-sm"},[t._v("Lorem")])]),s("div",{staticClass:"icono lg:border-l lg:border-gray-400 lg:px-4 lg:mx-2",attrs:{id:"f-5"},on:{click:function(e){return t.clicked("f-5")}}},[s("p",{staticClass:"text-xl"},[t._v("icono")]),s("span",{staticClass:"text-sm"},[t._v("Lorem")])]),s("div",{staticClass:"icono lg:border-l lg:border-gray-400 lg:px-4 lg:mx-2",attrs:{id:"f-6"},on:{click:function(e){return t.clicked("f-6")}}},[s("p",{staticClass:"text-xl"},[t._v("icono")]),s("span",{staticClass:"text-sm"},[t._v("Lorem")])]),s("div",{staticClass:"icono lg:border-l lg:border-gray-400 lg:px-4 lg:mx-2",attrs:{id:"f-7"},on:{click:function(e){return t.clicked("f-7")}}},[s("p",{staticClass:"text-xl"},[t._v("icono")]),s("span",{staticClass:"text-sm"},[t._v("Lorem")])])])])},it=[],at={name:"FormatsProduct",data:function(){return{anterior:"f-1",showall:window.innerWidth>=1024}},methods:{clicked:function(t){var e=document.getElementById(this.anterior);e.classList.remove("text-blue-400"),e.classList.add("text-black");var s=document.getElementById(t);s.classList.remove("text-black"),s.classList.add("text-blue-400"),this.anterior=t}}},lt=at,ct=Object(f["a"])(lt,rt,it,!1,null,"282615b4",null),nt=ct.exports,dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"flex flex-col lg:flex-row"},[s("div",{staticClass:"px-8 py-4 uppercase bg-blue-400 cursor-pointer",attrs:{id:"c-p-d-0"},on:{click:function(e){return t.$refs.carousel.goTo(0)}}},[t._v("Saber Mas")]),s("div",{staticClass:"px-8 py-4 uppercase cursor-pointer bg-gray-400",attrs:{id:"c-p-d-1"},on:{click:function(e){return t.$refs.carousel.goTo(1)}}},[t._v("¿Como hago mi pedido?")]),s("div",{staticClass:"px-8 py-4 uppercase cursor-pointer bg-gray-400",attrs:{id:"c-p-d-2"},on:{click:function(e){return t.$refs.carousel.goTo(2)}}},[t._v("Un Tercero")])]),s("agile",{ref:"carousel",staticClass:"bg-gray-300",attrs:{dots:!1,autoplay:!1,infinite:!1,"nav-buttons":!1,"mobile-first":!0},on:{"before-change":function(e){return t.showEvent(e)}}},[s("div",{staticClass:"slide"},[s("div",{staticClass:"flex flex-col lg:flex-row"},[s("div",{staticClass:"flex flex-col items-start p-4 lg:w-1/2"},[s("h4",{staticClass:"capitalize text-left text-md"},[t._v("Categoria")]),s("h3",{staticClass:"capitalize text-left text-2xl font-bold mb-4"},[t._v("Producto")]),s("p",{staticClass:"text-left mb-2"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores cumque explicabo harum libero officiis quia, unde! Cumque, delectus deserunt eum ex ipsum, iusto laudantium maxime modi, mollitia reiciendis voluptatum?")]),s("p",{staticClass:"text-left mb-4"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam culpa deserunt dolores earum in, laboriosam non possimus repellat sed? Adipisci, deleniti dolore eos nulla officia qui quis quisquam velit?")]),s("btn-hover",{staticClass:"mt-4",attrs:{texto1:"compra ya!","main-color":"white","hover-color":"blue-400",px:"4",py:"1","font-size":"sm","border-size":"2","hover-font-color":"white"}})],1),s("div",{staticClass:"flex justify-center items-center py-2 lg:w-1/2"},[s("img",{attrs:{src:"https://via.placeholder.com/504x370"}})])])]),s("div",{staticClass:"slide"},[s("div",{staticClass:"flex"},[s("p",{staticClass:"text-6xl"},[t._v("aca va como hago mi pedido, no se como lo quieres por eso lo dejo asi :v")])])]),s("div",{staticClass:"slide"},[s("div",{staticClass:"flex"},[s("p",{staticClass:"text-6xl"},[t._v("aca va una tercera cosa que no me acuerdo, no se como lo quieres por eso lo dejo asi :v")])])])])],1)},ut=[],mt={name:"CarouselProductDescriptionTwo",components:{BtnHover:g},methods:{showEvent:function(t){var e=document.getElementById("c-p-d-"+t.currentSlide),s=document.getElementById("c-p-d-"+t.nextSlide);e.classList.remove("bg-blue-400"),e.classList.add("bg-gray-400"),s.classList.remove("bg-gray-400"),s.classList.add("bg-blue-400")}}},pt=mt,vt=Object(f["a"])(pt,dt,ut,!1,null,"f4d75f56",null),ft=vt.exports,ht={name:"ProductWithDesign",components:{CarouselProductDescriptionTwo:ft,FormatsProduct:nt,DesignContainer:ot,DesignCategories:U,ProductDescriptionOne:z}},gt=ht,xt=Object(f["a"])(gt,j,A,!1,null,"6aaff0e4",null),bt=xt.exports,Ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"py-8 w-full text-xl bg-gray-300"},[t._v("COMPRA AHORA SI NO MORIREMOS DE HAMBRE :'V")]),s("icon-promos"),s("div",{staticClass:"grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3"},[s("card-promociones",{staticClass:"bg-gray-300"}),s("card-promociones",{staticClass:"bg-gray-300"}),s("card-promociones",{staticClass:"bg-gray-300"}),s("card-promociones",{staticClass:"bg-gray-300"}),s("card-promociones",{staticClass:"bg-gray-300"}),s("card-promociones",{staticClass:"bg-gray-300"}),s("card-promociones",{staticClass:"bg-gray-300"}),s("card-promociones",{staticClass:"bg-gray-300"}),s("card-promociones",{staticClass:"bg-gray-300"}),s("card-promociones",{staticClass:"bg-gray-300"}),s("card-promociones",{staticClass:"bg-gray-300"}),s("card-promociones",{staticClass:"bg-gray-300"})],1),t._m(0),s("div",{staticClass:"aprovecharPromo bg-gray-300 mt-8"})],1)},wt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"infoExtra flex flex-col bg-gray-300 px-8 py-4 mt-8 md:flex-row md:justify-around md:items-center"},[s("h3",{staticClass:"uppercase text-lg my-4 md:my-0"},[t._v("INFO EXTRA")]),s("div",{staticClass:"element text-left flex mb-4 md:mb-0"},[s("p",{staticClass:"mr-8 text-blue-300"},[t._v("icon")]),s("div",{staticClass:"flex flex-col"},[s("span",[t._v("Entrega desde:")]),s("span",{staticClass:"font-bold"},[t._v("S/.7.50")])])]),s("div",{staticClass:"element text-left flex mb-4 md:mb-0"},[s("p",{staticClass:"mr-8 text-blue-300"},[t._v("icon")]),s("div",{staticClass:"flex flex-col"},[s("span",[t._v("Plazo de realizacion:")]),s("span",{staticClass:"font-bold"},[t._v("9-10 dias habiles")])])]),s("div",{staticClass:"element text-left flex"},[s("p",{staticClass:"mr-8 text-blue-300"},[t._v("icon")]),s("div",{staticClass:"flex flex-col"},[s("span",[t._v("Oferta valida hasta:")]),s("span",{staticClass:"font-bold"},[t._v("dd.mm.aaaa")])])])])}],_t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icons grid grid-cols-3 gap-4 w-full mt-8 bg-gray-300 lg:grid-cols-6 lg:gap-0"},[s("div",{staticClass:"icono text-blue-400 border-b-2 border_blue_bottom",attrs:{id:"i-p-1"},on:{click:function(e){return t.clicked("i-p-1")}}},[s("p",{staticClass:"text-xl"},[t._v("icono")]),s("span",{staticClass:"text-sm"},[t._v("Todos")])]),s("div",{staticClass:"icono lg:border-l lg:border-gray-400 ",attrs:{id:"i-p-2"},on:{click:function(e){return t.clicked("i-p-2")}}},[s("p",{staticClass:"text-xl"},[t._v("icono")]),s("span",{staticClass:"text-sm"},[t._v("Photobooks")])]),s("div",{staticClass:"icono lg:border-l lg:border-gray-400 ",attrs:{id:"i-p-3"},on:{click:function(e){return t.clicked("i-p-3")}}},[s("p",{staticClass:"text-xl"},[t._v("icono")]),s("span",{staticClass:"text-sm"},[t._v("Foto Album")])]),s("div",{staticClass:"icono lg:border-l lg:border-gray-400 ",attrs:{id:"i-p-4"},on:{click:function(e){return t.clicked("i-p-4")}}},[s("p",{staticClass:"text-xl"},[t._v("icono")]),s("span",{staticClass:"text-sm"},[t._v("Home Decor")])]),s("div",{staticClass:"icono lg:border-l lg:border-gray-400 ",attrs:{id:"i-p-5"},on:{click:function(e){return t.clicked("i-p-5")}}},[s("p",{staticClass:"text-xl"},[t._v("icono")]),s("span",{staticClass:"text-sm"},[t._v("Impresiones")])]),s("div",{staticClass:"icono lg:border-l lg:border-gray-400 ",attrs:{id:"i-p-6"},on:{click:function(e){return t.clicked("i-p-6")}}},[s("p",{staticClass:"text-xl"},[t._v("icono")]),s("span",{staticClass:"text-sm"},[t._v("Gift Box")])])])},yt=[],kt={name:"IconPromos",data:function(){return{anterior:"i-p-1",showall:window.innerWidth>=1024}},methods:{clicked:function(t){var e=document.getElementById(this.anterior);e.classList.remove("text-blue-400"),e.classList.remove("border-b-2"),e.classList.remove("border_blue_bottom"),e.classList.add("text-black");var s=document.getElementById(t);s.classList.remove("text-black"),s.classList.add("text-blue-400"),s.classList.add("border-b-2"),s.classList.add("border_blue_bottom"),this.anterior=t}}},Pt=kt,Ot=(s("fa5b"),Object(f["a"])(Pt,_t,yt,!1,null,"3651c6c4",null)),Bt=Ot.exports,Nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cardPromo flex flex-col justify-center items-center self-center w-full"},[s("span",{staticClass:"self-start px-8 bg-red-600 py-1 rounded-r-full text-white"},[t._v("X%")]),s("h3",{staticClass:"capitalize text-2xl font-semibold my-2"},[t._v("Titulo Producto")]),s("span",{staticClass:"capitalize mb-2"},[t._v("Cantidad")]),s("img",{attrs:{src:"https://via.placeholder.com/361x255"}}),t._m(0),s("btn-hover",{staticClass:"mt-4 mb-12",attrs:{texto1:"compra ya!","main-color":"blue-400","hover-color":"white",px:"10",py:"1","font-size":"sm","border-size":"2","hover-font-color":"black"}}),s("div",{staticClass:"w-full flex"},[s("icono-text",{staticClass:"h-10 w-1/2",attrs:{texto1:"Texto 1",texto2:"Texto 2","type-icon":"fab",icon:"fa-vuejs"}}),s("icono-text",{staticClass:"h-10 w-1/2",attrs:{texto1:"Texto 1",texto2:"Texto 2","type-icon":"fab",icon:"fa-vuejs"}})],1)],1)},Et=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"block my-2"},[s("span",{staticClass:"mr-3 text-3xl font-bold"},[t._v("S/.XX.XX")]),s("span",{staticClass:"ml-3 text-sm line-through"},[t._v("S/.XX.XX")])])}],St=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"iconText bg-red-500 flex items-center justify-center",class:{"bg-blue-200":!0===t.showPedir},on:{mouseover:function(e){t.showPedir=!0},mouseleave:function(e){t.showPedir=!1}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:!1===t.showPedir,expression:"showPedir === false"}],class:t.typeIcon+" "+t.icon}),s("div",{directives:[{name:"show",rawName:"v-show",value:!0===t.showPedir,expression:"showPedir === true"}],staticClass:"flex flex-col"},[s("span",{staticClass:"text-xs font-hairline"},[t._v(t._s(t.texto1))]),s("span",{staticClass:"text-sm font-light"},[t._v(t._s(t.texto2))])])])},Lt=[],jt={name:"IconoText",props:{texto1:String,texto2:String,typeIcon:String,icon:String},data:function(){return{showPedir:!1}}},At=jt,Tt=Object(f["a"])(At,St,Lt,!1,null,"3bbcd9ee",null),It=Tt.exports,Dt={name:"CardPromociones",components:{BtnHover:g,IconoText:It}},Mt=Dt,$t=(s("cd7c"),Object(f["a"])(Mt,Nt,Et,!1,null,"d6a4dbbe",null)),zt=$t.exports,Rt={name:"Promociones",components:{CardPromociones:zt,IconPromos:Bt}},qt=Rt,Ht=Object(f["a"])(qt,Ct,wt,!1,null,"044082d5",null),Wt=Ht.exports,Ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"productsWithCards"},[s("product-description-one")],1)},Ut=[],Xt={name:"ProductWithCards",components:{ProductDescriptionOne:z}},Gt=Xt,Jt=Object(f["a"])(Gt,Ft,Ut,!1,null,"78a78f10",null),Vt=Jt.exports,Zt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("agile",{attrs:{"nav-buttons":!1,autoplay:!0}},[s("div",{staticClass:"slide"},[s("slide-main")],1),s("div",{staticClass:"slide"},[s("slide-main")],1),s("div",{staticClass:"slide"},[s("slide-main")],1)]),s("div",{staticClass:"bg-gray-300 mt-4"},[s("h2",{staticClass:"uppercase"},[t._v("LOS MAS VENDIDOS")]),s("div",{staticClass:"grid grid-cols-1 mv gap-3 lg:grid-cols-3 md:grid-cols-2"},[s("hover-card-underline",{staticClass:"lg:col-span-2",attrs:{titulo:"El mas vendido 1",image:"https://via.placeholder.com/730x390"}}),s("hover-card-underline",{attrs:{titulo:"El mas vendido 2",image:"https://via.placeholder.com/730x390"}}),s("hover-card-underline",{staticClass:"hidden md:block",attrs:{titulo:"El mas vendido 3",image:"https://via.placeholder.com/730x390"}}),s("hover-card-underline",{staticClass:"hidden lg:col-span-2 md:block",attrs:{titulo:"El mas vendido 4",image:"https://via.placeholder.com/730x390"}})],1)]),s("div",{staticClass:"miniBanner w-full bg-gray-300 mt-4"},[t._v("FUTOS GRATIS SUSCRIBETE")]),s("div",{staticClass:"sobreNosotros bg-gray-400 mt-4"},[s("h3",[t._v("SOBRE NOSOTROS")]),s("agile",{attrs:{"nav-buttons":!1,autoplay:!0}},[s("div",{staticClass:"slide"},[s("card-sobre-nosotros")],1),s("div",{staticClass:"slide"},[s("card-sobre-nosotros")],1),s("div",{staticClass:"slide"},[s("card-sobre-nosotros")],1),s("div",{staticClass:"slide"},[s("card-sobre-nosotros")],1)])],1)],1)},Kt=[],Qt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slideMain flex flex-col justify-center items-center",staticStyle:{"background-image":"url('https://via.placeholder.com/1210x540')"}},[s("div",{staticClass:"flex flex-col items-center"},[s("h3",{staticClass:"text-5xl font-bold uppercase my-2"},[t._v("titulo")]),s("span",{staticClass:"text-xl my-4"},[t._v("texto pequeño")]),s("btn-hover",{staticClass:"my-4",attrs:{texto1:"comprobar","main-color":"blue-400","hover-color":"white",px:"10",py:"2","font-size":"md","border-size":"2","hover-font-color":"black"}})],1)])},Yt=[],te={name:"SlideMain",components:{BtnHover:g}},ee=te,se=(s("b076"),Object(f["a"])(ee,Qt,Yt,!1,null,"601cfada",null)),oe=se.exports,re=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ie=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cardSobreNosotros flex flex-col md:relative md:my-20 md:flex-row"},[s("div",{staticClass:"bg-gray-300 md:w-2/3 sm:w-full"},[s("div",{staticClass:"md:w-7/12"},[s("div",{staticClass:"texto mx-10 my-2 md:text-left"},[s("h3",{staticClass:"text-3xl font-semibold md:my-4"},[t._v("TITULO")]),s("p",{staticClass:"mt-4 text-sm"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias aperiamcumque deleniti, dolorem eius facere fugiat harum labore libero modi, neque nihil non odit omnis quaerat quibusdam temporibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores culpa ipsum minima. A accusamus accusantium adipisci animi architecto commodi corporis, dolorum earum ipsum nulla reprehenderit voluptas. Eaque, earum, quibusdam.lorem")])])])]),s("img",{staticClass:"order-first md:w-7/12 md:h-full md:absolute md:right-0 sm:w-full",attrs:{src:"https://via.placeholder.com/750x450"}})])}],ae={name:"CardSobreNosotros"},le=ae,ce=(s("2484"),Object(f["a"])(le,re,ie,!1,null,"c40eafe0",null)),ne=ce.exports,de={name:"Home",components:{CardSobreNosotros:ne,HoverCardUnderline:w,SlideMain:oe}},ue=de,me=(s("f890"),Object(f["a"])(ue,Zt,Kt,!1,null,"59c79e30",null)),pe=me.exports;o["a"].use(L["a"]);var ve=[{path:"/productos-con-diseño",name:"productosConDiseño",component:bt},{path:"/promociones",name:"Promociones",component:Wt},{path:"/productos-con-cards",name:"ProductosConCard",component:Vt},{path:"/",name:"Home",component:pe}],fe=new L["a"]({mode:"history",base:"/",routes:ve}),he=fe,ge=(s("ba8c"),s("f7ab"));o["a"].use(_["a"]);var xe=new _["a"].Store({state:{showedProduct:1,showedMenu:0,screenWidth:window.screen.width},mutations:{toggleMenu:function(t){t.showedMenu=++t.showedMenu%2},hideNavBar:function(t){t.showedMenu=0,t.showedProduct=1},showProduct:function(t,e){t.showedProduct=e.idProduct},setScreenWidth:function(t){t.screenWidth=window.screen.width}}}),be=xe;o["a"].use(ge["a"]),o["a"].config.productionTip=!1,new o["a"]({router:he,render:function(t){return t(S)},store:be}).$mount("#app")},"7ff8":function(t,e,s){"use strict";var o=s("e705"),r=s.n(o);r.a},8322:function(t,e,s){"use strict";var o=s("1dfb"),r=s.n(o);r.a},8915:function(t,e,s){},a2de:function(t,e,s){"use strict";var o=s("b49b"),r=s.n(o);r.a},b076:function(t,e,s){"use strict";var o=s("b5c8"),r=s.n(o);r.a},b2e0:function(t,e,s){},b49b:function(t,e,s){},b5c8:function(t,e,s){},b78d:function(t,e,s){},ba8c:function(t,e,s){},cd7c:function(t,e,s){"use strict";var o=s("b78d"),r=s.n(o);r.a},d6c6:function(t,e,s){},e705:function(t,e,s){},f2c2:function(t,e,s){},f890:function(t,e,s){"use strict";var o=s("b2e0"),r=s.n(o);r.a},fa5b:function(t,e,s){"use strict";var o=s("8915"),r=s.n(o);r.a}});
//# sourceMappingURL=app.88fd7632.js.map