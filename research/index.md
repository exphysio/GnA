---
title: PUBLICATIONS
robots: noindex, follow
nav:
  order: 2
  tooltip: Papers (International, Domestic), Thesis (Ph.D., M.S.)
---

# {% include icon.html icon="fa-solid fa-microscope" %}Publications
Our group contributes to the literature across disciplines, with publications and conference presentations in domestic and international venues. We encourage student-led work and provide full support for submissions by M.S. and Ph.D. students, including first-author manuscripts and conference papers.

{% include section.html %}

<style>
  /* ======================
     제목 스타일
     ====================== */
  h2.section-major {
    text-align: center;
    font-weight: 600;   
    font-size: 1.8rem;   
    margin: 2rem 0 1rem; 
    color: #333;
    text-transform: none;
    border-bottom: none !important;
    box-shadow: none !important;
    text-decoration: none !important;
    padding-bottom: 0 !important;
  }
  h2.section-major::before,
  h2.section-major::after {
    display: none !important;
  }
  h3.section-sub {
    font-weight: 600;
    font-size: 1.25rem;
    margin: 2rem 0 .75rem;
    text-transform: none;
  }

  /* ======================
     Citation 카드 기본
     ====================== */
  .citation {
    display: flex !important;
    align-items: center !important;
    gap: 16px !important;
    margin-bottom: 0.5rem;   /* 카드 간격 */
    padding: 0.3rem;         /* 카드 안 여백 */
  }

  /* 썸네일 박스 */
  .citation .citation-image {
    width: 110px !important;          /* 가로 고정 */
    flex: 0 0 110px !important;
    aspect-ratio: 3 / 4 !important;   /* 세로 직사각형 (책/저널 비율) */
    overflow: hidden !important;
    border-radius: 8px !important;
  }

 .citation .citation-image img {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain !important;   /* 👈 cover →  contain */
    background: #fff;                 /* 이미지   비율이 안 맞을 때 생기는 여백 색 */
    display: block !important;
    max-height: none !important;
    max-width: none !important;
  }


  /* 텍스트 영역 */
  .citation .citation-body {
    flex: 1 1 auto !important;
    min-width: 0 !important;          /* 줄바꿈 안정화 */
  }

  /* 🌙 Dark mode: Papers / Thesis 제목 흰색 */
  html[data-dark="true"] h2.section-major {
    color: #fff !important;
  }

  /* (선택) 모바일 대응: 썸네일 크기 축소 */
  @media (max-width: 640px) {
    .citation .citation-image {
      width: 90px !important;
      flex-basis: 90px !important;
    }
  }

  /* 저널 썸네일 박스만 전체를 살짝 오른쪽으로 */
.citation .citation-image{ margin-left: 12px !important; }

/* 모바일에서는 가운데 유지 */
@media (max-width: 640px){
  .citation .citation-image{ margin-left: 0 !important; }
}
</style>

<h2 class="section-major">Papers</h2>

<details>
  <summary style="cursor:pointer; font-weight:400; font-size:1.4rem;">
    International Papers
  </summary>

  {% include list.html data="citations" component="citation" style="rich"
     filter="kind == 'paper' && region == 'international'" %}

</details>

<details>
  <summary style="cursor:pointer; font-weight:400; font-size:1.4rem;">
    Domestic Papers
  </summary>

  {% include list.html data="citations" component="citation" style="rich"
     filter="kind == 'paper' && region == 'domestic'" %}

</details>

<h2 class="section-major">Thesis</h2>

<details>
  <summary style="cursor:pointer; font-weight:400; font-size:1.4rem;">
    Ph.D. Thesis
  </summary>

  {% include list.html data="citations" component="citation" style="rich"
     filter="kind == 'thesis' && degree == 'Ph.D.'" %}
</details>

<details>
  <summary style="cursor:pointer; font-weight:400; font-size:1.4rem;">
    M.S. Thesis
  </summary>

  {% include list.html data="citations" component="citation" style="rich"
     filter="kind == 'thesis' && degree == 'M.S.'" %}
</details>
