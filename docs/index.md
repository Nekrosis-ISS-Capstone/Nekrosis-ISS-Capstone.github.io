---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Nekrosis"
  tagline: Multi-platform persistence toolkit for user-provided payloads.
  image:
    src: /nekrosis.png
    alt: Nekrosis Logo
  actions:
    - theme: brand
      text: Installation and Usage
      link: /Getting Started/installation
    - theme: alt
      text: Supported Persistence Methods
      link: /Persistence Methods/overview

features:
  - title: OS Agnostic
    icon: 🖥️
    details: Supports Windows, Linux, and macOS, taking the guesswork out of cross-platform malware deployment.
  - title: Versatile
    icon: 🛠️
    details: Deploy as a Python script, integrated into larger projects, or use as a standalone binary.
  - title: Self destruction
    icon: 🧨
    details: Configure to nuke itself and the original payload, removing all traces of the malware.
---


<style>

:root {
  --vp-home-hero-name-font-size: 88px;
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #1fcc2a 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-0deg, #1fcc2a 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

</style>


