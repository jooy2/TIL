import{_ as i,c as a,a2 as l,o as n}from"./chunks/framework.BQmytedh.js";const c=JSON.parse('{"title":"리눅스 방화벽 간단 사용","description":"","frontmatter":{},"headers":[],"relativePath":"os/linux/basic/firewall.md","filePath":"os/linux/basic/firewall.md","lastUpdated":1733966697000}'),p={name:"os/linux/basic/firewall.md"};function t(e,s,h,k,d,r){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="리눅스-방화벽-간단-사용" tabindex="-1">리눅스 방화벽 간단 사용 <a class="header-anchor" href="#리눅스-방화벽-간단-사용" aria-label="Permalink to &quot;리눅스 방화벽 간단 사용&quot;">​</a></h1><p>리눅스 방화벽 소프트웨어로는 <code>iptables</code>, <code>firewalld</code>, <code>ufw</code> 등이 있다.</p><h2 id="iptables" tabindex="-1">iptables <a class="header-anchor" href="#iptables" aria-label="Permalink to &quot;iptables&quot;">​</a></h2><p>기본적으로 설치되어있거나 오래된 리눅스 배포판에서 주로 사용되었던 방화벽 소프트웨어이다.</p><p>아래와 같이 방화벽 규칙을 추가할 수 있다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># TCP (-p tcp) 22번 포트(--dport)를 영구적(--permanent)으로 개방하려는 경우</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INPUT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dport</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 22</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -j</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># TCP 6000 - 6010 포트를 모두 개방하려는 경우</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INPUT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dport</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6000:6010</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -j</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span></span></code></pre></div><h2 id="firewalld" tabindex="-1">firewalld <a class="header-anchor" href="#firewalld" aria-label="Permalink to &quot;firewalld&quot;">​</a></h2><p>RedHat 계열 리눅스 배포판에서 주로 사용되며 설치되지 않았을 경우 패키지관리 소프트웨어를 통해 설치할 수도 있다.</p><p>아래와 같이 방화벽 규칙을 추가할 수 있다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># TCP 22번 포트(--add-port)를 영구적(--permanent)으로 개방하려는 경우</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --zone=public</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add-port=22/tcp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --permanent</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># TCP 6000 - 6010 포트를 모두 개방하려는 경우</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --zone=public</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add-port=6000-6010/tcp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --permanent</span></span></code></pre></div><p>또는 아래와 같이 특정 서비스에 대해 필요한 포트를 개방할 수 있다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># XDMCP 접속에 사용되는 177/udp, 6000-6010/tcp 포트 개방</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --permanent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add-service=xdmcp</span></span></code></pre></div><h2 id="ufw" tabindex="-1">ufw <a class="header-anchor" href="#ufw" aria-label="Permalink to &quot;ufw&quot;">​</a></h2><p>Debian 계열 리눅스 배포판에서 주로 사용된다.</p><p>아래와 같이 방화벽 규칙을 추가할 수 있다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># TCP 22번 포트(allow)를 개방하려는 경우</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ufw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 22/tcp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># TCP 6000 - 6010 포트를 모두 개방하려는 경우</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ufw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6000:6010/tcp</span></span></code></pre></div>`,16)]))}const o=i(p,[["render",t]]);export{c as __pageData,o as default};