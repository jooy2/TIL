import{_ as e,c as i,a2 as a,o as l}from"./chunks/framework.BQmytedh.js";const r=JSON.parse('{"title":"Linux sshd TCP KeepAlive","description":"","frontmatter":{},"headers":[],"relativePath":"os/linux/server-services/sshd-tcp-keepalive.md","filePath":"os/linux/server-services/sshd-tcp-keepalive.md","lastUpdated":1733966697000}'),t={name:"os/linux/server-services/sshd-tcp-keepalive.md"};function n(p,s,d,h,o,c){return l(),i("div",null,s[0]||(s[0]=[a('<h1 id="linux-sshd-tcp-keepalive" tabindex="-1">Linux <code>sshd</code> TCP KeepAlive <a class="header-anchor" href="#linux-sshd-tcp-keepalive" aria-label="Permalink to &quot;Linux `sshd` TCP KeepAlive&quot;">​</a></h1><p>리눅스 환경의 <code>SSH</code> 서버에서 <strong>Keep Alive</strong> 패킷을 보내려면 <code>sshd_config</code>를 수정한다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/ssh/sshd_config</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TCPKeepAlive</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ClientAliveInterval</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ClientAliveCountMax</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span></code></pre></div><ul><li><code>TCPKeepAlive</code>: SSH 서버에서 연결 유지 패킷을 보낸다.</li><li><code>ClientAliveInterval</code>: 클라이언트 확인 간격 (<code>n</code> Seconds)</li><li><code>ClientAliveCountMax</code>: Keep Alive 메시지를 받지 못했을 때 클라이언트를 종료하기 전 접속을 유지해야 하는 최대 횟수</li></ul><p>예를 들어 <code>ClientAliveInterval</code>이 <code>10</code>이고 <code>ClientAliveCountMax</code>가 <code>3</code>이면 <code>10 X 3 = 30</code>초 이상 응답이 없을 경우 세션을 종료한다.</p><p>서버측에서 <code>Keep Alive</code> 응답을 보내지 않으려면 <code>ClientAliveCountMax</code>의 값을 <code>0</code>으로 설정한다. <code>ClientAliveInterval</code>에 설정된 초가 지나면 연결을 종료한다.</p><p>변경사항 적용 후 <code>sshd</code> 서비스를 재시작 해야 할 수 있다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sshd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span></span></code></pre></div><p>또는</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sshd</span></span></code></pre></div>',11)]))}const v=e(t,[["render",n]]);export{r as __pageData,v as default};