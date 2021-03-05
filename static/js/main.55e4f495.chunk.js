(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{17:function(t,n,e){t.exports={TaskList:"ContactList_TaskList__1MHUn",TaskList_item:"ContactList_TaskList_item__hrhx0",completed:"ContactList_completed__3DVmP",TaskList_text:"ContactList_TaskList_text__2QFBa",TaskList_actions:"ContactList_TaskList_actions__2HYho",TaskList_button:"ContactList_TaskList_button__1ptnM"}},62:function(t,n,e){"use strict";e.r(n);var c,a,o=e(0),r=e.n(o),s=e(11),i=e.n(s),u=e(6),b=e(14),l=e(2),d=e(4),j=e(3),f=Object(j.b)("contacts/fetchContactRequest"),h=Object(j.b)("contacts/fetchContactError"),m=Object(j.b)("contacts/fetchContactSuccess"),O=Object(j.b)("contacts/addContactRequest"),_=Object(j.b)("contacts/addContactError"),p=Object(j.b)("contacts/addContactSuccess"),C=Object(j.b)("contacts/removeContactRequest"),k=Object(j.b)("contacts/removeContactError"),g=Object(j.b)("contacts/removeContactSuccess"),v=Object(j.b)("contacts / changeFilter"),T=Object(j.c)([],(c={},Object(l.a)(c,m,(function(t,n){return n.payload})),Object(l.a)(c,p,(function(t,n){var e=n.payload;return[].concat(Object(b.a)(t),[e])})),Object(l.a)(c,g,(function(t,n){var e=n.payload;return t.filter((function(t){return t.id!==e}))})),c)),x=Object(j.c)(!1,(a={},Object(l.a)(a,f,(function(){return!0})),Object(l.a)(a,m,(function(){return!1})),Object(l.a)(a,h,(function(){return!1})),Object(l.a)(a,O,(function(){return!0})),Object(l.a)(a,p,(function(){return!1})),Object(l.a)(a,_,(function(){return!1})),Object(l.a)(a,C,(function(){return!0})),Object(l.a)(a,g,(function(){return!1})),Object(l.a)(a,k,(function(){return!1})),a)),L=Object(j.c)("",Object(l.a)({},v,(function(t,n){return n.payload}))),E=Object(d.c)({items:T,filter:L,loading:x}),y=e(32),F=e.n(y),N=e(8),S=[].concat(Object(b.a)(Object(j.d)({serializableCheck:{ignoredActions:[N.a,N.f,N.b,N.c,N.d,N.e]}})),[F.a]),w=Object(j.a)({reducer:{contacts:E},middleware:S,devTools:!1}),M=e(12),R=e(13),A=e(16),B=e(15),D=e(17),q=e.n(D),H=e(9),P=function(t){return t.contacts.filter},V={getLoading:function(t){return t.contacts.loading},getFilter:P,getVisibleContacts:Object(H.a)([function(t){return t.contacts.items},P],(function(t,n){return t.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))}))},J=e(10),U=e.n(J);U.a.defaults.baseURL="http://localhost:4040";var z=function(){return function(t){t(f()),U.a.get("/contacts").then((function(n){var e=n.data;return t(m(e))})).catch((function(n){return t(h(n))}))}},I=function t(n){return function(e){console.log(t);var c={name:n.name,number:n.number};e(O()),U.a.post("/contacts",c).then((function(t){var n=t.data;return e(p(n))})).catch((function(t){return e(_(t))}))}},Q=function(t){return function(n){n(C()),U.a.delete("/contacts/".concat(t)).then((function(){return n(g(t))})).catch((function(t){return n(k(t))}))}},Y=e(1),G=Object(u.b)((function(t){return{contacts:V.getVisibleContacts(t)}}),(function(t){return{onRemoveContact:function(n){return t(Q(n))}}}))((function(t){var n=t.contacts,e=t.onRemoveContact;return Object(Y.jsx)("ul",{className:q.a.TaskList,children:n.map((function(t){return Object(Y.jsxs)("li",{className:q.a.TaskList_item,children:[t.name+":"+t.number,Object(Y.jsx)("button",{className:q.a.TaskList_button,type:"button",name:"delete",onClick:function(){return e(t.id)},children:"delete"})]},t.id)}))})})),K=function(t){var n=t.value,e=t.onChangeFilter;return Object(Y.jsxs)("div",{children:["Find contacts by name",Object(Y.jsx)("input",{type:"text",value:n,onChange:e})]})};K.defaultProps={value:"",onchangeFilter:function(){}};var W=Object(u.b)((function(t){return{value:V.getFilter(t)}}),(function(t){return{onChangeFilter:function(n){return t(v(n.target.value))}}}))(K),X=e(33),Z=e(7),$=e.n(Z),tt=function(t){Object(A.a)(e,t);var n=Object(B.a)(e);function e(){var t;Object(M.a)(this,e);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=n.call.apply(n,[this].concat(a))).state={name:"",number:""},t.handleChange=function(n){var e=n.target,c=e.name,a=e.value;t.setState(Object(l.a)({},c,a))},t.handleSubmit=function(n){n.preventDefault();var e=t.props.items.find((function(n){return n.name===t.state.name}));console.log(e),e?alert("".concat(t.state.name," is already in contacts")):0!==t.state.name.length?(t.props.onAddContact(Object(X.a)({},t.state)),t.setState({name:"",number:""})):alert("Fields must be filled!")},t}return Object(R.a)(e,[{key:"render",value:function(){return Object(Y.jsxs)("form",{className:$.a.TaskEditor,onSubmit:this.handleSubmit,children:[Object(Y.jsxs)("label",{className:$.a.TaskEditor_label,children:["Name",Object(Y.jsx)("input",{className:$.a.TaskEditor_input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(Y.jsxs)("label",{className:$.a.TaskEditor_label,children:["Number",Object(Y.jsx)("input",{className:$.a.TaskEditor_input,type:"text",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(Y.jsx)("button",{className:$.a.TaskEditor_button,type:"submit",children:"Add contact"})]})}}]),e}(o.Component),nt=Object(u.b)((function(t){return{items:t.contacts.items}}),(function(t){return{onAddContact:function(n){return t(I(n))}}}))(tt),et=function(t){Object(A.a)(e,t);var n=Object(B.a)(e);function e(){return Object(M.a)(this,e),n.apply(this,arguments)}return Object(R.a)(e,[{key:"componentDidMount",value:function(){console.log(this.props),this.props.fetchContacts()}},{key:"render",value:function(){return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h1",{children:"Phonebook"}),Object(Y.jsx)(nt,{}),Object(Y.jsx)("h2",{children:"Contacts"}),this.props.isLoadingContacts&&Object(Y.jsx)("h3",{children:"loading..."}),Object(Y.jsx)(W,{}),Object(Y.jsx)(G,{})]})}}]),e}(o.Component),ct=Object(u.b)((function(t){return{isLoadingContacts:V.getLoading(t)}}),(function(t){return{fetchContacts:function(){console.log("111"),t(z())}}}))(et);i.a.render(Object(Y.jsx)(r.a.StrictMode,{children:Object(Y.jsx)(u.a,{store:w,children:Object(Y.jsx)(ct,{})})}),document.getElementById("root"))},7:function(t,n,e){t.exports={TaskEditor:"ContactForm_TaskEditor__yBtsD",TaskEditor_label:"ContactForm_TaskEditor_label__1HgMc",TaskEditor_input:"ContactForm_TaskEditor_input__13Mw2",TaskEditorinput:"ContactForm_TaskEditorinput___cBMk",TaskEditor_button:"ContactForm_TaskEditor_button__3aSvn"}}},[[62,1,2]]]);
//# sourceMappingURL=main.55e4f495.chunk.js.map