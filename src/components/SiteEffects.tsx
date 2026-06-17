"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Ported from the design handoff's reveal.js — scroll reveal, count-up,
 * SVG charts, nav scroll state, progress bar, spotlight, and marquee sizing.
 * Runs on every route change so client-navigated pages re-bind.
 */
export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let watched: HTMLElement[] = [];

    function runCounter(el: HTMLElement) {
      const target = parseFloat(el.dataset.count || "0");
      const dec = el.dataset.dec !== undefined ? parseInt(el.dataset.dec) : 0;
      const pre = el.dataset.pre || "";
      const suf = el.dataset.suf || "";
      if (reduce) {
        el.textContent = pre + target.toFixed(dec) + suf;
        return;
      }
      const dur = 1500;
      const t0 = performance.now();
      function tick(t: number) {
        let p = Math.min(1, (t - t0) / dur);
        p = 1 - Math.pow(1 - p, 3);
        el.textContent = pre + (target * p).toFixed(dec) + suf;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = pre + target.toFixed(dec) + suf;
      }
      requestAnimationFrame(tick);
    }

    function lineChart(el: HTMLElement, area?: boolean) {
      const w = el.clientWidth || 600;
      const h = el.clientHeight || 260;
      const pts = (el.dataset.points || "10,40,30,55,48,72,65,88,80,96")
        .split(",")
        .map(Number);
      const max = Math.max(...pts) * 1.1;
      const min = Math.min(...pts) * 0.6;
      const stroke = el.dataset.stroke || "#5bb6ff";
      const n = pts.length;
      const X = (i: number) => (i / (n - 1)) * w;
      const Y = (v: number) => h - ((v - min) / (max - min)) * (h - 16) - 8;
      let dd = "";
      pts.forEach((v, i) => {
        dd += (i ? "L" : "M") + X(i).toFixed(1) + " " + Y(v).toFixed(1) + " ";
      });
      const id = "lg" + Math.random().toString(36).slice(2);
      const svg = `<svg viewBox="0 0 ${w} ${h}" width="100%" height="100%" preserveAspectRatio="none" style="overflow:visible">
        <defs>
          <linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${stroke}" stop-opacity=".34"/>
            <stop offset="1" stop-color="${stroke}" stop-opacity="0"/>
          </linearGradient>
        </defs>
        ${area ? `<path d="${dd} L ${w} ${h} L 0 ${h} Z" fill="url(#${id})"/>` : ""}
        <path d="${dd}" fill="none" stroke="${stroke}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
          style="filter:drop-shadow(0 0 8px ${stroke}88)"/>
      </svg>`;
      el.innerHTML = svg;
      const path = el.querySelector('path[fill="none"]') as SVGPathElement | null;
      if (path && !reduce) {
        const len = path.getTotalLength();
        path.style.strokeDasharray = String(len);
        path.style.strokeDashoffset = String(len);
        path.getBoundingClientRect();
        path.style.transition = "stroke-dashoffset 1.8s cubic-bezier(.22,.61,.36,1)";
        path.style.strokeDashoffset = "0";
      }
      pts.forEach((v, i) => {
        const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        dot.setAttribute("cx", String(X(i)));
        dot.setAttribute("cy", String(Y(v)));
        dot.setAttribute("r", "3.5");
        dot.setAttribute("fill", "#fff");
        dot.setAttribute("stroke", stroke);
        dot.setAttribute("stroke-width", "2");
        dot.style.opacity = "0";
        dot.style.transition = "opacity .4s " + (0.8 + i * 0.09) + "s";
        el.querySelector("svg")?.appendChild(dot);
        requestAnimationFrame(() => (dot.style.opacity = i === pts.length - 1 ? "1" : "0"));
      });
    }

    function barChart(el: HTMLElement) {
      const vals = (el.dataset.points || "30,52,44,68,80,96").split(",").map(Number);
      const labels = (el.dataset.labels || "").split(",");
      const stroke = el.dataset.stroke || "#5bb6ff";
      const max = Math.max(...vals);
      el.innerHTML =
        '<div class="barwrap">' +
        vals
          .map(
            (v, i) =>
              `<div class="barcol"><div class="bar" style="--bh:${((v / max) * 100).toFixed(
                1
              )}%;--bd:${i * 0.09}s;background:linear-gradient(180deg,${stroke},${stroke}33)"></div>${
                labels[i] ? `<span>${labels[i]}</span>` : ""
              }</div>`
          )
          .join("") +
        "</div>";
      requestAnimationFrame(() =>
        el.querySelectorAll(".bar").forEach((b) => b.classList.add("grow"))
      );
    }

    function drawChart(el: HTMLElement) {
      const type = el.dataset.chart || "line";
      if (type === "line") return lineChart(el);
      if (type === "bars") return barChart(el);
      if (type === "area") return lineChart(el, true);
    }

    function check() {
      const vh = innerHeight || document.documentElement.clientHeight;
      for (let i = watched.length - 1; i >= 0; i--) {
        const el = watched[i];
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) {
          el.classList.add("in");
          try {
            if (el.dataset.count !== undefined) runCounter(el);
          } catch (e) {}
          try {
            if (el.dataset.chart !== undefined) drawChart(el);
          } catch (e) {}
          watched.splice(i, 1);
        }
      }
    }

    function bind() {
      watched = Array.from(
        document.querySelectorAll<HTMLElement>(".reveal,[data-count],[data-chart]")
      );
      check();
    }

    const nav = document.querySelector(".nav");
    const prog = document.querySelector(".progress") as HTMLElement | null;
    function onScroll() {
      const y = scrollY;
      if (nav) nav.classList.toggle("scrolled", y > 30);
      if (prog) {
        const h = document.documentElement.scrollHeight - innerHeight;
        prog.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      }
      check();
    }

    // spotlight
    const spots = Array.from(document.querySelectorAll<HTMLElement>("[data-spotlight]"));
    const spotHandlers: Array<[HTMLElement, (e: PointerEvent) => void]> = [];
    spots.forEach((z) => {
      const handler = (e: PointerEvent) => {
        const r = z.getBoundingClientRect();
        z.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
        z.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
      };
      z.addEventListener("pointermove", handler);
      spotHandlers.push([z, handler]);
    });

    // marquee sizing — repeat the logo set enough times to always fill
    // at least 2x the visible container width, so the strip never runs dry.
    const marquee = document.querySelector<HTMLElement>(".logos .marquee");
    if (marquee && !marquee.dataset.cloned) {
      const baseItems = Array.from(marquee.querySelectorAll<HTMLElement>(".lg"));
      const gap = 54;
      let setWidth = 0;
      baseItems.forEach((item, idx) => {
        setWidth += item.offsetWidth;
        if (idx < baseItems.length - 1) setWidth += gap;
      });
      setWidth += gap;

      const container = marquee.closest<HTMLElement>(".logos-scroll") ?? marquee;
      const minWidth = Math.max(container.offsetWidth, window.innerWidth) * 2;
      const copiesNeeded = Math.max(2, Math.ceil(minWidth / setWidth));

      for (let c = 1; c < copiesNeeded; c++) {
        baseItems.forEach((item) => marquee.appendChild(item.cloneNode(true)));
      }

      const totalWidth = setWidth * copiesNeeded;
      marquee.style.setProperty("--marquee-width", setWidth + "px");
      marquee.style.animationDuration = totalWidth / 60 + "s";
      marquee.dataset.cloned = "1";
    }

    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", check);
    addEventListener("load", check);
    const onVis = () => {
      if (!document.hidden) check();
    };
    document.addEventListener("visibilitychange", onVis);
    addEventListener("focus", check);

    bind();
    onScroll();
    const timers = [200, 600, 1200].map((t) => setTimeout(check, t));

    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", check);
      removeEventListener("load", check);
      document.removeEventListener("visibilitychange", onVis);
      removeEventListener("focus", check);
      spotHandlers.forEach(([z, h]) => z.removeEventListener("pointermove", h));
      timers.forEach(clearTimeout);
    };
  }, [pathname]);

  return null;
}
