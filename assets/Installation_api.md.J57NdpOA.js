import{_ as s,c as i,o as a,a2 as e}from"./chunks/framework.B0RokHVs.js";const t="/assets/PyPI-Install.B4qY_cU6.png",l="/assets/PyPI-Test.Co5ePJ7e.png",y=JSON.parse('{"title":"Python API Installation","description":"","frontmatter":{},"headers":[],"relativePath":"Installation/api.md","filePath":"Installation/api.md"}'),o={name:"Installation/api.md"},n=e('<h1 id="python-api-installation" tabindex="-1">Python API Installation <a class="header-anchor" href="#python-api-installation" aria-label="Permalink to &quot;Python API Installation&quot;">​</a></h1><p>Nekrosis is available either through PyPI or GitHub as source code. You can install Nekrosis using either method, depending on your preference.</p><ul><li><a href="#pypi">PyPI</a></li><li><a href="#github-source">GitHub Source</a></li></ul><h3 id="pypi" tabindex="-1">PyPI <a class="header-anchor" href="#pypi" aria-label="Permalink to &quot;PyPI&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Prerequisite</p><ol><li>Python 3.6 or newer from <a href="https://www.python.org" target="_blank" rel="noreferrer">Python.org</a>.</li></ol></div><p>First, install Nekrosis through PyPI using the following command:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-FHv8I" id="tab-njnd_0u" checked="checked"><label for="tab-njnd_0u">Command Line</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nekrosis</span></span></code></pre></div></div></div><p><img src="'+t+'" alt=""></p><p>Now, verify you can import it correctly:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-LbgwD" id="tab-5XgDAIH" checked="checked"><label for="tab-5XgDAIH">Command Line</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;import nekrosis; print(nekrosis.__version__)&quot;</span></span></code></pre></div></div></div><p><img src="'+l+`" alt=""></p><p>Once you have verified the installation, head to the <a href="./../Usage/api.html">Usage</a> section to learn how to use Nekrosis.</p><h3 id="github-source" tabindex="-1">GitHub Source <a class="header-anchor" href="#github-source" aria-label="Permalink to &quot;GitHub Source&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Prerequisite</p><ol><li>Python 3.6 or newer from <a href="https://www.python.org" target="_blank" rel="noreferrer">Python.org</a>.</li><li><code>git</code> to clone the repository.</li></ol></div><p>First, clone the repository using the following command:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-DPS8C" id="tab-b5f5mjs" checked="checked"><label for="tab-b5f5mjs">Command Line</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://https://github.com/Nekrosis-ISS-Capstone/Nekrosis.git</span></span></code></pre></div></div></div><p>Next, navigate to the cloned repository and install the required dependencies using the following command:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-uOoSX" id="tab-pnhlMSE" checked="checked"><label for="tab-pnhlMSE">Command Line</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./Nekrosis</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirements.txt</span></span></code></pre></div></div></div><p>Now, verify you can import it correctly:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-wM3O_" id="tab-DG03yQT" checked="checked"><label for="tab-DG03yQT">Command Line</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;import nekrosis; print(nekrosis.__version__)&quot;</span></span></code></pre></div></div></div><p>Once you have verified the installation, head to the <a href="./../Usage/api.html">Usage - API</a> section to learn how to use Nekrosis.</p>`,21),p=[n];function h(r,d,c,k,g,u){return a(),i("div",null,p)}const b=s(o,[["render",h]]);export{y as __pageData,b as default};