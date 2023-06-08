"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[611],{8611:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r,a=t(2791),i=t(9434),s=t(6595),o=t(1413),c=t(9439),u=t(6151),d=t(3239),l=t(3417),m=t(3543),f=t(4358),h=t(4936),x=t(3329),v=function(){var e=(0,a.useState)(!1),n=(0,c.Z)(e,2),t=n[0],r=n[1],v=(0,i.v9)((function(e){return e.contacts.items})),j=(0,i.v9)(h.A),p=(0,i.I0)(),b=(0,a.forwardRef)((function(e,n){return(0,x.jsx)(f.Z,(0,o.Z)({elevation:6,ref:n,variant:"filled"},e))})),Z=function(e,n){"clickaway"!==n&&r(!1)},C=function(e){return v.some((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))};return(0,x.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.elements,t=n.name,a=n.number,i={name:t.value,number:a.value};C(i)?alert("".concat(i.name," is already in contacts")):(p((0,s.uK)(i)),r(!0),e.target.reset())},children:[(0,x.jsx)("h2",{children:"Contacts"}),(0,x.jsx)(l.Z,{id:"name",label:"Name",variant:"outlined",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,x.jsx)(l.Z,{id:"number",label:"Number",variant:"outlined",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),"add"===j.operation?(0,x.jsx)(u.Z,{type:"submit",variant:"contained",children:(0,x.jsx)(d.Z,{size:25,color:"inherit"})}):(0,x.jsx)(u.Z,{type:"submit",variant:"contained",children:"Add contact"}),(0,x.jsx)(m.Z,{open:t,autoHideDuration:3e3,onClose:Z,children:(0,x.jsx)(b,{onClose:Z,severity:"success",sx:{width:"100%"},children:"Contact added successfully!"})})]})},j=t(4332),p=function(){var e=(0,i.v9)((function(e){return e.filter})),n=(0,i.I0)();return(0,x.jsx)(l.Z,{id:"outlined-basic",label:"find contacts by name",variant:"outlined",type:"text",name:"filter",value:e,onChange:function(e){return n((0,j.xO)(e.target.value))},size:"small"})},b=t(3433),Z=t(7924),C=function(e){var n=e.id,t=e.name,r=e.number,a=e.children;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("li",{children:[t,": ",r," ",a]},n),(0,x.jsx)(Z.Z,{})]})},y=t(7247),w=function(){var e=(0,a.useState)(!1),n=(0,c.Z)(e,2),t=n[0],r=n[1],o=(0,a.useState)([]),l=(0,c.Z)(o,2),h=l[0],v=l[1],j=(0,i.v9)((function(e){return e.contacts.items})),p=(0,i.v9)((function(e){return e.filter})),Z=(0,i.I0)(),w=j.filter((function(e){return e.name.toLowerCase().includes(p.toLowerCase())})),g=function(){r(!1)};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("ul",{children:w.map((function(e){return(0,x.jsx)(C,{id:e.id,name:e.name,number:e.number,children:(0,x.jsx)(u.Z,{variant:"outlined",color:"error",size:"small",startIcon:(0,x.jsx)(y.Z,{}),onClick:function(){return n=e.id,v((function(e){return[].concat((0,b.Z)(e),[n])})),Z((0,s.GK)(n)),void r(!0);var n},children:h.includes(e.id)?(0,x.jsx)(d.Z,{size:15,color:"inherit"}):"delete"})},e.id)}))}),(0,x.jsx)(m.Z,{open:t,autoHideDuration:3e3,onClose:g,children:(0,x.jsx)(f.Z,{onClose:g,severity:"success",sx:{width:"100%"},children:"Contact deleted successfully!"})})]})},g=t(168),k=t(225).Z.div(r||(r=(0,g.Z)(["\nwidth: 40px;\nheight: 40px;\nborder-radius: 50%;\nborder: 4px solid #ccc;\nborder-top-color: #999;\nanimation: spin 1s ease-in-out infinite;\n}\n\n@keyframes spin {\n0% {\n  transform: rotate(0deg);\n}\n100% {\n  transform: rotate(360deg);\n}"]))),z=function(){var e=(0,i.v9)(h.A),n=(0,i.I0)();return(0,a.useEffect)((function(){n((0,s.yF)())}),[n]),(0,x.jsxs)("div",{children:[(0,x.jsx)("h1",{children:"Phonebook"}),(0,x.jsx)("div",{children:(0,x.jsx)(v,{})}),(0,x.jsx)("div",{children:"fatch"===e.operation?(0,x.jsx)("div",{children:(0,x.jsx)(k,{})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p,{}),(0,x.jsx)(w,{})]})})]})}}}]);
//# sourceMappingURL=611.e54e648c.chunk.js.map