import{_ as i,c as a,o as n,ag as t}from"./chunks/framework.BmLMQRXF.js";const o=JSON.parse('{"title":"iOS xcrun 명령어","description":"","frontmatter":{},"headers":[],"relativePath":"development/mobile-programming/ios-xcrun-commands.md","filePath":"development/mobile-programming/ios-xcrun-commands.md","lastUpdated":1733967145000}'),h={name:"development/mobile-programming/ios-xcrun-commands.md"};function l(e,s,p,k,F,d){return n(),a("div",null,s[0]||(s[0]=[t('<h1 id="ios-xcrun-명령어" tabindex="-1">iOS <code>xcrun</code> 명령어 <a class="header-anchor" href="#ios-xcrun-명령어" aria-label="Permalink to &quot;iOS `xcrun` 명령어&quot;">​</a></h1><p>iOS에서 Simulator를 제어하는 CLI 명령어 도구인 <code>xrcun</code>에 대한 유용한 커맨드 모음</p><h2 id="ipados-stage-manager-활성화-및-비활성화" tabindex="-1">iPadOS Stage Manager 활성화 및 비활성화 <a class="header-anchor" href="#ipados-stage-manager-활성화-및-비활성화" aria-label="Permalink to &quot;iPadOS Stage Manager 활성화 및 비활성화&quot;">​</a></h2><h3 id="활성화" tabindex="-1">활성화 <a class="header-anchor" href="#활성화" aria-label="Permalink to &quot;활성화&quot;">​</a></h3><p>새 시뮬레이터(장치)를 추가한 경우</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xcrun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> simctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> spawn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> booted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> defaults</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> write</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SBChamoisWindowingEnabled</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -bool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> YES</span></span></code></pre></div><p>이미 시뮬레이터(장치)를 설정한 경우</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xcrun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> simctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> spawn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> booted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> defaults</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> write</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SBChamoisWindowingEnabled</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -bool</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xcrun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> simctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> spawn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> booted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> defaults</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> write</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.apple.springboard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SBChamoisWindowingEnabled</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -bool</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span></code></pre></div><h3 id="비활성화" tabindex="-1">비활성화 <a class="header-anchor" href="#비활성화" aria-label="Permalink to &quot;비활성화&quot;">​</a></h3><p>새 시뮬레이터(장치)를 추가한 경우</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xcrun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> simctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> spawn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> booted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> defaults</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> write</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SBChamoisWindowingEnabled</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -bool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NO</span></span></code></pre></div><p>이미 시뮬레이터(장치)를 설정한 경우</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xcrun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> simctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> spawn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> booted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> defaults</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> write</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SBChamoisWindowingEnabled</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -bool</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xcrun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> simctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> spawn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> booted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> defaults</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> write</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.apple.springboard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SBChamoisWindowingEnabled</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -bool</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span></code></pre></div>',13)]))}const g=i(h,[["render",l]]);export{o as __pageData,g as default};
