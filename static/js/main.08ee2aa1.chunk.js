(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{40:function(e,t,n){e.exports=n(52)},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),c=n(12),d=n(9),l=n(21),s=n(16),p=function(e){return{type:m.ADD_LIST,payload:e}},u=function(e,t,n,a,r,o){return{type:m.DRAG_HAPPENED,payload:{droppableIdStart:e,droppableIdEnd:t,droppableIndexStart:n,droppableIndexEnd:a,draggableId:r,type:o}}},f=function(e,t){return{type:m.ADD_CARD,payload:{text:t,listID:e}}},m={ADD_CARD:"ADD_CARD",ADD_LIST:"ADD_LIST",DRAG_HAPPENED:"DRAG_HAPPENED"},b=2,g=6,h=[{title:"How to use Trello App",id:"list-".concat(0),cards:[{id:"card-".concat(0),text:"Step 1: Create a list and give a name"},{id:"card-".concat(1),text:"Step 2: Create cards for your task"},{id:"card-".concat(2),text:"Step 3 : Can Drag and Drop the lists and cards"}]}],v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.ADD_LIST:var n={title:t.payload,cards:[],id:"list-".concat(b)};return b+=1,[].concat(Object(s.a)(e),[n]);case m.ADD_CARD:var a={id:"card-".concat(g),text:t.payload.text};g+=1;var r=e.map((function(e){return e.id===t.payload.listID?Object(l.a)(Object(l.a)({},e),{},{cards:[].concat(Object(s.a)(e.cards),[a])}):e}));return r;case m.DRAG_HAPPENED:var o=t.payload,i=o.droppableIdStart,c=o.droppableIdEnd,d=o.droppableIndexStart,p=o.droppableIndexEnd,u=(o.draggableId,o.type),f=Object(s.a)(e);if("list"===u){var v=f.splice(d,1);return f.splice.apply(f,[p,0].concat(Object(s.a)(v))),f}if(i===c){var E,x=e.find((function(e){return i===e.id})),D=x.cards.splice(d,1);(E=x.cards).splice.apply(E,[p,0].concat(Object(s.a)(D)))}if(i!==c){var y,O=e.find((function(e){return i===e.id})),I=O.cards.splice(d,1),A=e.find((function(e){return c===e.id}));(y=A.cards).splice.apply(y,[p,0].concat(Object(s.a)(I)))}return f;default:return e}},E=Object(d.c)({lists:v}),x=Object(d.e)(E),D=n(24),y=n(25),O=n(28),I=n(27),A=n(18),j=n(74),C=n(71),w=n(70),S=n(15),P=n(19);function k(){var e=Object(A.a)(["\n    margin-bottom : 8px;\n"]);return k=function(){return e},e}var R=P.a.div(k()),_=function(e){var t=e.text,n=e.id,a=e.index;return r.a.createElement(S.b,{draggableId:String(n),index:a},(function(e){return r.a.createElement(R,Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps),r.a.createElement(j.a,null,r.a.createElement(w.a,null,r.a.createElement(C.a,{gutterBottom:!0},t))))}))},F=n(72),B=n(36),L=n(73),T=function(e){Object(O.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(D.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={formOpen:!1},e.openForm=function(){e.setState({formOpen:!0})},e.closeForm=function(t){e.setState({formOpen:!1})},e.handleInputChange=function(t){e.setState({text:t.target.value})},e.handleaddList=function(){var t=e.props.dispatch,n=e.state.text;n&&(e.setState({text:""}),t(p(n)))},e.handleaddCard=function(){var t=e.props,n=t.dispatch,a=t.listID,r=e.state.text;r&&(e.setState({text:""}),n(f(a,r)))},e.renderAddButton=function(){var t=e.props.list,n=t?"Add another list":"Add another Card",a=t?1:.5,o=t?"white":"inherit",i=t?"rgba(0,0,0,.15)":"inherit";return r.a.createElement("div",{onClick:e.openForm,style:Object(l.a)(Object(l.a)({},G.openFormButtonGroup),{},{opacity:a,color:o,backgroundColor:i})},r.a.createElement(F.a,null,"add"),r.a.createElement("p",null,n))},e.renderForm=function(){var t=e.props.list,n=t?"Enter List Title...":"Enter a Title for New Card...",a=t?"Add List":"Add Card";return r.a.createElement("div",null,r.a.createElement(j.a,{style:{overflow:"visible",minHeight:80,minWidth:272,padding:"6px 8px 2px"}},r.a.createElement(B.a,{placeholder:n,autoFocus:!0,onBlur:e.closeForm,value:e.state.text,onChange:e.handleInputChange,style:{resize:"none",width:"100%",overflow:"hidden",outline:"none",border:"none"}})),r.a.createElement("div",{style:G.formButtonGroup},r.a.createElement(L.a,{onMouseDown:t?e.handleaddList:e.handleaddCard,variant:"contained",style:{color:"white",backgroundColor:"#6666FF"}},a," "," "),r.a.createElement(F.a,{style:{marginLeft:8,cursor:"pointer"}},"close")))},e}return Object(y.a)(n,[{key:"render",value:function(){return this.state.formOpen?this.renderForm():this.renderAddButton()}}]),n}(r.a.Component),G={openFormButtonGroup:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:10,height:36,width:272,paddingLeft:10},formButtonGroup:{marginTop:10,display:"flex",alignItems:"center"}},H=Object(c.b)()(T);function N(){var e=Object(A.a)(["\n        background-color: #C0C0C0;\n        border-radius:3px;\n        width:300px;\n        padding:8px;\n        margin-right:8px;\n        height : 100%;\n\n"]);return N=function(){return e},e}var W=P.a.div(N()),z=function(e){var t=e.title,n=e.cards,a=e.listID,o=e.index;return r.a.createElement(S.b,{draggableId:String(a),index:o},(function(e){return r.a.createElement(W,Object.assign({},e.draggableProps,{ref:e.innerRef},e.dragHandleProps),r.a.createElement(S.c,{droppableId:String(a)},(function(e){return r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),r.a.createElement("h4",null,t),n.map((function(e,t){return r.a.createElement(_,{key:e.id,index:t,text:e.text,id:e.id})})),e.placeholder,r.a.createElement(H,{listID:a}))})))}))};n(51);function J(){var e=Object(A.a)(["\n  display : flex;\n  flex-direction : row;\n\n\n"]);return J=function(){return e},e}var M=P.a.div(J()),$=function(e){Object(O.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(D.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onDragEnd=function(t){var n=t.destination,a=t.source,r=t.draggableId,o=t.type;n&&e.props.dispatch(u(a.droppableId,n.droppableId,a.index,n.index,r,o))},e}return Object(y.a)(n,[{key:"render",value:function(){var e=this.props.lists;return r.a.createElement(S.a,{onDragEnd:this.onDragEnd},r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Trello Clone Application"),r.a.createElement(S.c,{droppableId:"all-lists",direction:"horizontal",type:"list"},(function(t){return r.a.createElement(M,Object.assign({},t.droppableProps,{ref:t.innerRef}),e.map((function(e,t){return r.a.createElement(z,{listID:e.id,key:e.id,title:e.title,cards:e.cards,index:t})})),r.a.createElement(H,{list:!0}))}))))}}]),n}(a.Component),q=Object(c.b)((function(e){return{lists:e.lists}}))($);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(c.a,{store:x},r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.08ee2aa1.chunk.js.map