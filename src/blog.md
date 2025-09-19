---
title: "Blog"
layout: "base.njk"
templateEngineOverride: njk,md
---
<h1>
{{ title }}
</h1>

{% for post in collections.posts | reverse %}
  <article class="box">
    <h2>
      <a class="post__link" href="{{ post.url }}">{{ post.data.title }}
        <span class="material-symbols-outlined">arrow_outward</span>
      </a>
    </h2>
    Published: {{ post.date.toISOString().slice(0,10) }}
  </article>
{% endfor %}
