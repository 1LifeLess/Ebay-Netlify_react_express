(this["webpackJsonpnetlify-react-express-client"]=this["webpackJsonpnetlify-react-express-client"]||[]).push([[0],{16:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/ebay.38123ae2.jpg"},30:function(e,t,a){e.exports=a(47)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),i=a.n(o),l=(a(35),a(15)),c=a(19),s=a(20),m=a(29),p=a(27);a(36),a(16);var d=function(e){return console.log("GetItem rendered"),r.a.createElement("div",{style:{display:"inline-block",padding:"25px",textAlign:"center",border:"0.2px solid #e5e5e5"}},r.a.createElement("div",{style:{width:"227px",height:"227px",background:"#000",borderRadius:"12px",opacity:"0.05",position:"absolute",zIndex:"1",cursor:"pointer",display:"inline-block"}}),r.a.createElement("img",{alt:"item",style:{width:"227px",height:"227px",borderRadius:"12px"},src:e.item.image.imageUrl})," ",r.a.createElement("br",null),r.a.createElement("div",{title:e.item.title,className:"text",style:{width:"227px"}},e.item.title),r.a.createElement("span",{style:{fontWeight:"bold",lineHeight:"30px"}},"Price: ",e.item.price.value),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){e.cartAddRemoveItem(e.item,1)},className:"btn btn-warning"},"Add to cart  "))};var h=a(21),u=a.n(h);var g=function(e){var t=r.a.useRef(null);console.log("props.text = ",e.text);var a=function(a){a.preventDefault(),t.current.value?e.changeText(t.current.value):document.getElementById("searchBox").style.border="1px solid #ff0000"};return r.a.createElement("div",null,r.a.createElement("img",{alt:"ebay logo",style:{height:"100px"},src:u.a}),r.a.createElement("nav",{class:"navbar navbar-light bg-light"},r.a.createElement("form",{class:"form-inline",onSubmit:a},r.a.createElement("input",{id:"searchBox",onChange:function(){return document.getElementById("searchBox").style.border=""},onKeyPress:function(e){return 13===e.key?a:null},class:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",ref:t}),r.a.createElement("button",{class:"btn btn-outline-success my-2 my-sm-0 ",disabled:e.authError,type:"submit"},"Search"))))},y=a(28),f=a(26);var v=function(e){return r.a.createElement("div",{className:"li",style:{userSelect:"none"}},r.a.createElement("img",{alt:"item",style:{width:"70px",height:"50px",paddingRight:"10px"},src:e.item.image.imageUrl}),r.a.createElement("svg",{onClick:function(){e.addAnother(e.item)},xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"green",class:"bi bi-plus-circle-fill",viewBox:"0 0 16 16"},r.a.createElement("path",{"fill-rule":"nonzero",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"})),r.a.createElement("span",{style:{padding:"10px",fontWeight:"bold"}},e.item.inCart),r.a.createElement("svg",{onClick:function(){e.removeOne(e.item)},xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"red",class:"bi bi-dash-circle-fill",viewBox:"0 0 16 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"})))};a(37);var b=function(e){var t=Object(n.useState)(!0),a=Object(y.a)(t,2),o=a[0],i=a[1];console.log("Cart rendered, open =",o),Object(n.useEffect)((function(){}));var l=e.items.reduce((function(e,t){return e+t.inCart}),0),c=function(t){e.cartAddRemoveItem(t,1)},s=function(t){e.cartAddRemoveItem(t,-1)},m=parseFloat(0),p=e.items.map((function(e){return m+=parseFloat(e.price.value*e.inCart),r.a.createElement(v,{key:e.itemId,item:e,addAnother:c,removeOne:s})}));return m=parseFloat(m).toFixed(2),r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){i(!o)},style:{userSelect:"none",cursor:"pointer",textAlign:"right"},ariaControls:"cart"},r.a.createElement("svg",{style:{width:"3em",height:"3em",right:"0",paddingBottom:"10px"},viewBox:"0 0 16 16",class:"bi bi-cart3",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"discrete",d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})),r.a.createElement("span",{style:{color:"white",fontWeight:"bold",textAlign:"center",width:"25px",height:"25px",borderRadius:"50%",backgroundColor:"red",margin:"-5px 0 0 -15px",display:"inline-block"}},l)),r.a.createElement(f.a,{in:o},r.a.createElement("div",{id:"cart"},p,r.a.createElement("div",{style:{display:l>0?"block":"none",fontWeight:"bold",fontSize:"20px",textAlign:"center",background:"#F5AF02",width:"inherit"}},m,r.a.createElement("div",{className:"trash",onClick:function(){return e.emptyCart()}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",class:"bi bi-trash-fill",viewBox:"0 0 16 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"})))))))},E=a(23),x=a.n(E);var P=function(e){return Object(n.useEffect)((function(){console.log("GETkeyCalled");var t={code:x.a.parse(e.location.search).code};console.log("mybody = ",JSON.stringify(t)),fetch(" /.netlify/functions/server/getToken",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)}).then((function(t){if(console.log("resposne getkey = ",t),!t.ok)throw new Error("Failed to generate access token, probably code in url is expired: ");e.fetchItems()})).catch((function(t){console.log("ERROR getKeyFromCode = ",t),e.handleError(t.message,!0)}))})),null},w=function(e){var t=[];console.log("pagination rendered");for(var a=1;a<=Math.ceil(e.totalItems/e.itemsPerPage);a++)t.push(a);return r.a.createElement("nav",{style:{display:"inline-block"}},r.a.createElement("ul",{className:"pagination"},t.map((function(t){return r.a.createElement("li",{key:t,style:{cursor:"pointer"},className:e.currentPage===t?"page-item active":"page-item"},r.a.createElement("div",{onClick:function(){return e.changeCurrentPage(t)},className:"page-link"},t))}))))},I=(a(41),function(e){return console.log("Sort Rendered"),r.a.createElement("div",{class:"dropdown",style:{display:"inline-block",paddingRight:"15px",paddingLeft:"17px",height:"38px"}},r.a.createElement("button",{style:{height:"inherit"},class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort"),r.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"dropdownMenuButton",style:{cursor:"pointer"}},r.a.createElement("div",{class:"dropdown-item",onClick:function(){return e.changeSortOrder(0)}},"Price low to high"),r.a.createElement("div",{class:"dropdown-item",onClick:function(){return e.changeSortOrder(1)}},"Price high to low")))}),k=function(e){console.log("ItemsPerPage rendered");return r.a.createElement("div",{style:{position:"relative",verticalAlign:"sub",display:"inherit",paddingRight:"50px"}},"items:",r.a.createElement("br",null),r.a.createElement("select",{onChange:function(t){e.updateItemsPerPage(t.target.value)},value:e.itemsPerPage},r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"20"},"20"),r.a.createElement("option",{value:"30"},"30")))},C=a(24),A=a(2);var _=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={loading:!0,wasTokenAchived:!1,searchTxt:"case",items:[],sort:0,cartItems:[],itemsPerPage:10,currentPage:1,authError:!1,error:""},e.fetchItems=function(){console.log("Fetch Items Call"),e.setState({loading:!0,items:[],error:""});var t=arguments.length>0?arguments.length<=0?void 0:arguments[0]:e.state.searchTxt;fetch("/.netlify/functions/server/fetchItems/searchTxt/"+t,{}).then((function(e){if(console.log("res = ",e),e.ok)return console.log("RES OK = ",e),e.json();if(console.log("response bad = ",e.type),401==e.status)throw Error("no result, please search for something else")})).then((function(a){var n=0;a.filter((function(e){return e.image&&e.image.imageUrl})).forEach((function(e){e.key=n,e.inCart=0,n++})),e.setState({loading:!1,items:a,searchTxt:t,wasTokenAchived:!0,currentPage:e.state.items.length/e.state.itemsPerPage<1?1:e.state.currentPage,error:""})})).catch((function(t){console.log("ERROR fetchItems = ",t),e.handleError(t.message)}))},e.changeText=function(t){console.log("APP.text = ",t),console.log("APP.changeText","a"),e.fetchItems(t)},e.cartAddRemoveItem=function(t,a){console.log("cartAddRemoveItem",t,a);var n=Object(l.a)(e.state.cartItems),r=e.state.cartItems.findIndex((function(e){return e.itemId==t.itemId}));-1==r?(t.inCart++,n=[].concat(Object(l.a)(n),[t])):(n[r].inCart+=a,0==n[r].inCart&&n.splice(r,1)),e.setState({cartItems:n})},e.createItemList=function(){var t=parseInt(e.state.currentPage*e.state.itemsPerPage),a=parseInt(e.state.itemsPerPage);return e.state.items.slice(t-a,t).map((function(t){return r.a.createElement(d,{key:t.key,item:t,cartAddRemoveItem:e.cartAddRemoveItem})}))},e.changeCurrentPage=function(t){e.setState({currentPage:t})},e.changeSortOrder=function(t){var a=e.state.items.sort((function(e,a){return 0==t&&e.price.value-a.price.value<0||1==t&&e.price.value-a.price.value>0?-1:0}));e.setState({sort:t,currentPage:1,items:a})},e.updateItemsPerPage=function(t){console.log("updateItemsPerPage");var a=e.state,n=a.items,r=a.currentPage,o=n.length/t<r?Math.ceil(n.length/t):r;console.log("tmpCurrentPage = ",o),e.setState({itemsPerPage:t,currentPage:o})},e.handleError=function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];console.log("APP.handleError args = ",a),e.setState({error:a[0],authError:a.length>1,loading:!1}),console.log("error updated")},e.homeButton=function(){e.props.history.push("http://localhost:3000/")},e.emptyCart=function(){e.state.cartItems.map((function(e){return e.inCart=0}));e.setState({cartItems:[]})},e}return Object(s.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return!(1==this.state.loading&&1==t.loading)}},{key:"componentDidMount",value:function(){console.log("app.js mounted")}},{key:"render",value:function(){var e=this;console.log("APP rendered STATE= ",this.state);var t=this.state;t.error,t.loading,t.items;return r.a.createElement("div",null,r.a.createElement(C.a,null,r.a.createElement(A.c,null,window.location.href.indexOf("code=")>0&&!this.state.wasTokenAchived&&""===this.state.error&&r.a.createElement(A.a,{path:"/",render:function(t){return r.a.createElement(P,Object.assign({fetchItems:e.fetchItems,handleError:e.handleError},t))}}),window.location.href.indexOf("code=")<0&&r.a.createElement(A.a,{path:"/",exact:!0,strict:!0,component:function(){return window.location.href="https://auth.sandbox.ebay.com/oauth2/authorize?client_id=tomersha-store-SBX-8e64e9f22-0c82ed0b&response_type=code&redirect_uri=tomer_shani-tomersha-store--trsqvdhhl&scope=https://api.ebay.com/oauth/api_scope https://api.ebay.com/oauth/api_scope/buy.order.readonly https://api.ebay.com/oauth/api_scope/buy.guest.order https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing https://api.ebay.com/oauth/api_scope/sell.inventory.readonly https://api.ebay.com/oauth/api_scope/sell.inventory https://api.ebay.com/oauth/api_scope/sell.account.readonly https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly https://api.ebay.com/oauth/api_scope/sell.fulfillment https://api.ebay.com/oauth/api_scope/sell.analytics.readonly https://api.ebay.com/oauth/api_scope/sell.marketplace.insights.readonly https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly https://api.ebay.com/oauth/api_scope/buy.shopping.cart https://api.ebay.com/oauth/api_scope/buy.offer.auction https://api.ebay.com/oauth/api_scope/commerce.identity.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.email.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.phone.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.address.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.name.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.status.readonly https://api.ebay.com/oauth/api_scope/sell.finances https://api.ebay.com/oauth/api_scope/sell.item.draft https://api.ebay.com/oauth/api_scope/sell.payment.dispute https://api.ebay.com/oauth/api_scope/sell.item",null}}))),r.a.createElement("div",{style:{paddingLeft:40,paddingRight:40,align:"center"}},r.a.createElement(g,{text:this.state.searchTxt,changeText:this.changeText,authError:this.state.authError}),r.a.createElement("div",{style:{right:"2%",position:"fixed"}},r.a.createElement(b,{items:this.state.cartItems,cartAddRemoveItem:this.cartAddRemoveItem,emptyCart:this.emptyCart})),r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement(I,{changeSortOrder:this.changeSortOrder}),r.a.createElement(k,{updateItemsPerPage:this.updateItemsPerPage,itemsPerPage:this.state.itemsPerPage}),r.a.createElement(w,{totalItems:this.state.items.length,itemsPerPage:this.state.itemsPerPage,currentPage:this.state.currentPage,changeCurrentPage:this.changeCurrentPage})),r.a.createElement("div",null,r.a.createElement("div",{style:{justifyContent:"center",display:""===this.state.error?"none":"flex"}},this.state.error,r.a.createElement("a",{style:{display:this.state.authError?"inherit":"none"},href:"/"},"Generate New Code")),this.createItemList(),r.a.createElement("div",{class:"d-flex justify-content-center",style:{visibility:this.state.loading?"visible":"hidden"}},r.a.createElement("div",{class:"spinner-border",role:"status",style:{width:"3rem",height:"3rem"}})))))}}]),a}(n.Component);a(46);i.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.5a2c2d13.chunk.js.map