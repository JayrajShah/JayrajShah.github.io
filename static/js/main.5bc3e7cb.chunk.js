(this["webpackJsonpjayraj-portfolio"]=this["webpackJsonpjayraj-portfolio"]||[]).push([[0],{33:function(e,a,t){e.exports=t.p+"static/media/pic.19481eba.png"},46:function(e,a,t){e.exports=t(58)},51:function(e,a,t){},52:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(10),r=t.n(i),c=(t(51),t(25)),l=(t(52),t(33)),s=t.n(l),m=t(26),u=t(75),d=t(77),p=t(78),f=t(43),g=t(62),b=t(79),h=t(80),v=t(39),w=t.n(v),E=t(38),y=t.n(E),j=Object(u.a)((function(e){return{backdrop:{color:"#fff"},navContainerWrapper:{height:"8vh",position:"fixed",width:"100%",zIndex:3},navContainer:{display:"flex",justifyContent:"space-around",alignItems:"center",paddingTop:"1em"},navListItem:{fontFamily:"Oswald",fontSize:"3.5vh",cursor:"pointer",color:"#efefef","&:hover":{color:"#FBD630"}},navListMenuItem:{marginTop:"10vh",fontFamily:"Oswald",fontSize:"2.5vh",cursor:"pointer",color:"#242424",zIndex:3},hamIcon:{padding:"0.5rem",zIndex:3,top:0,right:0,position:"absolute"},sideMenu:{position:"absolute",right:0,top:0,width:"30em",height:"100vh",backgroundColor:"#FBD630",clipPath:"circle(0vw at 100% 0)",transition:"all 0.7s ease"}}})),O=function(){var e=j(),a=["about","contact","resume"],t=Object(n.useState)(0),i=Object(m.a)(t,2),r=(i[0],i[1]),c=Object(n.useState)(!1),l=Object(m.a)(c,2),s=l[0],u=l[1],v=Object(n.useState)(!1),E=Object(m.a)(v,2),O=E[0],k=E[1];Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){r(window.pageYOffset)}))}),[]);var S=function(e,a){var t;switch(a){case"about":t=window.innerHeight,window.scrollTo(0,t);break;case"contact":t=window.innerHeight,window.scrollTo(0,t+t)}"resume"===a&&window.open("/resume.pdf","_blank")};return o.a.createElement("div",{className:e.navContainerWrapper},o.a.createElement(g.a,{in:window.pageYOffset<100},o.a.createElement(b.a,{className:e.navContainer,style:{transition:"all 5s "}},a.map((function(a){return o.a.createElement(f.a,{key:a,centerRipple:!1,disableRipple:!0,className:e.navListItem,onClick:function(e){return S(0,a)}},a.toUpperCase())})))),o.a.createElement(g.a,{in:window.pageYOffset>=100},o.a.createElement(p.a,{container:!0,justify:"flex-end",className:e.hamIcon},o.a.createElement(h.a,{"aria-label":"delete",className:e.margin,onClick:function(){u(!s),k(!O)}},s?o.a.createElement(y.a,{fontSize:"large",style:{color:"#242424"}}):o.a.createElement(w.a,{fontSize:"large",style:{color:"#FBD630"}})))),o.a.createElement(d.a,{className:e.backdrop,open:O}),o.a.createElement(p.a,{container:!0,direction:"column",alignItems:"center",spacing:1,className:e.sideMenu,style:{clipPath:"circle(".concat(s?"30":"0","em at 100% 0)")}},a.map((function(a,t){return o.a.createElement(p.a,{item:!0,container:!0,justify:"center",key:a+"".concat(t)},o.a.createElement(f.a,{centerRipple:!1,disableRipple:!0,className:e.navListMenuItem,onClick:function(e){S(0,a),u(!1),k(!1)}},a.toUpperCase()))}))))},k=t(81),S=function(){return o.a.createElement(p.a,{container:!0,justify:"center",style:{height:"100vh",backgroundColor:"#242424"}},o.a.createElement(k.a,{variant:"h1",style:{color:"#FBD630"}},"Section yet to be made"))},N=t(41),C=Object(N.a)(),I=t(40),F=t(82),z=t(83),x=Object(I.a)({typography:{fontFamily:["Raleway","Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(",")}}),R=Object(u.a)((function(e){return{title:Object(c.a)({margin:"10%"},e.breakpoints.down("md"),{paddingTop:"8vh"}),name:Object(c.a)({fontFamily:"Anton",color:"#FBD630",letterSpacing:"0.1em",fontSize:"8vw"},e.breakpoints.down("sm"),{fontSize:"13vw"}),designation:Object(c.a)({fontFamily:"Anton",color:"#efefef",letterSpacing:"0.32em",fontSize:"3vw"},e.breakpoints.down("sm"),{fontSize:"4vw"})}}));var B=function(){var e=R();return Object(n.useEffect)((function(){var a={origin:"bottom",duration:1e3,distance:"10px",scale:1,easing:"ease"};C.reveal(".".concat(e.name),Object.assign({delay:50},a)),C.reveal(".".concat(e.designation),Object.assign({delay:250},a))}),[]),o.a.createElement(F.a,{theme:x},o.a.createElement(p.a,{style:{backgroundColor:"#242424",height:"100vh"}},o.a.createElement(O,null),o.a.createElement(p.a,{className:"landing-container"},o.a.createElement(p.a,{item:!0,className:"jay-container"},o.a.createElement("img",{src:s.a,className:"jay-pic",alt:"logo"})),o.a.createElement(p.a,{item:!0,className:e.title},o.a.createElement(k.a,{className:e.name},"JAYRAJ SHAH"),o.a.createElement(k.a,{className:e.designation},"DEVELOPER & DESIGNER"))),o.a.createElement(p.a,{container:!0,justify:"center",alignItems:"center",className:"scroll-btn"},o.a.createElement(z.a,{variant:"outlined",size:"large",style:{fontFamily:"Anton",letterSpacing:"1px",color:"#242424",borderColor:"#FBD630",borderRadius:"50px",backgroundColor:"#FBD630"}},"MORE"))),o.a.createElement(S,null),o.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.5bc3e7cb.chunk.js.map