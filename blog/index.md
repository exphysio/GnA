---
title: Blog
nav:
  order: 5
  tooltip: Our story
---

# {% include icon.html icon="fa-solid fa-feather-pointed" %}Blog

<!-- ✅ 클래스 부여해서 다크모드에서 쉽게 색상 덮어쓰기 -->
<p class="blog-subtitle" style="text-align:center; font-size:1.4rem; line-height:1.6; margin:0.75rem auto 1.5rem; color:#333; max-width:900px; text-transform:none;">
  Our lab diary – capturing the moments that make us grow together.
</p>

<style>
  /* 연도 아코디언 (기존 모양 유지) */
  .year-acc details { margin: 0 0 12px 0; }
  .year-acc summary{
    cursor:pointer; font-weight:600; font-size:1.3rem; color:#222;
    background:#f7f7f7; border:1px solid #e5e5e5; border-radius:8px;
    padding:10px 12px; list-style:none;
  }
  .year-acc summary::-webkit-details-marker{ display:none; }
  .year-acc summary::marker{ display:none; }
  .year-acc .year-body{ padding:10px 4px 0; }

  /* ===========================
     ✅ 바 길이 중앙 정렬
     =========================== */
  .year-acc{ --bar-w: 110%; }
  .year-acc details{
    width: var(--bar-w);
    margin-left: calc((100% - var(--bar-w)) / 2);
  }

  /* 제목 바 */
  .year-acc summary{
    display:flex; align-items:center; justify-content:center;
    width:110%;
    box-sizing:border-box; position:relative;
  }

  /* 눌림(클릭) 효과 */
  .year-acc summary:active::after{
    content:""; position:absolute; inset:0;
    border-radius:inherit; background:rgba(0,0,0,.06);
    pointer-events:none;
  }

  /* 모바일 */
  @media (max-width: 768px){
    .year-acc{ --bar-w: 100%; }
  }

  /* ✅ 갤러리: 3열 + 고정 높이 */
  .year-gallery{
    --min: 360px;
    --gap: 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--min), 1fr));
    gap: var(--gap);
    margin: .5rem 0 1rem;
  }

  .yg-item{
    margin: 0;
    border-radius: 10px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 3px 12px rgba(0,0,0,.08);
  }
  .yg-item img{
    display: block;
    width: 100%;
    height: var(--h);
    object-fit: cover;
    object-position: center;
  }
  .yg-item figcaption{
    padding: 8px 10px;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #444;
    border-top: 1px solid #eee;
    background: #fff;
    text-align: center;
  }
  /* 이미지 강제 폭 */
  .year-acc .year-body .year-gallery .yg-item > img{
    display:block;
    width:100% !important;
    max-width:none !important;
    height:var(--h, 350px);
    object-fit:cover;
    object-position:center;
  }

  /* ===========================
     🌙 다크모드 스타일 (html[data-dark="true"])
     =========================== */

  /* Our lab diary 문구 흰색으로 */
  html[data-dark="true"] .blog-subtitle{
    color:#fff !important;
  }

  /* 아코디언 summary 바: 어두운 회색 + 흰 테두리 */
  html[data-dark="true"] .year-acc summary{
    background:#2a2a2a !important;
    color:#fff !important;
    border:1px solid rgba(255,255,255,0.45) !important;
  }

  /* 갤러리 카드(네모): 배경 회색 + 흰 테두리 + 그림자 제거 */
  html[data-dark="true"] .yg-item{
    background:#2a2a2a !important;
    box-shadow:none !important;
    outline:1px solid rgba(255,255,255,0.5);   /* 전체적으로 흰색 테두리 */
    outline-offset:-1px;                        /* 테두리가 카드 안쪽으로 붙게 */
  }

  /* 캡션: 배경 회색, 글자/테두리 흰색 계열 */
  html[data-dark="true"] .yg-item figcaption{
    background:#2a2a2a !important;
    color:#fff !important;
    border-top:1px solid rgba(255,255,255,0.35) !important;
  }

  /* (옵션) 카드 호버 시 테두리 조금 더 선명하게 */
  html[data-dark="true"] .yg-item:hover{
    outline-color: rgba(255,255,255,0.75);
  }
</style>

<div class="year-acc">
  {%- assign years = site.data.blog | sort: "year" | reverse -%}
  {%- for y in years -%}
    {%- assign ystr = y.year | append: "" -%}
    <details data-year="{{ ystr }}">
      <summary>{{ ystr }}</summary>
      <div class="year-body">
        {%- if y.gallery and y.gallery.size > 0 -%}
          <div class="year-gallery" style="
            {%- if y.cols -%}--cols:{{ y.cols }};{%- endif -%}
            {%- if y.img_h -%}--h:{{ y.img_h }}px;{%- endif -%}
          ">
            {%- for g in y.gallery -%}
{%- assign raw_img = g.image -%}
{%- assign img_src = raw_img -%}

{%- if img_src and img_src contains '://' -%}
  {# 절대 URL은 그대로 사용 #}
{%- else -%}
  {%- if img_src and img_src != '' -%}
    {%- assign first_char = img_src | slice: 0, 1 -%}
    {%- if first_char != '/' -%}
      {%- assign img_src = '/' | append: img_src -%}
    {%- endif -%}
    {%- assign img_src = img_src | relative_url -%}
  {%- endif -%}
{%- endif -%}
              <figure class="yg-item">
                <img loading="lazy" src="{{ img_src }}" alt="{{ g.caption | default: ystr }}">
                {%- if g.caption -%}<figcaption>{{ g.caption }}</figcaption>{%- endif -%}
                <!-- DEBUG: {{ img_src }} -->
              </figure>
            {%- endfor -%}
          </div>
        {%- endif -%}
      </div>
    </details>
  {%- endfor -%}
</div>
