"""Genera assets/js/data/pron.js: pronunciación figurada para hispanohablantes.

Uso:  pip install cmudict  &&  python3 tools/mkpron.py
Vuelve a ejecutarlo cada vez que añadas ejemplos a las lecciones o tarjetas de vocabulario.
"""
import json, re, subprocess, cmudict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
D = cmudict.dict()

# Textos en inglés de las lecciones (ejemplos) y del vocabulario (términos y ejemplos).
EXTRACT = """
globalThis.window = globalThis;
require('./assets/js/data/lessons.js'); require('./assets/js/data/vocab.js');
const out = [];
for (const ls of Object.values(IDIOMA.lessons)) for (const b of ls.content) if (b.examples) for (const [en] of b.examples) out.push(en);
for (const v of Object.values(IDIOMA.vocab)) for (const [en, , ex] of v) out.push(en, ex);
process.stdout.write(JSON.stringify(out));
"""
texts = json.loads(subprocess.run(['node', '-e', EXTRACT], cwd=ROOT, capture_output=True, text=True, check=True).stdout)

V = {'AA': 'a', 'AE': 'a', 'AH': 'a', 'AO': 'o', 'AW': 'au', 'AY': 'ai', 'EH': 'e', 'ER': 'er',
     'EY': 'ei', 'IH': 'i', 'IY': 'i', 'OW': 'ou', 'OY': 'oi', 'UH': 'u', 'UW': 'u'}
C = {'B': 'b', 'CH': 'ch', 'D': 'd', 'DH': 'd', 'F': 'f', 'G': 'g', 'HH': 'j', 'JH': 'y', 'K': 'k',
     'L': 'l', 'M': 'm', 'N': 'n', 'NG': 'ng', 'P': 'p', 'R': 'r', 'S': 's', 'SH': 'sh', 'T': 't',
     'TH': 'z', 'V': 'v', 'W': 'w', 'Y': 'i', 'Z': 's', 'ZH': 'sh'}
ACC = {'a': 'á', 'e': 'é', 'i': 'í', 'o': 'ó', 'u': 'ú'}
# Palabras muy frecuentes: forma más útil para un hispanohablante (y más cercana al inglés británico).
OVERRIDE = {'the': 'de', 'a': 'a', 'an': 'an', 'to': 'tu', 'of': 'ov', 'and': 'and', 'was': 'wos', 'what': 'wot',
            'want': 'wont', 'because': 'bicós', 'your': 'ior', "you're": 'ior', 'are': 'ar', 'one': 'wan',
            'two': 'tu', 'does': 'das', 'said': 'sed', 'were': 'wer', 'there': 'der', 'their': 'der', 'from': 'from',
            'for': 'for', 'or': 'or', 'not': 'not', 'can': 'kan', "can't": 'kant', 'got': 'got', 'on': 'on',
            'body': 'bódi', 'off': 'of', 'often': 'ófen', 'watch': 'woch', 'want': 'wont', 'wash': 'wosh', 'café': 'kaféi'}

def lookup(lw):
    # Ortografía británica y formas derivadas que el diccionario (estadounidense) no recoge.
    cands = [lw, re.sub(r'is(e|ed|es|ing|ation)$', r'iz\1', lw), re.sub(r'our', 'or', lw)]
    for c in cands:
        if c in D: return D[c][0]
    if lw.endswith('s') and lw[:-1] in D:
        b = D[lw[:-1]][0]; return b + (['S'] if b[-1] in ('P', 'T', 'K', 'F', 'TH') else ['Z'])
    if lw == 'motorway': return ['M', 'OW1', 'T', 'ER0', 'W', 'EY2']
    if lw == 'tenterhooks': return ['T', 'EH1', 'N', 'T', 'ER0', 'HH', 'UH2', 'K', 'S']
    return None

def word(w):
    lw = w.lower()
    if lw in OVERRIDE: return OVERRIDE[lw]
    ph = lookup(lw)
    if ph is None: return None
    nv = sum(1 for p in ph if p[-1].isdigit())
    out = []
    for i, p in enumerate(ph):
        base, st = (p[:-1], p[-1]) if p[-1].isdigit() else (p, None)
        if st is not None:
            s = V[base]
            # Vocal neutra (schwa): «a» al principio o al final de palabra, «e» en medio (hello → jelóu).
            if base == 'AH' and st == '0' and 0 < i < len(ph) - 1: s = 'e'
            if base == 'OW' and st == '0': s = 'o'
            if base == 'AH' and st == '0' and i == 1 and lw.startswith('to'): s = 'u'  # today → tudéi
            if base == 'AA' and 'o' in lw: s = 'o'  # hot, job, John → pronunciación británica
            if st == '1' and nv > 1: s = ACC[s[0]] + s[1:]
            out.append(s)
        else:
            nxt = ph[i + 1] if i + 1 < len(ph) else ''
            if base == 'NG' and nxt in ('K', 'G'): out.append('n'); continue
            out.append(C[base])
    r = ''.join(out)
    r = re.sub(r'g([eiéí])', r'gu\1', r)          # get → guet
    r = re.sub(r'([aeiouáéíóú])\1', r'\1', r)      # vocales dobles
    r = r.replace('ií', 'í').replace('íi', 'í').replace('ii', 'i')
    return r

pron, missing = {}, set()
for t in texts:
    for tok in re.findall(r"[A-Za-zÀ-ÿ]+(?:'[A-Za-z]+)?", t):
        lw = tok.lower()
        if lw in pron or lw in missing: continue
        r = word(lw)
        if r is None: missing.add(lw)
        else: pron[lw] = r
print(len(pron), 'palabras ·', len(missing), 'sin entrada:', ' '.join(sorted(missing)))
body = json.dumps(pron, ensure_ascii=False, sort_keys=True, indent=0)
header = '/* Pronunciación figurada para hispanohablantes (generada con tools/mkpron.py a partir del diccionario CMU). */\n'
(ROOT / 'assets/js/data/pron.js').write_text(header + 'window.IDIOMA = window.IDIOMA || {};\nIDIOMA.pron = ' + body + ';\n', encoding='utf-8')
