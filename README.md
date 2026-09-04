# Ocalmy lasy wokół Warszawy

Statyczna strona kampanii **Ocalmy lasy**. Cel: ochrona zielonego pierścienia Warszawy poprzez ograniczenie wycinki i nowych przecięć lasów. Strona pokazuje porównanie 171 ha i 63 ha wylesienia, przedstawia Świder, Puszczę Mazowiecką oraz Lasy Chojnowskie i prowadzi do petycji za S50 bliżej DK50. Wykluczenie korytarza przez Kopki jest konkretnym postulatem służącym ochronie lasów.

## Podgląd

```sh
node scripts/serve.mjs
```

Otwórz `http://127.0.0.1:4175`. Brak instalacji zależności i procesu budowania. Serwer podglądu używa wyłącznie standardowych modułów Node.js; sama strona nie wymaga Node.js. Inny port: `PORT=4176 node scripts/serve.mjs`.

## Pliki

- `docs/index.html` — treść kampanii, metadane i scentralizowana sekcja działania `#dzialaj`.
- `docs/styles.css` — responsywny wygląd i animacje z obsługą ograniczenia ruchu.
- `docs/app.js` — udostępnianie i stopniowe pojawianie sekcji; strona działa też bez JS.
- `docs/credits.html` — źródła zdjęć i licencje.
- `project-docs/PROJECT.md` — założenia i rozwój kampanii.
- `project-docs/SOURCES.md` — źródła faktów i ich kontekst.
- `AGENTS.md` — trwałe instrukcje projektu dla agentów.
- `scripts/serve.mjs` — lokalny serwer podglądu.
- `scripts/make-share-card.py` — odtworzenie grafiki Open Graph (opcjonalnie Python z Pillow; nie jest potrzebny do publikacji).

## GitHub Pages

Repozytorium: [artpi/ocalmylasy.waw.pl](https://github.com/artpi/ocalmylasy.waw.pl), publiczne. Publikacja odbywa się automatycznie z brancha: **Settings → Pages → Deploy from a branch → main → /docs** (`build_type: legacy`). Nie ma własnego workflow. `docs/.nojekyll` pozwala serwować zwykły HTML bez Jekylla. GitHub może pokazywać własny systemowy proces „pages build and deployment” w zakładce Actions — to część publikacji z brancha.

Aktualny adres strony: **https://artpi.github.io/ocalmylasy.waw.pl/**.

Domena docelowa: **https://ocalmylasy.waw.pl/**. Użytkownik polecił poczekać z jej podłączeniem w GitHub do zakończenia propagacji DNS. Pole Custom domain pozostaje puste, a repozytorium nie zawiera `CNAME`. Canonical i `og:url` są już przygotowane dla nowej domeny; grafika `og:image` ładuje się z GitHub Pages. Przy późniejszym podłączeniu domeny ustaw ją w Pages, dodaj `docs/CNAME`, sprawdź HTTPS i przestaw `og:image`.

## Aktualizacja działania

Wszystkie przyciski nawigacyjne prowadzą do `#dzialaj`. Zewnętrzny adres petycji, instrukcja i główny przycisk znajdują się w tej jednej sekcji. Przy zmianie etapu zaktualizuj także krótkie etykiety przycisków i dokumentację. Nie dodawaj drugiego adresu CTA w JavaScript.

Nie zbieramy danych osobowych. Podpisy obsługuje Petycjeonline.com. Zdjęcia i fonty są hostowane lokalnie; licencje są wymienione na stronie autorstwa.
