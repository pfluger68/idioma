# Idioma — Inglés de cero a nativo (A1 → C2)

**Web publicada:** https://pfluger68.github.io/idioma/

Plataforma web para aprender inglés desde cero hasta nivel C2, alineada con el
Marco Común Europeo de Referencia (MCER/CEFR) y orientada a aprobar los exámenes
C1 Advanced, C2 Proficiency e IELTS.

## Qué incluye

- **Panel «Mi progreso»** en la portada: racha de días, sugerencias para hoy según tu nivel y resumen
  de todas las secciones.
- **Programa A1–C2**: descriptores "puedo hacer", gramática, vocabulario y unidades por nivel.
- **Lecciones interactivas**: teoría en español, ejemplos con audio (inglés británico)
  y ejercicios corregidos al instante (opción múltiple, huecos, *key word transformations*).
- **54 lecciones** (9 por nivel), de A1 a C2.
- **Simulacros de examen**: 2 por nivel del Reading & Use of English completo de C1 Advanced (8 partes, 78 puntos) y C2 Proficiency
  (7 partes, 72 puntos), en 90 minutos,
  con temporizador, corrección por partes y estimación orientativa en la escala de Cambridge.
- **Listening**: 18 ejercicios de comprensión auditiva (A1–C2) con formato de examen, 2 escuchas,
  voces distintas por hablante (síntesis de voz del navegador) y transcripción tras corregir.
- **Writing**: 9 tareas con formato de examen (B1 Preliminary a C2 Proficiency), editor con contador
  de palabras y temporizador, autoevaluación con los criterios de Cambridge y respuestas modelo comentadas.
- **Speaking**: 12 prácticas con formato de examen (A2 Key a C2 Proficiency), pregunta leída
  en voz alta, cronómetro con el tiempo oficial, grabación con el micrófono, respuesta modelo y autoevaluación.
- **Vocabulario**: 150 tarjetas (25 por nivel) con repetición espaciada, audio, estudio en ambas
  direcciones y copia de seguridad del progreso (exportar/importar).
- **Test de nivel**: 30 preguntas (5 por nivel) que recomiendan por dónde empezar.
- **Guía de certificaciones**: formatos y puntuaciones de Cambridge C1/C2, IELTS, Trinity,
  LanguageCert y EOI.
- **Progreso** guardado en el navegador (`localStorage`).

## Ejecutar en local

Es un sitio estático sin dependencias ni compilación:

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Publicar

Funciona tal cual en GitHub Pages (Settings → Pages → rama `main`, carpeta raíz),
Netlify o cualquier hosting estático.

## Estructura

```
index.html, niveles.html, nivel.html, leccion.html, test.html, examenes.html, metodo.html,
simulacros.html, simulacro.html, listening.html, escuchar.html, writing.html, escribir.html, vocabulario.html, speaking.html, hablar.html
assets/css/styles.css
assets/js/app.js                 # lógica común y renderizado
assets/js/data/curriculum.js     # niveles, unidades y lecciones planificadas
assets/js/data/lessons.js        # contenido de las lecciones
assets/js/data/placement.js      # preguntas del test de nivel
assets/js/data/mocks.js          # simulacros de examen
assets/js/data/listening.js      # ejercicios de listening
assets/js/data/writing.js        # tareas de writing
assets/js/data/vocab.js          # mazos de vocabulario
assets/js/data/speaking.js       # prácticas de speaking
```

## Añadir una lección

1. Busca su `id` en `curriculum.js` (p. ej. `"a1-02"`).
2. Añade una entrada con ese `id` en `lessons.js` siguiendo el formato documentado
   al inicio del archivo. Aparecerá enlazada automáticamente en su nivel.
