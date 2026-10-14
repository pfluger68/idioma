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
    setMock(id, score, total, scale) {
      const p = this.load();
      p.mocks = p.mocks || {};
      const prev = p.mocks[id];
      if (!prev || score >= prev.score) p.mocks[id] = { score, total, scale, date: new Date().toISOString() };
      this.save(p);
    },
    mock(id) { return (this.load().mocks || {})[id]; },
    setListening(id, score, total) {
      const p = this.load();
      p.listening = p.listening || {};
      const prev = p.listening[id];
      if (!prev || score >= prev.score) p.listening[id] = { score, total, date: new Date().toISOString() };
      this.save(p);
    },
    listening(id) { return (this.load().listening || {})[id]; },
    setWriting(id, score, total) {
      const p = this.load();
      p.writing = p.writing || {};
      p.writing[id] = { score, total, date: new Date().toISOString() };
      this.save(p);
    },
    writing(id) { return (this.load().writing || {})[id]; },
    setSpeaking(id) { const p = this.load(); p.speaking = p.speaking || {}; p.speaking[id] = { date: new Date().toISOString() }; this.save(p); },
    speaking(id) { return (this.load().speaking || {})[id]; },
    setPlacement(level) { const p = this.load(); p.placement = { level, date: new Date().toISOString() }; this.save(p); },
    reset() { try { localStorage.removeItem(KEY); } catch { /* nada */ } }
  };
  I.Progress = Progress;
  I._srsNext = (...a) => srsNext(...a);

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
      ["test.html", "Test", "test"],
      ["examenes.html", "Certificaciones", "exams"],
      ["simulacros.html", "Simulacros", "mocks"],
      ["listening.html", "Listening", "listening"],
      ["writing.html", "Writing", "writing"],
      ["speaking.html", "Speaking", "speaking"],
      ["vocabulario.html", "Vocabulario", "vocab"],
      ["metodo.html", "Método", "method"]
    ];
    const header = el("header", { class: "site-header" }, `
      <div class="container">
        <a class="logo" href="index.html"><span class="logo-mark" aria-hidden="true">Id</span>Idioma</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="nav">Menú</button>
        <nav class="nav" id="nav" aria-label="Principal">
          ${links.map(([h, t, k]) => `<a href="${h}"${k === page || (page === "lesson" && k === "levels") || (page === "level" && k === "levels") || (page === "mock" && k === "mocks") || (page === "listen" && k === "listening") || (page === "write" && k === "writing") || (page === "speak" && k === "speaking") ? ' aria-current="page"' : ""}>${t}</a>`).join("")}
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

  /* ---------- Simulacros: estimación en la escala de Cambridge ---------- */
  function scaleScore(mock, ratio) {
    const pts = mock.scale;
    for (let k = 1; k < pts.length; k++) {
      const [x0, y0] = pts[k - 1], [x1, y1] = pts[k];
      if (ratio <= x1) return Math.round(y0 + (y1 - y0) * (ratio - x0) / (x1 - x0));
    }
    return pts[pts.length - 1][1];
  }
  const scaleLabel = (mock, score) => score < mock.minReport ? `< ${mock.minReport}` : `≈ ${score}`;
  function scaleBand(mock, score) {
    if (mock.level === "c1") return score >= 200 ? "C2 (grado A)" : score >= 193 ? "C1 (grado B)" : score >= 180 ? "C1 (grado C)" : score >= 160 ? "B2" : "Por debajo de B2";
    return score >= 220 ? "C2 (grado A)" : score >= 213 ? "C2 (grado B)" : score >= 200 ? "C2 (grado C)" : score >= 180 ? "C1" : "Por debajo de C1";
  }

  /* ---------- Página: listado de simulacros ---------- */
  function renderMocks() {
    $("#mocks-grid").innerHTML = [...I.mocks].sort((a, b) => a.id.localeCompare(b.id)).map(m => {
      const n = m.parts.reduce((a, p) => a + (p.gaps || p.items || p.questions).length, 0);
      const best = Progress.mock(m.id);
      return `<a class="card" href="simulacro.html?id=${m.id}">
        <span class="badge ${m.level}">${m.level.toUpperCase()}</span>
        <h3 style="margin-top:14px">${m.exam}</h3>
        <p class="muted">${m.title}: ${m.parts.length} partes, ${n} preguntas.</p>
        <div class="meta"><span>⏱ ${m.minutes} min</span>${best ? `<span class="tag ok">Mejor: ${best.score}/${best.total} · ${scaleLabel(m, best.scale)}</span>` : `<span class="tag">Sin intentos</span>`}</div>
      </a>`;
    }).join("");
  }

  /* ---------- Página: simulacro ---------- */
  function renderMock() {
    const id = new URLSearchParams(location.search).get("id");
    const m = I.mockById(id), main = $("#main");
    if (!m) { main.innerHTML = `<div class="narrow page-head"><h1>Simulacro no encontrado</h1><a href="simulacros.html">Ver simulacros</a></div>`; return; }
    document.title = `${m.exam} · ${m.title} — Idioma`;
    const total = m.parts.reduce((a, p) => a + (p.gaps || p.items || p.questions).length * p.marks, 0);
    const kwtRange = m.level === "c1" ? "3 y 6" : "3 y 8";

    main.innerHTML = `
      <div class="narrow page-head">
        <p><a href="simulacros.html">← Simulacros</a></p>
        <span class="badge ${m.level}">${m.level.toUpperCase()}</span>
        <h1 style="margin-top:12px">${m.exam}</h1>
        <p class="muted" style="font-size:1.12rem">${m.title}</p>
      </div>
      <div class="narrow" id="mock-body" style="padding-bottom:64px">
        <div class="card">
          <h2>Instrucciones</h2>
          <ul class="check">
            <li>Las ${m.parts.length} partes del Reading &amp; Use of English, con el formato y la puntuación del examen oficial.</li>
            <li>Tiempo: <strong>${m.minutes} minutos</strong>. Al terminar el tiempo, el simulacro se entrega automáticamente.</li>
            <li>Cada parte indica cuántos puntos vale cada pregunta. Total: ${total} puntos.</li>
            <li>En la parte 4 usa entre ${kwtRange} palabras (las contracciones cuentan como dos).</li>
          </ul>
          <p class="muted" style="font-size:.9rem;margin-top:12px">La nota en la escala de Cambridge es una estimación orientativa basada en el porcentaje de aciertos; no equivale a un resultado oficial.</p>
          <button class="btn btn-primary" id="mock-start">Empezar simulacro</button>
        </div>
      </div>`;
    $("#mock-start").onclick = () => start();

    let timerId = null, finished = false;

    const gapHtml = (p, g) => {
      if (p.type === "mcCloze")
        return `<span class="gap"><span class="gap-n">${g.n}</span><select data-n="${g.n}" aria-label="Hueco ${g.n}"><option value="">—</option>${g.options.map((o, k) => `<option value="${k}">${"ABCD"[k]} ${esc(o)}</option>`).join("")}</select></span>`;
      return `<span class="gap"><span class="gap-n">${g.n}</span><input data-n="${g.n}" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Hueco ${g.n}">${g.word ? `<span class="gap-word">${g.word}</span>` : ""}</span>`;
    };

    const partHtml = p => {
      let body = "";
      if (p.text) {
        const byN = Object.fromEntries(p.gaps.map(g => [g.n, g]));
        body = p.text.split("\n\n").map(par => `<p>${par.replace(/\{\{(\d+)\}\}/g, (_, n) => gapHtml(p, byN[n]))}</p>`).join("");
        body = `<div class="mock-text">${p.heading ? `<h3>${p.heading}</h3>` : ""}${body}</div>`;
      } else if (p.type === "kwt") {
        body = p.items.map(it => `<div class="exercise"><div class="q-num">Pregunta ${it.n}</div>
          <div class="prompt">${esc(it.first)}<br><span class="keyword">${esc(it.keyword)}</span><br>${esc(it.before)} ______ ${esc(it.after)}</div>
          <div class="answer-row"><input data-n="${it.n}" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Respuesta ${it.n}"></div>
          <div class="mock-fb" data-fb="${it.n}"></div></div>`).join("");
      } else if (p.type === "matching") {
        const letters = (p.options || p.texts).map(x => x.label);
        const sel = n => `<span class="gap"><span class="gap-n">${n}</span><select data-n="${n}" aria-label="Pregunta ${n}"><option value="">—</option>${letters.map(l => `<option>${l}</option>`).join("")}</select></span>`;
        if (p.gapped) {
          body = `<div class="mock-text">${p.heading ? `<h3>${p.heading}</h3>` : ""}${p.passage.map(x => x.gap ? `<p class="gap-slot">${sel(x.gap)}</p>` : `<p>${x}</p>`).join("")}</div>
            <div class="mock-options"><h3>Párrafos</h3>${p.options.map(o => `<p><strong class="opt-label">${o.label}</strong> ${o.text}</p>`).join("")}</div>`;
        } else {
          body = `<div class="mock-text">${p.heading ? `<h3>${p.heading}</h3>` : ""}${p.texts.map(t => `<div class="mt-block"><strong class="opt-label">${t.label}</strong>${t.heading ? ` <strong>${t.heading}</strong>` : ""}<p>${t.body}</p></div>`).join("")}</div>
            <div class="exercise"><div class="q-num">Elige la letra para cada pregunta</div>
            ${p.questions.map(q => `<div class="match-row">${sel(q.n)}<span>${esc(q.prompt)}</span><span class="mock-fb" data-fb="${q.n}"></span></div>`).join("")}</div>`;
        }
      } else if (p.type === "readingMC") {
        body = `<div class="mock-text"><h3>${p.heading}</h3>${p.passage.map(x => `<p>${x}</p>`).join("")}</div>` +
          p.questions.map(q => `<div class="exercise"><div class="q-num">Pregunta ${q.n}</div><div class="prompt">${esc(q.prompt)}</div>
            <div class="options" data-q="${q.n}">${q.options.map((o, k) => `<label class="option mock-opt"><input type="radio" name="q${q.n}" value="${k}"> <strong>${"ABCD"[k]}</strong> ${esc(o)}</label>`).join("")}</div>
            <div class="mock-fb" data-fb="${q.n}"></div></div>`).join("");
      }
      const nq = (p.gaps || p.items || p.questions).length;
      return `<section class="mock-part"><h2>${p.title}</h2><p class="muted">${p.instructions} <span class="tag">${nq} preguntas · ${p.marks} ${p.marks === 1 ? "punto" : "puntos"} c/u</span></p>${body}</section>`;
    };

    function start() {
      const body = $("#mock-body");
      body.innerHTML = `<div class="mock-bar"><span>⏱ <strong id="mock-clock"></strong></span><span id="mock-count" class="muted"></span><button class="btn btn-primary btn-sm" id="mock-submit">Entregar</button></div>
        ${m.parts.map(partHtml).join("")}
        <div style="text-align:center;margin-top:24px"><button class="btn btn-primary" id="mock-submit-2">Entregar simulacro</button></div>
        <div id="mock-result"></div>`;
      const end = Date.now() + m.minutes * 60000;
      const tick = () => {
        const left = Math.max(0, end - Date.now());
        const mm = Math.floor(left / 60000), ss = Math.floor(left / 1000) % 60;
        const clock = $("#mock-clock");
        clock.textContent = `${mm}:${String(ss).padStart(2, "0")}`;
        clock.parentElement.classList.toggle("low", left < 5 * 60000);
        if (left === 0) submit(true);
      };
      const count = () => {
        const n = body.querySelectorAll("select, input[type=text]").length + m.parts.filter(p => p.type === "readingMC").reduce((a, p) => a + p.questions.length, 0);
        const done = [...body.querySelectorAll("select, input[type=text]")].filter(e => e.value.trim()).length + body.querySelectorAll("input[type=radio]:checked").length;
        $("#mock-count").textContent = `${done}/${n} respondidas`;
        return n - done;
      };
      body.addEventListener("input", count); body.addEventListener("change", count);
      tick(); count(); timerId = setInterval(tick, 1000);
      const ask = () => { const left = count(); if (left === 0 || confirm(`Te quedan ${left} preguntas sin responder. ¿Entregar de todos modos?`)) submit(false); };
      $("#mock-submit").onclick = ask; $("#mock-submit-2").onclick = ask;
      window.onbeforeunload = () => finished ? undefined : true;
    }

    function submit(timeUp) {
      if (finished) return;
      finished = true; clearInterval(timerId); window.onbeforeunload = null;
      const body = $("#mock-body");
      const perPart = m.parts.map(p => {
        let got = 0;
        const max = (p.gaps || p.items || p.questions).length * p.marks;
        if (p.gaps) p.gaps.forEach(g => {
          const el = body.querySelector(`[data-n="${g.n}"]`);
          const ok = p.type === "mcCloze" ? el.value !== "" && Number(el.value) === g.answer : isCorrect(el.value, g.answers);
          if (ok) got += p.marks;
          el.disabled = true; el.classList.add(ok ? "correct" : "wrong");
          if (!ok) el.closest(".gap").insertAdjacentHTML("beforeend", `<span class="gap-key">${esc(p.type === "mcCloze" ? g.options[g.answer] : g.answers[0])}</span>`);
        });
        if (p.items) p.items.forEach(it => {
          const el = body.querySelector(`[data-n="${it.n}"]`), ok = isCorrect(el.value, it.answers);
          if (ok) got += p.marks;
          el.disabled = true; el.classList.add(ok ? "correct" : "wrong");
          body.querySelector(`[data-fb="${it.n}"]`).innerHTML = ok ? `<span class="ok-txt">Correcto</span>` : `<span class="err-txt">Respuesta modelo: <em>${esc(it.answers[0])}</em></span>`;
        });
        if (p.type === "matching") p.questions.forEach(q => {
          const el = body.querySelector(`select[data-n="${q.n}"]`), ok = el.value === q.answer;
          if (ok) got += p.marks;
          el.disabled = true; el.classList.add(ok ? "correct" : "wrong");
          if (!ok) el.closest(".gap").insertAdjacentHTML("beforeend", `<span class="gap-key">${q.answer}</span>`);
        });
        if (p.type === "readingMC") p.questions.forEach(q => {
          const chosen = body.querySelector(`input[name="q${q.n}"]:checked`), ok = chosen && Number(chosen.value) === q.answer;
          if (ok) got += p.marks;
          body.querySelectorAll(`input[name="q${q.n}"]`).forEach(r => {
            r.disabled = true;
            const lab = r.closest("label");
            if (Number(r.value) === q.answer) lab.classList.add("correct");
            else if (r.checked) lab.classList.add("wrong");
          });
          body.querySelector(`[data-fb="${q.n}"]`).innerHTML = ok ? `<span class="ok-txt">Correcto</span>` : `<span class="err-txt">Respuesta correcta: ${"ABCD"[q.answer]}</span>`;
        });
        return { title: p.title, got, max };
      });
      const score = perPart.reduce((a, x) => a + x.got, 0);
      const scale = scaleScore(m, score / total);
      Progress.setMock(m.id, score, total, scale);
      body.querySelectorAll(".mock-bar, #mock-submit-2").forEach(b => b.remove());
      $("#mock-result").innerHTML = "";
      body.insertAdjacentHTML("afterbegin", `<div class="card score-box" id="mock-score">
        ${timeUp ? `<p class="err-txt"><strong>Se acabó el tiempo.</strong></p>` : ""}
        <span class="eyebrow">Resultado</span>
        <div class="big">${score}/${total}</div>
        <p style="font-size:1.1rem">Estimación en la escala de Cambridge: <strong>${scaleLabel(m, scale)}</strong> · ${scaleBand(m, scale)}</p>
        <div class="result-bars" style="text-align:left">${perPart.map(x => `<div class="result-bar" style="grid-template-columns:1fr 2fr 56px"><span style="font-size:.9rem">${x.title.split(" · ")[0]}</span>
          <div class="progress"><span style="width:${(x.got / x.max) * 100}%"></span></div><span>${x.got}/${x.max}</span></div>`).join("")}</div>
        <p class="muted" style="font-size:.88rem">Revisa abajo cada respuesta: en verde las correctas y en rojo las incorrectas, con la solución al lado.</p>
        <div class="lesson-nav" style="justify-content:center"><button class="btn btn-ghost" onclick="location.reload()">Repetir</button><a class="btn btn-primary" href="simulacros.html">Volver a simulacros</a></div>
      </div>`);
      $("#mock-score").scrollIntoView({ behavior: "smooth" });
    }
  }

  /* ---------- Listening: voces y reproductor ---------- */
  const FEMALE_RE = /female|woman|samantha|victoria|karen|moira|tessa|serena|kate|susan|zira|hazel|libby|sonia|emma|amy|fiona|martha|aria|jenny|olivia|natasha|maisie/i;
  const MALE_RE = /\bmale\b|daniel|alex|fred|george|ryan|guy|david|mark|james|thomas|arthur|oliver|aaron|lee|rishi|william/i;
  const hasSpeech = "speechSynthesis" in window;

  function pickVoices(speakers) {
    const all = speechSynthesis.getVoices().filter(v => v.lang.toLowerCase().startsWith("en"));
    const lang = v => v.lang.replace("_", "-");
    const used = new Map(), out = {};
    for (const [key, sp] of Object.entries(speakers)) {
      const re = sp.gender === "f" ? FEMALE_RE : MALE_RE, acc = sp.accent || "en-GB";
      const free = all.filter(v => !used.has(v.name));
      const v = free.find(v => re.test(v.name) && lang(v) === acc) || free.find(v => re.test(v.name)) ||
                free.find(v => lang(v) === acc) || free[0] ||
                all.find(v => re.test(v.name)) || all[0] || null;
      const reuse = v ? used.get(v.name) || 0 : 0;
      if (v) used.set(v.name, reuse + 1);
      // Si no sabemos el género de la voz, o la voz se repite, diferenciamos a los hablantes con el tono.
      let pitch = v && re.test(v.name) ? 1 : (sp.gender === "f" ? 1.2 : 0.8);
      if (reuse) pitch = Math.min(1.6, Math.max(0.6, pitch + (reuse % 2 ? 0.18 : -0.18) * Math.ceil(reuse / 2)));
      out[key] = { voice: v, pitch };
    }
    return out;
  }

  function playScript(ex, rate, onEnd) {
    speechSynthesis.cancel();
    const cfg = pickVoices(ex.speakers);
    // Frases cortas: algunos navegadores cortan las locuciones largas.
    const queue = ex.script.flatMap(([who, text]) => (text.match(/[^.!?]+[.!?]+["']?|[^.!?]+$/g) || [text]).map(t => [who, t.trim()]));
    let i = 0, stopped = false, prev = null;
    const next = () => {
      if (stopped) return;
      if (i >= queue.length) return onEnd();
      const [who, text] = queue[i];
      const u = new SpeechSynthesisUtterance(text), c = cfg[who] || {};
      if (c.voice) { u.voice = c.voice; u.lang = c.voice.lang; } else u.lang = "en-GB";
      u.pitch = c.pitch || 1; u.rate = rate;
      u.onend = u.onerror = () => { i++; setTimeout(next, prev !== null && queue[i] && queue[i][0] !== who ? 450 : 120); };
      prev = who;
      try { speechSynthesis.speak(u); } catch (e) { stopped = true; onEnd(e); }
    };
    next();
    return () => { stopped = true; speechSynthesis.cancel(); };
  }

  /* ---------- Página: listado de listening ---------- */
  function renderListeningList() {
    const order = I.levels.map(l => l.id);
    $("#listening-grid").innerHTML = [...I.listening].sort((a, b) => order.indexOf(a.level) - order.indexOf(b.level)).map(x => {
      const best = Progress.listening(x.id);
      return `<a class="card" href="escuchar.html?id=${x.id}">
        <span class="badge ${x.level}">${x.level.toUpperCase()}</span>
        <h3 style="margin-top:14px">${x.title}</h3>
        <p class="muted">${x.kind} · ${x.questions.length} preguntas</p>
        <div class="meta">${best ? `<span class="tag ok">Mejor: ${best.score}/${best.total}</span>` : `<span class="tag">Sin intentos</span>`}</div>
      </a>`;
    }).join("");
    if (!hasSpeech) $("#listening-grid").insertAdjacentHTML("beforebegin", `<div class="callout"><strong>Aviso:</strong> tu navegador no permite reproducir voz. Podrás hacer los ejercicios leyendo la transcripción.</div>`);
  }

  /* ---------- Página: ejercicio de listening ---------- */
  function renderListen() {
    const id = new URLSearchParams(location.search).get("id");
    const ex = I.listeningById(id), main = $("#main");
    if (!ex) { main.innerHTML = `<div class="narrow page-head"><h1>Ejercicio no encontrado</h1><a href="listening.html">Ver ejercicios</a></div>`; return; }
    document.title = `${ex.title} (${ex.level.toUpperCase()}) — Idioma`;
    let plays = 0, checked = false, stop = null;

    main.innerHTML = `
      <article class="narrow lesson">
        <p><a href="listening.html">← Listening</a></p>
        <span class="badge ${ex.level}">${ex.level.toUpperCase()}</span>
        <h1 style="margin-top:12px">${ex.title}</h1>
        <p class="muted" style="font-size:1.1rem">${ex.intro}</p>
        <div class="card player">
          <button class="btn btn-primary" id="play" ${hasSpeech ? "" : "disabled"}>▶ Escuchar</button>
          <button class="btn btn-ghost" id="stop" hidden>■ Detener</button>
          <label class="muted">Velocidad
            <select id="rate"><option value="0.8">Lenta</option><option value="0.9">Media</option><option value="1" selected>Normal</option></select>
          </label>
          <span class="muted" id="play-status"></span>
        </div>
        ${hasSpeech ? "" : `<div class="callout"><strong>Aviso:</strong> tu navegador no permite reproducir voz. Puedes leer la transcripción para practicar.</div>`}
        <p class="muted" style="font-size:.88rem">Audio generado con la voz de tu navegador; la calidad y las voces disponibles dependen de tu dispositivo.</p>
        <h2>Preguntas</h2>
        ${(ex.boxes || []).map(b => `<div class="mock-options"><h3>${b.title}</h3>${b.items.map(it => `<p><strong class="opt-label">${it[0]}</strong> ${esc(it.slice(2))}</p>`).join("")}</div>`).join("")}
        <div id="lq"></div>
        <div style="text-align:center;margin:24px 0"><button class="btn btn-primary" id="check">Comprobar respuestas</button></div>
        <div id="lresult"></div>
        <div id="transcript" hidden></div>
      </article>`;

    const status = () => {
      const left = ex.plays - plays;
      $("#play-status").textContent = checked ? "Escuchas ilimitadas" : left > 0 ? `Escuchas restantes: ${left}` : "Has usado tus escuchas. Responde y comprueba.";
      $("#play").disabled = !hasSpeech || (!checked && left <= 0);
    };
    const playing = on => { $("#play").hidden = on; $("#stop").hidden = !on; };
    $("#play").onclick = () => {
      if (!checked) plays++;
      playing(true); status();
      stop = playScript(ex, Number($("#rate").value), err => {
        playing(false); status();
        if (err) $("#play-status").textContent = "No se pudo reproducir el audio en este navegador. Lee la transcripción tras comprobar.";
      });
    };
    $("#stop").onclick = () => { if (stop) stop(); playing(false); status(); };
    window.addEventListener("beforeunload", () => hasSpeech && speechSynthesis.cancel());
    status();

    const L = "ABCDEFGH";
    $("#lq").innerHTML = ex.questions.map((q, i) => q.type === "select"
      ? `<div class="exercise match-q" data-i="${i}"><div class="match-row" style="border:0">
          <span class="gap"><select data-i="${i}" aria-label="${esc(q.prompt)}"><option value="">—</option>${q.choices.map(c => `<option>${c}</option>`).join("")}</select></span>
          <strong>${esc(q.prompt)}</strong><span class="mock-fb"></span></div></div>`
      : `<div class="exercise" data-i="${i}">
      <div class="q-num">Pregunta ${i + 1}</div>
      <div class="prompt">${esc(q.prompt).replace("___", "______")}</div>
      ${q.type === "mc"
        ? `<div class="options">${q.options.map((o, k) => `<label class="option mock-opt"><input type="radio" name="lq${i}" value="${k}"> <strong>${L[k]}</strong> ${esc(o)}</label>`).join("")}</div>`
        : `<div class="answer-row"><input type="text" data-i="${i}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Respuesta ${i + 1}"></div>`}
      <div class="mock-fb"></div></div>`).join("");

    $("#check").onclick = () => {
      if (checked) return;
      checked = true;
      let score = 0;
      ex.questions.forEach((q, i) => {
        const box = $(`.exercise[data-i="${i}"]`), fb = $(".mock-fb", box);
        let ok;
        if (q.type === "select") {
          const sel = box.querySelector("select");
          ok = sel.value === q.answer;
          sel.disabled = true; sel.classList.add(ok ? "correct" : "wrong");
          fb.innerHTML = ok ? `<span class="ok-txt">Correcto</span>` : `<span class="err-txt">Respuesta: ${q.answer}</span>`;
        } else if (q.type === "mc") {
          const ch = box.querySelector("input:checked");
          ok = !!ch && Number(ch.value) === q.answer;
          box.querySelectorAll("input").forEach(r => {
            r.disabled = true;
            if (Number(r.value) === q.answer) r.closest("label").classList.add("correct");
            else if (r.checked) r.closest("label").classList.add("wrong");
          });
          fb.innerHTML = ok ? `<span class="ok-txt">Correcto</span>` : `<span class="err-txt">Respuesta correcta: ${L[q.answer]}</span>`;
        } else {
          const inp = box.querySelector("input");
          ok = isCorrect(inp.value, q.answers);
          inp.disabled = true; inp.classList.add(ok ? "correct" : "wrong");
          fb.innerHTML = ok ? `<span class="ok-txt">Correcto</span>` : `<span class="err-txt">Respuesta: <em>${esc(q.answers[0])}</em></span>`;
        }
        if (ok) score++;
      });
      Progress.setListening(ex.id, score, ex.questions.length);
      $("#check").remove();
      $("#lresult").innerHTML = `<div class="card score-box"><div class="big">${score}/${ex.questions.length}</div>
        <p>Ahora puedes leer la transcripción y volver a escuchar sin límite para comprobar lo que se te escapó.</p></div>`;
      const t = $("#transcript");
      t.hidden = false;
      t.innerHTML = `<h2>Transcripción</h2><div class="mock-text transcript">${ex.script.map(([w, txt]) => `<p><strong>${esc(ex.speakers[w].name)}:</strong> ${esc(txt)}</p>`).join("")}</div>`;
      status();
    };
  }

  /* ---------- Writing ---------- */
  const countWords = t => (t.match(/[A-Za-zÀ-ÿ0-9’'‘–-]+/g) || []).length;
  const draftKey = id => `idioma.draft.${id}`;
  const loadDraft = id => { try { return localStorage.getItem(draftKey(id)) || ""; } catch { return ""; } };
  const saveDraft = (id, t) => { try { localStorage.setItem(draftKey(id), t); } catch { /* sin almacenamiento */ } };

  function renderWritingList() {
    const order = I.levels.map(l => l.id);
    $("#writing-grid").innerHTML = [...I.writing].sort((a, b) => order.indexOf(a.level) - order.indexOf(b.level)).map(w => {
      const self = Progress.writing(w.id), draft = loadDraft(w.id);
      return `<a class="card" href="escribir.html?id=${w.id}">
        <span class="badge ${w.level}">${w.level.toUpperCase()}</span>
        <h3 style="margin-top:14px">${w.title}</h3>
        <p class="muted">${w.exam} · ${w.part}</p>
        <div class="meta"><span>${w.words[0]}–${w.words[1]} palabras</span><span>⏱ ${w.minutes} min</span>
          ${self ? `<span class="tag ok">Autoevaluación: ${self.score}/${self.total}</span>` : draft ? `<span class="tag">Borrador guardado</span>` : ""}</div>
      </a>`;
    }).join("");
  }

  function renderWrite() {
    const id = new URLSearchParams(location.search).get("id");
    const w = I.writingById(id), main = $("#main");
    if (!w) { main.innerHTML = `<div class="narrow page-head"><h1>Tarea no encontrada</h1><a href="writing.html">Ver tareas</a></div>`; return; }
    document.title = `${w.title} (${w.level.toUpperCase()}) — Idioma`;
    const [min, max] = w.words;
    const items = Object.entries(w.checklist);

    main.innerHTML = `
      <article class="narrow lesson">
        <p><a href="writing.html">← Writing</a></p>
        <span class="badge ${w.level}">${w.level.toUpperCase()}</span>
        <h1 style="margin-top:12px">${w.title}</h1>
        <p class="muted">${w.exam} · ${w.part} · ${min}–${max} palabras · ${w.minutes} minutos recomendados</p>
        <h2>La tarea</h2>
        <div class="task">${w.task.map(t => t.startsWith("<") ? t : `<p>${t}</p>`).join("")}</div>
        <div class="callout"><strong>Antes de escribir:</strong><ul style="margin:6px 0 0;padding-left:20px">${w.tips.map(t => `<li>${t}</li>`).join("")}</ul></div>

        <h2>Tu respuesta</h2>
        <div class="editor-bar">
          <span id="wc" class="wc"></span>
          <span class="muted" id="wtimer"></span>
          <button class="btn btn-ghost btn-sm" id="wtimer-btn">⏱ Iniciar ${w.minutes} min</button>
        </div>
        <textarea id="wtext" class="editor" rows="16" spellcheck="false" placeholder="Escribe aquí tu respuesta en inglés. Se guarda automáticamente en este navegador."></textarea>
        <div class="editor-actions">
          <button class="btn btn-ghost btn-sm" id="wcopy">Copiar texto</button>
          <button class="btn btn-ghost btn-sm" id="wclear">Borrar</button>
          <span class="muted" id="wsaved" style="font-size:.85rem"></span>
        </div>
        <p class="muted" style="font-size:.88rem">El corrector ortográfico está desactivado a propósito: en el examen no tendrás ayuda.</p>

        <h2>Autoevaluación</h2>
        <p class="muted">Cuando termines, revisa tu texto con los criterios oficiales de Cambridge y marca lo que cumples con honestidad.</p>
        <div id="checklist">${items.map(([crit, pts], ci) => `<div class="exercise"><div class="q-num">${crit}</div>
          ${pts.map((t, k) => `<label class="check-item"><input type="checkbox" data-c="${ci}" data-k="${k}"> <span>${t}</span></label>`).join("")}</div>`).join("")}</div>
        <div style="text-align:center"><button class="btn btn-primary" id="wassess">Ver mi autoevaluación</button></div>
        <div id="wresult"></div>

        <h2>Respuesta modelo</h2>
        <p class="muted">Te recomendamos escribir tu versión antes de mirarla. Los comentarios explican qué hace que funcione.</p>
        <div style="text-align:center"><button class="btn btn-ghost" id="wmodel-btn">Mostrar respuesta modelo</button></div>
        <div id="wmodel" hidden></div>
      </article>`;

    const ta = $("#wtext");
    ta.value = loadDraft(id);
    const updateCount = () => {
      const n = countWords(ta.value), wc = $("#wc");
      wc.textContent = `${n} palabras · objetivo ${min}–${max}`;
      wc.className = "wc " + (n === 0 ? "" : n < min ? "under" : n > max ? "over" : "ok");
    };
    let saveTimer;
    ta.addEventListener("input", () => {
      updateCount();
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => { saveDraft(id, ta.value); $("#wsaved").textContent = "Borrador guardado"; }, 500);
    });
    updateCount();

    let tId = null;
    $("#wtimer-btn").onclick = () => {
      if (tId) { clearInterval(tId); tId = null; $("#wtimer").textContent = ""; $("#wtimer-btn").textContent = `⏱ Iniciar ${w.minutes} min`; return; }
      const end = Date.now() + w.minutes * 60000;
      const tick = () => {
        const left = Math.max(0, end - Date.now());
        $("#wtimer").textContent = `Quedan ${Math.floor(left / 60000)}:${String(Math.floor(left / 1000) % 60).padStart(2, "0")}`;
        if (!left) { clearInterval(tId); tId = null; $("#wtimer").textContent = "¡Tiempo!"; $("#wtimer-btn").textContent = `⏱ Iniciar ${w.minutes} min`; }
      };
      tick(); tId = setInterval(tick, 1000);
      $("#wtimer-btn").textContent = "Detener";
    };
    $("#wcopy").onclick = async () => {
      try { await navigator.clipboard.writeText(ta.value); $("#wsaved").textContent = "Texto copiado"; }
      catch { ta.select(); $("#wsaved").textContent = "Selecciona y copia el texto manualmente"; }
    };
    $("#wclear").onclick = () => { if (ta.value && confirm("¿Borrar tu respuesta?")) { ta.value = ""; saveDraft(id, ""); updateCount(); } };

    $("#wassess").onclick = () => {
      const boxes = [...document.querySelectorAll("#checklist input")];
      const got = boxes.filter(b => b.checked).length, total = boxes.length;
      const per = items.map(([crit, pts], ci) => ({ crit, got: boxes.filter(b => b.dataset.c == ci && b.checked).length, n: pts.length }));
      const n = countWords(ta.value);
      Progress.setWriting(id, got, total);
      const weak = per.filter(x => x.got < x.n).map(x => x.crit);
      $("#wresult").innerHTML = `<div class="card score-box"><div class="big">${got}/${total}</div>
        <div class="result-bars" style="text-align:left">${per.map(x => `<div class="result-bar" style="grid-template-columns:1fr 2fr 48px"><span style="font-size:.9rem">${x.crit}</span>
          <div class="progress"><span style="width:${(x.got / x.n) * 100}%"></span></div><span>${x.got}/${x.n}</span></div>`).join("")}</div>
        ${n && (n < min || n > max) ? `<p class="err-txt">Tu texto tiene ${n} palabras: ajústalo al rango de ${min}–${max}.</p>` : ""}
        <p>${weak.length ? `Céntrate en mejorar: <strong>${weak.join(", ")}</strong>. Compara tu texto con la respuesta modelo.` : "¡Muy bien! Compara ahora tu texto con la respuesta modelo para detectar matices."}</p></div>`;
    };

    $("#wmodel-btn").onclick = () => {
      if (countWords(ta.value) < min && !confirm("Aún no has terminado tu respuesta. ¿Quieres ver el modelo de todos modos?")) return;
      const box = $("#wmodel");
      box.hidden = false;
      box.innerHTML = `<div class="model">${w.model.map(m => `<div class="model-row">
          <div class="model-text">${m.h ? `<p class="model-h">${m.h}</p>` : ""}${m.text ? `<p>${m.text}</p>` : ""}</div>
          ${m.note ? `<div class="model-note">${m.note}</div>` : "<div></div>"}</div>`).join("")}</div>
        <p class="muted" style="font-size:.88rem">Respuesta modelo: ${countWords(w.model.map(m => (m.h || "") + " " + m.text.replace(/<[^>]+>/g, " ")).join(" "))} palabras.</p>`;
      $("#wmodel-btn").remove();
    };
  }

  /* ---------- Vocabulario: repetición espaciada ---------- */
  const SRS_KEY = "idioma.srs.v1";
  const DAY = 86400000;
  const SRS = {
    load() { try { return JSON.parse(localStorage.getItem(SRS_KEY)) || {}; } catch { return {}; } },
    save(d) { try { localStorage.setItem(SRS_KEY, JSON.stringify(d)); } catch { /* sin almacenamiento */ } }
  };
  // Calcula el nuevo estado de una tarjeta. grade: 0 otra vez · 1 difícil · 2 bien · 3 fácil
  function srsNext(c, grade, now = Date.now()) {
    c = c ? { ...c } : { ease: 2.5, interval: 0, reps: 0, lapses: 0 };
    if (grade === 0) {
      c.reps = 0; c.lapses++; c.ease = Math.max(1.3, c.ease - 0.2); c.interval = 0;
      c.due = now + 60000; // vuelve en esta misma sesión
    } else {
      if (grade === 1) { c.interval = Math.max(1, Math.round((c.interval || 1) * 1.2)); c.ease = Math.max(1.3, c.ease - 0.15); }
      else if (grade === 2) c.interval = c.reps === 0 ? 1 : c.reps === 1 ? 3 : Math.round(c.interval * c.ease);
      else { c.interval = c.reps === 0 ? 4 : Math.round(c.interval * c.ease * 1.3); c.ease += 0.15; }
      c.reps++; c.due = now + c.interval * DAY;
    }
    return c;
  }
  const fmtInterval = c => !c.interval ? "<1 min" : c.interval === 1 ? "1 día" : c.interval < 30 ? `${c.interval} días` : `${Math.round(c.interval / 30)} mes${Math.round(c.interval / 30) > 1 ? "es" : ""}`;
  function deckStats(level, data = SRS.load(), now = Date.now()) {
    const cards = I.vocab[level].map((_, i) => data[`${level}-${i}`]);
    return {
      total: cards.length,
      fresh: cards.filter(c => !c).length,
      due: cards.filter(c => c && c.due <= now).length,
      mastered: cards.filter(c => c && c.interval >= 21).length
    };
  }

  function renderVocab() {
    const main = $("#vocab-app");
    let dir = "en";
    try { dir = localStorage.getItem("idioma.vocab.dir") || "en"; } catch { /* nada */ }

    const home = () => {
      const data = SRS.load();
      main.innerHTML = `
        <div class="vocab-toolbar">
          <span class="muted">Dirección:</span>
          <div class="seg" role="group" aria-label="Dirección de estudio">
            <button data-dir="en" class="${dir === "en" ? "on" : ""}">Inglés → español</button>
            <button data-dir="es" class="${dir === "es" ? "on" : ""}">Español → inglés</button>
          </div>
        </div>
        <div class="grid grid-3">${I.levels.map(l => {
          const st = deckStats(l.id, data);
          const toStudy = st.due + Math.min(10, st.fresh);
          return `<div class="card">
            <span class="badge ${l.id}">${l.code}</span>
            <h3 style="margin-top:14px">${l.name}</h3>
            <div class="progress" aria-label="Dominadas"><span style="width:${(st.mastered / st.total) * 100}%"></span></div>
            <div class="meta"><span>${st.due} para repasar</span><span>${st.fresh} nuevas</span><span>${st.mastered}/${st.total} dominadas</span></div>
            <button class="btn ${toStudy ? "btn-primary" : "btn-ghost"} btn-sm" style="margin-top:14px" data-deck="${l.id}" ${toStudy ? "" : "disabled"}>${toStudy ? `Estudiar (${toStudy})` : "Al día ✓"}</button>
          </div>`;
        }).join("")}</div>
        <div class="callout" style="margin-top:28px"><strong>Cómo funciona:</strong> cada sesión incluye las tarjetas que toca repasar hoy y hasta 10 nuevas. Intenta recordar la respuesta antes de mostrarla y valórate con sinceridad: las que te cuestan vuelven pronto y las que dominas, cada vez más tarde. Una tarjeta se considera dominada cuando su próximo repaso es dentro de 3 semanas o más.</div>
        <div class="card" style="margin-top:20px">
          <h3>Copia de seguridad de tu progreso</h3>
          <p class="muted">Todo tu progreso (lecciones, simulacros, listening, writing y vocabulario) se guarda en este navegador. Descarga una copia para no perderlo o para pasarlo a otro dispositivo.</p>
          <div class="hero-actions" style="margin-top:8px">
            <button class="btn btn-ghost btn-sm" id="export">Descargar copia</button>
            <label class="btn btn-ghost btn-sm">Restaurar copia<input type="file" id="import" accept="application/json" hidden></label>
          </div>
          <p class="muted" id="backup-msg" style="font-size:.88rem;margin-top:8px"></p>
        </div>`;
      main.querySelectorAll("[data-dir]").forEach(b => b.onclick = () => {
        dir = b.dataset.dir;
        try { localStorage.setItem("idioma.vocab.dir", dir); } catch { /* nada */ }
        home();
      });
      main.querySelectorAll("[data-deck]").forEach(b => b.onclick = () => study(b.dataset.deck));
      $("#export").onclick = exportBackup;
      $("#import").onchange = e => importBackup(e.target.files[0]);
    };

    const study = level => {
      const now = Date.now(), data = SRS.load();
      const ids = I.vocab[level].map((_, i) => `${level}-${i}`);
      const due = ids.filter(id => data[id] && data[id].due <= now).sort((a, b) => data[a].due - data[b].due);
      const fresh = ids.filter(id => !data[id]).slice(0, 10);
      const queue = [...due, ...fresh];
      const total = queue.length;
      const stats = { done: 0, again: 0 };
      const lv = I.levelById(level);
      main.scrollIntoView({ behavior: "smooth", block: "start" });

      const show = () => {
        if (!queue.length) return finish();
        const id = queue[0], [en, es, ex] = I.vocab[level][Number(id.split("-")[1])];
        const front = dir === "en" ? en : es, back = dir === "en" ? es : en;
        const c = SRS.load()[id];
        main.innerHTML = `
          <div class="flash-top"><button class="btn btn-ghost btn-sm" id="quit">← Salir</button>
            <span class="muted">${lv.code} · ${stats.done}/${total} · ${c ? "repaso" : "nueva"}</span></div>
          <div class="progress" style="margin:10px 0 18px"><span style="width:${(stats.done / total) * 100}%"></span></div>
          <div class="flashcard">
            <div class="flash-front">${esc(front)} ${dir === "en" ? `<button class="speak" data-say="${esc(en)}" aria-label="Escuchar">▶</button>` : ""}</div>
            <div id="flash-back" hidden>
              <div class="flash-answer">${esc(back)} ${dir === "es" ? `<button class="speak" data-say="${esc(en)}" aria-label="Escuchar">▶</button>` : ""}</div>
              <div class="flash-ex"><button class="speak" data-say="${esc(ex)}" aria-label="Escuchar ejemplo">▶</button> <em>${esc(ex)}</em></div>
            </div>
          </div>
          <div id="flash-actions">
            <button class="btn btn-primary" id="reveal" style="width:100%">Mostrar respuesta</button>
          </div>`;
        $("#quit").onclick = home;
        $("#reveal").onclick = () => {
          $("#flash-back").hidden = false;
          const labels = ["Otra vez", "Difícil", "Bien", "Fácil"];
          $("#flash-actions").innerHTML = `<div class="grade-row">${labels.map((t, g) =>
            `<button class="btn grade g${g}" data-g="${g}">${t}<small>${fmtInterval(srsNext(c, g))}</small></button>`).join("")}</div>`;
          $("#flash-actions").querySelectorAll("[data-g]").forEach(b => b.onclick = () => grade(id, Number(b.dataset.g)));
        };
      };

      const grade = (id, g) => {
        const data = SRS.load();
        data[id] = srsNext(data[id], g);
        SRS.save(data);
        queue.shift();
        if (g === 0) { stats.again++; queue.splice(Math.min(3, queue.length), 0, id); }
        else stats.done++;
        show();
      };

      const finish = () => {
        const st = deckStats(level);
        main.innerHTML = `<div class="card score-box">
          <span class="eyebrow">Sesión terminada</span>
          <div class="big">${stats.done}</div>
          <p>tarjetas repasadas${stats.again ? ` · ${stats.again} ${stats.again === 1 ? "repetición" : "repeticiones"}` : ""}</p>
          <p class="muted">${lv.code}: ${st.mastered}/${st.total} dominadas · ${st.fresh} nuevas por estudiar</p>
          <div class="lesson-nav" style="justify-content:center"><button class="btn btn-primary" id="back">Volver a los mazos</button></div>
        </div>`;
        $("#back").onclick = home;
      };
      show();
    };

    function speakHandler(e) { const b = e.target.closest(".speak"); if (b) speak(b.dataset.say); }

    function exportBackup() {
      const out = {};
      try { for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k.startsWith("idioma.")) out[k] = localStorage.getItem(k); } } catch { /* nada */ }
      const blob = new Blob([JSON.stringify({ app: "idioma", date: new Date().toISOString(), data: out }, null, 1)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `idioma-progreso-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
      $("#backup-msg").textContent = "Copia descargada.";
    }
    function importBackup(file) {
      if (!file) return;
      file.text().then(t => {
        const j = JSON.parse(t);
        if (j.app !== "idioma" || typeof j.data !== "object") throw new Error("formato");
        if (!confirm("Esto sustituirá tu progreso actual en este navegador. ¿Continuar?")) return;
        for (const [k, v] of Object.entries(j.data)) if (k.startsWith("idioma.") && typeof v === "string") localStorage.setItem(k, v);
        $("#backup-msg").textContent = "Progreso restaurado.";
        home();
        $("#backup-msg").textContent = "Progreso restaurado.";
      }).catch(() => { $("#backup-msg").textContent = "El archivo no es una copia válida de Idioma."; });
    }

    main.addEventListener("click", speakHandler);
    home();
  }

  /* ---------- Speaking ---------- */
  function renderSpeakingList() {
    const order = I.levels.map(l => l.id);
    $("#speaking-grid").innerHTML = [...I.speaking].sort((a, b) => order.indexOf(a.level) - order.indexOf(b.level)).map(x => {
      const done = Progress.speaking(x.id);
      return `<a class="card" href="hablar.html?id=${x.id}">
        <span class="badge ${x.level}">${x.level.toUpperCase()}</span>
        <h3 style="margin-top:14px">${x.title}</h3>
        <p class="muted">${x.exam} · ${x.part}</p>
        <div class="meta"><span>${x.tasks.length} ${x.tasks.length === 1 ? "tarea" : "tareas"}</span>${done ? `<span class="tag ok">Practicado</span>` : ""}</div>
      </a>`;
    }).join("");
  }

  function renderSpeak() {
    const id = new URLSearchParams(location.search).get("id");
    const sp = I.speakingById(id), main = $("#main");
    if (!sp) { main.innerHTML = `<div class="narrow page-head"><h1>Práctica no encontrada</h1><a href="speaking.html">Ver prácticas</a></div>`; return; }
    document.title = `${sp.title} (${sp.level.toUpperCase()}) — Idioma`;
    const canRecord = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
    let stream = null, recorder = null, chunks = [], timerId = null, t = 0;
    const recordings = [];

    main.innerHTML = `
      <article class="narrow lesson">
        <p><a href="speaking.html">← Speaking</a></p>
        <span class="badge ${sp.level}">${sp.level.toUpperCase()}</span>
        <h1 style="margin-top:12px">${sp.title}</h1>
        <p class="muted">${sp.exam} · ${sp.part}</p>
        <p style="font-size:1.08rem">${sp.intro}</p>
        <div class="callout"><strong>Consejos:</strong><ul style="margin:6px 0 0;padding-left:20px">${sp.tips.map(x => `<li>${x}</li>`).join("")}</ul></div>
        <details class="phrases"><summary>Frases útiles</summary>
          ${sp.phrases.map(g => `<p><strong>${g.f}:</strong> ${g.items.map(i => `<em>${esc(i)}</em>`).join(" · ")}</p>`).join("")}</details>
        ${canRecord ? `<p class="muted" style="font-size:.88rem">Al empezar, el navegador te pedirá permiso para usar el micrófono. Las grabaciones solo se guardan en esta página mientras la tengas abierta; no se envían a ningún sitio.</p>`
          : `<div class="callout"><strong>Aviso:</strong> tu navegador no permite grabar audio. Puedes practicar igualmente con el cronómetro.</div>`}
        <div id="sp-task"></div>
        <div id="sp-end"></div>
      </article>`;

    const fmt = n => `${Math.floor(n / 60)}:${String(n % 60).padStart(2, "0")}`;
    const stopAll = () => {
      clearInterval(timerId); timerId = null;
      if (recorder && recorder.state === "recording") recorder.stop();
    };

    const showTask = i => {
      stopAll();
      const task = sp.tasks[i];
      $("#sp-task").innerHTML = `
        <div class="card sp-card">
          <div class="q-num">Tarea ${i + 1} de ${sp.tasks.length} · ${fmt(task.seconds)} para hablar</div>
          <p class="sp-prompt">${esc(task.prompt)}</p>
          ${task.visuals ? `<div class="sp-visuals">${task.visuals.map(v => `<div>${esc(v)}</div>`).join("")}</div>` : ""}
          <div class="sp-controls">
            <button class="btn btn-ghost" id="sp-listen">▶ Escuchar la pregunta</button>
            <button class="btn btn-primary" id="sp-start">● Empezar a hablar</button>
            <button class="btn btn-ghost" id="sp-stop" hidden>■ Terminar</button>
          </div>
          <div id="sp-timer" hidden>
            <div class="sp-clock"><span id="sp-rec" class="rec-dot" hidden></span><strong id="sp-time">${fmt(task.seconds)}</strong></div>
            <div class="progress"><span id="sp-bar" style="width:0%"></span></div>
          </div>
          <div id="sp-after" hidden>
            <div id="sp-playback"></div>
            <details class="sp-model"><summary>Ver respuesta modelo</summary>
              <div class="sp-model-text">${task.model.split("\n").map(l => `<p>${esc(l)}</p>`).join("")}</div>
              <button class="btn btn-ghost btn-sm" id="sp-model-listen">▶ Escuchar el modelo</button>
            </details>
            <div class="lesson-nav">
              <button class="btn btn-ghost" id="sp-retry">↺ Repetir</button>
              ${i + 1 < sp.tasks.length ? `<button class="btn btn-primary" id="sp-next">Siguiente tarea →</button>` : `<button class="btn btn-primary" id="sp-finish">Terminar práctica</button>`}
            </div>
          </div>
        </div>`;
      $("#sp-listen").onclick = () => speak(task.prompt);
      $("#sp-start").onclick = () => start(task);
      $("#sp-stop").onclick = () => finish();
      $("#sp-retry").onclick = () => showTask(i);
      $("#sp-model-listen").onclick = () => speak(task.model.replace(/^[AB]: /gm, ""));
      if ($("#sp-next")) $("#sp-next").onclick = () => { showTask(i + 1); $("#sp-task").scrollIntoView({ behavior: "smooth" }); };
      if ($("#sp-finish")) $("#sp-finish").onclick = end;
    };

    async function start(task) {
      if ("speechSynthesis" in window) speechSynthesis.cancel();
      $("#sp-start").hidden = true; $("#sp-listen").hidden = true; $("#sp-stop").hidden = false;
      $("#sp-timer").hidden = false; $("#sp-after").hidden = true;
      if (canRecord) {
        try {
          stream = stream || await navigator.mediaDevices.getUserMedia({ audio: true });
          chunks = [];
          recorder = new MediaRecorder(stream);
          recorder.ondataavailable = e => e.data.size && chunks.push(e.data);
          recorder.onstop = () => {
            const blob = new Blob(chunks, { type: recorder.mimeType || "audio/webm" });
            const url = URL.createObjectURL(blob);
            recordings.push(url);
            $("#sp-playback").innerHTML = `<p><strong>Tu respuesta:</strong></p><audio controls src="${url}" class="sp-audio"></audio>`;
          };
          recorder.start();
          $("#sp-rec").hidden = false;
        } catch {
          $("#sp-playback").innerHTML = `<p class="muted">No se pudo acceder al micrófono, así que esta vez no hay grabación. Puedes permitirlo en los ajustes del navegador.</p>`;
        }
      }
      t = task.seconds;
      const total = task.seconds;
      const tick = () => {
        $("#sp-time").textContent = fmt(t);
        $("#sp-bar").style.width = `${((total - t) / total) * 100}%`;
        if (t <= 10) $("#sp-time").classList.add("low");
        if (t-- <= 0) finish();
      };
      tick(); timerId = setInterval(tick, 1000);
    }

    function finish() {
      if (!timerId && !(recorder && recorder.state === "recording")) return;
      stopAll();
      $("#sp-rec").hidden = true; $("#sp-stop").hidden = true;
      $("#sp-time").textContent = "¡Tiempo!";
      $("#sp-after").hidden = false;
      if (!canRecord) $("#sp-playback").innerHTML = "";
    }

    function end() {
      stopAll();
      Progress.setSpeaking(sp.id);
      $("#sp-task").innerHTML = "";
      const crit = [
        ["Grammatical Resource", "He usado estructuras variadas con pocos errores."],
        ["Lexical Resource", "He usado vocabulario preciso y variado, sin repetir siempre las mismas palabras."],
        ["Discourse Management", "Mis respuestas han tenido la extensión adecuada y han estado bien organizadas."],
        ["Pronunciation", "Me entiendo bien al escuchar la grabación: sonidos, acento de palabra y entonación."],
        ["Interactive Communication", "He respondido exactamente a lo que se preguntaba (y, en pareja, he interactuado)."]
      ];
      $("#sp-end").innerHTML = `<div class="card">
        <span class="eyebrow">Práctica terminada</span>
        <h2>Autoevaluación</h2>
        <p class="muted">Escucha tus grabaciones y marca lo que cumples. Son los cinco criterios con los que Cambridge evalúa el Speaking.</p>
        ${crit.map(([c, d]) => `<label class="check-item"><input type="checkbox"> <span><strong>${c}:</strong> ${d}</span></label>`).join("")}
        ${recordings.length ? `<h3 style="margin-top:18px">Tus grabaciones</h3>${recordings.map((u, k) => `<p class="muted" style="margin:8px 0 4px">Respuesta ${k + 1}</p><audio controls src="${u}" class="sp-audio"></audio>`).join("")}` : ""}
        <div class="lesson-nav"><button class="btn btn-ghost" onclick="location.reload()">Repetir práctica</button><a class="btn btn-primary" href="speaking.html">Otras prácticas</a></div>
      </div>`;
      if (stream) { stream.getTracks().forEach(tr => tr.stop()); stream = null; }
      $("#sp-end").scrollIntoView({ behavior: "smooth" });
    }

    window.addEventListener("beforeunload", () => { stopAll(); if (stream) stream.getTracks().forEach(tr => tr.stop()); });
    showTask(0);
  }

  /* ---------- Arranque ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    chrome();
    const page = document.body.dataset.page;
    ({ home: renderHome, levels: renderLevels, level: renderLevel, lesson: renderLesson, test: renderTest, mocks: renderMocks, mock: renderMock, listening: renderListeningList, listen: renderListen, writing: renderWritingList, write: renderWrite, vocab: renderVocab, speaking: renderSpeakingList, speak: renderSpeak }[page] || (() => {}))();
    if ("speechSynthesis" in window) speechSynthesis.getVoices();
  });
})();
