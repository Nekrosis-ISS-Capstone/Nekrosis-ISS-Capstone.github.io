import{_ as e,c as a,o as s,a2 as t}from"./chunks/framework.CQ12TVIp.js";const m=JSON.parse('{"title":"launchd Persistence: System (Global)","description":"","frontmatter":{},"headers":[],"relativePath":"Persistence Methods/macOS Persistence/launchd-global-user-root-volume.md","filePath":"Persistence Methods/macOS Persistence/launchd-global-user-root-volume.md"}'),i={name:"Persistence Methods/macOS Persistence/launchd-global-user-root-volume.md"},l=t(`<h1 id="launchd-persistence-system-global" tabindex="-1">launchd Persistence: System (Global) <a class="header-anchor" href="#launchd-persistence-system-global" aria-label="Permalink to &quot;launchd Persistence: System (Global)&quot;">​</a></h1><h3 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Based on <code>LaunchAgent - Library</code>, however instead employs the OS&#39; <code>LaunchAgents</code> system. This method will run the payload as the current user, and will install the Launch Agent in the global <code>/System/Library/LaunchAgents</code> directory.</p><p>Note this method requires System Integrity Protection (SIP) bits <code>CSR_ALLOW_UNRESTRICTED_FS</code> (0x2) and <code>CSR_ALLOW_UNAUTHENTICATED_ROOT</code> (0x800) to be enabled to modify the <code>/System</code> directory.</p><ul><li>0x2: Required for OS X 10.11, El Capitan, and later</li><li>0x800: Required for macOS 11.0, Big Sur, and later</li></ul><p>See <a href="https://khronokernel.com/macos/2022/12/09/SIP.html" target="_blank" rel="noreferrer">System Integrity Protection: The misunderstood setting</a> for more information on SIP&#39;s bit field.</p><h3 id="available-method" tabindex="-1">Available Method <a class="header-anchor" href="#available-method" aria-label="Permalink to &quot;Available Method&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Method</th><th style="text-align:left;">Requires</th><th style="text-align:left;">Runs As</th></tr></thead><tbody><tr><td style="text-align:left;"><code>LaunchAgent - System</code></td><td style="text-align:left;">Root</td><td style="text-align:left;">Current User</td></tr></tbody></table><h3 id="demo" tabindex="-1">Demo: <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo:&quot;">​</a></h3><h4 id="launchagent-system" tabindex="-1">- LaunchAgent - System <a class="header-anchor" href="#launchagent-system" aria-label="Permalink to &quot;- LaunchAgent - System&quot;">​</a></h4><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-UrTa9" id="tab-udKdp41" checked="checked"><label for="tab-udKdp41">Command Line</label><input type="radio" name="group-UrTa9" id="tab-ePoKmCP"><label for="tab-ePoKmCP">Python API</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nekrosis</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --payload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/payload</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --method</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;LaunchAgent - System&quot;</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nekrosis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Nekrosis</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nekrosis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Nekrosis(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  payload</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/path/to/malware&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  custom_method</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;LaunchAgent - System&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><p><img src="" alt=""></p>`,12),n=[l];function o(h,r,d,c,p,k){return s(),a("div",null,n)}const y=e(i,[["render",o]]);export{m as __pageData,y as default};
