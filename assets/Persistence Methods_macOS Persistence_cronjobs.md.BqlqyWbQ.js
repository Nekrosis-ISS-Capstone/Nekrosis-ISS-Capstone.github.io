import{_ as s,c as a,o as i,a2 as t}from"./chunks/framework.DwDoyBw8.js";const e="/assets/Cronjob%20-%20Current%20User.CO4Inrif.png",n="/assets/Cronjob%20-%20Root.BpZuDuVZ.png",y=JSON.parse('{"title":"Cron Job Persistence","description":"","frontmatter":{},"headers":[],"relativePath":"Persistence Methods/macOS Persistence/cronjobs.md","filePath":"Persistence Methods/macOS Persistence/cronjobs.md"}'),o={name:"Persistence Methods/macOS Persistence/cronjobs.md"},l=t(`<h1 id="cron-job-persistence" tabindex="-1">Cron Job Persistence <a class="header-anchor" href="#cron-job-persistence" aria-label="Permalink to &quot;Cron Job Persistence&quot;">​</a></h1><h3 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>This method relies on the unix utility <code>cron</code> to schedule tasks to run at startup. Can be configured to run payloads as the current user or as root.</p><p>Note in macOS: Usage of <code>cron</code> is deprecated in favor of <code>launchd</code> for scheduling tasks, and may be removed in future versions. However, <code>cron</code> is still available and can be used for persistence.</p><h3 id="available-methods" tabindex="-1">Available Methods <a class="header-anchor" href="#available-methods" aria-label="Permalink to &quot;Available Methods&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Method</th><th style="text-align:left;">Requires</th><th style="text-align:left;">Runs As</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Cronjob - Current User</code></td><td style="text-align:left;">Standard User</td><td style="text-align:left;">Current User</td></tr><tr><td style="text-align:left;"><code>Cronjob - Root</code></td><td style="text-align:left;">Root</td><td style="text-align:left;">Root</td></tr></tbody></table><h3 id="demo" tabindex="-1">Demo: <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo:&quot;">​</a></h3><h4 id="cronjob-current-user" tabindex="-1">- Cronjob - Current User <a class="header-anchor" href="#cronjob-current-user" aria-label="Permalink to &quot;- Cronjob - Current User&quot;">​</a></h4><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-lTbS0" id="tab-2M5TfHV" checked="checked"><label for="tab-2M5TfHV">Command Line</label><input type="radio" name="group-lTbS0" id="tab-PVa6Crd"><label for="tab-PVa6Crd">Python API</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nekrosis</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --payload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/payload</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --method</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Cronjob - Current User&quot;</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nekrosis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Nekrosis</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nekrosis_obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Nekrosis(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  payload</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/path/to/payload&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  custom_method</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Cronjob - Current User&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nekrosis_obj.install()</span></span></code></pre></div></div></div><p><img src="`+e+`" alt=""></p><h4 id="cronjob-root" tabindex="-1">- Cronjob - Root <a class="header-anchor" href="#cronjob-root" aria-label="Permalink to &quot;- Cronjob - Root&quot;">​</a></h4><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-uEOw2" id="tab-cqQscJV" checked="checked"><label for="tab-cqQscJV">Command Line</label><input type="radio" name="group-uEOw2" id="tab-3VIL8Qv"><label for="tab-3VIL8Qv">Python API</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nekrosis</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --payload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/payload</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --method</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Cronjob - Root&quot;</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nekrosis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Nekrosis</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nekrosis_obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Nekrosis(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  payload</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/path/to/payload&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  custom_method</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Cronjob - Root&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nekrosis_obj.install()</span></span></code></pre></div></div></div><p><img src="`+n+'" alt=""></p>',13),r=[l];function h(p,d,k,c,u,b){return i(),a("div",null,r)}const E=s(o,[["render",h]]);export{y as __pageData,E as default};