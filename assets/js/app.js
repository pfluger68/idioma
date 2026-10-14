/* Idioma — lógica común de la aplicación (sin dependencias). */
(function () {
  "use strict";
  const I = window.IDIOMA;
  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, attrs = {}, html) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") n.className = v;
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v);
    }
    if (html !== undefined) n.innerHTML = html;
    return n;
  };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Progreso (localStorage) ---------- */
  const KEY = "idioma.progress.v1";
  const Progress = {
    load() { try { return JSON.parse(localStorage.getItem(KEY)) || { lessons: {} }; } catch { return { lessons: {} }; } },
    save(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch { /* almacenamiento no disponible */ } },
    lesson(id) { return this.load().lessons[id]; },
    setLesson(id, score, total) {
      const p = this.load();
      const prev = p.lessons[id];
      if (!prev || score >= prev.score) p.lessons[id] = { score, total, date: new Date().toISOString() };
      this.save(p);
    },
    setPlacement(level) { const p = this.load(); p.placement = { level, date: new Date().toISOString() }; this.save(p); },
    reset() { try { localStorage.removeItem(KEY); } catch { /* nada */ } }
  };
  I.Progress = Progress;

  const availableLessons = level => level.units.flatMap(u => u.lessons).filter(l => I.lessons[l.id]);
  const completedIn = level => availableLessons(level).filter(l => Progress.lesson(l.id)).length;

  /* ---------- Audio (Web Speech API) ---------- */
  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/\s*—\s*/g, ". ").trim());
    const voices = speechSynthesis.getVoices();
    u.voice = voices.find(v => v.lang === "en-GB") || voices.find(v => v.lang.startsWith("en")) || null;
    u.lang = u.voice ? u.voice.lang : "en-GB";
    u.rate = 0.92;
    speechSynthesis.speak(u);
  }

  /* ---------- Cabecera y pie ---------- */
  function chrome() {
    const page = document.body.dataset.page;
    const links = [
      ["index.html", "Inicio", "home"],
      ["niveles.html", "Niveles", "levels"],
      ["test.html", "Test de nivel", "test"],
      ["examenes.html", "Certificaciones", "exams"],
      ["metodo.html", "Método", "method"]
    ];
    const header = el("header", { class: "site-header" }, `
      <div class="container">
        <a class="logo" href="index.html"><span class="logo-mark" aria-hidden="true">Id</span>Idioma</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="nav">Menú</button>
        <nav class="nav" id="nav" aria-label="Principal">
          ${links.map(([h, t, k]) => `<a href="${h}"${k === page || (page === "lesson" && k === "levels") || (page === "level" && k === "levels") ? ' aria-current="page"' : ""}>${t}</a>`).join("")}
        </nav>
      </div>`);
    document.body.prepend(header);
    document.body.prepend(el("a", { class: "skip", href: "#main" }, "Saltar al contenido"));
    const toggle = $(".nav-toggle", header), nav = $("#nav", header);
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
    document.body.append(el("footer", { class: "site-footer" }, `
      <div class="container">
        <div><strong>Idioma</strong> · Inglés de A1 a C2 según el Marco Común Europeo de Referencia.</div>
        <div>Proyecto educativo independiente. No afiliado a Cambridge, British Council ni IELTS.</div>
      </div>`));
  }

  /* ---------- Página: inicio ---------- */
  function renderHome() {
    const ladder = $("#ladder");
    if (ladder) {
      ladder.innerHTML = [...I.levels].reverse().map(l => `
        <a class="ladder-row" href="nivel.html?n=${l.id}" style="text-decoration:none;color:inherit">
          <span class="badge ${l.id}">${l.code}</span>
          <span><strong>${l.name}</strong><br><small>${l.stage}</small></span>
          <small>${l.hours}</small>
        </a>`).join("");
    }
    const p = Progress.load();
    const box = $("#resume");
    if (box && p.placement) {
      const lv = I.levelById(p.placement.level);
      box.innerHTML = `<div class="card" style="margin-top:28px"><span class="eyebrow">Tu nivel recomendado</span>
        <p style="margin:0"><span class="badge ${lv.id}">${lv.code}</span> &nbsp;<strong>${lv.name}</strong> — <a href="nivel.html?n=${lv.id}">continuar tu ruta</a></p></div>`;
    }
  }

  /* ---------- Página: listado de niveles ---------- */
  function renderLevels() {
    $("#levels-grid").innerHTML = I.levels.map(l => {
      const total = availableLessons(l).length, done = completedIn(l);
      return `<a class="card" href="nivel.html?n=${l.id}">
        <span class="badge ${l.id}">${l.code}</span>
        <h3 style="margin-top:14px">${l.name}</h3>
        <p class="muted">${l.summary}</p>
        <div class="progress" aria-label="Progreso"><span style="width:${total ? (done / total) * 100 : 0}%"></span></div>
        <div class="meta"><span>${l.stage}</span><span>${l.hours}</span><span>${done}/${total} lecciones</span></div>
      </a>`;
    }).join("");
  }

  /* ---------- Página: detalle de nivel ---------- */
  function renderLevel() {
    const id = new URLSearchParams(location.search).get("n") || "a1";
    const l = I.levelById(id);
    if (!l) { $("#main").innerHTML = `<div class="narrow page-head"><h1>Nivel no encontrado</h1><a href="niveles.html">Ver niveles</a></div>`; return; }
    document.title = `${l.code} · ${l.name} — Idioma`;
    const idx = I.levels.indexOf(l), prev = I.levels[idx - 1], next = I.levels[idx + 1];
    $("#main").innerHTML = `
      <div class="container page-head">
        <span class="badge ${l.id}">${l.code}</span>
        <h1>${l.name}</h1>
        <p class="lead muted" style="font-size:1.15rem;max-width:62ch">${l.summary}</p>
      </div>
      <div class="container cols" style="padding-bottom:48px">
        <div>
          <h2>Lo que serás capaz de hacer</h2>
          <ul class="check" style="margin-bottom:32px">${l.canDo.map(c => `<li>${c}</li>`).join("")}</ul>
          <h2>Unidades</h2>
          ${l.units.map(u => `
            <div class="unit">
              <div class="unit-head"><h3>${u.title}</h3></div>
              <ol>${u.lessons.map(ls => {
                const has = I.lessons[ls.id], pr = Progress.lesson(ls.id);
                return `<li>${has ? `<a href="leccion.html?id=${ls.id}">${ls.title}</a>` : `<span class="soon">${ls.title}</span>`}
                  ${pr ? `<span class="tag ok">${pr.score}/${pr.total}</span>` : has ? `<span class="tag">${has.minutes} min</span>` : `<span class="tag">Próximamente</span>`}</li>`;
              }).join("")}</ol>
            </div>`).join("")}
        </div>
        <aside class="sticky">
          <div class="card">
            <h3>Ficha del nivel</h3>
            <dl class="facts">
              <dt>Etapa</dt><dd>${l.stage}</dd>
              <dt>Horas</dt><dd>${l.hours}</dd>
              <dt>Examen</dt><dd>${l.exam}</dd>
            </dl>
            <h3 style="margin-top:20px">Gramática</h3>
            <p class="muted" style="font-size:.93rem">${l.grammar.join(" · ")}</p>
            <h3>Vocabulario</h3>
            <p class="muted" style="font-size:.93rem">${l.vocab.join(" · ")}</p>
          </div>
          <div class="lesson-nav">
            ${prev ? `<a class="btn btn-ghost btn-sm" href="nivel.html?n=${prev.id}">← ${prev.code}</a>` : "<span></span>"}
            ${next ? `<a class="btn btn-ghost btn-sm" href="nivel.html?n=${next.id}">${next.code} →</a>` : ""}
          </div>
        </aside>
      </div>`;
  }

  /* ---------- Corrección de respuestas abiertas ---------- */
  const norm = s => s.toLowerCase().replace(/[’‘`]/g, "'").replace(/[.,!?;:]+$/g, "").replace(/\s+/g, " ").trim();
  const isCorrect = (input, answers) => answers.some(a => norm(a) === norm(input));

  /* ---------- Página: lección ---------- */
  function renderLesson() {
    const id = new URLSearchParams(location.search).get("id");
    const ls = I.lessons[id];
    const main = $("#main");
    if (!ls) { main.innerHTML = `<div class="narrow page-head"><h1>Lección no disponible</h1><p>Esta lección todavía está en preparación.</p><a href="niveles.html">Ver niveles</a></div>`; return; }
    const lv = I.levelById(ls.level);
    document.title = `${ls.title} (${lv.code}) — Idioma`;

    const blocks = ls.content.map(b => {
      if (b.h) return `<h2>${b.h}</h2>`;
      if (b.p) return `<p>${b.p}</p>`;
      if (b.callout) return `<div class="callout">${b.callout}</div>`;
      if (b.table) return `<div class="table-wrap"><table><thead><tr>${b.table.head.map(h => `<th>${h}</th>`).join("")}</tr></thead>
        <tbody>${b.table.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
      if (b.examples) return `<ul class="examples">${b.examples.map(([en, es]) => `
        <li><button class="speak" data-say="${esc(en)}" aria-label="Escuchar: ${esc(en)}" title="Escuchar">▶</button>
        <div><div class="en">${en}</div><div class="es">${es}</div></div></li>`).join("")}</ul>`;
      return "";
    }).join("");

    main.innerHTML = `
      <article class="narrow lesson">
        <p><a href="nivel.html?n=${lv.id}">← ${lv.code} · ${lv.name}</a></p>
        <span class="badge ${lv.id}">${lv.code}</span>
        <h1 style="margin-top:12px">${ls.title}</h1>
        <p class="muted" style="font-size:1.12rem">${ls.intro}</p>
        <p class="muted" style="font-size:.9rem">⏱ ${ls.minutes} min · ${ls.exercises.length} ejercicios</p>
        <div class="lesson-body">${blocks}</div>
        <h2 style="margin-top:48px">Practica</h2>
        <p class="muted">Responde y comprueba cada ejercicio. Tu mejor puntuación se guarda en este navegador.</p>
        <div id="exercises"></div>
        <div id="score"></div>
      </article>`;

    main.addEventListener("click", e => { const b = e.target.closest(".speak"); if (b) speak(b.dataset.say); });

    const answered = new Map();
    const wrap = $("#exercises");
    const total = ls.exercises.length;

    const finish = () => {
      if (answered.size < total) return;
      const score = [...answered.values()].filter(Boolean).length;
      Progress.setLesson(id, score, total);
      const all = I.levels.flatMap(l => l.units.flatMap(u => u.lessons)).filter(x => I.lessons[x.id]);
      const nl = all[all.findIndex(x => x.id === id) + 1];
      const pct = Math.round((score / total) * 100);
      $("#score").innerHTML = `<div class="card score-box">
        <div class="big">${score}/${total}</div>
        <p>${pct >= 80 ? "¡Excelente! Dominas este punto." : pct >= 60 ? "Bien. Repasa las explicaciones de los fallos." : "Conviene repasar la teoría y volver a intentarlo."}</p>
        <div class="lesson-nav" style="justify-content:center">
          <button class="btn btn-ghost" onclick="location.reload()">Repetir</button>
          ${nl ? `<a class="btn btn-primary" href="leccion.html?id=${nl.id}">Siguiente lección →</a>` : `<a class="btn btn-primary" href="nivel.html?n=${lv.id}">Volver al nivel</a>`}
        </div></div>`;
      $("#score").scrollIntoView({ behavior: "smooth", block: "center" });
    };

    ls.exercises.forEach((ex, i) => {
      const box = el("div", { class: "exercise" });
      const fb = el("div", { class: "feedback", role: "status" });
      const showFb = (ok, correctText) => {
        answered.set(i, ok);
        fb.className = `feedback show ${ok ? "ok" : "err"}`;
        fb.innerHTML = `<strong>${ok ? "Correcto" : "Incorrecto"}</strong>${ok ? "" : ` — respuesta: <em>${esc(correctText)}</em>`}<span class="why">${ex.explain}</span>`;
        finish();
      };
      box.append(el("div", { class: "q-num" }, `Ejercicio ${i + 1} de ${total}`));

      if (ex.type === "mc") {
        box.append(el("div", { class: "prompt" }, ex.prompt));
        const opts = el("div", { class: "options" });
        ex.options.forEach((o, k) => {
          opts.append(el("button", { class: "option", type: "button", onclick: () => {
            opts.querySelectorAll("button").forEach((b, j) => {
              b.disabled = true;
              if (j === ex.answer) b.classList.add("correct");
              else if (j === k) b.classList.add("wrong");
            });
            showFb(k === ex.answer, ex.options[ex.answer]);
          }}, esc(o)));
        });
        box.append(opts);
      } else {
        if (ex.type === "transform") {
          box.append(el("div", { class: "instr" }, `Completa la segunda frase para que signifique lo mismo que la primera. Usa la palabra dada sin cambiarla y entre ${{a1:"2 y 5",a2:"2 y 5",b1:"2 y 5",b2:"2 y 5",c1:"3 y 6",c2:"3 y 8"}[ls.level]} palabras (las contracciones cuentan como dos).`));
          box.append(el("div", { class: "prompt" }, `${ex.first}<br><span class="keyword">${ex.keyword}</span><br>${ex.before} ______ ${ex.after}`));
        } else {
          box.append(el("div", { class: "prompt" }, ex.prompt.replace("___", "______")));
        }
        const row = el("form", { class: "answer-row" });
        const input = el("input", { type: "text", autocomplete: "off", autocapitalize: "off", spellcheck: "false", "aria-label": "Tu respuesta" });
        const btn = el("button", { class: "btn btn-primary", type: "submit" }, "Comprobar");
        row.append(input, btn);
        row.addEventListener("submit", e => {
          e.preventDefault();
          if (!input.value.trim()) return input.focus();
          const ok = isCorrect(input.value, ex.answers);
          input.classList.add(ok ? "correct" : "wrong");
          input.readOnly = true; btn.disabled = true;
          showFb(ok, ex.answers[0]);
        });
        box.append(row);
      }
      box.append(fb);
      wrap.append(box);
    });
  }

  /* ---------- Página: test de nivel ---------- */
  function renderTest() {
    const Q = I.placement, shell = $("#test");
    let i = 0;
    const answers = [];

    const intro = () => {
      shell.innerHTML = `<div class="card">
        <h2>Antes de empezar</h2>
        <ul class="check">
          <li>${Q.length} preguntas de dificultad creciente (A1 → C2).</li>
          <li>Unos 10–15 minutos. No uses diccionario: queremos tu nivel real.</li>
          <li>Si no sabes una respuesta, pulsa «No lo sé»: es mejor que adivinar.</li>
        </ul>
        <p class="muted" style="font-size:.9rem;margin-top:12px">Este test mide gramática y vocabulario. Es una orientación para elegir por dónde empezar, no un certificado oficial.</p>
        <button class="btn btn-primary" id="start">Empezar el test</button></div>`;
      $("#start").onclick = question;
    };

    const question = () => {
      const q = Q[i];
      shell.innerHTML = `
        <div class="test-top"><span>Pregunta ${i + 1} de ${Q.length}</span><span>${Math.round((i / Q.length) * 100)}%</span></div>
        <div class="progress" style="margin-bottom:20px"><span style="width:${(i / Q.length) * 100}%"></span></div>
        <div class="exercise"><div class="prompt" style="font-size:1.25rem">${esc(q.prompt)}</div>
          <div class="options">${q.options.map((o, k) => `<button class="option" data-k="${k}">${esc(o)}</button>`).join("")}
          <button class="option muted" data-k="-1"><em>No lo sé</em></button></div></div>`;
      shell.querySelectorAll(".option").forEach(b => b.onclick = () => {
        answers[i] = Number(b.dataset.k) === q.answer;
        i++;
        i < Q.length ? question() : result();
      });
      shell.querySelector(".option").focus();
    };

    const result = () => {
      const by = I.levels.map(l => {
        const idxs = Q.map((q, k) => q.level === l.id ? k : -1).filter(k => k >= 0);
        return { l, ok: idxs.filter(k => answers[k]).length, n: idxs.length };
      });
      // Nivel alcanzado: el último nivel consecutivo con al menos 60 % de aciertos.
      let reached = -1;
      for (let k = 0; k < by.length; k++) { if (by[k].ok / by[k].n >= 0.6) reached = k; else break; }
      const study = I.levels[Math.min(reached + 1, I.levels.length - 1)];
      const reachedTxt = reached < 0 ? "Principiante (pre-A1)" : `${I.levels[reached].code} · ${I.levels[reached].name}`;
      Progress.setPlacement(study.id);
      shell.innerHTML = `<div class="card">
        <span class="eyebrow">Resultado</span>
        <h2>Nivel estimado: ${reachedTxt}</h2>
        <p>Te recomendamos empezar por <span class="badge ${study.id}">${study.code}</span> <strong>${study.name}</strong>${reached === I.levels.length - 1 ? " para consolidar y preparar C2 Proficiency" : ""}.</p>
        <div class="result-bars">${by.map(b => `<div class="result-bar"><span class="badge ${b.l.id}">${b.l.code}</span>
          <div class="progress"><span style="width:${(b.ok / b.n) * 100}%"></span></div><span>${b.ok}/${b.n}</span></div>`).join("")}</div>
        <div class="hero-actions"><a class="btn btn-primary" href="nivel.html?n=${study.id}">Ir a ${study.code}</a>
        <button class="btn btn-ghost" id="again">Repetir test</button></div></div>`;
      $("#again").onclick = () => { i = 0; answers.length = 0; intro(); };
    };
    intro();
  }

  /* ---------- Arranque ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    chrome();
    const page = document.body.dataset.page;
    ({ home: renderHome, levels: renderLevels, level: renderLevel, lesson: renderLesson, test: renderTest }[page] || (() => {}))();
    if ("speechSynthesis" in window) speechSynthesis.getVoices();
  });
})();
