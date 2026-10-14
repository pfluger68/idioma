# Idioma — Inglés de cero a nativo (A1 → C2)

Plataforma web para aprender inglés desde cero hasta nivel C2, alineada con el
Marco Común Europeo de Referencia (MCER/CEFR) y orientada a aprobar los exámenes
C1 Advanced, C2 Proficiency e IELTS.

## Qué incluye

- **Programa A1–C2**: descriptores "puedo hacer", gramática, vocabulario y unidades por nivel.
- **Lecciones interactivas**: teoría en español, ejemplos con audio (inglés británico)
  y ejercicios corregidos al instante (opción múltiple, huecos, *key word transformations*).
- **54 lecciones** (9 por nivel), de A1 a C2.
- **Simulacros de examen**: Reading & Use of English (partes 1–5) de C1 Advanced y C2 Proficiency,
  con temporizador, corrección por partes y estimación orientativa en la escala de Cambridge.
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
simulacros.html, simulacro.html
assets/css/styles.css
assets/js/app.js                 # lógica común y renderizado
assets/js/data/curriculum.js     # niveles, unidades y lecciones planificadas
assets/js/data/lessons.js        # contenido de las lecciones
assets/js/data/placement.js      # preguntas del test de nivel
assets/js/data/mocks.js          # simulacros de examen
```

## Añadir una lección

1. Busca su `id` en `curriculum.js` (p. ej. `"a1-02"`).
2. Añade una entrada con ese `id` en `lessons.js` siguiendo el formato documentado
   al inicio del archivo. Aparecerá enlazada automáticamente en su nivel.
