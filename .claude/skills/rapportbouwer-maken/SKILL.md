---
name: rapportbouwer-maken
description: Werkwijze van Calvisie BV om een rapporttype (zoals de houtrotinventarisatie, of de rapporten van de hoeveelheden-/meetafdeling) om te zetten naar een eigen rapportbouwer - een vast invulformulier met live A4-voorbeeld in de Calvisie-huisstijl, klikbare keuzelijsten en PDF-export. Gebruik deze skill als Chris (of een collega) een nieuw soort rapport zo wil gaan maken, vraagt om "dezelfde aanpak als bij het houtrotrapport", of een bestaande rapportbouwer wil uitbreiden.
metadata:
  author: Calvisie BV, samen met Claude
  voorbeeld: github.com/FritsDuif/Calvisie-houtrotrapport, map rapportbuilder/ (houtrotinventarisatie)
---

# Rapportbouwer maken

Deze skill legt vast hoe de houtrot-rapportbouwer tot stand is gekomen, zodat een volgend rapporttype op
dezelfde manier kan worden aangepakt. Het doel is steeds hetzelfde: **een mooi, overzichtelijk rapport dat je
snel en zonder gedoe invult**. De opmaak staat vast, typen kan niets laten verspringen, je komt nooit ruimte
tekort, en wat het programma kan weten vult het zelf in.

Het voorbeeld staat in de repository **FritsDuif/Calvisie-houtrotrapport**, map `rapportbuilder/`. Voeg die
repository toe aan de sessie als je code wilt hergebruiken (alleen lezen is genoeg).

## Afspraken met Chris (altijd)
- Schrijf in het Nederlands, in gewone woorden. Antwoorden **kort en overzichtelijk**; niet te uitgebreid.
- **Geen nabouwer.** Er worden geen rapporten nagebouwd uit oude rapporten. Oude rapporten zijn alleen bron
  voor de structuur, vaste teksten en keuzelijsten. Calvisie schrijft het rapport zelf.
- **Eerst de opmaak, daarna pas automatiseren.** Begin niet aan slimme functies voordat de opmaak goed is.
- **Geen scores of labels** (zoals urgentie of 1–5), tenzij Chris erom vraagt. Woorden in de zin werken beter.
- **Vrij typen blijft altijd mogelijk** naast klikken. Keuzelijsten zijn in het programma zelf aan te passen.
- **Niets verwijderen, wel verbergen.** Onderdelen krijgen een knop *Verbergen* (inhoud blijft bewaard),
  geen ×. Ongedaan maken (Ctrl+Z) werkt altijd.
- Bij twijfel over de richting: **vraag het**, in een paar concrete vragen. Bouw niet groot op een aanname.
  Zegt Chris "nee, dit is niks": zet het meteen terug naar de vorige versie en vraag wat er niet bevalt.
- Houd herinneringen en openstaande punten bij in `docs/nog-te-doen.md`. Vraagt Chris "voeg toe aan nog te
  doen" of "herinner me", dan alleen noteren, niet bouwen.

## Werkwijze in fasen

### 1. Doel en randvoorwaarden
- Vraag kort: wat stoort aan het huidige rapport, wie maakt het, waar (pc, iPad), wat blijft in Bluebeam
  of Excel, en wanneer is het geslaagd.
- Een vragenlijst als online pagina met opslag werkt goed (meerkeuze plus toelichting). Lees de antwoorden
  daarna zelf uit en vat ze samen in: wat ik heb doorgevoerd, wat ik eruit haal, en de open vragen.

### 2. Bestaande rapporten laten uitlezen (lokaal, door Chris)
- Schrijf een prompt die Chris in een lokale sessie draait, in de map met rapporten (voorbeeld in de
  houtrot-repository: `docs/prompt-codes-en-zinnen-uitlezen.md`). Vraag om een Excel met: vaste teksten en
  hun varianten, zinnen per onderdeel (gesplitst en gegroepeerd met aantallen), keuzewoorden, codes, en
  fouten of afwijkingen tussen rapporten.
- Gebruik de uitkomst alleen voor **keuzelijsten op volgorde van gebruik** (of op volgorde van de codes, als
  Chris dat wil) en om fouten te vinden die de rapportbouwer voortaan voorkomt. Stel daarna concrete vragen.

### 3. Opmaak kiezen
- Laat 2–3 opmaakvoorstellen zien van dezelfde bladen met **verzonnen** voorbeeldtekst (online pagina met
  een keuzeknop). Laat Chris kiezen en mengen (bij houtrot: voorblad B met binnenbladen A).
- Vraag staand of liggend. Bij houtrot gaf liggend in twee kolommen ruimtegebrek; staand A4 met doorlopende
  tekst werkte beter.
- Huisstijl houtrot (als startpunt): A4 staand, voorblad met navy vlak en de foto er half overheen, schuine
  lijnen (wit op blauw, blauw op wit, niet door de gegevens), binnenbladen zonder kader en zonder voettekst,
  grote hoofdstukkop in hoofdletters met blauwe lijn, lichtblauwe kaders voor dingen die moeten opvallen.
- Maak een proefrapport met veel verzonnen inhoud en kijk naar halflege bladen en losse regels.

### 4. Het formulier bouwen
Begin vanaf `rapportbuilder/` uit de houtrot-repository (kopieer de map). Daarin zit al:
- een tabblad per hoofdstuk met vaste invulvelden, plus Project, Keuzelijsten en Exporteren;
- live A4-voorbeeld met doorlopende paginering, klikken in het voorbeeld springt naar het veld;
- onderdelen in- en uitklappen, verplaatsen en verbergen, ongedaan maken (Ctrl+Z);
- klikbare zinnen (verspreiding → gebrek → bouwdeel), uitklapmenu's met vinkjes, eigen tekst per regel;
- tabellen met kolommen per woningtype of blok, met een losse opmerking onder elke tabel;
- foto's met bijschrift, onderaan het blad of direct onder de tekst;
- standaardteksten met variabelen (`{opdrachtgever}`, `{aantal}` …), geel gemarkeerd als ze leeg zijn;
- opslaan als `.json`, PDF via het afdrukvenster (A4, marges Geen, schaal 100%, achtergrond aan);
- `portaal.js`: startscherm met een rapportenmap op de server (alleen in de versie op de pc, Chrome/Edge).

Pas `lijsten.js` (keuzelijsten en velden) en de standaardindeling in `index.html` aan voor het nieuwe
rapporttype. Geen installatie: het moet werken door `index.html` te openen.

### 5. Samen verfijnen via de online versie
- Chris werkt het liefst **direct in de online versie in de Claude-app** en wil niet steeds bestanden
  downloaden. Publiceer daarom na elke wijziging de online versie (één bestand, gemaakt met
  `tools/maak-online-versie.py`) op dezelfde link.
- Chris zet opmerkingen direct in de online versie. Per opmerking: aanpassen, testen in een browser
  (Playwright), committen en pushen, online bijwerken, en **in het draadje van de opmerking** kort
  antwoorden wat er is veranderd. In de chat alleen één regel.
- Bestaande rapporten in de browser altijd automatisch omzetten als de indeling verandert (migratie),
  zodat er geen werk verloren gaat.

### 6. Pas daarna: automatiseren
Bijvoorbeeld gegevens uit Bluebeam of Excel inlezen, of keuzes voorstellen op basis van tellingen.
Altijd als voorstel dat Chris kan wijzigen. Eerst samen sparren over de aanpak; bij houtrot werd een eerste
CSV-test weer verwijderd omdat de aanpak nog niet goed voelde.

## Valkuilen (uit het houtrotproject)
- Te snel te veel bouwen terwijl Chris eerst de opmaak goed wilde.
- Een "formbuilder" met losse blokken bleek te ingewikkeld; vaste velden per hoofdstuk werkten beter.
- Uitgebreide antwoorden; Chris wil het overzichtelijk.
- Iets beweren dat niet getest is (bijv. dat oude keuzes vanzelf verdwijnen). Eerst controleren.
- Voorbeeldinhoud die op echte klantgegevens leek; gebruik altijd duidelijk verzonnen voorbeelden.
