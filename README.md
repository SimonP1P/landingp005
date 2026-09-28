# ShadowBoard Studio – Landingpage

Statische Seite, ohne Build-Schritt. Ordner auf einen Webserver kopieren, fertig.

- `index.html` – Landingpage, `?v=a` (Standard) / `?v=b` schaltet die Headline
- `impressum.html`, `datenschutz.html` – Platzhalter „Wird ergänzt.“
- `assets/fonts/` – Inter und JetBrains Mono lokal (SIL OFL, Lizenzen liegen bei)
- Kein Tracking, keine Cookies, keine externen Schriften

## Vor dem Livegang

1. `TALLY_FORM_ID` in `index.html` (Attribut `data-tally-id`) durch die Tally-Formular-ID ersetzen.
   Im Tally-Formular ein Hidden field `variante` anlegen – die Seite übergibt `a` oder `b`.
   Tally wird erst nach Klick auf „Formular laden“ eingebunden.
2. Alle Stellen mit `ENTWURF` / `Platzhalter` (HTML-Kommentare und sichtbare Kästen) mit 02, 03, 04, 07, 08 abgleichen.
3. Gründerfoto einsetzen (Kommentar im Abschnitt „Wer dahintersteht“), Nachname eintragen.
4. Impressum und Datenschutzerklärung ergänzen (Tally als Auftragsverarbeiter nennen).
