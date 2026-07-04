# Genera variantes de logo AGS con la API de imagenes de Gemini.
# Lee la key de /tmp/gemini_key.txt (no se hardcodea).
import json, base64, os, urllib.request, urllib.error

KEY = os.environ["GEMINI_API_KEY"].strip()
MODELS = ["gemini-2.5-flash-image", "gemini-3.1-flash-image", "gemini-2.0-flash-preview-image-generation"]
OUT = r"E:\web-institucional-ags\logo-gemini"
os.makedirs(OUT, exist_ok=True)

PROMPTS = {
  "1_icono": (
    "Minimalist app-icon logo. A rounded-square badge in deep navy blue (#0a1424) "
    "with a thin metallic gold border. Centered, the monogram 'AGS' in elegant gold "
    "(#c9a24a) serif capital letters. Premium, executive, sober, flat vector, clean "
    "solid background. The text must read exactly 'AGS'."
  ),
  "2_wordmark": (
    "Corporate wordmark logo on a deep navy (#0a1424) background. The letters 'AGS' "
    "in bold metallic gold (#c9a24a) geometric sans-serif, a thin gold horizontal line "
    "beneath, and below it 'ACADEMIC GLOBAL SOLUTIONS' in small gold letter-spaced "
    "capitals. Executive, institutional, flat vector. Text exactly 'AGS' and "
    "'ACADEMIC GLOBAL SOLUTIONS'."
  ),
  "3_global": (
    "Premium emblem logo combining the monogram 'AGS' with a thin gold orbital arc "
    "that suggests global reach. Metallic gold (#c9a24a) on deep navy (#0a1424). "
    "Minimalist, modern, executive, flat vector. Text exactly 'AGS'."
  ),
  "4_sello": (
    "Classic circular seal logo. A thin double gold (#c9a24a) ring on deep navy "
    "(#0a1424); the words 'ACADEMIC GLOBAL SOLUTIONS' in gold capitals run along the "
    "ring, and 'AGS' is large and centered in elegant serif. Academic, authoritative, "
    "flat vector."
  ),
  "5_minimal": (
    "Ultra-minimal luxury logo: only the letters 'AGS' in a refined metallic gold "
    "(#c9a24a) serif, elegant and timeless, on a clean white background. Executive, "
    "sober, flat vector. Text exactly 'AGS'."
  ),
}

def gen(model, prompt):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={KEY}"
    for modal in (["IMAGE"], ["TEXT", "IMAGE"]):
        body = {"contents": [{"parts": [{"text": prompt}]}],
                "generationConfig": {"responseModalities": modal}}
        req = urllib.request.Request(url, data=json.dumps(body).encode(),
                                     headers={"Content-Type": "application/json"})
        try:
            resp = urllib.request.urlopen(req, timeout=180)
            data = json.load(resp)
            for p in data.get("candidates", [{}])[0].get("content", {}).get("parts", []):
                inl = p.get("inlineData") or p.get("inline_data")
                if inl and inl.get("data"):
                    return base64.b64decode(inl["data"]), None
            return None, "sin imagen en respuesta: " + json.dumps(data)[:200]
        except urllib.error.HTTPError as e:
            err = e.read().decode("utf-8", "ignore")[:300]
            if "responseModalities" in err or "modal" in err.lower():
                continue  # reintenta con el otro modal
            return None, f"HTTP {e.code}: {err}"
        except Exception as e:
            return None, f"ERR {e}"
    return None, "no se pudo (modalities)"

# Elige el primer modelo que produzca imagen para el primer prompt.
model = None
for m in MODELS:
    img, err = gen(m, PROMPTS["1_icono"])
    if img:
        model = m
        open(os.path.join(OUT, "1_icono.png"), "wb").write(img)
        print(f"MODELO OK: {m} -> 1_icono ({len(img)} bytes)")
        break
    else:
        print(f"modelo {m} fallo: {err}")

if not model:
    print("Ningun modelo de imagen funciono.")
    raise SystemExit(1)

for name, prompt in PROMPTS.items():
    if name == "1_icono":
        continue
    img, err = gen(model, prompt)
    if img:
        open(os.path.join(OUT, name + ".png"), "wb").write(img)
        print(f"OK {name} ({len(img)} bytes)")
    else:
        print(f"FALLO {name}: {err}")

print("Listo. Imagenes en", OUT)
