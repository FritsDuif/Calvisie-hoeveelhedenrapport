"""Maakt van de rapportbouwer één los HTML-bestand voor de online versie (claude.ai).

Gebruik:  python3 rapportbuilder/tools/maak-online-versie.py <uitvoerbestand.html>

- lijsten.js wordt in het bestand gezet;
- pdf-lib en html2canvas worden geladen van cdnjs (vaste versies), voor de PDF in de online versie;
- het logo wordt als afbeelding in het bestand opgenomen;
- de html/head/body-tags worden weggehaald (die voegt de online omgeving zelf toe).
"""
import base64
import os
import sys

SRC = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..') + os.sep
if len(sys.argv) != 2:
    sys.exit('Gebruik: maak-online-versie.py <uitvoerbestand.html>')
src = open(SRC + 'index.html', encoding='utf-8').read()
for t in ['<!doctype html>\n', '<html lang="nl">\n', '<head>\n', '</head>\n', '<body>\n', '</body>\n', '</html>\n',
          '<meta charset="utf-8">\n', '<meta name="viewport" content="width=device-width, initial-scale=1">\n']:
    if t not in src:
        sys.exit('Onverwachte opbouw van index.html: ' + t.strip())
    src = src.replace(t, '', 1)
tag = '<script src="lijsten.js"></script>'
if tag not in src:
    sys.exit('lijsten.js wordt niet geladen in index.html')
src = src.replace(tag,
                  '<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js"></script>\n'
                  '<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>\n'
                  '<script>\n' + open(SRC + 'lijsten.js', encoding='utf-8').read() + '\n</script>')
logo = 'data:image/png;base64,' + base64.b64encode(open(SRC + 'assets/logo-calvisie.png', 'rb').read()).decode()
src = src.replace("const LOGO = 'assets/logo-calvisie.png';", "const LOGO = '" + logo + "';")
if 'src="assets/' in src:
    sys.exit('Er verwijst nog iets naar de map assets/.')
open(sys.argv[1], 'w', encoding='utf-8').write(src)
print('Gemaakt:', sys.argv[1], f'({len(src)//1024} kB)')
