import{_ as s,c as a,a2 as t,o as e}from"./chunks/framework.BQmytedh.js";const g=JSON.parse('{"title":"Git 로컬 프로젝트에 변경된 기본 브랜치 이름 적용하기","description":"","frontmatter":{},"headers":[],"relativePath":"development/misc/git-change-default-branch-name.md","filePath":"development/misc/git-change-default-branch-name.md","lastUpdated":1734232768000}'),n={name:"development/misc/git-change-default-branch-name.md"};function h(l,i,p,k,r,F){return e(),a("div",null,i[0]||(i[0]=[t(`<h1 id="git-로컬-프로젝트에-변경된-기본-브랜치-이름-적용하기" tabindex="-1">Git 로컬 프로젝트에 변경된 기본 브랜치 이름 적용하기 <a class="header-anchor" href="#git-로컬-프로젝트에-변경된-기본-브랜치-이름-적용하기" aria-label="Permalink to &quot;Git 로컬 프로젝트에 변경된 기본 브랜치 이름 적용하기&quot;">​</a></h1><p>GitHub에서 프로젝트의 기본 브랜치 이름이 변경되고 로컬 프로젝트에서 클론한 파일들이 있다면 로컬 프로젝트에서 변경사항을 반영해주어야 한다.</p><p>일반적으로 변경된 브랜치로 리다이렉션되어 코드를 push하는 데에는 큰 문제가 없겠지만 추후의 상황을 위해 가급적 빠르게 변경사항을 갱신해주는 것이 좋다.</p><p>만약 <code>master</code> 브랜치가 <code>main</code> 브랜치로 변경되었을 경우, 프로젝트 루트에서 아래 커맨드를 모두 실행한다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fetch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin/main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set-head</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span></span></code></pre></div>`,5)]))}const c=s(n,[["render",h]]);export{g as __pageData,c as default};