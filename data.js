// VoltFM Avatar Builder - Configuration & Data
// =============================================
// Discord OAuth2 Settings — vervang CLIENT_ID met jouw Discord App Client ID
// Maak een Discord app op: https://discord.com/developers/applications

export const DISCORD_CONFIG = {
  CLIENT_ID: "1492216788640071781",
  // Zet deze URL in je Discord App onder OAuth2 > Redirects
  REDIRECT_URI:
    typeof window !== "undefined"
      ? `${window.location.origin}/callback.html`
      : "https://voltfmavatar.vercel.app/callback.html",
  SCOPE: "identify",
};

// Avatar Parts Library
// Voeg hier meer varianten toe door base64 SVG strings te plakken of pad-data
export const AVATAR_PARTS = {
  // ── Skin tones ────────────────────────────────────────────────
  skinTones: [
    { id: "s1", label: "Licht", color: "#FDDBB4" },
    { id: "s2", label: "Medium", color: "#E8B98A" },
    { id: "s3", label: "Warm",   color: "#C68642" },
    { id: "s4", label: "Donker", color: "#8D5524" },
    { id: "s5", label: "Diep",   color: "#4A2912" },
  ],

  // ── Haar stijlen ──────────────────────────────────────────────
  hairStyles: [
    { id: "h0", label: "Kaal",       icon: "🧑" },
    { id: "h1", label: "Kort",       icon: "💇" },
    { id: "h2", label: "Pompadour",  icon: "🕺" },
    { id: "h3", label: "Krullen",    icon: "👩‍🦱" },
    { id: "h4", label: "Lang",       icon: "👱‍♀️" },
    { id: "h5", label: "Staart",     icon: "🎀" },
    { id: "h6", label: "Afro",       icon: "👩‍🦳" },
  ],

  // ── Haar kleuren ──────────────────────────────────────────────
  hairColors: [
    { id: "hc1", label: "Blond",   color: "#D4A017" },
    { id: "hc2", label: "Bruin",   color: "#6B3A2A" },
    { id: "hc3", label: "Zwart",   color: "#1C1C1C" },
    { id: "hc4", label: "Rood",    color: "#A0220D" },
    { id: "hc5", label: "Grijs",   color: "#9E9E9E" },
    { id: "hc6", label: "Wit",     color: "#F0F0F0" },
    { id: "hc7", label: "Blauw",   color: "#1E6FA5" },
    { id: "hc8", label: "Roze",    color: "#E91E8C" },
    { id: "hc9", label: "Groen",   color: "#2E7D32" },
    { id: "hc10",label: "Paars",   color: "#7B1FA2" },
  ],

  // ── Ogen ──────────────────────────────────────────────────────
  eyeStyles: [
    { id: "e1", label: "Normaal",  icon: "👀" },
    { id: "e2", label: "Blij",     icon: "😊" },
    { id: "e3", label: "Cool",     icon: "😎" },
    { id: "e4", label: "Knipoog", icon: "😉" },
    { id: "e5", label: "Ster",    icon: "🌟" },
  ],

  // ── Accessoires ───────────────────────────────────────────────
  accessories: [
    { id: "a0", label: "Geen",          icon: "❌" },
    { id: "a1", label: "Zonnebril",     icon: "🕶️" },
    { id: "a2", label: "Bril",          icon: "🤓" },
    { id: "a3", label: "Koptelefoon",   icon: "🎧" },
    { id: "a4", label: "Pet",           icon: "🧢" },
    { id: "a5", label: "Kroon",         icon: "👑" },
    { id: "a6", label: "Hoed",          icon: "🎩" },
    { id: "a7", label: "Microfoon",     icon: "🎤" },
  ],

  // ── Outfits ───────────────────────────────────────────────────
  outfits: [
    { id: "o1", label: "Casual",    icon: "👕", color: "#455A64" },
    { id: "o2", label: "Pak",       icon: "🤵", color: "#263238" },
    { id: "o3", label: "Hoodie",    icon: "🧥", color: "#1976D2" },
    { id: "o4", label: "VoltFM",    icon: "⚡", color: "#FF6B00" },
    { id: "o5", label: "DJ Set",    icon: "🎧", color: "#6A1B9A" },
    { id: "o6", label: "Sportief",  icon: "👟", color: "#00897B" },
  ],

  // ── Achtergrond kleuren ───────────────────────────────────────
  backgrounds: [
    { id: "bg1",  label: "Oranje",    color: "#FF6B00" },
    { id: "bg2",  label: "Paars",     color: "#6A1B9A" },
    { id: "bg3",  label: "Blauw",     color: "#0D47A1" },
    { id: "bg4",  label: "Groen",     color: "#1B5E20" },
    { id: "bg5",  label: "Rood",      color: "#B71C1C" },
    { id: "bg6",  label: "Donker",    color: "#121212" },
    { id: "bg7",  label: "Neon",      color: "#00E676" },
    { id: "bg8",  label: "Roze",      color: "#AD1457" },
    { id: "bg9",  label: "Goud",      color: "#F57F17" },
    { id: "bg10", label: "Grijs",     color: "#37474F" },
  ],
};

// Default avatar state
export const DEFAULT_AVATAR = {
  skinTone:   "s1",
  hairStyle:  "h2",
  hairColor:  "hc1",
  eyeStyle:   "e1",
  accessory:  "a1",
  outfit:     "o1",
  background: "bg1",
};

// VoltFM branding
export const BRAND = {
  name:    "VoltFM",
  tagline: "Jouw stem, jouw avatar",
  accentColor: "#FF6B00",
  darkColor:   "#0A0A0F",
};
