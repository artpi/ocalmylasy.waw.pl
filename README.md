# Ocalmy dolinę Świdra

Statyczna strona kampanii ochrony doliny Świdra i podwarszawskich lasów. Cel: wykluczenie korytarza OAW przez Kopki. Obecne działanie: podpis petycji popierającej S50 w śladzie zbliżonym do DK50.

## Podgląd

```sh
node scripts/serve.mjs
```

Otwórz `http://127.0.0.1:4175`. Brak instalacji zależności i procesu budowania. Serwer podglądu używa wyłącznie standardowych modułów Node.js; sama strona nie wymaga Node.js. Inny port: `PORT=4176 node scripts/serve.mjs`.

## Pliki

- `public/index.html` — treść kampanii, metadane i scentralizowana sekcja działania `#dzialaj`.
- `public/styles.css` — responsywny wygląd i animacje z obsługą ograniczenia ruchu.
- `public/app.js` — udostępnianie i stopniowe pojawianie sekcji; strona działa też bez JS.
- `public/credits.html` — źródła zdjęć i licencje.
- `docs/PROJECT.md` — założenia i rozwój kampanii.
- `docs/SOURCES.md` — źródła faktów i ich kontekst.
- `AGENTS.md` — trwałe instrukcje projektu dla agentów.
- `scripts/serve.mjs` — lokalny serwer podglądu.
- `scripts/make-share-card.py` — odtworzenie grafiki Open Graph (opcjonalnie Python z Pillow; nie jest potrzebny do publikacji).

## GitHub Pages

Workflow `.github/workflows/pages.yml` publikuje wyłącznie `public/` po pushu do `main`. W ustawieniach repozytorium wybierz **Pages → Source → GitHub Actions**. Hosting repozytorium prywatnego wymaga odpowiedniego planu GitHub; alternatywą jest upublicznienie repozytorium za zgodą właściciela.

Adres docelowy pierwszego wdrożenia: `https://artpi.github.io/dolinaswidra.pl/`. Domena własna nie jest jeszcze skonfigurowana. Przy jej podłączeniu zaktualizuj canonical i Open Graph w HTML, dodaj `CNAME` oraz konfigurację domeny w Pages i DNS.

## Aktualizacja działania

Wszystkie przyciski nawigacyjne prowadzą do `#dzialaj`. Zewnętrzny adres petycji, instrukcja i główny przycisk znajdują się w tej jednej sekcji. Przy zmianie etapu zaktualizuj także krótkie etykiety przycisków i dokumentację. Nie dodawaj drugiego adresu CTA w JavaScript.

Nie zbieramy danych osobowych. Podpisy obsługuje Petycjeonline.com. Zdjęcia i fonty są hostowane lokalnie; licencje są wymienione na stronie autorstwa.
