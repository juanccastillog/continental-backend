(this["webpackJsonpcontinental-ui"]=this["webpackJsonpcontinental-ui"]||[]).push([[0],{1:function(e,n,a){e.exports={table:"table_table__33iWm",playerscolumn:"table_playerscolumn__2fsQg",dealscontainer:"table_dealscontainer__1XrHm",dealcolumn:"table_dealcolumn__1udqx",dealheader:"table_dealheader___1Q9Q",inputcontainer:"table_inputcontainer__1jexm",truncated:"table_truncated__WqQUc",nameheader:"table_nameheader__Gr9_Y",playername:"table_playername__1P8n_",resultcolumn:"table_resultcolumn__qu47w"}},12:function(e,n,a){},14:function(e,n,a){"use strict";a.r(n);var t=a(2),r=a.n(t),s=a(6),c=a.n(s),l=(a(12),a(3)),u=a(0),i=function(e){var n=e.width,a=e.height;return Object(u.jsx)("div",{style:{width:n,height:a}})},o=a(7),d=a.n(o),m=function(e){var n=e.label,a=e.onAddName,t=r.a.useState(""),s=Object(l.a)(t,2),c=s[0],o=s[1];return Object(u.jsx)("form",{onSubmit:function(e){a(c),o(""),e.preventDefault()},children:Object(u.jsxs)("label",{className:d.a.formLabel,children:[n,Object(u.jsx)(i,{width:"30px"}),Object(u.jsx)("input",{type:"text",onChange:function(e){o(e.target.value)},placeholder:"Player name",value:c})]})})},j=a(1),b=a.n(j),h={dealsHeaders:["2t","1t 1e","2e","3t","2t 1e","2e 1t","3e"],dealsEarnings:[500,1e3,1500,2e3,2500,3e3,3500],sumEarning:5e3,resultsHeaders:["total","$"]},p=function(e){var n=e.players;return Object(u.jsxs)("div",{className:b.a.playerscolumn,children:[Object(u.jsx)("div",{className:b.a.nameheader,children:"Player"}),n.map((function(e){return Object(u.jsx)("div",{className:b.a.playername,children:e},e)}))]})},S=function(e){var n=e.deals,a=e.onChangeScore;return Object(u.jsx)("div",{className:b.a.dealscontainer,children:h.dealsHeaders.map((function(e,t){return Object(u.jsxs)("div",{className:b.a.dealcolumn,children:[Object(u.jsx)("div",{className:b.a.dealheader,children:e}),n&&n[t]&&n[t].map((function(e){return Object(u.jsx)("div",{className:b.a.inputcontainer,children:Object(u.jsx)("input",{type:"number",step:"5",value:e.value,onChange:function(n){return a({dealIndex:t,name:e.name,value:n.target.value})},onFocus:function(e){return e.preventDefault()}})},e.name)}))||null]},e)}))})},f=function(e){var n=e.totals;return Object(u.jsxs)("div",{className:b.a.resultcolumn,children:[Object(u.jsx)("div",{className:b.a.dealheader,children:h.resultsHeaders[0]}),n.map((function(e){return Object(u.jsx)("div",{children:e.scoreSum},e.name)}))]})},v=function(e){var n=e.earnings;return Object(u.jsxs)("div",{className:b.a.resultcolumn,children:[Object(u.jsx)("div",{className:b.a.dealheader,children:h.resultsHeaders[1]}),n.map((function(e){return Object(u.jsx)("div",{children:e.earningSum},e.name)}))]})},g=function(e){var n=e.players,a=e.deals,t=e.scoreSums,r=e.earningSums,s=e.onChangeScore;return Object(u.jsxs)("div",{className:b.a.table,children:[Object(u.jsx)(p,{players:n}),Object(u.jsx)(S,{deals:a,onChangeScore:s}),Object(u.jsx)(f,{totals:t}),Object(u.jsx)(v,{earnings:r})]})},x=function(e){var n=e.children;return Object(u.jsx)("div",{style:{margin:"60px"},children:n})},O=a(5),_=function(e){var n=e.scoresSetup,a=n.scores,t=n.setScores,r=e.winnersSetup,s=r.winners,c=r.setWinners,l=e.earningsSetup,u=function(e,n){return c(s.map((function(a,t){return t===n?e:a})))},i=function(e,n,a){var t,r,s=a.dealEarnings,c=a.BestScoreEarning,l=e.map((function(e){return{name:e.name,scoreSum:e.deals.reduce((function(e,n){return e+(n.isSet?n.score:0)}),0)}})),u=l.length>0&&l.reduce((function(e,n){return n.scoreSum<e.scoreSum?n:e})),i=e.map((function(a){return{name:a.name,earningSum:n.reduce((function(n,t,r){return null!==t?n+(t===a.name?s[r]*(e.length-1):-s[r]):n}),0)+(a.name===u.name?c*(e.length-1):-c)}})),o=null===(t=e[0])||void 0===t||null===(r=t.deals)||void 0===r?void 0:r.map((function(n,a){return e.map((function(e){return{name:e.name,value:e.deals[a].isSet?e.deals[a].score:""}}))}));return{players:e.map((function(e){return e.name})),deals:o,scoreSums:l,earningSums:i}}(a,s,l);return{players:i.players,deals:i.deals,scoreSums:i.scoreSums,earningSums:i.earningSums,handleChangeScore:function(e){var n=function(e,n){var a=e.dealIndex,t=e.name,r=e.value;return n.map((function(e){return e.name===t?Object(O.a)(Object(O.a)({},e),{},{deals:e.deals.map((function(e,n){return n===a?{isSet:""!==r,score:(t=r,t?parseInt(t,10):0)}:e;var t}))}):e}))}(e,a);t(n),"0"===e.value&&u(e.name,e.dealIndex)},handleChangeWinner:u}},y=function(){var e=Object(t.useState)([]),n=Object(l.a)(e,2),a=n[0],r=n[1],s=Object(t.useState)([null,null,null,null,null,null,null]),c=Object(l.a)(s,2),o=c[0],d=c[1],j=_({scoresSetup:{scores:a,setScores:r},winnersSetup:{winners:o,setWinners:d},earningsSetup:{dealEarnings:[500,1e3,1500,2e3,2500,3e3,3500],BestScoreEarning:5e3}}),b=j.players,h=j.deals,p=j.scoreSums,S=j.earningSums,f=j.handleChangeScore,v=j.handleChangeWinner;return Object(u.jsxs)(x,{children:[Object(u.jsx)(m,{label:"Name",onAddName:function(e){r(a.concat({name:e,deals:[{isSet:!1,score:0},{isSet:!1,score:0},{isSet:!1,score:0},{isSet:!1,score:0},{isSet:!1,score:0},{isSet:!1,score:0},{isSet:!1,score:0}]}))}}),Object(u.jsx)(i,{height:"20px"}),Object(u.jsx)(g,{players:b,deals:h,scoreSums:p,earningSums:S,onChangeScore:f,onChangeWinner:v})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(n){var a=n.getCLS,t=n.getFID,r=n.getFCP,s=n.getLCP,c=n.getTTFB;a(e),t(e),r(e),s(e),c(e)}))};c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),N()},7:function(e,n,a){e.exports={formLabel:"AddNameForm_formLabel__jAOhQ"}}},[[14,1,2]]]);
//# sourceMappingURL=main.d3e9b5e9.chunk.js.map