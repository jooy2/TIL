import{_ as i,c as a,o as t,ag as e}from"./chunks/framework.BmLMQRXF.js";const c=JSON.parse('{"title":"Flutter flutter_icons 라이브러리","description":"","frontmatter":{},"headers":[],"relativePath":"language/dart/flutter/flutter-library-flutter-icons.md","filePath":"language/dart/flutter/flutter-library-flutter-icons.md","lastUpdated":1692003127000}'),n={name:"language/dart/flutter/flutter-library-flutter-icons.md"};function l(p,s,h,r,d,k){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="flutter-flutter-icons-라이브러리" tabindex="-1">Flutter <code>flutter_icons</code> 라이브러리 <a class="header-anchor" href="#flutter-flutter-icons-라이브러리" aria-label="Permalink to &quot;Flutter \`flutter_icons\` 라이브러리&quot;">​</a></h1><p>여러 플랫폼의 앱 아이콘을 한번에 변경해주는 개발 유틸 (<a href="https://github.com/fluttercommunity/flutter_launcher_icons" target="_blank" rel="noreferrer">https://github.com/fluttercommunity/flutter_launcher_icons</a>)</p><h2 id="설치" tabindex="-1">설치 <a class="header-anchor" href="#설치" aria-label="Permalink to &quot;설치&quot;">​</a></h2><p><code>dev_dependencies</code>에 <code>flutter_launcher_icons</code> 패키지를 설치한다.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dev_dependencies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  flutter_launcher_icons</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">^0.12.0</span></span></code></pre></div><p>이후 하단에 다음 내용을 구성한다. <code>image_path</code>에는 프로젝트 경로 루트 기준 변경할 아이콘의 경로를 입력한다.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">flutter_icons</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  android</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  ios</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  image_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">assets/icon/icon.png</span></span></code></pre></div><p>이후 터미널에서 다음 명령어를 실행하여 아이콘을 적용할 수 있다. 기존의 아이콘은 사라지니 주의.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">flutter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flutter_launcher_icons:main</span></span></code></pre></div><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h2><p>아래 에러가 발생한 경우:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">✗</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ERROR:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> InvalidConfigException</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Cannot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> minSdk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> android/app/build.gradle</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> android/local.propertiesSpecify</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> minSdk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> either</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> android/app/build.gradle</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> android/local.properties</span></span></code></pre></div><p><code>android/local.properties</code>에 다음 내용을 추가한다.</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>flutter.minSdkVersion=30</span></span></code></pre></div>`,14)]))}const u=i(n,[["render",l]]);export{c as __pageData,u as default};
