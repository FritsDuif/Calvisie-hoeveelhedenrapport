# Startprompt: hoeveelhedenrapport

*Plak de tekst hieronder (vanaf de lijn) in een nieuwe Claude Code-sessie op deze repository. Vul vooraf de
stukjes tussen [vierkante haken] in, of laat ze leeg; Claude vraagt er dan naar. Voeg ook 2–3 voorbeelden
van huidige hoeveelhedenrapporten toe (PDF of Excel), met verzonnen of geanonimiseerde gegevens als dat nodig is.*

---

Hoi Claude. Ik ben Chris van Calvisie BV. Onze meetafdeling maakt hoeveelhedenrapporten en ik wil die
net zo aanpakken als ons houtrotrapport: een eigen **rapportbouwer** met een vast invulformulier, een live
A4-voorbeeld in onze huisstijl, klikbare keuzelijsten en een PDF-export.

**Gebruik de skill `rapportbouwer-maken`** in deze repository; daar staat onze werkwijze en onze afspraken.
Het voorbeeld is de houtrot-rapportbouwer in de repository **FritsDuif/Calvisie-houtrotrapport** (map
`rapportbuilder/`). Voeg die toe aan de sessie om te lezen en code te hergebruiken; pas daar niets in aan.

**Wat ik nu weet over het hoeveelhedenrapport**
- Waar het voor is: [bijv. hoeveelheden per element voor een onderhouds- of vervangingsbegroting]
- Wie het maakt en wie het leest: [bijv. meetafdeling maakt het, opdrachtgever/aannemer leest het]
- Waarmee het nu gemaakt wordt: [bijv. Bluebeam-markups + Excel, daarna in Word/Bluebeam opgemaakt]
- Wat me nu stoort: [bijv. veel overtypen, tabellen verspringen, geen vaste opmaak]
- Wat er in elk geval in moet: [bijv. voorblad, inleiding, uitgangspunten, hoeveelhedentabellen per blok
  of element, opmerkingen, bijlagen]
- Wanneer het geslaagd is: [bijv. rapport in een kwartier klaar, alles past, collega's kunnen het ook]

**Hoe ik wil werken**
1. Begin met **vragen**, niet met bouwen. Stel eerst een korte, concrete vragenlijst op (meerkeuze waar het
   kan), zodat je het doel en de inhoud goed snapt. Vraag ook naar eenheden (m1, m2, stuks), afrondingen,
   en hoe hoeveelheden per blok, woningtype of gevel worden opgeteld.
2. Kijk naar mijn voorbeeldrapporten **alleen voor structuur, vaste teksten en keuzelijsten**. Bouw geen
   oude rapporten na.
3. Laat me daarna 2–3 opmaakvoorstellen zien met duidelijk verzonnen voorbeeldinhoud, in dezelfde huisstijl
   als het houtrotrapport. Ik kies, daarna bouw je.
4. **Eerst de opmaak, daarna pas automatiseren** (zoals Bluebeam-CSV of Excel inlezen). Daar sparren we
   eerst over.
5. Vrij typen moet altijd kunnen; niets verwijderen maar verbergen; ongedaan maken moet werken.
6. Ik werk het liefst in de **online versie in de Claude-app**. Publiceer die na elke wijziging opnieuw op
   dezelfde link; ik geef opmerkingen daar in het draadje.
7. Antwoord in het Nederlands, kort en overzichtelijk. Houd open punten bij in `docs/nog-te-doen.md`.
8. Commit en push je werk; open alleen een pull request als ik erom vraag.

Begin met je vragenlijst.
