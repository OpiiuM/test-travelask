(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],p=0,f=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"193c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAYAAAC5tzfZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADeSURBVHgBjZDPFcFAEMZn5rlwSgeiA3vg4SI6UIIOlIAKlIAK8lQgbpyS5+AqJeTCRd6O3cg/EYnvsPtmZ34zsx9CidgdmIB8AG4KFE5QzFMZBCgX6jSBHvPS9I8ptzgKgFud4jTKii3jDch1rqcBdF+w2+t+TGKvb6urG61TL081dQiY9n8CWgZI2GH8j5mauakBfGCcoDj5qRHs9qeAaJfXa0NIaEBHOcsbPlQoAQpQaFYgBl9H7W+IcJxbZwskrehO9AytdKesTjuoiphWKM5+/Hrky3ALUi4h5/ALgm9O7hIveOkAAAAASUVORK5CYII="},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("div",{staticClass:"content"},[n("div",{staticClass:"content__sidebar sidebar"},[n("v-expansion-panels",{attrs:{multiple:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[n("v-expansion-panel",[n("v-expansion-panel-header",[t._v("Поиск по странам и городам")]),n("v-expansion-panel-content",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.filt.country,expression:"filt.country"}],staticClass:"input",attrs:{type:"text",placeholder:"Введите страну, например, Россия"},domProps:{value:t.filt.country},on:{input:function(e){e.target.composing||t.$set(t.filt,"country",e.target.value)}}})])],1),n("v-expansion-panel",[n("v-expansion-panel-header",[t._v("Звезды")]),n("v-expansion-panel-content",[n("v-checkbox",{attrs:{label:"Без звезд",value:"0"},model:{value:t.filt.stars,callback:function(e){t.$set(t.filt,"stars",e)},expression:"filt.stars"}}),n("v-checkbox",{attrs:{label:"1 звезда",value:"1"},model:{value:t.filt.stars,callback:function(e){t.$set(t.filt,"stars",e)},expression:"filt.stars"}}),n("v-checkbox",{attrs:{label:"2 звезды",value:"2"},model:{value:t.filt.stars,callback:function(e){t.$set(t.filt,"stars",e)},expression:"filt.stars"}}),n("v-checkbox",{attrs:{label:"3 звезды",value:"3"},model:{value:t.filt.stars,callback:function(e){t.$set(t.filt,"stars",e)},expression:"filt.stars"}}),n("v-checkbox",{attrs:{label:"4 звезды",value:"4"},model:{value:t.filt.stars,callback:function(e){t.$set(t.filt,"stars",e)},expression:"filt.stars"}}),n("v-checkbox",{attrs:{label:"5 звезд",value:"5"},model:{value:t.filt.stars,callback:function(e){t.$set(t.filt,"stars",e)},expression:"filt.stars"}})],1)],1),n("v-expansion-panel",[n("v-expansion-panel-header",[t._v("Тип")]),n("v-expansion-panel-content",[n("v-combobox",{attrs:{items:t.items,multiple:"",chips:""},model:{value:t.filt.type,callback:function(e){t.$set(t.filt,"type",e)},expression:"filt.type"}})],1)],1),n("v-expansion-panel",[n("v-expansion-panel-header",[t._v("Цена")]),n("v-expansion-panel-content",[n("v-slider",{attrs:{"thumb-label":"",min:"0",max:"9999"},model:{value:t.filt.price,callback:function(e){t.$set(t.filt,"price",e)},expression:"filt.price"}})],1)],1)],1),n("button",{staticClass:"sidebar__btn btn",on:{click:function(e){return e.preventDefault(),t.resetFilt.apply(null,arguments)}}},[n("i",{staticClass:"fas fa-redo-alt"}),t._v(" Сбросить все фильтры ")])],1),n("div",{staticClass:"content__list list"},[t.filteredHotels.length?t._l(t.filteredHotels,(function(t,e){return n("hotel-card",{key:e,attrs:{info:t,index:e}})})):n("p",[t._v("Ничего не найдено")]),n("button",{staticClass:"list__btn btn",on:{click:function(e){return e.preventDefault(),t.showMore.apply(null,arguments)}}},[t._v(" Показать еще отели ")])],2)])])],1)},s=[],i=n("1da1"),o=n("2909"),c=(n("96cf"),n("99af"),n("4de4"),n("caad"),n("2532"),n("d3b7"),n("25f0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hotel-card"},[a("div",{staticClass:"hotel-card__preview"},[a("img",{staticClass:"hotel-card__img",attrs:{src:t.image,alt:"preview"}})]),a("div",{staticClass:"hotel-card__info"},[a("p",{staticClass:"hotel-card__city"},[t._v(t._s(t.info.address))]),a("p",{staticClass:"hotel-card__title"},[t._v(" "+t._s(t.info.name)+" ")]),a("div",{staticClass:"hotel-card__wrapper"},[a("div",{staticClass:"hotel-card__stars"},t._l(t.info.stars,(function(t){return a("img",{key:t,attrs:{src:n("193c"),alt:"star"}})})),0),a("span",{style:{display:"grid","align-items":"center"}},[t._v(t._s(t.starStatus))]),a("span",{staticClass:"hotel-card__type"},[t._v(t._s(t.info.type))])]),a("p",{staticClass:"hotel-card__description"},[t._v(" "+t._s(t.info.description)+" ")])]),a("div",{staticClass:"hotel-card__rate"},[a("div",{staticClass:"hotel-card__stat stat"},[t.info.rating?[a("div",{staticClass:"stat__top"},[a("span",[a("img",{attrs:{src:n("d489"),alt:"red_star"}}),t._v(" "+t._s(t.info.rating)+" ")]),a("span",[t._v(" "+t._s(t.ratingMark)+" ")]),a("span",[t._v(" "+t._s(t.reviewStatus)+" ")])]),a("p",{staticClass:"stat__review"},[t._v(t._s(t.info["last_review"]))])]:a("p",{style:{margin:0}},[t._v("Нет оценок.")])],2),a("div",{staticClass:"hotel-card__wrap"},[a("span",{staticClass:"hotel-card__price"},[t._v("от "+t._s(t.info["min_price"])+" ₽")]),a("button",{staticClass:"hotel-card__btn btn"},[t._v("Забронировать")])])])])}),l=[],u=(n("a9e3"),{name:"hotel-card",props:{info:{type:Object,required:!0},index:{type:Number}},data:function(){return{}},computed:{image:function(){return"https://picsum.photos/280/290?random=".concat(this.index)},starStatus:function(){return 1===this.info.stars?"".concat(this.info.stars," звезда"):this.info.stars>1&&this.info.stars<5?"".concat(this.info.stars," звезды"):"".concat(this.info.stars," звезд")},reviewStatus:function(){var t=this.info["reviews_amount"];return"".concat(t,1===t?" отзыв":t>1&&t<5?" отзыва":" отзывов")},ratingMark:function(){var t=Math.round(this.info.rating);return 5===t?"Отлично":4===t?"Хорошо":"Ужасно"}}}),p=u,f=(n("a7fe"),n("2877")),d=Object(f["a"])(p,c,l,!1,null,null,null),v=d.exports,A={name:"App",components:{HotelCard:v},data:function(){return{hotels:[],panel:[0,1,2,3],items:["Отели","Апартаменты"],filt:{country:"",stars:["4"],type:[],price:0}}},methods:{resetFilt:function(){this.filt={country:"",stars:["4"],type:[],price:0}},showMore:function(){}},computed:{filteredHotels:function(){return[].concat(Object(o["a"])(this.filteredCountry),Object(o["a"])(this.filteredStars),Object(o["a"])(this.filteredType),Object(o["a"])(this.filteredPrice))},filteredCountry:function(){var t=this;return this.hotels.filter((function(e){return e.country.toLowerCase().includes(t.filt.country.toLowerCase())}))},filteredStars:function(){var t=this;return this.hotels.filter((function(e){return t.filt.stars.includes(e.stars.toString())}))},filteredType:function(){var t=this;return this.hotels.filter((function(e){return t.filt.type.includes(e.type)}))},filteredPrice:function(){var t=this;return this.hotels.filter((function(e){return e["min_price"]>=t.filt.price}))}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("loadHotels");case 2:t.hotels=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},h=A,_=(n("5c0b"),n("6544")),m=n.n(_),b=n("7496"),y=n("ac7c"),g=n("2b5d"),x=n("cd55"),w=n("49e2"),C=n("c865"),O=n("0393"),k=n("f6c4"),j=n("ba0d"),S=Object(f["a"])(h,r,s,!1,null,null,null),B=S.exports;m()(S,{VApp:b["a"],VCheckbox:y["a"],VCombobox:g["a"],VExpansionPanel:x["a"],VExpansionPanelContent:w["a"],VExpansionPanelHeader:C["a"],VExpansionPanels:O["a"],VMain:k["a"],VSlider:j["a"]});var E=n("2f62"),I=[{name:"Marina Inn",country:"Греция",address:"Фалираки, Родос, Греция",stars:4,type:"Отель",description:"Этот 4-звездочный отель расположен в центре города. На его территории есть бассейн с террасой и сауна. Из номеров открывается вид на море или на средневековый город.",services:["Пляж","Кондиционер","Открытый бассейн","Бесплатная парковка","Бесплатный WiFi","Вид на море","Бесплатный завтрак"],min_price:2789,currency:"RUB",rating:4.5,reviews_amount:18,last_review:"Отличное расположение. Вкусный завтрак. Отдыхали с детьми - все понравилось."},{name:"Mondrian Suites",country:"Греция",address:"Фалираки, Родос, Греция",stars:5,type:"Апартаменты",description:"Из окон открывается вид на город.К услугам гостей номера-студио с балконом и чайником в 2,7 км от пляжа.",services:["Пляж","Кондиционер","Открытый бассейн","Платная парковка","Бесплатный WiFi","Вид на море"],min_price:3245.2,currency:"RUB",rating:5,reviews_amount:4,last_review:"Потрясающее место, в номере есть все необходимое. Красивый вид на море."},{name:"Sunny Appartments",country:"Греция",address:"Родос, Родос, Греция",stars:2,type:"Апартаменты",description:"Все номера и апартаменты оборудованы кондиционером и телевизором с плоским экраном. Также в распоряжении гостей тостер и чайник.",services:["Пляж","Кондиционер","Бесплатная парковка","Бесплатный WiFi"],min_price:1153,currency:"RUB",rating:2.4,reviews_amount:36,last_review:"Бассейн очень маленький. Кормят невкусно. Больше не поедем."},{name:"Super All Inclusive Hotel",country:"Греция",address:"Родос, Родос, Греция",stars:4,type:"Отель",description:"Все номера оснащены телевизором с плоским экраном. Из некоторых номеров открывается вид на море или город.",services:["Пляж","Кондиционер","Открытый бассейн","Бесплатный WiFi","Вид на море","Бесплатный завтрак"],min_price:3689,currency:"RUB",rating:4.1,reviews_amount:14,last_review:"Недалёко от пляжа и старого города, вокруг много разных магазинчиков"},{name:"Adams Hotel",country:"Греция",address:"Родос, Родос, Греция",stars:3,type:"Отель",description:"Отель расположен всего в 100 метрах от пляжа и в 5-ти минутах ходьбы от исторической части города, недалеко от всех основных достопримечательностей. Из отеля открывается вид на море. К услугам гостей спокойный открытый бассейн.",services:["Пляж","Кондиционер","Открытый бассейн","Бесплатная парковка","Бесплатный WiFi","Бесплатный завтрак"],min_price:1896,currency:"RUB",rating:0,reviews_amount:0,last_review:""}];a["a"].use(E["a"]);var R=function(){return new Promise((function(t){setTimeout((function(){t(I)}),1e3)}))},M=new E["a"].Store({state:{},getters:{},mutations:{},actions:{loadHotels:function(){return Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R();case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},modules:{}}),U=n("f309");a["a"].use(U["a"]);var H=new U["a"]({});a["a"].config.productionTip=!1,new a["a"]({store:M,vuetify:H,render:function(t){return t(B)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"8b90":function(t,e,n){},"9c0c":function(t,e,n){},a7fe:function(t,e,n){"use strict";n("8b90")},d489:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAYAAAC5tzfZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADcSURBVHgBjZDLDYJAEIb/2RjjkQ7EDrQCVxOI8WQJdmAJagXagVAB8exB7MAOpATOYhgHCA8Rwf+wu7Mz37wIDeKFNhHTFU+ekO+Hdb9CI6W2cproY9Pkph9VHpmBEBGP6tUKiLU2MICBWB3EWlVCjuDYpYt/L37YnntyjiWriW4JyL6SLOc/gUSGxLppe2zpNYhOHUAg25zJfEE5k61lDvIaw7OFJOsPElNVHAFalAOfELXMRTB4OR9+Q8C0rMqOVNbpnesV6/zZKxllyiYdRNhXWrmxNUvAXbWTN/BeVO7nulFiAAAAAElFTkSuQmCC"}});
//# sourceMappingURL=app.9132cf24.js.map