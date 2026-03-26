(function () {
  const content = window.PORTFOLIO_CONTENT;

  if (!content) {
    return;
  }

  const mailtoLink = `mailto:${content.site.email}?subject=${encodeURIComponent(content.site.emailSubject)}`;

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = value;
    }
  };

  const setHtml = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) {
      element.innerHTML = value;
    }
  };

  document.querySelectorAll("[data-site-name]").forEach((element) => {
    element.textContent = content.site.name;
  });

  document.querySelectorAll("[data-site-initial]").forEach((element) => {
    element.textContent = content.site.initial;
  });

  document.querySelectorAll("[data-email-link]").forEach((element) => {
    element.setAttribute("href", mailtoLink);
  });

  setText("#hero-eyebrow", content.hero.eyebrow);
  setText("#hero-title", content.hero.title);
  setText("#hero-summary", content.hero.summary);
  setText("#hero-primary-cta", content.hero.primaryCtaLabel);
  setText("#hero-secondary-cta", content.hero.secondaryCtaLabel);
  setText("#hero-note", content.hero.note);

  setHtml(
    "#hero-badges",
    content.hero.badges.map((item) => `<li>${item}</li>`).join("")
  );

  setHtml(
    "#hero-list",
    content.hero.quickList.map((item) => `<li>${item}</li>`).join("")
  );

  setText("#services-intro", content.services.intro);
  setHtml(
    "#primary-services",
    content.services.primary
      .map(
        (service) => `
          <article class="service-card">
            <span class="card-label">${service.label}</span>
            <h3>${service.title}</h3>
            <p>${service.summary}</p>
            <ul class="card-sublist">
              ${service.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
            </ul>
          </article>
        `
      )
      .join("")
  );

  setHtml(
    "#secondary-services",
    content.services.secondary.map((item) => `<li>${item}</li>`).join("")
  );

  setText("#work-intro", content.work.intro);
  setHtml(
    "#selected-work",
    content.work.items
      .map(
        (item) => `
          <article class="work-card">
            <span class="card-label">${item.label}</span>
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
            <div class="tag-row">
              ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <div class="work-meta">
              <strong>Why it matters</strong>
              <p>${item.takeaway}</p>
            </div>
            <a class="card-link" href="${item.url}" target="_blank" rel="noreferrer">
              Open sample
              <span aria-hidden="true">↗</span>
            </a>
          </article>
        `
      )
      .join("")
  );

  setHtml(
    "#additional-sample",
    `${content.work.additionalSampleLabel}: <a href="${content.work.additionalSampleUrl}" target="_blank" rel="noreferrer">Open additional note sample</a>`
  );

  setHtml(
    "#reasons",
    content.reasons
      .map(
        (item) => `
          <article class="reason-card">
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
          </article>
        `
      )
      .join("")
  );

  setText("#about-title", content.about.title);
  setHtml(
    "#about-copy",
    content.about.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")
  );

  setText("#contact-title", content.contact.title);
  setText("#contact-summary", content.contact.summary);
  setText("#contact-note", content.contact.note);
  setText("#contact-cta", content.contact.ctaLabel);
  setText("#contact-email", content.site.email);
  setHtml(
    "#contact-links",
    content.contact.links
      .map(
        (item) => `
          <li>
            <a href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a>
          </li>
        `
      )
      .join("")
  );

  setText("#footer-copy", content.site.footerCopy);
  setText("#footer-year", String(new Date().getFullYear()));
})();
