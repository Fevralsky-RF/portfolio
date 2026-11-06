(function () {
  "use strict";

  function initCalculator() {
    const byId = (id) => document.getElementById(id);
    const crew = byId("crewRange");
    const sale = byId("salePriceRange");
    const purchase = byId("purchasePriceRange");
    const status = byId("calcStatus");
    const requiredIds = [
      "crewRange", "crewOutput", "salePriceRange", "salePriceOutput",
      "purchasePriceRange", "purchasePriceOutput", "turnover", "supplierPay",
      "grossSpread", "perShiftSpread", "monthlyShifts", "spreadHeadline",
      "spreadDescription", "unitSale", "unitCost", "unitMargin", "unitSpread"
    ];
    const missing = requiredIds.filter((id) => !byId(id));
    if (missing.length) {
      if (status) {
        status.textContent = "Калькулятор не загружен: не найдены элементы " + missing.join(", ");
        status.classList.add("calc-status-error");
      }
      console.error("[UBER STROY] Calculator markup is incomplete:", missing);
      return;
    }

    const WORK_DAYS = 22;
    const rubles = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 });
    const percent = new Intl.NumberFormat("ru-RU", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    const money = (value) => {
      const rounded = Math.round(value);
      return (rounded < 0 ? "−" : "") + "₽" + rubles.format(Math.abs(rounded));
    };
    function paintRange(input) {
      const min = Number(input.min), max = Number(input.max), value = Number(input.value);
      const ratio = max > min ? Math.min(1, Math.max(0, (value - min) / (max - min))) : 0;
      const stop = (ratio * 100).toFixed(2) + "%";
      input.style.background = "linear-gradient(90deg, #ff5a1f 0 " + stop + ", #c7c9c6 " + stop + " 100%)";
      input.setAttribute("aria-valuenow", String(value));
    }
    function setText(id, value) {
      const node = byId(id);
      if (node) node.textContent = value;
    }
    function update() {
      const people = Number(crew.value);
      const salePrice = Number(sale.value);
      const procurementPrice = Number(purchase.value);
      if (![people, salePrice, procurementPrice].every(Number.isFinite)) {
        if (status) status.textContent = "Проверь значения параметров калькулятора.";
        return;
      }
      const monthlyPersonShifts = people * WORK_DAYS;
      const spread = salePrice - procurementPrice;
      const margin = salePrice > 0 ? (spread / salePrice) * 100 : 0;
      setText("crewOutput", String(people));
      setText("salePriceOutput", money(salePrice));
      setText("purchasePriceOutput", money(procurementPrice));
      setText("turnover", money(monthlyPersonShifts * salePrice));
      setText("supplierPay", money(monthlyPersonShifts * procurementPrice));
      setText("grossSpread", money(monthlyPersonShifts * spread));
      setText("perShiftSpread", money(spread));
      setText("monthlyShifts", rubles.format(monthlyPersonShifts) + " человеко-смен в месяц");

      const headline = byId("spreadHeadline");
      if (headline) {
        headline.innerHTML = money(spread) + '<br><span class="orange">' +
          (spread >= 0 ? "ВАЛОВЫЙ СПРЕД" : "ОТРИЦАТЕЛЬНЫЙ СПРЕД") + "</span>";
        headline.classList.toggle("is-negative", spread < 0);
      }
      setText("spreadDescription", spread >= 0
        ? "Валовый спред — разница между ценой для заказчика и закупочной ставкой поставщика до вычета расходов компании."
        : "Закупка выше цены продажи: каждая человеко-смена создаёт отрицательный валовый результат до учёта прочих расходов.");
      setText("unitSale", money(salePrice));
      setText("unitCost", money(procurementPrice));
      setText("unitMargin", percent.format(margin) + "%");
      setText("unitSpread", money(spread));

      const grossCard = byId("grossSpread");
      if (grossCard && grossCard.closest(".calc-result")) {
        grossCard.closest(".calc-result").classList.toggle("negative", spread < 0);
      }
      ["perShiftSpread", "unitSpread"].forEach((id) => {
        const node = byId(id);
        if (node) node.classList.toggle("is-negative", spread < 0);
      });
      [crew, sale, purchase].forEach(paintRange);
      document.documentElement.dataset.calculator = "ready";
      if (status) {
        status.classList.remove("calc-status-error");
        status.textContent = "● МОДЕЛЬ АКТИВНА · ВСЕ ПОКАЗАТЕЛИ ПЕРЕСЧИТАНЫ";
      }
    }

    [crew, sale, purchase].forEach((input) => {
      input.addEventListener("input", update);
      input.addEventListener("change", update);
      input.addEventListener("keyup", update);
    });
    document.addEventListener("input", (event) => {
      if (event.target && ["crewRange", "salePriceRange", "purchasePriceRange"].includes(event.target.id)) update();
    }, true);
    update();
    window.addEventListener("pageshow", update);
  }

  function initMotionAndNavigation() {
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const menu = document.getElementById("menuBtn");
    const nav = document.getElementById("navLinks");
    if (menu && nav) {
      menu.addEventListener("click", function () {
        const open = nav.classList.toggle("open");
        menu.setAttribute("aria-expanded", String(open));
        menu.textContent = open ? "×" : "☰";
      });
      nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", function () {
          nav.classList.remove("open");
          menu.setAttribute("aria-expanded", "false");
          menu.textContent = "☰";
        });
      });
    }
    const progress = document.getElementById("progress");
    if (progress) {
      const updateProgress = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = (max > 0 ? window.scrollY / max * 100 : 0) + "%";
      };
      window.addEventListener("scroll", updateProgress, { passive: true });
      updateProgress();
    }
    if ("IntersectionObserver" in window) {
      if (nav) {
        const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
        const sections = links.map((link) => {
          try { return document.querySelector(link.getAttribute("href")); } catch (_) { return null; }
        }).filter(Boolean);
        if (sections.length) {
          const activeObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
            if (entry.isIntersecting) links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
          }), { rootMargin: "-35% 0px -55% 0px" });
          sections.forEach((section) => activeObserver.observe(section));
        }
      }
      if (!reduceMotion) {
        const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add("visible"); revealObserver.unobserve(entry.target); }
        }), { threshold: 0.12 });
        document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
      } else {
        document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
      }
      const barObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.style.width = entry.target.dataset.width || "0%"; barObserver.unobserve(entry.target); }
      }), { threshold: 0.4 });
      document.querySelectorAll("[data-width]").forEach((bar) => barObserver.observe(bar));
    } else {
      document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
      document.querySelectorAll("[data-width]").forEach((bar) => { bar.style.width = bar.dataset.width || "0%"; });
    }
    const ticker = document.querySelector(".ticker-track");
    if (ticker && !reduceMotion) {
      ticker.addEventListener("mouseenter", () => { ticker.style.animationPlayState = "paused"; });
      ticker.addEventListener("mouseleave", () => { ticker.style.animationPlayState = "running"; });
    }
  }

  function boot() {
    try { initCalculator(); }
    catch (error) {
      const status = document.getElementById("calcStatus");
      if (status) {
        status.textContent = "Ошибка калькулятора. Обновите страницу и попробуйте ещё раз.";
        status.classList.add("calc-status-error");
      }
      console.error("[UBER STROY] Calculator initialization failed:", error);
    }
    try { initMotionAndNavigation(); }
    catch (error) { console.error("[UBER STROY] Motion/navigation initialization failed:", error); }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();