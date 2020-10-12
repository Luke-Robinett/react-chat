(this["webpackJsonpchat-client"]=this["webpackJsonpchat-client"]||[]).push([[0],{34:function(e,t,a){e.exports=a(78)},72:function(e,t){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(31),l=a.n(r),o=a(2),c=a(3),m=a(5),u=a(4);var i=function(e){return s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"Welcome To Chat"),s.a.createElement("hr",null),s.a.createElement("p",null,s.a.createElement("strong",null,"Enter a username and start chatting!")),s.a.createElement("form",{autoComplete:"off",onSubmit:e.onSubmit},s.a.createElement("p",null,s.a.createElement("label",null,"username",s.a.createElement("br",null),s.a.createElement("input",{type:"text",maxLength:"12",pattern:"^[a-zA-Z][a-zA-Z0-9_]{1,12}$",title:"2 to 12 characters long, letters, numbers and underscores allowed",required:!0,value:e.usernameValue,onChange:e.onUsernameChange}))),s.a.createElement("p",null,s.a.createElement("input",{type:"submit",className:"btn-lg btn-primary",value:"Start Chatting"}))))},h=a(33);var d=function(e){return s.a.createElement("div",{className:"row room-background p-1 p-sm-2 p-md-3"},s.a.createElement("div",{className:"col "},s.a.createElement("h3",null,"Messages")),s.a.createElement("div",{className:"d-none d-sm-block col-sm-4 col-lg-2"},s.a.createElement("h3",null,"Users")))};var p=function(e){return s.a.createElement("div",{role:"listitem"},s.a.createElement("strong",null,e.user.name))};var g=function(e){return s.a.createElement("aside",{className:"d-none d-sm-block col-sm-4 col-lg-2 room-element overflow-auto",role:"list"},e.users.map((function(e,t){return s.a.createElement(p,{key:t.toString(),user:e})})))};var v=function(e){return s.a.createElement("div",{role:"listitem"},s.a.createElement("span",{className:"message"},e.message.user.name,":"),e.message.text)},E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).lastDiv=s.a.createRef(),n}return Object(c.a)(a,[{key:"componentWillReceiveProps",value:function(){this.lastDiv.current.scrollIntoView(!1)}},{key:"render",value:function(){return s.a.createElement("main",{className:"col room-element mr-sm-1 mr-lg-2 message-list overflow-auto",role:"list","aria-live":"polite"},this.props.messages.map((function(e,t){return s.a.createElement(v,{key:t.toString(),message:e})})),s.a.createElement("div",{ref:this.lastDiv},"Last Message"))}}]),a}(n.Component);var f=function(e){return s.a.createElement("div",{className:"col composer"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("input",{type:"text",className:"w-100",id:"messageText",autoFocus:!0,autoComplete:"off",placeholder:"Type your message...",value:e.text,onChange:e.onChange,onKeyUp:e.onKeyUp})),s.a.createElement("div",{className:"col-4 col-sm-2 text-center"},s.a.createElement("button",{className:"w-100",onClick:e.onSend},"Send"))))},b=a(32),k=a.n(b),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleCompose=function(e){n.setState({messageText:e.target.value})},n.handleKeyUp=function(e){13===e.keyCode&&n.handleSendMessage(e)},n.handleSendMessage=function(e){e.preventDefault();var t={user:n.me,text:n.state.messageText};n.socket.emit("message",t),n.setState({messageText:""})},n.socket={},n.me={id:"",name:n.props.username},n.state={users:[n.me],messages:[{user:n.me,text:"Hello world!"}],messageText:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.socket=k()(),this.socket.on("connect",(function(){return e.me.id=e.socket.id})),this.socket.on("message",(function(t){e.setState({messages:[].concat(Object(h.a)(e.state.messages),[t])})})),this.socket.on("users",(function(t){e.setState({users:t})})),this.socket.on("history",(function(t){e.setState({messages:t})})),this.socket.emit("join",this.me)}},{key:"componentWillUnmount",value:function(){this.socket.close()}},{key:"render",value:function(){return s.a.createElement("div",{className:"container rounded"},s.a.createElement(d,null),s.a.createElement("div",{className:"row room-background p-1 p-sm-2 p-md-3"},s.a.createElement(E,{messages:this.state.messages}),s.a.createElement(g,{users:this.state.users})),s.a.createElement("div",{className:"row room-background p-1 p-sm-2 p-md-3"},s.a.createElement(f,{onChange:this.handleCompose,onSend:this.handleSendMessage,onKeyUp:this.handleKeyUp,text:this.state.messageText})))}}]),a}(n.Component),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleUsernameChange=function(e){n.setState({usernameValue:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.setState({showStart:!1})},n.state={usernameValue:"",showStart:!0},n}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.state.showStart?s.a.createElement(i,{usernameValue:this.state.usernameValue,onUsernameChange:this.handleUsernameChange,onSubmit:this.handleSubmit}):s.a.createElement(S,{username:this.state.usernameValue}))}}]),a}(n.Component);a(77);var C=function(){return s.a.createElement(y,null)};l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(C,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.16d7a4a1.chunk.js.map