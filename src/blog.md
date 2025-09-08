---
title: "Blog"
layout: "base.njk"
---
<h1>
{{ title }}
</h1>

{% for post in collections.posts %}
    <article class="box">
        <h2>
            <a class="post__link" href="/posts/{{ post.data.slug }}/">{{ post.data.title }}</a>
            <span class="material-symbols-outlined">arrow_outward</span>
        </h2>
        Published: {{ post.data.date }}
    </article>
{% endfor %}