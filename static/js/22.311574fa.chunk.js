"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[22],{22:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(433),r=n(439),c=n(154),i=n(791),o=n(861),s=n(757),l=n.n(s),u=n(243),h={method:"GET",url:"https://api.themoviedb.org/3/trending/all/day?api_key=e3d680b6e1d63d40d03962db80e2a1a0rfvb ",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2Q2ODBiNmUxZDYzZDQwZDAzOTYyZGI4MGUyYTFhMCIsInN1YiI6IjY0NjRjMmU2ZDA1YTAzMDExOWRlYzU2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q0ZQUwtEPrByjiIx7f7hGYHdbh5ojLcYEsIIKeW2RXE")}},d=function(){var e=(0,o.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.Z.request(h).then((function(e){return e.data})).catch((function(e){console.error(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=n(565),f=n(689),p=n(87),Z=n(184),j="idle",I="panding",x="rejected",N="resolved",k=function(){var e=(0,m.a)().setId,t=(0,i.useState)([]),n=(0,r.Z)(t,2),o=n[0],s=n[1],l=(0,i.useState)(j),u=(0,r.Z)(l,2),h=u[0],k=u[1],v=(0,f.TH)();(0,i.useEffect)((function(){k(I),d().then((function(e){s((0,a.Z)(e.results)),k(N)})).catch((function(e){console.error(e),k(x)}))}),[]);var _=function(t){e(t)};return(0,Z.jsxs)("div",{className:c.Z.home,children:[(0,Z.jsx)("h1",{className:c.Z.home_title,children:"Trending Today"}),h===I&&(0,Z.jsx)("p",{className:c.Z.home_title,children:"Loading..."}),h===N&&(0,Z.jsx)("ul",{className:c.Z.home_list,children:o.map((function(e){var t=e.title,n=e.id,a=e.name;return t?(0,Z.jsx)("li",{onClick:function(){_(n)},className:c.Z.home_item,children:(0,Z.jsx)(p.rU,{className:c.Z.home_link,to:"/movies/".concat(n),state:{from:v},children:t})},n):(0,Z.jsx)("li",{onClick:function(){_(n)},className:c.Z.home_item,children:(0,Z.jsx)(p.rU,{className:c.Z.home_link,to:"/movies/".concat(n),state:{from:v},children:a})},n)}))})]})}}}]);
//# sourceMappingURL=22.311574fa.chunk.js.map