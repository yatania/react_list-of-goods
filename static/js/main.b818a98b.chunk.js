(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),o=n.n(s),c=n(2),i=n(3),l=n(5),u=n(4),m=n(1),g=n(6),f=n.n(g),d=r.a.memo((function(e){var t=e.onClick,n=e.text,a=e.className;return r.a.createElement("button",{type:"button",className:"button ".concat(a),onClick:t},n)}));d.propTypes={onClick:f.a.func.isRequired,text:f.a.string.isRequired,className:f.a.string.isRequired};var p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={goods:e.props.goods},e.initialGoods=Object(m.a)(e.props.goods),e.reverseGoogs=function(){e.setState((function(e){return{goods:Object(m.a)(e.goods).reverse()}}))},e.sortByAlphabet=function(){e.setState((function(e){return{goods:Object(m.a)(e.goods).sort((function(e,t){return e.localeCompare(t)}))}}))},e.sortByNameLength=function(){e.setState((function(e){return{goods:Object(m.a)(e.goods).sort((function(e,t){return e.length-t.length}))}}))},e.reset=function(){e.setState((function(t){return{goods:Object(m.a)(e.initialGoods)}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.goods;return r.a.createElement("div",{className:"box has-background-link-light  p-6"},r.a.createElement("ul",{className:"card p-4 mb-4"},t.map((function(e){return r.a.createElement("li",{key:e,className:"is-size-5"},e)}))),r.a.createElement("div",{className:"buttons"},r.a.createElement(d,{onClick:function(){return e.reverseGoogs()},text:"Reverse",className:"is-warning"}),r.a.createElement(d,{onClick:function(){return e.sortByAlphabet()},text:"Sort alphabetically",className:"is-warning"}),r.a.createElement(d,{onClick:function(){return e.reset()},text:"Reset",className:"is-danger"}),r.a.createElement(d,{onClick:function(){return e.sortByNameLength()},text:"Sort by length",className:"is-warning"})))}}]),n}(a.PureComponent),b=(n(16),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isVisible:!1},e.toStart=function(){e.setState((function(e){return{isVisible:!e.isVisible}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.isVisible;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"title"},"List of goods"),t?r.a.createElement(p,{goods:b}):r.a.createElement(d,{text:"Start",onClick:function(){return e.toStart()},className:"button isCenter is-success"}))}}]),n}(a.PureComponent);o.a.render(r.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.b818a98b.chunk.js.map