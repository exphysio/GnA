---
title: Notice
layout: default
nav:
  order: 50
  tooltip: "Lab notices and announcements"
---

## Notice

<ul class="notice-list">
  {% assign items = site.notice | sort: "date" | reverse %}
  {% for n in items %}
    <li>
      <span class="notice-date">{{ n.date | date: "%Y.%m.%d" }}</span>
      <a href="{{ n.url }}">{{ n.title }}</a>
    </li>
  {% endfor %}
</ul>
