(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/photography.3870e23f.jpg"},,function(e,t,a){e.exports=a.p+"static/media/huddle.c1f1bcfc.jpg"},,,function(e,t,a){e.exports=a.p+"static/media/design-half.db54652d.png"},function(e,t,a){e.exports=a.p+"static/media/code-half.6ce875eb.png"},,function(e,t,a){e.exports=a.p+"static/media/arrow1.302bacdc.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.f1b4d80a.svg"},function(e,t,a){e.exports=a.p+"static/media/facebook.63681da5.svg"},function(e,t,a){e.exports=a.p+"static/media/behance.e507962f.svg"},function(e,t,a){e.exports=a.p+"static/media/mail.0cd0691c.svg"},function(e,t,a){e.exports=a.p+"static/media/twitter.c915644f.svg"},function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/mylogo.cf3df5d2.svg"},,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),c=a.n(r),l=(a(25),a(1)),o=a(2),s=a(4),m=a(3),u=a(5),d=(a(26),a(11)),p=a.n(d),h=a(12),g=a.n(h),b=a(13),f=[" I am Front-End developer","Web Designer","Logo designer","Character designer"],v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={titleIndex:0,transition:!0},a.animateTitle=function(){a.titleInterval=setInterval(function(){var e=(a.state.titleIndex+1)%f.length;a.setState({titleIndex:e,transition:!0}),setTimeout(function(){return a.setState({transition:!1})},2e3)},4e3)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.animateTitle(),setTimeout(function(){return e.setState({transition:!1})},2e3)}},{key:"componentWillUnmount",value:function(){console.log("will unmunt"),Object(b.clearInterval)(this.titleInterval)}},{key:"render",value:function(){var e=this.state,t=e.titleIndex,a=e.transition,n=f[t];return i.a.createElement("p",{className:a?"fade-in":"fade-out"},n)}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={toggleBio:!1},a.handleToggleBio=function(){a.setState({toggleBio:!a.state.toggleBio})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"bio"},i.a.createElement("h1",null,"Hello!"),i.a.createElement("p",null," My Name is Sara"),i.a.createElement(v,null),i.a.createElement("p",null,"I am looking forward to working on challengable projects."),this.state.toggleBio?i.a.createElement("div",null,i.a.createElement("p",null,"I'm a developer and designer  based in Cairo, Egypt."),i.a.createElement("p",null,"I enjoy turning complex problems into simple and beautiful designs, clean and efficient code."),i.a.createElement("p",null," In my free time I code, draw and play with papers"),i.a.createElement("button",{onClick:this.handleToggleBio,className:"btn btn-color"},"Show Less")):i.a.createElement("div",null,i.a.createElement("button",{onClick:this.handleToggleBio,className:"btn btn-light btn-color"},"Read more")))}}]),t}(n.Component),j=a(14),O=a.n(j),y=a(15),k=a.n(y),w=a(16),N=a.n(w),x=a(17),C=a.n(x),I=a(18),S=a.n(I),B=a(19),T=a.n(B),M=[{image:S.a,link:"engsaraborham@gmail.com"},{image:T.a,link:"https://twitter.com/Saraborham3"},{image:k.a,link:"https://www.linkedin.com/in/saraborham/"},{image:N.a,link:"https://www.facebook.com/engsaraborham"},{image:C.a,link:"https://www.behance.net/engsarabor7b82"}],A=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.socialProfile,t=e.link,a=e.image;return i.a.createElement("div",null,i.a.createElement("a",{className:"p-2",href:t},i.a.createElement("img",{src:a,alt:"social",style:{width:20,height:20}})))}}]),t}(n.Component),H=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"social"},M.map(function(e){return i.a.createElement(A,{socialProfile:e})}))}}]),t}(n.Component),L=function(e){return i.a.createElement("header",null,i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light p-3 "},i.a.createElement("div",{className:"container"},i.a.createElement("a",{className:"navbar-brand my-name",href:"#"},"SARA BORHAM"),i.a.createElement(H,null))),i.a.createElement("div",{className:"bio-container"},i.a.createElement("div",{className:"img-display container"},i.a.createElement("div",{className:"design"},i.a.createElement("img",{src:p.a,alt:"design"})),i.a.createElement("div",{className:"code"},i.a.createElement("img",{src:g.a,alt:"code"}))),i.a.createElement(E,null)),i.a.createElement("div",{className:"arrow-projects"},i.a.createElement("p",null,"Projects"),i.a.createElement("a",{className:"btn","data-toggle":"collapse",href:"#projects",role:"button","aria-expanded":"false","aria-controls":"projects"},i.a.createElement("img",{src:O.a,alt:""}))))},W=a(6),P=a.n(W),R=a(8),D=a.n(R),J=[{image:D.a,title:"huddle",description:"it is a CSS HTML challenge",link:"https://saraborham.github.io/huddle-challenge1/",id:1},{id:2,image:P.a,title:"photography",description:"it is  an example for using only bootstrap  ",link:"https://saraborham.github.io/photography/"},{id:3,image:P.a,title:"huddle",description:"it is a CSS and  HTML challenge ",link:"https://saraborham.github.io/huddle-challenge1/"},{image:D.a,title:"huddle",description:"it is a CSS HTML challenge",link:"https://saraborham.github.io/huddle-challenge1/",id:1},{id:2,image:P.a,title:"photography",description:"it is  an example for using only bootstrap  ",link:"https://saraborham.github.io/photography/"}],F=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.project,t=e.title,a=e.image,n=e.description,r=e.link;return i.a.createElement("div",{className:"card m-3"},i.a.createElement("img",{src:a,className:"card-img-top",alt:t}),i.a.createElement("div",{className:"card-body "},i.a.createElement("h5",{className:"card-title"},t),i.a.createElement("p",{className:"card-text"},n),i.a.createElement("a",{href:r,className:""},r)))}}]),t}(n.Component),U=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container",id:"projects"},i.a.createElement("div",{className:"row"},J.map(function(e){return i.a.createElement("div",{className:"col-sm-12 col-md-4 col-lg-4"},i.a.createElement(F,{key:e.id,project:e}))})))}}]),t}(n.Component),$=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(L,null),i.a.createElement(U,null))}}]),t}(n.Component),q=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement($,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[20,1,2]]]);
//# sourceMappingURL=main.9dab5748.chunk.js.map