if (!window._easterEggLoaded) {
  window._easterEggLoaded = true;

  (function () {
    let buffer = "";
    const secret = "gna";

    function showPopup() {
      const overlay = document.createElement("div");
      overlay.style = `
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.45);
        backdrop-filter: blur(3px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: fadeIn 0.3s ease-out;
      `;

      const box = document.createElement("div");
      box.style = `
        background: white;
        padding: 25px 35px;
        border-radius: 16px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.25);
        font-size: 1.1rem;
        text-align: center;
        line-height: 1.5;
        max-width: 350px;
        animation: popIn 0.3s ease-out;
      `;

      box.innerHTML = `
        <strong style="font-size:1.3rem;">🎉 이스터에그 발견!</strong><br><br>

        <img 
          src="${window.location.origin}/KHU-GnA/images/members/Prof/교수님.jpg"
          alt="Professor"
          style="
            width: 200px;
            height: 200px;
            border-radius: 12px;  /* 네모로 변경 */
            object-fit: cover;
            margin-bottom: 18px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          "
        >

        <b style="font-size:1.15rem;">본 사이트 제작</b><br>
        정형웅(메인) · 안예진(서브) · 송지영(서브)
      `;

      overlay.appendChild(box);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => {
        overlay.style.animation = "fadeOut 0.3s ease-out";
        setTimeout(() => overlay.remove(), 250);
      });
    }

    document.addEventListener("keydown", (e) => {
      buffer += e.key.toLowerCase();
      if (buffer.length > secret.length) {
        buffer = buffer.slice(buffer.length - secret.length);
      }
      if (buffer === secret) {
        showPopup();
        buffer = "";
      }
    });

    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }
      @keyframes popIn {
        0% { transform: scale(0.8); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  })();
}
