"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[22],{22:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(433),r=n(439),c=n(154),i=n(791),o=n(861),s=n(757),l=n.n(s),u=n(243),h={method:"GET",url:"https://api.themoviedb.org/3/trending/all/day?api_key=e3d680b6e1d63d40d03962db80e2a1a0rfvb ",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmIwZjA2NDE5YzM3N2Y5MjU1OGEyMjM2Mjc0MTQ5NSIsInN1YiI6IjYxZTZiZjI3YjdhYmI1MDAxYTI1MWZhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.StYavZ4LzGmhemX6cHksaIzE34BKhIiazMjEt5zPnEE")}},m=function(){var e=(0,o.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.Z.request(h).then((function(e){return e.data})).catch((function(e){console.error(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=n(565),f=n(689),Z=n(87),p=n(184),j="idle",I="panding",N="rejected",k="resolved",v=function(){var e=(0,d.a)().setId,t=(0,i.useState)([]),n=(0,r.Z)(t,2),o=n[0],s=n[1],l=(0,i.useState)(j),u=(0,r.Z)(l,2),h=u[0],v=u[1],x=(0,f.TH)();(0,i.useEffect)((function(){v(I),m().then((function(e){s((0,a.Z)(e.results)),v(k)})).catch((function(e){console.error(e),v(N)}))}),[]);var _=function(t){e(t)};return(0,p.jsxs)("div",{className:c.Z.home,children:[(0,p.jsx)("h1",{className:c.Z.home_title,children:"Trending Today"}),h===I&&(0,p.jsx)("p",{className:c.Z.home_title,children:"Loading..."}),h===k&&(0,p.jsx)("ul",{className:c.Z.home_list,children:o.map((function(e){var t=e.title,n=e.id,a=e.name;return t?(0,p.jsx)("li",{onClick:function(){_(n)},className:c.Z.home_item,children:(0,p.jsx)(Z.rU,{className:c.Z.home_link,to:"/movies/".concat(n),state:{from:x},children:t})},n):(0,p.jsx)("li",{onClick:function(){_(n)},className:c.Z.home_item,children:(0,p.jsx)(Z.rU,{className:c.Z.home_link,to:"/movies/".concat(n),state:{from:x},children:a})},n)}))})]})}}}]);
//# sourceMappingURL=22.b6671c4b.chunk.js.map