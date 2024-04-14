import{_ as e,c as a,o as t,a2 as s}from"./chunks/framework.DwDoyBw8.js";const b=JSON.parse('{"title":"Command Line Usage","description":"","frontmatter":{},"headers":[],"relativePath":"Usage/cli.md","filePath":"Usage/cli.md"}'),i={name:"Usage/cli.md"},l=s('<h1 id="command-line-usage" tabindex="-1">Command Line Usage <a class="header-anchor" href="#command-line-usage" aria-label="Permalink to &quot;Command Line Usage&quot;">​</a></h1><p>To use Nekrosis, a payload must be provided. This can be a script or binary that will be executed on the target system. The payload can be a local file or a URL.</p><p>Supported arguments include:</p><table><thead><tr><th style="text-align:left;">Argument</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>-h/--help</code></td><td style="text-align:left;">Display the help message.</td></tr><tr><td style="text-align:left;"><code>-v/--version</code></td><td style="text-align:left;">Display the current version of Nekrosis.</td></tr><tr><td style="text-align:left;"><code>-p/--payload</code></td><td style="text-align:left;">Install a payload with recommended persistence method.</td></tr><tr><td style="text-align:left;"><code>-l/--list-supported-methods</code></td><td style="text-align:left;">List all supported persistence methods.</td></tr><tr><td style="text-align:left;"><code>-m/--method</code></td><td style="text-align:left;">Install a payload with a specific persistence method.</td></tr><tr><td style="text-align:left;"><code>-n/--nuke</code></td><td style="text-align:left;">Remove the payload and Nekrosis from the system after persistence.</td></tr><tr><td style="text-align:left;"><code>-s/--silent</code></td><td style="text-align:left;">Suppress all output except errors.</td></tr><tr><td style="text-align:left;"><code>-e/--export</code></td><td style="text-align:left;">Export the persistence methods to STDOUT in PLIST, XML or JSON.</td></tr></tbody></table><h3 id="h-help" tabindex="-1">-h/--help <a class="header-anchor" href="#h-help" aria-label="Permalink to &quot;-h/--help&quot;">​</a></h3><p>To start, run Nekrosis with the <code>--help</code> flag to view the available options:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Ogk2S" id="tab-Ltt1pzh" checked="checked"><label for="tab-Ltt1pzh">Command Line</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nekrosis</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span></span></code></pre></div></div></div><h3 id="v-version" tabindex="-1">-v/--version <a class="header-anchor" href="#v-version" aria-label="Permalink to &quot;-v/--version&quot;">​</a></h3><p>To view the current version of Nekrosis, run the following command:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-WnwvW" id="tab-xjDuafK" checked="checked"><label for="tab-xjDuafK">Command Line</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nekrosis</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span></code></pre></div></div></div><h3 id="p-payload" tabindex="-1">-p/--payload <a class="header-anchor" href="#p-payload" aria-label="Permalink to &quot;-p/--payload&quot;">​</a></h3><p>To install a payload with recommended persistence method, run the following command:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-NNwGB" id="tab-CPZrz-2" checked="checked"><label for="tab-CPZrz-2">Command Line</label><input type="radio" name="group-NNwGB" id="tab--drN4dW"><label for="tab--drN4dW">Command Line</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nekrosis</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --payload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/payload</span></span></code></pre></div><p>If payload is a URL, Nekrosis will first download the payload to a temporary directory before installing it.</p><h3 id="l-list-supported-methods" tabindex="-1">-l/--list-supported-methods <a class="header-anchor" href="#l-list-supported-methods" aria-label="Permalink to &quot;-l/--list-supported-methods&quot;">​</a></h3><p>To list all supported persistence methods, run the following command:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-g7A9h" id="tab-AdhqOW-" checked="checked"><label for="tab-AdhqOW-">Command Line</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nekrosis</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --list-supported-methods</span></span></code></pre></div></div></div></div></div><h3 id="m-method" tabindex="-1">-m/--method <a class="header-anchor" href="#m-method" aria-label="Permalink to &quot;-m/--method&quot;">​</a></h3><p>To install a payload with a specific persistence method, run the following command:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-8efmC" id="tab-Pgjz9PZ" checked="checked"><label for="tab-Pgjz9PZ">Command Line</label><input type="radio" name="group-8efmC" id="tab-fMcAxjt"><label for="tab-fMcAxjt">Command Line</label><input type="radio" name="group-8efmC" id="tab-gt0AlgF"><label for="tab-gt0AlgF">Command Line</label><input type="radio" name="group-8efmC" id="tab-F_J-1b3"><label for="tab-F_J-1b3">Command Line</label><input type="radio" name="group-8efmC" id="tab-1-qW67b"><label for="tab-1-qW67b">Command Line</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nekrosis</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --payload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/payload</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --method</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;LaunchAgent - Current User&quot;</span></span></code></pre></div><h3 id="n-nuke" tabindex="-1">-n/--nuke <a class="header-anchor" href="#n-nuke" aria-label="Permalink to &quot;-n/--nuke&quot;">​</a></h3><p>To remove the payload and Nekrosis from the system after persistence, run the following command:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-NVk78" id="tab-EsbsG_S" checked="checked"><label for="tab-EsbsG_S">Command Line</label><input type="radio" name="group-NVk78" id="tab-BzJKLFO"><label for="tab-BzJKLFO">Command Line</label><input type="radio" name="group-NVk78" id="tab-LP3bkt-"><label for="tab-LP3bkt-">Command Line</label><input type="radio" name="group-NVk78" id="tab-3LnYHB8"><label for="tab-3LnYHB8">Command Line</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nekrosis</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --payload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/payload</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --nuke</span></span></code></pre></div><h3 id="s-silent" tabindex="-1">-s/--silent <a class="header-anchor" href="#s-silent" aria-label="Permalink to &quot;-s/--silent&quot;">​</a></h3><p>To suppress all output except, run the following command:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-JC8d5" id="tab-wDtjSji" checked="checked"><label for="tab-wDtjSji">Command Line</label><input type="radio" name="group-JC8d5" id="tab-8uSds-y"><label for="tab-8uSds-y">Command Line</label><input type="radio" name="group-JC8d5" id="tab-txu-aZT"><label for="tab-txu-aZT">Command Line</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nekrosis</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --payload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/payload</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --silent</span></span></code></pre></div><h3 id="e-export" tabindex="-1">-e/--export <a class="header-anchor" href="#e-export" aria-label="Permalink to &quot;-e/--export&quot;">​</a></h3><p>To export the persistence methods to PLIST format in STDOUT, run the following command:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-UdX3p" id="tab-oHZRIam" checked="checked"><label for="tab-oHZRIam">Command Line</label><input type="radio" name="group-UdX3p" id="tab-PFkS6Mf"><label for="tab-PFkS6Mf">Command Line</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nekrosis</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --export</span></span></code></pre></div><p>Optionally provide a format to export to (PLIST, XML or JSON):</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-2MA2c" id="tab-SWkUFWk" checked="checked"><label for="tab-SWkUFWk">Command Line</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nekrosis</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --export</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --format</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> json</span></span></code></pre></div></div></div></div></div></div></div></div></div></div></div>',16),d=[l];function o(n,p,h,r,c,k){return t(),a("div",null,d)}const u=e(i,[["render",o]]);export{b as __pageData,u as default};