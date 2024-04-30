"use strict";(self.webpackChunkarc=self.webpackChunkarc||[]).push([[673],{8529:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(4848),i=t(8453);const o={title:"Defining Agents",sidebar_position:1},r=void 0,a={id:"dsl/defining_agents",title:"Defining Agents",description:"Agents are defined using the Arc Agent DSL.",source:"@site/docs/01-dsl/defining_agents.md",sourceDirName:"01-dsl",slug:"/dsl/defining_agents",permalink:"/docs/dsl/defining_agents",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Defining Agents",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Agent DSL",permalink:"/docs/dsl/"},next:{title:"Accessing Beans",permalink:"/docs/dsl/accessing_beans"}},l={},c=[{value:"Prompt templating",id:"prompt-templating",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Agents are defined using the Arc Agent DSL.\nThe following fields are mandatory when defining an agent."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"name"}),": the name of the Agent. There should be a unique identifier. Preferably without special characters."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"model (optional)"}),": the model that should be provided to the Agent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"description"}),": a short description of what the Agent does."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"systemPrompt"}),": the System Prompt of the Agent.\nThe ",(0,s.jsx)(n.code,{children:"systemPrompt"})," defines the objective, goals and instructions for Agents.\nThey are built dynamically an every request."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"tools"}),": a list of tools/functions that the Agent uses. Tools are referenced by their group name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"filterInput"}),": definition of filter logic."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kts",children:'agent {\n    name = "weather"\n    model = { "gemma:7b" }\n    description = "Agent that provides weather data."\n    systemPrompt = { """\n       You are a professional weather service.\n       You have access to real-time weather data with the get_weather function.\n       Keep your answer short and concise.\n       All you require is the location.\n       if you cannot help the user, simply reply "I cant help you"\n     """\n    }\n    tools = listOf("get_weather")\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"See the following pages on how to load the agents into your application."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../agent_scripting",children:"Agent Scripting"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../spring/agent-beans",children:"Spring Boot Beans"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"prompt-templating",children:"Prompt templating"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"systemPrompt"})," of an Agent is called on each request.\nMeaning that it can be dynamically customized to best suit the current context.\nNow although Kotlin Strings are quite powerful,\nadding logical constructs such as ",(0,s.jsx)(n.code,{children:"if"})," and ",(0,s.jsx)(n.code,{children:"for loops"})," statements can be cumbersome."]}),"\n",(0,s.jsxs)(n.p,{children:["For this purpose, the Arc DSL overwrites the UnaryPlus operator, ",(0,s.jsx)(n.code,{children:"+"}),", within the ",(0,s.jsx)(n.code,{children:"systemPrompt"})," block\nto allow for simple string concatenation."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, the following code snippet shows how to use the ",(0,s.jsx)(n.code,{children:"+"})," operator to build a dynamic prompt."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kts",children:'agent {\n    systemPrompt = {\n        +"Here is the first part og the prompt."\n        if(someCondition) {\n            +"Here is a conditional part of the prompt."\n        }\n      "The last part of the prompt (this does not require a + because it is automatically returned)."\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);