"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{219:function(t,n,e){e.r(n),e.d(n,{default:function(){return x}});var r,c,a,u=e(885),o=e(689),i=e(791),s=e(635),p=e(433),f=e(168),d=e(444),h=d.ZP.p(r||(r=(0,f.Z)(["\n  font-weight: bold;\n"]))),v=d.ZP.ul(c||(c=(0,f.Z)(["\n  border-top: 2px solid grey;\n"]))),l=d.ZP.li(a||(a=(0,f.Z)(["\n  border-bottom: 1px solid grey;\n  padding-bottom: 12px;\n"]))),m=e(184),x=function(){var t=(0,i.useState)([]),n=(0,u.Z)(t,2),e=n[0],r=n[1],c=(0,i.useState)("idle"),a=(0,u.Z)(c,2),f=a[0],d=a[1],x=(0,i.useState)(null),b=(0,u.Z)(x,2),g=b[0],Z=b[1],w=(0,o.UO)().movieId;return(0,i.useEffect)((function(){(0,s.Ku)(w).then((function(t){var n=t.data;r(n.cast),d("resolved")})).catch((function(t){Z(t),d("rejected")}))}),[w]),(0,m.jsxs)("div",{children:["rejected"===f&&(0,m.jsx)(p.o,{message:g.message}),"resolved"===f&&(0,m.jsx)(v,{children:e.map((function(t){var n=t.id,e=t.name,r=t.character,c=t.profile_path;return(0,m.jsxs)(l,{children:[(0,m.jsx)(h,{children:e}),(0,m.jsxs)("p",{children:["Character: ",r]}),c&&(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(c),alt:e,width:"100",height:"150"})]},n)}))})]})}},433:function(t,n,e){e.d(n,{o:function(){return c}});var r=e(184),c=function(t){var n=t.message;return(0,r.jsx)("b",{children:n})}},635:function(t,n,e){e.d(n,{JS:function(){return s},Ku:function(){return f},Q_:function(){return h},fI:function(){return d},ts:function(){return p}});var r=e(861),c=e(757),a=e.n(c),u=e(44),o="https://api.themoviedb.org/3/",i="0322adb5b7f04b7c7a36cb76430c0728",s=function(){var t=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("".concat(o,"movie/").concat(n,"?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(n,"&page=1"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=219.3330392c.chunk.js.map