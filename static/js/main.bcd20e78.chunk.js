(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={ul:"ContactList_ul__3Hlwu",li:"ContactList_li__-28s1",span:"ContactList_span__3XQLo",button:"ContactList_button__1_8Vz",enter:"ContactList_enter__2Ib2h",enterActive:"ContactList_enterActive__1t1C3",exit:"ContactList_exit__3NYjc",exitActive:"ContactList_exitActive__2A3_m"}},23:function(t,e,n){t.exports={label:"Filter_label__p9iKJ",input:"Filter_input__1csXT"}},28:function(t,e,n){t.exports={enter:"alert_enter__yKqus",enterActive:"alert_enterActive__3olUJ",exit:"alert_exit__mjM8o",exitActive:"alert_exitActive__2LTPN"}},48:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),r=n.n(c),o=n(5),i=n.n(o),s=n(14),u=n(15),l=n(17),p=n(16),b=n(25),_=n(4),m=n(27),j=n.n(m),d="contact/add",O="contact/delete",h="contact/set",f=n(50),x=n(6),v=n.n(x),y=n(28),N=n.n(y),C=n(9),A=n.n(C),g=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",alert:!1},t.inputChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.addContact=function(e){e.preventDefault(),t.props.contacts.some((function(e){return e.name===t.state.name||e.name.toLowerCase()===t.state.name}))?(t.setState({alert:!0}),setTimeout((function(){t.setState({alert:!1}),t.setState({name:"",number:""})}),3e3)):(t.props.onSubmit(t.state),t.setState({name:"",number:""}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,c=t.alert;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f.a,{appear:c,in:c,timeout:500,classNames:N.a,unmountOnExit:!0,children:Object(a.jsxs)("p",{className:A.a.alert,children:["Contact ",e," already exists!"]})}),Object(a.jsxs)("form",{onSubmit:this.addContact,className:v.a.form,children:[Object(a.jsxs)("label",{className:v.a.label,children:["Name",Object(a.jsx)("input",{className:v.a.input,type:"text",name:"name",value:e,onChange:this.inputChange,required:!0})]}),Object(a.jsxs)("label",{className:v.a.label,children:["Number",Object(a.jsx)("input",{className:v.a.input,type:"number",name:"number",value:n,onChange:this.inputChange,required:!0})]}),Object(a.jsxs)("button",{type:"submit",className:v.a.button,children:["Add contact ",Object(a.jsx)("br",{})," ",e]})]})]})}}]),n}(c.Component),S={onSubmit:function(t){return{type:d,payload:{alert:!1,contact:{id:j.a.generate(),name:t.name,number:t.number}}}}},w=Object(_.b)((function(t){return{contacts:t.contactsReducer.contacts}}),S)(g),L=n(51),E=n(11),F=n.n(E),k={onDelete:function(t){return{type:O,payload:{contactId:t}}}},D=Object(_.b)((function(t){return{toUpdate:t.contactsReducer.contacts.filter((function(e){return e.name.toLowerCase().includes(t.contactsReducer.filter.toLowerCase())}))}}),k)((function(t){var e=t.toUpdate,n=t.onDelete;return Object(a.jsx)(L.a,{component:"ul",className:F.a.ul,children:e.map((function(t){var e=t.name,c=t.number,r=t.id;return Object(a.jsx)(f.a,{in:!0,timeout:250,unmountOnExit:!0,classNames:F.a,children:Object(a.jsxs)("li",{className:F.a.li,children:[Object(a.jsxs)("span",{className:F.a.span,children:[" ",e,": ",c]}),Object(a.jsx)("button",{className:F.a.button,type:"button",onClick:function(){return n(r)},children:"X"})]},r)},r)}))})})),R="contact/filter",I=n(23),T=n.n(I),J={onFilter:function(t){return{type:R,payload:{filter:t}}}},X=Object(_.b)((function(t){return{filter:t.contactsReducer.filter}}),J)((function(t){var e=t.onFilter,n=t.filter;return Object(a.jsxs)("label",{className:T.a.label,children:["Find contacts by name",Object(a.jsx)("input",{className:T.a.input,type:"text",name:"filter",onChange:function(t){return e(t.target.value)},value:n})]})})),U=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.props.setCont(t)}},{key:"componentDidUpdate",value:function(t,e){t.cont!==this.props.contacts&&localStorage.setItem("contacts",JSON.stringify(this.props.contacts))}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f.a,{appear:!0,in:!0,timeout:500,classNames:A.a,unmountOnExit:!0,children:Object(a.jsx)("h1",{className:A.a.title,children:"Phonebook"})}),Object(a.jsx)(w,{}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(f.a,{in:this.props.contacts.length>1,timeout:250,classNames:A.a,unmountOnExit:!0,children:Object(a.jsx)(X,{})}),Object(a.jsx)(D,{})]})}}]),n}(c.Component),M=Object(_.b)((function(t){return{contacts:t.contactsReducer.contacts}}),(function(t){return{setCont:function(e){return t({type:h,payload:{contacts:e}})}}}))(U),z=n(8),V=n(18),q=Object(z.b)({contacts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case d:return[].concat(Object(V.a)(t),[a.contact]);case O:return t.filter((function(t){return t.id!==a.contactId}));case h:return[].concat(Object(V.a)(t),Object(V.a)(a.contacts));default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case R:return a.filter;default:return t}}}),G=Object(z.b)({contactsReducer:q}),K=Object(z.c)(G,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n(48);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(_.a,{store:K,children:Object(a.jsx)(M,{})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"Form_form__1AgF-",label:"Form_label__2ulR4",input:"Form_input__1TubE",button:"Form_button__1tzx9"}},9:function(t,e,n){t.exports={enter:"App_enter__3F9jM",enterActive:"App_enterActive__2GFOG",exit:"App_exit__3_Jlu",exitActive:"App_exitActive__Vle8h",appear:"App_appear__2r7az",appearActive:"App_appearActive__1amD_",title:"App_title__2MsNz",alert:"App_alert__3xphf"}}},[[49,1,2]]]);
//# sourceMappingURL=main.bcd20e78.chunk.js.map