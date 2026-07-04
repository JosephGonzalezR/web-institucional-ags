# -*- coding: utf-8 -*-
# 10 variaciones de COLOR del logo #6 (AGS con la 'G' = globo terraqueo), con Gemini 3 Pro Image.
import json, base64, os, urllib.request, urllib.error

API_KEY = os.environ.get("GEMINI_API_KEY", "AIzaSyBVjpOA6HOOWFeLWFH6b4O_xRzn2_bqxBs")
BASE = "https://generativelanguage.googleapis.com/v1beta/models"
OUT = r"E:\web-institucional-ags\logo-gemini-v2\colores"
os.makedirs(OUT, exist_ok=True)

CONCEPTO = (
    "Logotipo corporativo premium. Las tres letras 'AGS' en mayusculas con tipografia "
    "SERIF elegante y refinada (estilo clasico tipo Trajan/Times). La letra central 'G' "
    "ES un GLOBO terraqueo con meridianos y continentes sutiles integrados dentro de la "
    "forma de la G. Debajo, el nombre completo 'ACADEMIC GLOBAL SOLUTIONS' en mayusculas "
    "con buen espaciado entre letras. Composicion centrada, margenes amplios, fondo solido "
    "de un solo color, relacion de aspecto 1:1, vector plano, ejecutivo, alta resolucion. "
    "El texto debe decir EXACTAMENTE 'AGS' y 'ACADEMIC GLOBAL SOLUTIONS', sin faltas de "
    "ortografia. PALETA DE COLOR OBLIGATORIA: "
)

# (nombre_archivo, descripcion de la paleta con hex exactos)
PALETAS = [
 ("01_esmeralda_oro",  "fondo verde esmeralda profundo (#0B3D2E); las letras 'AGS', el globo y el nombre en dorado metalico (#D4AF37)."),
 ("02_burdeos_oro",    "fondo vino burdeos oscuro (#4A0E1F); letras, globo y nombre en dorado (#C9A24A)."),
 ("03_carbon_oro",     "fondo negro carbon (#111114); letras, globo y nombre en dorado metalico (#C9A24A)."),
 ("04_azulreal_platino","fondo azul real (#0A2A6B); letras, globo y nombre en plata/platino claro (#C7CBD1)."),
 ("05_oxford_marfil",  "fondo azul Oxford muy oscuro (#002147); letras, globo y nombre en marfil crema (#F2E9D8)."),
 ("06_bosque_crema",   "fondo verde bosque (#14432A); letras, globo y nombre en crema calido (#EFE7D3)."),
 ("07_petroleo_cobre", "fondo azul petroleo/teal oscuro (#0B3B45); letras, globo y nombre en cobre metalico (#B87333)."),
 ("08_purpura_oro",    "fondo purpura profundo (#2E1A47); letras, globo y nombre en dorado (#D4AF37)."),
 ("09_pizarra_azul",   "fondo gris pizarra (#2B2F36); letras 'AGS' y globo en azul brillante (#3B82F6), nombre en gris claro (#C7CBD1)."),
 ("10_marfil_navy_oro","fondo marfil claro (#F5F1E8); las letras 'AGS' y el nombre en azul marino (#0B1B33) y el globo en dorado (#C9A24A). Version para fondo claro."),
]

URL = f"{BASE}/gemini-3-pro-image-preview:generateContent?key={API_KEY}"
URL_FB = f"{BASE}/gemini-2.5-flash-image:generateContent?key={API_KEY}"


def gen(prompt, url):
    body = {"contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {"responseModalities": ["IMAGE", "TEXT"]}}
    req = urllib.request.Request(url, data=json.dumps(body).encode(),
                                 headers={"Content-Type": "application/json"})
    data = json.load(urllib.request.urlopen(req, timeout=180))
    parts = data.get("candidates", [{}])[0].get("content", {}).get("parts", [])
    img = next((p for p in parts if p.get("inlineData") or p.get("inline_data")), None)
    if img:
        inl = img.get("inlineData") or img.get("inline_data")
        return base64.b64decode(inl["data"])
    return None


for name, paleta in PALETAS:
    prompt = CONCEPTO + paleta
    try:
        img = gen(prompt, URL)
        quien = "Gemini 3 Pro"
    except Exception as e:
        img = None
        quien = f"3Pro fallo ({str(e)[:60]})"
    if img is None:
        try:
            img = gen(prompt, URL_FB)
            quien = "Gemini 2.5 (fallback)"
        except Exception as e:
            quien = f"fallback fallo ({str(e)[:60]})"
    if img:
        open(os.path.join(OUT, name + ".png"), "wb").write(img)
        print(f"OK  {name}  [{quien}]  ({len(img)} bytes)")
    else:
        print(f"XX  {name}  -> {quien}")

print("Listo. Variaciones de color en", OUT)
