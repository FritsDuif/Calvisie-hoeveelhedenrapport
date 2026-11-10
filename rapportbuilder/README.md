# Rapportbouwer hoeveelheden

Maakt het hoeveelhedenrapport in een vaste, nette opmaak op staand A4: voorblad, inhoudsopgave,
1.0 Gegevens, 2.0 Diversiteit en 3.0 Hoeveelheden. Elk hoofdstuk begint op een nieuw blad en loopt zo nodig
vanzelf door. Opmaak en werking komen van de houtrot-rapportbouwer.

**Starten:** open `index.html` in Chrome of Edge. Je hoeft niets te installeren. Laat de bestanden bij elkaar staan.

## Zo werkt het

Links vul je in, rechts zie je meteen het rapport. Klik in het voorbeeld op een stuk tekst om naar het veld
te springen. Wat nog moet worden ingevuld, staat geel in het voorbeeld en met een stip bij het tabblad.

| Tabblad | Wat je invult |
|---|---|
| Project | Projectgegevens, foto voorblad, type gebouw, VHE, situatietekening en projectoverzicht |
| Diensten | Geleverde diensten, niveau, wat is opgenomen, steekproef, visualisatie |
| Elementen … Erfafscheidingen | Per onderdeel de vraag (Ja/Nee) en de constateringen |
| Hoeveelheden | Opmerkingen (leeg = niet in het rapport) en bijlagen |
| Keuzelijsten | Standaardzinnen per onderdeel, overige lijsten en de vaste teksten |
| Exporteren | Controle, opslaan en PDF |

**Een constatering** bestaat uit: titel, constatering, uitgangspunt (opgenomen / aanname / niet opgenomen),
gevolgen voor de uitvoering (geen / kleine kans / mogelijk) en twee foto's. Bij *mogelijk* komt de Let op-tekst
er vanzelf onder. Klik een standaardzin aan om te beginnen en pas de tekst gerust aan, of kies *Zelf typen*.
Met *Bewaar als standaardzin* komt een eigen zin in de keuzelijst.

**Niets verwijderen, wel verbergen:** een verborgen constatering staat niet in het rapport, maar blijft bewaard.
**Ongedaan maken:** de knop bovenin of Ctrl+Z (buiten een tekstveld), tot 30 stappen terug.
**Opslaan:** het rapportbestand (`.json`) in de projectmap (Ctrl+S). Met **Openen** ga je later verder.
**PDF:** in het afdrukvenster *Opslaan als PDF*, A4, marges *Geen*, schaal 100%, achtergrondafbeeldingen aan.

## Bestanden

| Bestand | Inhoud |
|---|---|
| `index.html` | Het programma |
| `lijsten.js` | De startlijsten: onderdelen, standaardzinnen, keuzes en vaste teksten |
| `assets/logo-calvisie.png` | Logo |
| `tools/maak-online-versie.py` | Maakt één los bestand voor de online versie in de Claude-app |
