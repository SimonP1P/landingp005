/* ShadowBoard Studio – Landingpage
   1. Headline-Variante aus ?v=a / ?v=b (Standard a), ans Formular übergeben.
   2. Tally-Formular erst nach Klick laden (keine Verbindung zu Dritten beim Seitenaufruf). */
(function () {
  "use strict";

  // ---- 1. Variante --------------------------------------------------------
  var params = new URLSearchParams(window.location.search);
  var v = (params.get("v") || "a").toLowerCase();
  if (v !== "a" && v !== "b") v = "a";
  document.documentElement.setAttribute("data-variant", v);

  var hidden = document.getElementById("variante");
  if (hidden) hidden.value = v;

  // ---- 2. Tally -----------------------------------------------------------
  // TALLY_FORM_ID durch die ID des Tally-Formulars ersetzen (z. B. "w7Xk2a").
  // Im Tally-Formular ein verstecktes Feld (Hidden field) namens "variante" anlegen.
  var slot = document.getElementById("tally-slot");
  var loadBtn = document.getElementById("tally-load");
  if (!slot || !loadBtn) return;

  var formId = slot.getAttribute("data-tally-id");
  var configured = formId && formId !== "TALLY_FORM_ID";

  if (!configured) {
    loadBtn.disabled = true;
    loadBtn.setAttribute("aria-describedby", "tally-missing");
    var missing = document.getElementById("tally-missing");
    if (missing) missing.hidden = false;
    return;
  }

  loadBtn.addEventListener("click", function () {
    var src = "https://tally.so/embed/" + encodeURIComponent(formId) +
      "?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" +
      "&variante=" + encodeURIComponent(v);
    var iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.title = "Formular: Pilotbetrieb werden";
    iframe.loading = "lazy";
    slot.innerHTML = "";
    slot.appendChild(iframe);
    iframe.focus();
  });
})();
