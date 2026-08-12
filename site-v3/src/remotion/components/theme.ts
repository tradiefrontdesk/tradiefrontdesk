export const colors = {
  canvas: "#0E2233",
  primary: "#FF5A1F",
  surfaceCard: "#16334A",
  surfaceSoft: "#1D3C55",
  elevated: "#122B40",
  text: "#F6F4EF",
  body: "#E7E4DC",
  muted: "#9FB0BE",
  // Was #FF5A1F — identical to `primary`, which made every border in every
  // composition an accent and left nothing standing out. Hairlines are
  // structure, not emphasis: they take the muted line colour.
  hairline: "#2A4761",
  success: "#2FCB6B",
  warning: "#FFC933",
  error: "#FF4D4D",
  // Off-brand: the palette is navy / safety orange / hi-vis yellow. Kept as
  // a token only because older compositions still reference it — do not use
  // it in anything new.
  blue: "#4DA3FF",
  pink: "#FFC933",
  orange: "#FF8B3D",
};

export const fontFamily =
  "Archivo, 'Archivo Variable', Inter, ui-sans-serif, system-ui, sans-serif";

// The annotation layer's face, matching the site's .mono-label styling.
// HeroClip uses this for eyebrows, stage labels and stamps.
export const monoFamily =
  "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace";
