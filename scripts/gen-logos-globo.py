# -*- coding: utf-8 -*-
# 10 logos CREATIVOS de AGS (globo + AGS + nombre completo) con la API de imagenes de Google (Gemini/Imagen).
# Usa la receta oficial de las consolas (C:\Trabajo\NO_MOVER_HERRAMIENTAS_TESIS\apis\gemini.md): cascada de modelos.
import json, base64, os, urllib.request, urllib.error

API_KEY = os.environ.get("GEMINI_API_KEY", "AIzaSyBVjpOA6HOOWFeLWFH6b4O_xRzn2_bqxBs")
BASE = "https://generativelanguage.googleapis.com/v1beta/models"
OUT = r"E:\web-institucional-ags\logo-gemini-v2"
os.makedirs(OUT, exist_ok=True)

CABECERA = (
    "Disena un LOGOTIPO corporativo premium para una empresa llamada 'AGS' "
    "(Academic Global Solutions), una firma internacional de servicios academicos. "
    "Estilo: vector plano, elegante, ejecutivo, sobrio, de alta gama, minimalista. "
    "Colores EXCLUSIVAMENTE azul marino profundo (#0B1B33) y dorado metalico (#C9A24A). "
    "El logo DEBE incluir tres cosas: (1) un simbolo de GLOBO terraqueo, "
    "(2) las letras grandes 'AGS', y (3) el nombre completo 'ACADEMIC GLOBAL SOLUTIONS' "
    "en mayusculas doradas con buen espaciado entre letras. Composicion centrada, "
    "margenes amplios, fondo solido de un solo color. Relacion de aspecto 1:1. "
    "El texto debe decir EXACTAMENTE 'AGS' y 'ACADEMIC GLOBAL SOLUTIONS', sin faltas "
    "de ortografia ni letras inventadas. Nitido, alta resolucion. Concepto especifico: "
)

PROMPTS = {
 "01_globo_birrete":  "el globo lleva un birrete (gorro de graduacion) encima; transmite lo academico y lo global.",
 "02_globo_monolinea":"el globo dibujado con una sola linea dorada continua y elegante (arte de una sola linea), muy minimalista.",
 "03_globo_orbita":   "un fino anillo orbital dorado con una pequena estrella gira alrededor del globo; sensacion de alcance y logro.",
 "04_escudo_libro":   "un emblema tipo escudo que combina el globo apoyado sobre un libro abierto; conocimiento mas mundo.",
 "05_globo_red":      "el globo formado por puntos conectados y lineas finas, como una red global o constelacion.",
 "06_globo_letra_g":  "el globo integrado de forma ingeniosa como la letra 'G' dentro del monograma 'AGS'.",
 "07_sello_orla":     "un sello circular clasico de doble anillo; el nombre completo recorre la orla y hay un globo al centro.",
 "08_globo_arcos":    "el globo construido con arcos dorados superpuestos que sugieren movimiento ascendente y crecimiento.",
 "09_globo_laurel":   "el globo enmarcado por una sutil corona de laureles (honor academico); prestigioso.",
 "10_lujo_minimal":   "estilo lujo minimal: un fino icono de globo dorado junto a un 'AGS' en serif refinada y el nombre completo espaciado debajo.",
}

ESTRATEGIAS = [
 ("Gemini 3 Pro Image",    f"{BASE}/gemini-3-pro-image-preview:generateContent?key={API_KEY}", "gemini"),
 ("Gemini 3.1 Flash Image",f"{BASE}/gemini-3.1-flash-image-preview:generateContent?key={API_KEY}", "gemini"),
 ("Gemini 2.5 Flash Image",f"{BASE}/gemini-2.5-flash-image:generateContent?key={API_KEY}", "gemini"),
 ("Imagen 4 Ultra",        f"{BASE}/imagen-4.0-ultra-generate-001:predict?key={API_KEY}", "imagen"),
 ("Imagen 4",              f"{BASE}/imagen-4.0-generate-001:predict?key={API_KEY}", "imagen"),
]


def _post(url, body):
    req = urllib.request.Request(url, data=json.dumps(body).encode(),
                                 headers={"Content-Type": "application/json"})
    resp = urllib.request.urlopen(req, timeout=180)
    return json.load(resp)


def generar(prompt, forzar_modelo=None):
    errores = []
    for nombre, url, tipo in ESTRATEGIAS:
        if forzar_modelo and nombre != forzar_modelo:
            continue
        try:
            if tipo == "gemini":
                body = {"contents": [{"parts": [{"text": prompt}]}],
                        "generationConfig": {"responseModalities": ["IMAGE", "TEXT"]}}
            else:
                body = {"instances": [{"prompt": prompt}], "parameters": {"sampleCount": 1}}
            data = _post(url, body)
            if tipo == "gemini":
                parts = data.get("candidates", [{}])[0].get("content", {}).get("parts", [])
                img = next((p for p in parts if p.get("inlineData") or p.get("inline_data")), None)
                if img:
                    inl = img.get("inlineData") or img.get("inline_data")
                    return base64.b64decode(inl["data"]), nombre
            else:
                pred = data.get("predictions", [{}])[0]
                if pred.get("bytesBase64Encoded"):
                    return base64.b64decode(pred["bytesBase64Encoded"]), nombre
            errores.append(f"{nombre}: sin imagen")
        except urllib.error.HTTPError as e:
            errores.append(f"{nombre}: HTTP {e.code} {e.read().decode('utf-8','ignore')[:120]}")
        except Exception as e:
            errores.append(f"{nombre}: {e}")
    return None, "FALLO -> " + " | ".join(errores)


# 1) Detecta el primer modelo que funciona con el primer prompt
primero = list(PROMPTS.items())[0]
img, modelo = generar(CABECERA + primero[1])
if img is None:
    raise SystemExit("Ningun modelo respondio:\n" + modelo)
open(os.path.join(OUT, primero[0] + ".png"), "wb").write(img)
print(f"MODELO ELEGIDO: {modelo}  ->  {primero[0]} ({len(img)} bytes)")

# 2) Genera el resto forzando ese mismo modelo (mas rapido/consistente)
for name, concepto in list(PROMPTS.items())[1:]:
    img, quien = generar(CABECERA + concepto, forzar_modelo=modelo)
    if img:
        open(os.path.join(OUT, name + ".png"), "wb").write(img)
        print(f"OK  {name} ({len(img)} bytes)")
    else:
        # si el modelo elegido falla en uno, reintenta con toda la cascada
        img2, quien2 = generar(CABECERA + concepto)
        if img2:
            open(os.path.join(OUT, name + ".png"), "wb").write(img2)
            print(f"OK  {name} (cascada: {quien2}, {len(img2)} bytes)")
        else:
            print(f"XX  {name}: {quien}")

print("Listo. Imagenes en", OUT)
