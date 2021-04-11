(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{123:function(e,t){},126:function(e,t,a){},128:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(67),s=a.n(l),i=a(76),o=a(17),m=a(1),u=a(12),E=a(13),h=a(15),g=a(14),f=(a(82),a(83),a(68)),d=a(69),v=a.n(d),p=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).changeHandler=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.login=function(){localStorage.setItem("bool","true")},n.state={name:"",room:""},n}return Object(E.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"base-container"},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"image2"},c.a.createElement("img",{src:v.a,alt:"No-Value"})),c.a.createElement("div",{className:"header"},"MeetUp Messenger"),c.a.createElement("div",{className:"form"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"username"},"UserName"),c.a.createElement("input",{type:"text",onChange:this.changeHandler,name:"name",value:this.state.name,placeholder:"username"})),c.a.createElement("div",{className:"form-group2"},c.a.createElement("label",{htmlFor:"roomname"},"RoomName"),c.a.createElement("input",{type:"text",name:"room",onChange:this.changeHandler,value:this.state.room,placeholder:"roomname"})))),c.a.createElement("div",{className:"footer"},c.a.createElement(o.b,{onClick:function(t){return e.state.name&&e.state.room?e.login():t.preventDefault()},to:"/chat?name=".concat(this.state.name,"&room=").concat(this.state.room)},c.a.createElement("button",{className:"btn",type:"submit"},"JOIN"))))}}]),a}(c.a.Component),A=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"base-container",ref:this.props.containerRef},c.a.createElement("div",{className:"header2"},"Welcome to Chat App"),c.a.createElement("div",{className:"inst1"},c.a.createElement("div",{className:"inst1subheader"},"Join, Chat & Leave No Trace Behind"),c.a.createElement("div",null,c.a.createElement("ul",{className:"topic"},c.a.createElement("li",null,"Talk to friends"),c.a.createElement("li",null,"Easy way to group chat"),c.a.createElement("li",null,"Online chat without registration"))),c.a.createElement("div",{className:"directions"},"Directions to use: ",c.a.createElement("br",null),c.a.createElement("br",null),"1. User can join a chatroom by entering the UserName and RoomName.",c.a.createElement("br",null),"2. User can exit the room by clicking on the exit button.",c.a.createElement("br",null),"3. User can chat publicly with the other connected users.",c.a.createElement("br",null),"4. Don't refresh your chat otherwise messages will disappear.")))}}]),a}(c.a.Component),b=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={isLogginActive:!0},n}return Object(E.a)(a,[{key:"componentDidMount",value:function(){this.rightSide.classList.add("right")}},{key:"changeState",value:function(){this.state.isLogginActive?(this.rightSide.classList.remove("right"),this.rightSide.classList.add("left")):(this.rightSide.classList.remove("left"),this.rightSide.classList.add("right")),this.setState((function(e){return{isLogginActive:!e.isLogginActive}}))}},{key:"render",value:function(){var e=this,t=this.state.isLogginActive,a=t?"Instructions":"Login";return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"container",ref:function(t){return e.container=t}},t&&c.a.createElement(p,null),!t&&c.a.createElement(A,null)),c.a.createElement(N,{current:a,containerRef:function(t){return e.rightSide=t},onClick:this.changeState.bind(this)})))}}]),a}(c.a.Component),N=function(e){return c.a.createElement("div",{className:"right-side",ref:e.containerRef,onClick:e.onClick},c.a.createElement("div",{className:"inner-container"},c.a.createElement("div",{className:"text"},e.current)))},j=b,O=a(75),C=a(9),S=a(71),y=a.n(S),k=a(72),x=a.n(k),I=a(25),U=a.n(I),L=a(73),w=a.n(L),R=(a(126),function(e){var t=e.room;return c.a.createElement("div",{className:"infoBar"},c.a.createElement("div",{className:"leftInnerContainer"},c.a.createElement("img",{className:"onlineIcon",src:U.a,alt:"online icon"}),c.a.createElement("h3",null,t)),c.a.createElement("div",{className:"rightInnerContainer"},c.a.createElement("a",{href:"/",onClick:function(){localStorage.setItem("bool","false")}},c.a.createElement("img",{src:w.a,alt:"close icon"}))))}),B=(a(127),a(128),function(e){var t=e.message,a=e.setMessage,n=e.sendMessage;return c.a.createElement("form",{className:"form"},c.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:t,onChange:function(e){return a(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),c.a.createElement("button",{className:"sendButton",onClick:function(e){return n(e)}},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-paper-plane"}))))}),D=a(74),Q=a.n(D),J=a(42),M=a.n(J),Y=(a(150),function(e){var t=e.message,a=t.user,n=t.text,r=!1,l=e.name.trim().toLowerCase();return a===l&&(r=!0),r?c.a.createElement("div",{className:"messageContainer justifyEnd"},c.a.createElement("p",{className:"sentText pr-10"},l),c.a.createElement("div",{className:"messageBox backgroundBlue"},c.a.createElement("p",{className:"messageText colorWhite"},M.a.emojify(n)))):c.a.createElement("div",{className:"messageContainer justifyStart"},c.a.createElement("div",{className:"messageBox backgroundLight"},c.a.createElement("p",{className:"messageText colorDark"},M.a.emojify(n))),c.a.createElement("p",{className:"sentText pl-10"},a))}),K=(a(151),function(e){var t=e.messages,a=e.name;return c.a.createElement(Q.a,{className:"messages"},t.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement(Y,{message:e,name:a}))})))}),T=(a(152),function(e){var t=e.users;return c.a.createElement("div",{className:"textContainer"},c.a.createElement("div",null,c.a.createElement("h1",null,"Live Chat",c.a.createElement("br",null),"Application"),c.a.createElement("h2",null,"Project Developed By:",c.a.createElement("br",null),"Batch eDac Sept20"),c.a.createElement("h3",null,"Akanksha, Ashay,",c.a.createElement("br",null),"Shashank, Anoop"),c.a.createElement("h4",null,"Technologies Used:",c.a.createElement("br",null),"React, Express,",c.a.createElement("br",null),"Node, and Socket.io")),t?c.a.createElement("div",null,c.a.createElement("h2",null,"Users chatting"),c.a.createElement("div",{className:"activeContainer"},c.a.createElement("h2",null,t.map((function(e){var t=e.name;return c.a.createElement("div",{key:t,className:"activeItem"},t,c.a.createElement("img",{alt:"Online Icon",src:U.a}))}))))):null)}),G=(a(153),function(e){var t=e.location,a=Object(r.useState)(""),l=Object(C.a)(a,2),s=l[0],i=l[1],o=Object(r.useState)(""),u=Object(C.a)(o,2),E=u[0],h=u[1],g=Object(r.useState)(""),f=Object(C.a)(g,2),d=f[0],v=f[1],p=Object(r.useState)(""),A=Object(C.a)(p,2),b=A[0],N=A[1],j=Object(r.useState)(!1),S=Object(C.a)(j,2),k=S[0],I=S[1],U=Object(r.useState)([]),L=Object(C.a)(U,2),w=L[0],D=L[1],Q="https://meetupmessenger.herokuapp.com/";Object(r.useEffect)((function(){var e=y.a.parse(t.search),a=e.name,r=e.room;a&&r||I(!0),h(r),i(a),(n=x()(Q)).emit("join",{name:a,room:r},(function(e){e&&(alert(e),I(!0))}))}),[Q,t.search]),Object(r.useEffect)((function(){n.on("message",(function(e){D((function(t){return[].concat(Object(O.a)(t),[e])}))})),n.on("roomData",(function(e){var t=e.users;v(t)}))}),[]);return k?c.a.createElement(m.a,{push:!0,to:"/"}):c.a.createElement("div",{className:"outerContainer"},c.a.createElement(T,{users:d}),c.a.createElement("div",{className:"container"},c.a.createElement(R,{room:E}),c.a.createElement(K,{messages:w,name:s}),c.a.createElement(B,{message:b,setMessage:N,sendMessage:function(e){e.preventDefault(),b&&n.emit("sendMessage",b,(function(){return N("")}))}})))}),V=function(e){var t=e.component,a=Object(i.a)(e,["component"]);return c.a.createElement(m.b,Object.assign({},a,{render:function(e){return"true"===localStorage.getItem("bool")?c.a.createElement(t,e):c.a.createElement(m.a,{to:"/"})}}))},P=function(){return c.a.createElement(o.a,null,c.a.createElement(m.b,{path:"/",exact:!0,component:j}),c.a.createElement(V,{component:G,exact:!0,path:"/chat"}))};s.a.render(c.a.createElement(P,null),document.querySelector("#root"))},25:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},69:function(e,t,a){e.exports=a.p+"static/media/login.9a76e74e.svg"},73:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAUElEQVQ4y2NgGKzgv8f/x/9RACENj/7/J00DYSWDR8P/+v/1JGj4r/3/N1CqnhQbwrFqQdbwHzuop54Gkp1EqafrSArWgUwaJCdvUjPQYAIAASrNQFoEUmUAAAAASUVORK5CYII="},77:function(e,t,a){e.exports=a(154)},82:function(e,t,a){},83:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.97c47d98.chunk.js.map