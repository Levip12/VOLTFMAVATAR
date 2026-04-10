# ⚡ VoltFM Avatar Builder

Een professionele avatar builder voor de VoltFM community met Discord OAuth.

## 📁 Bestanden

| Bestand | Functie |
|---|---|
| `index.html` | Hoofdpagina met avatar builder |
| `callback.html` | Discord OAuth redirect handler |
| `data.js` | Configuratie & avatar onderdelen (als ES module referentie) |
| `vercel.json` | Vercel deployment configuratie |

---

## 🚀 Setup in 3 stappen

### Stap 1 — Discord App aanmaken
1. Ga naar https://discord.com/developers/applications
2. Klik **New Application** → geef het een naam (bijv. "VoltFM Avatar")
3. Ga naar **OAuth2** in het linkermenu
4. Kopieer de **Client ID**

### Stap 2 — Redirect URI instellen
1. Klik in OAuth2 op **Add Redirect**
2. Voer in: `https://jouw-project.vercel.app/callback.html`
   (gebruik `http://localhost:3000/callback.html` voor lokaal testen)
3. Klik **Save Changes**

### Stap 3 — Client ID invullen in code
Open `index.html` en zoek naar:
```js
const DISCORD_CLIENT_ID = "YOUR_DISCORD_CLIENT_ID_HERE";
```
Vervang `YOUR_DISCORD_CLIENT_ID_HERE` met jouw echte Client ID.

---

## 🌐 Deployen op Vercel

1. Push de bestanden naar een GitHub repo
2. Ga naar https://vercel.com → **New Project** → importeer de repo
3. Klik **Deploy** (geen environment variables nodig)
4. Update de Redirect URI in Discord met de Vercel URL

---

## 🎨 Avatar onderdelen aanpassen

In `index.html` kun je de arrays bovenaan aanpassen:
- `SKIN_TONES` — huidtinten (hex kleuren)
- `HAIR_STYLES` — haarstijlen (label + emoji)
- `HAIR_COLORS` — haarkleuren (hex kleuren)
- `EYE_STYLES` — oogstijlen
- `ACCESSORIES` — accessoires
- `OUTFITS` — outfits met kleuren
- `BACKGROUNDS` — achtergrondkleuren

---

## 🔒 Privacy & Security

- Geen server nodig — alles draait in de browser
- Discord token wordt alleen gebruikt voor `users/@me` (naam + avatar)
- Gebruikersdata wordt opgeslagen in `localStorage` (blijft op het apparaat)
- State parameter beschermt tegen CSRF aanvallen

---

Made with ⚡ for VoltFM
