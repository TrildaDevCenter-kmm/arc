"use strict";(self.webpackChunkarc=self.webpackChunkarc||[]).push([[373],{4375:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(4848),i=t(8453);const a={title:"Azure OpenAI Client"},o=void 0,s={id:"clients/azure",title:"Azure OpenAI Client",description:"Azure OpenAI is a managed service that allows developers to deploy,",source:"@site/docs/02-clients/azure.md",sourceDirName:"02-clients",slug:"/clients/azure",permalink:"/docs/clients/azure",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Azure OpenAI Client"},sidebar:"tutorialSidebar",previous:{title:"AI Clients",permalink:"/docs/clients/"},next:{title:"Google Gemini",permalink:"/docs/clients/gemini"}},c={},l=[];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Azure OpenAI is a managed service that allows developers to deploy,\ntune, and generate content from OpenAI models on Azure resources."}),"\n",(0,r.jsx)(n.p,{children:"The Azure OpenAI client library for Java is an adaptation of OpenAI's REST APIs that\nprovides an idiomatic interface and rich integration with the rest of the Azure SDK ecosystem.\""}),"\n",(0,r.jsxs)("cite",{children:[" ",(0,r.jsx)(n.a,{href:"https://github.com/Azure/azure-sdk-for-java/blob/main/sdk/openai/azure-ai-openai/README.md",children:"github.com/Azure/azure-sdk-for-java"})," "]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/java/api/overview/azure/ai-openai-readme?view=azure-java-preview",children:"https://learn.microsoft.com/en-us/java/api/overview/azure/ai-openai-readme?view=azure-java-preview"})]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'val config = AzureClientSettings(\n    modelName = "gpt-3.5-turbo",\n    apiKey = "YOUR_API_KEY",\n    url = "https://api.openai.com/v1/engines/gpt-3.5-turbo/completions"\n)\nval azureOpenAIClient = OpenAIClientBuilder()\n    .endpoint(config.url)\n    .credential(AzureKeyCredential(config.apiKey))\n    .buildAsyncClient()\n\nval agentClient = AzureAIClient(config, azureClient, eventPublisher)\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(6540);const i={},a=r.createContext(i);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);