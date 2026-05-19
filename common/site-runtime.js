(function () {
  const config = Object.freeze({
    brandText: "ALFA LED EKRAN",
    headerLogoAsset: "/common/header-logo-white.svg",
    logoAsset: "/common/alfa-logo-legacy.svg",
    routes: {
      home: "/",
      news: "/news/",
      works: "/works/",
      rent: "/kiralayin/",
      about: "/about/",
      sales: "/satin-alin/",
      contact: "/contact/",
      privacy: "/privacypolicy/",
      license: "/license/",
    },
    labels: {
      home: "Ana Sayfa",
      news: "Teknik Rehber",
      works: "Projeler",
      rent: "Kiralayın",
      about: "Hakkımızda",
      sales: "Satın Alın",
      contact: "İletişim",
      privacy: "Gizlilik Politikasi",
      license: "Kullanim Sartlari",
    },
    pageMeta: {
      home: {
        title: "ALFA LED EKRAN | LED Ekran Kiralama ve Satış",
        description:
          "ALFA LED EKRAN; konser, fuar, lansman ve kurumsal etkinlikler için LED ekran kiralama, ürün satın alma talepleri için panel ve kontrol sistemi seçenekleri sunar.",
      },
      works: {
        title: "Projeler | ALFA LED EKRAN",
        description:
          "ALFA LED EKRAN projelerini sahne, festival, otel ve kurumsal uygulama referanslarıyla inceleyin.",
      },
      about: {
        title: "Hakkımızda | ALFA LED EKRAN",
        description:
          "ALFA LED EKRAN; kiralama, ürün satışı ve kalıcı kurulum başlıklarını ayrı planlayan sahne teknolojisi partneridir.",
      },
      sales: {
        title: "Satın Alın | ALFA LED EKRAN",
        description:
          "LED ekran ürün satın alma talepleri için ALFA LED EKRAN ürün vitrini.",
      },
      rent: {
        title: "Kiralayın | ALFA LED EKRAN",
        description:
          "Konser, fuar, lansman, kurumsal davet ve açık hava organizasyonları için LED ekran kiralama çözümleri.",
      },
      contact: {
        title: "İletişim | ALFA LED EKRAN",
        description:
          "ALFA LED EKRAN ile iletişime geçin. Kiralama projeleri ve LED ekran ürün talepleri için bize ulaşın.",
      },
      news: {
        title: "Haberler | ALFA LED EKRAN",
        description:
          "ALFA LED EKRAN'dan güncellemeler, duyurular ve proje notları.",
      },
      license: {
        title: "Lisanslar | ALFA LED EKRAN",
        description:
          "ALFA LED EKRAN web sitesinde kullanilan acik kaynak lisanslari ve ucuncu taraf paket listesi.",
      },
    },
    worksProjects: [
      {
        id: "pepsi-kibris",
        title: "Pepsi Kıbrıs",
        dateLabel: "LED EKRAN",
        isoDate: "2025-04-01",
        categories: ["Kiralama"],
        poster: "/works/media/projects/showcase/posters/pepsi-kibris.jpg",
        video: "/works/media/projects/showcase/pepsi-kibris.mp4",
        summary:
          "Marka etkinliği için yüksek görünürlüklü LED ekran kurulumu, hızlı saha akışı ve temiz görüntü yönetimi.",
      },
      {
        id: "vadiacikhava-derya-ulug",
        title: "Vadi Açıkhava - Derya Uluğ",
        dateLabel: "SAHNE LED",
        isoDate: "2025-03-01",
        categories: ["Konser"],
        poster: "/works/media/projects/showcase/posters/vadiacikhava-derya-ulug.jpg",
        video: "/works/media/projects/showcase/vadiacikhava-derya-ulug.mp4",
        summary:
          "Açıkhava konserinde sahne etkisini büyüten LED yüzey, canlı yayın ve seyirci görüşü için dengeli kurulum.",
      },
      {
        id: "etkinlik",
        title: "Etkinlik Kurulumu",
        dateLabel: "KİRALAMA",
        isoDate: "2025-05-01",
        categories: ["Etkinlik"],
        poster: "/works/media/projects/showcase/posters/etkinlik.jpg",
        video: "/works/media/projects/showcase/etkinlik.mp4",
        summary:
          "Kurumsal etkinlik ve saha operasyonlarında taşınabilir LED ekran, teknik ekip ve yayın kontrol desteği.",
      },
      {
        id: "decathlon",
        title: "Decathlon",
        dateLabel: "MARKA DENEYİMİ",
        isoDate: "2025-07-01",
        categories: ["Kiralama"],
        poster: "/works/media/projects/showcase/posters/decathlon.jpg",
        video: "/works/media/projects/showcase/decathlon.mp4",
        summary:
          "Perakende marka deneyimi için net, parlak ve dikkat çeken LED ekran kiralama uygulaması.",
      },
    ],
    newsFeed: [
      {
        number: "01",
        title: "2026 Sezon Hazirliklari",
        body:
          "Acik hava konserleri, festival sahalari ve buyuk etkinlikler icin kiralama takvimi erken planlaniyor. Ekip, tasima ve yedek panel organizasyonu yeni sezon oncesi guncellendi.",
        image: "/works/media/projects/posters/04.jpg",
        alt: "2026 sezon hazirliklari",
      },
      {
        number: "02",
        title: "Kurumsal Mekan Kurulumlari",
        body:
          "Otel, showroom, cephe ve sabit alan projelerinde olculendirme, montaj ve yayin kontrol akisini tek ekipte topluyoruz. Proje sureci daha net ve daha hizli ilerliyor.",
        image: "/works/media/projects/posters/05.jpg",
        alt: "Kurumsal mekan kurulumlari",
      },
      {
        number: "03",
        title: "Saha Operasyon Disiplini",
        body:
          "Kurulum gunu enerji, rigging, kablolama ve yayin testi adimlarini sahaya cikmadan once netlestiriyoruz. Boylece sahada hiz kazanip surpriz riskleri azaltmis oluyoruz.",
        image: "/works/media/projects/posters/02.jpg",
        alt: "Saha operasyon disiplini",
      },
    ],
  });
  const routes = config.routes || {};
  const labels = config.labels || {};
  const headerLogoAsset = config.headerLogoAsset || "/common/header-logo-white.svg";
  const logoAsset = config.logoAsset || "/common/alfa-logo-legacy.svg";
  const worksProjects = Array.isArray(config.worksProjects)
    ? config.worksProjects
    : [];
  const newsFeed = Array.isArray(config.newsFeed) ? config.newsFeed : [];
  const styleId = "alfa-site-runtime-style";
  const modalId = "alfa-works-modal";
  const runtimeState = {
    initScheduled: false,
    lastInitToken: "",
    routeLoadingInstalled: false,
    routeLoadingTimer: 0,
    routeLoadingFrame: 0,
  };

  function primeHomeScrollRestoration() {
    const path = window.location.pathname.replace(/\/+/g, "/");
    const isHome = path === "/" || path === "/index.html";
    if (!isHome || window.location.hash) return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    let active = true;
    const restoreTimers = [];
    const getInitialTargetY = () => 0;
    const correctInitialSection = () => {
      if (!active || !document.body) return;
      if (window.scrollY > Math.max(4, window.innerHeight * 0.1)) return;
      document.body.setAttribute("data-current_section", "kv");
    };
    const resetTop = () => {
      if (!active) return;
      const initialTargetY = getInitialTargetY();
      window.scrollTo(0, initialTargetY);
      if (window.lenis && typeof window.lenis.scrollTo === "function") {
        window.lenis.scrollTo(initialTargetY, {
          immediate: true,
          force: true,
        });
      }
      correctInitialSection();
    };
    const release = () => {
      active = false;
      restoreTimers.forEach((id) => window.clearTimeout(id));
    };
    const scheduleReset = (delay) => {
      restoreTimers.push(
        window.setTimeout(() => {
          resetTop();
        }, delay)
      );
    };

    resetTop();
    document.addEventListener("DOMContentLoaded", resetTop, { once: true });
    window.addEventListener(
      "load",
      () => {
        resetTop();
        window.requestAnimationFrame(resetTop);
        scheduleReset(220);
      },
      { once: true }
    );
    window.addEventListener(
      "pageshow",
      (event) => {
        if (event.persisted) window.requestAnimationFrame(resetTop);
      },
      { once: true }
    );
    window.addEventListener("wheel", release, { once: true, passive: true });
    window.addEventListener("touchstart", release, {
      once: true,
      passive: true,
    });
    window.addEventListener("scroll", release, { once: true, passive: true });
    window.addEventListener("keydown", release, { once: true });
  }

  primeHomeScrollRestoration();

  function injectStyles() {
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .Header__brandText {
        display: inline-block;
        font-family: acumin-pro-wide, acumin-pro, sans-serif;
        font-weight: 700;
        font-size: 15px;
        line-height: 1;
        letter-spacing: 0.24em;
        color: #fff;
        white-space: nowrap;
      }

      .Header__nav_item a,
      .Header__nav_item span,
      .SideMenu__brand_text,
      .SideMenu__menu_item a,
      .SideMenu__menu_item span {
        font-family: acumin-pro-wide, acumin-pro, sans-serif;
        font-weight: 700;
        letter-spacing: 0.18em;
      }

      .Header__nav_item a {
        display: inline-flex;
        align-items: center;
        font-size: 13px;
        line-height: 1;
        text-transform: uppercase;
      }

      .AlfaRouteLoading {
        position: fixed;
        inset: 0;
        z-index: 2147483000;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        color: #fff;
        background:
          radial-gradient(circle at 50% 20%, rgba(34, 211, 238, 0.22), transparent 32%),
          radial-gradient(circle at 18% 80%, rgba(37, 99, 235, 0.2), transparent 30%),
          linear-gradient(135deg, #020617 0%, #07111f 48%, #020617 100%);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: opacity 0.28s ease, visibility 0.28s ease;
        isolation: isolate;
      }

      .AlfaRouteLoading[data-visible="true"] {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }

      .AlfaRouteLoading::before {
        content: "";
        position: absolute;
        inset: 0;
        opacity: 0.09;
        background-image:
          linear-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.35) 1px, transparent 1px);
        background-size: 42px 42px;
      }

      .AlfaRouteLoading__panel {
        position: relative;
        z-index: 1;
        display: grid;
        width: min(72vw, 288px);
        gap: 24px;
        justify-items: center;
      }

      .AlfaRouteLoading__mark {
        display: grid;
        width: 160px;
        height: 160px;
        place-items: center;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 24px;
        background: rgba(255, 255, 255, 0.035);
        box-shadow: 0 28px 80px rgba(8, 47, 73, 0.4);
        backdrop-filter: blur(18px);
      }

      .AlfaRouteLoading__mark img {
        width: 92px;
        height: auto;
        filter: drop-shadow(0 0 28px rgba(34, 211, 238, 0.72));
        animation: alfa-route-loading-pulse 2.4s ease-in-out infinite;
      }

      .AlfaRouteLoading__copy {
        margin: 0;
        font-family: acumin-pro-wide, acumin-pro, sans-serif;
        font-size: 12px;
        font-weight: 700;
        line-height: 1;
        letter-spacing: 0.24em;
        text-align: center;
        text-transform: uppercase;
      }

      .AlfaRouteLoading__track {
        width: 100%;
        height: 2px;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.14);
      }

      .AlfaRouteLoading__fill {
        width: 0%;
        height: 100%;
        background: linear-gradient(90deg, #67e8f9, #fff);
        box-shadow: 0 0 18px rgba(34, 211, 238, 0.72);
      }

      @keyframes alfa-route-loading-pulse {
        0%, 100% {
          transform: scale(1);
        }

        50% {
          transform: scale(1.04);
        }
      }

      @media not screen and (min-width: 769px) {
        body[data-page="contact"] .PageContact__content,
        body[data-page="contact"] .PageContact__lead,
        body[data-page="contact"] .PageContact__actions,
        body[data-page="contact"] .PageContact__title,
        body[data-page="contact"] .PageContact__body,
        body[data-page="contact"] .PageContact__form,
        body[data-page="contact"] .PageContact__action {
          width: calc(100vw - 50px) !important;
          max-width: calc(100vw - 50px) !important;
          min-width: 0 !important;
          box-sizing: border-box !important;
        }

        body[data-page="contact"] .PageContact__title {
          font-size: clamp(24px, 6.7vw, 29px) !important;
          line-height: 1.1 !important;
          overflow-wrap: anywhere !important;
          white-space: normal !important;
        }

        body[data-page="contact"] .PageContact__body {
          overflow-wrap: anywhere !important;
          white-space: normal !important;
        }
      }

      .SideMenu__menu_item a {
        font-size: 13px;
        line-height: 1;
        text-transform: uppercase;
      }

      .SideMenu__brand {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        width: max-content;
        max-width: 100%;
        margin: 0 0 34px 0;
        color: #fff;
        text-decoration: none;
      }

      .SideMenu__brand_logo {
        display: block;
        width: 24px;
        height: auto;
        flex: 0 0 auto;
      }

      .SideMenu__brand_text {
        display: inline-block;
        color: #fff;
        font-size: 15px;
        line-height: 1;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        white-space: nowrap;
      }

      .SideMenu__overlay {
        z-index: 1600;
      }

      .SideMenu__overlay[data-open="true"] {
        visibility: visible;
      }

      .SideMenu__hamburger {
        z-index: 1602;
        pointer-events: auto;
      }

      .Footer__top {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        align-items: start;
        gap: 0;
      }

      .Footer__top_links {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        align-items: start;
        justify-content: start;
        gap: 0;
      }

      .Footer__top_links .Footer__column {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        gap: 12px 18px;
      }

      .Footer__top_links .Footer__pageLink:not(:last-child)::after {
        content: "|";
        margin-left: 18px;
        color: rgba(255, 255, 255, 0.46);
      }

      .Footer__column,
      .Footer__linkList,
      .Footer__social,
      .Footer__top_contact {
        gap: 14px;
      }

      .Footer__pageLink,
      .Footer__linksTitle,
      .Footer__linkList .Footer__link,
      .Footer__contact_button_text,
      .Footer__privacyLicense_link {
        color: #fff;
        font-family: acumin-pro-wide, acumin-pro, sans-serif;
        font-size: 13px;
        font-weight: 700;
        line-height: 1;
        letter-spacing: 0.18em;
        text-transform: uppercase;
      }

      .Footer__linksTitle {
        align-items: center;
        margin: 0;
      }

      .Footer__linkList .Footer__link,
      .Footer__privacyLicense_link {
        text-decoration: none;
      }

      .Footer__pageLink:hover,
      .Footer__linkList .Footer__link:hover,
      .Footer__contact_button:hover .Footer__contact_button_text,
      .Footer__privacyLicense_link:hover {
        color: #fff;
        opacity: 0.7;
      }

      @media not screen and (min-width: 769px) {
        .SideMenu__menu {
          background:
            radial-gradient(circle at 82% 18%, rgba(60, 130, 255, 0.18), transparent 34%),
            linear-gradient(180deg, rgba(3, 7, 12, 0.96), rgba(0, 0, 0, 0.98));
        }

        .SideMenu__menu_inner {
          justify-content: center;
          gap: 10px;
          padding: 96px 28px 128px;
          height: 100%;
          box-sizing: border-box;
        }

        .SideMenu__menu_item {
          padding-left: 18px;
        }

        .SideMenu__brand {
          margin-bottom: 36px;
        }

        .SideMenu__brand_logo {
          width: 25px;
        }

        .SideMenu__brand_text {
          font-size: clamp(13px, 3.6vw, 16px);
          letter-spacing: 0.22em;
        }

        .SideMenu__menu_item a {
          font-size: clamp(18px, 6vw, 28px);
          line-height: 1.04;
          letter-spacing: 0.16em;
          padding: 9px 0;
        }

        .SideMenu__social_links {
          left: 28px;
          right: 28px;
          bottom: 30px;
          justify-content: flex-start;
          gap: 16px 22px;
        }

        .SideMenu__social_link {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .Footer__footer {
          padding: 34px 0 26px;
          overflow: hidden;
          background: #000;
        }

        .Footer__top,
        .Footer__top_links {
          display: grid;
          grid-template-columns: 1fr !important;
          gap: 22px;
          padding-left: 20px;
          padding-right: 20px;
        }

        .Footer__top_links {
          grid-template-columns: 1fr !important;
          align-items: start;
        }

        .Footer__column {
          min-width: 0;
          gap: 11px;
        }

        .Footer__top_links .Footer__column {
          flex-direction: row;
          gap: 10px 12px;
        }

        .Footer__top_links .Footer__pageLink:not(:last-child)::after {
          margin-left: 12px;
        }

        .Footer__column[data-type="links"] {
          grid-column: 1 / -1;
        }

        .Footer__linkList,
        .Footer__social,
        .Footer__top_contact {
          flex-direction: column;
          align-items: flex-start;
          gap: 11px;
        }

        .Footer__contact,
        .Footer__privacyLicense {
          display: grid;
          grid-template-columns: 1fr;
          gap: 11px;
          width: 100%;
        }

        .Footer__pageLink,
        .Footer__linksTitle,
        .Footer__linkList .Footer__link,
        .Footer__contact_button_text,
        .Footer__privacyLicense_link {
          display: inline-flex;
          max-width: 100%;
          font-size: 11px;
          line-height: 1.35;
          letter-spacing: 0.14em;
          white-space: normal;
          overflow-wrap: anywhere;
        }

        .Footer__linksTitle_arrow,
        .Footer__contact_button_icon {
          display: none;
        }

        .Footer__copyright {
          padding: 0 20px;
          margin-top: 28px;
          text-align: left;
          font-size: 14px;
          letter-spacing: 0.1em;
        }

        .Footer__logo {
          display: none;
        }
      }

      .Header__logo a {
        display: inline-flex;
        align-items: center;
        gap: 12px;
      }

      .AlfaSiteLogo {
        display: block;
        width: min(28px, 28px);
        height: auto;
      }

      .TopPageOutro__logo img,
      .TopPageOutro__logo svg {
        display: block;
        width: 100%;
        height: auto;
        filter:
          drop-shadow(0 0 18px rgba(255, 255, 255, 0.26))
          drop-shadow(0 0 42px rgba(255, 255, 255, 0.16))
          drop-shadow(0 0 24px rgba(244, 211, 94, 0.14));
      }

      .TopPageOutro__wrapper {
        position: relative;
        overflow: hidden;
      }

      .TopPageOutro__screen {
        position: relative;
        min-height: 100vh;
        background:
          radial-gradient(circle at 50% 42%, rgba(255, 255, 255, 0.18), transparent 24%),
          radial-gradient(circle at 50% 58%, rgba(244, 211, 94, 0.12), transparent 34%),
          linear-gradient(180deg, #0a0e14 0%, #05080d 54%, #010204 100%);
        box-shadow:
          inset 0 0 0 1px rgba(255, 255, 255, 0.09),
          inset 0 0 90px rgba(64, 130, 190, 0.13),
          inset 0 0 160px rgba(0, 0, 0, 0.8);
      }

      .TopPageOutro__screen::before,
      .TopPageOutro__screen::after {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
      }

      .TopPageOutro__screen::before {
        background-image:
          radial-gradient(circle, rgba(255, 255, 255, 0.18) 0 1px, transparent 1.35px),
          linear-gradient(rgba(255, 255, 255, 0.075) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.065) 1px, transparent 1px),
          repeating-linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.06) 0,
            rgba(255, 255, 255, 0.06) 1px,
            transparent 1px,
            transparent 7px
          );
        background-size: 9px 9px, 48px 48px, 48px 48px, 100% 7px;
        opacity: 0.34;
        mix-blend-mode: screen;
        mask-image: radial-gradient(circle at center, #000 20%, rgba(0, 0, 0, 0.86) 52%, transparent 82%);
        -webkit-mask-image: radial-gradient(circle at center, #000 20%, rgba(0, 0, 0, 0.86) 52%, transparent 82%);
      }

      .TopPageOutro__screen::after {
        background:
          linear-gradient(90deg, rgba(255, 255, 255, 0.06), transparent 12%, transparent 88%, rgba(255, 255, 255, 0.06)),
          radial-gradient(circle at 50% 36%, rgba(255, 255, 255, 0.16), transparent 18%),
          radial-gradient(circle at 50% 58%, rgba(244, 211, 94, 0.14), transparent 34%),
          radial-gradient(circle at center, transparent 42%, rgba(0, 0, 0, 0.52) 100%);
        opacity: 0.92;
        mix-blend-mode: screen;
      }

      .TopPageOutro__canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        opacity: 0.98;
        filter: brightness(1.14) contrast(1.08) saturate(1.12);
      }

      .TopPageOutro__screen_inner {
        position: relative;
        z-index: 1;
      }

      .TopPageOutro__logo {
        position: relative;
        filter:
          drop-shadow(0 0 8px rgba(255, 255, 255, 0.55))
          drop-shadow(0 0 22px rgba(244, 211, 94, 0.32))
          drop-shadow(0 0 46px rgba(93, 176, 255, 0.18));
      }

      .TopPageOutro__logo::before {
        content: "";
        position: absolute;
        inset: -18% -12%;
        border-radius: 28px;
        background:
          radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.22), transparent 46%),
          radial-gradient(circle at 50% 50%, rgba(244, 211, 94, 0.1), transparent 58%);
        filter: blur(12px);
        opacity: 0.9;
        z-index: -1;
      }

      .TopPageOutro__logo::after {
        content: "";
        position: absolute;
        inset: -6%;
        pointer-events: none;
        background:
          radial-gradient(circle, rgba(255, 255, 255, 0.6) 0 1px, transparent 1.55px),
          repeating-linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.16) 0,
            rgba(0, 0, 0, 0.16) 1px,
            transparent 1px,
            transparent 6px
          );
        background-size: 7px 7px, 100% 6px;
        mix-blend-mode: screen;
        opacity: 0.38;
        mask-image: radial-gradient(circle at center, #000 0%, rgba(0, 0, 0, 0.94) 48%, transparent 74%);
        -webkit-mask-image: radial-gradient(circle at center, #000 0%, rgba(0, 0, 0, 0.94) 48%, transparent 74%);
      }

      body[data-alfa-loading-hidden="true"] #loading-overlay,
      #loading-overlay[data-hidden] {
        display: none !important;
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
      }

      .AlfaWorksModal[hidden] {
        display: none !important;
      }

      .AlfaWorksModal {
        position: fixed;
        inset: 0;
        z-index: 1400;
      }

      .AlfaWorksModal__backdrop {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.72);
        backdrop-filter: blur(8px);
      }

      .AlfaWorksModal__dialog {
        position: relative;
        z-index: 1;
        width: min(1080px, calc(100vw - 32px));
        margin: min(7vh, 48px) auto;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(6, 9, 14, 0.96);
        box-shadow: 0 28px 80px rgba(0, 0, 0, 0.4);
      }

      .AlfaWorksModal__media {
        aspect-ratio: 16 / 9;
        background: #000;
      }

      .AlfaWorksModal__media video {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: contain;
        background: #000;
      }

      .AlfaWorksModal__content {
        display: grid;
        gap: 14px;
        padding: 24px;
      }

      .AlfaWorksModal__meta {
        color: rgba(255, 255, 255, 0.62);
        font-family: "IBM Plex Mono", monospace;
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .AlfaWorksModal__title {
        margin: 0;
        color: #fff;
        font-size: clamp(28px, 4vw, 48px);
        line-height: 0.98;
        letter-spacing: 0;
      }

      .AlfaWorksModal__summary {
        margin: 0;
        color: rgba(255, 255, 255, 0.78);
        font-size: 16px;
        line-height: 1.6;
      }

      .AlfaWorksModal__actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
      }

      .AlfaWorksModal__action,
      .AlfaWorksModal__close {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 44px;
        padding: 0 16px;
        border: 1px solid rgba(255, 255, 255, 0.14);
        color: #fff;
        background: transparent;
        text-decoration: none;
        font: inherit;
      }

      .AlfaWorksModal__action {
        border-color: rgba(214, 170, 99, 0.42);
      }

      .AlfaWorksModal__trigger {
        display: block;
      }

      .PageWorks__category_item[data-active="true"] .PageWorks__category_item_name,
      .PageWorks__category_item[data-active="true"] .PageWorks__category_item_count {
        opacity: 1;
      }

      .PageWorks__category_item_name,
      .PageWorks__category_item_count {
        transition: opacity 0.2s ease;
      }

      @media (max-width: 768px) {
        .AlfaWorksModal__dialog {
          width: calc(100vw - 20px);
          margin: 10px auto;
        }

        .AlfaWorksModal__content {
          padding: 18px;
        }

        .AlfaWorksModal__actions {
          flex-direction: column;
          align-items: stretch;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizeHref(href) {
    if (!href) return null;
    const raw = href.trim();
    if (
      raw.startsWith("#") ||
      raw.startsWith("mailto:") ||
      raw.startsWith("tel:") ||
      raw.startsWith("javascript:")
    ) {
      return null;
    }

    let path = "";
    try {
      path = new URL(raw, window.location.href).pathname.replace(/\/+/g, "/");
    } catch (error) {
      return null;
    }

    if (/^\/(?:index\.html)?$/i.test(path)) return routes.home;
    if (/\/(?:news|teknik-rehber)(?:\/index\.html)?\/?$/i.test(path)) return routes.news;
    if (/\/works(?:\/index\.html)?\/?$/i.test(path)) return routes.works;
    if (/\/kiralayin(?:\/index\.html)?\/?$/i.test(path)) return routes.rent;
    if (/\/about(?:\/index\.html)?\/?$/i.test(path)) return routes.about;
    if (/\/(?:satin-alin|kiralama-satis|stellla)(?:\/index\.html)?\/?$/i.test(path)) {
      return routes.sales;
    }
    if (/\/contact(?:\/index\.html)?\/?$/i.test(path)) return routes.contact;
    return null;
  }

  function normalizeLinks(scope) {
    scope.querySelectorAll("a[href]").forEach((link) => {
      const normalized = normalizeHref(link.getAttribute("href"));
      if (!normalized) return;

      link.setAttribute("href", normalized);

      if (
        normalized === routes.home ||
        normalized === routes.sales ||
        normalized === routes.rent ||
        normalized === routes.news ||
        normalized === routes.works ||
        normalized === routes.about ||
        normalized === routes.contact
      ) {
        link.setAttribute("data-no-swup", "");
      }
    });
  }

  function normalizeHeaderNav() {
    const nav = document.querySelector(".Header__nav");
    if (nav) {
      nav.innerHTML = `
        <div class="Header__nav_item" data-page="works">
          <a data-no-swup href="${escapeHtml(routes.works)}"><span>${escapeHtml(labels.works)}</span></a>
        </div>
        <div class="Header__nav_item" data-page="rent">
          <a data-no-swup href="${escapeHtml(routes.rent)}"><span>${escapeHtml(labels.rent)}</span></a>
        </div>
        <div class="Header__nav_item" data-page="sales">
          <a data-no-swup href="${escapeHtml(routes.sales)}"><span>${escapeHtml(labels.sales)}</span></a>
        </div>
        <div class="Header__nav_item" data-page="news">
          <a data-no-swup href="${escapeHtml(routes.news)}"><span>${escapeHtml(labels.news)}</span></a>
        </div>
        <div class="Header__nav_item" data-page="about">
          <a data-no-swup href="${escapeHtml(routes.about)}"><span>${escapeHtml(labels.about)}</span></a>
        </div>
      `;
    }

    const contactButton = document.querySelector(".Header__contact");
    if (contactButton) {
      contactButton.setAttribute("href", routes.contact);
      contactButton.setAttribute("data-no-swup", "");
    }
  }

  function normalizeSideMenu() {
    const menuInner = document.querySelector(".SideMenu__menu_inner");
    if (menuInner) {
      menuInner.innerHTML = `
        <a class="SideMenu__brand" href="/" data-no-swup aria-label="ALFA LED EKRAN ana sayfa">
          <img class="SideMenu__brand_logo" src="/common/header-logo-white.svg" alt="">
          <span class="SideMenu__brand_text">ALFA LED EKRAN</span>
        </a>
        <div class="SideMenu__menu_item">
          <a data-no-swup href="${escapeHtml(routes.works)}"><span>${escapeHtml(labels.works)}</span></a>
        </div>
        <div class="SideMenu__menu_item">
          <a data-no-swup href="${escapeHtml(routes.rent)}"><span>${escapeHtml(labels.rent)}</span></a>
        </div>
        <div class="SideMenu__menu_item">
          <a data-no-swup href="${escapeHtml(routes.sales)}"><span>${escapeHtml(labels.sales)}</span></a>
        </div>
        <div class="SideMenu__menu_item">
          <a data-no-swup href="${escapeHtml(routes.news)}"><span>${escapeHtml(labels.news)}</span></a>
        </div>
        <div class="SideMenu__menu_item">
          <a data-no-swup href="${escapeHtml(routes.about)}"><span>${escapeHtml(labels.about)}</span></a>
        </div>
        <div class="SideMenu__menu_item">
          <a data-no-swup href="${escapeHtml(routes.contact)}"><span>${escapeHtml(labels.contact)}</span></a>
        </div>
      `;
    }

    const socialLinks = document.querySelector(".SideMenu__social_links");
    if (socialLinks) {
      socialLinks.innerHTML = `
        <a href="mailto:info@alfaledekran.com?subject=Kiralama%20Talebi" target="_blank" rel="noopener noreferrer" class="SideMenu__social_link">
          <span>Kiralama</span>
        </a>
        <a href="mailto:info@alfaledekran.com?subject=Satis%20Talebi" target="_blank" rel="noopener noreferrer" class="SideMenu__social_link">
          <span>Satis</span>
        </a>
        <a href="mailto:info@alfaledekran.com?subject=Kalici%20Kurulum%20Talebi" target="_blank" rel="noopener noreferrer" class="SideMenu__social_link">
          <span>Kalici Kurulum</span>
        </a>
      `;
    }
  }

  function installSideMenuControls() {
    const overlay = document.querySelector("[data-side-menu]");
    const hamburger = document.querySelector("[data-hamburger]");
    const backdrop = document.querySelector("[data-backdrop]");
    if (!overlay || !hamburger) return;

    const setOpen = (open) => {
      overlay.setAttribute("data-open", open ? "true" : "false");
      hamburger.setAttribute("data-open", open ? "true" : "false");
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body?.setAttribute("data-side-menu-open", open ? "true" : "false");
      if (document.body && window.matchMedia?.("(max-width: 768px)")?.matches) {
        document.body.style.overflow = open ? "hidden" : "";
      }
    };

    const open = () => setOpen(true);
    const close = () => setOpen(false);
    const toggle = (event) => {
      event?.preventDefault?.();
      event?.stopPropagation?.();
      setOpen(overlay.getAttribute("data-open") !== "true");
    };

    window.AlfaOpenSideMenu = open;
    window.AlfaCloseSideMenu = close;

    if (document.body?.dataset.page === "top") {
      if (!overlay.hasAttribute("data-open")) setOpen(false);
      return;
    }

    if (overlay.dataset.menuControlsReady === "true") return;
    overlay.dataset.menuControlsReady = "true";
    hamburger.addEventListener("click", toggle);
    backdrop?.addEventListener("click", close);
    overlay.addEventListener("click", (event) => {
      const link = event.target?.closest?.(".SideMenu__menu_item a");
      if (link) close();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && overlay.getAttribute("data-open") === "true") close();
    });
    setOpen(false);
  }

  function normalizeFooter() {
    const topLinks = document.querySelector(".Footer__top_links");
    if (topLinks) {
      topLinks.innerHTML = `
        <div class="Footer__column">
          <a class="Footer__pageLink" href="${escapeHtml(
            routes.works
          )}" data-scramble data-no-swup>${escapeHtml(labels.works)}</a>
          <a class="Footer__pageLink" href="${escapeHtml(
            routes.rent
          )}" data-scramble data-no-swup>${escapeHtml(labels.rent)}</a>
          <a class="Footer__pageLink" href="${escapeHtml(
            routes.sales
          )}" data-scramble data-no-swup>${escapeHtml(labels.sales)}</a>
          <a class="Footer__pageLink" href="${escapeHtml(
            routes.news
          )}" data-scramble data-no-swup>${escapeHtml(labels.news)}</a>
          <a class="Footer__pageLink" href="${escapeHtml(
            routes.about
          )}" data-scramble data-no-swup>${escapeHtml(labels.about)}</a>
          <a class="Footer__pageLink" href="${escapeHtml(
            routes.contact
          )}" data-scramble data-no-swup>${escapeHtml(labels.contact)}</a>
        </div>
      `;
    }

    const topContact = document.querySelector(".Footer__top_contact");
    if (topContact) {
      topContact.innerHTML = "";
    }

    const footerLogo = document.querySelector(".Footer__logo img");
    if (footerLogo) {
      footerLogo.setAttribute("src", logoAsset);
      footerLogo.setAttribute("alt", config.brandText || "ALFA LED EKRAN");
    }
  }

  function normalizeLegacyMarkers() {
    document
      .querySelectorAll(".Stellla__main_logo_link")
      .forEach((link) => {
        link.setAttribute("href", routes.rent);
        link.setAttribute("data-no-swup", "");
      });
  }

  function patchCommonText() {
    const body = document.body;
    if (!body) return;

    const brandAnchor = document.querySelector(".Header__logo a");
    const currentLogo = brandAnchor?.querySelector(".AlfaSiteLogo");
    const currentLogoSrc = currentLogo?.getAttribute("src") || "";
    if (
      brandAnchor &&
      (
        !currentLogo ||
        /logo-render\.png/i.test(currentLogoSrc) ||
        !brandAnchor.querySelector(".Header__brandText")
      ) &&
      !brandAnchor.querySelector("model-viewer") &&
      !brandAnchor.querySelector("#header-logo-3d")
    ) {
      brandAnchor.innerHTML =
        '<img class="AlfaSiteLogo" src="' +
        escapeHtml(headerLogoAsset) +
        '" alt="' +
        escapeHtml(config.brandText || "ALFA LED EKRAN") +
        '">' +
        '<span class="Header__brandText">' +
        escapeHtml(config.brandText || "ALFA LED EKRAN") +
        "</span>";
    }

    [
      [".Header__nav_item[data-page='works'] span", labels.works],
      [".Header__nav_item[data-page='rent'] span", labels.rent],
      [".Header__nav_item[data-page='about'] span", labels.about],
      [".Header__nav_item[data-page='sales'] span", labels.sales],
      [".Header__nav_item[data-page='news'] span", labels.news],
      [".SideMenu__menu_item a[href='/'] span", labels.home],
      [".Header__contact .SlotButton__text", labels.contact],
      [".Header__contact .SlotButton__text_hover", labels.contact],
    ].forEach(([selector, text]) => {
      document.querySelectorAll(selector).forEach((node) => {
        node.textContent = text;
      });
    });

    document.querySelectorAll(".SideMenu__menu_item a").forEach((anchor) => {
      const href = anchor.getAttribute("href") || "";
      const span = anchor.querySelector("span");
      if (!span) return;
      if (href === routes.home) span.textContent = labels.home;
      if (href === routes.works) span.textContent = labels.works;
      if (href === routes.rent) span.textContent = labels.rent;
      if (href === routes.about) span.textContent = labels.about;
      if (href === routes.sales) span.textContent = labels.sales;
      if (href === routes.contact) span.textContent = labels.contact;
      if (href === routes.news) span.textContent = labels.news;
    });

    document.querySelectorAll(".Footer__pageLink").forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (href === routes.home) link.textContent = labels.home;
      if (href === routes.works) link.textContent = labels.works;
      if (href === routes.rent) link.textContent = labels.rent;
      if (href === routes.about) link.textContent = labels.about;
      if (href === routes.sales) link.textContent = labels.sales;
      if (href === routes.contact) link.textContent = labels.contact;
      if (href === routes.news) link.textContent = labels.news;
    });

    const footerCopy = document.querySelector(".Footer__copyright");
    if (footerCopy) footerCopy.textContent = "©2026 ALFA LED EKRAN.";
  }

  function patchMeta() {
    const path = window.location.pathname;
    let pageKey = "home";
    if (path.startsWith(routes.works)) pageKey = "works";
    else if (path.startsWith(routes.rent)) pageKey = "rent";
    else if (path.startsWith(routes.about)) pageKey = "about";
    else if (path.startsWith(routes.sales) || path.startsWith("/kiralama-satis/")) pageKey = "sales";
    else if (path.startsWith(routes.contact)) pageKey = "contact";
    else if (path.startsWith(routes.news)) pageKey = "news";
    else if (path.startsWith(routes.license)) pageKey = "license";

    const meta = config.pageMeta && config.pageMeta[pageKey];
    if (!meta) return;

    if (meta.title) document.title = meta.title;

    [
      ["meta[name='description']", meta.description],
      ["meta[property='og:title']", meta.title],
      ["meta[property='og:description']", meta.description],
      ["meta[name='twitter:title']", meta.title],
      ["meta[name='twitter:description']", meta.description],
    ].forEach(([selector, value]) => {
      if (!value) return;
      const node = document.querySelector(selector);
      if (node) node.setAttribute("content", value);
    });
  }

  function ensureWorksModal() {
    let modal = document.getElementById(modalId);
    if (modal) return modal;

    modal = document.createElement("div");
    modal.id = modalId;
    modal.className = "AlfaWorksModal";
    modal.hidden = true;
    modal.innerHTML = `
      <div class="AlfaWorksModal__backdrop" data-alfa-close-modal></div>
      <div class="AlfaWorksModal__dialog" role="dialog" aria-modal="true" aria-labelledby="alfa-works-modal-title">
        <div class="AlfaWorksModal__media">
          <video playsinline controls muted preload="metadata"></video>
        </div>
        <div class="AlfaWorksModal__content">
          <div class="AlfaWorksModal__meta" data-alfa-meta></div>
          <h3 class="AlfaWorksModal__title" id="alfa-works-modal-title"></h3>
          <p class="AlfaWorksModal__summary" data-alfa-summary></p>
          <div class="AlfaWorksModal__actions">
            <a class="AlfaWorksModal__action" href="${escapeHtml(
              routes.contact || "/contact/"
            )}">Benzer işi konuşalım</a>
            <button class="AlfaWorksModal__close" type="button" data-alfa-close-modal>Kapat</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener("click", (event) => {
      if (event.target.closest("[data-alfa-close-modal]")) {
        closeWorksModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !modal.hidden) {
        closeWorksModal();
      }
    });

    return modal;
  }

  function closeWorksModal() {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    const video = modal.querySelector("video");
    if (video) {
      video.pause();
      video.removeAttribute("src");
      video.load();
    }
    modal.hidden = true;
    document.body.setAttribute("data-modal", "false");
  }

  function openWorksModal(projectId) {
    const project = worksProjects.find((item) => item.id === projectId);
    if (!project) return;

    const modal = ensureWorksModal();
    const video = modal.querySelector("video");
    const meta = modal.querySelector("[data-alfa-meta]");
    const title = modal.querySelector("#alfa-works-modal-title");
    const summary = modal.querySelector("[data-alfa-summary]");

    if (!video || !meta || !title || !summary) return;

    meta.textContent = project.dateLabel + " / " + project.categories.join(", ");
    title.textContent = project.title;
    summary.textContent = project.summary;

    video.setAttribute("poster", project.poster);
    video.src = project.video;
    video.currentTime = 0;
    modal.hidden = false;
    document.body.setAttribute("data-modal", "true");
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  }

  function renderWorksList() {
    const list = document.getElementById("works-list");
    if (!list) return;

    const signature = worksProjects.map((item) => item.id).join("|");
    const isSourceOwned = list.dataset.sourceOwned === "true";
    if (!isSourceOwned && list.dataset.alfaWorksSignature === signature) {
      bindWorksListEvents(list);
      return;
    }

    if (!isSourceOwned) {
      list.innerHTML = worksProjects
        .map((project) => {
          const categoryText = "[" + project.categories.join(", ") + "]";
          const categoryAttr = project.categories.join("|");
          return `
            <li data-work-categories="${escapeHtml(categoryAttr)}">
              <div class="WorksListItem__container">
                <a href="${escapeHtml(project.video)}" class="AlfaWorksModal__trigger" data-work-video="${escapeHtml(project.id)}">
                  <figure class="WorksListItem__thumbnail">
                    <img class="GLImage__img" src="${escapeHtml(project.poster)}" alt="${escapeHtml(project.title)}" />
                  </figure>
                  <div class="WorksListItem__info">
                    <div class="WorksListItem__group">
                      <time class="WorksListItem__date" datetime="${escapeHtml(project.isoDate)}">${escapeHtml(project.dateLabel)}</time>
                      <p class="WorksListItem__category">${escapeHtml(categoryText)}</p>
                    </div>
                    <h3 class="WorksListItem__title">${escapeHtml(project.title)}</h3>
                  </div>
                </a>
              </div>
            </li>
          `;
        })
        .join("");
    }

    list.dataset.alfaWorksSignature = signature;
    bindWorksListEvents(list);
  }

  function bindWorksListEvents(list) {
    if (list.dataset.alfaEventsReady === "true") return;
    list.dataset.alfaEventsReady = "true";
    list.addEventListener("click", (event) => {
      const link = event.target.closest("[data-work-video]");
      if (!link) return;
      event.preventDefault();
      openWorksModal(link.getAttribute("data-work-video"));
    });
  }

  function renderWorksCategories() {
    const categoryList = document.querySelector(".PageWorks__category_list");
    if (!categoryList) return;
    if (categoryList.dataset.alfaReady === "true") {
      bindWorksCategoryEvents(categoryList);
      return;
    }

    const isSourceOwned = categoryList.dataset.sourceOwned === "true";

    if (!isSourceOwned) {
      const counts = worksProjects.reduce(
        (acc, project) => {
          project.categories.forEach((category) => {
            acc[category] = (acc[category] || 0) + 1;
          });
          return acc;
        },
        { ALL: worksProjects.length }
      );
      const categories = ["ALL"].concat(
        Object.keys(counts).filter((key) => key !== "ALL")
      );

      categoryList.innerHTML = categories
        .map((category, index) => {
          const label = category === "ALL" ? "Tüm Projeler" : category;
          const count = counts[category] || 0;
          return `
            <li class="PageWorks__category_item" data-active="${
              index === 0 ? "true" : "false"
            }">
              <a href="#works-list" data-works-filter="${escapeHtml(category)}">
                <span class="PageWorks__category_item_name">${escapeHtml(label)}</span>
                <span class="PageWorks__category_item_count">[${count}]</span>
              </a>
            </li>
          `;
        })
        .join("");
    }

    categoryList.dataset.alfaReady = "true";
    bindWorksCategoryEvents(categoryList);
  }

  function bindWorksCategoryEvents(categoryList) {
    if (categoryList.dataset.alfaEventsReady === "true") return;
    categoryList.dataset.alfaEventsReady = "true";
    categoryList.addEventListener("click", (event) => {
      const filterLink = event.target.closest("[data-works-filter]");
      if (!filterLink) return;
      event.preventDefault();
      applyWorksFilter(filterLink.getAttribute("data-works-filter"));
    });
  }

  function applyWorksFilter(filter) {
    document
      .querySelectorAll(".PageWorks__category_item")
      .forEach((item) => item.setAttribute("data-active", "false"));

    const active = Array.from(
      document.querySelectorAll("[data-works-filter]")
    ).find((node) => node.getAttribute("data-works-filter") === filter);
    if (active) {
      const item = active.closest(".PageWorks__category_item");
      if (item) item.setAttribute("data-active", "true");
    }

    document.querySelectorAll("#works-list > li").forEach((item) => {
      const categories = (item.getAttribute("data-work-categories") || "")
        .split("|")
        .filter(Boolean);
      item.hidden = filter !== "ALL" && !categories.includes(filter);
    });
  }

  function patchWorksPage() {
    const body = document.body;
    const path = window.location.pathname.replace(/\/+/g, "/");
    if (
      !body ||
      body.dataset.page !== "works" ||
      !/^\/works(?:\/index\.html)?\/?$/i.test(path)
    ) {
      return;
    }

    const title = document.querySelector(".PageWorks__head");
    if (title) title.textContent = labels.works;

    renderWorksCategories();
    renderWorksList();
    applyWorksFilter("ALL");
  }

  function initWorksTitleBand() {
    const containers = document.querySelectorAll(".Works__container");
    if (!containers.length) return;

    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches || false;

    containers.forEach((container) => {
      if (!container || container.dataset.worksTitleBound === "true") return;

      const scroll = container.querySelector(".Works__scroll");
      const titleNode = container.querySelector("[data-works-active-title]");
      const summaryNode = container.querySelector("[data-works-active-summary]");
      const items = Array.from(
        container.querySelectorAll(".Works__scroll_item[data-work-title]")
      );
      if (!scroll || !titleNode || !items.length) return;

      container.dataset.worksTitleBound = "true";

      let lastTitle = "";
      let rafId = 0;

      const revealTitle = (title, summary) => {
        const nextTitle = (title || "").trim();
        if (!nextTitle || nextTitle === lastTitle) return;
        lastTitle = nextTitle;
        titleNode.dataset.activeTitle = nextTitle;
        titleNode.textContent = nextTitle;
        if (summaryNode) {
          summaryNode.textContent = (summary || "").trim();
        }

        if (!window.gsap || reduceMotion) return;

        window.gsap.killTweensOf(titleNode);
        titleNode.style.opacity = "0";
        titleNode.style.filter = "blur(8px) brightness(1.3) saturate(1.1)";
        window.gsap.to(titleNode, {
          opacity: 1,
          y: 0,
          filter: "blur(0px) brightness(1) saturate(1)",
          duration: 0.45,
          ease: "power2.out",
        });
      };

      const update = () => {
        rafId = 0;
        const scrollBox = scroll.getBoundingClientRect();
        const scrollCenter = scrollBox.top + scrollBox.height * 0.58;

        let activeTitle = items[0].dataset.workTitle || "";
        let activeSummary = items[0].dataset.workSummary || "";
        let smallestDistance = Infinity;

        items.forEach((item) => {
          const box = item.getBoundingClientRect();
          const center = box.top + box.height * 0.5;
          const distance = Math.abs(center - scrollCenter);
          if (distance < smallestDistance) {
            smallestDistance = distance;
            activeTitle = item.dataset.workTitle || activeTitle;
            activeSummary = item.dataset.workSummary || activeSummary;
          }
        });

        revealTitle(activeTitle, activeSummary);
      };

      const scheduleUpdate = () => {
        if (rafId) return;
        rafId = window.requestAnimationFrame(update);
      };

      const resizeObserver =
        typeof ResizeObserver !== "undefined" ? new ResizeObserver(scheduleUpdate) : null;

      scroll.addEventListener("scroll", scheduleUpdate, { passive: true });
      window.addEventListener("resize", scheduleUpdate, { passive: true });
      document.addEventListener("astro:after-swap", scheduleUpdate);
      document.addEventListener("swup:contentReplaced", scheduleUpdate);
      if (resizeObserver) resizeObserver.observe(scroll);

      scheduleUpdate();
    });
  }

  function primeHomeWorksInitialState() {
    const body = document.body;
    if (!body || body.dataset.page !== "top") return false;

    const container = document.querySelector("[data-works-container]");
    if (!container) return false;

    const list = container.querySelector(".Works__list");
    const items = Array.from(container.querySelectorAll("[data-works_item]"));
    if (list && items.length) {
      list.style.opacity = "1";
      list.style.visibility = "visible";
      list.style.pointerEvents = "none";

      items.forEach((item, index) => {
        item.style.opacity = index === 0 ? "1" : "0";
        item.style.visibility = index === 0 ? "visible" : "hidden";
        item.style.pointerEvents = index === 0 ? "auto" : "none";
      });
    }

    const scrollItems = Array.from(
      container.querySelectorAll(".Works__scroll_item[data-work-title]")
    );
    const titleNode = container.querySelector("[data-works-active-title]");
    const summaryNode = container.querySelector("[data-works-active-summary]");
    if (!scrollItems.length || !titleNode) {
      body.setAttribute("data-works-primed", "true");
      return items.length > 0;
    }

    const firstTitle =
      scrollItems[0]?.getAttribute("data-work-title") || "";
    const firstSummary = scrollItems[0]?.getAttribute("data-work-summary") || "";

    titleNode.textContent = firstTitle.trim();
    titleNode.dataset.activeTitle = firstTitle.trim();
    titleNode.style.opacity = "1";
    titleNode.style.filter = "blur(0px)";
    titleNode.style.visibility = "visible";

    if (summaryNode) {
      summaryNode.textContent = firstSummary;
      summaryNode.style.opacity = "1";
      summaryNode.style.visibility = "visible";
    }

    body.setAttribute("data-works-primed", "true");
    return true;
  }

  function redirectLegacyWorksSubpages() {
    const path = window.location.pathname.replace(/\/+/g, "/");

    if (/^\/works\/stellla(?:\/index\.html)?\/?$/i.test(path)) {
      window.location.replace(routes.sales || "/satin-alin/");
      return true;
    }

    if (
      /^\/works\/(?:cloud(?:%20| )rendering|fortnite|metaverse|mobile|unreal_engine|vr)(?:\/index\.html)?\/?$/i.test(
        path
      ) ||
      /^\/works\/detail\/[^/]+(?:\/index\.html)?\/?$/i.test(path)
    ) {
      window.location.replace(routes.works || "/works/");
      return true;
    }

    return false;
  }

  function patchContactPage() {
    const body = document.body;
    if (!body || body.dataset.page !== "contact") return;

    const inner = document.querySelector(".PageContact__inner");
    if (!inner) return;
    if (inner.dataset.sourceOwned === "true") return;

    inner.innerHTML = `
      <div class="PageContact__content">
        <section class="PageContact__lead" aria-label="Iletisim formu">
          <h3 class="PageContact__title">Teklif Al</h3>
          <p class="PageContact__body">
            Teknik bir sorunuz mu var? Kiralama veya satin almak istediginiz urun hakkinda bilgi mi almak istiyorsunuz?
            Ekibimizle iletisime gecin.
          </p>
        </section>
      </div>
    `;
  }

  function patchNewsPage() {
    const body = document.body;
    if (!body || body.dataset.page !== "news") return;

    const container = document.querySelector(".PageStelllla__container");
    if (!container) return;
    if (container.dataset.sourceOwned === "true") return;

    const cardsHtml = newsFeed
      .map((item) => {
        return `
          <div class="PageStelllaPoint__item_wrapper" data-animation="point-item">
            <div class="PageStelllaPoint__item_number" data-element="point-number">
              ${escapeHtml(item.number)}
            </div>
            <article class="PageStelllaPoint__item">
              <figure class="PageStelllaPoint__item_image" data-element="point-image">
                <img src="${escapeHtml(item.image)}" alt="${escapeHtml(
          item.alt
        )}" data-animation="img-scale" />
              </figure>
              <div class="PageStelllaPoint__item_detail" data-element="point-detail">
                <div>
                  <h3 class="PageStelllaPoint__item_title">${escapeHtml(
                    item.title
                  )}</h3>
                  <p class="PageStelllaPoint__item_text">${escapeHtml(
                    item.body
                  )}</p>
                </div>
              </div>
            </article>
          </div>
        `;
      })
      .join("");

    container.innerHTML = `
      <div class="PageStelllla__footerBG_container">
        <div class="PageStelllla__footerBG" data-stellla-mask="">
          <video id="stellla-bg-video" class="PageStelllla__movieBg_bg_video" autoplay muted loop playsinline>
            <source src="/works/media/projects/08-david-guetta-live-fest.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div class="PageStelllla__movieBg">
        <div class="PageStelllla__movieBg_bg">
          <div class="PageStelllla__movieBg_bg_wrapper" id="stellla-kv-video-wrapper">
            <video id="stellla-kv-video" class="PageStelllla__movieBg_bg_video" autoplay muted loop playsinline>
              <source src="/works/media/projects/08-david-guetta-live-fest.mp4" type="video/mp4" />
            </video>
            <div id="stellla-bg-overlay" class="PageStelllla__movieBg_bg_overlay"></div>
          </div>
        </div>
        <div class="PageStelllla__kv">
          <h2 class="PageStelllla__kv_logo" data-element="kv-logo" style="font-size: 5rem; text-align: center; line-height: 1.2; font-family: sans-serif; font-weight: 600;">
            Haberler
          </h2>
          <div class="ScrollIndicator__scroll_indicator">
            <div class="ScrollIndicator__scroll_line">
              <div class="ScrollIndicator__scroll_line_inner"></div>
            </div>
          </div>
        </div>
        <div class="PageStelllla__intro">
          <div class="PageStelllla__intro_inner">
            <p class="PageStelllla__intro_text" data-animation="intro-text">
              ALFA LED EKRAN'da yeni sezon hazirliklari,<br>
              saha operasyon notlari ve kurulum akislarini burada topluyoruz.<br>
              Guncel proje yaklasimini kisa notlarla takip edebilirsiniz.
            </p>
          </div>
        </div>
        <div class="PageStelllaPoint__container">
          <div class="PageStelllaPoint__inner">
            ${cardsHtml}
          </div>
        </div>
      </div>
      <div class="PageStelllaContact__container" data-stellla-contact="">
        <div class="PageStelllaContact__content">
          <p class="PageStelllaContact__lead" data-element="contact-lead">
            Yeni proje planliyorsaniz<br data-media="min-md">
            ekibimizle dogrudan konusun.
          </p>
          <p class="PageStelllaContact__text" data-element="contact-text">
            Guncel takvim, uygun panel yapisi ve kurulum senaryosu icin
            <br data-media="max-md">
            hizli bir on hazirlik yapalim.
          </p>
          <a href="${escapeHtml(
            routes.contact
          )}" class="SlotButton__button PageStelllaContact__stellla_button">
            <span class="SlotButton__text_wrapper">
              <span class="SlotButton__text">${escapeHtml(labels.contact)}</span>
              <span class="SlotButton__text_hover">${escapeHtml(
                labels.contact
              )}</span>
            </span>
          </a>
        </div>
      </div>
    `;

    container.querySelectorAll("video").forEach((video) => {
      video.load();
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    });
  }

  function patchHomeServiceLinks() {
    document.querySelectorAll(".Service__item_link").forEach((link) => {
      link.setAttribute("href", routes.sales || "/satin-alin/");
      link.setAttribute("data-no-swup", "");
    });
  }

  function stripDevScaffolding() {
    document.querySelectorAll(".TweakpaneContainers__container").forEach((node) => {
      node.remove();
    });
  }

  function isOverlayVisible(overlay) {
    if (!overlay || overlay.hasAttribute("data-hidden")) return false;
    const computed = window.getComputedStyle(overlay);
    return (
      computed.display !== "none" &&
      computed.visibility !== "hidden" &&
      computed.opacity !== "0"
    );
  }

  function forceHideLoadingOverlay() {
    const overlay = document.getElementById("loading-overlay");
    if (!overlay || !isOverlayVisible(overlay)) return;

    overlay.setAttribute("data-hidden", "");
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
    overlay.style.pointerEvents = "none";

    if (document.body) {
      document.body.setAttribute("data-alfa-loading-hidden", "true");
      document.body.setAttribute("data-gl_loading_end", "true");
      document.body.style.overflow = "";
    }

    if (document.documentElement) {
      document.documentElement.style.overflow = "";
    }
  }

  function normalizePathForRouteLoading(pathname) {
    const normalized = (pathname || "/").replace(/\/+/g, "/");
    if (normalized === "/index.html") return "/";
    return normalized;
  }

  function getRouteLoadingDelay(url) {
    return normalizePathForRouteLoading(url.pathname) === "/" ? 15000 : 5000;
  }

  function getRouteLoadingOverlay() {
    let overlay = document.getElementById("alfa-route-loading");
    if (overlay) return overlay;

    overlay = document.createElement("div");
    overlay.id = "alfa-route-loading";
    overlay.className = "AlfaRouteLoading";
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML = `
      <div class="AlfaRouteLoading__panel">
        <div class="AlfaRouteLoading__mark">
          <img src="${headerLogoAsset}" alt="">
        </div>
        <p class="AlfaRouteLoading__copy">ALFA LED EKRAN</p>
        <div class="AlfaRouteLoading__track" aria-hidden="true">
          <div class="AlfaRouteLoading__fill"></div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    return overlay;
  }

  function showRouteLoadingThenNavigate(url) {
    const overlay = getRouteLoadingOverlay();
    const fill = overlay.querySelector(".AlfaRouteLoading__fill");
    const duration = getRouteLoadingDelay(url);
    const startedAt = performance.now();

    window.clearTimeout(runtimeState.routeLoadingTimer);
    if (runtimeState.routeLoadingFrame) {
      window.cancelAnimationFrame(runtimeState.routeLoadingFrame);
      runtimeState.routeLoadingFrame = 0;
    }

    if (document.body) {
      document.body.style.overflow = "hidden";
    }
    if (document.documentElement) {
      document.documentElement.style.overflow = "hidden";
    }

    overlay.setAttribute("data-visible", "true");
    if (fill) fill.style.width = "0%";

    const tick = (now) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      if (fill) fill.style.width = `${Math.round(eased * 100)}%`;
      if (progress < 1) {
        runtimeState.routeLoadingFrame = window.requestAnimationFrame(tick);
      }
    };

    runtimeState.routeLoadingFrame = window.requestAnimationFrame(tick);
    runtimeState.routeLoadingTimer = window.setTimeout(() => {
      window.location.assign(url.href);
    }, duration);
  }

  function installRouteLoadingLinks() {
    if (runtimeState.routeLoadingInstalled) return;
    runtimeState.routeLoadingInstalled = true;

    document.addEventListener(
      "click",
      (event) => {
        if (event.defaultPrevented) return;
        if (event.button !== 0) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

        const link = event.target?.closest?.("a[href]");
        if (!link) return;
        if (link.target && link.target !== "_self") return;
        if (link.hasAttribute("download")) return;
        if (
          link.hasAttribute("data-no-swup") ||
          link.closest?.(".AlfaWorksModal__trigger, [data-work-video], [data-project-sound], .SideMenu__overlay, .Footer__footer, .Header__container")
        ) {
          return;
        }

        const href = link.getAttribute("href") || "";
        if (
          href.startsWith("#") ||
          href.startsWith("mailto:") ||
          href.startsWith("tel:") ||
          href.startsWith("javascript:")
        ) {
          return;
        }

        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;
        if (/\.(mp4|webm|mov)(?:$|\?)/i.test(url.pathname)) return;

        const currentPath = normalizePathForRouteLoading(window.location.pathname);
        const nextPath = normalizePathForRouteLoading(url.pathname);
        if (
          currentPath === nextPath &&
          url.search === window.location.search &&
          url.hash
        ) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        showRouteLoadingThenNavigate(url);
      },
      true
    );

    window.addEventListener("pageshow", (event) => {
      if (!event.persisted) return;
      const overlay = document.getElementById("alfa-route-loading");
      overlay?.removeAttribute("data-visible");
      if (document.body) document.body.style.overflow = "";
      if (document.documentElement) document.documentElement.style.overflow = "";
    });
  }

  function scheduleLoadingFallback() {
    const overlay = document.getElementById("loading-overlay");
    if (!overlay || overlay.dataset.alfaLoadingGuard === "true") return;
    overlay.dataset.alfaLoadingGuard = "true";

    const isTopPage = document.body && document.body.dataset.page === "top";
    const softDelay = isTopPage ? 10800 : 4500;
    const hardDelay = isTopPage ? 13600 : 8000;

    const arm = () => {
      window.setTimeout(() => {
        if (isOverlayVisible(overlay)) forceHideLoadingOverlay();
      }, softDelay);

      window.setTimeout(() => {
        if (isOverlayVisible(overlay)) forceHideLoadingOverlay();
      }, hardDelay);
    };

    if (document.readyState === "complete") {
      arm();
    } else {
      window.addEventListener("load", arm, { once: true });
    }
  }

  function guardHomeShellResidue() {
    const body = document.body;
    const path = window.location.pathname.replace(/\/+/g, "/");
    const isHome = path === "/" || path === "/index.html";
    if (!body || body.dataset.page !== "top" || !isHome) return;

    const evaluate = () => {
      let currentSection = body.dataset.current_section || "";
      const getHasVisibleWorksScene = () => {
        const titleNode = document.querySelector("[data-works-active-title]");
        const summaryNode = document.querySelector("[data-works-active-summary]");
        const moreLink = document.querySelector(".Works__more");
        const firstWorkItem = document.querySelector("[data-works_item]");
        return [titleNode, summaryNode, moreLink, firstWorkItem].some((node) => {
          if (!node) return false;
          const style = window.getComputedStyle(node);
          return (
            style.display !== "none" &&
            style.visibility !== "hidden" &&
            parseFloat(style.opacity || "1") > 0.05
          );
        });
      };

      if (!currentSection) {
        body.setAttribute("data-current_section", "kv");
        currentSection = "kv";
      }

      let hasVisibleWorksScene = getHasVisibleWorksScene();

      if (currentSection === "works" && !hasVisibleWorksScene) {
        primeHomeWorksInitialState();
        hasVisibleWorksScene = getHasVisibleWorksScene();
      }

      body.removeAttribute("data-home-shell-stalled");
    };

    evaluate();
    window.requestAnimationFrame(evaluate);
    document.addEventListener("alfa:loader-complete", () => {
      evaluate();
      window.requestAnimationFrame(evaluate);
      window.setTimeout(evaluate, 80);
      window.setTimeout(evaluate, 240);
    });
    window.setTimeout(evaluate, 250);
    window.setTimeout(evaluate, 700);
    window.setTimeout(evaluate, 1600);
  }

  function runInit() {
    if (redirectLegacyWorksSubpages()) return;

    const body = document.body;
    const token = [
      window.location.pathname,
      body?.dataset.page || "",
      document.querySelectorAll("main, [data-works-container], .PageStelllla__container, .PageContact__inner")
        .length,
    ].join("|");

    if (runtimeState.lastInitToken === token) return;
    runtimeState.lastInitToken = token;

    injectStyles();
    stripDevScaffolding();
    normalizeHeaderNav();
    normalizeSideMenu();
    installSideMenuControls();
    normalizeFooter();
    normalizeLegacyMarkers();
    normalizeLinks(document);
    patchCommonText();
    patchMeta();
    installRouteLoadingLinks();
    patchHomeServiceLinks();
    patchContactPage();
    patchNewsPage();
    patchWorksPage();
    initWorksTitleBand();
    scheduleLoadingFallback();
    guardHomeShellResidue();
  }

  function init() {
    if (runtimeState.initScheduled) return;
    runtimeState.initScheduled = true;
    window.requestAnimationFrame(() => {
      runtimeState.initScheduled = false;
      runInit();
    });
  }

  document.addEventListener("readystatechange", () => {
    if (document.readyState === "interactive") init();
  });
  document.addEventListener("DOMContentLoaded", init, { once: false });
  window.addEventListener("load", init);
  document.addEventListener("alfa:runtime-init", init);
  document.addEventListener("swup:pageView", init);
  document.addEventListener("swup:contentReplaced", init);
  window.addEventListener("pageshow", init);
  init();
})();
