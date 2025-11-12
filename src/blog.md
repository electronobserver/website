---
title: "Blog"
description: "Listen to my incoherent ramblings."
layout: "base.njk"
templateEngineOverride: njk
---
<h1>{{ title }}</h1>

{% for post in collections.posts | reverse %}
  <section class="box">
    <h2>
      <a class="post__link" href="{{ post.url }}">{{ post.data.title }}
        <span class="material-symbols-outlined">arrow_outward</span>
      </a>
    </h2>
    <span>Published: {{ post.date.toISOString().slice(0,10) }}</span>
  </section>
{% endfor %}