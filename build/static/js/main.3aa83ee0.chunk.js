(this.webpackJsonpjpconsulting=this.webpackJsonpjpconsulting||[]).push([[0],{14:function(e,s,t){},16:function(e,s,t){"use strict";t.r(s);var i=t(1),n=t.n(i),c=t(8),r=t.n(c),a=(t(14),t(5)),o=t(2),l=t(0),u=function(){return Object(l.jsx)("div",{className:"jp-logo",children:Object(l.jsx)(a.b,{to:"/",children:Object(l.jsx)("img",{src:"./img/JP Consulting_jaune.png",alt:"logo JP consulting"})})})},j=function(){return Object(l.jsxs)("div",{className:"jp-navigation",children:[Object(l.jsx)(a.c,{to:"/",children:"Accueil"}),Object(l.jsx)(a.c,{to:"#presentation",className:"spaceBetween",children:"Pr\xe9sentation"}),Object(l.jsx)(a.c,{to:"#prestation",children:"Nos services"}),Object(l.jsx)(a.c,{to:"#nous-contacter",children:"Contact"})]})},d=function(){return Object(l.jsxs)("div",{className:"slider",children:[Object(l.jsx)("div",{className:"slider--content",children:Object(l.jsxs)("div",{className:"slider--feature",children:[Object(l.jsx)("h1",{className:"feature--title",children:"Un projet en vue ?"}),Object(l.jsx)("p",{className:"feature--text",children:"Offrez vous le meilleur et \xe0 votre projet le meilleur ! Nos sp\xe9cialistes sont l\xe0 pour r\xe9pondre \xe0 vos besoins"}),Object(l.jsx)("button",{className:"slider-button",children:"D\xe9couvrez nos prestations"})]})}),Object(l.jsxs)("div",{className:"cover-mouse",children:[Object(l.jsxs)("svg",{width:"20",height:"30",viewBox:"0 0 20 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsx)("path",{d:"M10 9V14.0909",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"}),Object(l.jsx)("path",{d:"M19 9.90909C19 4.98874 14.9706 1 10 1C5.02944 1 1 4.98874 1 9.90909V20.0909C1 25.0113 5.02944 29 10 29C14.9706 29 19 25.0113 19 20.0909V9.90909Z",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(l.jsx)("span",{children:"Scroller pour d\xe9couvrir"})]})]})},b=function(){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("nav",{className:"jp-header-content",children:[Object(l.jsx)(j,{}),Object(l.jsx)(u,{})]}),Object(l.jsx)(d,{})]})},m=function(){return Object(l.jsx)("div",{className:"jp-presentation",children:Object(l.jsxs)("div",{className:"container",id:"#presentation",children:[Object(l.jsxs)("div",{className:"body-text",children:[Object(l.jsxs)("h2",{children:["Votre besoin est au centre notre int\xe9r\xeat ",Object(l.jsx)("br",{}),"Votre satisfaction est une priorit\xe9 "]}),Object(l.jsxs)("p",{children:[" Morbi ut dignissim justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet lacus sit amet neque scelerisque, et pellentesque quam auctor. Maurs velit quam, semper id ligula sed, dapibus gravida nibh. Curabitur a mi accumsan tortor mollis ornare eget non sapien. Praesent elit nunc, rutrum sit amet tristique eu, ultricies nec ante. Morbi scelerisque mauris in nunc aliquam aliquam.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{})," Ut maximus ante vel massa congue maximus. Nulla auctor bibendum viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sollicitudin metus eu efficitur mattis. Aenean consequat convallis urna, a egestas purus rutrum a. Nam dictum lobortis cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,i per inceptos himenaeos.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Ut vestibulum vulputate risus, a malesuada libero volutpat ut. Donec ac placerat turpis. Curabitur pellentesque urna nec efficitur tristique. ",Object(l.jsx)("br",{}),"Etiam rhoncus elit nec hendrerit convallis. Praesent ac dolor congue, cursus metus a, egestas nunc. Nullam aliquet viverra felis, nec sollicitudin orci. Duis at nisi eget ex rutrum ullamcorper et vitae ante. Suspendisse convallis neque et arcu faucibus aliquet. Donec in erat risus. Praesent et libero dolor. Mauris eros mi, dignissim id malesuada laoreet, ornare non magna. Sed tempor iaculis lacus vel imperdiet."]}),Object(l.jsxs)("div",{className:"social",children:[Object(l.jsx)("span",{className:"body-hastag",children:"#R\xe9seautage"}),Object(l.jsx)("span",{className:"body-hastag",children:"#Assurance"}),Object(l.jsx)("span",{className:"body-hastag",children:"#Hypoth\xe8que"}),Object(l.jsx)("span",{className:"body-hastag",children:"#Portefeuille"}),Object(l.jsx)("span",{className:"body-hastag",children:"#Business"}),Object(l.jsx)("span",{className:"body-hastag",children:"#Salut\xe7ava?"})]})]}),Object(l.jsx)("img",{src:"./img/julienPerret.png",alt:"Portrait de Julien Perret pour JP Consulting",className:"portrait"})]})})},p=t(4),O=t(9),h=function(e){return Object(l.jsxs)("article",{className:e.isOpen?"Cards-Mini":"Cards",onClick:function(){e.onSelectedService(e.service)},children:[Object(l.jsx)("img",{src:"./img/services/"+e.service.image,alt:e.service.title}),Object(l.jsxs)("div",{className:"banderolle",children:[Object(l.jsx)("h3",{children:e.service.title}),!1===e.isOpen&&Object(l.jsx)("em",{children:e.service.contentMin}),!1===e.isOpen&&Object(l.jsx)("p",{children:"En savoir plus"})]})]})},x=function(){var e=Object(i.useState)(!1),s=Object(p.a)(e,2),t=s[0],n=s[1],c=Object(i.useState)([]),r=Object(p.a)(c,2),a=r[0],o=r[1],u=function(e){o(e),n(!0)};return Object(l.jsx)("div",{className:"jp-services",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"body-title",children:Object(l.jsx)("h2",{children:"D\xe9couvrez nos services"})}),t&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"btn-container",children:Object(l.jsx)("button",{onClick:function(){n(!1)},children:"< Revenir \xe0 la liste >"})}),Object(l.jsxs)("section",{className:"service-show",children:[Object(l.jsxs)("header",{className:"show-header",children:[Object(l.jsx)("img",{src:"./img/services/"+a.image,alt:"Image en cover de la prestation "+a.title}),Object(l.jsx)("h3",{children:a.title})]}),Object(l.jsx)("article",{className:"show-body",children:a.content})]})]}),Object(l.jsx)("section",{className:"service-article",children:O.Services.sort((function(e,s){return e.id-s.id})).map((function(e){return t&&a.id===e.id?null:Object(l.jsx)(h,{service:e,isOpen:t,onSelectedService:u},e.id)}))})]})})},v=function(){return Object(l.jsx)("div",{})};var g=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{}),Object(l.jsx)(m,{}),Object(l.jsx)(x,{}),Object(l.jsx)(v,{})]})},S=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:" Oops la page demand\xe9 n'existe pas ou plus ! "})})},f=function(){return Object(l.jsx)(a.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",element:Object(l.jsx)(g,{})}),Object(l.jsx)(o.a,{path:"*",element:Object(l.jsx)(S,{})})]})})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('{"Services":[{"title":"Assurance","contentMin":"Gestion du protefeuille, Comparaison, assurance vie","content":"Gestion du protefeuille, Comparaison, assurance vie","image":"service1.jpg","price":["Contactez-nous pour un devis"],"id":1},{"title":"Hypoth\xe8que","contentMin":"Gestion du protefeuille, Comparaison, assurance vie","content":"Gestion du protefeuille Comparaison TESSSSSSST","image":"service1.jpg","price":[300,550],"id":2},{"title":"Assurance Vie","contentMin":"Gestion du protefeuille, Comparaison, assurance vie","content":"Gestion du protefeuille Comparaison TESSSSSSST","image":"service1.jpg","price":[300,550],"id":3},{"title":"Administratif","contentMin":"Gestion du protefeuille, Comparaison, assurance vie","content":"Gestion du protefeuille Comparaison TESSSSSSST","image":"service1.jpg","price":[300,550],"id":4},{"title":"informatique","contentMin":"Gestion du protefeuille, Comparaison, assurance vie","content":"Gestion du protefeuille Comparaison TESSSSSSST","image":"service1.jpg","price":[300,550],"id":5},{"title":"Recrutement","contentMin":"Gestion du protefeuille, Comparaison, assurance vie","content":"Gestion du protefeuille Comparaison TESSSSSSST","image":"service1.jpg","price":[300,550],"id":6}]}')}},[[16,1,2]]]);
//# sourceMappingURL=main.3aa83ee0.chunk.js.map