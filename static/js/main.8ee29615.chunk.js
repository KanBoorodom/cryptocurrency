(this.webpackJsonpcryptocurrency=this.webpackJsonpcryptocurrency||[]).push([[0],{120:function(e,c,t){},228:function(e,c,t){},229:function(e,c,t){},230:function(e,c,t){},231:function(e,c,t){"use strict";t.r(c);var a=t(0),n=t.n(a),r=t(73),s=t.n(r),o=t(7),i=t.n(o),l=t(16),u=t(4),p=t(12),j=t.n(p),h=t(28),d=t.n(h),b=(t(120),t(2)),g=(t(52),t(76)),m=t(1),f=function(e){var c=e.name,t=e.id,n=e.image,r=e.symbol,s=e.price,o=e.volume,p=e.currncySelected,h=e.priceChange,f=e.searchAll,O=Object(a.useState)([]),v=Object(u.a)(O,2),_=v[0],x=v[1],y=Object(a.useState)([]),k=Object(u.a)(y,2),w=k[0],S=k[1],C=Object(a.useState)(!1),N=Object(u.a)(C,2),L=N[0],P=N[1],F=new Date,D=function(e){var c=new Date(e),t=c.getHours(),a=c.getMinutes(),n=c.getSeconds(),r=c.getDate(),s=c.getMonth()+1,o=c.getFullYear();return"".concat(r,"/").concat(s,"/").concat(o," ").concat(t,":").concat(a,":").concat(n)};Object(a.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(c){var t,a,n,r,s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,P(!0),console.log(f),0===f.length){e.next=9;break}return e.next=6,j.a.get("https://api.coingecko.com/api/v3/coins/".concat(f,"/market_chart?vs_currency=").concat(p,"&days=1"));case 6:t=e.sent,e.next=12;break;case 9:return e.next=11,j.a.get("https://api.coingecko.com/api/v3/coins/".concat(c,"/market_chart?vs_currency=").concat(p,"&days=1"));case 11:t=e.sent;case 12:a=[],n=[],r=Object(b.a)(t.data.prices);try{for(r.s();!(s=r.n()).done;)o=s.value,a.push(D(o[0])),n.push(o[1])}catch(i){r.e(i)}finally{r.f()}x(a),S(n),P(!1),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(c){return e.apply(this,arguments)}})()(t)}),[t,f,p]);var E={labels:_,datasets:[{label:"Price",data:w,fill:!0,backgroundColor:h>0?"#125d1e":"#ff63844d",borderColor:h>0?"#229534":"#f45050",pointRadius:2,tension:.1}]};return Object(m.jsxs)("div",{className:"coin",children:[Object(m.jsx)("img",{className:"coin__img",src:n,alt:"crypto"}),Object(m.jsxs)("div",{className:"coin__data",children:[Object(m.jsxs)("a",{href:"https://www.coingecko.com/en/coins/".concat(c.toLowerCase().replace(/\s+/g,"-")),className:"coin__name",children:[c," ",Object(m.jsx)("br",{}),"(",r.toUpperCase(),")"]}),Object(m.jsxs)("p",{className:"coin__price",children:[p," ",s.toLocaleString()]}),Object(m.jsxs)("p",{className:"coin__volume",children:["Mkt Cap ",Object(m.jsx)("br",{}),p.toUpperCase()," ",o.toLocaleString()]}),Object(m.jsxs)("p",{className:"coin__priceChange",children:["24h change",h>0?Object(m.jsxs)("span",{className:"coin__priceChange--green",children:[" +",h.toFixed(2),"%"]}):Object(m.jsxs)("span",{className:"coin__priceChange--red",children:[" ",h.toFixed(2),"%"]})]})]}),L?Object(m.jsx)("div",{className:"coin__loadContainer",children:Object(m.jsx)(d.a,{className:"coin--load",type:"ThreeDots",color:"#00BFFF",height:80,width:100})}):Object(m.jsx)(g.a,{className:"coin__chart",data:E,options:{plugins:{legend:{display:!1}},scales:{y:{ticks:{color:"white"}},x:{ticks:{display:!1}}}}}),Object(m.jsxs)("div",{className:"coin__updatetime",children:[Object(m.jsxs)("p",{children:["Last update ",F.toLocaleTimeString("en-GB")]}),Object(m.jsx)("p",{children:F.toLocaleDateString()})]})]})},O=(t(228),function(e){var c=e.search,t=e.setSearch,a=e.setSearchAll;return Object(m.jsx)("div",{className:"coinsearch",children:Object(m.jsxs)("form",{action:"",className:"coinsearch__form",children:[Object(m.jsx)("label",{htmlFor:"searchPage",children:""===c?"Search":"Press enter for searching"}),Object(m.jsx)("input",{type:"text",placeholder:"Enter coin name..",id:"searchPage",className:"coinsearch__input",value:c,onChange:function(e){t(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&0!==c.length?(e.preventDefault(),console.log(c.toLowerCase().replace(/\s+/g,"-")),a(c.toLowerCase().replace(/\s+/g,"-"))):"Enter"===e.key&&0===c.length&&e.preventDefault(),"Backspace"===e.key&&1===c.length&&(a(""),t(""))}})]})})}),v=t(233),_=(t(229),function(e){var c=e.currncySelected,t=e.setCurrncySelected,a=e.currency;return Object(m.jsxs)("select",{className:"currencyDropdown__select",value:c,onChange:function(e){t(e.target.value)},children:[Object(m.jsx)("option",{value:"thb",children:"--- Choose Currency ---"}),a.map((function(e){return Object(m.jsx)("option",{value:e,children:e},Object(v.a)())}))]})}),x=(t(230),function(e){for(var c=e.currentPage,t=e.setCurrentPage,a=[],n=1;n<11;n++)a.push(n);var r=function(e){parseInt(e.target.innerHTML)===c?window.location.reload():t(parseInt(e.target.innerHTML))};return Object(m.jsx)("nav",{children:Object(m.jsx)("ul",{className:"pagination__ul",children:a.map((function(e){return Object(m.jsx)("li",{onClick:r,className:"pagination__page ".concat(c===e&&"pagination__page--active"),children:e},e)}))})})});var y=function(){var e=Object(a.useState)([]),c=Object(u.a)(e,2),t=c[0],n=c[1],r=Object(a.useState)(""),s=Object(u.a)(r,2),o=s[0],p=s[1],h=Object(a.useState)(""),b=Object(u.a)(h,2),g=b[0],v=b[1],y=Object(a.useState)([]),k=Object(u.a)(y,2),w=k[0],S=k[1],C=Object(a.useState)([]),N=Object(u.a)(C,2),L=N[0],P=N[1],F=Object(a.useState)("thb"),D=Object(u.a)(F,2),E=D[0],M=D[1],A=Object(a.useState)(),B=Object(u.a)(A,2),T=B[0],H=B[1],I=Object(a.useState)(1),J=Object(u.a)(I,2),U=J[0],G=J[1];Object(a.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,H(!0),e.next=4,j.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(E,"&order=market_cap_desc&per_page=12&page=").concat(U,"&sparkline=false"));case 4:c=e.sent,console.log(c.data),n(c.data),H(!1),window.scrollTo(0,0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[E,U]),Object(a.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===g){e.next=18;break}return e.prev=1,H(!0),e.next=5,j.a.get("https://api.coingecko.com/api/v3/coins/".concat(g));case 5:c=e.sent,S(c.data),H(!1),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),alert("Coin not found..."),p(""),H(!1);case 16:e.next=19;break;case 18:S([]);case 19:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}})()()}),[g]),Object(a.useEffect)((function(){v(""),p("")}),[U]),Object(a.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("https://api.coingecko.com/api/v3/simple/supported_vs_currencies");case 3:c=e.sent,console.log(c.data),P(c.data.sort()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var K=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(m.jsxs)("div",{className:"coinapp",children:[0!==w.length&&Object(m.jsx)("div",{}),Object(m.jsx)("h1",{className:"coinapp__name",children:"cryptocurrency"}),Object(m.jsx)(O,{search:o,setSearch:p,setSearchAll:v}),Object(m.jsx)(_,{currncySelected:E,setCurrncySelected:M,currency:L}),0===o.length&&Object(m.jsx)(x,{currentPage:U,setCurrentPage:G}),Object(m.jsxs)("div",{className:"coin__container",children:[0!==w.length&&Object(m.jsx)(f,{name:w.name,id:w.id,image:w.image.large,symbol:w.symbol,volume:w.market_data.market_cap["".concat(E)],currncySelected:E,price:w.market_data.current_price["".concat(E)],priceChange:w.market_data.price_change_percentage_24h_in_currency["".concat(E)],searchAll:g}),T?Object(m.jsx)(d.a,{type:"Puff",color:"#00BFFF",height:500,width:500,className:"loader"}):0===w.length?K.map((function(e){return Object(m.jsx)(f,{name:e.name,id:e.id,image:e.image,symbol:e.symbol,volume:e.market_cap,currncySelected:E,price:e.current_price,priceChange:e.price_change_percentage_24h,searchAll:g},e.id)})):""]}),Object(m.jsx)(x,{currentPage:U,setCurrentPage:G})]})};s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))},52:function(e,c,t){}},[[231,1,2]]]);
//# sourceMappingURL=main.8ee29615.chunk.js.map