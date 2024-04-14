import{_ as a,c as s,o as e,a2 as t}from"./chunks/framework.DwDoyBw8.js";const i="/assets/LaunchDaemon%20-%20Library.RV_BpTEP.png",y=JSON.parse('{"title":"launchd Persistence: Launch Daemon","description":"","frontmatter":{},"headers":[],"relativePath":"Persistence Methods/macOS Persistence/launchd-root.md","filePath":"Persistence Methods/macOS Persistence/launchd-root.md"}'),n={name:"Persistence Methods/macOS Persistence/launchd-root.md"},l=t(`<h1 id="launchd-persistence-launch-daemon" tabindex="-1">launchd Persistence: Launch Daemon <a class="header-anchor" href="#launchd-persistence-launch-daemon" aria-label="Permalink to &quot;launchd Persistence: Launch Daemon&quot;">​</a></h1><h3 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p><code>launchd</code> is macOS&#39;s first userspace process, and offers a &quot;Launch Daemon&quot; system for running processes at system boot. This method will run the payload as the root user, and will install the Launch Daemon in the <code>/Library/LaunchDaemons</code> directory.</p><h3 id="available-method" tabindex="-1">Available Method <a class="header-anchor" href="#available-method" aria-label="Permalink to &quot;Available Method&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Method</th><th style="text-align:left;">Requires</th><th style="text-align:left;">Runs As</th></tr></thead><tbody><tr><td style="text-align:left;"><code>LaunchDaemon - Library</code></td><td style="text-align:left;">Root</td><td style="text-align:left;">Root</td></tr></tbody></table><h3 id="demo" tabindex="-1">Demo: <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo:&quot;">​</a></h3><h4 id="launchdaemon-library" tabindex="-1">- LaunchDaemon - Library <a class="header-anchor" href="#launchdaemon-library" aria-label="Permalink to &quot;- LaunchDaemon - Library&quot;">​</a></h4><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Qj9BB" id="tab-4YpXyJw" checked="checked"><label for="tab-4YpXyJw">Command Line</label><input type="radio" name="group-Qj9BB" id="tab-eIMfQ6T"><label for="tab-eIMfQ6T">Python API</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nekrosis</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --payload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/payload</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --method</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;LaunchDaemon - Library&quot;</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nekrosis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Nekrosis</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nekrosis_obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Nekrosis(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  payload</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/path/to/malware&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  custom_method</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;LaunchDaemon - Library&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nekrosis_obj.install()</span></span></code></pre></div></div></div><p><img src="`+i+'" alt=""></p>',9),h=[l];function o(r,d,p,c,k,u){return e(),s("div",null,h)}const b=a(n,[["render",o]]);export{y as __pageData,b as default};
