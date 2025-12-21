---
title: About
robots: noindex, follow
nav:
  order: 1
  tooltip: About lab, research area, and facility
---

<!-- ====== About Page Styles ====== -->
<style>
  /* ============================================================
   *  🌟 Facility 튜닝 변수 (숫자만 바꾸면 전체가 따라옵니다)
   * ------------------------------------------------------------
   *  --facility-card-height : 카드 전체 높이. auto = 내용만큼 | 예: 420px
   *  --facility-max-width   : 카드 가로 최대폭
   *  --facility-grid-cols   : 기본 그리드 열 수
   *  --facility-gap         : 카드 사이 간격
   *  --facility-radius      : 카드 모서리 둥글기
   *  --facility-shadow      : 카드 그림자
   *  --facility-border      : 카드 테두리
   *
   *  --img-height           : 이미지 영역 높이 (contain)
   *  --img-padding          : 이미지 안쪽 여백
   *
   *  --cap-height           : 캡션(글자) 영역 "고정 높이". auto 로 두면 내용 높이.
   *                           → 1줄/3줄 상관없이 항상 같은 높이로 중앙 배치하려면 px로 지정하세요.
   *  --cap-min-height       : 캡션 최소 높이 (cap-height가 auto일 때 바닥 보정)
   *  --cap-padding-block    : 캡션 상하 패딩
   *  --cap-padding-inline   : 캡션 좌우 패딩
   *  --cap-line-height      : 캡션 줄 간격
   *  --cap-font-size        : 본문 폰트 크기
   *  --cap-title-weight     : 제목 굵기
   *  --cap-gap              : 제목과 부제 사이 간격 (px)
   *  --cap-sub-size         : 부제 폰트 크기
   *  --cap-sub-color        : 부제 색상
   * ============================================================ */
  :root{
    /* 레이아웃/그리드 */
    --facility-card-height: auto;     /* ex) 420px | auto */
    --facility-max-width: 360px;
    --facility-grid-cols: 3;
    --facility-gap: 14px;
    --facility-radius: 12px;
    --facility-shadow: 0 4px 14px rgba(0,0,0,.05);
    --facility-border: 1px solid #eee;

    /* 이미지 영역 */
    --img-height: 220px;
    --img-padding: 12px;

    /* 캡션(글자) 영역 */
    --cap-height: 110px;              /* 🔧 글자 영역 고정 높이 (auto 로 두면 내용만큼) */
    --cap-min-height: 80px;           /* 🔧 auto일 때 최소 확보 높이 */
    --cap-padding-block: 10px;
    --cap-padding-inline: 12px;
    --cap-line-height: 1.35;          /* 🔧 줄 간격(느낌만 조절할 때) */
    --cap-font-size: 1.2rem;
    --cap-title-weight: 600;
    --cap-gap: 4px;                   /* 🔧 제목-부제 사이 간격 */
    --cap-sub-size: 1rem;
    --cap-sub-color: #555;
  }

  /* 레이아웃 컨테이너 */
  .about-wrap{ max-width:1100px; margin:0 auto; padding:0 12px; --wrap-pad:12px; }

  /* 공통 섹션 & 제목 */
  .about-section{ margin:-2rem auto 0; }
  .about-section h2{
    font-size:1.75rem; font-weight:700; margin:0 0 1rem; text-align:center;
  }

  /* 인트로 그리드 */
  .about-intro{
    display:grid; grid-template-columns:1.1fr 1.6fr; gap:24px; align-items:start;
  }
  .about-photo{ border-radius:12px; overflow:hidden; background:#fff; box-shadow:0 6px 18px rgba(0,0,0,.08); }
  .about-photo img{ display:block; width:100%; height:auto; object-fit:cover; }
  .about-text p{ color:#333; font-size:1.02rem; line-height:1.85; margin:0 0 1rem; }

  /* Research Areas */
  .ra-grid{ display:grid; gap:14px; grid-template-columns:1fr; }
  .ra-card{
    background:#fff; border:1px solid #eee; border-radius:12px;
    padding:16px 18px; box-shadow:0 4px 14px rgba(0,0,0,.05);
  }
  .ra-card h3{ font-size:1.05rem; margin:0 0 .5rem; color:#222; }
  .ra-card ul{ margin:.4rem 0 0 1.1rem; }
  .ra-card li{ margin:.25rem 0; line-height:1.65; color:#444; }

  /* ===== Facility ===== */
  .acc-section details{ margin: 0.8rem 0 0; }
  .acc-section summary{
    list-style:none; cursor:pointer; user-select:none;
    font-size:1.75rem; font-weight:700; text-align:center; display:block;
    padding:14px; margin:0 0 1rem;
    margin-left: calc(-1 * var(--wrap-pad));
    margin-right: calc(-1 * var(--wrap-pad));
    width: calc(100% + (var(--wrap-pad) * 2));
    background:transparent; border:1px solid transparent; border-radius:8px;
    box-sizing:border-box; transition: background .25s ease, border .25s ease;
  }
  .acc-section details[open] summary{
    background:#e9e9e9; border:1px solid #e1e1e1;
  }

  .facility-grid{
    display:grid; gap: var(--facility-gap);
    grid-template-columns: repeat(var(--facility-grid-cols), minmax(0, 1fr));
    justify-items:center; /* 각 칸 안에서 카드 중앙 */
  }

  .facility-card{
    background:#fff; border:var(--facility-border); border-radius:var(--facility-radius);
    overflow:hidden; box-shadow:var(--facility-shadow);
    width:100%; max-width:var(--facility-max-width);
    display:flex; flex-direction:column;
    height: var(--facility-card-height);  /* 카드 전체 높이(고정/auto) */
  }

  /* 이미지: 고정 높이 + contain */
  .facility-card img{
    display:block; width:100%; height:var(--img-height);
    object-fit:contain; object-position:center;
    background:#fff; padding:var(--img-padding);
  }

  /* 캡션: 중앙 정렬, 고정/최소 높이 모두 지원 */
  .facility-card figcaption{
    display:flex; flex-direction:column;
    justify-content:center;             /* 세로 중앙 */
    align-items:center;                 /* 가로 중앙 */
    text-align:center;
    padding: var(--cap-padding-block) var(--cap-padding-inline);
    font-size: var(--cap-font-size);
    line-height: var(--cap-line-height);
    color:#222; border-top:1px solid #eee;

    /* 🔑 글자 영역 높이 제어 */
    height: var(--cap-height);          /* 고정 높이 (auto 가능) */
    min-height: var(--cap-min-height);  /* auto일 때 최소 보장 */
    box-sizing:border-box;
  }

  .facility-card figcaption .cap-title{
    font-weight: var(--cap-title-weight);
    margin:0;
  }
  .facility-card figcaption .cap-sub{
    display:block;                      /* br 대신 block으로 줄바꿈 통일 */
    margin-top: var(--cap-gap);         /* 제목-부제 간격 */
    font-size: var(--cap-sub-size);
    color: var(--cap-sub-color);
  }

  /* 반응형 */
  @media (max-width:1024px){
    .about-intro{ grid-template-columns:1fr; gap:16px; }
    .facility-grid{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  @media (max-width:600px){
    .facility-grid{ grid-template-columns: 1fr; }
  }

  /* Dark Mode */
  html[data-dark="true"] .about-text p { color: #fff !important; }
  html[data-dark="true"] .ra-card { background:#2a2a2a !important; border:1px solid #444 !important; }
  html[data-dark="true"] .ra-card h3,
  html[data-dark="true"] .ra-card li { color:#fff !important; }
  html[data-dark="true"] .facility-card { background:#2a2a2a !important; border:1px solid #444 !important; }
  html[data-dark="true"] .facility-card figcaption { color:#fff !important; }
  html[data-dark="true"] .facility-card figcaption .cap-sub{ color:#ddd !important; }
</style>

<div class="about-wrap">

  <!-- ===== Introduction ===== -->
  <section class="about-section">
    <h2>Introduction</h2>
    <div class="about-intro">
      <figure class="about-photo">
        <img src="{{ 'images/members/Prof/교수님.jpg' | relative_url }}" alt="Professor portrait - Growth and Aging Lab">
      </figure>
      <div class="about-text">
        <p>
          The <strong>Growth and Aging Lab</strong> advances scientific understanding of how exercise and lifestyle
          shape human growth, development, and aging. We investigate the body’s responses and adaptations to diverse
          training programs, environmental challenges, and health-related interventions across the lifespan—from youth
          to older adulthood.
        </p>
        <p>
          Bridging basic physiology with applied sports and health sciences, our work spans cardiovascular and
          neuromuscular function, recovery modalities, and performance analysis. Through multidisciplinary
          collaborations, we aim to generate evidence that supports athletic development, disease prevention,
          and healthy aging strategies.
        </p>
      </div>
    </div>
  </section>

  <!-- ===== Research Areas ===== -->
  <section class="about-section">
    <h2>Research Areas</h2>
    <div class="ra-grid">
      <div class="ra-card">
        <h3>Exercise Physiology</h3>
        <ul>
          <li>Adaptations of cardiovascular and neuromuscular systems to structured training.</li>
          <li>Influence of environmental factors and recovery modalities.</li>
        </ul>
      </div>
      <div class="ra-card">
        <h3>Cardiovascular & Vascular Health</h3>
        <ul>
          <li>Effects of exercise on heart rate regulation, vascular function, and overall health.</li>
          <li>Age- and sex-specific differences in vascular responses to training.</li>
        </ul>
      </div>
      <div class="ra-card">
        <h3>Sports Science & Performance</h3>
        <ul>
          <li>Movement, tactical, and technical analysis in athletes.</li>
          <li>Biomechanical and neuromuscular adaptations to training.</li>
        </ul>
      </div>
      <div class="ra-card">
        <h3>Health & Disease Prevention</h3>
        <ul>
          <li>Exercise interventions for obesity, sarcopenia, and metabolic health.</li>
          <li>Links between physical activity, respiratory health, and chronic disease risk.</li>
        </ul>
      </div>
      <div class="ra-card">
        <h3>Lifespan Exercise Physiology</h3>
        <ul>
          <li>Training and growth in children and adolescents.</li>
          <li>Exercise strategies for healthy aging (muscle, bone, functional capacity).</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- ===== Facility ===== -->
  <section class="about-section acc-section">
    <details>
      <summary>Facility</summary>
      <div class="facility-grid">
        {%- assign items = site.data.facility | default: empty -%}
        {%- for f in items -%}
          <figure class="facility-card">
            <img src="{{ f.image | relative_url }}" alt="{% if f.subtitle %}{{ f.title }} - {{ f.subtitle }}{% else %}{{ f.title }}{% endif %}">
            <figcaption>
              <span class="cap-title">{{ f.title }}</span>
              {% if f.subtitle %}
                <span class="cap-sub">{{ f.subtitle }}</span>
              {% endif %}
            </figcaption>
          </figure>
        {%- endfor -%}
      </div>
    </details>
  </section>

</div>
