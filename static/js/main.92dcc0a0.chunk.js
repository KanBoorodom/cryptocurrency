(this.webpackJsonpcryptocurrency=this.webpackJsonpcryptocurrency||[]).push([[0],{103:function(e,t,c){},111:function(e,t,c){},253:function(e,t,c){},254:function(e,t,c){},255:function(e,t,c){},256:function(e,t,c){},257:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(94),s=c.n(r),i=c(4),o=c(15),l=(c(103),c(59),c(0)),u=function(){return Object(l.jsxs)("div",{className:"cointapp__logo",children:[Object(l.jsx)("i",{className:"fab fa-gg-circle coinapp__icon"}),Object(l.jsx)("h1",{className:"coinapp__name",children:"KBCrypto"})]})},d=function(){return Object(l.jsxs)("header",{className:"landingHeader",children:[Object(l.jsx)(u,{}),Object(l.jsx)("p",{className:"landingHeader__p",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, fuga?"}),Object(l.jsx)(o.b,{className:"landingHeader__btn",to:"/coins",children:"Enter website"})]})},j=(c(61),function(e){var t=e.src,c=e.head,a=e.info;return Object(l.jsxs)("div",{className:"illust",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"illust__header",children:c}),Object(l.jsx)("p",{className:"illust__p",children:a})]}),Object(l.jsx)("img",{className:"illust__img",src:t,alt:c})]})}),m=[{head:"View your currency",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias ipsam alias, aliquid deserunt dolor.",src:"https://raw.githubusercontent.com/KanBoorodom/cryptocurrency/d0705bb2f846d31a4080b67bf3a9e272ef98239e/src/component/illust/crypto.svg"},{head:"Make a decision",info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, beatae itaque? Quasi dolore ipsa itaque voluptatem asperiores!",src:"https://raw.githubusercontent.com/KanBoorodom/cryptocurrency/538f8ff746e8e32a395bc8f0f976b98aeb8fce24/src/component/illust/dec.svg"},{head:"Anywhere Anytime",info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos error repudiandae minima inventore.",src:"https://raw.githubusercontent.com/KanBoorodom/cryptocurrency/d0705bb2f846d31a4080b67bf3a9e272ef98239e/src/component/illust/any1.svg"},{head:"Find your right crpyto now",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima saepe accusamus id ipsam sint quidem debitis ut eveniet repellat.",src:"https://raw.githubusercontent.com/KanBoorodom/cryptocurrency/188256f6623bf33551e3f13927749544814deb99/src/component/illust/find.svg"}],p=function(){return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{className:"illust__head",children:"What we provide"}),m.map((function(e,t){return Object(l.jsx)(j,{head:e.head,info:e.info,src:e.src},t)}))]})},h=c(20),b=c(21),f=function(e){var t=e.src,c=e.name,a=e.review,n=e.index,r=e.size,s=e.current,i=e.setCurrent;return Object(l.jsx)("div",{className:"reviewCard ".concat(n===s?"active":"unactive"),children:n===s&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h.a,{icon:b.a,className:"reviewCard__arrowL",onClick:function(){i(0===s?r-1:function(e){return e-1})}}),Object(l.jsx)(h.a,{icon:b.b,className:"reviewCard__arrowR",onClick:function(){i(s===r-1?0:function(e){return e+1})}}),Object(l.jsx)("img",{className:"reviewCard__img",src:t,alt:"user-review"}),Object(l.jsxs)("div",{className:"reviewCard__info",children:[Object(l.jsx)("h2",{className:"reviewCard__info__name",children:c}),Object(l.jsx)("p",{className:"reviewCard__info__p",children:a})]})]})})},g=[{name:"Jane Doe",review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias ipsam alias, aliquid deserunt dolor.",src:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},{name:"John Doe",review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, beatae itaque? Quasi dolore ipsa itaque voluptatem asperiores!",src:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},{name:"Ipsum Lorem",review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos error repudiandae minima inventore.",src:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},{name:"Lorem Ipsum",review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nam laudantium vero praesentium minima suscipit. Officia, totam recusandae?",src:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"}],_=(c(111),function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)("div",{className:"review",children:[Object(l.jsx)("h2",{className:"review__head",children:"User Testimonials"}),g.map((function(e,t){return Object(l.jsx)(f,{src:e.src,name:e.name,review:e.review,index:t,size:g.length,current:c,setCurrent:n},t)}))]})}),x=(c(63),function(e){var t=e.class1,c=e.class2,n=e.info,r=Object(a.useState)(!1),s=Object(i.a)(r,2),o=s[0],u=s[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("i",{className:"".concat(t," ").concat(c," ").concat(o&&"gelatine"),onMouseDown:function(){u(!1)},onMouseUp:function(){u(!0);var e=document.createElement("INPUT");e.value=n,navigator.clipboard.writeText(e.value)}})})}),O=function(){return Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsx)("h2",{children:"KBCrypto"}),Object(l.jsx)("p",{children:"Create by Kan"}),Object(l.jsxs)("div",{className:"footer__contactContainer",children:[Object(l.jsx)(x,{class1:"fab",class2:"fa-line",info:"https://line.me/ti/p/8DKPQeEnNA"}),Object(l.jsx)(x,{class1:"fab",class2:"fa-github-square",info:"https://github.com/KanBoorodom/cryptocurrency.git"}),Object(l.jsx)(x,{class1:"fas",class2:"fa-envelope-square",info:"kan.boorodom@gmail.com"})]})]})},v=(c(64),[{question:"What is cryptocurrency ?",answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eius accusamus magni saepe officiis rerum iste adipisci libero ad autem?"},{question:"What exactly KBCrypto is ?",answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, blanditiis debitis distinctio a facere corrupti voluptatibus optio esse."},{question:"How to get benefited from KBCrypto ?",answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic tenetur quaerat temporibus iusto quos? Natus, dignissimos impedit labore ipsum quisquam veritatis animi?"},{question:"What about customer support ?",answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolorum provident! Omnis velit labore saepe!"}]),y=function(e){var t=e.question,c=e.answer,n=Object(a.useState)(!1),r=Object(i.a)(n,2),s=r[0],o=r[1];return Object(l.jsxs)("div",{className:"qa",style:s?{borderBottom:"none"}:{borderBottom:"2px solid #9ac7c1"},onClick:function(e){o(!s)},children:[Object(l.jsxs)("div",{className:"faq__question",children:[Object(l.jsx)("p",{children:t}),Object(l.jsx)(h.a,{className:s?"faq__question--arrowUp":"faq__question--arrowDown",icon:b.c})]}),Object(l.jsx)("p",{className:"faq__answer ".concat(s&&"faq__answer--active"),children:c})]})},w=function(){return Object(l.jsxs)("div",{className:"faq",children:[Object(l.jsx)("h2",{className:"faq__head",children:"Frequently Asked Questions"}),v.map((function(e,t){return Object(l.jsx)(y,{question:e.question,answer:e.answer},t)}))]})},k=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{}),Object(l.jsx)(p,{}),Object(l.jsx)(_,{}),Object(l.jsx)(w,{}),Object(l.jsx)(O,{})]})},N=c(10),C=c.n(N),S=c(17),D=c(16),L=c.n(D),q=c(26),B=c.n(q),F=c(3),P=c(58),A=(c(55),function(e){var t=e.id,c=e.day,n=e.searchAll,r=e.currencySelected,s=e.priceChange,o=Object(a.useState)(!1),u=Object(i.a)(o,2),d=u[0],j=u[1],m=Object(a.useState)([]),p=Object(i.a)(m,2),h=p[0],b=p[1],f=Object(a.useState)([]),g=Object(i.a)(f,2),_=g[0],x=g[1],O=function(e){var t=new Date(e),c=t.getHours(),a=t.getMinutes(),n=t.getSeconds(),r=t.getDate(),s=t.getMonth()+1,i=t.getFullYear();return"".concat(r,"/").concat(s,"/").concat(i," ").concat(c,":").concat(a,":").concat(n)};Object(a.useEffect)((function(){(function(){var e=Object(S.a)(C.a.mark((function e(t){var a,s,i,o,l,u;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,j(!0),0===n.length){e.next=8;break}return e.next=5,L.a.get("https://api.coingecko.com/api/v3/coins/".concat(n,"/market_chart?vs_currency=").concat(r,"&days=").concat(c));case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,L.a.get("https://api.coingecko.com/api/v3/coins/".concat(t,"/market_chart?vs_currency=").concat(r,"&days=").concat(c));case 10:a=e.sent;case 11:s=[],i=[],o=Object(F.a)(a.data.prices);try{for(o.s();!(l=o.n()).done;)u=l.value,s.push(O(u[0])),i.push(u[1])}catch(d){o.e(d)}finally{o.f()}b(s),x(i),j(!1),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t){return e.apply(this,arguments)}})()(t)}),[t,n,r,c]),P.b.font.size=14;var v={labels:h,datasets:[{label:"Price",data:_,fill:!0,backgroundColor:s>0?"#125d1e":"#ff63844d",borderColor:s>0?"#26bf3e":"#f45050",pointRadius:2,tension:.1}]};return Object(l.jsx)(l.Fragment,{children:d?Object(l.jsx)("div",{className:"coin__loadContainer",children:Object(l.jsx)(B.a,{className:"coin--load",type:"ThreeDots",color:"#00BFFF",height:80,width:100})}):Object(l.jsx)(P.a,{className:"coin__chart",data:v,options:{plugins:{legend:{display:!1}},scales:{y:{ticks:{color:"white"}},x:{ticks:{display:!1}}}}})})}),H=function(e){var t=e.coin,c=e.currencySelected,a=e.searchAll,n=new Date;return Object(l.jsxs)("div",{className:"coin ".concat(t.price_change_percentage_24h>0?"coin__top--green":"coin__top--red"),children:[Object(l.jsx)("img",{className:"coin__img",src:t.image,alt:"crypto"}),Object(l.jsxs)("div",{className:"coin__data",children:[Object(l.jsxs)(o.b,{className:"coin__name",to:"/coins/".concat(t.id.toLowerCase()),children:[t.name," ",Object(l.jsx)("br",{}),"(",t.symbol.toUpperCase(),")"]}),Object(l.jsxs)("p",{className:"coin__price",children:[c," ",t.current_price.toLocaleString()]}),Object(l.jsxs)("p",{className:"coin__volume",children:["Mkt Cap ",Object(l.jsx)("br",{}),c.toUpperCase()," ",t.market_cap.toLocaleString()]}),Object(l.jsxs)("p",{className:"coin__priceChange",style:{backgroundColor:t.price_change_percentage_24h>0?"#1b7642":"#722727"},children:["24h change",Object(l.jsx)("br",{}),t.price_change_percentage_24h>0?Object(l.jsxs)("span",{className:"coin__priceChange--green",children:[" +",t.price_change_percentage_24h.toFixed(2),"%"]}):Object(l.jsxs)("span",{className:"coin__priceChange--red",children:[" ",t.price_change_percentage_24h.toFixed(2),"%"]})]})]}),Object(l.jsx)(A,{id:t.id,day:1,searchAll:a,currencySelected:c,priceChange:t.price_change_percentage_24h}),Object(l.jsxs)("div",{className:"coin__updatetime",children:[Object(l.jsxs)("p",{children:["Last update ",n.toLocaleTimeString("en-GB")]}),Object(l.jsx)("p",{children:n.toLocaleDateString()})]})]})},M=Object(a.memo)(H),I=(c(253),function(e){var t=e.search,c=e.setSearch,a=e.setSearchAll;return Object(l.jsx)("div",{className:"coinsearch",children:Object(l.jsxs)("form",{action:"",className:"coinsearch__form",children:[Object(l.jsx)("label",{htmlFor:"searchPage",children:""===t?"Search":"Press enter for searching"}),Object(l.jsx)("input",{type:"text",placeholder:"Enter coin name..",maxLength:"20",id:"searchPage",className:"coinsearch__input",value:t,onChange:function(e){var t;c((t=e.target.value).charAt(0).toUpperCase()+t.slice(1))},onKeyDown:function(e){"Enter"===e.key&&0!==t.length&&(e.preventDefault(),0!==t.length&&a(t.toLowerCase().replace(/\s+/g,"-"))),"Backspace"===e.key&&1===t.length&&(a(""),c(""))}})]})})}),T=c(259),E=(c(254),function(e){var t=e.currncySelected,c=e.setCurrncySelected,a=e.currency;return Object(l.jsxs)("select",{className:"currencyDropdown__select",value:t,onChange:function(e){c(e.target.value)},children:[Object(l.jsx)("option",{value:"thb",children:"--- Choose Currency ---"}),a.map((function(e){return Object(l.jsx)("option",{value:e,children:e},Object(T.a)())}))]})}),K=(c(255),function(e){for(var t=e.currentPage,c=e.setCurrentPage,a=[],n=1;n<11;n++)a.push(n);var r=function(e){c(parseInt(e.target.innerHTML))};return Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{className:"pagination__ul",children:a.map((function(e){return Object(l.jsx)("li",{onClick:r,className:"pagination__page ".concat(t===e&&"pagination__page--active"),children:e},e)}))})})}),G=function(e){var t=e.currencySelected,c=e.setCurrencySelected,n=Object(a.useState)([]),r=Object(i.a)(n,2),s=r[0],o=r[1],d=Object(a.useState)(""),j=Object(i.a)(d,2),m=j[0],p=j[1],h=Object(a.useState)(""),b=Object(i.a)(h,2),f=b[0],g=b[1],_=Object(a.useState)({}),x=Object(i.a)(_,2),O=x[0],v=x[1],y=Object(a.useState)([]),w=Object(i.a)(y,2),k=w[0],N=w[1],D=Object(a.useState)(),q=Object(i.a)(D,2),F=q[0],P=q[1],A=Object(a.useState)(1),H=Object(i.a)(A,2),T=H[0],G=H[1];Object(a.useEffect)((function(){(function(){var e=Object(S.a)(C.a.mark((function e(){var c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P(!0),e.next=4,L.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(t,"&order=market_cap_desc&per_page=12&page=").concat(T,"&sparkline=false"));case 4:c=e.sent,o(c.data),P(!1),console.log(c.data),window.scrollTo(0,0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[t,T]),Object(a.useEffect)((function(){(function(){var e=Object(S.a)(C.a.mark((function e(){var c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(f.length>0)){e.next=18;break}return e.prev=1,P(!0),e.next=5,L.a.get("https://api.coingecko.com/api/v3/coins/".concat(f));case 5:c=e.sent,v({data:{name:c.data.name,id:c.data.id,image:c.data.image.large,symbol:c.data.symbol,market_cap:c.data.market_data.market_cap["".concat(t)],current_price:c.data.market_data.current_price["".concat(t)],price_change_percentage_24h:c.data.market_data.price_change_percentage_24h_in_currency["".concat(t)]}}),P(!1),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),alert("Coin not found..."),p(""),P(!1);case 16:e.next=19;break;case 18:v([]);case 19:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}})()()}),[f,t]),Object(a.useEffect)((function(){g(""),p("")}),[T]),Object(a.useEffect)((function(){(function(){var e=Object(S.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("https://api.coingecko.com/api/v3/simple/supported_vs_currencies");case 3:t=e.sent,N(t.data.sort()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var V=s.filter((function(e){return e.name.includes(m)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(I,{search:m,setSearch:p,setSearchAll:g}),Object(l.jsx)(E,{currencySelected:t,setCurrencySelected:c,currency:k}),0===m.length&&Object(l.jsx)(K,{currentPage:T,setCurrentPage:G}),Object(l.jsxs)("div",{className:"coin__container",children:[0!==Object.keys(O).length&&Object(l.jsx)(M,{coin:O.data,currencySelected:t,searchAll:f}),F?Object(l.jsx)(B.a,{type:"Puff",color:"#00BFFF",height:500,width:500,className:"loader"}):0===Object.keys(O).length?V.map((function(e){return Object(l.jsx)(M,{coin:e,currencySelected:t,searchAll:f},e.id)})):null]}),Object(l.jsx)(K,{currentPage:T,setCurrentPage:G})]})},V=c(5),U=(c(93),function(e){var t=e.day,c=e.setDay,a=function(e){var t=e.target.innerHTML.replace(/\D/g,"");c("24"!==t?t:"1")};return Object(l.jsx)("div",{className:"daySelect",children:[{id:"1",value:"24h"},{id:"7",value:"7d"},{id:"14",value:"14d"},{id:"30",value:"30d"}].map((function(e){return Object(l.jsx)("div",{onClick:a,style:{backgroundColor:"".concat(t===e.id?"#1d6085":"")},children:e.value},e.id)}))})}),W=function(e){var t=e.currencySelected,c=Object(a.useState)([]),n=Object(i.a)(c,2),r=n[0],s=n[1],u=Object(a.useState)(!0),d=Object(i.a)(u,2),j=d[0],m=d[1],p=Object(a.useState)("1"),f=Object(i.a)(p,2),g=f[0],_=f[1],x=Object(V.f)().coinName;Object(a.useEffect)((function(){(function(){var e=Object(S.a)(C.a.mark((function e(){var c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("https://api.coingecko.com/api/v3/coins/".concat(x));case 3:c=e.sent,s({cName:c.data.name,symbol:c.data.symbol.toUpperCase(),img:c.data.image.small,rank:c.data.market_cap_rank,currentPrice:c.data.market_data.current_price["".concat(t)].toLocaleString(),changePercentage:c.data.market_data.price_change_percentage_24h_in_currency["".concat(t)],marketCap:c.data.market_data.market_cap["".concat(t)].toLocaleString(),marketVolume:c.data.market_data.total_volume["".concat(t)].toLocaleString(),dayHigh:c.data.market_data.high_24h["".concat(t)].toLocaleString(),dayLow:c.data.market_data.low_24h["".concat(t)].toLocaleString(),ath:c.data.market_data.ath["".concat(t)],athPercentage:c.data.market_data.ath_change_percentage["".concat(t)],athDate:c.data.market_data.ath_date["".concat(t)],atl:c.data.market_data.atl["".concat(t)],atlPercentage:c.data.market_data.atl_change_percentage["".concat(t)],atlDate:c.data.market_data.atl_date["".concat(t)],priceChange:c.data.market_data.price_change_percentage_24h_in_currency["".concat(t)]}),m(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[x,t]);var O=function(e){var t=new Date(e);return"".concat(t.toLocaleString("default",{month:"short"})," ").concat(t.getDate(),", ").concat(t.getFullYear())};return Object(l.jsx)("section",{className:"coinInfo",children:j?Object(l.jsx)(B.a,{type:"Puff",color:"#00BFFF",height:500,width:500,style:{display:"flex",justifyContent:"center"}}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(o.b,{to:"/coins",style:{color:"#ffe700",display:"inline",cursor:"pointer"},children:["Coins",Object(l.jsx)(h.a,{style:{fontSize:".75rem",margin:"0 .25em"},icon:b.d})]}),Object(l.jsx)("span",{style:{color:"white",textTransform:"capitalize",display:"inline"},children:x}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"coinInfo__head",children:[Object(l.jsx)("img",{className:"coinInfo__head__img",src:r.img,alt:"coin"}),Object(l.jsxs)("div",{style:{position:"relative",marginLeft:"1.5em"},children:[Object(l.jsxs)("p",{className:"coinInfo__head__rank",children:["MarketCap Rank ",r.rank]}),Object(l.jsxs)("h1",{className:"coinInfo__head__name",children:[r.cName," (",r.symbol,")"]})]})]}),Object(l.jsxs)("div",{style:{position:"relative",marginBottom:"2em"},children:[Object(l.jsxs)("p",{className:"coinInfo__price",children:[t," ",r.currentPrice]}),Object(l.jsxs)("p",{className:"coinInfo__priceChange ".concat(r.changePercentage<0&&"--red"),children:[r.changePercentage.toFixed(2),"%"]})]}),Object(l.jsxs)("div",{className:"coinInfo__value",children:[Object(l.jsxs)("p",{children:["Market Cap ",Object(l.jsxs)("span",{children:[" ",t," ",r.marketCap]})]}),Object(l.jsxs)("p",{children:["Trading Volume",Object(l.jsxs)("span",{children:[" ",t," ",r.marketVolume]})]}),Object(l.jsxs)("p",{children:["24 Hour High",Object(l.jsxs)("span",{children:[" ",t," ",r.dayHigh]})]}),Object(l.jsxs)("p",{children:["24 Hour Low",Object(l.jsxs)("span",{children:[" ",t," ",r.dayLow]})]}),Object(l.jsxs)("p",{children:["All-Time High",Object(l.jsxs)("span",{children:[" ",t," ",r.ath]}),Object(l.jsxs)("span",{className:"coinInfo__value__ATPercentage",style:{color:"".concat(r.athPercentage>0?"#2bba2b":"#ee3535")},children:[r.athPercentage.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),"%"]}),Object(l.jsx)("span",{className:"coinInfo__value__ATDate",children:O(r.athDate)})]}),Object(l.jsxs)("p",{children:["All-Time Low",Object(l.jsxs)("span",{children:[" ",t," ",r.atl]}),Object(l.jsxs)("span",{className:"coinInfo__value__ATPercentage",style:{color:"".concat(r.athPercentage<0?"#2bba2b":"#ee3535")},children:[r.atlPercentage.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),"%"]}),Object(l.jsx)("span",{className:"coinInfo__value__ATDate",children:O(r.atlDate)})]})]})]}),Object(l.jsxs)("div",{style:{marginBottom:"2em"},children:[Object(l.jsx)(U,{day:g,setDay:_}),Object(l.jsx)(A,{id:x,searchAll:"",day:g,currencySelected:t,priceChange:r.priceChange})]})]})]})})};c(256);var z=function(){var e=Object(a.useState)("thb"),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(l.jsx)(o.a,{children:Object(l.jsx)("div",{className:"coinapp",children:Object(l.jsxs)(V.c,{children:[Object(l.jsx)(V.a,{exact:!0,path:"/cryptocurrency",children:Object(l.jsx)(k,{})}),Object(l.jsx)(V.a,{exact:!0,path:"/coins",children:Object(l.jsx)(G,{currencySelected:c,setCurrencySelected:n})}),Object(l.jsx)(V.a,{path:"/coins/:coinName",children:Object(l.jsx)(W,{currencySelected:c})})]})})})};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(z,{})}),document.getElementById("root"))},55:function(e,t,c){},59:function(e,t,c){},61:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},93:function(e,t,c){}},[[257,1,2]]]);
//# sourceMappingURL=main.92dcc0a0.chunk.js.map