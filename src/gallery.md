---
title: "Gallery"
description: "A collection of pictures from yours truly."
layout: "base.njk"
templateEngineOverride: njk
---
<h1>{{ title }}</h1>

<div class="gallery">
  {% for item in gallery | sort(attribute='date') | reverse %}
    <figure>
      <a href="{{ item.slug }}">
        <div class="gallery__overlay">
          <img src="/gallery/{{ item.image }}" alt="{{ item.alt }}">
          <span class="gallery__text">{{ item.alt }}</span>
        </div>
      </a>
    </figure>
  {% endfor %}
</div>