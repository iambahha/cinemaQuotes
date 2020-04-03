(this["webpackJsonpexam-8"]=this["webpackJsonpexam-8"]||[]).push([[0],{40:function(e,t,a){e.exports=a(74)},45:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),c=a.n(o),s=(a(45),a(46),a(12)),l=a(14),u=function(){return r.a.createElement("div",{className:"navbar navbar-dark bg-info navbar-expand-lg"},r.a.createElement("div",{className:"navbar-brand container"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{exact:!0,className:"nav-link",to:"/cinemaQuotes/"},"Quotes",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/cinemaQuotes/quotes/add"},"Submit New Quote")))))},i=a(15),m=a(7),d=a.n(m),p=a(16),h=a(17),f=a(19),v=a(18),g=a(20),E=a(11),y=a.n(E),b={categories:[{id:"start-wars",title:"Star Wars"},{id:"lord-of-the-rings",title:"Lord of the Rings"},{id:"avengers",title:"Avengers"},{id:"motivational",title:"Motivational"},{id:"harry-potter",title:"Harry Potter"}]},q=a(75),w=a(76),j=a(77),k=a(78),x=function(e){var t=e.classNames,a=e.children,n=e.type,o=e.color,c=e.onClick;return r.a.createElement("button",{onClick:c,type:n,className:["btn","btn-"+o,t].join(" ")},a)},N=function(e){var t=e.selectValue,a=e.inputChange,n=e.inputValue,o=e.contentValue,c=e.submit,s=b.categories.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.title)}));return r.a.createElement(q.a,{onSubmit:c},r.a.createElement(w.a,null,r.a.createElement(j.a,{htmlFor:"category"},"Category"),r.a.createElement(k.a,{type:"select",onChange:a,name:"category",value:t},s)),r.a.createElement(w.a,null,r.a.createElement(j.a,{htmlFor:"author"},"Author"),r.a.createElement(k.a,{value:n,name:"author",onChange:a,type:"text",className:"form-control"})),r.a.createElement(w.a,null,r.a.createElement(j.a,{htmlFor:"content"},"Quote"),r.a.createElement("textarea",{value:o,name:"content",onChange:a,className:"form-control"})),r.a.createElement(x,{type:"submit",color:"info"},"Add"))},Q=(a(70),function(){return r.a.createElement("div",{className:"Spinner"},"Loading...")}),O=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={quote:{category:b.categories[0].id,author:"",content:""},loading:!1},a.AddPostHandler=function(e){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),a.setState({loading:!0}),t.next=4,d.a.awrap(y.a.post("/cinemaQuotes/quotes.json",a.state.quote));case 4:a.setState({loading:!1}),a.props.history.push("/");case 6:case"end":return t.stop()}}))},a.inputChangeHandler=function(e){e.persist(),a.setState((function(t){var a=Object(i.a)({},t.quote);return a[e.target.name]=e.target.value,{quote:a}}))},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.quote,t=r.a.createElement(N,{submit:this.AddPostHandler,selectValue:e.category,contentValue:e.content,inputValue:e.author,inputChange:this.inputChangeHandler});return this.state.loading&&(t=r.a.createElement(Q,null)),r.a.createElement("div",null,t)}}]),t}(n.Component),C=a(38),A=a(79),S=a(80),H=a(81),V=a(82),D=a(83),P=(a(71),function(e){var t=e.author,a=e.content,n=e.edit,o=e.remove;return r.a.createElement(A.a,{body:!0,inverse:!0,color:"info",className:"quote-block"},r.a.createElement(S.a,null,"Quote"),r.a.createElement(H.a,null,r.a.createElement(V.a,null,t,":"),r.a.createElement(D.a,null,a),r.a.createElement(x,{onClick:n,type:"button",color:"secondary"},"Edit"),r.a.createElement(x,{onClick:o,type:"button",color:"warning"},"Delete")))}),B=(a(72),function(){return r.a.createElement("ul",{className:"navs"},r.a.createElement("li",{className:"nav-item mr-5"},r.a.createElement(s.b,{to:"/",exact:!0},"All")),b.categories.map((function(e){return r.a.createElement("li",{key:e.id,className:"nav-item mr-5"},r.a.createElement(s.b,{to:"/quotes/"+e.id},e.title))})))}),F=(a(73),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={quotes:[],loading:!0,category:null},a._getAllPosts=function(){var e,t,n,r;return d.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e="/cinemaQuotes/quotes.json",(t=a.props.match.params.category)&&(e+='?orderBy="category"&equalTo="'+t+'"'),o.next=5,d.a.awrap(y.a.get(e));case 5:(n=o.sent).data?(r=Object.keys(n.data).map((function(e){return console.log(n.data[e]),Object(i.a)({},n.data[e],{id:e})})),a.setState({quotes:r,loading:!1})):a.setState({loading:!1});case 7:case"end":return o.stop()}}))},a.addQuote=function(){a.props.history.push("/cinemaQuotes/quotes/add")},a.quoteDeleteHandler=function(e){var t,n;return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d.a.awrap(y.a.delete("/cinemaQuotes/quotes/".concat(e,".json")));case 2:t=Object(C.a)(a.state.quotes),n=t.findIndex((function(t){return e===t.id})),t.splice(n,1),a.setState({quotes:t});case 6:case"end":return r.stop()}}))},a.quoteEditHandler=function(e){a.props.history.push("/cinemaQuotes/quotes-edit/"+e)},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this._getAllPosts();case 1:case"end":return e.stop()}}),null,this)}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.category!==this.state.category&&(this.setState({category:this.props.match.params.category}),this._getAllPosts())}},{key:"render",value:function(){var e=this,t=this.state.quotes.map((function(t){return r.a.createElement(P,{remove:function(){return e.quoteDeleteHandler(t.id)},edit:function(){return e.quoteEditHandler(t.id)},key:t.id,author:t.author,content:t.content})}));return 0===this.state.quotes.length&&(t=r.a.createElement(x,{onClick:this.addQuote,classNames:"btn-add-quotes",color:"info",type:"button"},"Add new quotes")),this.state.loading&&(t=r.a.createElement(Q,null)),r.a.createElement("div",{className:"container d-flex flex-wrap "},r.a.createElement("div",null,r.a.createElement(B,null)),r.a.createElement("div",{className:"quotes-list"},t))}}]),t}(n.Component)),L=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={quote:{category:b.categories[0].id,author:"",content:""}},a.EditQuote=function(e){var t;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.props.match.params.id,e.preventDefault(),n.next=4,d.a.awrap(y.a.put("/cinemaQuotes/quotes/"+t+".json",a.state.quote));case 4:a.props.history.push("/");case 5:case"end":return n.stop()}}))},a.inputChangeHandler=function(e){e.persist(),a.setState((function(t){var a=Object(i.a)({},t.quote);return a[e.target.name]=e.target.value,{quote:a}}))},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e,t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=this.props.match.params.id,a.next=3,d.a.awrap(y.a.get("/cinemaQuotes/quotes/"+e+".json"));case 3:t=a.sent,this.setState({quote:t.data});case 5:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.quote;return r.a.createElement("div",null,r.a.createElement(N,{submit:this.EditQuote,selectValue:e.category,contentValue:e.content,inputValue:e.author,inputChange:this.inputChangeHandler}))}}]),t}(n.Component);var M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(u,null),r.a.createElement("div",{className:"container mt-5"},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/cinemaQuotes/",exact:!0,component:F}),r.a.createElement(l.a,{path:"/cinemaQuotes/quotes/add",component:O}),r.a.createElement(l.a,{path:"/cinemaQuotes/quotes-edit/:id",component:L}),r.a.createElement(l.a,{path:"/cinemaQuotes/quotes/:category",component:F})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));y.a.defaults.baseURL="https://my-react-apps-6805c.firebaseio.com/",c.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.aed360a3.chunk.js.map