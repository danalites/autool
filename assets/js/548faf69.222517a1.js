"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[4422],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1854:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={id:"example-class",title:"Example Class"},l=void 0,c={unversionedId:"basics/example-class",id:"basics/example-class",title:"Example Class",description:"docs-source",source:"@site/docs/basics/example-class.md",sourceDirName:"basics",slug:"/basics/example-class",permalink:"/autool/docs/basics/example-class",draft:!1,tags:[],version:"current",frontMatter:{id:"example-class",title:"Example Class"},sidebar:"docs",previous:{title:"Autowiring",permalink:"/autool/docs/basics/autowiring"},next:{title:"Assets Manifest",permalink:"/autool/docs/basics/manifest"}},u={},p=[],f={toc:p},m="wrapper";function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)(m,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,o.kt)("p",null,"As you've already seen in the chapter, we have many finished features prepared for you. However, we want to make things even easier for you, so we created an example service class for you to use."),(0,o.kt)("p",null,"If you want to add a new service class to your project but don't want to write all the code manually, just use the WP-CLI command:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wp boilerplate create service-example --prompt")),(0,o.kt)("p",null,"The output will ask you to input the correct folder path relative to the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," folder and specify the class name.\nEverything else will be done for you like setting the namespace, package, vendor prefixes, class and folder name, and you will be set to write your class."),(0,o.kt)("p",null,"After that, add your WordPress hooks to the register method, provide its callback, and let the magic happen."))}d.isMDXComponent=!0}}]);