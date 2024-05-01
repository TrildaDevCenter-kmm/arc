"use strict";(self.webpackChunkarc=self.webpackChunkarc||[]).push([[31],{3738:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(4848),i=t(8453);const r={title:"Agent Scripting",sidebar_position:2},o=void 0,s={id:"agent_scripting",title:"Agent Scripting",description:"A powerful and flexible way of crafting Arc Agents is to use Kotlin Scripting.",source:"@site/docs/00-agent_scripting.md",sourceDirName:".",slug:"/agent_scripting",permalink:"/arc/docs/agent_scripting",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Agent Scripting",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/arc/docs/quickstart"},next:{title:"AI Clients",permalink:"/arc/docs/clients/"}},c={},l=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:'A powerful and flexible way of crafting Arc Agents is to use Kotlin Scripting.\nIn this case, the Arc Agent DSL is placed in Kotlin script files that can be loaded and executed dynamically\nat runtime without restarting the application, i.e. "Hot Reloaded".'}),"\n",(0,a.jsxs)(n.p,{children:["In order for Agents Scripts to be correctly identified, their files must end with ",(0,a.jsx)(n.code,{children:".agent.kts"})," when containing Agents and\n",(0,a.jsx)(n.code,{children:".function.kts"})," when containing Functions. This will enable an IDE, such as the IntelliJ IDE,\nto provide syntax highlighting and code completion."]}),"\n",(0,a.jsxs)(n.p,{children:["Scripts are loaded using the ",(0,a.jsx)(n.code,{children:"ScriptingAgentLoader"})," class."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val beanProvider = CoroutineBeanProvider()\nval agentFactory = ChatAgentFactory(beanProvider)\nval agentScriptEngine = KtsAgentScriptEngine()\n\nval agentLoader = ScriptingAgentLoader(agentFactory, agentScriptEngine)\nagentLoader.loadAgent(script) // script is the actual Agent DSL\n\nval loadedAgents = agentLoader.getAgents()\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Scripts can be loaded from any source and passed to the ",(0,a.jsx)(n.code,{children:"loadAgent"})," method as a string.\nAlternatively, Agents can be loaded from a folder and reload automatically when the files are modified."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"agentLoader.startHotReload(agentsFolder, hotReloadDelay)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Once loaded, Scripted Agents are no different from Agents loaded by other\nmechanisms."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:' val agent = agentLoader.getAgentByName(agentName) as ChatAgent? ?: error("Agent not found!")\n val conversation = Conversation(User("anonymous")) + UserMessage("My question")\n val result = agent.execute(conversation).getOrNull()\n'})}),"\n",(0,a.jsxs)(n.p,{children:["See the ",(0,a.jsx)(n.a,{href:"/docs/cookbook/",children:"cookbook"})," for examples of Agent Scripts."]})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(6540);const i={},r=a.createContext(i);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);