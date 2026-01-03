---
title: Blog
robots: noindex, follow
nav:
  order: 5
  tooltip: Our story
---

# {% include icon.html icon="fa-solid fa-feather-pointed" %}Blog

<p class="blog-subtitle"
   style="text-align:center; font-size:1.4rem; line-height:1.6;
          margin:0.75rem auto 1.5rem; color:#333;
          max-width:900px; text-transform:none;">
  Our lab diary – capturing the moments that make us grow together.
</p>

<style>
  /* 연도 아코디언 */
  .year-acc details { margin: 0 0 12px 0; }
  .year-acc summary{
    cursor:pointer; font-weight:600; font-size:1.3rem; color:#222;
    background:#f7f7f7; border:1px solid #e5e5e5; border-radius:8px;
    padding:10px 12px; list-style:none;
  }
  .year-acc summary::-webkit-details-marker,
  .year-acc summary::marker{ display:none; }
  .year-acc .year-body{ padding:10px 4px 0; }

  /* 바 중앙 정렬 */
  .year-acc{ --bar-w:110%; }
  .year-acc details{
    width:var(--bar-w);
    margin-left:calc((100% - var(--bar-w))/2);
  }
  .year-acc summary{
    display:flex; justify-content:center; align-items:center;
    width:110%; box-sizing:border-box; position:relative;
  }
  .year-acc summary:active::after{
    content:""; position:absolute; inset:0;
    border-radius:inherit; background:rgba(0,0,0,.06);
  }
  @media (max-width:768px){
    .year-acc{ --bar-w:100%; }
  }

  /* 갤러리 */
  .year-gallery{
    --min:360px; --gap:24px;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(var(--min),1fr));
    gap:var(--gap);
    margin:.5rem 0 1rem;
  }

  .yg-item{
    margin:0;
    border-radius:10px;
    overflow:hidden;
    background:#fff;
    box-shadow:0 3px 12px rgba(0,0,0,.08);
  }
  .yg-item img{
    display:block;
    width:100%;
    height:var(--h,350px);
    object-fit:cover;
    object-position:center;
  }
  .yg-item figcaption{
    padding:8px 10px;
    font-size:1.1rem;
    line-height:1.6;
    color:#444;
    border-top:1px solid #eee;
    background:#fff;
    text-align:center;
  }

  /* 링크 */
  .yg-link{
    display:block;
    color:inherit;
    text-decoration:none;
  }
  .yg-link:hover figcaption{
    text-decoration:underline;
  }

  /* 다크모드 */
  html[data-dark="true"] .blog-subtitle{ color:#fff !important; }
  html[data-dark="true"] .year-acc summary{
    background:#2a2a2a !important;
    color:#fff !important;
    border:1px solid rgba(255,255,255,.45) !important;
  }
  html[data-dark="true"] .yg-item{
    background:#2a2a2a !important;
    box-shadow:none !important;
    outline:1px solid rgba(255,255,255,.5);
    outline-offset:-1px;
  }
  html[data-dark="true"] .yg-item figcaption{
    background:#2a2a2a !important;
    color:#fff !important;
    border-top:1px solid rgba(255,255,255,.35) !important;
  }
  html[data-dark="true"] .yg-item:hover{
    outline-color:rgba(255,255,255,.75);
  }
</style>

<div class="year-acc">
  {% assign years = site.data.blog | sort: "year" | reverse %}
  {% for y in years %}
    {% assign ystr = y.year | append: "" %}
    <details data-year="{{ ystr }}">
      <summary>{{ ystr }}</summary>

      <div class="year-body">
        {% if y.gallery and y.gallery.size > 0 %}
          <div class="year-gallery"
               style="{% if y.img_h %}--h:{{ y.img_h }}px;{% endif %}">
            {% for g in y.gallery %}

              {% assign img_src = g.image %}
              {% if img_src and img_src contains '://' %}
              {% else %}
                {% if img_src and img_src != '' %}
                  {% assign first_char = img_src | slice: 0, 1 %}
                  {% if first_char != '/' %}
                    {% assign img_src = '/' | append: img_src %}
                  {% endif %}
                  {% assign img_src = img_src | relative_url %}
                {% endif %}
              {% endif %}

              <figure class="yg-item">
                {% if g.link %}
                  <a href="{{ g.link | relative_url }}"
                     class="yg-link"
                     aria-label="{{ g.caption }}">
                {% endif %}

                <img loading="lazy"
                     src="{{ img_src }}"
                     alt="{{ g.caption | default: ystr }}">

                {% if g.caption %}
                  <figcaption>{{ g.caption }}</figcaption>
                {% endif %}

                {% if g.link %}
                  </a>
                {% endif %}
              </figure>

            {% endfor %}
          </div>
        {% endif %}
      </div>
    </details>
  {% endfor %}
</div>
