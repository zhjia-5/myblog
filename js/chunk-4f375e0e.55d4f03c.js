(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f375e0e"],{"2b36":function(t,e,i){"use strict";i("6ae7")},"2c24":function(t,e,i){},4045:function(t,e,i){t.exports=i.p+"img/loading.7d26db10.svg"},"450d":function(t,e,i){"use strict";i("c8f0")},"4cd6":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"homeDom",staticClass:"home-container"},[i("ul",{staticClass:"carousel-container",style:{marginTop:t.marginTop},on:{wheel:t.handleWheel}},t._l(t.data,(function(t){return i("li",{key:t.id},[i("Carouselitem",{attrs:{bannerDate:t}})],1)})),0),i("div",{directives:[{name:"show",rawName:"v-show",value:t.index>0,expression:"index > 0"}],staticClass:"arrow arrowUp",on:{click:function(e){return t.switchTo(t.index-1)}}},[i("Icon",{attrs:{type:"arrowUp"}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.index<t.data.length-1,expression:"index < data.length - 1"}],staticClass:"arrow arrowDown",on:{click:function(e){return t.switchTo(t.index+1)}}},[i("Icon",{attrs:{type:"arrowDown"}})],1),i("ul",{staticClass:"nav-cir"},t._l(t.data,(function(e,n){return i("li",{key:e.id,ref:"cir",refInFor:!0,class:{active:n===t.index},on:{click:function(e){return t.switchTo(n)}}})})),0),t.loading?i("Loading"):t._e()],1)},s=[],a=i("1da1"),r=i("5530"),o=(i("96cf"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"carousel-item-container"},[i("div",{staticClass:"img"},[i("ImageLoader",{attrs:{placeholder:t.bannerDate.midImg,src:t.bannerDate.bigImg},on:{load:this.showWords}})],1),i("div",{ref:"title",staticClass:"title"},[t._v(t._s(t.bannerDate.title))]),i("div",{ref:"desc",staticClass:"desc"},[t._v(t._s(t.bannerDate.description))])])}),c=[],d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image-loader-container"},[t.everythingDone?t._e():i("img",{staticClass:"placeholder",attrs:{src:t.placeholder}}),i("img",{style:{opacity:t.originOpacity,transition:t.duration+"ms"},attrs:{src:t.src},on:{load:t.handleLoad}})])},l=[],h=(i("a9e3"),{props:{placeholder:{type:String,required:!0},src:{type:String,required:!0},duration:{type:Number,default:1e3}},data:function(){return{originLoaded:!1,everythingDone:!1}},computed:{originOpacity:function(){return this.originLoaded?1:0}},methods:{handleLoad:function(){var t=this;this.originLoaded=!0,setTimeout((function(){t.everythingDone=!0,t.$emit("load")}),this.duration)}}}),u=h,f=(i("450d"),i("2877")),m=Object(f["a"])(u,d,l,!1,null,"152abe4e",null),p=m.exports,g={props:["bannerDate"],components:{ImageLoader:p},data:function(){return{titleWidth:0,descWidth:0}},mounted:function(){this.titleWidth=this.$refs.title.clientWidth+100,this.descWidth=this.$refs.desc.clientWidth+100},methods:{showWords:function(){this.$refs.title.style.opacity=1,this.$refs.desc.style.opacity=1,this.$refs.title.style.width=0,this.$refs.desc.style.width=0,this.$refs.title.clientWidth,this.$refs.title.style.transition="3s",this.$refs.desc.style.transition="3s 2s",this.$refs.title.style.width=this.titleWidth+"px",this.$refs.desc.style.width=this.descWidth+"px"}}},w=g,v=(i("775d"),Object(f["a"])(w,o,c,!1,null,"7e37382a",null)),b=v.exports,y=i("d010"),x=i("781b"),$=i("2f62"),_={components:{Carouselitem:b,Icon:y["a"],Loading:x["a"]},data:function(){return{index:0,containerHeight:0,lock:!0}},computed:Object(r["a"])(Object(r["a"])({},Object($["b"])("banner",["loading","data"])),{},{marginTop:function(){return-this.index*this.containerHeight+"px"}}),created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("banner/fetchData");case 1:case"end":return e.stop()}}),e)})))()},mounted:function(){this.containerHeight=this.$refs.homeDom.clientHeight,window.addEventListener("resize",this.handleResize)},methods:{switchTo:function(t){this.index=t},handleWheel:function(t){var e=this;this.lock&&(this.lock=!1,t.deltaY<0&&0!==this.index&&this.index--,t.deltaY>0&&this.index!==this.data.length-1&&this.index++),setTimeout((function(){e.lock=!0}),300)},handleResize:function(){this.containerHeight=this.$refs.homeDom.clientHeight}},destroyed:function(){removeEventListener("resize",this.handleResize)}},D=_,C=(i("d9d6"),Object(f["a"])(D,n,s,!1,null,"56d035ad",null));e["default"]=C.exports},6692:function(t,e,i){},"6ae7":function(t,e,i){},"775d":function(t,e,i){"use strict";i("6692")},"781b":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("img",{staticClass:"loading-container",attrs:{src:t.loadingSrc,alt:"数据加载中...",title:"数据加载中..."}})},s=[],a=i("4045"),r=i.n(a),o={data:function(){return{loadingSrc:r.a}}},c=o,d=(i("2b36"),i("2877")),l=Object(d["a"])(c,n,s,!1,null,"a4515d3e",null);e["a"]=l.exports},c8f0:function(t,e,i){},d9d6:function(t,e,i){"use strict";i("2c24")}}]);
//# sourceMappingURL=chunk-4f375e0e.55d4f03c.js.map