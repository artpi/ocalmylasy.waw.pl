# Ocalmy lasy — instrukcje projektu

## Cel i zakres

To polska, niezależna kampania **Ocalmy lasy**, której głównym celem jest ochrona lasów wokół Warszawy. Zasada wyboru trasy: wykorzystanie istniejącego korytarza DK50, ograniczenie wycinki i zachowanie ciągłości kompleksów leśnych. **Wykluczenie korytarza OAW/A50 przez Kopki, Wiązownę i Otwock jest konkretnym działaniem służącym temu celowi.** Głównym CTA jest obecnie podpisanie petycji Nie Tędy Droga i Eko-Glinianka. Strona wspiera petycję, ale nie przedstawia się jako oficjalna strona tych organizacji.

Użytkownik zatwierdził szerszą markę i narrację, aby przekaz dotyczył skutków dla lasów, a nie tylko ochrony własnej miejscowości. **Nie przywracaj Kopek ani nazwy Dolina Świdra jako głównej marki/hero.** Kolejność: lasy wokół Warszawy → porównanie skutków wycinki → konkretne miejsca → DK50/S50 → wykluczenie korytarza przez Kopki → podpis. Świder, Puszcza Mazowiecka i Lasy Chojnowskie są przykładami wspólnego interesu przyrodniczego. Domena kampanii i nazwa repozytorium: **ocalmylasy.waw.pl**. Właściciel zgodził się na publiczne repozytorium. Własna domena czeka na zakończenie propagacji DNS; na razie nie ustawiaj jej w konfiguracji Pages ani nie dodawaj CNAME.

To kampania mobilizująca do ochrony konkretnych miejsc, nie neutralny przegląd wariantów drogowych. Pisz zdecydowanie: „Ocalmy”, „Nie pozwólmy”, „Żądamy wykluczenia”. Nie zaczynaj od „GDDKiA jeszcze analizuje” i nie rozmywaj wezwania do działania językiem urzędowym. Jednocześnie nie wymyślaj faktów, wycinki, decyzji, terminów ani poparcia organizacji.

Wariant blisko DK50, w standardzie S50, jest postulowaną alternatywą. Użytkownik chce także przedstawić Puszczę Mazowiecką i Lasy Chojnowskie tam, gdzie DK50 służy ich ochronie. Związek dokumentują stanowisko Puszczy Mazowieckiej z 2021 r. oraz uwagi gminy Piaseczno do SSL CPK. Opisuj je jako zbieżne postulaty, nie jako potwierdzonych partnerów obecnej kampanii. Nie twierdź, że DK50 jest pozbawiona wpływu na przyrodę ani że każdy las jest zagrożony dokładnie tym samym lokalnym wariantem.

## Rzetelność

- Rezerwat nazywa się **Świder**. Kopki to miejscowość, nie nazwa osobnego rezerwatu. Natura 2000 **Dolina Środkowego Świdra (PLH140025)** to odrębny obszar ochrony.
- „Lasy społeczne” opisuj na podstawie mapy Ministerstwa Klimatu i Środowiska. Nie utożsamiaj ich automatycznie z rezerwatem ani ustawowym zakazem budowy.
- Historyczne mapy korytarza mają datę 2021; nie opisuj ich jako ostatecznego projektu lub przebiegu budowy. Mocne wezwanie do wykluczenia korytarza nie wymaga udawania, że inwestycję już zatwierdzono.
- Nie dodawaj zagrożeń dotyczących wyłącznie innych wariantów (np. Bagna Celestynowskie) jako skutków korytarza przez Kopki.
- Nie podawaj niezweryfikowanych liczników podpisów, hektarów, kosztów ani dat protestów.
- Zatwierdzone porównanie: **171 ha** wylesienia dla korytarza czerwonego lub zielonego i **63 ha** dla przebiegu blisko DK50. Podawaj źródło przy wykresie: wyliczenia Nadleśnictwa Celestynów przytoczone w petycji. Różnica **108 ha** wynika z odejmowania, nie jest już ocaloną powierzchnią. To porównanie opisane w źródle, nie suma dla wszystkich lasów wokół Warszawy ani dowód na ranking wszystkich wariantów. Nie sumuj czerwonego i zielonego.
- Źródła i kontekst: `project-docs/SOURCES.md` oraz `project-docs/PROJECT.md`. Fakty muszą być sprawdzalne, ale przypisy nie powinny dominować nad kampanią.
- Zdjęcia mają przedstawiać prawdziwy Świder lub uczciwie podpisane lokalne lasy. Nie generuj dokumentalnych zdjęć rzekomej wycinki ani fałszywych map. Zachowuj licencje i autorstwo w `docs/credits.html`.

## Technologia i praca

- Czysty HTML, CSS i mały JavaScript; bez frameworka, bundlera, zewnętrznych skryptów, analityki i formularza zbierającego dane.
- Publikowany jest wyłącznie katalog `docs/`. Dokumentacja agentów nie trafia do artefaktu Pages.
- `docs/index.html` zawiera pełną treść i działające linki bez JavaScript.
- Główne CTA kierują do `#dzialaj`. Jedyny zewnętrzny link działania, etykieta, instrukcja i etap są w sekcji `#dzialaj` w HTML. Dzięki temu zmiana etapu kampanii jest możliwa w jednym miejscu i nie wymaga JS.
- JavaScript służy tylko stopniowemu pojawianiu się sekcji oraz udostępnianiu/kopiowaniu adresu. Uwzględnij brak Clipboard API i anulowanie natywnego udostępniania.
- Ścieżki do zasobów mają być względne: strona działa pod `/ocalmylasy.waw.pl/` na GitHub Pages i później w domenie głównej.
- Zachowuj polskie znaki, dostępność klawiaturą, kontrast, `prefers-reduced-motion`, czytelność na małych ekranach oraz działanie bez JS. Nie chowaj treści bez bezpiecznego fallbacku.
- Styl: ciemna zieleń, papierowy krem, limonkowy akcent, duża szeryfowa typografia, prawdziwe zdjęcia, przestrzeń i dyskretne animacje. Bez korporacyjnych dashboardów, przesadnego alarmizmu i ozdobników odciągających od podpisu.
- Podgląd: `node scripts/serve.mjs`, następnie `http://127.0.0.1:4175`. Serwer używa wyłącznie standardowych modułów Node.js. Grafika Open Graph: `scripts/make-share-card.py` (opcjonalnie Pillow).
- Przed publikacją obejrzyj desktop i telefon, sprawdź link petycji, nawigację, brak poziomego przewijania, udostępnianie i brak JS. Nie dodawaj testów odtwarzających tylko implementację.
- Deploy: klasyczne GitHub Pages (`build_type: legacy`), źródło `main` → `/docs`. Plik `docs/.nojekyll` wyłącza Jekyll. Nie dodawaj własnego workflow publikacji ani symlinków do repozytorium. Repozytorium `artpi/ocalmylasy.waw.pl` jest publiczne za zgodą właściciela.
- Canonical i `og:url` wskazują docelowe `https://ocalmylasy.waw.pl/`. `og:image` tymczasowo korzysta z działającego adresu GitHub Pages. Nie ustawiaj własnej domeny w GitHub ani nie dodawaj `CNAME` bez kolejnego polecenia użytkownika; przy podłączeniu domeny zaktualizuj także adres `og:image`.

## Instrukcje agentów

`AGENTS.md` jest jedynym źródłem tych instrukcji. `CLAUDE.md` jest krótkim zwykłym plikiem odsyłającym do niego. Brak symlinków jest wymaganiem publikacji Pages z brancha. Przenośne skille projektu mogą powstać w `.agents/skills`. Nie kopiuj instrukcji między klientami.
