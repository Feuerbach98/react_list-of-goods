(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{21:function(e,t,n){e.exports=n(29)},29:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(15),o=n.n(s),i=n(6),c=n(7),l=n(9),u=n(8),h=n(30),m=(n(26),n(10)),p=n(3),g=n.n(p),d=(g.a.shape(g.a.arrayOf(g.a.objectOf({name:g.a.string.isRequired,id:g.a.number.isRequired}))).isRequired,n(32)),f=function(e){var t=e.onClickFunc,n=e.title;return a.a.createElement(d.a,{className:"m-1",type:"button",onClick:t},n)},y=(g.a.shape({reverseList:g.a.func.isRequired,reset:g.a.func.isRequired,sortByAlph:g.a.func.isRequired,sortByLength:g.a.func.isRequired}).isRequired,function(e){var t=e.reverseList,n=e.sortByAlph,r=e.sortByLength,s=e.reset;return a.a.createElement("div",null,a.a.createElement(f,{onClickFunc:t,title:"Reverse"}),a.a.createElement(f,{onClickFunc:n,title:"Sort Alphabetically"}),a.a.createElement(f,{onClickFunc:s,title:"Reset"}),a.a.createElement(f,{onClickFunc:r,title:"Sort by length"}))}),b=n(31),v=function(e){var t=e.goods;e.reverseList;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Goods list"),a.a.createElement(b.a,null,t.map((function(e){return a.a.createElement(b.a.Item,{key:e.id},e.name)}))))},E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={goods:e.props.preparedGoods},e.reverseList=function(){e.setState((function(e){return{goods:Object(m.a)(e.goods).reverse()}}))},e.sortByAlph=function(){e.setState((function(e){return{goods:Object(m.a)(e.goods).sort((function(e,t){return e.name.localeCompare(t.name)}))}}))},e.reset=function(){e.setState((function(t){return{goods:e.props.preparedGoods}}))},e.sortByLength=function(){e.setState((function(e){return{goods:Object(m.a)(e.goods).sort((function(e,t){return e.name.length-t.name.length}))}}))},e}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,{reverseList:this.reverseList,sortByAlph:this.sortByAlph,sortByLength:this.sortByLength,reset:this.reset}),a.a.createElement(v,{goods:this.state.goods}))}}]),n}(a.a.Component),B=function(e){var t=e.toggleVisible;return a.a.createElement(d.a,{type:"button",onClick:t},"Start")},L=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(e,t){return{name:e,id:t}})),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={contentVisible:!1},e.toggleVisible=function(){e.setState((function(e){return{contentVisible:!e.contentVisible}}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.contentVisible;return a.a.createElement(h.a,{className:"pt-5"},e?a.a.createElement(E,{preparedGoods:L,reverseList:this.reverseList,sortByAlph:this.sortByAlph,reset:this.reset,sortByLength:this.sortByLength}):a.a.createElement(B,{toggleVisible:this.toggleVisible}))}}]),n}(a.a.Component);o.a.render(a.a.createElement(O,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.79d39ff1.chunk.js.map