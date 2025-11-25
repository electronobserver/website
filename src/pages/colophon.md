---
templateEngineOverride: njk, md
title: "Colophon"
type: "article"
description: "The Colophon page, behind the scenes of Electron Observer!"
layout: "info.njk"
date: Last Modified
permalink: "/colophon/index.html"
---
From the Oxford Languages dictionary definition:

<blockquote>
    <p>
        <h2 style="margin-bottom: 0;">col·o·phon</h2>
        <small>/ˈkäləfən,ˈkäləˌfän/</small>
        <br>
        <strong>noun</strong>
        a publisher's emblem or imprint, especially one on the title page or spine of a book.  
        <ul>     
            <li>
                <strong>historical</strong> 
                a statement at the end of a book, typically with a printer's emblem, giving information about its authorship and printing.
            </li>
        </ul>
    </p>
</blockquote>

Within the <a href="https://indieweb.org" target="_blank" rel="noopener">IndieWeb</a> community, 
the colophon page is were webmasters describe how they made their website.
This page is basically a rehash of my <a href="/posts/first/">first post</a> except this time, I'm digging much deeper.

## Technologies
This is a static website which means all webpages are prewritten. My static site generator of choice is Eleventy (11ty) v{{ eleventy.version }} 
with the following plugins installed to assist in building:
<ul>     
    <li><a href="https://www.11ty.dev/docs/plugins/image/" target="_blank" rel="noopener">eleventy-img</a></li>
    <li><a href="https://github.com/KiwiKilian/eleventy-plugin-og-image" target="_blank" rel="noopener">eleventy-plugin-og-image</a></li>
    <li><a href="https://www.11ty.dev/docs/plugins/rss/" target="_blank" rel="noopener">eleventy-plugin-rss</a></li>
    <li><a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener">markdown-it</a></li>
</ul>

<p>
    In addition to this, <a href="https://biati-digital.github.io/glightbox/"  target="_blank" rel="noopener">GLightbox</a>
    is my lightbox of choice, which is a tool used to make the images on my pages interactive.
</p>
<p>
    As for languages used on this website, at the moment, I'm only working with Nunjucks for templating and vanilla HTML/CSS/JavaScript. 
    However, I'll most likely migrate my stylesheet to 
    <a href="https://sass-lang.com/" target="_blank" rel="noopener">Sass</a>
    in the near future.
</p>

## Supported Browsers
<p>
    This website has been tested on the following web browsers:
    <ul>     
        <li>Google Chrome</li>
        <li>Mozilla Firefox</li>
        <li>Safari</li>
    </ul>
</p>

## Services
This website is deployed from it's dedicated
<a href="https://github.com/electronobserver/website"  target="_blank" rel="noopener">GitHub repository</a>
and then hosted on
<a href="https://www.netlify.com/"  target="_blank" rel="noopener">Netlify</a>.
The domain name <a href="/">electron.observer</a>, was registered on September 7th 2025. 
It was acquired from, registered at, and currently managed by
<a href="https://porkbun.com/"  target="_blank" rel="noopener">Porkbun</a>.

<!-- TODO: change current MIT license link to the one in your repository once you push this to main --> 
## Content
All text content here is licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/"  target="_blank" rel="noopener">CC BY-NC 4.0</a>. 
Source code for this website is licensed under the <a href="https://opensource.org/license/mit/"  target="_blank" rel="noopener">MIT License</a>.
All content and media is created by myself unless explicitly stated otherwise. No generative AI is used in the process of content creation.<br>

## Themes and Typography
This website is dressed up modestly since I'm aiming for minimalism. It's essentially built off just these two style components:
- [Tiny Brutalism CSS by pruger](https://github.com/pruger/tiny-brutalism){: target="_blank" rel="noopener"}
- [Roboto Mono by Google Fonts](https://fonts.google.com/specimen/Roboto+Mono){: target="_blank" rel="noopener"}

## Branding
Electron Observer's branding is inspired by my curiosity for topics within the realm of engineering and physics.<br> 

This can be seen from the Bohr's model silicon atom animation on the [index page](/) to the various custom art pieces littered across the website. 
Here's all pieces of artwork I currently have listed down below:

<figure>
    <img src="/posts/first/websiteart.webp" alt="Custom Website Artwork">
    <figcaption>Website Icon (Left) and Logo (Right)</figcaption>
</figure>

My website logo was commissioned by the extremely talented designer William Burns, who can be found over at their handle
<a href="https://bsky.app/profile/scjre.al"  target="_blank" rel="noopener">SCJREAL</a>.
The prism icon, which can be seen within the favicon and OpenGraph/Xitter banners, was designed by <a href="/about">myself</a>.

## Inspirations
There were so many beautiful, well-written, designs that I have encountered during the process of writing Electron Observer. 
The following people were the most influential in shaping this website's direction:
<ul>   
    <li><a href="https://bensifel.com"  target="_blank" rel="noopener">Ben Sifel (as themself)</a></li>
    <li><a href="https://minworks.org"  target="_blank" rel="noopener">Eric Min (minworks)</a></li> 
    <li><a href="https://soulwire.co.uk"  target="_blank" rel="noopener">Justin Windle (soulwire)</a></li>
    <li><a href="https://beeps.website"  target="_blank" rel="noopener">Kim Grey (beeps)</a></li>
    <li><a href="https://muan.co"  target="_blank" rel="noopener">Mu-An Chiou (muan)</a></li>
</ul>
I'd also like to thank my creative and talented friends and peers in my real life who inspired me to make my own website. Thanks nerds <3