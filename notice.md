---
title: "공지사항 (Notice) | Growth and Aging Lab(성장노화연구실)"
description: "경희대학교 성장노화연구실(Growth and Aging Lab)의 공지사항, 연구 대상자 모집 및 연구실 소식 안내 페이지입니다."
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


