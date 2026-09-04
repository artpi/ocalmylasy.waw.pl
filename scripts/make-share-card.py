"""Recreate the social preview. Optional developer dependency: Pillow."""
from pathlib import Path
import math
from PIL import Image, ImageDraw, ImageFont

assets = Path(__file__).resolve().parent.parent / 'public' / 'assets'
image = Image.new('RGB', (1200, 630), '#183e31')
draw = ImageDraw.Draw(image)
serif = ImageFont.truetype(str(assets / 'fraunces.ttf'), 100)
bold = ImageFont.truetype(str(assets / 'manrope-bold.ttf'), 20)
body = ImageFont.truetype(str(assets / 'manrope.ttf'), 23)

for offset in (0, 45, 90):
    points = [(1020 + offset + math.sin(y / 95) * 110, y) for y in range(-30, 680, 3)]
    draw.line(points, fill='#4c7050', width=2)
draw.text((68, 56), 'CHROŃMY LASY WOKÓŁ WARSZAWY', font=bold, fill='#d5ed91')
draw.text((62, 142), 'Ocalmy', font=serif, fill='#f5f3eb')
draw.text((62, 248), 'dolinę Świdra.', font=serif, fill='#d5ed91')
draw.text((68, 393), 'Wykluczmy korytarz autostrady przez Kopki.', font=body, fill='#f5f3eb')
draw.rounded_rectangle((68, 476, 332, 543), radius=3, fill='#d5ed91')
draw.text((93, 494), 'Podpisz petycję', font=bold, fill='#183e31')
draw.line([(282, 519), (302, 499), (288, 499)], fill='#183e31', width=2)
draw.line([(302, 499), (302, 513)], fill='#183e31', width=2)
draw.text((883, 556), 'dolinaswidra.pl', font=body, fill='#d5ed91')
image.save(assets / 'share.jpg', quality=90, optimize=True)
print('Updated public/assets/share.jpg (1200 × 630)')
