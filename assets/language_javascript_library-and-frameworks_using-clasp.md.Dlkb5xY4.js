import{_ as a,c as i,o as e,ag as p}from"./chunks/framework.BmLMQRXF.js";const c=JSON.parse('{"title":"Clasp","description":"","frontmatter":{},"headers":[],"relativePath":"language/javascript/library-and-frameworks/using-clasp.md","filePath":"language/javascript/library-and-frameworks/using-clasp.md","lastUpdated":1733966697000}'),l={name:"language/javascript/library-and-frameworks/using-clasp.md"};function t(n,s,h,o,d,r){return e(),i("div",null,s[0]||(s[0]=[p(`<h1 id="clasp" tabindex="-1">Clasp <a class="header-anchor" href="#clasp" aria-label="Permalink to &quot;Clasp&quot;">​</a></h1><p><code>clasp</code>는 <strong><a href="https://developers.google.com/apps-script" target="_blank" rel="noreferrer">Google Apps Script</a></strong> 기반 프로젝트를 로컬에서 작업하고 서비스 중인 파일로 <code>push</code>하여 업데이트할 수 있도록 도와주는 라이브러리이다. <code>clone</code> 스크립트가 탑재된 새로운 문서를 생성할 수도 있다.</p><ul><li>GitHub: <a href="https://github.com/google/clasp" target="_blank" rel="noreferrer">https://github.com/google/clasp</a></li><li>Documents: <a href="https://developers.google.com/apps-script/guides/clasp" target="_blank" rel="noreferrer">https://developers.google.com/apps-script/guides/clasp</a></li></ul><h1 id="설치" tabindex="-1">설치 <a class="header-anchor" href="#설치" aria-label="Permalink to &quot;설치&quot;">​</a></h1><p><code>clasp</code>는 <strong>NodeJS</strong> 런타임에서 구동되는 <code>CLI</code> 명령어 도구이다. 따라서 <code>npm</code> 패키지를 통해 아래와 같이 설치할 수 있다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @google/clasp</span></span></code></pre></div><p><code>clasp</code>의 모든 구성을 제대로 사용하려면 다음 페이지에 Google 계정으로 로그인한 후 Google Apps Script API의 사용 설정을 &#39;사용&#39;으로 변경해야 한다: <a href="https://script.google.com/home/usersettings" target="_blank" rel="noreferrer">https://script.google.com/home/usersettings</a></p><p>이후 다음 명령어를 실행하여 계정 정보를 로컬 데스크톱에 저장한다. 앞으로 사용하는 명령어는 구글 계정 액세스를 요구할 수 있다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clasp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> login</span></span></code></pre></div><h1 id="사용법" tabindex="-1">사용법 <a class="header-anchor" href="#사용법" aria-label="Permalink to &quot;사용법&quot;">​</a></h1><p><code>clasp</code>를 활용하여 Apps Script 프로젝트를 새로 생성하려면 다음 명령어를 사용한다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clasp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Create which script</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sheets</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Created</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Google</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Sheet:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://drive.google.com/open?id=1yEnsWrCybp-KKKMHX-#########################</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Created</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Google</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Sheets</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Add-on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> script:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://script.google.com/d/1U3UDIRjB_##############################################/edit</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Warning:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> files</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> subfolder</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> are</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> accounted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unless</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> you</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/home/user/project/.claspignore&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Cloned</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/user/project/appsscript.json</span></span></code></pre></div><p>문서 형식(문서, 스프레드시트...)에 대한 URL과 스크립트 프로젝트의 URL 두개가 생성된다. 문서 파일은 Google 드라이브의 최상위 경로에 생성되어 있을 것이다.</p><p>이렇게하면 프로젝트 루트에 <code>.clasp.json</code> 파일이 생성된다. 해당 파일을 열어보면 현재 가리키고 있는 Google Script ID를 확인할 수 있다.</p><p>이후 로컬에서 작업한 내역을 문서 스크립트로 업로드하여 갱신하려는 경우 다음 명령어를 사용한다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clasp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span></span></code></pre></div><p>코드를 <code>push</code>할 때 주의해야 할 것이 있다. 프로젝트 내에 Apps Script와는 무관한 파일들이 존재하면 이 파일들도 같이 업로드될 수 있다. (예: <code>node_modules</code>, <code>package.json</code>...)</p><p>업로드한다고 스크립트 자체에 영향을 미치지는 않지만 가능한 프로젝트와 연관있는 파일만 업로드하는 것이 좋기 때문에 업로드하지 않아도 되는 파일은 <code>.claspignore</code> 파일을 생성하여 무시할 수 있다.</p><p><code>.claspignore</code>는 <code>.gitignore</code>와 유사하다. 아래는 <code>node_modules</code>와 <code>package.json</code> 파일을 업로드하지 않는 규칙의 예시이다.</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package.json</span></span>
<span class="line"><span>node_modules/**</span></span>
<span class="line"><span>node_modules/**/.*/**</span></span>
<span class="line"><span>node_modules/**/.*</span></span></code></pre></div><p>코드를 <code>push</code>한 후 문서 파일이나 스크립트 에디터가 웹페이지에 열려있다면 새로고침으로 갱신이 필요할 수 있다.</p>`,21)]))}const g=a(l,[["render",t]]);export{c as __pageData,g as default};
