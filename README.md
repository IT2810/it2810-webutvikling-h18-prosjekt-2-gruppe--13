# Dokumentasjon, gruppe 13
## Krav til funksjonalitet
Vi valgte å bruke «tabs display» for å vise de forskjellige kombinasjonene som ble generert. I React har vi komponenten Tabs som inneholder flere av komponenten Tab. Det kan kun være én aktiv Tab om gangen innad i en Tabs-komponent. Utstillingen er basert på filnavn, altså vil alltid bilde 1 komme i tab nummer 1, bilde 2 komme i tab nummer 2 og så videre. Det går an å gjøre det dynamisk, men vi så ikke på dette som en hensiktsmessig feature å bruke tid på i dette prosjektet. Startsiden er en tom utstilling med velkomsttekst som sier at brukeren må velge en kategori fra både bilde, lyd og tekst før det skjer noe. Dersom brukeren gjør dette vil innholdet bli vist slik brukeren har valgt.

Kategoriene våre for bilder er “Humans”, “Nature” og “Illustrations”. Kategoriene våre for tekst er “Poem”, “Fun fact”  og “Quote”. Kategoriene våre for lyd er “Humans”, “Nature” og “Life”. Alle SVG-ene, enkelte tekster og alle quotes er hentet fra nett, lydene er selvprodusert. 

Angående responsiv web-design bruker vi Media Queries, CSS Grid og CSS Flexbox, og følger kravene til teknologi som er satt. Mer informasjon om dette under.

## Krav til teknologi
Løsningen vår bruker React, JSX og JavaScript/ES6 med klassestruktur som spesifisert i oppgaveteksten. Vi har kun brukt state og props for å lagre data og sende data mellom komponenter, ingen Redux eller lignende. Props for å sende informasjon nedover/oppover til/fra en komponent, state for å holde på informasjon innad i komponentene. App er vår øverste komponent, som tar seg av det meste av logikken på nettsiden. Videre bruker vi RadioButtonController som inneholder flere RadioButton for å håndtere hvilken kategori som er valgt innenfor bilde, lyd og tekst. RadioButtonController kaller på et prop som viser til en funksjon i App hver gang state endrer seg, og App endrer da sin state via informasjonen som ble gitt oppover.

Inne i hver Tab finner vi en MediaContainer. App kontrollerer komponenten MediaContainer – den er altså “fully controlled” og har ingen egen state. MediaContainer inneholder bildet, teksten og lyden som er valgt, og blir ikke rendret med mindre en kategori er valgt for hver av de. Det er som nevnt én MediaContainer i hver Tab, og de blir kun synlige når den respektive Tab-komponenten er aktiv. I MediaContainer brukes komponentene SvgFile, TextFile og SoundFile. Disse blir gitt en id via props, og bruker dette til å gjøre AJAX-kall for å hente ut filene de skal vise. I SvgFile bruker vi componentWillReceiveProps, som er en metode som har blitt deprecated og ikke lenger er best practice. Vi var ikke klar over dette før sent i prosjektet, og konkluderte med at komponenten antakeligivs fungerte greit og at vi ikke kunne ta oss tid til å fikse det.

Vi valgte å bruke biblioteket axios for AJAX-kall. Dette var på grunn av at syntaksen var veldig grei å forstå, og vi fant en guide som beskrev hvordan vi kunne bruke axios med React. I SvgFile brukes memoisering for at filer ikke skal lastes inn flere ganger, i SoundFile henter vi bare direkte fra mappe og bruker audio-tagen i HTML5. I TextFile brukes ikke disse løsningene på grunn av at vi ikke fant enkle måter å gjøre det på, og at vi slet med å få dette til å fungere skikkelig på en god måte. All teksten vi har ligger i én .json-fil som lastes inn når tekst skal vises. Id-feltet i .json-fila bestemmer hva som hentes ut, og vi synes dette fungerte veldig greit. Vi så ikke på det som hensiktsmessig å ha separate .json-filer for hver lille tekst, da man nesten like godt kunne hatt vanlige tekstfiler på den måten. 

Designet på siden er responsivt etter kravene som er satt i oppgaven. Vi bruker Media Queries for å få til dette, sammen med CSS Grid og CSS Flexbox. Dersom bredden på skjermen er stor nok fyller programmet seg ut i bredden, men legger seg i høyden dersom skjermen er liten. Vi har også støtte for landskapsmodus på telefon og tablet. Bilder og tekst skalerer til skjermstørrelse, og vi bruker Viewport for å skalere det som vises til skjermstørrelsen. Vi vil si at layouten er fleksibel og enkel å forstå, både på brede PC-skjermer og på mobilskjermer. I henhold til oppgaveteksten er dette gjort uten biblioteker eller rammeverk.

Prosjektet ligger på git og har god fikstruktur, logisk navngiving av komponenter og for det meste best practice-metoder implementert (med ett unntak vi er klare over, ref. teksten over). Vi har brukt issues i github for å distribuere arbeidsoppgaver, og de fleste commits er merket med hvilket issue de løser. Noen ganger har dette gått i glemmeboken, men vi har prøvd å få det til i de viktigste tilfellene. 

##Testdokumentasjon

Viser til oppgavens krav til dokumentasjon av testing:

«Testing i denne prosjektet har fokus på brukegrensensitt og repsonsiv web design. 
Gruppa skal dokumentere testing på minimum 3 forskjellige enheter hvor det må inngå en mobil (lite skjerm/horisontal + vertikal orientering og en ordinær pc (stor skjerm). 
Test brukergrensesnitt systematisk og dokumenter hvordan dere har test.»

For å løse problemet valgte vi å bruke Google Chrome, som støtter muligheten for valg av device ved innlasting av nettside. Det ble gjennomført tester for ”Responsive device” (maskinen vi testet på i utgangspunktet, en Macbook Pro) og "Pixel 2". Vi testet i tillegg på en OnePlus 5 telefon, med dens Google Chrome applikasjon (nettleser).

Vi satte opp en test for webapplikasjonen på datamaskin, og gjorde nødvendige endringer på testen for testing på mobil-enheter. De følgende tre testene ble gjennomført:



| Device                                                            | Google Chrome MacOS               |
|-------------------------------------------------------------------|-----------------------------------|
| Oppgave                                                           | Resultat                          |
| 1. Last inn webapplikasjonen                                      | Webapplikasjonen lastet inn riktig |
| 2. Velg kategorier innenfor hvert media                           | Knappene fungerer og innholdet byttet|
| 3. Bytt mellom galleriene                                         | Inneholdet i tabview byttes             |
| 4. Spill av lyd                                                   | Lyden spiller av             |
| 5. Bytt galleri samtidig som lyden spilles av                     | Lyden stopper, innholdet i tab byttes|
| 6. Gjør skaleringen på vinduet mindre                             | Vinduet blir mindre, og webapplikasjonen skalerer deretter  |
| 7. Etter skaleringen er mindre, gjennomfør testene 2.-5. Om igjen | Alt fungerer som i de forrige testene  |



| Device                                                            | Google Chrome MacOS               |
|-------------------------------------------------------------------|-----------------------------------|
| Oppgave                                                           | Resultat                          |
| 1. Last inn webapplikasjonen                                      | Webapplikasjonen lastet inn riktig |
| 2. Velg kategorier innenfor hvert media                           | Knappene fungerer og innholdet byttet|
| 3. Bytt mellom galleriene                                         | Inneholdet i tabview byttes             |
| 4. Spill av lyd                                                   | Lyden spiller av             |
| 5. Bytt galleri samtidig som lyden spilles av                     | Lyden stopper, innholdet i tab byttes|
| 6. Gjør skaleringen på vinduet mindre                             | Vinduet blir mindre, og webapplikasjonen skalerer deretter  |
| 7. Etter skaleringen er mindre, gjennomfør testene 2.-5. Om igjen | Alt fungerer som i de forrige testene  |



| Device                                                            | OnePlus 5 |
|                                                                   | (Nettleser på mobilen, google chrome |
|-------------------------------------------------------------------|--------------------------------------|
| Oppgave                                                           | Resultat |
| 1. Last inn webapplikasjonen                                      | Webapplikasjonen lastet inn |
| 2. Velg kategorier innenfor hvert media                           | Knappene fungerer, innholdet byttet |
| 3. Bytt mellom galleriene                                         | Innholdet i tabview byttes  |
| 4. Spill av lyd                                                   | Lyden spilles av  |
| 5. Bytt galleri samtidig som lyden spilles av                     | Lyden stopper, og innholdet byttes  |
| 6. Endre fra vertical-view til horizontal-view                    | Webapplikasjonen tilpasser seg, og gir et bedre tilpasset view |
| 7. Etter endret view, gjennomfør testene 2.-5. Om igjen           | Alt fungerer som ved forrige test   |


| Device                                                            | Pixel 2                                                        |
|                                                                   |(Gjennom                                                        |
|                                                                   |Google Chrome)                                                  |
|-------------------------------------------------------------------|----------------------------------------------------------------|
| Oppgave                                                           | Resultat                                                       |
| 1. Last inn webapplikasjonen                                      | Webapplikasjonen lastet inn                                    |
| 2. Velg kategorier innenfor hvert media                           | Knappene fungerer, innholdet byttet                            |
| 3. Bytt mellom galleriene                                         | Innholdet i tabview byttes                                     |
| 4. Spill av lyd                                                   | Lyden spilles av                                               |
| 5. Bytt galleri samtidig som lyden spilles av                     | Lyden stopper, og innholdet byttes                             |
| 6. Endre fra vertical-view til horizontal-view                    | Webapplikasjonen tilpasser seg, og gir et bedre tilpasset view |
| 7. Etter endret view, gjennomfør testene 2.-5. Om igjen           | Alt fungerer som ved forrige test                              |





Kilder
Axios with React – https://alligator.io/react/axios-react/
Tabs with React – https://alligator.io/react/tabs-component/ 
Responsiv web-design – https://www.w3schools.com/Css/css_rwd_intro.asp 
React docs – https://reactjs.org/docs
React lifecycle – https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d 
