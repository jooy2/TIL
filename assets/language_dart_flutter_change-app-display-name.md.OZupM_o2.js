import{_ as i,c as a,o as n,ag as t}from"./chunks/framework.BmLMQRXF.js";const o=JSON.parse('{"title":"Flutter 앱 표시 이름 변경하기","description":"","frontmatter":{},"headers":[],"relativePath":"language/dart/flutter/change-app-display-name.md","filePath":"language/dart/flutter/change-app-display-name.md","lastUpdated":1692003127000}'),l={name:"language/dart/flutter/change-app-display-name.md"};function p(h,s,e,k,E,d){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="flutter-앱-표시-이름-변경하기" tabindex="-1">Flutter 앱 표시 이름 변경하기 <a class="header-anchor" href="#flutter-앱-표시-이름-변경하기" aria-label="Permalink to &quot;Flutter 앱 표시 이름 변경하기&quot;">​</a></h1><p>플랫폼별로 <strong>Flutter</strong> 앱의 표시 이름(앱 리스트에서 나타나는 이름)을 사용자 지정할 수 있다. 이를 설정하지 않은 경우 기본값은 <code>pubspec.yaml</code>의 <code>name</code>값을 사용한다.</p><p>아래 플랫폼별 앱 표시 이름을 변경한 후 다음 명령을 실행한다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flutter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span></span></code></pre></div><p>이후 앱을 다시 빌드하면 해당 내용이 적용된다.</p><h2 id="android" tabindex="-1">Android <a class="header-anchor" href="#android" aria-label="Permalink to &quot;Android&quot;">​</a></h2><p><code>android/app/src/main/AndroidManifest.xml</code> 파일을 열고 <code>application</code>의 <code>android:label</code> 키를 찾아 해당 값(<code>{DisplayName}</code>)을 변경한다.</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">manifest</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xmlns:android</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://schemas.android.com/apk/res/android&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;com.company.app.app_name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">application</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        android:label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{DisplayName}&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        android:name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\${applicationName}&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        android:icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@mipmap/ic_launcher&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">application</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">manifest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="ios" tabindex="-1">ios <a class="header-anchor" href="#ios" aria-label="Permalink to &quot;ios&quot;">​</a></h2><p><code>ios/Runner/info.plist</code> 파일을 열고 <code>CFBundleName</code> 키를 찾아 해당 값(<code>{DisplayName}</code>)을 변경한다.</p><ul><li>앱 이름에는 공백이 포함되지 않는 것을 권장한다.</li></ul><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;?</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xml</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> encoding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">?&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DOCTYPE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> plist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PUBLIC &quot;-//Apple//DTD PLIST 1.0//EN&quot; &quot;http://www.apple.com/DTDs/PropertyList-1.0.dtd&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">plist</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;CFBundleName&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{DisplayName}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">plist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,12)]))}const g=i(l,[["render",p]]);export{o as __pageData,g as default};
