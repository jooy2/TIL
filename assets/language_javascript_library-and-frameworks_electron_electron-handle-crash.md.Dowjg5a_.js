import{_ as a,c as i,a2 as e,o as t}from"./chunks/framework.BQmytedh.js";const c=JSON.parse('{"title":"Electron 에러로 인한 크래시 처리","description":"","frontmatter":{},"headers":[],"relativePath":"language/javascript/library-and-frameworks/electron/electron-handle-crash.md","filePath":"language/javascript/library-and-frameworks/electron/electron-handle-crash.md","lastUpdated":1733966697000}'),n={name:"language/javascript/library-and-frameworks/electron/electron-handle-crash.md"};function l(r,s,p,h,k,o){return t(),i("div",null,s[0]||(s[0]=[e(`<h1 id="electron-에러로-인한-크래시-처리" tabindex="-1">Electron 에러로 인한 크래시 처리 <a class="header-anchor" href="#electron-에러로-인한-크래시-처리" aria-label="Permalink to &quot;Electron 에러로 인한 크래시 처리&quot;">​</a></h1><p><a href="https://www.electronjs.org" target="_blank" rel="noreferrer">Electron</a>을 사용한 코드에서 에러가 발생하면 발생 위치에 따라 애플리케이션 크래시가 발생한다.</p><p>메인 프로세스에서 크래시가 발생하면 시스템 다이얼로그가 표시되며, 렌더러 프로세스(BrowserWindow)에서 크래시가 발생하면 DevTool이 죽으면서 앱이 동작하지 않는다.</p><h2 id="메인-프로세스-크래시-처리" tabindex="-1">메인 프로세스 크래시 처리 <a class="header-anchor" href="#메인-프로세스-크래시-처리" aria-label="Permalink to &quot;메인 프로세스 크래시 처리&quot;">​</a></h2><ul><li>문서: <a href="https://nodejs.org/api/process.html#event-uncaughtexception" target="_blank" rel="noreferrer">https://nodejs.org/api/process.html#event-uncaughtexception</a></li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">process.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;uncaughtException&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">origin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 메인 프로세스 크래시 발생 시 처리할 코드</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="렌더러-프로세스-크래시-처리" tabindex="-1">렌더러 프로세스 크래시 처리 <a class="header-anchor" href="#렌더러-프로세스-크래시-처리" aria-label="Permalink to &quot;렌더러 프로세스 크래시 처리&quot;">​</a></h2><ul><li>문서: <a href="https://www.electronjs.org/docs/latest/api/app#event-render-process-gone" target="_blank" rel="noreferrer">https://www.electronjs.org/docs/latest/api/app#event-render-process-gone</a></li></ul><p>이외에도 <code>child-process-gone</code> 이벤트도 있다.</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { app } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;electron&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;render-process-gone&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">webContents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">details</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 렌더러 프로세스 크래시 발생 시 처리할 코드</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,10)]))}const E=a(n,[["render",l]]);export{c as __pageData,E as default};