---
title: "공지사항 (NOTICE) | GROWTH AND AGING LAB (성장노화연구실)"
description: "Growth and Aging Lab (성장노화연구실)의 공지사항, 연구 대상자 모집 및 연구실 소식 안내"
layout: default
nav:
  label: "NOTICE"
  order: 50
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




