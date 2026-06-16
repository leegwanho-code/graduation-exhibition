/* ============================================================
   전시 페이지 렌더러 — 수정할 필요 없습니다.
   각 사람의 index.html 안에 있는 CONFIG 값만 바꾸면 됩니다.
   ============================================================ */
(function () {
  "use strict";
  if (typeof CONFIG === "undefined") return;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function set(id, value, html) {
    var node = document.getElementById(id);
    if (!node) return;
    if (value == null || value === "") { node.style.display = "none"; return; }
    if (html) node.innerHTML = value; else node.textContent = value;
  }

  // 텍스트 채우기
  document.title = (CONFIG.name ? CONFIG.name + " — " : "") + (CONFIG.title || "작품 전시");
  set("eyebrow", CONFIG.eyebrow || "GRADUATION EXHIBITION");
  set("nameEn", CONFIG.nameEn);
  set("title", CONFIG.title);
  set("name", CONFIG.name);
  set("sub", CONFIG.subtitle);
  set("caption", CONFIG.caption);
  set("desc", CONFIG.description);
  set("footerName", CONFIG.name);

  // 영상 만들기
  var frame = document.getElementById("video-frame");
  var v = CONFIG.video;
  if (frame && v && (v.id || v.src)) {
    var html = "";
    if (v.type === "youtube") {
      html = '<iframe src="https://www.youtube.com/embed/' + encodeURIComponent(v.id) +
        '?rel=0&modestbranding=1" title="video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    } else if (v.type === "vimeo") {
      html = '<iframe src="https://player.vimeo.com/video/' + encodeURIComponent(v.id) +
        '" title="video" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
    } else {
      // 로컬 파일
      html = '<video src="' + esc(v.src) + '" controls playsinline preload="metadata"' +
        (v.poster ? ' poster="' + esc(v.poster) + '"' : "") + '></video>';
    }
    frame.innerHTML = html;
  }
})();
