---
layout: "image.njk"
pagination:
  data: gallery
  size: 1
  alias: item
eleventyComputed:
  title: "{{ item.title }}"
  description: "{{ item.description }}"
permalink: "/gallery/{{ item.slug }}/"
---