(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(9),c=n.n(a),s=(n(14),n(6)),l=n(2),i=n(1),r=n(5),u=(n(15),n(16),n(0)),j=function(e){var t="card "+e.className;return Object(u.jsx)("div",{className:t,children:e.children})},o=(n(18),function(e){return Object(u.jsx)("div",{className:"expenses-filter",children:Object(u.jsxs)("div",{className:"expenses-filter__control",children:[Object(u.jsx)("label",{children:"Filter by year"}),Object(u.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(u.jsx)("option",{value:"2022",children:"2022"}),Object(u.jsx)("option",{value:"2021",children:"2021"}),Object(u.jsx)("option",{value:"2020",children:"2020"}),Object(u.jsx)("option",{value:"2019",children:"2019"})]})]})})}),d=(n(19),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.getFullYear(),a=e.date.toLocaleString("en-US",{day:"2-digit"});return Object(u.jsxs)("div",{className:"expense-date",children:[Object(u.jsx)("div",{className:"expense-date__month",children:t}),Object(u.jsx)("div",{className:"expense-date__year",children:n}),Object(u.jsx)("div",{className:"expense-date__day",children:a})]})}),b=(n(20),function(e){return Object(u.jsx)("li",{children:Object(u.jsxs)(j,{className:"expense-item",children:[Object(u.jsx)(d,{date:e.date}),Object(u.jsxs)("div",{className:"expense-item__description",children:[Object(u.jsx)("h2",{children:e.title}),Object(u.jsxs)("div",{className:"expense-item__price",children:[e.currency,e.amount]})]})]})})}),x=(n(21),function(e){return 0===e.items.length?Object(u.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(u.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(u.jsx)(b,{title:e.title,amount:e.amount,currency:e.currency,date:e.date},e.id)}))})}),O=(n(22),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(u.jsxs)("div",{className:"chart-bar",children:[Object(u.jsx)("div",{className:"chart-bar__inner",children:Object(u.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(u.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),h=(n(23),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return Object(u.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(u.jsx)(O,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),m=function(e){var t,n=0,a=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],c=Object(r.a)(e.expenses);try{for(c.s();!(t=c.n()).done;){var s=t.value;n="$"===s.currency?75.09*s.amount:s.amount,a[s.date.getMonth()].value+=n}}catch(l){c.e(l)}finally{c.f()}return Object(u.jsx)(h,{dataPoints:a})},v=function(e){var t,n=Object(i.useState)("2020"),a=Object(l.a)(n,2),c=a[0],s=a[1],d=0,b=e.items.filter((function(e){return e.date.getFullYear().toString()===c})),O=function(e){"$"===e.currency?d+=75.09*e.amount:d+=e.amount},h=Object(r.a)(b);try{for(h.s();!(t=h.n()).done;){O(t.value)}}catch(v){h.e(v)}finally{h.f()}return Object(u.jsx)("div",{children:Object(u.jsxs)(j,{className:"expenses",children:[Object(u.jsx)(o,{selected:c,onChangeFilter:function(e){s(e)}}),Object(u.jsxs)("h3",{className:"total-expenses",children:["Total expense for ",c," is $",(d/75.09).toFixed(2)," (Rs.",d.toFixed(2),")"]}),Object(u.jsx)(m,{expenses:b}),Object(u.jsx)(x,{items:b})]})})},p=n(8),f=(n(24),function(e){var t=Object(i.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1],s=Object(i.useState)("Rs."),r=Object(l.a)(s,2),j=r[0],o=r[1],d=Object(i.useState)(""),b=Object(l.a)(d,2),x=b[0],O=b[1],h=Object(i.useState)(""),m=Object(l.a)(h,2),v=m[0],p=m[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,date:new Date(v),currency:j,amount:+x};e.onSaveExpenseData(n),p(""),c(""),O("")},children:[Object(u.jsxs)("div",{className:"new-expense__controls",children:[Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Title"}),Object(u.jsx)("input",{required:!0,type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Amount"}),Object(u.jsxs)("select",{className:"new-expense__select",onChange:function(e){o(e.target.value)},children:[Object(u.jsx)("option",{name:"ruppee",children:"Rs."}),Object(u.jsx)("option",{name:"dollar",children:"$"})]}),Object(u.jsx)("input",{required:!0,type:"number",min:"0.01",step:"0.01",value:x,onChange:function(e){O(e.target.value)}})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Date"}),Object(u.jsx)("input",{required:!0,type:"date",min:"2019-01-01",max:"2022-12-31",value:v,onChange:function(e){p(e.target.value)}})]})]}),Object(u.jsxs)("div",{className:"new-expense__actions",children:[Object(u.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(u.jsx)("button",{type:"submit",children:"Add Expense"})]})]})}),_=(n(25),function(e){var t=Object(i.useState)(!1),n=Object(l.a)(t,2),a=n[0],c=n[1];return Object(u.jsx)("div",{className:"new-expense",children:a?Object(u.jsx)(f,{onSaveExpenseData:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),c(!1)},onCancel:function(){c(!1)}}):Object(u.jsx)("button",{onClick:function(){c(!0)},children:"Add New Expense"})})}),N=[{id:"e1",title:"Toilet Paper",amount:94.12,currency:"$",date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,currency:"$",date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,currency:"$",date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,currency:"$",date:new Date(2021,5,12)}],y=function(){var e=Object(i.useState)(N),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(_,{onAddExpense:function(e){a((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(u.jsx)(v,{items:n})]})};c.a.render(Object(u.jsx)(y,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.b55a2d64.chunk.js.map