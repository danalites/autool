"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[9033],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return v}});var i=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=i.createContext({}),l=function(e){var r=i.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return i.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},m=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),m=n,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return t?i.createElement(v,s(s({ref:r},u),{},{components:t})):i.createElement(v,s({ref:r},u))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=m;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[p]="string"==typeof e?e:n,s[1]=a;for(var l=2;l<o;l++)s[l]=t[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7763:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var i=t(7462),n=t(3366),o=(t(7294),t(3905)),s=["components"],a={id:"intro-premium-services",title:"Premium Services",sidebar_label:"Premium Services"},c=void 0,l={unversionedId:"intro-premium-services",id:"intro-premium-services",title:"Premium Services",description:"We provide a set of cloud services for our premium members. You can access these services through REST APIs inside your AuTool scripts.",source:"@site/docs/intro-premium-services.md",sourceDirName:".",slug:"/intro-premium-services",permalink:"/autool/docs/intro-premium-services",draft:!1,tags:[],version:"current",frontMatter:{id:"intro-premium-services",title:"Premium Services",sidebar_label:"Premium Services"},sidebar:"docs",previous:{title:"Membership",permalink:"/autool/docs/pricing"},next:{title:"MacOS-Display",permalink:"/autool/docs/basics/apps-macos-display"}},u={},p=[{value:"AI service",id:"ai-service",level:2},{value:"LLM: ChatGPT Pro",id:"llm-chatgpt-pro",level:3},{value:"AIGC: Stable Diffusion",id:"aigc-stable-diffusion",level:3},{value:"Text Recognition: Paddle OCR",id:"text-recognition-paddle-ocr",level:3},{value:"Text parsing: Duckling",id:"text-parsing-duckling",level:3},{value:"Image matching: SuperGlue",id:"image-matching-superglue",level:3},{value:"Web Service",id:"web-service",level:2},{value:"Cloud Task Runner",id:"cloud-task-runner",level:3},{value:"VPN Service",id:"vpn-service",level:3},{value:"Monitor Service",id:"monitor-service",level:3},{value:"Others",id:"others",level:2},{value:"Developer support",id:"developer-support",level:3}],d={toc:p},m="wrapper";function v(e){var r=e.components,t=(0,n.Z)(e,s);return(0,o.kt)(m,(0,i.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We provide a set of cloud services for our premium members. You can access these services through REST APIs inside your AuTool scripts. "),(0,o.kt)("h2",{id:"ai-service"},"AI service"),(0,o.kt)("h3",{id:"llm-chatgpt-pro"},"LLM: ChatGPT Pro"),(0,o.kt)("h3",{id:"aigc-stable-diffusion"},"AIGC: Stable Diffusion"),(0,o.kt)("h3",{id:"text-recognition-paddle-ocr"},"Text Recognition: Paddle OCR"),(0,o.kt)("p",null,"PaddleOCR is state-of-the-art OCR toolkits based on PaddlePaddle. The OCR"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"task: ocr-from-screen-shoot\nactions: \n  # Take a screenshot of the screen\n  - key.press(Ctrl+Shift+4)\n\n  # Wait for the screenshot to be saved\n  - window.ocr($env[CLIPBOARD]) => $env[CLIPBOARD]\n  \n")),(0,o.kt)("h3",{id:"text-parsing-duckling"},"Text parsing: Duckling"),(0,o.kt)("h3",{id:"image-matching-superglue"},"Image matching: SuperGlue"),(0,o.kt)("h2",{id:"web-service"},"Web Service"),(0,o.kt)("h3",{id:"cloud-task-runner"},"Cloud Task Runner"),(0,o.kt)("p",null,"We provide a cloud task runner service for our members. You can use the service to run AuTool scripts in the cloud. The service is free for the first 1000 tasks. After that, you will be charged $0.01 per task."),(0,o.kt)("h3",{id:"vpn-service"},"VPN Service"),(0,o.kt)("p",null,"We provide a VPN service for our members. You can use the VPN to bypass the geo-restriction of a website."),(0,o.kt)("h3",{id:"monitor-service"},"Monitor Service"),(0,o.kt)("p",null,"We provide a discount monitoring service for our members. You can use the service to monitor the price of a product on a website. The service will notify you when the price of the product drops below a certain threshold."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Amazon US discount monitor"),(0,o.kt)("li",{parentName:"ul"},"Genshin Impact promo code monitor"),(0,o.kt)("li",{parentName:"ul"},"Email tracking monitor")),(0,o.kt)("h2",{id:"others"},"Others"),(0,o.kt)("h3",{id:"developer-support"},"Developer support"),(0,o.kt)("p",null,"We will design and ship custom AuTool scripts to fit your particular needs. Professional support is available for all our members. We will help you with the installation, configuration, and integration of the AuTool script into your project."))}v.isMDXComponent=!0}}]);