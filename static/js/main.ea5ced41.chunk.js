(this.webpackJsonpbodega=this.webpackJsonpbodega||[]).push([[0],{162:function(e,A,a){},180:function(e,A,a){"use strict";a.r(A);var c=a(1),t=a.n(c),s=a(26),r=a.n(s),i=(a(161),a(162),a(196)),n=a(121),d=a(87),l=a.n(d),o=a(205),j=a(200),b=a(143),u=a(36),h=a(198),m=a(85),O=a(181),x=a(68),p=a(195),f=a(199),g=a(3),v=[{key:".com",text:".com",value:".com"},{key:".net",text:".net",value:".net"},{key:".org",text:".org",value:".org"}];var C=function(){return Object(g.jsxs)(p.a,{type:"text",placeholder:"Search...",action:!0,children:[Object(g.jsx)("input",{}),Object(g.jsx)(f.a,{compact:!0,options:v,placeholder:"Select Category"}),Object(g.jsx)(O.a,{basic:!0,type:"submit",icon:!0,children:Object(g.jsx)(x.b,{})})]})},I=a(204);var W=function(e){return Object(g.jsxs)(I.a,{as:j.a,animation:"overlay",icon:"labeled",onHide:function(){return e.closeSideBar(!1)},vertical:!0,visible:e.open,width:"wide",dimmed:e.open,children:[Object(g.jsxs)(j.a.Item,{as:"a",children:[Object(g.jsx)(u.a,{name:"user"})," My Account"]}),Object(g.jsxs)(j.a.Item,{as:"a",children:[Object(g.jsx)(m.a,{circular:!0,color:"orange",children:"2"}),Object(g.jsx)(u.a,{name:"shopping cart"})," Cart"]}),Object(g.jsxs)(j.a.Item,{as:"a",children:[Object(g.jsx)(m.a,{circular:!0,color:"orange",children:"0"}),Object(g.jsx)(u.a,{name:"heart"})," Favourites"]})]})},y=a(47),Y=a(70),V=Object(Y.b)({name:"cart",initialState:{items:[]},reducers:{addToCart:function(e,A){e.items.push({prodId:A.payload.id,name:A.payload.name,prodImg:A.payload.image,price:A.payload.price,value:A.payload.value,totalPrice:parseInt(A.payload.price,10)*parseInt(A.payload.value,10)})},removeFromCart:function(e,A){e.items=e.items.filter((function(e){return e.prodId!==A.payload.id}))}}}),w=V.actions,L=w.addToCart,B=(w.removeFromCart,function(e){return e.cart.items}),q=V.reducer;var z=function(){var e=Object(y.c)(B),A=Object(c.useRef)(),a=Object(c.useState)(!1),t=Object(n.a)(a,2),s=t[0],r=t[1],d=Object(c.useState)(null),p=Object(n.a)(d,2),f=(p[0],p[1]),v=Object(c.useState)(!1),I=Object(n.a)(v,2),Y=I[0],V=I[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(W,{open:s,closeSideBar:function(){r(!1)}}),Object(g.jsx)("div",{className:l.a.topMessage,children:Object(g.jsx)(i.a,{children:Object(g.jsxs)(o.a,{style:{paddingTop:"15px"},children:[Object(g.jsx)(o.a.Column,{only:"large screen",floated:"left",width:5,children:"Welcome to Mr. Kebab"}),Object(g.jsx)(o.a.Column,{floated:"right",width:3,children:Object(g.jsx)(x.c,{})})]})})}),Object(g.jsx)(j.a,{borderless:!0,children:Object(g.jsxs)(i.a,{children:[Object(g.jsx)(j.a.Item,{children:Object(g.jsx)(b.a,{size:"small",src:"data:image/png;base64,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"})}),Object(g.jsx)(j.a.Item,{style:{width:"50%"},className:l.a.manuLaptopOnly,children:Object(g.jsx)(C,{})}),Object(g.jsxs)(j.a.Menu,{position:"right",className:l.a.manuLaptopOnly,children:[Object(g.jsxs)(j.a.Item,{as:"a",children:[Object(g.jsx)(u.a,{name:"user"})," My Account"]}),Object(g.jsxs)(j.a.Item,{as:"a",onMouseOver:function(e){f(e.target),console.log(e.target),V(!0)},onMouseOut:function(){V(!1)},ref:A,children:[Object(g.jsx)(h.a,{open:Y,context:A,position:"bottom center",positionFixed:!0,children:"This is just popup"}),Object(g.jsx)(u.a,{name:"shopping cart"})," Cart",Object(g.jsx)(m.a,{circular:!0,color:"orange",children:e.length})]}),Object(g.jsxs)(j.a.Item,{as:"a",children:[Object(g.jsx)(u.a,{name:"heart"})," Favourites",Object(g.jsx)(m.a,{circular:!0,color:"orange",children:"0"})]})]}),Object(g.jsx)(j.a.Menu,{position:"right",className:l.a.manuMobileOnly,children:Object(g.jsx)(j.a.Item,{style:{paddingTop:"30px"},children:Object(g.jsx)(O.a,{basic:!0,circular:!0,icon:"bars",color:"black",onClick:function(){r(!0)}})})})]})})]})},F=a(38),k=a(201);var S=function(){return Object(g.jsxs)(k.a,{divided:!0,relaxed:!0,selection:!0,children:[Object(g.jsxs)(k.a.Item,{children:[Object(g.jsx)(k.a.Icon,{name:"utensils",size:"large",verticalAlign:"middle"}),Object(g.jsx)(k.a.Content,{children:Object(g.jsx)(k.a.Header,{children:"Food"})})]}),Object(g.jsxs)(k.a.Item,{children:[Object(g.jsx)(k.a.Icon,{size:"large",verticalAlign:"middle",children:Object(g.jsx)(F.b,{})}),Object(g.jsx)(k.a.Content,{children:Object(g.jsx)(k.a.Header,{children:"Kebab"})})]}),Object(g.jsxs)(k.a.Item,{children:[Object(g.jsx)(k.a.Icon,{size:"large",verticalAlign:"middle",children:Object(g.jsx)(F.g,{})}),Object(g.jsx)(k.a.Content,{children:Object(g.jsx)(k.a.Header,{children:"Sandwich"})})]}),Object(g.jsxs)(k.a.Item,{children:[Object(g.jsx)(k.a.Icon,{size:"large",verticalAlign:"middle",children:Object(g.jsx)(F.a,{})}),Object(g.jsx)(k.a.Content,{children:Object(g.jsx)(k.a.Header,{children:"Stews"})})]}),Object(g.jsxs)(k.a.Item,{children:[Object(g.jsx)(k.a.Icon,{size:"large",verticalAlign:"middle",children:Object(g.jsx)(F.h,{})}),Object(g.jsx)(k.a.Content,{children:Object(g.jsx)(k.a.Header,{children:"Breakfast"})})]}),Object(g.jsxs)(k.a.Item,{children:[Object(g.jsx)(k.a.Icon,{size:"large",verticalAlign:"middle",children:Object(g.jsx)(F.e,{})}),Object(g.jsx)(k.a.Content,{children:Object(g.jsx)(k.a.Header,{children:"Dairy"})})]}),Object(g.jsxs)(k.a.Item,{children:[Object(g.jsx)(k.a.Icon,{size:"large",verticalAlign:"middle",children:Object(g.jsx)(F.d,{})}),Object(g.jsx)(k.a.Content,{children:Object(g.jsx)(k.a.Header,{children:"Drinks"})})]}),Object(g.jsxs)(k.a.Item,{children:[Object(g.jsx)(k.a.Icon,{size:"large",verticalAlign:"middle",children:Object(g.jsx)(F.c,{})}),Object(g.jsx)(k.a.Content,{children:Object(g.jsx)(k.a.Header,{children:"Sides"})})]}),Object(g.jsxs)(k.a.Item,{children:[Object(g.jsx)(k.a.Icon,{size:"large",verticalAlign:"middle",children:Object(g.jsx)(F.f,{color:"#ff4500"})}),Object(g.jsx)(k.a.Content,{children:Object(g.jsx)(k.a.Header,{children:"Sales"})})]}),Object(g.jsxs)(k.a.Item,{children:[Object(g.jsx)(k.a.Icon,{size:"large",verticalAlign:"middle",children:Object(g.jsx)(x.a,{color:"#ff4500"})}),Object(g.jsx)(k.a.Content,{children:Object(g.jsx)(k.a.Header,{children:"Diet Food"})})]})]})},X=(a(173),a(142)),M=a.p+"static/media/lula.ac124639.jpg",H=a.p+"static/media/food-2.968d3559.jpeg",K=a.p+"static/media/food-3.67609d78.jpeg",N=a.p+"static/media/food-4.f421bffb.jpeg",Z=a.p+"static/media/food-5.caeb58a7.jpeg";var E=function(){return Object(g.jsxs)(X.Carousel,{autoPlay:!0,showThumbs:!1,width:"100%",infiniteLoop:!0,children:[Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:M})}),Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:H})}),Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:K})}),Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:N})}),Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:Z})})]})};var P=function(){return Object(g.jsx)(o.a,{celled:!0,stackable:!0,children:Object(g.jsxs)(o.a.Row,{children:[Object(g.jsx)(o.a.Column,{width:13,children:Object(g.jsx)(E,{})}),Object(g.jsx)(o.a.Column,{width:3,children:Object(g.jsx)(S,{})})]})})},D=a(207),J=a(206),T=a(197),G=a(202),Q=Object(Y.b)({name:"products",initialState:{prods:[{prodId:1,name:"Chicken Kebab & Rice",price:17,image:"https://static.easy.restaurant/media/7001e384f5115ae83de5e75990365db83aaf2137/menu/thumb/400x400_69e56976fc9bee70c1d2eaa85c0c8dea9f722a2f.png",sale:!0,description:"Chicken breast, plain greek yogurt, grain white rice, lemon, red onion.",discount:2},{prodId:2,name:"Lahmacun",price:12,image:"https://static.easy.restaurant/media/7001e384f5115ae83de5e75990365db83aaf2137/menu/thumb/400x400_5b7d26c4d99b922929b7c30ce06be0fd58a71500.png",sale:!1,description:"Ground lamb, lemon, red bell pepper, crust, olive oil.",discount:0},{prodId:3,name:"Zucchini Pancake",price:9.95,image:"https://static.easy.restaurant/media/fc251f8a8d36d58864245ce34cfeb91ca8d2cc8f/menu/thumb/400x400_d2fce7d4fae7323ea1b94f177e0a41a42fe0dd09.png",sale:!1,description:"Zucchini, carrots, dill, flour, eggs & mozzarella.",discount:0},{prodId:4,name:"Chicken Kebab Wrap",price:13,image:"https://static.easy.restaurant/media/fc251f8a8d36d58864245ce34cfeb91ca8d2cc8f/menu/thumb/400x400_2978e0c34dbebfc46bf96c994436a5790a22017a.png",sale:!1,description:"Chicken, pita bread, tzatziki sauce, beef tomatoes, red onion.",discount:0},{prodId:1,name:"Lamb Chops",price:15.95,image:"https://static.easy.restaurant/media/7001e384f5115ae83de5e75990365db83aaf2137/menu/thumb/400x400_431bf3b995a99c2cd6899b97187d1542a965cec9.png",sale:!1,description:"Plain greek yogurt, lamb steak, basmati rice, tomatoes, iceberg lettuce.",discount:0},{prodId:2,name:"Chicken & Lamb Adana Kebab",price:17,image:"https://static.easy.restaurant/media/7001e384f5115ae83de5e75990365db83aaf2137/menu/thumb/400x400_94940e534aedd3f6d9bb77c6322f6641dbb7432a.png",sale:!1,description:"ground chicken, ground lamb, basmati rice, tomatoes, olive oil, tomatoes.",discount:0},{prodId:3,name:"Kebab And Lamb Gyro",price:17.5,image:"https://static.easy.restaurant/media/fc251f8a8d36d58864245ce34cfeb91ca8d2cc8f/menu/thumb/400x400_9aaa0b523023790b2cf1df9dc629ba14abd0edd5.png",sale:!1,description:"Ground lamb cooked on a rotisserie, lamb doner slices, freshly chopped tomatoes and basmati rice.",discount:0},{prodId:4,name:"Lamb Kebab On Turkish Bread",price:8.95,image:"https://static.easy.restaurant/media/fc251f8a8d36d58864245ce34cfeb91ca8d2cc8f/menu/thumb/400x400_6153f0b97fb44420cd413a37979f8e6219fc3f36.png",sale:!1,description:"lamb kebab, turkish bread, lettuce and tomatoes, white sauce.",discount:0}]},reducers:{addProduct:function(e,A){e.prods.push({prodId:A.payload.id,name:A.payload.name,price:A.payload.price,image:A.payload.image,sale:A.payload.sale,description:A.payload.description,discount:A.payload.discount})}}}),R=(Q.actions.addProduct,function(e){return e.products.prods}),U=Q.reducer,_=a(120);a(179);var $=function(e){var A=e.prod,a=A.name,c=A.prodId,t=A.price,s=A.image,r=A.description,i=A.sale,n=A.discount,d=Object(y.b)();return Object(g.jsxs)(G.a,{children:[Object(g.jsxs)("div",{className:"image",children:[i&&Object(g.jsx)("div",{className:"ui red right ribbon label",children:"-".concat(n,"%")}),Object(g.jsx)("img",{src:s,alt:"food-pic"})]}),Object(g.jsxs)(G.a.Content,{children:[Object(g.jsx)(G.a.Header,{children:a}),Object(g.jsx)(G.a.Description,{children:r})]}),Object(g.jsxs)(G.a.Content,{extra:!0,children:[Object(g.jsx)("span",{className:"left floated heart",children:Object(g.jsx)("a",{children:Object(g.jsx)(u.a,{name:"heart"})})}),Object(g.jsx)("span",{className:"right floated star",children:Object(g.jsxs)(J.a,{as:"h4",children:[i&&Object(g.jsx)("span",{style:{textDecoration:"line-through",fontSize:"12px",color:"#828282"},children:"USD 32.00"}),"$".concat(t)]})})]}),Object(g.jsxs)("button",{className:"ui bottom attached button animated fade",style:{backgroundColor:"#ff4500",color:"#fff"},onClick:function(){d(L({prodId:c,name:a,prodImage:s,price:t,value:1})),_.c.success("\u2705 "+a+" Added to cart !")},children:[Object(g.jsx)("div",{className:"hidden content",children:"Add To Cart"}),Object(g.jsx)("div",{className:"visible content",children:Object(g.jsx)("i",{className:"shop icon"})})]}),Object(g.jsx)(_.b,{transition:_.a,autoClose:3e3})]})};var ee=function(){var e=Object(y.c)(R).map((function(e){return Object(g.jsx)($,{prod:e})}));return Object(g.jsxs)(D.a,{className:"segmentBorder",children:[Object(g.jsx)(J.a,{as:"h2",children:"Our Menu"}),Object(g.jsx)(T.a,{section:!0}),Object(g.jsx)(G.a.Group,{itemsPerRow:4,stackable:!0,children:e})]})};var Ae=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(P,{}),Object(g.jsx)(ee,{})]})};var ae=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(z,{}),Object(g.jsx)(i.a,{children:Object(g.jsx)(Ae,{})})]})},ce=Object(Y.a)({reducer:{cart:q,products:U}});r.a.render(Object(g.jsx)(t.a.StrictMode,{children:Object(g.jsx)(y.a,{store:ce,children:Object(g.jsx)(ae,{})})}),document.getElementById("root"))},87:function(e,A,a){e.exports={topMessage:"Navbar_topMessage__2ZXJD",manuMobileOnly:"Navbar_manuMobileOnly__qVDbS",manuLaptopOnly:"Navbar_manuLaptopOnly__2Vqgs"}}},[[180,1,2]]]);
//# sourceMappingURL=main.ea5ced41.chunk.js.map