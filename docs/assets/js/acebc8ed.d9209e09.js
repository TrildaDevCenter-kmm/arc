"use strict";(self.webpackChunkarc=self.webpackChunkarc||[]).push([[332],{3617:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=t(4848),s=t(8453);const o={sidebar_position:1},i="Arc Agents",a={id:"index",title:"Arc Agents",description:"Welcome to Arc Agents, a kotlin based framework for writing AI powered applications.",source:"@site/docs/00-index.md",sourceDirName:".",slug:"/index",permalink:"/arc/docs/index",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Agent DSL",permalink:"/arc/docs/dsl/"}},c={},d=[{value:"Agents",id:"agents",level:2},{value:"ChatAgent",id:"chatagent",level:3},{value:"AgentProvider",id:"agentprovider",level:3},{value:"AgentLoader",id:"agentloader",level:3},{value:"Conversations",id:"conversations",level:2},{value:"Memory",id:"memory",level:2},{value:"Eventing",id:"eventing",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"arc-agents",children:"Arc Agents"}),"\n",(0,r.jsx)(n.p,{children:"Welcome to Arc Agents, a kotlin based framework for writing AI powered applications."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(9186).A+"",width:"803",height:"344"})}),"\n",(0,r.jsx)(n.h2,{id:"agents",children:"Agents"}),"\n",(0,r.jsx)(n.p,{children:"An Arc Agent is a collection of Large Language Model prompts, filters, events,\nreaders and other services that combined can perform a complex task."}),"\n",(0,r.jsx)(n.h3,{id:"chatagent",children:"ChatAgent"}),"\n",(0,r.jsxs)(n.p,{children:["As the name suggests, ",(0,r.jsx)(n.code,{children:"ChatAgent"}),"s are agents that a conversation\nThey take a ",(0,r.jsx)(n.code,{children:"Conversation"})," object as input and\noutputs the ",(0,r.jsx)(n.code,{children:"Conversation"})," containing a new message.\nSee the ",(0,r.jsx)(n.a,{href:"#conversations",children:"Conversations"})," section for more details on conversations."]}),"\n",(0,r.jsx)(n.h3,{id:"agentprovider",children:"AgentProvider"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"AgentProvider"})," provides agents to other components in your application.\nAgents can be loaded from different sources, for example, from\nkotlin scripts or Spring beans. The ",(0,r.jsx)(n.code,{children:"AgentProvider"})," consolidates all\nthese agents loaders in the application.\nTherefore, each application should have at most one ",(0,r.jsx)(n.code,{children:"AgentProvider"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"fun interface AgentProvider {\n\n    fun getAgents(): List<Agent<*, *>>\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When using the spring boot starter,\nthe ",(0,r.jsx)(n.code,{children:"CompositeAgentProvider"}),"\nis automatically configured as the default ",(0,r.jsx)(n.code,{children:"AgentProvider"}),".\nThe ",(0,r.jsx)(n.code,{children:"CompositeAgentProvider"})," combines the agents\nof multiple ",(0,r.jsx)(n.code,{children:"AgentLoader"}),"s and any Agents injected directly into the Spring Context."]}),"\n",(0,r.jsx)(n.h3,{id:"agentloader",children:"AgentLoader"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"AgentLoader"}),"s loads agents from a specific source. Unlike the ",(0,r.jsx)(n.code,{children:"AgentProvider"}),",\nan application may have multiple ",(0,r.jsx)(n.code,{children:"AgentLoader"}),"s."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"fun interface AgentLoader {\n\n    fun getAgents(): List<Agent<*, *>>\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The main ",(0,r.jsx)(n.code,{children:"AgentLoader"})," of the Arc Agent Framework is the ",(0,r.jsx)(n.code,{children:"ScriptAgentLoader"}),"\nthat loads agents from Kotlin scripts."]}),"\n",(0,r.jsx)(n.h2,{id:"conversations",children:"Conversations"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Conversation"})," object represents a conversation between a client and an Arc Agent, such as a ChatAgent.\nIt contains the entire transcript of the conversation, both client and agent messages,\nplus some metadata about the conversation."]}),"\n",(0,r.jsxs)(n.p,{children:["Each ",(0,r.jsx)(n.code,{children:"Conversation"})," object must be associated with a ",(0,r.jsx)(n.code,{children:"User"})," which acts as the owner of the conversation.\nThis to prevent a conversation from being accessed by unauthorized users/clients.\nFurthermore, the ",(0,r.jsx)(n.code,{children:"User"})," id may also be used as a key to store user/client specific data."]}),"\n",(0,r.jsx)(n.p,{children:"Messages are usually be one of 2 types:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"UserMessage"})," - messages sent by the user/client."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AssistantMessage"})," - messages generated by the Agent."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"SystemMessage"}),"s, messages that contain instructions for the Agent, are usually not store in the conversation transcript."]}),"\n",(0,r.jsx)(n.h2,{id:"memory",children:"Memory"}),"\n",(0,r.jsx)(n.p,{children:"Memory is the ability of an Agent to store and retrieve information."}),"\n",(0,r.jsx)(n.p,{children:"There are 2 types of memory:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"LONG_TERM"})," - information stored in long term memory is persistent and can be accessed by the Agent at any time."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SHORT_TERM"})," - information stored in short term memory is only available for the duration of a conversation."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Each information stored in memory is associated with an owner, usually the user defined in the conversation."}),"\n",(0,r.jsx)(n.p,{children:"The Arc Agent Framework declares the following interface for memory:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"interface Memory {\n\n    /**\n     * Store a value in LONG_TERM memory.\n     * @param owner The owner of the memory. For example, the user id.\n     * @param key The key to store the value under.\n     * @param value The value to store. If null, the value is removed from memory.\n     */\n    fun storeLongTerm(owner: String, key: String, value: Any?)\n\n    /**\n     * Store a value in SHORT_TERM memory.\n     * @param owner The owner of the memory. For example, the user id.\n     * @param key The key to store the value under.\n     * @param value The value to store. If null, the value is removed from memory.\n     * @param sessionId The session id to store the value under.\n     */\n    fun storeShortTerm(owner: String, key: String, value: Any?, sessionId: String)\n\n    /**\n     * Fetch a value from memory.\n     * @param owner The owner of the memory. For example, the user id.\n     * @param key The key to fetch the value for.\n     * @param sessionId The session id to fetch the value for. Only used if the value was stored under SHORT_TERM memory.\n     * @return The value stored under the key, or null if no value is stored.\n     */\n    fun fetch(owner: String, key: String, sessionId: String? = null): Any?\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Each application wanting to use memory must provide an implementation of the ",(0,r.jsx)(n.code,{children:"Memory"})," interface.\nThe Arc Agent Framework provides a default in-memory implementation of the ",(0,r.jsx)(n.code,{children:"Memory"})," interface,\nhowever this is not recommended for production use."]}),"\n",(0,r.jsx)(n.h2,{id:"eventing",children:"Eventing"}),"\n",(0,r.jsx)(n.p,{children:"Eventing is a great way to decouple communication between different parts of an application."}),"\n",(0,r.jsx)(n.p,{children:"The Arc Agent Framework provides the following interfaces for enabling eventing\nbetween your application and components of the Arc Agent Framework:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"  /**\n  * EventPublisher interface.\n  */\n  fun interface EventPublisher {\n    fun publish(event: Event)\n  }\n\n  /**\n  * Add EventHandlers to the implementation of this event to receive events.\n  */\n  fun interface EventListeners {\n    fun add(handler: EventHandler<out Event>)\n  }\n"})}),"\n",(0,r.jsx)(n.p,{children:"Out of the box, components of the Arc Framework will publish various events.\nThe events are useful for monitoring the system."}),"\n",(0,r.jsxs)(n.p,{children:["Custom events can be easily published throughout the Arc Agent DSL using the\n",(0,r.jsx)(n.code,{children:"emit"})," function."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'  agent {\n    name = "..."\n    description = "..."\n    systemPrompt = { "..." }\n    filterInput {\n        emit(MyCustomEvent())\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"/docs/eventing",children:"Eventing"})," for more details."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},9186:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/agents-37b6351d95266cb40f9b257409be57f2.svg"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(6540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);