"use strict";(self.webpackChunkarc=self.webpackChunkarc||[]).push([[458],{9882:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=t(4848),s=t(8453);const o={title:"Defining Functions"},a=void 0,c={id:"dsl/defining_functions",title:"Defining Functions",description:"Functions are an important building block of Agents. They are used to access external services and data.",source:"@site/docs/01-dsl/defining_functions.md",sourceDirName:"01-dsl",slug:"/dsl/defining_functions",permalink:"/docs/dsl/defining_functions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Defining Functions"},sidebar:"tutorialSidebar",previous:{title:"Accessing Beans",permalink:"/docs/dsl/accessing_beans"},next:{title:"Filtering Input/Output",permalink:"/docs/dsl/filters"}},r={},d=[];function l(n){const e={a:"a",admonition:"admonition",code:"code",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Functions are an important building block of Agents. They are used to access external services and data.\nAn Agent can be assigned multiple functions.\nAgents choose which functions to use based on the function description."}),"\n",(0,i.jsxs)(e.p,{children:["Under the hood, these functions translate to LLM Functions, for example,\nOpenAI functions (",(0,i.jsx)(e.a,{href:"https://platform.openai.com/docs/guides/function-calling",children:"https://platform.openai.com/docs/guides/function-calling"}),")."]}),"\n",(0,i.jsxs)(e.admonition,{type:"info",children:[(0,i.jsx)(e.mdxAdmonitionTitle,{}),(0,i.jsx)(e.p,{children:"Not all Models/Clients support functions."})]}),"\n",(0,i.jsxs)(e.p,{children:["Here is an example of a Weather Agent assigned a ",(0,i.jsx)(e.code,{children:"get_weather"})," function and ",(0,i.jsx)(e.code,{children:"get_time"})," function."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kts",children:'agent {\n    name = "weather"\n    description = "Agent that provides weather data."\n    systemPrompt = { """ Some system prompt """ }\n    tools = listOf("get_weather", "get_time")\n}\n'})}),"\n",(0,i.jsxs)(e.p,{children:["Example ",(0,i.jsx)(e.code,{children:"weather.function.kts"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kts",children:'function(\n  name = "get_weather",\n  description = "Returns real-time weather information for any location",\n  params = types(string("location", "a city to obtain the weather for."))\n) { (location) ->\n    """\n        The weather is good in $locationToUse. It is 20 degrees celsius.\n    """\n  }\n\n'})}),"\n",(0,i.jsx)(e.p,{children:"Functions always return a string. This string can contain natural language text, JSON, or any other format\nor a combination of them."})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>c});var i=t(6540);const s={},o=i.createContext(s);function a(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);