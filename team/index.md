---
title: Team
robots: noindex, follow
nav:
  order: 4
  tooltip: About our team
---

<style>
  /* ===== 전역 값 (숫자만 바꾸면 전체 반영) ===== */
  :root{
    --grid-max: 1080px;
    --card-min: 260px;
    --card-gap: 28px;          /* 카드-카드 간격 */
    --card-pad: 18px;          /* 카드 내부 패딩 */
    --card-radius: 12px;
    --card-shadow: 0 2px 10px rgba(0,0,0,.06);

    --photo-w: 150px;          /* 사진 가로폭(세로는 자동 3:4) */
    --title-size: 1.1rem;      /* 이름 글자 크기 */
    --text-size: .97rem;       /* 본문 글자 크기 */

    --title-color: #1c283a;
    --accent: #9b3607;         /* 라벨 색상 */

    /* ▼ 간격/줄간격 조절 포인트 */
    --edu-to-ri-gap: 12px;     /* Education 섹터 ↔ Research 섹터 사이 여백 */
    --ri-gap: 4px;             /* Research 라벨 ↔ 목록 사이 여백(아주 작게 붙임) */
    --li-gap: 2px;             /* 불릿 항목 사이 여백(위·아래) */
    --li-line: 1.4;            /* 불릿 항목 줄간격 */
  }

  /* ===== 카드 그리드 ===== */
  .team-cite{
    display:grid !important;
    grid-template-columns:repeat(auto-fit, minmax(var(--card-min), 1fr));
    gap:var(--card-gap);
    max-width:var(--grid-max);
    margin:0 auto;
  }

  /* ===== 카드 컨테이너 ===== */
  .team-cite .citation-container{
    border:1px solid #eee;
    box-shadow:var(--card-shadow);
    border-radius:var(--card-radius);
    padding:var(--card-pad);
    background:#fff;
    text-align:center;
  }

  /* ===== 카드 내부 스택 ===== */
  .team-cite .citation{
    display:flex !important;
    flex-direction:column !important;
    align-items:center !important;
    gap:12px;
    padding:0; margin:0 !important; border:0; box-shadow:none;
    text-align:center;
  }

  /* ===== 사진 (3:4) ===== */
  .team-cite .citation-image{
    width:var(--photo-w) !important;
    height:calc(var(--photo-w) * 4 / 3) !important;
    display:grid; place-items:center;
    overflow:hidden; border-radius:10px;
    background:#f6f7f9;
    flex:0 0 auto !important;
  }
  .team-cite .citation-image img{ width:100%; height:100%; object-fit:cover; display:block !important; }

  /* ===== 이름 ===== */
  .team-cite .citation-title{
    font-size:var(--title-size);
    font-weight:700;
    color:var(--title-color) !important;
    margin:6px 0 2px 0 !important;
    line-height:1.25;
    text-align:center;
  }

  /* ===== description(파서 적용 전 폴백) ===== */
  .team-cite .citation-description{
    font-size:var(--text-size);
    color:#3a3a3a !important;
    line-height:1.6;
    margin:0 !important;
    width:100%;
    text-align:center;
  }

  /* ===== 라벨 ===== */
  .team-cite .label{
    font-weight:700;
    color:var(--accent);
    text-align:center;
    line-height:1.25;
  }

  .team-cite .program-text{
    margin:6px 0 12px;
    color:#555;
    font-size:.95rem;
    line-height:1.35;
  }

  /* ===== 섹터(블록) 여백 규칙 ===== */
  .team-cite .edu-block .label{ margin:2px 0 0 0; }   /* Education 라벨 ↔ 내용: 붙임 */
  .team-cite .edu-block .edu-text{ margin:0; }

  .team-cite .ri-block{ margin-top: var(--edu-to-ri-gap); }  /* 섹터 간(교육→리서치) 간격 */
  .team-cite .ri-block .label{ margin:0; }                   /* 라벨 자체 여백 제거 */

  /* ===== Research interest 목록(불릿) =====
     - 중앙 배치 유지하면서 항목은 좌정렬 → 줄바꿈도 글머리표 기준으로 정렬
     - 라벨과 목록 사이를 ri-gap 만큼만 띄움(아주 촘촘) */
  .team-cite ul.interest{
    list-style: disc outside;
    margin: var(--ri-gap) 0 0 0;
    padding: 0 0 0 1.1em;     /* 불릿 들여쓰기 */
    display: inline-block;    /* 블록 자체는 가운데 */
    text-align: left;         /* 항목은 좌정렬(줄바꿈 정렬 예쁘게) */
  }
  .team-cite ul.interest li{
    margin: var(--li-gap) 0;
    line-height: var(--li-line);
  }

  /* ===== 다크모드 ===== */
  html[data-dark="true"] .team-cite .citation-container{ background:#1b1b1b; border-color:rgba(255,255,255,.15); box-shadow:none; }
  html[data-dark="true"] .team-cite .citation-title{ color:#fff !important; }
  html[data-dark="true"] .team-cite .citation-description{ color:#ddd !important; }
  html[data-dark="true"] .team-cite .program-text{ color:#bbb !important; }
  html[data-dark="true"] .team-cite .label,
  html[data-dark="true"] .team-cite ul.interest{ color:#ddd !important; }

  /* ===== 템플릿이 뿌리는 불필요 메타 숨김 ===== */
  .team-cite .citation-details,
  .team-cite .citation-meta,
  .team-cite .citation-publisher,
  .team-cite .citation-date,
  .team-cite .citation-id,
  .team-cite .citation-details .separator,
  .team-cite .citation-details span:empty{ display:none !important; }
  .team-cite .citation-description p:empty{ display:none !important; }

  details{ border:none; background:none; box-shadow:none; padding:0; margin:0 0 1.25rem 0; }
  summary{ border:none; background:none; padding:0; margin:0; }

  .student-group{
    margin:18px 0 32px;
  }
  .student-group:last-child{
    margin-bottom:8px;
  }
  .student-subhead{
    display:flex;
    align-items:center;
    gap:10px;
    max-width:var(--grid-max);
    margin:18px auto 14px;
    color:#1c283a;
    font-size:1.05rem;
    font-weight:700;
    line-height:1.35;
  }
  .student-subhead::before{
    content:"";
    width:6px;
    height:22px;
    border-radius:999px;
    background:var(--accent);
    flex:0 0 auto;
  }
  .student-count{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    min-width:28px;
    height:24px;
    padding:0 9px;
    border-radius:999px;
    background:#f1e7e1;
    color:var(--accent);
    font-size:.82rem;
    font-weight:700;
  }
  .student-empty{
    max-width:var(--grid-max);
    margin:0 auto;
    padding:16px 18px;
    border:1px dashed #ddd;
    border-radius:10px;
    color:#777;
    font-size:.95rem;
    background:#fafafa;
  }
  html[data-dark="true"] .student-subhead{ color:#eee; }
  html[data-dark="true"] .student-count{ background:rgba(255,255,255,.12); color:#f1d0bd; }
  html[data-dark="true"] .student-empty{ background:#1b1b1b; border-color:rgba(255,255,255,.18); color:#bbb; }
</style>

<h2 style="font-weight:600; font-size:1.8rem; color:#333;">Current Students</h2>

<!-- ✅ Ph.D. Students -->
<details>
  <summary style="cursor:pointer; font-weight:400; font-size:1.2rem;">Ph.D. Students</summary>
  {% assign phd_completed = site.members | where_exp: "m", "m.role == 'phd' and m.coursework == 'completed'" | sort_natural: "path" %}
  {% assign phd_students = site.members | where_exp: "m", "m.role == 'phd' and m.coursework != 'completed'" | sort_natural: "path" %}

  <section class="student-group">
    <h3 class="student-subhead">Ph.D. Candidates <span class="student-count">{{ phd_completed.size }}</span></h3>
    {% if phd_completed.size > 0 %}
      <div class="team-cite">
        {% for m in phd_completed %}
          {% capture phd_desc -%}
            {% if m.program %}Program: {{ m.program }}<br/>{% endif %}
            {{ m.affiliation }}{% if m.interest %}<br/>{{ m.interest }}{% endif %}
          {%- endcapture %}
          {% include citation.html style="rich" title=m.name description=phd_desc image=m.image nolink=true %}
        {% endfor %}
      </div>
    {% else %}
      <p class="student-empty">No Ph.D. candidates listed yet.</p>
    {% endif %}
  </section>

  <section class="student-group">
    <h3 class="student-subhead">Ph.D. Students <span class="student-count">{{ phd_students.size }}</span></h3>
    <div class="team-cite">
      {% for m in phd_students %}
        {% capture phd_desc -%}
          {% if m.program %}Program: {{ m.program }}<br/>{% endif %}
          {{ m.affiliation }}{% if m.interest %}<br/>{{ m.interest }}{% endif %}
        {%- endcapture %}
        {% include citation.html style="rich" title=m.name description=phd_desc image=m.image nolink=true %}
      {% endfor %}
    </div>
  </section>
</details>

<!-- ✅ M.S. Students -->
<details>
  <summary style="cursor:pointer; font-weight:400; font-size:1.2rem;">M.S. Students</summary>
  {% assign ms_students = site.members | where_exp: "m", "m.role == 'ms' and m.coursework != 'completed'" | sort_natural: "path" %}

  <section class="student-group">
    <h3 class="student-subhead">M.S. Students <span class="student-count">{{ ms_students.size }}</span></h3>
    <div class="team-cite">
      {% for m in ms_students %}
        {% capture ms_desc -%}
          {% if m.program %}Program: {{ m.program }}<br/>{% endif %}
          {{ m.affiliation }}{% if m.interest %}<br/>{{ m.interest }}{% endif %}
        {%- endcapture %}
        {% include citation.html style="rich" title=m.name description=ms_desc image=m.image nolink=true %}
      {% endfor %}
    </div>
  </section>
</details>

<!-- Undergraduate Researchers -->
<details>
  <summary style="cursor:pointer; font-weight:400; font-size:1.2rem;">Undergraduate Researchers</summary>
  {% assign undergraduate_researchers = site.members | where_exp: "m", "m.role == 'undergraduate' or m.role == 'undergrad'" | sort_natural: "path" %}

  <section class="student-group">
    <h3 class="student-subhead">Undergraduate Researchers <span class="student-count">{{ undergraduate_researchers.size }}</span></h3>
    {% if undergraduate_researchers.size > 0 %}
      <div class="team-cite">
        {% for m in undergraduate_researchers %}
          {% capture undergraduate_desc -%}
            {% if m.program %}Program: {{ m.program }}<br/>{% endif %}
            {{ m.affiliation }}{% if m.interest %}<br/>{{ m.interest }}{% endif %}
          {%- endcapture %}
          {% include citation.html style="rich" title=m.name description=undergraduate_desc image=m.image nolink=true %}
        {% endfor %}
      </div>
    {% else %}
      <p class="student-empty">No undergraduate researchers listed yet.</p>
    {% endif %}
  </section>
</details>

<h2 style="font-weight:600; font-size:1.8rem; color:#333;">Alumni</h2>

<!-- ✅ Ph.D. Graduates -->
<details>
  <summary style="cursor:pointer; font-weight:400; font-size:1.2rem;">Ph.D. Graduates</summary>
  <div class="team-cite">
    {% assign phd_alumni = site.members | where: "role", "alumni" | where: "degree", "phd" | sort_natural: "path" %}
    {% for m in phd_alumni %}
      {% capture phd_alumni_desc -%}
        {% if m.program %}Program: {{ m.program }}<br/>{% endif %}
        {{ m.affiliation }}{% if m.interest %}<br/>{{ m.interest }}{% endif %}
      {%- endcapture %}
      {% include citation.html style="rich" title=m.name description=phd_alumni_desc image=m.image nolink=true %}
    {% endfor %}
  </div>
</details>

<!-- ✅ M.S. Graduates -->
<details>
  <summary style="cursor:pointer; font-weight:400; font-size:1.2rem;">M.S. Graduates</summary>
  <div class="team-cite">
    {% assign ms_alumni = site.members | where: "role", "alumni" | where: "degree", "master" | sort_natural: "path" %}
    {% for m in ms_alumni %}
      {% capture ms_alumni_desc -%}
        {% if m.program %}Program: {{ m.program }}<br/>{% endif %}
        {{ m.affiliation }}{% if m.interest %}<br/>{{ m.interest }}{% endif %}
      {%- endcapture %}
      {% include citation.html style="rich" title=m.name description=ms_alumni_desc image=m.image nolink=true %}
    {% endfor %}
  </div>
</details>

<script>
/* =========================================================
 * description 파서
 * - Education: 라벨 + 일반 텍스트(불릿 X, 라벨과 붙임)
 * - Research interest: 불릿(•) 목록(라벨과 붙임)
 * - 두 섹터는 서로 떨어짐(edu→ri는 --edu-to-ri-gap)
 * ========================================================= */
(function(){
  const nodes = document.querySelectorAll('.team-cite .citation-description');
  nodes.forEach(el => {
    const raw = el.innerHTML;
    if (!raw) return;

    const parts = raw.split(/<br\s*\/?>/i).map(s => s.trim()).filter(Boolean);
    if (!parts.length) return;

    const program = [];
    const edu = [];
    const ri  = [];
    let mode = '';

    parts.forEach(line => {
      let m = line.match(/^Program\s*:?\s*(.*)$/i);
      if (m){ mode = 'program'; if (m[1]) program.push(m[1]); return; }

      m = line.match(/^Education\s*:?\s*(.*)$/i);
      if (m){ mode = 'edu'; if (m[1]) edu.push(m[1]); return; }

      m = line.match(/^Research\s*interest\s*:?\s*(.*)$/i);
      if (m){
        mode = 'ri';
        if (m[1]) m[1].split(/\s*,\s*|\s*·\s*/).forEach(v => v && ri.push(v));
        return;
      }

      if (mode === 'program'){ program.push(line); return; }
      if (mode === 'edu'){ edu.push(line); return; }
      if (mode === 'ri'){
        const segs = line.split(/\s*,\s*|\s*·\s*/).filter(Boolean);
        ri.push(...(segs.length ? segs : [line]));
      }
    });

    if (!program.length && !edu.length && !ri.length) return;

    const chunks = [];
    if (program.length){
      chunks.push(
        '<div class="program-text">' + program.join('<br/>') + '</div>'
      );
    }
    if (edu.length){
      chunks.push(
        '<div class="edu-block">' +
          '<div class="label">Education</div>' +
          '<div class="edu-text">'+ edu.join('<br/>') +'</div>' +
        '</div>'
      );
    }
    if (ri.length){
      chunks.push(
        '<div class="ri-block">' +
          '<div class="label">Research interest</div>' +
          '<ul class="interest">' + ri.map(x => `<li>${x}</li>`).join('') + '</ul>' +
        '</div>'
      );
    }
    el.innerHTML = chunks.join('');
  });
})();
</script>
