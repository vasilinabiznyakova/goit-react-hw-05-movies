"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[194],{433:function(n,e,t){t.d(e,{o:function(){return c}});var r=t(184),c=function(n){var e=n.message;return(0,r.jsx)("b",{children:e})}},119:function(n,e,t){t.d(e,{s:function(){return s}});var r,c=t(731),u=t(689),a=t(168),o=t(444).ZP.li(r||(r=(0,a.Z)(["\n  &&: not(: last-child) {\n    margin-bottom: 8px;\n  }\n"]))),i=t(184),s=function(n){var e=n.films,t=(0,u.TH)();return(0,i.jsx)("ul",{children:e.map((function(n){var e=n.title,r=n.id;return(0,i.jsx)(o,{children:(0,i.jsx)(c.rU,{to:"/movies/".concat(r),state:{from:t},children:e})},r)}))})}},194:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r,c,u=t(885),a=t(731),o=t(791),i=t(635),s=t(433),p=t(119),f=t(168),l=t(444),d=l.ZP.input(r||(r=(0,f.Z)(["\n  padding: 4px 4px;\n  margin-right: 16px;\n"]))),h=l.ZP.button(c||(c=(0,f.Z)(["\n  display: inline-block;\n  width: 100px;\n  padding: 4px 4px;\n  cursor: pointer;\n  &&: hover {\n    color: white;\n    background-color: OrangeRed;\n  }\n"]))),v=t(184),m=function(){var n=(0,o.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],c=(0,o.useState)("idle"),f=(0,u.Z)(c,2),l=f[0],m=f[1],x=(0,o.useState)(null),g=(0,u.Z)(x,2),y=g[0],Z=g[1],b=(0,a.lr)(),k=(0,u.Z)(b,2),w=k[0],j=k[1],_=w.get("query");(0,o.useEffect)((function(){null!==_&&(console.log(_),m("pending"),(0,i.Q_)(_).then((function(n){r(n.data.results),m("resolved")})).catch((function(n){Z(n),m("rejected")})))}),[_]);return console.log(t),(0,v.jsxs)("main",{children:[(0,v.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.currentTarget;j({query:e.elements.query.value}),e.reset()},children:[(0,v.jsx)(d,{type:"text",name:"query"}),(0,v.jsx)(h,{type:"submit",children:"Search"})]}),"rejected"===l&&(0,v.jsx)(s.o,{message:y.message}),"pending"===l&&(0,v.jsx)("p",{children:"Loading"}),t.length>0&&(0,v.jsx)("div",{children:(0,v.jsx)(p.s,{films:t})}),null!==_&&0===t.length&&(0,v.jsx)("p",{children:"Sorry, no films found per your query, please try another key-words"})]})}},635:function(n,e,t){t.d(e,{JS:function(){return s},Ku:function(){return f},Q_:function(){return d},fI:function(){return l},ts:function(){return p}});var r=t(861),c=t(757),u=t.n(c),a=t(44),o="https://api.themoviedb.org/3/",i="0322adb5b7f04b7c7a36cb76430c0728",s=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("".concat(o,"movie/").concat(e,"?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(e,"&page=1"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=194.921379a2.chunk.js.map