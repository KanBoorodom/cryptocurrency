(this.webpackJsonpcryptocurrency=this.webpackJsonpcryptocurrency||[]).push([[0],{101:function(e,t,c){},102:function(e,t,c){},110:function(e,t,c){},147:function(e,t,c){},253:function(e,t,c){},254:function(e,t,c){},255:function(e,t,c){},256:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(91),s=c.n(r),i=(c(101),c(21)),o=(c(102),c(0)),l=function(){return Object(o.jsxs)("header",{className:"landing__header",children:[Object(o.jsx)("p",{className:"landing__header--p",children:"Welcome to ..."}),Object(o.jsx)("h1",{className:"landing__header--header",children:"KBCrypto"}),Object(o.jsx)("p",{className:"landing__header--p",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, fuga?"}),Object(o.jsx)(i.b,{className:"landing__header--btn",to:"/home",children:"Enter website"})]})},u=(c(58),function(e){var t=e.src,c=e.head,a=e.info;return Object(o.jsxs)("div",{className:"illust",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"illust__header",children:c}),Object(o.jsx)("p",{className:"illust__p",children:a})]}),Object(o.jsx)("img",{className:"illust__img",src:t,alt:c})]})}),d=[{head:"View your currency",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias ipsam alias, aliquid deserunt dolor.",src:"https://raw.githubusercontent.com/KanBoorodom/cryptocurrency/d0705bb2f846d31a4080b67bf3a9e272ef98239e/src/component/illust/crypto.svg"},{head:"Make a decision",info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, beatae itaque? Quasi dolore ipsa itaque voluptatem asperiores!",src:"https://raw.githubusercontent.com/KanBoorodom/cryptocurrency/538f8ff746e8e32a395bc8f0f976b98aeb8fce24/src/component/illust/dec.svg"},{head:"Anywhere Anytime",info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos error repudiandae minima inventore.",src:"https://raw.githubusercontent.com/KanBoorodom/cryptocurrency/d0705bb2f846d31a4080b67bf3a9e272ef98239e/src/component/illust/any1.svg"},{head:"Find your right crpyto now",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima saepe accusamus id ipsam sint quidem debitis ut eveniet repellat.",src:"https://raw.githubusercontent.com/KanBoorodom/cryptocurrency/188256f6623bf33551e3f13927749544814deb99/src/component/illust/find.svg"}],p=function(){return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{className:"illust__head",children:"What we provide"}),d.map((function(e,t){return Object(o.jsx)(u,{head:e.head,info:e.info,src:e.src},t)}))]})},m=c(4),j=c(27),b=c(28),h=function(e){var t=e.src,c=e.name,a=e.review,n=e.index,r=e.size,s=e.current,i=e.setCurrent;return Object(o.jsx)("div",{className:"reviewCard ".concat(n===s?"active":"unactive"),children:n===s&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j.a,{icon:b.a,className:"reviewCard__arrowL",onClick:function(){i(0===s?r-1:function(e){return e-1})}}),Object(o.jsx)(j.a,{icon:b.b,className:"reviewCard__arrowR",onClick:function(){i(s===r-1?0:function(e){return e+1})}}),Object(o.jsx)("img",{className:"reviewCard__img",src:t,alt:"user-review"}),Object(o.jsxs)("div",{className:"reviewCard__info",children:[Object(o.jsx)("h2",{className:"reviewCard__info__name",children:c}),Object(o.jsx)("p",{className:"reviewCard__info__p",children:a})]})]})})},f=[{name:"Jane Doe",review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias ipsam alias, aliquid deserunt dolor.",src:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},{name:"John Doe",review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, beatae itaque? Quasi dolore ipsa itaque voluptatem asperiores!",src:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},{name:"Ipsum Lorem",review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos error repudiandae minima inventore.",src:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},{name:"Lorem Ipsum",review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nam laudantium vero praesentium minima suscipit. Officia, totam recusandae?",src:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"}],x=(c(110),function(){var e=Object(a.useState)(0),t=Object(m.a)(e,2),c=t[0],n=t[1];return Object(o.jsxs)("div",{className:"review",children:[Object(o.jsx)("h2",{className:"review__head",children:"User review"}),f.map((function(e,t){return Object(o.jsx)(h,{src:e.src,name:e.name,review:e.review,index:t,size:f.length,current:c,setCurrent:n},t)}))]})}),g=(c(60),function(e){var t=e.class1,c=e.class2,n=e.info,r=Object(a.useState)(!1),s=Object(m.a)(r,2),i=s[0],l=s[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("i",{className:"".concat(t," ").concat(c," ").concat(i&&"gelatine"),onMouseDown:function(){l(!1)},onMouseUp:function(){l(!0);var e=document.createElement("INPUT");e.value=n,navigator.clipboard.writeText(e.value)}})})}),O=function(){return Object(o.jsxs)("footer",{className:"footer",children:[Object(o.jsx)("h2",{children:"KBCrypto"}),Object(o.jsx)("p",{children:"Create by Kan"}),Object(o.jsxs)("div",{className:"footer__contactContainer",children:[Object(o.jsx)(g,{class1:"fab",class2:"fa-line",info:"https://line.me/ti/p/8DKPQeEnNA"}),Object(o.jsx)(g,{class1:"fab",class2:"fa-github-square",info:"https://github.com/KanBoorodom/cryptocurrency.git"}),Object(o.jsx)(g,{class1:"fas",class2:"fa-envelope-square",info:"kan.boorodom@gmail.com"})]})]})},v=(c(61),[{question:"What is cryptocurrency ?",answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eius accusamus magni saepe officiis rerum iste adipisci libero ad autem?"},{question:"What exactly KBCrypto is ?",answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, blanditiis debitis distinctio a facere corrupti voluptatibus optio esse."},{question:"How to get benefited from KBCrypto ?",answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic tenetur quaerat temporibus iusto quos? Natus, dignissimos impedit labore ipsum quisquam veritatis animi?"},{question:"What about customer support ?",answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolorum provident! Omnis velit labore saepe!"}]),_=function(e){var t=e.question,c=e.answer,n=Object(a.useState)(!1),r=Object(m.a)(n,2),s=r[0],i=r[1];return Object(o.jsxs)("div",{className:"qa",style:s?{borderBottom:"none"}:{borderBottom:"2px solid #9ac7c1"},onClick:function(e){i(!s)},children:[Object(o.jsxs)("div",{className:"faq__question",children:[Object(o.jsx)("p",{children:t}),Object(o.jsx)(j.a,{className:s?"faq__question--arrowUp":"faq__question--arrowDown",icon:b.c})]}),Object(o.jsx)("p",{className:"faq__answer ".concat(s&&"faq__answer--active"),children:c})]})},w=function(){return Object(o.jsxs)("div",{className:"faq",children:[Object(o.jsx)("h2",{className:"faq__head",children:"Frequently Asked Questions"}),v.map((function(e,t){return Object(o.jsx)(_,{question:e.question,answer:e.answer},t)}))]})},y=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{}),Object(o.jsx)(p,{}),Object(o.jsx)(x,{}),Object(o.jsx)(w,{}),Object(o.jsx)(O,{})]})},N=c(12),C=c.n(N),k=c(23),q=c(18),S=c.n(q),D=c(39),L=c.n(D),B=(c(70),function(){return Object(o.jsxs)("div",{className:"cointapp__logo",children:[Object(o.jsx)("i",{className:"fab fa-gg-circle coinapp__icon"}),Object(o.jsx)("h1",{className:"coinapp__name",children:"KBCurrency"})]})}),M=c(3),F=(c(147),c(96)),A=function(e){var t=e.name,c=e.id,n=e.image,r=e.symbol,s=e.price,i=e.volume,l=e.currncySelected,u=e.priceChange,d=e.searchAll,p=Object(a.useState)([]),j=Object(m.a)(p,2),b=j[0],h=j[1],f=Object(a.useState)([]),x=Object(m.a)(f,2),g=x[0],O=x[1],v=Object(a.useState)(!1),_=Object(m.a)(v,2),w=_[0],y=_[1],N=new Date,q=function(e){var t=new Date(e),c=t.getHours(),a=t.getMinutes(),n=t.getSeconds(),r=t.getDate(),s=t.getMonth()+1,i=t.getFullYear();return"".concat(r,"/").concat(s,"/").concat(i," ").concat(c,":").concat(a,":").concat(n)};Object(a.useEffect)((function(){(function(){var e=Object(k.a)(C.a.mark((function e(t){var c,a,n,r,s,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,y(!0),console.log(d),0===d.length){e.next=9;break}return e.next=6,S.a.get("https://api.coingecko.com/api/v3/coins/".concat(d,"/market_chart?vs_currency=").concat(l,"&days=1"));case 6:c=e.sent,e.next=12;break;case 9:return e.next=11,S.a.get("https://api.coingecko.com/api/v3/coins/".concat(t,"/market_chart?vs_currency=").concat(l,"&days=1"));case 11:c=e.sent;case 12:a=[],n=[],r=Object(M.a)(c.data.prices);try{for(r.s();!(s=r.n()).done;)i=s.value,a.push(q(i[0])),n.push(i[1])}catch(o){r.e(o)}finally{r.f()}h(a),O(n),y(!1),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(t){return e.apply(this,arguments)}})()(c)}),[c,d,l]);var D={labels:b,datasets:[{label:"Price",data:g,fill:!0,backgroundColor:u>0?"#125d1e":"#ff63844d",borderColor:u>0?"#26bf3e":"#f45050",pointRadius:2,tension:.1}]};return Object(o.jsxs)("div",{className:"coin",children:[Object(o.jsx)("img",{className:"coin__img",src:n,alt:"crypto"}),Object(o.jsxs)("div",{className:"coin__data",children:[Object(o.jsxs)("a",{href:"https://www.coingecko.com/en/coins/".concat(t.toLowerCase().replace(/\s+/g,"-")),className:"coin__name",children:[t," ",Object(o.jsx)("br",{}),"(",r.toUpperCase(),")"]}),Object(o.jsxs)("p",{className:"coin__price",children:[l," ",s.toLocaleString()]}),Object(o.jsxs)("p",{className:"coin__volume",children:["Mkt Cap ",Object(o.jsx)("br",{}),l.toUpperCase()," ",i.toLocaleString()]}),Object(o.jsxs)("p",{className:"coin__priceChange",style:{backgroundColor:u>0?"#1b7642":"#722727"},children:["24h change",Object(o.jsx)("br",{}),u>0?Object(o.jsxs)("span",{className:"coin__priceChange--green",children:[" +",u.toFixed(2),"%"]}):Object(o.jsxs)("span",{className:"coin__priceChange--red",children:[" ",u.toFixed(2),"%"]})]})]}),w?Object(o.jsx)("div",{className:"coin__loadContainer",children:Object(o.jsx)(L.a,{className:"coin--load",type:"ThreeDots",color:"#00BFFF",height:80,width:100})}):Object(o.jsx)(F.a,{className:"coin__chart",data:D,options:{plugins:{legend:{display:!1}},scales:{y:{ticks:{color:"white"}},x:{ticks:{display:!1}}}}}),Object(o.jsxs)("div",{className:"coin__updatetime",children:[Object(o.jsxs)("p",{children:["Last update ",N.toLocaleTimeString("en-GB")]}),Object(o.jsx)("p",{children:N.toLocaleDateString()})]})]})},H=(c(253),function(e){var t=e.search,c=e.setSearch,a=e.setSearchAll;return Object(o.jsx)("div",{className:"coinsearch",children:Object(o.jsxs)("form",{action:"",className:"coinsearch__form",children:[Object(o.jsx)("label",{htmlFor:"searchPage",children:""===t?"Search":"Press enter for searching"}),Object(o.jsx)("input",{type:"text",placeholder:"Enter coin name..",id:"searchPage",className:"coinsearch__input",value:t,onChange:function(e){c(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&0!==t.length?(e.preventDefault(),a(t.toLowerCase().replace(/\s+/g,"-"))):"Enter"===e.key&&0===t.length&&e.preventDefault(),"Backspace"===e.key&&1===t.length&&(a(""),c(""))}})]})})}),E=c(258),P=(c(254),function(e){var t=e.currncySelected,c=e.setCurrncySelected,a=e.currency;return Object(o.jsxs)("select",{className:"currencyDropdown__select",value:t,onChange:function(e){c(e.target.value)},children:[Object(o.jsx)("option",{value:"thb",children:"--- Choose Currency ---"}),a.map((function(e){return Object(o.jsx)("option",{value:e,children:e},Object(E.a)())}))]})}),K=(c(255),function(e){for(var t=e.currentPage,c=e.setCurrentPage,a=[],n=1;n<11;n++)a.push(n);var r=function(e){parseInt(e.target.innerHTML)===t?window.location.reload():c(parseInt(e.target.innerHTML))};return Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{className:"pagination__ul",children:a.map((function(e){return Object(o.jsx)("li",{onClick:r,className:"pagination__page ".concat(t===e&&"pagination__page--active"),children:e},e)}))})})}),G=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),s=Object(m.a)(r,2),i=s[0],l=s[1],u=Object(a.useState)(""),d=Object(m.a)(u,2),p=d[0],j=d[1],b=Object(a.useState)([]),h=Object(m.a)(b,2),f=h[0],x=h[1],g=Object(a.useState)([]),O=Object(m.a)(g,2),v=O[0],_=O[1],w=Object(a.useState)("thb"),y=Object(m.a)(w,2),N=y[0],q=y[1],D=Object(a.useState)(),M=Object(m.a)(D,2),F=M[0],E=M[1],G=Object(a.useState)(1),W=Object(m.a)(G,2),T=W[0],I=W[1];Object(a.useEffect)((function(){(function(){var e=Object(k.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!0),e.next=4,S.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(N,"&order=market_cap_desc&per_page=12&page=").concat(T,"&sparkline=false"));case 4:t=e.sent,console.log(t.data),n(t.data),E(!1),window.scrollTo(0,0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[N,T]),Object(a.useEffect)((function(){(function(){var e=Object(k.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===p){e.next=18;break}return e.prev=1,E(!0),e.next=5,S.a.get("https://api.coingecko.com/api/v3/coins/".concat(p));case 5:t=e.sent,x(t.data),E(!1),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),alert("Coin not found..."),l(""),E(!1);case 16:e.next=19;break;case 18:x([]);case 19:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}})()()}),[p]),Object(a.useEffect)((function(){j(""),l("")}),[T]),Object(a.useEffect)((function(){(function(){var e=Object(k.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("https://api.coingecko.com/api/v3/simple/supported_vs_currencies");case 3:t=e.sent,console.log(t.data),_(t.data.sort()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var Q=c.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(B,{}),Object(o.jsx)(H,{search:i,setSearch:l,setSearchAll:j}),Object(o.jsx)(P,{currncySelected:N,setCurrncySelected:q,currency:v}),0===i.length&&Object(o.jsx)(K,{currentPage:T,setCurrentPage:I}),Object(o.jsxs)("div",{className:"coin__container",children:[f.length>0&&Object(o.jsx)(A,{name:f.name,id:f.id,image:f.image.large,symbol:f.symbol,volume:f.market_data.market_cap["".concat(N)],currncySelected:N,price:f.market_data.current_price["".concat(N)],priceChange:f.market_data.price_change_percentage_24h_in_currency["".concat(N)],searchAll:p}),F?Object(o.jsx)(L.a,{type:"Puff",color:"#00BFFF",height:500,width:500,className:"loader"}):0===f.length?Q.map((function(e){return Object(o.jsx)(A,{name:e.name,id:e.id,image:e.image,symbol:e.symbol,volume:e.market_cap,currncySelected:N,price:e.current_price,priceChange:e.price_change_percentage_24h,searchAll:p},e.id)})):null]}),Object(o.jsx)(K,{currentPage:T,setCurrentPage:I})]})},W=c(5);var T=function(){return Object(o.jsx)(i.a,{children:Object(o.jsx)("div",{className:"coinapp",children:Object(o.jsxs)(W.c,{children:[Object(o.jsx)(W.a,{exact:!0,path:"/",render:function(){return Object(o.jsx)(y,{})}}),Object(o.jsx)(W.a,{exact:!0,path:"/home",render:function(){return Object(o.jsx)(G,{})}})]})})})};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(i.a,{children:Object(o.jsx)(T,{})})}),document.getElementById("root"))},58:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},70:function(e,t,c){}},[[256,1,2]]]);
//# sourceMappingURL=main.b6ca48df.chunk.js.map