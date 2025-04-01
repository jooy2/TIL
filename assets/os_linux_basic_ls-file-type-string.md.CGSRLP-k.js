import{_ as i,c as t,o as a,ag as h}from"./chunks/framework.BmLMQRXF.js";const o=JSON.parse('{"title":"리눅스 ls 명령어 내 파일 형식에 대한 문자열 표현","description":"","frontmatter":{},"headers":[],"relativePath":"os/linux/basic/ls-file-type-string.md","filePath":"os/linux/basic/ls-file-type-string.md","lastUpdated":1733966697000}'),n={name:"os/linux/basic/ls-file-type-string.md"};function l(k,s,e,d,p,F){return a(),t("div",null,s[0]||(s[0]=[h(`<h1 id="리눅스-ls-명령어-내-파일-형식에-대한-문자열-표현" tabindex="-1">리눅스 <code>ls</code> 명령어 내 파일 형식에 대한 문자열 표현 <a class="header-anchor" href="#리눅스-ls-명령어-내-파일-형식에-대한-문자열-표현" aria-label="Permalink to &quot;리눅스 \`ls\` 명령어 내 파일 형식에 대한 문자열 표현&quot;">​</a></h1><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> home</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">total</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lrwxrwxrwx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     7</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 29</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  2021</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> usr/bin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">drwxr-xr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  4096</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Feb</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 06:39</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> boot</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">drwxr-xr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  15</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  3760</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Jan</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 24</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 15:59</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">drwxr-xr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  4096</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Jan</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 26</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 06:54</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> etc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">drwxr-xr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  4096</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Sep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 02:06</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> home</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span></code></pre></div><p><code>ls -l</code>에서 첫글자 <code>l</code>, <code>d</code>, <code>d</code>...는 파일의 형식이며 문자별로 다음 의미를 가진다:</p><table tabindex="0"><thead><tr><th>문자</th><th>파일 타입</th><th>설명</th></tr></thead><tbody><tr><td><code>-</code></td><td>일반 파일</td><td>일반적인 파일을 나타내는 문자</td></tr><tr><td><code>d</code></td><td>디렉토리</td><td>디렉토리를 나타내는 문자</td></tr><tr><td><code>l</code></td><td>심볼릭 링크</td><td>심볼릭 링크 (Soft Link) 파일</td></tr><tr><td><code>c</code></td><td>문자 장치 드라이버</td><td>문자 장치 드라이버 (Character Device Driver). 물리적 장치를 위한 실행 파일</td></tr><tr><td><code>b</code></td><td>블록 장치 드라이버</td><td>블록 장치 드라이버 (Block Device Driver). 물리적 장치를 위한 실행 파일</td></tr><tr><td><code>s</code></td><td>로컬 소켓</td><td>프로세스 통신을 위해 사용되는 파일</td></tr><tr><td><code>p</code></td><td>네임드 파이프 (Named Pipe)</td><td>프로세스 통신을 위해 사용되는 파일 (선입선출 (FIFO) 파일)</td></tr></tbody></table>`,4)]))}const C=i(n,[["render",l]]);export{o as __pageData,C as default};
