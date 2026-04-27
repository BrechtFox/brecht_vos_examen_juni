# 🏎️ SlotCar Collectie Tracker

Een dynamische webapplicatie waarmee je jouw **slotrace auto collectie** kan beheren.  
Je kan auto's toevoegen, bekijken, bewerken, verwijderen, filteren en sorteren.  
Alle gegevens worden opgeslagen in **localStorage**, zodat ze bewaard blijven na het sluiten van de browser.

---

## 🌍 Live Demo

https://brechtfox.github.io/brecht_vos_examen_juni/

---

## 📌 Projectbeschrijving

Deze applicatie is ontwikkeld als opdracht voor het vak Web Development.

De app bestaat uit twee pagina’s:

- 📋 **Overzichtspagina** – toont alle slotrace auto's in een dynamische lijst  
- ➕ **Toevoegpagina** – formulier om nieuwe auto's toe te voegen en te bewerken  

---

## ⚙️ Functionaliteiten

- ✅ Nieuwe auto’s toevoegen  
- ❌ Auto’s verwijderen  
- 🔎 Filteren op merk, schaal of status  
- ↕️ Sorteren (alfabetisch, prijs…)  
- 📊 Samenvatting bekijken (totaal aantal, gemiddelde prijs, totale waarde…)

---

## 🛠️ Gebruikte technologieën

- HTML5  
- CSS3 (responsive design – CRAP-principe)  
- JavaScript (ES6 modules)  
- localStorage  
- Git & GitHub  
- GitHub Pages  

---

## 📦 Data-structuur

De applicatie werkt met een **array van objecten**.

Voorbeeld van een auto-object:

```js
{
  maker: "BRM",
  carClass: "minicar",
  brand: "mini",
  scale: "1:24",
  color: "Rood",
  state: "nieuw",
  price: 49.99
}
```

Alle gegevens worden opgeslagen in localStorage als JSON.

## info localstorage
schaal (1:24; 1:32)
maker (bv. BRM...)
klasse (bv. minicar, GT...)
merk (bv. Porche, Ferrari...)
prijs
kleur
staat (nieuw, gebruikt, beschadigd)

---

## 🧠 Toegepaste JavaScript Concepten

- ES Modules (meerdere JS-bestanden)
- const en let
- Arrow functions `() =>`
- Klassieke functions
- Array methods:
  - push()
  - splice()
  - filter()
  - sort()
  - map()
  - reduce()
- DOM-manipulatie
- addEventListener (click, submit, input)
- DRY-principe
- JSON.parse() en JSON.stringify()

---

## 📱 Responsive Design

- Flexbox / Grid layout  
- Duidelijke hiërarchie  
- Goede contrasten  
- Consistente spacing  
- Mobielvriendelijke weergave  

---

## 📂 Projectstructuur

```
/index.html
/css/style.css
/plan.md
/README.md
```

---

## 📚 Bronnen

Hier vermeld je alle gebruikte bronnen:

- ChatGPT

---

## 👨‍💻 Auteur

Naam: [Brecht Vos]  
Klas: [5ADB]  
Vak: App-ontwikkeling

---

## 🚀 Status

🛠️ In ontwikkeling