(this.webpackJsonpwebfront=this.webpackJsonpwebfront||[]).push([[0],{37:function(e,s,c){},39:function(e,s,c){"use strict";c.r(s);var t=c(0),i=(c(2),c(12)),l=c.n(i),n=c(13),d=c.n(n),a=(c(37),c.p+"static/media/weekling_logo_1.614b898b.png"),r=c(14),j=(c(38),function(){var e=[["08"],["09"],["10"],["11"],["12"],["13"],["14"],["15"],["16"],["17"],["18"],["19"]],s=[["00"],["01"],["02"],["03"],["04"],["05"],["06"],["07"],["00"]];function c(e){var s=e.target,c=s.parentNode;s.checked?c.style.backgroundColor=" #c3a41e":c.style.backgroundColor="#292929"}return window.onload=function(){!function(e){for(var s=1;s<8;s++)for(var t=document.getElementById(s),i=0;i<e;i++){var l=document.createElement("div");l.className="checkcontainer",l.id="checkCont"+s+i,l.style.backgroundColor="#292929",t.appendChild(l);var n=document.createElement("input");l.appendChild(n),n.className="check";var d="".concat(s,", ").concat(i);n.id=d,n.type="checkbox",n.addEventListener("change",c,!1)}}(12)},Object(t.jsxs)("html",{children:[Object(t.jsxs)("head",{children:[Object(t.jsx)("meta",{charset:"UTF-8"}),Object(t.jsx)("link",{type:"text/css",href:"pohja.css"}),Object(t.jsx)("script",{src:"index.js",children:" "})]}),Object(t.jsxs)("body",{id:"vartalo",children:[Object(t.jsx)("div",{id:"headerContainer",children:Object(t.jsx)("a",{href:"/",children:Object(t.jsx)("img",{src:"".concat(a),alt:"logo"})})}),Object(t.jsx)("div",{id:"header"}),Object(t.jsx)("div",{id:"instructions",children:Object(t.jsx)("p",{id:"instructions-text",children:"Please select available times and press Send"})}),Object(t.jsxs)("div",{id:"kalenteri",children:[Object(t.jsx)("aside",{class:"sivu",children:Object(t.jsx)("ul",{class:"left",children:Object(t.jsx)("li",{class:"ajat",children:Object(t.jsxs)("label",{className:"ajatLabel",children:["Times",Object(t.jsx)("div",{class:"time",children:Object(t.jsx)("p",{class:"teksti",children:"8-9"})}),Object(t.jsx)("div",{class:"time",children:Object(t.jsx)("p",{class:"teksti",children:"9-10"})}),Object(t.jsx)("div",{class:"time",children:Object(t.jsx)("p",{class:"teksti",children:"10-11"})}),Object(t.jsx)("div",{class:"time",children:Object(t.jsx)("p",{class:"teksti",children:"11-12"})}),Object(t.jsx)("div",{class:"time",children:Object(t.jsx)("p",{class:"teksti",children:"12-13"})}),Object(t.jsx)("div",{class:"time",children:Object(t.jsx)("p",{class:"teksti",children:"13-14"})}),Object(t.jsx)("div",{class:"time",children:Object(t.jsx)("p",{class:"teksti",children:"14-15"})}),Object(t.jsx)("div",{class:"time",children:Object(t.jsx)("p",{class:"teksti",children:"15-16"})}),Object(t.jsx)("div",{class:"time",children:Object(t.jsx)("p",{class:"teksti",children:"16-17"})}),Object(t.jsx)("div",{class:"time",children:Object(t.jsx)("p",{class:"teksti",children:"17-18"})}),Object(t.jsx)("div",{class:"time",children:Object(t.jsx)("p",{class:"teksti",children:"18-19"})}),Object(t.jsx)("div",{class:"time",children:Object(t.jsx)("p",{class:"teksti",children:"19-20"})})]})})})}),Object(t.jsxs)("ul",{class:"k",children:[Object(t.jsx)("li",{class:"date",children:Object(t.jsx)("div",{class:"group",id:"1",children:"Monday"})}),Object(t.jsx)("li",{class:"date",children:Object(t.jsx)("div",{class:"group",id:"2",children:"Tuesday"})}),Object(t.jsx)("li",{class:"date",children:Object(t.jsx)("div",{class:"group",id:"3",children:"Wednesday"})}),Object(t.jsx)("li",{class:"date",children:Object(t.jsx)("div",{class:"group",id:"4",children:"Thursday"})}),Object(t.jsx)("li",{class:"date",children:Object(t.jsx)("div",{class:"group",id:"5",children:"Friday"})}),Object(t.jsx)("li",{class:"date",children:Object(t.jsx)("div",{class:"group",id:"6",children:"Saturday"})}),Object(t.jsx)("li",{class:"date",children:Object(t.jsx)("div",{class:"group",id:"7",children:"Sunday"})})]})]}),Object(t.jsx)("button",{id:"sendButton",onClick:function(){for(var c=document.getElementsByClassName("check"),t=[],i=0;i<c.length;++i)if(c[i].checked){var l=c[i].id.split(","),n=l[0],a=l[1].trimLeft(),j=new Date;j.setDate(s[n].toString()),j.setHours(e[a].toString()),j.setMinutes(0),j.setSeconds(0),j.setMonth(0),j.setMilliseconds(0),console.log(j),t.push(j)}var o=new r.a;0===t.length?o.error("Please, select some times before submitting"):(o.success("Success!"),d.a.put("/",{times:t}).then((function(e){console.log(e.data)}),(function(e){console.log(e.response)})),setTimeout((function(){window.location.reload()}),3e3))},children:"Send"})]})]})});l.a.render(Object(t.jsx)(j,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.afad0c1a.chunk.js.map