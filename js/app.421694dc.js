(function(t){function n(n){for(var a,o,i=n[0],r=n[1],l=n[2],p=0,u=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&u.push(c[o][0]),c[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);d&&d(n);while(u.length)u.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],a=!0,o=1;o<e.length;o++){var i=e[o];0!==c[i]&&(a=!1)}a&&(s.splice(n--,1),t=r(r.s=e[0]))}return t}var a={},o={app:0},c={app:0},s=[];function i(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-11924bc4":"7359bf36","chunk-149717ca":"21a838d9","chunk-1c9954db":"fb42f807","chunk-4f375e0e":"55d4f03c","chunk-6528edb8":"4add5dbe","chunk-67e174e5":"a307a37c","chunk-6b1eb58f":"8b4ccd83"}[t]+".js"}function r(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.e=function(t){var n=[],e={"chunk-11924bc4":1,"chunk-149717ca":1,"chunk-1c9954db":1,"chunk-4f375e0e":1,"chunk-6528edb8":1,"chunk-67e174e5":1,"chunk-6b1eb58f":1};o[t]?n.push(o[t]):0!==o[t]&&e[t]&&n.push(o[t]=new Promise((function(n,e){for(var a="css/"+({}[t]||t)+"."+{"chunk-11924bc4":"002a2160","chunk-149717ca":"4930e454","chunk-1c9954db":"a0d1fa25","chunk-4f375e0e":"c4db09a7","chunk-6528edb8":"73ad4730","chunk-67e174e5":"b080f6a9","chunk-6b1eb58f":"6c8b6f9f"}[t]+".css",c=r.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],p=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(p===a||p===c))return n()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],p=l.getAttribute("data-href");if(p===a||p===c)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var a=n&&n.target&&n.target.src||c,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete o[t],d.parentNode.removeChild(d),e(s)},d.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){o[t]=0})));var a=c[t];if(0!==a)if(a)n.push(a[2]);else{var s=new Promise((function(n,e){a=c[t]=[n,e]}));n.push(a[2]=s);var l,p=document.createElement("script");p.charset="utf-8",p.timeout=120,r.nc&&p.setAttribute("nonce",r.nc),p.src=i(t);var u=new Error;l=function(n){p.onerror=p.onload=null,clearTimeout(d);var e=c[t];if(0!==e){if(e){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,e[1](u)}c[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:p})}),12e4);p.onerror=p.onload=l,document.head.appendChild(p)}return Promise.all(n)},r.m=t,r.c=a,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)r.d(e,a,function(n){return t[n]}.bind(null,a));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/myblog/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=n,l=l.slice();for(var u=0;u<l.length;u++)n(l[u]);var d=p;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0a4d":function(t,n,e){t.exports=e.p+"img/2_1.5a4aef67.jpg"},"0c6d":function(t,n,e){"use strict";var a=e("bc3a"),o=e.n(a),c=e("4400"),s=o.a.create();s.interceptors.response.use((function(t){return 0!==t.data.code?(Object(c["a"])({content:t.data.msg,type:"error",duration:1500}),null):t.data.data})),n["a"]=s},1189:function(t,n,e){t.exports=e.p+"img/03.8f548419.jpg"},"14ab":function(t,n,e){},2003:function(t,n,e){},2091:function(t,n,e){},"22dd":function(t,n,e){"use strict";e("fb4b")},2810:function(t,n,e){t.exports=e.p+"img/04.dc1fa812.jpg"},"2d93":function(t,n,e){"use strict";e("b68b")},3805:function(t,n,e){},"3e8b":function(t,n,e){t.exports=e.p+"img/2_2.9faccf81.jpg"},"40c6":function(t,n,e){t.exports={message:"alertMessage-module_message_3OFVy","message-info":"alertMessage-module_message-info_3JwOC","message-success":"alertMessage-module_message-success_uiHz9","message-warn":"alertMessage-module_message-warn_3rEgj","message-error":"alertMessage-module_message-error_2FPTv",icon:"alertMessage-module_icon_Ew5WT"}},"42d7":function(t,n,e){"use strict";e("14ab")},4400:function(t,n,e){"use strict";e("99af");var a=e("dc93"),o=e("d010"),c=e("40c6"),s=e.n(c);n["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.content||"",e=t.type||"info",c=t.duration||2e3,i=t.container||document.body,r=document.createElement("div"),l=Object(a["a"])(o["a"],{type:e});r.innerHTML='\n    <span class="'.concat(s.a.icon,'">').concat(l.outerHTML,"</span>\n    <div>").concat(n,"</div>\n  ");var p=s.a["message-".concat(e)];r.className="".concat(s.a.message," ").concat(p),i!==document.body&&"static"===getComputedStyle(i).position&&(i.style.position="relative"),i.appendChild(r),r.clientHeight,r.style.opacity=1,r.style.transform="translate(-50%,-50%)",setTimeout((function(){r.style.opacity=0,r.style.transform="translate(-50%,-50%) translateY(-25px)",r.addEventListener("transitionend",(function(){r.remove(),t.callback&&t.callback()}),{once:!0})}),c)}},"4b51":function(t,n,e){},"50fe":function(t,n,e){"use strict";e("2003")},"547e":function(t,n,e){t.exports=e.p+"img/3_2.1c187a51.jpg"},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79df");var a=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("Layout",{scopedSlots:t._u([{key:"left",fn:function(){return[e("LeftSidebar")]},proxy:!0},{key:"main",fn:function(){return[e("RouterView")]},proxy:!0}])}),e("Top")],1)},c=[],s=e("5849"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"left-sidebar-container"},[e("Avatar",{attrs:{width:100,height:100,url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1851283359,3457678391&fm=26&gp=0.jpg"}}),e("div",{staticClass:"blog-name"},[t._v("zhjia的博客")]),e("Menu"),e("Contact"),e("div",{staticClass:"record"},[t._v("桂ICP备20200520号")])],1)},r=[],l=e("77c0"),p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"menu-container"},t._l(t.items,(function(n){return e("RouterLink",{key:n.title,attrs:{to:n.link,exact:n.exact}},[e("Icon",{attrs:{type:n.icon}}),e("span",{staticClass:"title"},[t._v(t._s(n.title))])],1)})),1)},u=[],d=e("d010"),m={components:{Icon:d["a"]},data:function(){return{items:[{link:"/",title:"首页",icon:"home",exact:!0},{link:"/blog",title:"博客",icon:"blog",exact:!1},{link:"/about",title:"关于我",icon:"about",exact:!1},{link:"/project",title:"案例 & 效果",icon:"code",exact:!1},{link:"/message",title:"留言板",icon:"chat",exact:!1}]}}},g=m,h=(e("42d7"),e("2877")),f=Object(h["a"])(g,p,u,!1,null,"5af4f4b7",null),b=f.exports,v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"contact-container"},[e("li",[e("a",{staticClass:"prevent-default",attrs:{href:"/"}},[e("div",{staticClass:"icon"},[e("Icon",{attrs:{type:"github"}})],1),e("span",[t._v(t._s(t.data.githubName))])]),e("div",{staticClass:"pop"},[e("img",{attrs:{src:t.QRcode}})])]),e("li",[e("a",{attrs:{href:"mailto:240357483@qq.com"}},[e("div",{staticClass:"icon"},[e("Icon",{attrs:{type:"email"}})],1),e("span",[t._v(t._s(t.data.mail))])])]),e("li",[e("a",{attrs:{href:"tencent://message/?Menu=yes&uin=240357483&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"}},[e("div",{staticClass:"icon"},[e("Icon",{attrs:{type:"qq"}})],1),e("span",[t._v(t._s(t.data.qq))])])]),e("li",[e("a",{staticClass:"prevent-default",attrs:{href:"/"}},[e("div",{staticClass:"icon weixin"},[e("Icon",{attrs:{type:"weixin"}})],1),e("span",[t._v(t._s(t.data.weixin))])]),e("div",{staticClass:"pop"},[e("img",{attrs:{src:t.QRcode}})])])])},j=[],y=e("5530"),w=e("2f62"),k=e("c4a1"),x=e.n(k),C={data:function(){return{QRcode:x.a}},components:{Icon:d["a"]},computed:Object(y["a"])({},Object(w["b"])("setting",["data"])),created:function(){this.$store.dispatch("setting/fetchData")}},O=C,_=(e("c33b"),Object(h["a"])(O,v,j,!1,null,"6f2c08e1",null)),S=_.exports,T={components:{Avatar:l["a"],Menu:b,Contact:S}},A=T,P=(e("efc0"),Object(h["a"])(A,i,r,!1,null,"35ed2ba2",null)),M=P.exports,q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],ref:"top-container",staticClass:"top-container",on:{click:t.handleClick}},[t._v(" TOP ")])},R=[],H={data:function(){return{isShow:!1}},created:function(){this.$bus.$on("mainScroll",this.handleShow)},methods:{handleShow:function(t){this.isShow=!!t&&t.scrollTop>800},handleClick:function(){this.$bus.$emit("toTopScroll",0)}},destoryed:function(){this.$bus.$off("mainScroll",this.handleShow)}},D=H,L=(e("2d93"),Object(h["a"])(D,q,R,!1,null,"2876a343",null)),E=L.exports,I={components:{Layout:s["a"],LeftSidebar:M,Top:E}},N=I,$=(e("50fe"),Object(h["a"])(N,o,c,!1,null,"59fdc76d",null)),J=$.exports,F=(e("d3b7"),e("3ca3"),e("ddb0"),e("8c4f")),z=[{name:"Home",path:"/myblog",component:function(){return e.e("chunk-4f375e0e").then(e.bind(null,"4cd6"))}},{name:"Home",path:"/",component:function(){return e.e("chunk-4f375e0e").then(e.bind(null,"4cd6"))}},{name:"About",path:"/about",component:function(){return e.e("chunk-67e174e5").then(e.bind(null,"3b23"))}},{name:"Blog",path:"/blog",component:function(){return e.e("chunk-1c9954db").then(e.bind(null,"ed4e"))}},{name:"CategoryBlog",path:"/blog/cate/:categoryId",component:function(){return e.e("chunk-1c9954db").then(e.bind(null,"ed4e"))}},{name:"Detail",path:"/blog/:id",component:function(){return e.e("chunk-11924bc4").then(e.bind(null,"398b"))}},{name:"Message",path:"/message",component:function(){return e.e("chunk-6528edb8").then(e.bind(null,"60a4"))}},{name:"Project",path:"/project",component:function(){return e.e("chunk-6b1eb58f").then(e.bind(null,"7dec"))}},{name:"NotFound",path:"*",component:function(){return e.e("chunk-149717ca").then(e.bind(null,"7adf"))}}];a["a"].use(F["a"]);var Q=new F["a"]({routes:z,mode:"history"}),G=Q,K=(e("4b51"),e("ed08")),W=new a["a"]({});a["a"].prototype.$bus=W;var B=e("1da1"),X=(e("96cf"),e("0c6d"));function Y(){return U.apply(this,arguments)}function U(){return U=Object(B["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,X["a"].get("/api/banner");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),U.apply(this,arguments)}var V={namespaced:!0,state:{loading:!1,data:[]},mutations:{setLoading:function(t,n){t.loading=n},setData:function(t,n){t.data=n}},actions:{fetchData:function(t){return Object(B["a"])(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.state.data.length){n.next=2;break}return n.abrupt("return");case 2:return t.commit("setLoading",!0),n.next=5,Y();case 5:return e=n.sent,t.commit("setData",e),t.commit("setLoading",!1),n.abrupt("return",e);case 9:case"end":return n.stop()}}),n)})))()}}};function Z(){return tt.apply(this,arguments)}function tt(){return tt=Object(B["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,X["a"].get("/api/setting");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),tt.apply(this,arguments)}var nt={namespaced:!0,state:{loading:!1,data:[]},mutations:{setLoading:function(t,n){t.loading=n},setData:function(t,n){t.data=n}},actions:{fetchData:function(t){return Object(B["a"])(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.state.data.length){n.next=2;break}return n.abrupt("return");case 2:return t.commit("setLoading",!0),n.next=5,Z();case 5:return e=n.sent,t.commit("setData",e),t.commit("setLoading",!1),n.abrupt("return",e);case 9:case"end":return n.stop()}}),n)})))()}}};a["a"].use(w["a"]);var et=new w["a"].Store({modules:{banner:V,setting:nt},strict:!0}),at=e("96eb"),ot=e.n(at),ct=e("d7ca"),st=e.n(ct),it=e("da04"),rt=e.n(it),lt=e("0a4d"),pt=e.n(lt),ut=e("3e8b"),dt=e.n(ut),mt=e("9b4d"),gt=e.n(mt),ht=e("547e"),ft=e.n(ht);ot.a.mock("/api/banner","get",{code:0,msg:"",data:[{id:"1",midImg:st.a,bigImg:rt.a,title:"凛冬将至",description:"人唯有恐惧的时候方能勇敢"},{id:"2",midImg:pt.a,bigImg:dt.a,title:"血火同源",description:"如果我回头，一切都完了"},{id:"3",midImg:gt.a,bigImg:ft.a,title:"听我怒吼",description:"兰尼斯特有债必偿"}]});var bt=e("ade3"),vt=e("b383"),jt=e.n(vt),yt=e("ecdd"),wt=e.n(yt),kt=e("a8af"),xt=e.n(kt),Ct=e("1189"),Ot=e.n(Ct),_t=e("2810"),St=e.n(_t),Tt=e("6bdc"),At=e.n(Tt),Pt=e("a79d"),Mt=e.n(Pt);ot.a.mock("/api/blogtype","get",{code:0,msg:"","data|6-15":[{"id|+1":1,name:"分类@id","articleCount|0-200":0,"order|+1":1}]}),ot.a.mock(/^\/api\/blog(\?.+)?$/,"get",(function(t){var n=jt.a.parse(t.url);return ot.a.mock({code:0,msg:"",data:Object(bt["a"])({"total|2000-3000":0},"rows|".concat(n.limit||10),[{id:"@guid","title|1-5":"@ctitle",description:"@cparagraph(2, 5)",category:{"id|1-10":0,name:"分类@id"},"scanNumber|0-3000":0,"commentNumber|0-300":30,"thumb|1":[ot.a.Random.image("300x250","#373737","#fff","Mock Image"),null],createDate:"@date('T')"}])})})),ot.a.mock("/api/comment","post",{code:0,msg:"",data:{id:"@guid",nickname:"@cname",content:"@cparagraph(1,10)",createDate:Date.now(),"avatar|1":[wt.a,xt.a,Ot.a,St.a,At.a,Mt.a]}}),ot.a.mock(/^\/api\/comment\/?(\?.+)?$/,"get",(function(t){var n=jt.a.parse(t.url);return ot.a.mock({code:0,msg:"",data:Object(bt["a"])({"total|30-51":0},"rows|".concat(n.limit||10),[{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:"@date('T')","avatar|1":[wt.a,xt.a,Ot.a,St.a,At.a,Mt.a]}])})})),ot.a.mock(/^\/api\/blog\/[^/]+$/,"get",{code:0,msg:"",data:{id:"@guid",title:"CORS跨域方案详解",category:{"id|1-10":1,name:"分类@id"},description:"@cparagraph(1, 10)","scanNumber|0-10000":0,"commentNumber|0-100":0,createDate:"@date('T')",toc:[{name:"概述",anchor:"article-md-title-1"},{name:"简单请求",anchor:"article-md-title-2",children:[{name:"简单请求的判定",anchor:"article-md-title-3"},{name:"简单请求的交互规范",anchor:"article-md-title-4"}]},{name:"需要预检的请求",anchor:"article-md-title-5"},{name:"附带身份凭证的请求",anchor:"article-md-title-6"},{name:"一个额外的补充",anchor:"article-md-title-7"}],"thumb|1":[ot.a.Random.image("300x250","#000","#fff","Random Image"),null],htmlContent:'<blockquote>\n  <p>阅读本文，你需要首先知道：</p><ol>\n  <li>浏览器的同源策略</li>\n  <li>跨域问题</li>\n  <li>JSONP原理</li>\n  <li>cookie原理</li>\n  </ol>\n  </blockquote>\n  <p>JSONP并不是一个好的跨域解决方案，它至少有着下面两个严重问题：</p><ol>\n  <li><strong>会打乱服务器的消息格式</strong>：JSONP要求服务器响应一段JS代码，但在非跨域的情况下，服务器又需要响应一个正常的JSON格式</li>\n  <li><strong>只能完成GET请求</strong>：JSONP的原理会要求浏览器端生成一个<code>script</code>元素，而<code>script</code>元素发出的请求只能是<code>get</code>请求</li>\n  </ol>\n  <p>所以，CORS是一种更好的跨域解决方案。</p><h1 id="article-md-title-1">概述</h1><p><code>CORS</code>是基于<code>http1.1</code>的一种跨域解决方案，它的全称是<strong>C</strong>ross-<strong>O</strong>rigin <strong>R</strong>esource <strong>S</strong>haring，跨域资源共享。</p><p>它的总体思路是：<strong>如果浏览器要跨域访问服务器的资源，需要获得服务器的允许</strong></p><figure class="markdown-image">\n        \n  <figcaption>image-20200421152122793</figcaption>\n    \n  </figure><p>而要知道，一个请求可以附带很多信息，从而会对服务器造成不同程度的影响</p><p>比如有的请求只是获取一些新闻，有的请求会改动服务器的数据</p><p>针对不同的请求，CORS规定了三种不同的交互模式，分别是：</p><ul>\n  <li><strong>简单请求</strong></li>\n  <li><strong>需要预检的请求</strong></li>\n  <li><strong>附带身份凭证的请求</strong></li>\n  </ul>\n  <p>这三种模式从上到下层层递进，请求可以做的事越来越多，要求也越来越严格。</p><p>下面分别说明三种请求模式的具体规范。</p><h1 id="article-md-title-2">简单请求</h1><p>当浏览器端运行了一段ajax代码（无论是使用XMLHttpRequest还是fetch api），浏览器会首先判断它属于哪一种请求模式</p><h2 id="article-md-title-3">简单请求的判定</h2><p>当请求<strong>同时满足</strong>以下条件时，浏览器会认为它是一个简单请求：</p><ol>\n  <li><p><strong>请求方法属于下面的一种：</strong></p><ul>\n  <li>get</li>\n  <li>post</li>\n  <li>head</li>\n  </ul>\n  </li>\n  <li><p><strong>请求头仅包含安全的字段，常见的安全字段如下：</strong></p><ul>\n  <li><code>Accept</code></li>\n  <li><code>Accept-Language</code></li>\n  <li><code>Content-Language</code></li>\n  <li><code>Content-Type</code></li>\n  <li><code>DPR</code></li>\n  <li><code>Downlink</code></li>\n  <li><code>Save-Data</code></li>\n  <li><code>Viewport-Width</code></li>\n  <li><code>Width</code></li>\n  </ul>\n  </li>\n  <li><p><strong>请求头如果包含<code>Content-Type</code>，仅限下面的值之一：</strong></p><ul>\n  <li><code>text/plain</code></li>\n  <li><code>multipart/form-data</code></li>\n  <li><code>application/x-www-form-urlencoded</code></li>\n  </ul>\n  </li>\n  </ol>\n  <p>如果以上三个条件同时满足，浏览器判定为简单请求。</p><p>下面是一些例子：</p><pre><code class="language-js"><span class="hljs-comment">// 简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>);\n  \n  <span class="hljs-comment">// 请求方法不满足要求，不是简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">method</span>:<span class="hljs-string">"PUT"</span>\n  })\n  \n  <span class="hljs-comment">// 加入了额外的请求头，不是简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">headers</span>:{\n      <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>\n    }\n  })\n  \n  <span class="hljs-comment">// 简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">method</span>: <span class="hljs-string">"post"</span>\n  })\n  \n  <span class="hljs-comment">// content-type不满足要求，不是简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">method</span>: <span class="hljs-string">"post"</span>,\n    <span class="hljs-attr">headers</span>: {\n      <span class="hljs-string">"content-type"</span>: <span class="hljs-string">"application/json"</span>\n    }\n  })</code></pre>\n  <h2 id="article-md-title-4">简单请求的交互规范</h2><p>当浏览器判定某个<strong>ajax跨域请求</strong>是<strong>简单请求</strong>时，会发生以下的事情</p><ol>\n  <li><strong>请求头中会自动添加<code>Origin</code>字段</strong></li>\n  </ol>\n  <p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><pre><code class="language-js"><span class="hljs-comment">// 简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>);</code></pre>\n  <p>请求发出后，请求头会是下面的格式：</p><pre><code>GET /api/news/ HTTP/1.1\n  Host: crossdomain.com\n  Connection: keep-alive\n  ...\n  Referer: http://my.com/index.html\n  Origin: http://my.com</code></pre><p>看到最后一行没，<code>Origin</code>字段会告诉服务器，是哪个源地址在跨域请求</p><ol start="2">\n  <li><strong>服务器响应头中应包含<code>Access-Control-Allow-Origin</code></strong></li>\n  </ol>\n  <p>当服务器收到请求后，如果允许该请求跨域访问，需要在响应头中添加<code>Access-Control-Allow-Origin</code>字段</p><p>该字段的值可以是：</p><ul>\n  <li>*：表示我很开放，什么人我都允许访问</li>\n  <li>具体的源：比如<code>http://my.com</code>，表示我就允许你访问</li>\n  </ul>\n  <blockquote>\n  <p>实际上，这两个值对于客户端<code>http://my.com</code>而言，都一样，因为客户端才不会管其他源服务器允不允许，就关心自己是否被允许</p><p>当然，服务器也可以维护一个可被允许的源列表，如果请求的<code>Origin</code>命中该列表，才响应<code>*</code>或具体的源</p><p><strong>为了避免后续的麻烦，强烈推荐响应具体的源</strong></p></blockquote>\n  <p>假设服务器做出了以下的响应：</p><pre><code>HTTP/1.1 200 OK\n  Date: Tue, 21 Apr 2020 08:03:35 GMT\n  ...\n  Access-Control-Allow-Origin: http://my.com\n  ...\n  \n  消息体中的数据</code></pre><p>当浏览器看到服务器允许自己访问后，高兴的像一个两百斤的孩子，于是，它就把响应顺利的交给js，以完成后续的操作</p><p>下图简述了整个交互过程</p><figure class="markdown-image">\n        \n        <img class="detailImg" style="width:100%" src="http://mdrs.yuanjin.tech/img/image-20200421162846480.png" title="image-20200421162846480" alt="image-20200421162846480">\n        <figcaption>image-20200421162846480</figcaption>\n    \n      </figure><h1 id="article-md-title-5">需要预检的请求</h1><p>简单的请求对服务器的威胁不大，所以允许使用上述的简单交互即可完成。</p><p>但是，如果浏览器不认为这是一种简单请求，就会按照下面的流程进行：</p><ol>\n  <li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li>\n  <li><strong>服务器允许</strong></li>\n  <li><strong>浏览器发送真实请求</strong></li>\n  <li><strong>服务器完成真实的响应</strong></li>\n  </ol>\n  <p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><pre><code class="language-js"><span class="hljs-comment">// 需要预检的请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/user"</span>, {\n    <span class="hljs-attr">method</span>:<span class="hljs-string">"POST"</span>, <span class="hljs-comment">// post 请求</span>\n    <span class="hljs-attr">headers</span>:{  <span class="hljs-comment">// 设置请求头</span>\n      <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>,\n      <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>,\n      <span class="hljs-string">"content-type"</span>: <span class="hljs-string">"application/json"</span>\n    },\n    <span class="hljs-attr">body</span>: <span class="hljs-built_in">JSON</span>.stringify({ <span class="hljs-attr">name</span>: <span class="hljs-string">"zhjia"</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">18</span> }) <span class="hljs-comment">// 设置请求体</span>\n  });</code></pre>\n  <p>浏览器发现它不是一个简单请求，则会按照下面的流程与服务器交互</p><ol>\n  <li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li>\n  </ol>\n  <pre><code>OPTIONS /api/user HTTP/1.1\n  Host: crossdomain.com\n  ...\n  Origin: http://my.com\n  Access-Control-Request-Method: POST\n  Access-Control-Request-Headers: a, b, content-type</code></pre><p>可以看出，这并非我们想要发出的真实请求，请求中不包含我们的响应头，也没有消息体。</p><p>这是一个预检请求，它的目的是询问服务器，是否允许后续的真实请求。</p><p>预检请求<strong>没有请求体</strong>，它包含了后续真实请求要做的事情</p><p>预检请求有以下特征：</p><ul>\n  <li>请求方法为<code>OPTIONS</code></li>\n  <li>没有请求体</li>\n  <li>请求头中包含<ul>\n  <li><code>Origin</code>：请求的源，和简单请求的含义一致</li>\n  <li><code>Access-Control-Request-Method</code>：后续的真实请求将使用的请求方法</li>\n  <li><code>Access-Control-Request-Headers</code>：后续的真实请求会改动的请求头</li>\n  </ul>\n  </li>\n  </ul>\n  <ol start="2">\n  <li><strong>服务器允许</strong></li>\n  </ol>\n  <p>服务器收到预检请求后，可以检查预检请求中包含的信息，如果允许这样的请求，需要响应下面的消息格式</p><pre><code>HTTP/1.1 200 OK\n  Date: Tue, 21 Apr 2020 08:03:35 GMT\n  ...\n  Access-Control-Allow-Origin: http://my.com\n  Access-Control-Allow-Methods: POST\n  Access-Control-Allow-Headers: a, b, content-type\n  Access-Control-Max-Age: 86400\n  ...</code></pre><p>对于预检请求，不需要响应任何的消息体，只需要在响应头中添加：</p><ul>\n  <li><code>Access-Control-Allow-Origin</code>：和简单请求一样，表示允许的源</li>\n  <li><code>Access-Control-Allow-Methods</code>：表示允许的后续真实的请求方法</li>\n  <li><code>Access-Control-Allow-Headers</code>：表示允许改动的请求头</li>\n  <li><code>Access-Control-Max-Age</code>：告诉浏览器，多少秒内，对于同样的请求源、方法、头，都不需要再发送预检请求了</li>\n  </ul>\n  <ol start="3">\n  <li><strong>浏览器发送真实请求</strong></li>\n  </ol>\n  <p>预检被服务器允许后，浏览器就会发送真实请求了，上面的代码会发生下面的请求数据</p><pre><code>POST /api/user HTTP/1.1\n  Host: crossdomain.com\n  Connection: keep-alive\n  ...\n  Referer: http://my.com/index.html\n  Origin: http://my.com\n  \n  {"name": "zhjia", "age": 18 }</code></pre><ol start="4">\n  <li><strong>服务器响应真实请求</strong></li>\n  </ol>\n  <pre><code>HTTP/1.1 200 OK\n  Date: Tue, 21 Apr 2020 08:03:35 GMT\n  ...\n  Access-Control-Allow-Origin: http://my.com\n  ...\n  \n  添加用户成功</code></pre><p>可以看出，当完成预检之后，后续的处理与简单请求相同</p><p>下图简述了整个交互过程</p><figure class="markdown-image">\n        \n        <img class="detailImg" style="width:100%" src="http://mdrs.yuanjin.tech/img/image-20200421165913320.png" title="image-20200421165913320" alt="image-20200421165913320">\n        <figcaption>image-20200421165913320</figcaption>\n    \n      </figure><h1 id="article-md-title-6">附带身份凭证的请求</h1><p>默认情况下，ajax的跨域请求并不会附带cookie，这样一来，某些需要权限的操作就无法进行</p><p>不过可以通过简单的配置就可以实现附带cookie</p><pre><code class="language-js"><span class="hljs-comment">// xhr</span>\n  <span class="hljs-keyword">var</span> xhr = <span class="hljs-keyword">new</span> XMLHttpRequest();\n  xhr.withCredentials = <span class="hljs-literal">true</span>;\n  \n  <span class="hljs-comment">// fetch api</span>\n  fetch(url, {\n    <span class="hljs-attr">credentials</span>: <span class="hljs-string">"include"</span>\n  })</code></pre>\n  <p>这样一来，该跨域的ajax请求就是一个<em>附带身份凭证的请求</em></p><p>当一个请求需要附带cookie时，无论它是简单请求，还是预检请求，都会在请求头中添加<code>cookie</code>字段</p><p>而服务器响应时，需要明确告知客户端：服务器允许这样的凭据</p><p>告知的方式也非常的简单，只需要在响应头中添加：<code>Access-Control-Allow-Credentials: true</code>即可</p><p>对于一个附带身份凭证的请求，若服务器没有明确告知，浏览器仍然视为跨域被拒绝。</p><p>另外要特别注意的是：<strong>对于附带身份凭证的请求，服务器不得设置 <code>Access-Control-Allow-Origin 的值为*</code></strong>。这就是为什么不推荐使用*的原因</p><h1 id="article-md-title-7">一个额外的补充</h1><p>在跨域访问时，JS只能拿到一些最基本的响应头，如：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头。</p><p><code>Access-Control-Expose-Headers</code>头让服务器把允许浏览器访问的头放入白名单，例如：</p><pre><code>Access-Control-Expose-Headers: authorization, a, b</code></pre><p>这样JS就能够访问指定的响应头了。</p>'}}),ot.a.mock("/api/setting",{code:0,msg:"",data:{avatar:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1851283359,3457678391&fm=26&gp=0.jpg",siteTitle:"我的个人空间",github:"https://github.com/zhjia-5",qq:"240357483",qqQrCode:"www.baidu.com",weixin:"zhjia5",weixinQrCode:"www.baidu.com",mail:"240357483@qq.com ",icp:"桂ICP备17001719号",githubName:"zhjia-5",favicon:"http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f"}}),ot.a.mock("/api/message","post",{code:0,msg:"",data:{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":[wt.a,xt.a,Ot.a,St.a,At.a,Mt.a]}}),ot.a.mock(/^\/api\/message\/?(\?.+)?$/,"get",(function(t){var n=jt.a.parse(t.url);return ot.a.mock({code:0,msg:"",data:Object(bt["a"])({total:50},"rows|".concat(n.limit||10),[{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":[wt.a,xt.a,Ot.a,St.a,At.a,Mt.a]}])})})),ot.a.setup({timeout:"0-1000"}),a["a"].prototype.$alertMessage=K["a"],new a["a"]({store:et,router:G,render:function(t){return t(J)}}).$mount("#app")},5849:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"layout-container"},[e("div",{staticClass:"left"},[t._t("left")],2),e("div",{staticClass:"main"},[t._t("main")],2),e("div",{staticClass:"right"},[t._t("right")],2)])},o=[],c=(e("7a6a"),e("2877")),s={},i=Object(c["a"])(s,a,o,!1,null,"cb401834",null);n["a"]=i.exports},"6bdc":function(t,n,e){t.exports=e.p+"img/05.c1c9556f.jpg"},"77c0":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("img",{staticClass:"avatar-container",style:{width:t.width+"px",height:t.height+"px"},attrs:{src:t.url}})},o=[],c=(e("a9e3"),{props:{url:{type:String,required:!0},width:{type:Number,default:150},height:{type:Number,default:150}}}),s=c,i=(e("a838"),e("2877")),r=Object(i["a"])(s,a,o,!1,null,"278fdfba",null);n["a"]=r.exports},"7a6a":function(t,n,e){"use strict";e("3805")},"9b4d":function(t,n,e){t.exports=e.p+"img/3_1.33766223.jpg"},a79d:function(t,n,e){t.exports=e.p+"img/06.5bf8fbdc.jpg"},a838:function(t,n,e){"use strict";e("ab58")},a8af:function(t,n,e){t.exports=e.p+"img/02.23700563.jpg"},ab58:function(t,n,e){},b68b:function(t,n,e){},c33b:function(t,n,e){"use strict";e("2091")},c4a1:function(t,n,e){t.exports=e.p+"img/QRcode.362b2158.jpg"},d010:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("i",{staticClass:"iconfont icon-container",class:t.fontClass})},o=[],c=(e("b64b"),{home:"icon-zhuye",success:"icon-zhengque-",error:"icon-cuowu",close:"icon-guanbi",warn:"icon-jinggao",info:"icon-fl-xinxi",blog:"icon-blog",code:"icon-code",about:"icon-set_about_hov",weixin:"icon-weixin",email:"icon-emailFilled",github:"icon-github",qq:"icon-qq",arrowUp:"icon-ico_back",arrowDown:"icon-xiajiantou",empty:"icon-empty",chat:"icon-liuyan"}),s=(Object.keys(c),{props:{type:{type:String,required:!0}},computed:{fontClass:function(){return c[this.type]}}}),i=s,r=(e("22dd"),e("2877")),l=Object(r["a"])(i,a,o,!1,null,"388d8ef3",null);n["a"]=l.exports},d7ca:function(t,n,e){t.exports=e.p+"img/1_1.fd909ef2.jpg"},da04:function(t,n,e){t.exports=e.p+"img/1_2.837f0483.jpg"},dc93:function(t,n,e){"use strict";var a=e("2b0e");n["a"]=function(t,n){var e=new a["a"]({render:function(e){return e(t,{props:n})}});return e.$mount(),e.$el}},e843:function(t,n,e){},ecdd:function(t,n,e){t.exports=e.p+"img/01.2456ac47.jpg"},ed08:function(t,n,e){"use strict";e.d(n,"a",(function(){return a["a"]})),e.d(n,"c",(function(){return o})),e.d(n,"b",(function(){return c}));var a=e("4400"),o=(e("dc93"),e("4d90"),e("d3b7"),e("25f0"),e("99af"),function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=new Date(+t),a=e.getFullYear(),o=(e.getMonth()+1).toString().padStart(2,"0"),c=e.getDate().toString().padStart(2,"0"),s="".concat(a,"-").concat(o,"-").concat(c);if(n){var i=e.getHours().toString().padStart(2,"0"),r=e.getMinutes().toString().padStart(2,"0"),l=e.getSeconds().toString().padStart(2,"0");s+=" ".concat(i,":").concat(r,":").concat(l)}return s}),c=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,e=null;return function(){for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];clearTimeout(e),e=setTimeout((function(){t.apply(void 0,o)}),n)}}},efc0:function(t,n,e){"use strict";e("e843")},fb4b:function(t,n,e){}});
//# sourceMappingURL=app.421694dc.js.map