(this.webpackJsonpcryptocurrency=this.webpackJsonpcryptocurrency||[]).push([[0],{101:function(e,t,c){},102:function(e,t,c){},110:function(e,t,c){},147:function(e,t,c){},253:function(e,t,c){},254:function(e,t,c){},255:function(e,t,c){},256:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(91),s=c.n(r),i=(c(101),c(25)),o=(c(102),c(57),c(0)),u=function(){return Object(o.jsxs)("div",{className:"cointapp__logo",children:[Object(o.jsx)("i",{className:"fab fa-gg-circle coinapp__icon"}),Object(o.jsx)("h1",{className:"coinapp__name",children:"KBCrypto"})]})},l=function(){return Object(o.jsxs)("header",{className:"landingHeader",children:[Object(o.jsx)(u,{}),Object(o.jsx)("p",{className:"landingHeader__p",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, fuga?"}),Object(o.jsx)(i.b,{className:"landingHeader__btn",to:"/home",children:"Enter website"})]})},d=(c(59),function(e){var t=e.src,c=e.head,a=e.info;return Object(o.jsxs)("div",{className:"illust",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"illust__header",children:c}),Object(o.jsx)("p",{className:"illust__p",children:a})]}),Object(o.jsx)("img",{className:"illust__img",src:t,alt:c})]})}),p=[{head:"View your currency",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias ipsam alias, aliquid deserunt dolor.",src:"https://raw.githubusercontent.com/KanBoorodom/cryptocurrency/d0705bb2f846d31a4080b67bf3a9e272ef98239e/src/component/illust/crypto.svg"},{head:"Make a decision",info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, beatae itaque? Quasi dolore ipsa itaque voluptatem asperiores!",src:"https://raw.githubusercontent.com/KanBoorodom/cryptocurrency/538f8ff746e8e32a395bc8f0f976b98aeb8fce24/src/component/illust/dec.svg"},{head:"Anywhere Anytime",info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos error repudiandae minima inventore.",src:"https://raw.githubusercontent.com/KanBoorodom/cryptocurrency/d0705bb2f846d31a4080b67bf3a9e272ef98239e/src/component/illust/any1.svg"},{head:"Find your right crpyto now",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima saepe accusamus id ipsam sint quidem debitis ut eveniet repellat.",src:"https://raw.githubusercontent.com/KanBoorodom/cryptocurrency/188256f6623bf33551e3f13927749544814deb99/src/component/illust/find.svg"}],m=function(){return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{className:"illust__head",children:"What we provide"}),p.map((function(e,t){return Object(o.jsx)(d,{head:e.head,info:e.info,src:e.src},t)}))]})},j=c(4),b=c(27),h=c(28),f=function(e){var t=e.src,c=e.name,a=e.review,n=e.index,r=e.size,s=e.current,i=e.setCurrent;return Object(o.jsx)("div",{className:"reviewCard ".concat(n===s?"active":"unactive"),children:n===s&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b.a,{icon:h.a,className:"reviewCard__arrowL",onClick:function(){i(0===s?r-1:function(e){return e-1})}}),Object(o.jsx)(b.a,{icon:h.b,className:"reviewCard__arrowR",onClick:function(){i(s===r-1?0:function(e){return e+1})}}),Object(o.jsx)("img",{className:"reviewCard__img",src:t,alt:"user-review"}),Object(o.jsxs)("div",{className:"reviewCard__info",children:[Object(o.jsx)("h2",{className:"reviewCard__info__name",children:c}),Object(o.jsx)("p",{className:"reviewCard__info__p",children:a})]})]})})},x=[{name:"Jane Doe",review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias ipsam alias, aliquid deserunt dolor.",src:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},{name:"John Doe",review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, beatae itaque? Quasi dolore ipsa itaque voluptatem asperiores!",src:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},{name:"Ipsum Lorem",review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos error repudiandae minima inventore.",src:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},{name:"Lorem Ipsum",review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nam laudantium vero praesentium minima suscipit. Officia, totam recusandae?",src:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"}],g=(c(110),function(){var e=Object(a.useState)(0),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(o.jsxs)("div",{className:"review",children:[Object(o.jsx)("h2",{className:"review__head",children:"User review"}),x.map((function(e,t){return Object(o.jsx)(f,{src:e.src,name:e.name,review:e.review,index:t,size:x.length,current:c,setCurrent:n},t)}))]})}),O=(c(61),function(e){var t=e.class1,c=e.class2,n=e.info,r=Object(a.useState)(!1),s=Object(j.a)(r,2),i=s[0],u=s[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("i",{className:"".concat(t," ").concat(c," ").concat(i&&"gelatine"),onMouseDown:function(){u(!1)},onMouseUp:function(){u(!0);var e=document.createElement("INPUT");e.value=n,navigator.clipboard.writeText(e.value)}})})}),v=function(){return Object(o.jsxs)("footer",{className:"footer",children:[Object(o.jsx)("h2",{children:"KBCrypto"}),Object(o.jsx)("p",{children:"Create by Kan"}),Object(o.jsxs)("div",{className:"footer__contactContainer",children:[Object(o.jsx)(O,{class1:"fab",class2:"fa-line",info:"https://line.me/ti/p/8DKPQeEnNA"}),Object(o.jsx)(O,{class1:"fab",class2:"fa-github-square",info:"https://github.com/KanBoorodom/cryptocurrency.git"}),Object(o.jsx)(O,{class1:"fas",class2:"fa-envelope-square",info:"kan.boorodom@gmail.com"})]})]})},_=(c(62),[{question:"What is cryptocurrency ?",answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eius accusamus magni saepe officiis rerum iste adipisci libero ad autem?"},{question:"What exactly KBCrypto is ?",answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, blanditiis debitis distinctio a facere corrupti voluptatibus optio esse."},{question:"How to get benefited from KBCrypto ?",answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic tenetur quaerat temporibus iusto quos? Natus, dignissimos impedit labore ipsum quisquam veritatis animi?"},{question:"What about customer support ?",answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolorum provident! Omnis velit labore saepe!"}]),w=function(e){var t=e.question,c=e.answer,n=Object(a.useState)(!1),r=Object(j.a)(n,2),s=r[0],i=r[1];return Object(o.jsxs)("div",{className:"qa",style:s?{borderBottom:"none"}:{borderBottom:"2px solid #9ac7c1"},onClick:function(e){i(!s)},children:[Object(o.jsxs)("div",{className:"faq__question",children:[Object(o.jsx)("p",{children:t}),Object(o.jsx)(b.a,{className:s?"faq__question--arrowUp":"faq__question--arrowDown",icon:h.c})]}),Object(o.jsx)("p",{className:"faq__answer ".concat(s&&"faq__answer--active"),children:c})]})},y=function(){return Object(o.jsxs)("div",{className:"faq",children:[Object(o.jsx)("h2",{className:"faq__head",children:"Frequently Asked Questions"}),_.map((function(e,t){return Object(o.jsx)(w,{question:e.question,answer:e.answer},t)}))]})},N=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{}),Object(o.jsx)(m,{}),Object(o.jsx)(g,{}),Object(o.jsx)(y,{}),Object(o.jsx)(v,{})]})},C=c(12),k=c.n(C),q=c(22),S=c(18),D=c.n(S),L=c(39),B=c.n(L),M=c(3),H=(c(147),c(96)),F=function(e){var t=e.name,c=e.id,n=e.image,r=e.symbol,s=e.price,i=e.volume,u=e.currncySelected,l=e.priceChange,d=e.searchAll,p=Object(a.useState)([]),m=Object(j.a)(p,2),b=m[0],h=m[1],f=Object(a.useState)([]),x=Object(j.a)(f,2),g=x[0],O=x[1],v=Object(a.useState)(!1),_=Object(j.a)(v,2),w=_[0],y=_[1],N=new Date,C=function(e){var t=new Date(e),c=t.getHours(),a=t.getMinutes(),n=t.getSeconds(),r=t.getDate(),s=t.getMonth()+1,i=t.getFullYear();return"".concat(r,"/").concat(s,"/").concat(i," ").concat(c,":").concat(a,":").concat(n)};Object(a.useEffect)((function(){(function(){var e=Object(q.a)(k.a.mark((function e(t){var c,a,n,r,s,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,y(!0),0===d.length){e.next=8;break}return e.next=5,D.a.get("https://api.coingecko.com/api/v3/coins/".concat(d,"/market_chart?vs_currency=").concat(u,"&days=1"));case 5:c=e.sent,e.next=11;break;case 8:return e.next=10,D.a.get("https://api.coingecko.com/api/v3/coins/".concat(t,"/market_chart?vs_currency=").concat(u,"&days=1"));case 10:c=e.sent;case 11:a=[],n=[],r=Object(M.a)(c.data.prices);try{for(r.s();!(s=r.n()).done;)i=s.value,a.push(C(i[0])),n.push(i[1])}catch(o){r.e(o)}finally{r.f()}h(a),O(n),y(!1),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t){return e.apply(this,arguments)}})()(c)}),[c,d,u]);var S={labels:b,datasets:[{label:"Price",data:g,fill:!0,backgroundColor:l>0?"#125d1e":"#ff63844d",borderColor:l>0?"#26bf3e":"#f45050",pointRadius:2,tension:.1}]};return Object(o.jsxs)("div",{className:"coin",children:[Object(o.jsx)("img",{className:"coin__img",src:n,alt:"crypto"}),Object(o.jsxs)("div",{className:"coin__data",children:[Object(o.jsxs)("a",{href:"https://www.coingecko.com/en/coins/".concat(t.toLowerCase().replace(/\s+/g,"-")),className:"coin__name",children:[t," ",Object(o.jsx)("br",{}),"(",r.toUpperCase(),")"]}),Object(o.jsxs)("p",{className:"coin__price",children:[u," ",s.toLocaleString()]}),Object(o.jsxs)("p",{className:"coin__volume",children:["Mkt Cap ",Object(o.jsx)("br",{}),u.toUpperCase()," ",i.toLocaleString()]}),Object(o.jsxs)("p",{className:"coin__priceChange",style:{backgroundColor:l>0?"#1b7642":"#722727"},children:["24h change",Object(o.jsx)("br",{}),l>0?Object(o.jsxs)("span",{className:"coin__priceChange--green",children:[" +",l.toFixed(2),"%"]}):Object(o.jsxs)("span",{className:"coin__priceChange--red",children:[" ",l.toFixed(2),"%"]})]})]}),w?Object(o.jsx)("div",{className:"coin__loadContainer",children:Object(o.jsx)(B.a,{className:"coin--load",type:"ThreeDots",color:"#00BFFF",height:80,width:100})}):Object(o.jsx)(H.a,{className:"coin__chart",data:S,options:{plugins:{legend:{display:!1}},scales:{y:{ticks:{color:"white"}},x:{ticks:{display:!1}}}}}),Object(o.jsxs)("div",{className:"coin__updatetime",children:[Object(o.jsxs)("p",{children:["Last update ",N.toLocaleTimeString("en-GB")]}),Object(o.jsx)("p",{children:N.toLocaleDateString()})]})]})},A=(c(253),function(e){var t=e.search,c=e.setSearch,a=e.setSearchAll;return Object(o.jsx)("div",{className:"coinsearch",children:Object(o.jsxs)("form",{action:"",className:"coinsearch__form",children:[Object(o.jsx)("label",{htmlFor:"searchPage",children:""===t?"Search":"Press enter for searching"}),Object(o.jsx)("input",{type:"text",placeholder:"Enter coin name..",id:"searchPage",className:"coinsearch__input",value:t,onChange:function(e){c(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&0!==t.length?(e.preventDefault(),a(t.toLowerCase().replace(/\s+/g,"-"))):"Enter"===e.key&&0===t.length&&e.preventDefault(),"Backspace"===e.key&&1===t.length&&(a(""),c(""))}})]})})}),E=c(258),P=(c(254),function(e){var t=e.currncySelected,c=e.setCurrncySelected,a=e.currency;return Object(o.jsxs)("select",{className:"currencyDropdown__select",value:t,onChange:function(e){c(e.target.value)},children:[Object(o.jsx)("option",{value:"thb",children:"--- Choose Currency ---"}),a.map((function(e){return Object(o.jsx)("option",{value:e,children:e},Object(E.a)())}))]})}),K=(c(255),function(e){for(var t=e.currentPage,c=e.setCurrentPage,a=[],n=1;n<11;n++)a.push(n);var r=function(e){parseInt(e.target.innerHTML)===t?window.location.reload():c(parseInt(e.target.innerHTML))};return Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{className:"pagination__ul",children:a.map((function(e){return Object(o.jsx)("li",{onClick:r,className:"pagination__page ".concat(t===e&&"pagination__page--active"),children:e},e)}))})})}),G=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),s=Object(j.a)(r,2),i=s[0],l=s[1],d=Object(a.useState)(""),p=Object(j.a)(d,2),m=p[0],b=p[1],h=Object(a.useState)([]),f=Object(j.a)(h,2),x=f[0],g=f[1],O=Object(a.useState)([]),v=Object(j.a)(O,2),_=v[0],w=v[1],y=Object(a.useState)("thb"),N=Object(j.a)(y,2),C=N[0],S=N[1],L=Object(a.useState)(),M=Object(j.a)(L,2),H=M[0],E=M[1],G=Object(a.useState)(1),T=Object(j.a)(G,2),W=T[0],I=T[1];Object(a.useEffect)((function(){(function(){var e=Object(q.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!0),e.next=4,D.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(C,"&order=market_cap_desc&per_page=12&page=").concat(W,"&sparkline=false"));case 4:t=e.sent,n(t.data),E(!1),window.scrollTo(0,0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[C,W]),Object(a.useEffect)((function(){(function(){var e=Object(q.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(m.length>0)){e.next=17;break}return e.prev=1,E(!0),e.next=5,D.a.get("https://api.coingecko.com/api/v3/coins/".concat(m));case 5:t=e.sent,g(t.data),console.log(t.data),E(!1),e.next=17;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),alert("Coin not found..."),l(""),E(!1);case 17:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}})()()}),[m]),Object(a.useEffect)((function(){b(""),l("")}),[W]),Object(a.useEffect)((function(){(function(){var e=Object(q.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("https://api.coingecko.com/api/v3/simple/supported_vs_currencies");case 3:t=e.sent,w(t.data.sort()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var Q=c.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{}),Object(o.jsx)(A,{search:i,setSearch:l,setSearchAll:b}),Object(o.jsx)(P,{currncySelected:C,setCurrncySelected:S,currency:_}),0===i.length&&Object(o.jsx)(K,{currentPage:W,setCurrentPage:I}),Object(o.jsxs)("div",{className:"coin__container",children:[0!==x.length&&Object(o.jsx)(F,{name:x.name,id:x.id,image:x.image.large,symbol:x.symbol,volume:x.market_data.market_cap["".concat(C)],currncySelected:C,price:x.market_data.current_price["".concat(C)],priceChange:x.market_data.price_change_percentage_24h_in_currency["".concat(C)],searchAll:m}),H?Object(o.jsx)(B.a,{type:"Puff",color:"#00BFFF",height:500,width:500,className:"loader"}):0===x.length?Q.map((function(e){return Object(o.jsx)(F,{name:e.name,id:e.id,image:e.image,symbol:e.symbol,volume:e.market_cap,currncySelected:C,price:e.current_price,priceChange:e.price_change_percentage_24h,searchAll:m},e.id)})):null]}),Object(o.jsx)(K,{currentPage:W,setCurrentPage:I})]})},T=c(5);var W=function(){return Object(o.jsx)(i.a,{children:Object(o.jsx)("div",{className:"coinapp",children:Object(o.jsxs)(T.c,{children:[Object(o.jsx)(T.a,{exact:!0,path:"/cryptocurrency",children:Object(o.jsx)(N,{})}),Object(o.jsx)(T.a,{exact:!0,path:"/home",children:Object(o.jsx)(G,{})})]})})})};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(W,{})}),document.getElementById("root"))},57:function(e,t,c){},59:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){}},[[256,1,2]]]);
//# sourceMappingURL=main.eabc0afc.chunk.js.map