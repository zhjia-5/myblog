(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cb2ee00"],{"05e0":function(t,e,n){"use strict";n("cccb")},"18dd":function(t,e,n){"use strict";n("2bd6")},"2b36":function(t,e,n){"use strict";n("6ae7")},"2bd6":function(t,e,n){},4045:function(t,e,n){t.exports=n.p+"img/loading.7d26db10.svg"},"4cf6":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-container",attrs:{id:"comment-container"}},[n("form",{staticClass:"fromData",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(t.formData)}}},[n("div",{staticClass:"nickname"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.nickname,expression:"formData.nickname"}],class:{redBoreder:t.nicknameEmpty},attrs:{type:"text",maxlength:"10",placeholder:"用户昵称"},domProps:{value:t.formData.nickname},on:{input:function(e){e.target.composing||t.$set(t.formData,"nickname",e.target.value)}}}),n("span",[t._v(t._s(t.formData.nickname.length)+"/10")])]),n("Transition",{attrs:{name:"error"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.nicknameEmpty,expression:"nicknameEmpty"}],staticClass:"error"},[t._v("请输入昵称!")])]),n("div",{staticClass:"content"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.content,expression:"formData.content"}],class:{redBoreder:t.contentEmpty},attrs:{maxlength:"300",rows:"4",cols:"80",placeholder:"输入内容"},domProps:{value:t.formData.content},on:{input:function(e){e.target.composing||t.$set(t.formData,"content",e.target.value)}}}),n("span",[t._v(t._s(t.formData.content.length)+"/300")])]),n("Transition",{attrs:{name:"error"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.contentEmpty,expression:"contentEmpty"}],staticClass:"error"},[t._v("请输入内容!")])]),n("button",{class:{disable:!t.isDisable},attrs:{type:"submit",disabled:!t.isDisable}},[t._v(" "+t._s(t.isDisable?"提 交":"提 交 中 ...")+" ")])],1),n("div",{staticClass:"comment"},[n("h3",{staticClass:"title"},[t._v(t._s(t.title))]),n("span",{staticClass:"number"},[t._v("("+t._s(t.commentCount)+")")]),n("ul",t._l(t.list,(function(e){return n("li",{key:e.id},[n("Avatar",{attrs:{width:50,height:50,url:e.avatar}}),n("div",{staticClass:"data"},[n("div",{staticClass:"nickname"},[t._v(t._s(e.nickname))]),n("div",{staticClass:"createTime"},[t._v(" "+t._s(t.formatDate(e.createDate,!0))+" ")]),n("div",{staticClass:"content"},[t._v(t._s(e.content))])])],1)})),0),n("div",{staticClass:"loading-div"},[t.isLoading?n("Loading"):t._e()],1)])])},r=[],s=n("1da1"),i=(n("96cf"),n("a9e3"),n("77c0")),o=n("ed08"),c=n("781b"),u={components:{Avatar:i["a"],Loading:c["a"]},props:{title:{type:String,default:""},commentCount:{type:Number,default:0},list:{type:Array,default:function(){return[]}},isLoading:{type:Boolean,default:!1}},data:function(){return{formData:{nickname:"",content:""},nicknameEmpty:!1,contentEmpty:!1,isDisable:!0}},methods:{formatDate:o["c"],handleSubmit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.nicknameEmpty=""===t.formData.nickname,t.contentEmpty=""===t.formData.content,t.formData.nickname&&t.formData.content&&(t.isDisable=!1,t.$emit("submit",t.formData,(function(){t.isDisable=!0,t.formData.content=""})));case 3:case"end":return e.stop()}}),e)})))()}}},l=u,m=(n("05e0"),n("2877")),d=Object(m["a"])(l,a,r,!1,null,"9fc7ee04",null);e["a"]=d.exports},"60a4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"messageContainer",staticClass:"message",on:{scroll:t.handleScroll}},[t.data?t._e():n("Loading"),t.data?n("Comment",{attrs:{title:"留言板",commentCount:t.data.total,list:t.data.rows,isLoading:t.loadingMore},on:{submit:t.handleSubmit}}):t._e(),t.data?n("div",{staticClass:"no-more-comment"},[t._v(t._s(t.hasMore?"加载更多评论中...":"已没有更多评论"))]):t._e()],1)},r=[],s=n("1da1"),i=(n("99af"),n("96cf"),n("4cf6")),o=n("781b"),c=n("ed08"),u=n("0c6d");function l(){return m.apply(this,arguments)}function m(){return m=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n,a=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,n=a.length>1&&void 0!==a[1]?a[1]:10,t.next=4,u["a"].get("/api/message",{params:{page:e,limit:n}});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}function d(t){return f.apply(this,arguments)}function f(){return f=Object(s["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].post("/api/message",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}var p=n("eb98"),h={mixins:[Object(p["a"])("messageContainer")],components:{Loading:o["a"],Comment:i["a"]},data:function(){return{data:null,loadingMore:!1,page:1}},computed:{hasMore:function(){if(this.data)return this.data.rows.length<this.data.total}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l(t.page,t.limit);case 2:t.data=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{handleSubmit:function(t,e){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,d(t);case 2:r=a.sent,n.data.rows.unshift(r),e(),n.data.total++,Object(c["a"])({content:"感谢留言！",type:"success",container:n.$refs.messageContainer});case 7:case"end":return a.stop()}}),a)})))()},handleScroll:function(){var t=this.$refs.messageContainer,e=t.scrollHeight-(t.clientHeight+t.scrollTop);e<50&&t&&!this.loadingMore&&this.loadMoreComment()},loadMoreComment:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.hasMore){e.next=2;break}return e.abrupt("return");case 2:return t.page++,t.loadingMore=!0,e.next=6,l(t.page,10);case 6:n=e.sent,t.data.rows=t.data.rows.concat(n.rows),t.loadingMore=!1;case 9:case"end":return e.stop()}}),e)})))()}}},v=h,g=(n("18dd"),n("2877")),b=Object(g["a"])(v,a,r,!1,null,"0e2167c7",null);e["default"]=b.exports},"6ae7":function(t,e,n){},"781b":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"loading-container",attrs:{src:t.loadingSrc,alt:"数据加载中...",title:"数据加载中..."}})},r=[],s=n("4045"),i=n.n(s),o={data:function(){return{loadingSrc:i.a}}},c=o,u=(n("2b36"),n("2877")),l=Object(u["a"])(c,a,r,!1,null,"a4515d3e",null);e["a"]=l.exports},cccb:function(t,e,n){},eb98:function(t,e,n){"use strict";e["a"]=function(t){return{mounted:function(){this.$bus.$on("toTopScroll",this.handleToTop),this.$refs[t].addEventListener("scroll",this.handleMainScroll)},methods:{handleToTop:function(e){this.$refs[t]&&(this.$refs[t].scrollTop=e)},handleMainScroll:function(){this.$bus.$emit("mainScroll",this.$refs[t])}},beforeDestroy:function(){this.$bus.$emit("mainScroll",null),this.$bus.$off("toTopScroll",this.handleToTop),this.$refs[t].removeEventListener("scroll",this.handleMainScroll)}}}}}]);
//# sourceMappingURL=chunk-1cb2ee00.9cfdbfe0.js.map