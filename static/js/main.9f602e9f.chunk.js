(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),o=n.n(a),i=n(3),s=n(6),d=n(8),b=n(0),j=function(){return Object(b.jsx)("p",{children:"No feedback yet"})},u=n(4),l=n.n(u),O=function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.percentage;return r>0?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("ul",{className:l.a.list,children:[Object(b.jsxs)("li",{children:["Good:",t]}),Object(b.jsxs)("li",{children:["Neutral:",n]}),Object(b.jsxs)("li",{children:["Bad:",c]})]}),Object(b.jsxs)("p",{children:["Total:",r]}),Object(b.jsxs)("p",{children:["Positive percentage: ",a,"%"]})]}):Object(b.jsx)(j,{})},h=n(2),x=n.n(h),p=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsx)("button",{className:l.a.button,type:"button",onClick:function(){return n(e)},children:e},e)}))})},f=p;p.prototype={options:x.a.array.isRequired,onLeaveFeedback:x.a.func.isRequired};var g=function(e){var t=e.title,n=e.children;return Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:t}),n]})},k=g;g.prototype={title:x.a.string.isRequired};var v=function(){var e=Object(c.useState)({good:0,neutral:0,bad:0}),t=Object(d.a)(e,2),n=t[0],r=t[1],a=function(){return n.good+n.neutral+n.bad};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(k,{title:"Please leave feedback",children:Object(b.jsx)(f,{options:["good","neutral","bad"],onLeaveFeedback:function(e){r((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(i.a)({},e,t[e]+1))}))}})}),Object(b.jsx)(k,{title:"Statistics",children:Object(b.jsx)(O,{good:n.good,neutral:n.neutral,bad:n.bad,total:a(),percentage:function(){var e=a(),t=n.good;return 0===e?0:Math.round(t/e*100)}()})})]})},_=function(){return Object(b.jsx)(v,{})};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={button:"Feedback_button__3VOvU",list:"Feedback_list___NQ6i",section:"Feedback_section__2ECZO"}}},[[16,1,2]]]);
//# sourceMappingURL=main.9f602e9f.chunk.js.map