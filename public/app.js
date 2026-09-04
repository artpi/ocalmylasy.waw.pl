(() => {
  "use strict";

  // Core content and every campaign link work without this enhancement.
  if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((element) => {
      element.classList.add("will-reveal");
      observer.observe(element);
    });
  }

  const shareButton = document.querySelector("#share-button");
  const status = document.querySelector("#share-status");
  const fallback = document.querySelector("#share-fallback");
  if (!shareButton || !status || !fallback) return;
  shareButton.hidden = false;

  shareButton.addEventListener("click", async () => {
    const url = new URL(window.location.href);
    url.hash = "";
    url.search = "";
    const shareData = {
      title: "Ocalmy dolinę Świdra",
      text: "Nie pozwólmy przeciąć doliny Świdra autostradą. Podpisz petycję i chroń lasy wokół Warszawy.",
      url: url.href,
    };
    status.textContent = "";
    fallback.hidden = true;
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error.name === "AbortError") return;
      }
    }
    try {
      await navigator.clipboard.writeText(url.href);
      status.textContent =
        "Link skopiowany. Wyślij go komuś, kto lubi tu wracać.";
    } catch {
      fallback.value = url.href;
      fallback.hidden = false;
      fallback.focus();
      fallback.select();
      status.textContent = "Skopiuj poniższy adres i podaj go dalej.";
    }
  });
})();
