# 🗺️ Stappenplan – SlotCar Collectie Tracker

Dit document beschrijft stap voor stap hoe de applicatie wordt opgebouwd.  
De focus ligt op structuur, logica, herbruikbaarheid (DRY) en correcte toepassing van JavaScript-concepten.

---

# FASE 1 – Projectvoorbereiding

## 1. Repository correct instellen

- GitHub Classroom repository gebruiken
- GitHub Pages activeren
- Basis mappenstructuur maken:

```
/index.html
/add.html
/css/style.css
/js/script.js
/js/add.js
/README.md
```

- Eerste commit: `project setup + folder structure`

**Status**: Done

---

# FASE 2 – HTML Structuur

## 2. Basislayout maken (beide pagina’s)

### Gemeenschappelijk:
- Header met titel + navigatie
- Footer
- Responsive container
- Link naar CSS
- Script met `type="module"`

### index.html (overzicht)
- Filter sectie
- Sorteer dropdown
- Container voor auto's (grid of cards)
- Samenvatting sectie (statistieken)

### add.html (toevoegen/bewerken)
- Formulier met:
  - maker (text)
  - klasse (text of select)
  - merk (text)
  - schaal (select 1:24 / 1:32)
  - prijs (number)
  - kleur (text)
  - staat (select: nieuw / gebruikt / beschadigd)
  - favoriet (checkbox)
- Submit knop
- Eventueel verborgen input voor ID (bij bewerken)

Commit: `html structuur klaar`

**Status**: In progress

---

# FASE 3 – CSS Styling

## 3. Basis styling

- Reset
- Variabelen voor kleuren
- Consistente spacing
- Flexbox / Grid layout
- Responsive design (mobile first)

## 4. Cards styling

- Auto in kaartvorm
- Duidelijke hiërarchie
- Favoriet visueel herkenbaar (⭐ of kleur)
- Knoppen: edit / delete

Commit: `responsive layout + card design`

**Status**: In progress

---

# FASE 4 – Data & Storage Logica

## 5. storage.js maken

Functies:

- getCars()
  - Haalt data uit localStorage
  - JSON.parse()
  - Retourneert lege array indien niets bestaat

- saveCars(cars)
  - JSON.stringify()
  - Opslaan in localStorage

- generateId()
  - Unieke ID maken (Date.now())

Commit: `localStorage module klaar`

**Status**: Not started

---

# FASE 5 – Toevoegen Functionaliteit (add.js)

## 6. Form submit event

- addEventListener("submit")
- preventDefault()
- Form validatie
- Object maken

Voorbeeld structuur:

```
{
  id: Date.now(),
  maker,
  klasse,
  merk,
  schaal,
  prijs: Number(prijs),
  kleur,
  staat,
  favoriet: checkbox.checked
}
```

- push() gebruiken
- saveCars() oproepen
- Redirect naar index.html

Commit: `add functionaliteit werkend`

**Status**: Not started

---

# FASE 6 – Overzicht Pagina (script.js)

## 7. Data ophalen

- getCars() uitvoeren
- renderCars(cars) functie maken

## 8. DOM render functie (DRY!)

renderCars() moet:
- Container leegmaken
- map() gebruiken
- HTML genereren
- Event listeners koppelen (delete / edit)

Commit: `cars renderen in DOM`

**Status**: Not started

---

# FASE 7 – Verwijderen

## 9. Delete knop

- click event
- id ophalen via dataset
- splice() gebruiken
- saveCars()
- opnieuw renderen

Commit: `delete functionaliteit`

**Status**: Not started

---

# FASE 8 – Bewerken

## 10. Edit knop

- Doorsturen naar add.html?id=123
- URLSearchParams gebruiken
- Bestaand object zoeken met find()
- Formulier vooraf invullen
- Bij submit: object overschrijven i.p.v. push()

Commit: `edit functionaliteit`

**Status**: Not started

---

# FASE 9 – Filter & Sort

## 11. Filteren

- filter() gebruiken
- Filter op:
  - schaal
  - staat
  - favoriet

- input event koppelen

## 12. Sorteren

- sort() gebruiken
- Sorteren op:
  - prijs
  - merk
  - maker

Commit: `filter en sort werkend`

**Status**: Not started

---

# FASE 10 – Statistieken & Berekeningen

## 13. Samenvatting maken

Gebruik reduce():

- Totaal aantal auto's
- Totale waarde collectie
- Gemiddelde prijs
- Duurste auto
- Aantal favorieten

Commit: `statistieken toegevoegd`

**Status**: Not started

---

# FASE 11 – Extra Functionaliteit (Voor Extra Punten)

Mogelijke uitbreidingen:

- Zoekbalk (live search)
- Dark mode toggle
- Export naar JSON bestand
- Import functie
- Grafiek met Chart.js
- LocalStorage reset knop
- Animaties bij toevoegen/verwijderen

---

# FASE 12 – Code Kwaliteit & Optimalisatie

## 14. DRY controleren

- Herhalende code in utils.js plaatsen
- Kleine functies maken
- Logische naamgeving

## 15. Code controleren op:

- const standaard gebruiken
- Alleen let indien nodig
- Functies combineren met arrow functions
- Overbodige console.logs verwijderen

Commit: `code cleanup`

**Status**: Not started

---

# FASE 13 – Testen

## 16. Testcases

- Toevoegen werkt?
- Bewerken werkt?
- Verwijderen werkt?
- Data blijft bewaard na refresh?
- Filter en sort samen?
- Mobiel correct?

---

# FASE 14 – Afwerking

## 17. README controleren
- Correcte uitleg
- Live link werkt
- Bronnen correct vermeld

## 18. Laatste commit
`final version examenproject`

**Status**: Not started

---

# 🎯 Einddoel

Een volledig werkende, foutloze, responsieve webapplicatie die:

- Data beheert via localStorage
- Arrays van objecten gebruikt
- Verschillende array methods toepast
- Meerdere events gebruikt
- Berekeningen uitvoert
- Netjes gestructureerde en herbruikbare code bevat
- Klaar is voor mondelinge verdediging