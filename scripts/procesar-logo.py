# -*- coding: utf-8 -*-
# Procesa el logo elegido (#10 marfil/navy/oro) -> assets de marca para la web.
from PIL import Image
import os

SRC = r"E:\web-institucional-ags\logo-gemini-v2\colores\10_marfil_navy_oro.png"
PUB = r"E:\web-institucional-ags\public"
os.makedirs(PUB, exist_ok=True)

im = Image.open(SRC).convert("RGB")
W, H = im.size
px = im.load()

# 1) Color de marca = mediana de las 4 esquinas
corners = [px[2, 2], px[W-3, 2], px[2, H-3], px[W-3, H-3]]
bg = tuple(sorted(c[i] for c in corners)[len(corners)//2] for i in range(3))
print("IVORY (fondo marca) =", "#%02X%02X%02X" % bg, bg)

def bbox_of(img, bgcol, thr=26):
    w, h = img.size
    p = img.load()
    minx, miny, maxx, maxy = w, h, 0, 0
    for y in range(h):
        for x in range(w):
            r, g, b = p[x, y]
            if abs(r-bgcol[0])+abs(g-bgcol[1])+abs(b-bgcol[2]) > thr:
                minx=min(minx,x); miny=min(miny,y); maxx=max(maxx,x); maxy=max(maxy,y)
    return (minx, miny, maxx+1, maxy+1)

# 2) Recorte del lockup completo (AGS + bajada), con margen y fondo marfil
bx = bbox_of(im, bg)
pad = int(0.06*max(bx[2]-bx[0], bx[3]-bx[1]))
crop = im.crop((max(0,bx[0]-pad), max(0,bx[1]-pad), min(W,bx[2]+pad), min(H,bx[3]+pad)))
# cuadrar sobre fondo marfil
side = max(crop.size)
full = Image.new("RGB", (side, side), bg)
full.paste(crop, ((side-crop.width)//2, (side-crop.height)//2))
full.save(os.path.join(PUB, "logo.png"))
print("logo.png (lockup)         ->", full.size)

# 3) Versión horizontal para navbar (recorte ajustado, alto compacto)
crop.save(os.path.join(PUB, "logo-lockup.png"))
print("logo-lockup.png (navbar)  ->", crop.size)

# 4) Favicon = solo el monograma 'AGS' (banda superior, sin la bajada de texto)
#    La bajada ocupa ~el ultimo 22% del recorte -> me quedo con la parte de arriba
ags = crop.crop((0, 0, crop.width, int(crop.height*0.74)))
abx = bbox_of(ags, bg)
apad = int(0.10*max(abx[2]-abx[0], abx[3]-abx[1]))
ags = ags.crop((max(0,abx[0]-apad), max(0,abx[1]-apad),
                min(ags.width,abx[2]+apad), min(ags.height,abx[3]+apad)))
s = max(ags.size)
mark = Image.new("RGB", (s, s), bg)
mark.paste(ags, ((s-ags.width)//2, (s-ags.height)//2))
mark.save(os.path.join(PUB, "logo-mark.png"))
mark.resize((512,512)).save(os.path.join(PUB, "apple-touch-icon.png"))  # 512 -> apple usa 180 pero sirve
mark.resize((180,180)).save(os.path.join(PUB, "apple-touch-icon-180.png"))
mark.resize((512,512)).save(os.path.join(PUB, "icon-512.png"))
mark.resize((192,192)).save(os.path.join(PUB, "icon-192.png"))
# favicon.ico multi-size
mark.resize((64,64)).save(os.path.join(PUB, "favicon.ico"), sizes=[(16,16),(32,32),(48,48),(64,64)])
print("logo-mark.png + favicon.ico + apple/icons -> OK")
print("LISTO. Assets en", PUB)
