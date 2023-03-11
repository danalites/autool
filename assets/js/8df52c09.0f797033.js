"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[3197],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var s=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=s.createContext({}),l=function(e){var n=s.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return s.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},f=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),f=r,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return t?s.createElement(h,a(a({ref:n},u),{},{components:t})):s.createElement(h,a({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6982:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var s=t(7462),r=t(3366),o=(t(7294),t(3905)),a=["components"],i={id:"extending-classes",title:"Extending Classes"},c=void 0,l={unversionedId:"basics/extending-classes",id:"basics/extending-classes",title:"Extending Classes",description:"docs-source",source:"@site/docs/basics/extending-classes.md",sourceDirName:"basics",slug:"/basics/extending-classes",permalink:"/autool/docs/basics/extending-classes",draft:!1,tags:[],version:"current",frontMatter:{id:"extending-classes",title:"Extending Classes"},sidebar:"docs",previous:{title:"Namespaces",permalink:"/autool/docs/basics/namespaces"},next:{title:"Autowiring",permalink:"/autool/docs/basics/autowiring"}},u={},d=[{value:"Example",id:"example",level:2}],p={toc:d},f="wrapper";function h(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)(f,(0,s.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,o.kt)("p",null,"You can extend every class from the library. To follow the good practice, you should never use the class directly from the Eightshift-libs in your service container (except from helpers and traits). Instead, you should create a class in your project and extend the class from the Eightshift-libs. That is why we made all those commands you saw in the previous chapter."),(0,o.kt)("p",null,"We don't do any magic in the Eightshift-libs like in previous versions. All classes contain only the methods you need to call using WordPress hooks or filters."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Let's look at a way to add a class that enqueues theme front-end scripts and styles.\nGo to the ",(0,o.kt)("strong",{parentName:"p"},"root")," of your theme. Using the terminal, run this command:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wp boilerplate create enqueue-admin")),(0,o.kt)("p",null,"This command will output something like this in your project, taking care of your projects namespace and vendor prefixes, as well as the package name and the text-domain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n/**\n * The Admin Enqueue specific functionality.\n *\n * @package CoolProject\\Enqueue\\Admin\n */\n\ndeclare(strict_types=1);\n\nnamespace CoolProject\\Enqueue\\Admin;\n\nuse CoolProject\\Config\\Config;\nuse CoolProjectVendor\\EightshiftLibs\\Enqueue\\Admin\\AbstractEnqueueAdmin;\nuse CoolProjectVendor\\EightshiftLibs\\Manifest\\ManifestInterface;\n\n/**\n * Class EnqueueAdmin\n *\n * This class handles enqueue scripts and styles.\n */\nclass EnqueueAdmin extends AbstractEnqueueAdmin\n{\n\n  /**\n   * Create a new admin instance.\n   *\n   * @param ManifestInterface $manifest Inject manifest which holds data about assets from manifest.json.\n   */\n  public function __construct(ManifestInterface $manifest)\n  {\n    $this->manifest = $manifest;\n  }\n\n  /**\n   * Register all the hooks\n   *\n   * @return void\n   */\n  public function register(): void\n  {\n    add_action('login_enqueue_scripts', [ $this, 'enqueueStyles' ]);\n    add_action('admin_enqueue_scripts', [ $this, 'enqueueStyles' ], 50);\n    add_action('admin_enqueue_scripts', [ $this, 'enqueueScripts' ]);\n  }\n\n  /**\n   * Method that returns assets name used to prefix asset handlers.\n   *\n   * @return string\n   */\n  public function getAssetsPrefix(): string\n  {\n    return Config::getProjectName();\n  }\n\n  /**\n   * Method that returns assets version for versioning asset handlers.\n   *\n   * @return string\n   */\n  public function getAssetsVersion(): string\n  {\n    return Config::getProjectVersion();\n  }\n}\n")),(0,o.kt)("p",null,"As you can see from the provided example, we created a new class and extended the functionality from the Eightshift-libs."),(0,o.kt)("p",null,"In your new class, you have a ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," method that must be in every class that registers WordPress action hooks or filters. We call these ",(0,o.kt)("strong",{parentName:"p"},"service classes"),"."),(0,o.kt)("p",null,"Your class contains three action hooks now. From this example, you can see that, if you don't want to use some functionality, remove the action, and it will not be used anymore. For more details on what each hook's callback does, go to the extended class in the Eightshift-libs and see the logic defined there."))}h.isMDXComponent=!0}}]);