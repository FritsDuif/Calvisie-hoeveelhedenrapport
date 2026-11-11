/* Startlijsten voor de rapportbouwer hoeveelheden.
   Alles hier is in het programma aan te passen (tabblad Keuzelijsten). Dit bestand is alleen het begin.
   Standaardzinnen: [titel, constatering, hoeveelheden, gevolg, verborgen, uitgangspunt]
     uitgangspunt: de standaard waarvan wij zijn uitgegaan (tekst, mag leeg)
     hoeveelheden: 'ja' = opgenomen, 'aanname' = opgenomen op basis van een aanname, 'nee' = niet opgenomen
     gevolg:       'geen' = geen gevolgen, 'klein' = kleine kans, 'groot' = mogelijk gevolgen (Let op-tekst erbij) */
window.LIJSTEN = {
  ONDERDELEN: [
    { id:'elementen', nr:'2.1', titel:'Elementen',
      afwijkend:'Zijn er afwijkende elementen geconstateerd binnen het complex?',
      nee:'Er zijn geen afwijkende elementen geconstateerd.' },
    { id:'beglazing', nr:'2.2', titel:'Beglazing', glas:true,
      eerst:'Is de beglazing door Calvisie ingemeten?',
      eerstJa:'De beglazing is door Calvisie ingemeten. In de verstrekte gegevens is de volgende standaard vastgesteld:',
      eerstNee:'De beglazing is niet door Calvisie ingemeten.',
      afwijkend:'Is er afwijkende beglazing geconstateerd binnen het complex?',
      nee:'Er is geen afwijkende beglazing geconstateerd.' },
    { id:'zav', nr:'2.3', titel:'ZAV (zelf aangebrachte voorzieningen)', kort:'ZAV',
      afwijkend:'Zijn er zelf aangebrachte voorzieningen geconstateerd binnen het complex?',
      nee:'Er zijn geen zelf aangebrachte voorzieningen geconstateerd.' },
    { id:'behandelingen', nr:'2.4', titel:'Behandelingen',
      afwijkend:'Zijn er afwijkende behandelingssystemen geconstateerd ten opzichte van de basis?',
      nee:'Er zijn geen afwijkende behandelingen geconstateerd ten opzichte van de basis.' },
    { id:'daken', nr:'2.5', titel:'Daken',
      eerst:'Is het dak door Calvisie opgenomen?',
      eerstJa:'Het dak is door Calvisie opgenomen.',
      eerstNee:'Het dak is niet door Calvisie opgenomen.',
      afwijkend:'Zijn er afwijkingen in de daken geconstateerd?',
      nee:'Er zijn geen afwijkingen in de daken geconstateerd.' },
    { id:'erf', nr:'2.6', titel:'Erfafscheidingen',
      eerst:'Zijn de erfafscheidingen door Calvisie opgenomen?',
      eerstJa:'De erfafscheidingen zijn door Calvisie opgenomen.',
      eerstNee:'De erfafscheidingen zijn niet door Calvisie opgenomen.',
      afwijkend:'Zijn er afwijkende erfafscheidingen geconstateerd binnen het complex?',
      nee:'Er zijn geen afwijkende erfafscheidingen geconstateerd.' }
  ],

  ZINNEN: {
    elementen: [
      ['Bovenlichten verschillend uitgevoerd', 'Van de 10 kozijnen met deur en bovenlicht hebben er 7 een klepraam als bovenlicht en 3 een vaste ruit.', 'nee', 'klein', false, 'Wij zijn in onze hoeveelheden uitgegaan van één standaard: het kozijn met een klepraam als bovenlicht.'],
      ['Toegangspoorten niet opgenomen', 'De metalen toegangspoorten naar de achtergevels en bergingen hebben wij niet opgenomen in onze hoeveelheden.', 'nee', 'klein'],
      ['Dakramen deels vervangen', 'Enkele dakramen zijn al vervangen door nieuwe dakramen.', 'nee', 'klein']
    ],
    beglazing: [
      ['Beglazing plaatselijk vervangen', 'De beglazing is op enkele plekken vervangen door nieuwere beglazing. Hierin is geen duidelijk patroon te herkennen.', 'nee', 'groot', false, 'Wij zijn voor alle woningen uitgegaan van de oorspronkelijke beglazing uit de tabel hierboven.']
    ],
    zav: [
      ['Zonwering door bewoners', 'De door bewoners geplaatste zonwering hebben wij niet opgenomen in onze hoeveelheden.', 'nee', 'geen'],
      ['Bergingen aangepast of verlengd', 'De door bewoners aangepaste of verlengde bergingen hebben wij niet opgenomen in onze hoeveelheden.', 'nee', 'geen'],
      ['Extra bergruimten', 'De door bewoners geplaatste extra bergruimten hebben wij niet opgenomen in onze hoeveelheden.', 'nee', 'geen'],
      ['Uitbouwen door bewoners', 'De door bewoners gerealiseerde uitbouwen hebben wij niet opgenomen in onze hoeveelheden.', 'nee', 'geen'],
      ['Overkappingen door bewoners', 'De door bewoners gerealiseerde overkappingen hebben wij niet opgenomen in onze hoeveelheden.', 'nee', 'geen'],
      ['Invalidenhelling', 'De door bewoners geplaatste invalidenhelling hebben wij niet opgenomen in onze hoeveelheden.', 'nee', 'geen'],
      ['Extra kozijn door bewoners', 'Door bewoners is een extra kozijn in de gevelopening geplaatst. Dit hebben wij niet opgenomen in onze hoeveelheden.', 'nee', 'geen']
    ],
    behandelingen: [
      ['Berging of erfafscheiding door bewoners behandeld', 'Enkele bewoners hebben de berging en/of erfafscheiding zelf behandeld. In onze hoeveelheden hebben wij dit als onbehandeld opgenomen, omdat dit de standaard is.', 'nee', 'geen'],
      ['Rabatdelen berging behandeld', 'Enkele bewoners hebben de houten rabatdelen van de berging behandeld.', 'nee', 'geen']
    ],
    daken: [],
    erf: [
      ['Gemetselde erfafscheidingen opgenomen', 'De gemetselde erfafscheidingen hebben wij opgenomen in onze hoeveelheden.', 'ja', 'geen'],
      ['Houten erfafscheidingen niet opgenomen', 'De houten erfafscheidingen hebben wij niet opgenomen in onze hoeveelheden.', 'nee', 'geen']
    ]
  },

  UITGANGSPUNT: { ja:'Opgenomen in de hoeveelheden', aanname:'Opgenomen op basis van een aanname', nee:'Niet opgenomen in de hoeveelheden' },
  GEVOLG: { geen:'Geen gevolgen verwacht', klein:'Kleine kans op gevolgen', groot:'Mogelijk gevolgen, afstemmen met opdrachtgever' },
  LETOP: 'Wij adviseren dit terug te koppelen aan de opdrachtgever en zo nodig aanvullend onderzoek te laten doen door de opdrachtgever of derden.',

  TYPE_GEBOUW: ['Eengezinswoningen', 'Galerijwoningen', 'Portiekwoningen', 'Appartementen', 'Seniorenwoningen'],
  ALG_RUIMTE: ['Niet aanwezig', 'Trappenhuis', 'Galerij', 'Bergingsgang'],
  DIENSTEN: ['Hoeveelheden', 'Conditiemeting', 'Houtrot', 'Visualisatie'],
  NIVEAUS: ['1 Basic', '2 Elements', '3 Scenario', '4 Visuals'],
  OPNAME: ['Buiten', 'Binnen', 'Beglazing', 'Daken'],
  STEEKPROEF: ['10%', '20%', '30%', '50%', '100%', 'In overleg met opdrachtgever'],
  VISUALISATIE: ['Foto', 'Tekeningen', 'Autocad', 'Drone'],
  GLASSOORT: ['HR++-beglazing', 'HR+-beglazing', 'Isolatieglas', 'Enkel glas', 'Draadglas'],
  RUIMTE: ['Gehele woning', 'Woon- en slaapvertrekken', 'Bergingen', 'Trappenhuis', 'Kozijnmerk '],
  BIJLAGEN: ['Verzamelstaat', 'Meetregels', 'Meetgegevens (Excel)', 'Situatietekening', 'Visualisatie'],

  /* vaste teksten: altijd hetzelfde in elk rapport */
  VAST: {
    over: 'In dit rapport leggen wij vast wat wij tijdens de schouw hebben geconstateerd en welke uitgangspunten wij voor de hoeveelheden hebben gehanteerd. Per constatering staat van welke standaard wij zijn uitgegaan, of wij het verschil wel of niet hebben opgenomen, en of het mogelijk gevolgen heeft voor de uitvoering. De hoeveelheden zelf vindt u in de bijlagen.',
    diversiteit: [
      'De gegevens die Calvisie heeft vastgelegd, zijn gebaseerd op een standaard of basispatroon dat wij binnen het complex herkennen.',
      'Wij schouwen niet elke woning afzonderlijk. Wij stellen per woningtype een standaard vast en zetten die door naar het hele complex.',
      'Hieronder leest u welke diversiteit wij hebben aangetroffen en welke uitgangspunten wij daarbij hebben gehanteerd.',
      'Onze opdracht omvat in de basis geen warme opname naar diversiteit en grilligheid.',
      'Per constatering geven wij aan of dit mogelijk gevolgen heeft voor de uitvoering.'
    ],
    hoeveelheden: 'De hoeveelheden zijn gebaseerd op het basispatroon dat wij binnen het complex herkennen. Zie voor de diversiteit en onze uitgangspunten hoofdstuk 2.',
    algemeen: [
      'Als wij geen medewerking krijgen om onderdelen te inventariseren, of als onderdelen redelijkerwijs moeilijk bereikbaar zijn, schatten wij de afmetingen in. Deze aanname kan afwijken van de werkelijkheid. Houd hier rekening mee in uw scenario.',
      'Wijzigingen in het project die van belang zijn voor de gegevens, dienen tijdig te worden doorgegeven, zodat Calvisie deze tijdens de schouw kan verwerken.'
    ],
    werkwijze: [
      'Bij houten gevelkozijnen en ramen hebben wij het liggend werk apart opgenomen van de overige stijlen en bovendorpels. Tel de hoeveelheden van het liggend werk op bij de overige gevelkozijnen voor het totaal aantal strekkende meters.',
      'Stalen, kunststof en stenen onderdelen die structureel zijn behandeld, staan in het bestek vermeld als ‘behandeld’. Dit geldt niet voor onderdelen die niet structureel of door bewoners zijn behandeld.',
      'Gevelkozijnen en draaiende delen die meer dan 100 cm beschut liggen, staan in het bestek vermeld als ‘inpandig’.',
      'Als wij hoeveelheden van daken en bijbehorende elementen verstrekken, zijn dit altijd aannames.',
      'Bij complexen met kunststof kozijnen hebben wij de kozijnen zowel in vierkante meters (extra) als in strekkende meters opgenomen.'
    ],
    uitsluitingen: [
      'Onderdelen die niet in onze verzamelstaat staan, hebben wij niet opgenomen. Deze worden verrekend als meerwerk.',
      'Beglazing hebben wij opgenomen als hoeveelheden, zonder warme opname. Wij doen daarom geen uitspraak over de soort beglazing (enkel glas, isolatieglas of HR+-glas).',
      'Aan- en verbouwingen die bewoners zelf hebben aangebracht (ZAV), hebben wij niet opgenomen.',
      'Afdichtingen tussen kozijn en gevel hebben wij niet opgenomen.'
    ]
  }
};
