(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{231:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(235),i=t(72),c=t.n(i),l=t(243),s=t(236);function u(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n    top: 45%;\n  "]);return u=function(){return e},e}var d=o.default.h1.withConfig({displayName:"sc-404__Title",componentId:"sc-1c4g35t-0"})(["font-size:2.2rem;margin-bottom:1.5rem;text-align:center;"]),f=o.default.h1.withConfig({displayName:"sc-404__Subtitle",componentId:"sc-1c4g35t-1"})(["text-align:center;font-size:1.1rem;font-family:",";color:",";margin:1rem 0;span{color:",";}"],s.b.mono,s.a.gray500,s.a.yellow500),m=o.default.section.withConfig({displayName:"sc-404__Wrapper",componentId:"sc-1c4g35t-2"})(["position:absolute;top:50%;left:0;right:0;transform:translateY(-50%);text-align:center;",""],s.d.sm(u())),p=Object(o.default)(c.a).withConfig({displayName:"sc-404__BackToHome",componentId:"sc-1c4g35t-3"})(["color:",";font-family:",";font-size:.9rem;border-bottom:1px dotted ",";padding:0 0 .1rem;display:inline-block;&:hover{color:",";}"],s.a.yellow500,s.b.mono,s.a.yellow500,s.a.yellow500);n.default=function(e){var n=e.location;return r.a.createElement(l.a,{location:n},r.a.createElement(m,null,r.a.createElement("header",null,r.a.createElement(d,null,"Oops, sorry!"),r.a.createElement(f,null,"This page cannot be found."),r.a.createElement(p,{to:"/"},"Go to index"))))}},236:function(e,n,t){"use strict";t.d(n,"a",function(){return l}),t.d(n,"b",function(){return s}),t.d(n,"d",function(){return v}),t.d(n,"c",function(){return w});var a=t(235);function r(){var e=c(["\n      ","\n    "]);return r=function(){return e},e}function o(){var e=c(["\n      ","\n    "]);return o=function(){return e},e}function i(){var e=c(["\n      ","\n    "]);return i=function(){return e},e}function c(e,n){return n||(n=e.slice(0)),e.raw=n,e}var l={blue900:"#FEFEFE",blue800:"#1e2733",gray500:"#313131",gray700:"#656a73",yellow500:"#541010",yellow700:"#6b6349"},s={sansSerif:"'Roboto', stack-sans, sans-serif",mono:"'Roboto Mono', stack-mono, monospace"},u="5rem",d="3rem",f="2rem",m="22em",p="40em",h="54em",g="78em",b="125em",v={xs:function(){return Object(a.css)(["@media (max-width:","){","}"],m,a.css.apply(void 0,arguments))},sm:function(){return Object(a.css)(["@media (max-width:","){","}"],p,a.css.apply(void 0,arguments))},md:function(){return Object(a.css)(["@media (max-width:","){","}"],h,a.css.apply(void 0,arguments))},lg:function(){return Object(a.css)(["@media (max-width:","){","}"],g,a.css.apply(void 0,arguments))},xl:function(){return Object(a.css)(["@media (max-width:","){","}"],b,a.css.apply(void 0,arguments))},hover:function(){return Object(a.css)(["@media not all and (hover:none){","}"],a.css.apply(void 0,arguments))}},y=function(e,n){return e+": "+n+";"},w=function(e){return Object(a.css)([""," "," "," ",""],y(e,u),v.lg(i(),y(e,d)),v.md(o(),y(e,d)),v.sm(r(),y(e,f)))}},237:function(e,n,t){"use strict";t.d(n,"b",function(){return d});var a=t(0),r=t.n(a),o=t(12),i=t.n(o),c=t(72),l=t.n(c);t.d(n,"a",function(){return l.a});t(239);var s=r.a.createContext({});function u(e){var n=e.staticQueryData,t=e.data,a=e.query,o=e.render,i=t?t.data:n[a]&&n[a].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var n=e.data,t=e.query,a=e.render,o=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(u,{data:n,query:t,render:a||o,staticQueryData:e})})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},238:function(e,n,t){"use strict";t.d(n,"b",function(){return a}),t.d(n,"a",function(){return r}),t.d(n,"c",function(){return o});var a="https://kvz60gz535.execute-api.us-east-1.amazonaws.com/prod/distance",r=!0,o={common:{image:"/images/logo.svg"},index:{title:"Raincode",description:"A team of uniquely talented developers and designers spread all over the world."},profile:{title:"Raincode | Profile",description:""},works:{title:"Raincode | Works",description:"A selection of the work carried out over 4+ years of work. Among which: Websites, Web applications, Web Scrapers and more."}}},239:function(e,n,t){var a;e.exports=(a=t(245))&&a.default||a},241:function(e,n,t){"use strict";t.d(n,"b",function(){return r});t(38),t(11),t(248);var a=t(238),r=function(){return(new Date).getFullYear()},o=function(e){if(!e.ok)throw Error("Fetching data error");return e};n.a=function(){return a.a?fetch(a.b).then(o).then(function(e){return e.json()}):new Promise(function(e){return e({distance:(n=0,t=50,Math.trunc(Math.random()*(t-n)+n))});var n,t})}},242:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(12),i=t.n(o),c=function(e){var n=e.className,t=e.text;return r.a.createElement("a",{className:n,rel:"noopener",href:"mailto:contact@raincode.org"},t)};c.propTypes={className:i.a.string,text:i.a.string.isRequired},c.defaultProps={className:""},n.a=c},243:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=(t(23),t(50),t(72)),i=t.n(o),c=t(244),l=t.n(c),s=t(235),u=t(236);function d(){var e=m(["\n      width: 1.45rem;\n    "]);return d=function(){return e},e}function f(){var e=m(["\n    position: static;\n    padding: 0;\n  "]);return f=function(){return e},e}function m(e,n){return n||(n=e.slice(0)),e.raw=n,e}var p=s.default.div.withConfig({displayName:"style__Wrapper",componentId:"sc-6c31hn-0"})(["position:fixed;top:0;left:0;max-width:18rem;"," "," > div{position:relative;}a,svg{display:block;}a{width:1.65rem;","}svg{width:100%;height:auto;}.circle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);background:rgba(255,255,255,.05);height:100%;width:100%;border-radius:100%;pointer-events:none;opacity:1;will-change:transform;color:#303030;}a:hover + .circle{opacity:0;transform:translate(-50%,-50%) scale(7.5);transition:transform 1s cubic-bezier(.45,0,.1,1),opacity .8s ease;}"],Object(u.c)("padding"),u.d.md(f()),u.d.lg(d())),h=function(){return r.a.createElement(p,null,r.a.createElement("div",null,r.a.createElement(i.a,{to:"/"},r.a.createElement(l.a,{width:22,height:22})),r.a.createElement("div",{className:"circle"})))},g=t(241);function b(){var e=y(["\n    position: static;\n    transform: rotate(0) translateX(0);\n    transform-origin: 0;\n    padding: .5rem 0 0;\n    text-align: center;\n    font-size: .8rem;\n  "]);return b=function(){return e},e}function v(){var e=y(["\n    position: static;\n    padding-top: 1.5rem;\n  "]);return v=function(){return e},e}function y(e,n){return n||(n=e.slice(0)),e.raw=n,e}var w=s.default.footer.withConfig({displayName:"style__Wrapper",componentId:"knl7ns-0"})(["width:100%;position:fixed;top:50%;",""],u.d.md(v())),x=s.default.div.withConfig({displayName:"style__Item",componentId:"knl7ns-1"})(["position:absolute;font-family:",";color:",";font-size:.85rem;line-height:1em;"," ",""],u.b.mono,u.a.gray500,function(e){return"left"===e.position?Object(s.css)(["transform:rotate(-90deg) translateX(-50%);transform-origin:left;",""],Object(u.c)("left")):Object(s.css)(["transform:rotate(90deg) translateX(50%);transform-origin:right;",""],Object(u.c)("right"))},u.d.md(b())),E=function(){return r.a.createElement(w,null,r.a.createElement(x,{position:"left"},"Made (with 💜) in ",Object(g.b)()),r.a.createElement(x,{position:"right"},r.a.createElement("span",null,"Quality > Quantity")))},k=t(242),_=t(237);function j(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n    position: static;\n    padding: 0;\n  "]);return j=function(){return e},e}var N=s.default.nav.withConfig({displayName:"style__Wrapper",componentId:"sc-109x5v3-0"})(["position:fixed;bottom:0;left:0;right:0;width:100%;display:flex;align-items:flex-end;justify-content:space-between;pointer-events:none;",";ul:last-child li{text-align:right;a{transition:color .4s ease;will-change:color;position:relative;&::before{position:absolute;left:-1.1rem;top:50%;background:",";border-radius:100%;content:'';display:block;height:.3rem;width:.3rem;transition:transform .3s cubic-bezier(.45,0,.1,1),opacity .1s ease;will-change:transform,opacity;}&:not(.active)::before{opacity:0;transform:translate(-1rem,-50%);}&:hover{color:#000;&::before{transform:translate(0,-50%);opacity:1;}}}}",""],Object(u.c)("padding"),u.a.yellow500,u.d.md(j())),O=s.default.ul.withConfig({displayName:"style__Nav",componentId:"sc-109x5v3-1"})(["list-style:none;padding:0;margin:0;width:50%;max-width:14rem;"]),C=s.default.li.withConfig({displayName:"style__NavItem",componentId:"sc-109x5v3-2"})(["list-style:none;padding:.5rem 0;line-height:1em;&:last-child{padding-bottom:0;}a{font-size:.9rem;padding:0.3rem;font-family:",";pointer-events:all;transition:color .1s ease;line-height:1em;","}"],u.b.mono,function(e){return e.highlight?Object(s.css)(["color:",";&:hover::before{display:none !important;}"],u.a.yellow500):Object(s.css)(["color:",";"],u.a.gray500)}),z=Object(s.default)(_.a).attrs({activeClassName:"active"}).withConfig({displayName:"style__NavLink",componentId:"sc-109x5v3-3"})(["&.active{color:#FFF;background:#000;&::before{transform:translate(0,-50%);opacity:1;}}"]),I=function(){return r.a.createElement(N,null,r.a.createElement(O,null,r.a.createElement(C,null,r.a.createElement("a",{href:"https://twitter.com/raincoders",rel:"noopener noreferrer",target:"_blank"},"Twitter")),r.a.createElement(C,null,r.a.createElement("a",{href:"https://github.com/raincodeorg",rel:"noopener noreferrer",target:"_blank"},"Github")),r.a.createElement(C,null,r.a.createElement("a",{href:"https://gitlab.com/raincodeorg",rel:"noopener noreferrer",target:"_blank"},"Gitlab"))),r.a.createElement(O,null,r.a.createElement(C,null,r.a.createElement(z,{to:"/"},"Index")),r.a.createElement(C,null,r.a.createElement(z,{to:"/works"},"Works")),r.a.createElement(C,null,r.a.createElement(z,{to:"/profile"},"Profile")),r.a.createElement(C,{highlight:!0},r.a.createElement(k.a,{text:"Contact"}))))};function S(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n    display: flex;\n  "]);return S=function(){return e},e}var R=s.default.div.withConfig({displayName:"style__Wrapper",componentId:"st8qcn-0"})(["display:none;height:15px;width:1.75rem;flex-direction:column;justify-content:space-between;align-items:flex-end;backface-visibility:hidden;transition:transform .45s cubic-bezier(.45,0,.07,1);will-change:transform;span{display:inline-block;height:1px;background:#fff;}"," ",""],function(e){return e.open?Object(s.css)(["transform:rotate(90deg);align-items:center;span{&:nth-child(1),&:nth-child(3){width:60%;}&:nth-child(2){width:100%;}}"]):Object(s.css)(["transform:rotate(0);span{&:nth-child(1){width:100%;}&:nth-child(2){width:60%;}&:nth-child(3){width:80%;}}"])},u.d.md(S())),F=function(e){return r.a.createElement(R,e,r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))};function W(){var e=H(["\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    width: 100%;\n    min-height: 7rem;\n    background-image: linear-gradient(to bottom,rgba(30,39,51,0.0) 0%,rgba(30,39,51, 0.3) 50%);\n    ",";\n  "]);return W=function(){return e},e}function q(){var e=H(["\n    > div {\n      padding: 0 2rem 2rem;\n    }\n\n    nav {\n      padding: 1rem;\n    }\n  "]);return q=function(){return e},e}function M(){var e=H(["\n    background: ",";\n    overflow: hidden;\n    transition: max-height .6s cubic-bezier(0.45, 0, .1, 1);\n    will-change: max-height;\n    ","\n    \n    > div {\n      padding: 0 3rem 3rem;\n    }\n  "]);return M=function(){return e},e}function T(){var e=H(["\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    z-index: 10;\n  "]);return T=function(){return e},e}function H(e,n){return n||(n=e.slice(0)),e.raw=n,e}var L=s.default.div.withConfig({displayName:"style__Wrapper",componentId:"utaa07-0"})(["",""],u.d.md(T())),P=s.default.div.withConfig({displayName:"style__Shoable",componentId:"utaa07-1"})([""," ",""],u.d.md(M(),u.a.blue900,function(e){return e.open?Object(s.css)(["max-height:200px;"]):Object(s.css)(["max-height:0;"])}),u.d.sm(q())),Q=s.default.header.withConfig({displayName:"style__Header",componentId:"utaa07-2"})(["",""],u.d.md(W(),Object(u.c)("padding")));var A=function(e){var n,t;function a(){var n;return(n=e.call(this)||this).state={open:!1},n.toggleMenu=n.toggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var o=a.prototype;return o.toggleMenu=function(){this.setState({open:!this.state.open})},o.componentDidUpdate=function(e){this.props.location.pathname!==e.location.pathname&&this.setState({open:!1})},o.render=function(){var e=this.state.open;return r.a.createElement(L,null,r.a.createElement(Q,null,r.a.createElement(h,null),r.a.createElement(F,{open:e,onClick:this.toggleMenu})),r.a.createElement(P,{open:e},r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement(E,null))))},a}(a.Component),D=t(249),G=t.n(D);function V(){var e=B(["\n      font-size: 14px;\n    "]);return V=function(){return e},e}function X(){var e=B(["\n  ",'\n\n  @font-face {\n    font-family: stack-mono;\n    src: local(".SFNSText-Light");\n  }\n\n  @font-face {\n    font-family: stack-sans;\n    src: local(".SFNSText-Light");\n  }\n\n  html, body {\n    height: 100%;\n    font-size: 16px;\n    ',"\n  }\n\n  body {\n    background: ",";\n    color: #000;\n    font-family: ",";\n    backface-visibility: hidden;\n    overflow-y: scroll;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-weight: 300;\n    line-height: inherit;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n    transition: color ease-in .2s;\n    \n    &:hover {\n      color: #000;\n    }\n  }\n\n  * {\n    box-sizing: border-box;\n    line-height: 1.4em;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-kerning: auto;\n  }\n\n  ::selection {\n    color: ",";\n    background: transparent;\n  }\n"]);return X=function(){return e},e}function B(e,n){return n||(n=e.slice(0)),e.raw=n,e}var J=Object(s.createGlobalStyle)(X(),G.a,u.d.xl(V()),u.a.blue900,u.b.sansSerif,u.a.yellow500);n.a=function(e){var n=e.children,t=e.location;return r.a.createElement("main",null,r.a.createElement(J,null),n,r.a.createElement(A,{location:t}))}},244:function(e,n,t){var a=t(0);function r(e){return a.createElement("svg",e,a.createElement("path",{fill:"currentColor",d:"M368 32h-56a16 16 0 0 0-16 16v48h-48V48a16 16 0 0 0-16-16h-80a16 16 0 0 0-16 16v48H88.1V48a16 16 0 0 0-16-16H16A16 16 0 0 0 0 48v176l64 32c0 48.33-1.54 95-13.21 160h282.42C321.54 351 320 303.72 320 256l64-32V48a16 16 0 0 0-16-16zM224 320h-64v-64a32 32 0 0 1 64 0zm144 128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z",className:"",height:"22",width:"22"}))}r.defaultProps={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chess-rook",role:"img",viewBox:"0 0 384 512",className:"svg-inline--fa fa-chess-rook fa-w-12 fa-3x"},e.exports=r,r.default=r},245:function(e,n,t){"use strict";t.r(n);t(24);var a=t(0),r=t.n(a),o=t(12),i=t.n(o),c=t(103),l=function(e){var n=e.location,t=e.pageResources;return t?r.a.createElement(c.a,Object.assign({location:n,pageResources:t},t.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=l}}]);
//# sourceMappingURL=component---src-pages-404-js-95fc8c5baa303085f1c5.js.map