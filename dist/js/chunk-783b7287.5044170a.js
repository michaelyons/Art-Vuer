(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-783b7287"],{2484:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"artists"},[n("AmericanArtists",{attrs:{msg:"American Artists"}})],1)},a=[],r=(n("cadf"),n("551c"),n("097d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"hello"},[n("div",{staticClass:"art"},t._l(t.americanArtists,function(e){return n("article",{key:e.id,staticClass:"artist-container",on:{click:function(e){t.toggle=!0}}},[n("h2",[t._v(t._s(e.name))]),n("p",[t._v("Number of Works: "+t._s(e.artwork))]),n("button",{staticClass:"view-btn",attrs:{id:e.id},on:{click:function(e){t.select(e),t.toggle=!t.toggle}}},[t._v("View Artwork")])])})),n("div",{staticClass:"pictures"},t._l(t.uniqueArt,function(e){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.toggle,expression:"toggle"}],key:e.id,staticClass:"all-artwork-container",class:[t.uniqueArt]},[n("h2",[t._v(t._s(e.name))]),n("p",{staticClass:"art-title"},[t._v(t._s(e.title))]),n("p",[t._v(t._s(e.technique))]),n("p",[t._v(t._s(e.period))]),n("img",{staticClass:"image",attrs:{src:e.image,alt:"no images found"}})])}))])])}),c=[],s=(n("7f7f"),n("bc3a")),o=n.n(s),u=n("7eac"),l={getAmericanArtists:function(){return o.a.get("/person?q=culture:American&size=100&apikey=".concat(u["a"])).then(function(t){return t.data.records})}},f=n("ec42"),m={name:"AmericanArtists",data:function(){return{americanArtists:[],toggle:!0,uniqueArt:[]}},methods:{select:function(t){var e=this,n=t.target.id;f["a"].getSpecificArtist(n).then(function(t){var n=t.records.map(function(t){var e=t.people[0].name;return{artType:t.division,technique:t.technique,title:t.title,period:t.century,image:t.primaryimageurl,created:t.dateend,name:e}});e.uniqueArt=n}).catch(function(t){return console.log(t)})}},created:function(){var t=this;l.getAmericanArtists().then(function(e){t.americanArtists=e}).catch(function(t){return console.log(t)})},mounted:function(){var t=this;l.getAmericanArtists().then(function(e){var n=e.map(function(t){return{name:t.displayname,lifetime:t.displaydate,artwork:t.objectcount,website:t.url,id:t.id}});t.americanArtists=n}).catch(function(t){return console.log(t)})}},d=m,p=(n("ba9a"),n("2877")),v=Object(p["a"])(d,r,c,!1,null,"d5e3d2c8",null);v.options.__file="AmericanArtists.vue";var g=v.exports,A={name:"american-artists",components:{AmericanArtists:g}},h=A,_=Object(p["a"])(h,i,a,!1,null,null,null);_.options.__file="AmericanArtists.vue";e["default"]=_.exports},"7eac":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i="dc9afb20-e114-11e8-9234-6f5a1db33697"},"7f7f":function(t,e,n){var i=n("86cc").f,a=Function.prototype,r=/^\s*function ([^ (]*)/,c="name";c in a||n("9e1e")&&i(a,c,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},b83a:function(t,e,n){},ba9a:function(t,e,n){"use strict";var i=n("b83a"),a=n.n(i);a.a},ec42:function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var i=n("bc3a"),a=n.n(i),r=n("7eac");e["a"]={getSpecificArtist:function(t){return a.a.get("https://api.harvardartmuseums.org/object?person=".concat(t,"&apikey=").concat(r["a"])).then(function(t){return t.data})}}}}]);
//# sourceMappingURL=chunk-783b7287.5044170a.js.map