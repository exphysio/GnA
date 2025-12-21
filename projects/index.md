---
title: Projects
robots: noindex, follow
nav:
  order: 3
  tooltip: Projects (Ongoing, Completed)
---

<style>
  /* ===== Projects Styles ===== */
  .projects-wrap{max-width:1100px;margin:0 auto;padding:0 12px;}
  .projects-wrap h2{
    font-size:1.6rem;font-weight:700;margin:1.2rem 0 .6rem;color:#222;
    text-align:center; /* 제목 중앙 정렬 */
  }

  /* 한 항목(로고 + 정보) */
  .project-item{
    display:grid;
    grid-template-columns:260px 1fr; /* ← 로고(250px) 비율에 맞춰 컬럼 폭 조정 */
    gap:24px; align-items:center;    /* ← 간격 약간 넓혀 가독성 향상 */
    padding:22px 8px;
    border-top:1px solid #eaeaea;
    background:#fff;
  }
  .project-group .project-item:first-child{ border-top:0; }

  /* 로고 영역 */
  .project-logo{
    width:240px; height:200px; /* 요청하신 크기 */
    display:flex; align-items:center; justify-content:center;
    border-radius:12px;
  }

  .project-logo img{
    max-width:90%; max-height:90%;
    object-fit:contain; object-position:center;
    display:block;
  }

  .project-info{ text-align:center; }

  /* 제목은 그대로 */
  .project-title-ko{
    font-size:1.05rem; font-weight:700; color:#111; margin:0 0 .25rem;
    text-align:center;
  }

  /* 스폰서/역할 글자 크기 ↑ + 색 살짝 진하게 */
  .project-meta,
  .project-period {
    font-size:1.05rem;  /* 글자 크기 */
    color:#555;
    line-height:1.6;
    margin: 0 0 0px;   /* 아래쪽 간격 동일하게 */
  }

  /* 기간 글자 크기 ↑ + 색 살짝 진하게 */
  .project-period{
    font-size:1rem;     /* 기존 .88rem → 1rem */
    color:#555;
  }

  /* 반응형 */
  @media (max-width: 760px){
    .project-item{
      grid-template-columns: 1fr; text-align:center; gap:12px;
      padding:18px 6px;
    }
    .project-logo{ width:120px; height:86px; margin:0 auto; }
  }

  /* ===== Dark Mode for Projects page ===== */
  html[data-dark="true"] .projects-wrap h2 {
    color: #eee !important;
  }

  html[data-dark="true"] .project-item {
    background: #1e1e1e !important;
    border-top: 1px solid #333 !important;
  }

  html[data-dark="true"] .project-logo {
    background: #1e1e1e !important;
  }

  html[data-dark="true"] .project-title-ko {
    color: #fff !important;
  }

  /* 스폰서/기간/역할 텍스트 색 */
  html[data-dark="true"] .project-meta,
  html[data-dark="true"] .project-period {
    color: #bbb !important;
  }
</style>

<div class="projects-wrap">

  {% assign all = site.data.projects | default: empty %}
  {% assign ongoing = all | where: "status", "ongoing" %}
  {% assign completed = all | where: "status", "completed" %}

  {% if ongoing and ongoing.size > 0 %}
    <section class="project-group">
      <h2>Ongoing Projects</h2>
      {% for p in ongoing %}
        {% assign role_txt = "" %}
        {% if p.role == "pi" %}
          {% assign role_txt = "연구 책임자" %}
        {% elsif p.role == "co_pi" %}
          {% assign role_txt = "공동 연구자" %}
        {% endif %}

        <article class="project-item">
          <div class="project-logo">
            {% if p.logo %}
              <img src="{{ p.logo | relative_url }}" alt="{{ p.sponsor | default: 'Project logo' }}">
            {% endif %}
          </div>
          <div class="project-info">
            <h3 class="project-title-ko">{{ p.title | default: p.title_ko }}</h3>

            {% if p.sponsor %}
              <div class="project-meta">{{ p.sponsor }}</div>
            {% endif %}

            {% if p.period %}
              <div class="project-period">{{ p.period }}</div>
            {% elsif p.start or p.end %}
              <div class="project-period">
                {{ p.start }}{% if p.start and p.end %} – {% endif %}{{ p.end }}
              </div>
            {% endif %}

            {% if role_txt != "" %}
              <div class="project-meta">{{ role_txt }}</div>
            {% endif %}
          </div>
        </article>
      {% endfor %}
    </section>
  {% endif %}

  {% if completed and completed.size > 0 %}
    <section class="project-group">
      <h2>Completed Projects</h2>
      {% for p in completed %}
        {% assign role_txt = "" %}
        {% if p.role == "pi" %}
          {% assign role_txt = "연구 책임자" %}
        {% elsif p.role == "co_pi" %}
          {% assign role_txt = "공동 연구자" %}
        {% endif %}

        <article class="project-item">
          <div class="project-logo">
            {% if p.logo %}
              <img src="{{ p.logo | relative_url }}" alt="{{ p.sponsor | default: 'Project logo' }}">
            {% endif %}
          </div>
          <div class="project-info">
            <h3 class="project-title-ko">{{ p.title | default: p.title_ko }}</h3>

            {% if p.sponsor %}
              <div class="project-meta">{{ p.sponsor }}</div>
            {% endif %}

            {% if p.period %}
              <div class="project-period">{{ p.period }}</div>
            {% elsif p.start or p.end %}
              <div class="project-period">
                {{ p.start }}{% if p.start and p.end %} – {% endif %}{{ p.end }}
              </div>
            {% endif %}

            {% if role_txt != "" %}
              <div class="project-meta">{{ role_txt }}</div>
            {% endif %}
          </div>
        </article>
      {% endfor %}
    </section>
  {% endif %}

</div>
