(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{233:function(e,t,n){"use strict";n.r(t);var r=n(278),a=n(0),i=n.n(a),o=n(237),c=n(243),l=(n(23),n(24),n(145),n(146),n(53),n(50),n(279)),s=n.n(l),d=n(240),u=(n(35),n(235)),m=n(236);function f(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n      &:hover {\n        > header {\n          transform: translateX(-.75rem);\n        }\n      }\n    "]);return f=function(){return e},e}var p=u.default.article.withConfig({displayName:"style__Wrapper",componentId:"yhejqv-0"})(["padding:1.3rem 0;border-bottom:1px dotted #2f3743;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;position:relative;> header{transform:translateX(0);transition:transform .5s cubic-bezier(.5,.1,0,1.15);backface-visibility:hidden;will-change:transform;}&:last-child{border-bottom:0;}> a{position:absolute;top:0;right:0;bottom:0;left:0;font-size:0;line-height:0;}",""],function(e){return e.hasLink&&Object(u.css)(["",""],m.d.hover(f()))}),h=u.default.h3.withConfig({displayName:"style__WorkTitle",componentId:"yhejqv-1"})(["font-size:1.1rem;color:#000;font-weight:400;"]),g=u.default.div.withConfig({displayName:"style__WorkInfos",componentId:"yhejqv-2"})(["margin-top:.5rem;font-family:",";font-size:.9rem;color:",";"],m.b.mono,m.a.gray500),b=u.default.span.withConfig({displayName:"style__WorkYear",componentId:"yhejqv-3"})(["color:#000;&::before{content:'';display:inline-block;vertical-align:middle;height:1px;width:1rem;background:",";margin-right:.5rem;}"],m.a.yellow500),y=function(e){var t=e.work,n=t.title,r=t.client,a=t.year,o=t.collaborators,c=t.url;return i.a.createElement(p,{hasLink:null!==c},i.a.createElement("header",null,i.a.createElement(h,null,n),i.a.createElement(g,null,i.a.createElement("span",null,r),o&&i.a.createElement("span",null," w/ ",o.map(function(e){return e}).join(", ")))),i.a.createElement(g,null,i.a.createElement(b,null,a)),c&&i.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},"More Info"))},v=n(242),w=n(280),E=n.n(w);function k(){var e=_(["\n    margin: 4rem auto 0;\n  "]);return k=function(){return e},e}function x(){var e=_(["\n    max-width: 100%;\n  "]);return x=function(){return e},e}function _(e,t){return t||(t=e.slice(0)),e.raw=t,e}var j=u.default.section.withConfig({displayName:"style__Wrapper",componentId:"sc-1vksm3n-0"})(["max-width:80%;margin:8rem auto 0;"," ",""],m.d.lg(x()),m.d.sm(k())),C=u.default.h1.withConfig({displayName:"style__WorksTitle",componentId:"sc-1vksm3n-1"})(["font-size:1.6rem;"]),N=u.default.div.withConfig({displayName:"style__ButtonsWrapper",componentId:"sc-1vksm3n-2"})(["padding:.75rem 0 1.5rem;"]),z=u.default.button.withConfig({displayName:"style__FilterButton",componentId:"sc-1vksm3n-3"})(["border:0;background:0;padding:0;margin:0;appearance:none;font-size:.9rem;font-family:",";cursor:pointer;&:not(:last-child)::after{content:'-';display:inline-block;margin:0 .5rem;color:",";}&:focus{outline:0;}",""],m.b.mono,m.a.gray500,function(e){return e.active?Object(u.css)(["color:",";"],m.a.yellow500):Object(u.css)(["color:",";"],m.a.gray500)}),O=u.default.footer.withConfig({displayName:"style__NDAWrapper",componentId:"sc-1vksm3n-4"})(["padding-top:4rem;text-align:center;h2{font-size:1.1rem;color:#000;margin-bottom:.75rem;line-height:1.4em;}"]),I=Object(u.default)(E.a).withConfig({displayName:"style__StyledDivider",componentId:"sc-1vksm3n-5"})(["margin-bottom:3rem;"]),W=Object(u.default)(v.a).withConfig({displayName:"style__StyledEmailMe",componentId:"sc-1vksm3n-6"})(["color:",";font-family:",";font-size:.9rem;border-bottom:1px dotted ",";padding:0 0 .1rem;display:inline-block;&:hover{color:",";}"],m.a.yellow500,m.b.mono,m.a.yellow500,m.a.yellow500),L=function(e){var t=e.works,n=e.category,r=e.setCategory;return i.a.createElement(j,null,i.a.createElement("header",null,i.a.createElement(C,null,"Other works"),i.a.createElement(N,null,i.a.createElement(z,{active:"design"===n,onClick:function(){return r("design")}},"design"),i.a.createElement(z,{active:"code"===n,onClick:function(){return r("code")}},"code"),n&&i.a.createElement(z,{onClick:function(){return r(null)}},"all"))),i.a.createElement("main",null,t.map(function(e,t){var n=e.work;return i.a.createElement(y,{key:t,work:n})})),i.a.createElement(O,null,i.a.createElement(I,{height:6,width:43}),i.a.createElement("h2",null,"Want to collaborate with us?"),i.a.createElement(W,{text:"Drop us an email"})))},M=(n(281),n(282)),S=n(246);function R(){var e=F(["\n      padding-top: 100%;\n    "]);return R=function(){return e},e}function q(){var e=F(["\n    box-shadow: none;\n    transform: translateY(0);\n    \n    &:hover {\n      box-shadow: none;\n      transform: translateY(0);     \n    }\n  "]);return q=function(){return e},e}function F(e,t){return t||(t=e.slice(0)),e.raw=t,e}var T=u.default.article.withConfig({displayName:"style__WorkFeatured",componentId:"sc-1exou8z-0"})(["border-radius:2px;overflow:hidden;position:relative;box-shadow:0 15px 30px -5px rgba(0,0,0,.35);transform:translateY(0);transition:all .3s cubic-bezier(.45,0,.1,1);transform-style:preserve-3d;backface-visibility:hidden;will-change:box-shadow,transform;&:hover{transform:translateY(-.5rem);box-shadow:0 20px 30px -10px rgba(0,0,0,.35);}a{position:absolute;top:0;right:0;bottom:0;left:0;font-size:0;line-height:0;z-index:2;}",""],m.d.sm(q())),D=Object(u.default)(S.a).withConfig({displayName:"style__StyledImage",componentId:"sc-1exou8z-1"})(["display:block;position:relative;background:#242e3a;&::before{content:'';padding-top:74%;display:block;","}img{position:absolute;display:block;margin:auto;width:100%;height:100%;top:-100%;right:-100%;bottom:-100%;left:-100%;object-fit:cover;z-index:1;}"],m.d.sm(R())),P=u.default.section.withConfig({displayName:"style__Wrapper",componentId:"sc-1exou8z-2"})(["display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:2rem;grid-row-gap:2rem;"]),A=Object(u.default)(M.Carousel).withConfig({displayName:"style__StyledCarousel",componentId:"sc-1exou8z-3"})(["box-shadow:0 10px 30px rgba(19,27,37,.4);overflow:hidden;border-radius:2px;.carousel{.slide{background:transparent;}.control-dots{margin:0 0 1rem;.dot{box-shadow:none;height:1px;width:1.5rem;margin:0 .25rem;border-radius:0;}}}"]);var Q=function(e){var t,n;function r(){var t;return(t=e.call(this)||this).state={widthLoaded:!1,isMobile:!1},t.setMobile=t.setMobile.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.componentDidMount=function(){"undefined"!=typeof window&&(this.setMobile(),window.addEventListener("resize",this.setMobile))},a.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("resize",this.setMobile)},a.setWidthLoaded=function(){this.setState({widthLoaded:!0})},a.setMobile=function(){var e=this;this.setState({isMobile:window.innerWidth<480},function(){return e.setWidthLoaded()})},a.renderWorksList=function(e){var t=e.work,n=t.title,r=t.image,a=t.url;return i.a.createElement(T,{key:n},i.a.createElement(D,Object.assign({alt:n,loader:function(e){var t=e.isLoaded;return i.a.createElement(d.d,{isLoaded:t})}},r)),a&&i.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},"More Info"))},a.renderWorksWrapper=function(){var e=this.props.works,t=this.state.isMobile,n=e.map(this.renderWorksList);return t?i.a.createElement(A,{showArrows:!1,showThumbs:!1,showStatus:!1,interval:1e4,autoPlay:!0},n):i.a.createElement(P,null,n)},a.render=function(){return this.state.widthLoaded&&this.renderWorksWrapper()},r}(a.Component),Y=n(247),X=n(238);var B=function(e){var t,n;function r(){var t;return(t=e.call(this)||this).state={category:null},t.setCategory=t.setCategory.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.setCategory=function(e){this.setState({category:e})},a.getData=function(){var e=this.props.data;return s()(e,function(e){return e.works.edges})},a.getWorks=function(){var e=this.state.category,t=this.getData();return t&&t.filter(function(t){var n=t.work;return e?!n.featured&&n.category.includes(e):!n.featured})},a.getFeaturedWorks=function(){var e=this.getData();return e&&e.filter(function(e){return e.work.featured})},a.render=function(){var e=this.state.category;return i.a.createElement(d.a,null,i.a.createElement(Y.a,Object.assign({},X.c.works,{image:X.c.common.image})),i.a.createElement(Q,{works:this.getFeaturedWorks()}),i.a.createElement(L,{works:this.getWorks(),category:e,setCategory:this.setCategory}))},r}(a.Component);t.default=function(e){var t=e.location;return i.a.createElement(c.a,{location:t},i.a.createElement(o.b,{query:"3034011712",render:function(e){return i.a.createElement(B,{data:e})},data:r}))}},236:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return s}),n.d(t,"d",function(){return y}),n.d(t,"c",function(){return w});var r=n(235);function a(){var e=c(["\n      ","\n    "]);return a=function(){return e},e}function i(){var e=c(["\n      ","\n    "]);return i=function(){return e},e}function o(){var e=c(["\n      ","\n    "]);return o=function(){return e},e}function c(e,t){return t||(t=e.slice(0)),e.raw=t,e}var l={blue900:"#FEFEFE",blue800:"#1e2733",gray500:"#313131",gray700:"#656a73",yellow500:"#541010",yellow700:"#6b6349"},s={sansSerif:"'Roboto', stack-sans, sans-serif",mono:"'Roboto Mono', stack-mono, monospace"},d="5rem",u="3rem",m="2rem",f="22em",p="40em",h="54em",g="78em",b="125em",y={xs:function(){return Object(r.css)(["@media (max-width:","){","}"],f,r.css.apply(void 0,arguments))},sm:function(){return Object(r.css)(["@media (max-width:","){","}"],p,r.css.apply(void 0,arguments))},md:function(){return Object(r.css)(["@media (max-width:","){","}"],h,r.css.apply(void 0,arguments))},lg:function(){return Object(r.css)(["@media (max-width:","){","}"],g,r.css.apply(void 0,arguments))},xl:function(){return Object(r.css)(["@media (max-width:","){","}"],b,r.css.apply(void 0,arguments))},hover:function(){return Object(r.css)(["@media not all and (hover:none){","}"],r.css.apply(void 0,arguments))}},v=function(e,t){return e+": "+t+";"},w=function(e){return Object(r.css)([""," "," "," ",""],v(e,d),y.lg(o(),v(e,u)),y.md(i(),v(e,u)),y.sm(a(),v(e,m)))}},237:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var r=n(0),a=n.n(r),i=n(12),o=n.n(i),c=n(72),l=n.n(c);n.d(t,"a",function(){return l.a});n(239);var s=a.a.createContext({});function d(e){var t=e.staticQueryData,n=e.data,r=e.query,i=e.render,o=n?n.data:t[r]&&t[r].data;return a.a.createElement(a.a.Fragment,null,o&&i(o),!o&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,n=e.query,r=e.render,i=e.children;return a.a.createElement(s.Consumer,null,function(e){return a.a.createElement(d,{data:t,query:n,render:r||i,staticQueryData:e})})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},238:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return i});var r="https://kvz60gz535.execute-api.us-east-1.amazonaws.com/prod/distance",a=!0,i={common:{image:"/images/michele-mazzucco-meta-image.jpg"},index:{title:"Raincode",description:"Michele Mazzucco, interdisciplinary designer based in Brescia, Italy. I focus primarily on building user interfaces that are usable and scalable."},profile:{title:"Raincode | Profile",description:""},works:{title:"Raincode | Works",description:"A selection of the work carried out over 4+ years of work. Among which: Websites, Web applications, Web Scrapers and more."}}},239:function(e,t,n){var r;e.exports=(r=n(245))&&r.default||r},240:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"b",function(){return f}),n.d(t,"c",function(){return p}),n.d(t,"d",function(){return h});var r=n(235),a=n(236);function i(){var e=u(["\n    margin: 2rem auto 0;\n    padding: 0 2rem 6rem;\n  "]);return i=function(){return e},e}function o(){var e=u(["\n    width: 100%;\n    margin: 4rem auto 0;\n    padding: 0 3rem 6rem;\n  "]);return o=function(){return e},e}function c(){var e=u(["\n    margin: 8rem auto 3rem;\n    width: calc(100% - 11rem * 2);\n  "]);return c=function(){return e},e}function l(){var e=u(["\n    margin: 2rem auto 0;\n    padding: 0 2rem 6rem;\n  "]);return l=function(){return e},e}function s(){var e=u(["\n    width: 100%;\n    margin: 4rem auto 0;\n    padding: 0 3rem 6rem;\n  "]);return s=function(){return e},e}function d(){var e=u(["\n    margin: 8rem auto 3rem;\n    width: calc(100% - 11rem * 2);\n  "]);return d=function(){return e},e}function u(e,t){return t||(t=e.slice(0)),e.raw=t,e}var m=r.default.div.withConfig({displayName:"shared__ContentWrapper",componentId:"f4br8p-0"})(["max-width:68rem;width:calc(100% - 9.25rem * 2);margin:11rem auto 5rem;"," "," ",""],a.d.lg(d()),a.d.md(s()),a.d.sm(l())),f=r.default.div.withConfig({displayName:"shared__DifferentContentWrapper",componentId:"f4br8p-1"})(["max-width:68rem;width:calc(100% - 9.25rem * 2);margin:1rem auto 5rem;overflow:hidden;height:fit-content;"," "," ",""],a.d.lg(c()),a.d.md(o()),a.d.sm(i())),p=r.default.li.withConfig({displayName:"shared__ListItem",componentId:"f4br8p-2"})(["font-size:1rem;color:",";padding:.3rem 0;line-height:1.6em;"],a.a.gray500),h=r.default.div.withConfig({displayName:"shared__Loader",componentId:"f4br8p-3"})(["position:absolute;top:0;right:0;bottom:0;left:0;width:100%;background:#1b242f;z-index:2;"," transition:.6s cubic-bezier(.45,0,.07,1) transform,.6s cubic-bezier(.45,0,.07,1) opacity;will-change:transform;"],function(e){return e.isLoaded?Object(r.css)(["transform:scale(1.05);opacity:0;"]):Object(r.css)(["transform:scale(1);opacity:1;"])})},241:function(e,t,n){"use strict";n.d(t,"b",function(){return a});n(38),n(11),n(248);var r=n(238),a=function(){return(new Date).getFullYear()},i=function(e){if(!e.ok)throw Error("Fetching data error");return e};t.a=function(){return r.a?fetch(r.b).then(i).then(function(e){return e.json()}):new Promise(function(e){return e({distance:(t=0,n=50,Math.trunc(Math.random()*(n-t)+t))});var t,n})}},242:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(12),o=n.n(i),c=function(e){var t=e.className,n=e.text;return a.a.createElement("a",{className:t,rel:"noopener",href:"mailto:contact@raincode.org"},n)};c.propTypes={className:o.a.string,text:o.a.string.isRequired},c.defaultProps={className:""},t.a=c},243:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=(n(23),n(50),n(72)),o=n.n(i),c=n(244),l=n.n(c),s=n(235),d=n(236);function u(){var e=f(["\n      width: 1.45rem;\n    "]);return u=function(){return e},e}function m(){var e=f(["\n    position: static;\n    padding: 0;\n  "]);return m=function(){return e},e}function f(e,t){return t||(t=e.slice(0)),e.raw=t,e}var p=s.default.div.withConfig({displayName:"style__Wrapper",componentId:"sc-6c31hn-0"})(["position:fixed;top:0;left:0;max-width:18rem;"," "," > div{position:relative;}a,svg{display:block;}a{width:1.65rem;","}svg{width:100%;height:auto;}.circle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);background:rgba(255,255,255,.05);height:100%;width:100%;border-radius:100%;pointer-events:none;opacity:1;will-change:transform;color:#303030;}a:hover + .circle{opacity:0;transform:translate(-50%,-50%) scale(7.5);transition:transform 1s cubic-bezier(.45,0,.1,1),opacity .8s ease;}"],Object(d.c)("padding"),d.d.md(m()),d.d.lg(u())),h=function(){return a.a.createElement(p,null,a.a.createElement("div",null,a.a.createElement(o.a,{to:"/"},a.a.createElement(l.a,{width:22,height:22})),a.a.createElement("div",{className:"circle"})))},g=n(241);function b(){var e=v(["\n    position: static;\n    transform: rotate(0) translateX(0);\n    transform-origin: 0;\n    padding: .5rem 0 0;\n    text-align: center;\n    font-size: .8rem;\n  "]);return b=function(){return e},e}function y(){var e=v(["\n    position: static;\n    padding-top: 1.5rem;\n  "]);return y=function(){return e},e}function v(e,t){return t||(t=e.slice(0)),e.raw=t,e}var w=s.default.footer.withConfig({displayName:"style__Wrapper",componentId:"knl7ns-0"})(["width:100%;position:fixed;top:50%;",""],d.d.md(y())),E=s.default.div.withConfig({displayName:"style__Item",componentId:"knl7ns-1"})(["position:absolute;font-family:",";color:",";font-size:.85rem;line-height:1em;"," ",""],d.b.mono,d.a.gray500,function(e){return"left"===e.position?Object(s.css)(["transform:rotate(-90deg) translateX(-50%);transform-origin:left;",""],Object(d.c)("left")):Object(s.css)(["transform:rotate(90deg) translateX(50%);transform-origin:right;",""],Object(d.c)("right"))},d.d.md(b())),k=function(){return a.a.createElement(w,null,a.a.createElement(E,{position:"left"},"Made (with 💜) in ",Object(g.b)()),a.a.createElement(E,{position:"right"},a.a.createElement("span",null,"Quality > Quantity")))},x=n(242),_=n(237);function j(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    position: static;\n    padding: 0;\n  "]);return j=function(){return e},e}var C=s.default.nav.withConfig({displayName:"style__Wrapper",componentId:"sc-109x5v3-0"})(["position:fixed;bottom:0;left:0;right:0;width:100%;display:flex;align-items:flex-end;justify-content:space-between;pointer-events:none;",";ul:last-child li{text-align:right;a{transition:color .4s ease;will-change:color;position:relative;&::before{position:absolute;left:-1.1rem;top:50%;background:",";border-radius:100%;content:'';display:block;height:.3rem;width:.3rem;transition:transform .3s cubic-bezier(.45,0,.1,1),opacity .1s ease;will-change:transform,opacity;}&:not(.active)::before{opacity:0;transform:translate(-1rem,-50%);}&:hover{color:#000;&::before{transform:translate(0,-50%);opacity:1;}}}}",""],Object(d.c)("padding"),d.a.yellow500,d.d.md(j())),N=s.default.ul.withConfig({displayName:"style__Nav",componentId:"sc-109x5v3-1"})(["list-style:none;padding:0;margin:0;width:50%;max-width:14rem;"]),z=s.default.li.withConfig({displayName:"style__NavItem",componentId:"sc-109x5v3-2"})(["list-style:none;padding:.5rem 0;line-height:1em;&:last-child{padding-bottom:0;}a{font-size:.9rem;padding:0.3rem;font-family:",";pointer-events:all;transition:color .1s ease;line-height:1em;","}"],d.b.mono,function(e){return e.highlight?Object(s.css)(["color:",";&:hover::before{display:none !important;}"],d.a.yellow500):Object(s.css)(["color:",";"],d.a.gray500)}),O=Object(s.default)(_.a).attrs({activeClassName:"active"}).withConfig({displayName:"style__NavLink",componentId:"sc-109x5v3-3"})(["&.active{color:#FFF;background:#000;&::before{transform:translate(0,-50%);opacity:1;}}"]),I=function(){return a.a.createElement(C,null,a.a.createElement(N,null,a.a.createElement(z,null,a.a.createElement("a",{href:"https://twitter.com/raincoders",rel:"noopener noreferrer",target:"_blank"},"Twitter")),a.a.createElement(z,null,a.a.createElement("a",{href:"https://github.com/raincodeorg",rel:"noopener noreferrer",target:"_blank"},"Github")),a.a.createElement(z,null,a.a.createElement("a",{href:"https://gitlab.com/raincodeorg",rel:"noopener noreferrer",target:"_blank"},"Gitlab"))),a.a.createElement(N,null,a.a.createElement(z,null,a.a.createElement(O,{to:"/"},"Index")),a.a.createElement(z,null,a.a.createElement(O,{to:"/works"},"Works")),a.a.createElement(z,null,a.a.createElement(O,{to:"/profile"},"Profile")),a.a.createElement(z,{highlight:!0},a.a.createElement(x.a,{text:"Contact"}))))};function W(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    display: flex;\n  "]);return W=function(){return e},e}var L=s.default.div.withConfig({displayName:"style__Wrapper",componentId:"st8qcn-0"})(["display:none;height:15px;width:1.75rem;flex-direction:column;justify-content:space-between;align-items:flex-end;backface-visibility:hidden;transition:transform .45s cubic-bezier(.45,0,.07,1);will-change:transform;span{display:inline-block;height:1px;background:#fff;}"," ",""],function(e){return e.open?Object(s.css)(["transform:rotate(90deg);align-items:center;span{&:nth-child(1),&:nth-child(3){width:60%;}&:nth-child(2){width:100%;}}"]):Object(s.css)(["transform:rotate(0);span{&:nth-child(1){width:100%;}&:nth-child(2){width:60%;}&:nth-child(3){width:80%;}}"])},d.d.md(W())),M=function(e){return a.a.createElement(L,e,a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null))};function S(){var e=T(["\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    width: 100%;\n    min-height: 7rem;\n    background-image: linear-gradient(to bottom,rgba(30,39,51,0.0) 0%,rgba(30,39,51, 0.3) 50%);\n    ",";\n  "]);return S=function(){return e},e}function R(){var e=T(["\n    > div {\n      padding: 0 2rem 2rem;\n    }\n\n    nav {\n      padding: 1rem;\n    }\n  "]);return R=function(){return e},e}function q(){var e=T(["\n    background: ",";\n    overflow: hidden;\n    transition: max-height .6s cubic-bezier(0.45, 0, .1, 1);\n    will-change: max-height;\n    ","\n    \n    > div {\n      padding: 0 3rem 3rem;\n    }\n  "]);return q=function(){return e},e}function F(){var e=T(["\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    z-index: 10;\n  "]);return F=function(){return e},e}function T(e,t){return t||(t=e.slice(0)),e.raw=t,e}var D=s.default.div.withConfig({displayName:"style__Wrapper",componentId:"utaa07-0"})(["",""],d.d.md(F())),P=s.default.div.withConfig({displayName:"style__Shoable",componentId:"utaa07-1"})([""," ",""],d.d.md(q(),d.a.blue900,function(e){return e.open?Object(s.css)(["max-height:200px;"]):Object(s.css)(["max-height:0;"])}),d.d.sm(R())),A=s.default.header.withConfig({displayName:"style__Header",componentId:"utaa07-2"})(["",""],d.d.md(S(),Object(d.c)("padding")));var Q=function(e){var t,n;function r(){var t;return(t=e.call(this)||this).state={open:!1},t.toggleMenu=t.toggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.toggleMenu=function(){this.setState({open:!this.state.open})},i.componentDidUpdate=function(e){this.props.location.pathname!==e.location.pathname&&this.setState({open:!1})},i.render=function(){var e=this.state.open;return a.a.createElement(D,null,a.a.createElement(A,null,a.a.createElement(h,null),a.a.createElement(M,{open:e,onClick:this.toggleMenu})),a.a.createElement(P,{open:e},a.a.createElement("div",null,a.a.createElement(I,null),a.a.createElement(k,null))))},r}(r.Component),Y=n(249),X=n.n(Y);function B(){var e=G(["\n      font-size: 14px;\n    "]);return B=function(){return e},e}function H(){var e=G(["\n  ",'\n\n  @font-face {\n    font-family: stack-mono;\n    src: local(".SFNSText-Light");\n  }\n\n  @font-face {\n    font-family: stack-sans;\n    src: local(".SFNSText-Light");\n  }\n\n  html, body {\n    height: 100%;\n    font-size: 16px;\n    ',"\n  }\n\n  body {\n    background: ",";\n    color: #000;\n    font-family: ",";\n    backface-visibility: hidden;\n    overflow-y: scroll;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-weight: 300;\n    line-height: inherit;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n    transition: color ease-in .2s;\n    \n    &:hover {\n      color: #000;\n    }\n  }\n\n  * {\n    box-sizing: border-box;\n    line-height: 1.4em;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-kerning: auto;\n  }\n\n  ::selection {\n    color: ",";\n    background: transparent;\n  }\n"]);return H=function(){return e},e}function G(e,t){return t||(t=e.slice(0)),e.raw=t,e}var U=Object(s.createGlobalStyle)(H(),X.a,d.d.xl(B()),d.a.blue900,d.b.sansSerif,d.a.yellow500);t.a=function(e){var t=e.children,n=e.location;return a.a.createElement("main",null,a.a.createElement(U,null),t,a.a.createElement(Q,{location:n}))}},244:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,r.createElement("path",{fill:"currentColor",d:"M368 32h-56a16 16 0 0 0-16 16v48h-48V48a16 16 0 0 0-16-16h-80a16 16 0 0 0-16 16v48H88.1V48a16 16 0 0 0-16-16H16A16 16 0 0 0 0 48v176l64 32c0 48.33-1.54 95-13.21 160h282.42C321.54 351 320 303.72 320 256l64-32V48a16 16 0 0 0-16-16zM224 320h-64v-64a32 32 0 0 1 64 0zm144 128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z",className:"",height:"22",width:"22"}))}a.defaultProps={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chess-rook",role:"img",viewBox:"0 0 384 512",className:"svg-inline--fa fa-chess-rook fa-w-12 fa-3x"},e.exports=a,a.default=a},245:function(e,t,n){"use strict";n.r(t);n(24);var r=n(0),a=n.n(r),i=n(12),o=n.n(i),c=n(103),l=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},246:function(e,t,n){"use strict";n(23),n(35);var r=n(0),a=n.n(r),i=n(12);var o=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={isLoaded:!1},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.renderSource=function(e,t){var n=e.media,r=e.srcset;return n?a.a.createElement("source",{key:t,media:"("+n+")",srcSet:r.join(", ")}):a.a.createElement("source",{key:t,srcSet:r.join(", ")})},i.setLoaded=function(){this.setState({isLoaded:!0})},i.render=function(){var e=this,t=this.props,n=t.src,r=t.alt,i=t.sources,o=t.className,c=t.loader,l=this.state.isLoaded;return a.a.createElement("picture",{className:o},c&&c({isLoaded:l}),i&&i.map(this.renderSource),a.a.createElement("img",{onLoad:function(){return e.setLoaded()},src:n,alt:r}))},r}(r.Component);o.propTypes={src:i.string.isRequired,alt:i.string,sources:Object(i.arrayOf)(Object(i.shape)({media:i.string,srcset:Object(i.arrayOf)(i.string).isRequired})),className:i.string,loader:i.func.isRequired},o.defaultProps={alt:"",sources:{media:null},className:null},t.a=o},247:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(252),o=n.n(i);t.a=function(e){var t=e.title,n=e.description,r=e.image;return a.a.createElement(o.a,null,a.a.createElement("html",{lang:"en",amp:!0}),a.a.createElement("title",null,t),a.a.createElement("meta",{name:"description",content:n}),a.a.createElement("meta",{property:"og:title",content:t}),a.a.createElement("meta",{property:"og:description",content:n}),a.a.createElement("meta",{property:"og:image",content:r}),a.a.createElement("meta",{name:"twitter:title",content:t}),a.a.createElement("meta",{name:"twitter:description",content:n}),a.a.createElement("meta",{name:"twitter:image",content:r}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"google-site-verification",content:"w6QODQIo6PYp7OLUH3RI1ULc4NKzA0lt7tzXEeKJzjM"}))}},278:function(e){e.exports={data:{works:{edges:[{work:{title:"Inconvenience is Regretted",category:["design","code"],collaborators:null,client:"Public",year:"2019",url:"/",featured:!0,image:{src:"/images/works/inconvenience is regretted/inconvenience is regretted.png",sources:[{media:"max-width: 40rem",srcset:["/images/works/inconvenience is regretted/inconvenience is regretted.png","/images/works/inconvenience is regretted/inconvenience is regretted.png","/images/works/inconvenience is regretted/inconvenience is regretted.png"]},{media:null,srcset:["/images/works/inconvenience is regretted/inconvenience is regretted.png","/images/works/inconvenience is regretted/inconvenience is regretted.png","/images/works/inconvenience is regretted/inconvenience is regretted.png"]}]}}},{work:{title:"Growser",category:["code"],collaborators:[""],client:"@taggosaurus",year:"2019",url:null,featured:!1,image:null}}]}}}},280:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,r.createElement("g",{id:"profile",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",transform:"translate(-294.000000, -118.000000)"},r.createElement("g",{id:"divider",transform:"translate(295.000000, 118.000000)",stroke:"#384653"},[r.createElement("polyline",{id:"Triangle",points:"0 5 4.5 0 4.5 0 9 5",key:0}),r.createElement("polyline",{id:"Triangle-Copy",points:"9 5 13.5 0 13.5 0 18 5",key:1}),r.createElement("polyline",{id:"Triangle-Copy-2",points:"18 5 22.5 0 22.5 0 27 5",key:2}),r.createElement("polyline",{id:"Triangle-Copy-3",points:"27 5 31.5 0 31.5 0 36 5",key:3})])))}a.defaultProps={width:"38",height:"5",viewBox:"0 0 38 5",version:"1.1"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=component---src-pages-works-js-63e962ffde5800089975.js.map