(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"6gGU":function(e,t,r){"use strict";r("RUBk");var a=r("q1tI"),i=r.n(a),n=r("Wbzz"),s=r("j+iq");t.a=function(e){var t=e.data,r=e.title,a=e.images,o=void 0===a?[]:a,l=e.files,d=void 0===l?[]:l,u=new Set(["Document","Folder","News Item","Event","Collection","File"]),c=d.reduce((function(e,t){return e[t._path]=t,e}),{});return i.a.createElement("nav",{key:t._id},i.a.createElement("h1",null,r||t.title),i.a.createElement("p",null,i.a.createElement("strong",null,t.description)),t.text?i.a.createElement(s.a,{serialized:t.text.react,images:o,files:d}):null,i.a.createElement("ul",{className:"list-group"},t.items.filter((function(e){return u.has(e._type)&&"/index/"!==e._path})).map((function(e){return i.a.createElement("li",{key:e._path,className:"list-group-item"},i.a.createElement("p",null,c[e._path]?i.a.createElement("a",{href:c[e._path].file.publicURL,download:c[e._path].file.filename},e.title):i.a.createElement(n.a,{to:e._path},e.title)),e.description?i.a.createElement("p",null,e.description):null)}))))}},"9W2G":function(e,t,r){"use strict";var a=r("q1tI"),i=r.n(a),n=r("j+iq");t.a=function(e){var t=e.data,r=e.images,a=void 0===r?[]:r,s=e.files,o=void 0===s?[]:s;return i.a.createElement("article",{key:t._id},i.a.createElement("h1",null,t.title),t.description?i.a.createElement("p",null,i.a.createElement("strong",null,t.description)):null,t.text?i.a.createElement(n.a,{serialized:t.text.react,images:a,files:o}):null)}},"9eSz":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.default=void 0;var i,n=a(r("PJYZ")),s=a(r("VbXa")),o=a(r("8OQS")),l=a(r("pVnL")),d=a(r("q1tI")),u=a(r("17x9")),c=function(e){var t=(0,l.default)({},e),r=t.resolutions,a=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,a=g(t||r||[]);return a&&a.src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),h=function(e){var t=c(e),r=p(t);return m[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},a&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:n}),r&&d.default.createElement("source",{media:i,srcSet:r,sizes:n}))}))}function E(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function L(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function R(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function O(e,t){var r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+d+s+o+r+a+t+n+i+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=d.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(k,(0,l.default)({ref:t,src:r},n,{ariaHidden:s}));return a.length>1?d.default.createElement("picture",null,i(a),o):o})),k=d.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:r,srcSet:a,src:i},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var V=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&h(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&v&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||y&&(b||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=d.default.createRef(),r.placeholderRef=t.placeholderRef||d.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,n.default)(r)),r.handleRef=r.handleRef.bind((0,n.default)(r)),r}(0,s.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=c(e),(r=p(t))&&(m[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=c(this.props),t=e.title,r=e.alt,a=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,E=e.loading,O=e.draggable,I=m||h;if(!I)return null;var V=!1===this.state.fadeIn||this.state.imgLoaded,_=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,l.default)({opacity:V?1:0,transition:_?"opacity "+y+"ms":"none"},o),C="boolean"==typeof b?"lightgray":b,H={transitionDelay:y+"ms"},P=(0,l.default)({opacity:this.state.imgLoaded?0:1},_&&H,o,f),q={title:t,alt:this.state.isVisible?"":r,style:P,className:p,itemProp:S},T=this.state.isHydrated?g(I):I[0];if(m)return d.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),C&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},_&&H)}),T.base64&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:q,imageVariants:I,generateSources:R}),T.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:q,imageVariants:I,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,w(I),d.default.createElement(k,{alt:r,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,l.default)({alt:r,title:t,loading:E},T,{imageVariants:I}))}}));if(h){var W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete W.display,d.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},C&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},_&&H)}),T.base64&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:q,imageVariants:I,generateSources:R}),T.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:q,imageVariants:I,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,w(I),d.default.createElement(k,{alt:r,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,l.default)({alt:r,title:t,loading:E},T,{imageVariants:I}))}}))}return null},t}(d.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var _=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),j=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function C(e){return function(t,r,a){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[r]=e,i),t,"prop",a)}}V.propTypes={resolutions:_,sizes:j,fixed:C(u.default.oneOfType([_,u.default.arrayOf(_)])),fluid:C(u.default.oneOfType([j,u.default.arrayOf(j)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var H=V;t.default=H},WwRA:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.serialize=function(e){return JSON.stringify(e,(function(e,t){switch(e){case"_owner":case"_store":case"ref":case"key":return;default:return t}}))},t.deserialize=function(e,t){"string"==typeof e&&(e=JSON.parse(e));if(e instanceof Object)return function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,s=r.components,l=void 0===s?{}:s,d=r.reviver;if("object"!==o(t))return t;if(null===t)return t;if(t instanceof Array)return t.map((function(t,a){return e(t,r,a)}));var u=t.type,c=t.props;if("string"!=typeof u)throw new Error("Deserialization error: element type must be string");u=l[u]||u.toLowerCase(),c.children&&(c=n({},c,{children:e(c.children,r)}));if(d){var f=d(u,c,a,l);u=f.type,c=f.props,a=f.key,l=f.components}return i.default.createElement(u,n({},c,{key:a}))}(e,t);throw new Error("Deserialization error: incorrect data type")};var a,i=(a=r("q1tI"))&&a.__esModule?a:{default:a};function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){s(e,t,r[t])}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}},"j+iq":function(e,t,r){"use strict";r("RUBk");var a=r("q1tI"),i=r.n(a),n=r("Wbzz"),s=r("9eSz"),o=r.n(s),l=r("WwRA"),d=function(e){return function(t){var r=e.reduce((function(e,t){return e.set(t._path,t)}),new Map);return r.get(t.src)?i.a.createElement(o.a,{Tag:"span",resolutions:r.get(t.src).image.childImageSharp.fixed}):i.a.createElement("img",{src:t.src,alt:t.alt,title:t.title})}},u=function(e){return function(t){var r=e.reduce((function(e,t){return e.set(t._path,t)}),new Map);return r.get(t.to)?i.a.createElement("a",{href:r.get(t.to).file.publicURL,download:r.get(t.to).file.filename},t.children):i.a.createElement(n.a,{to:t.to},t.children)}};t.a=function(e){var t=e.serialized,r=e.images,a=e.files;return i.a.createElement("div",null,Object(l.deserialize)(t,{components:{Link:u(a),Img:d(r)}}))}}}]);
//# sourceMappingURL=5800908c9f7ad5a8997e28151b2cef135859d7db-f1b60ac69a076bbe6e07.js.map