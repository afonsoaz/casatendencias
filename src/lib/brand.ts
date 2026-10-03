import brandEvo from "@/assets/brand-evo.png.asset.json";
import brandHarlequin from "@/assets/brand-harlequin.png.asset.json";
import brandMolaflex from "@/assets/brand-molaflex.png.asset.json";
import brandPiubelle from "@/assets/brand-piubelle.png.asset.json";
import brandYankee from "@/assets/brand-yankee.png.asset.json";
import brandClayre from "@/assets/brand-clayre.png.asset.json";
import brandBizzotto from "@/assets/brand-bizzotto.png.asset.json";

export const PHONE_DISPLAY = "+351 912 042 112";
export const PHONE_TEL = "tel:+351912042112";
export const WHATSAPP_URL = "https://wa.me/351912042112";
export const INSTAGRAM_URL = "https://instagram.com/casaetendencias";


export const SERVICES = [
  {
    id: "cortinados",
    label: "Cortinados por medida",
    description:
      "Estofos e cortinados desenhados à medida das suas janelas, com tecidos selecionados consigo, medição precisa em casa e instalação impecável.",
  },
  {
    id: "mobiliario",
    label: "Mobiliário e iluminação",
    description:
      "Peças selecionadas e pequeno mobiliário à medida do seu espaço, complementados por soluções de iluminação que valorizam cada divisão.",
  },
  {
    id: "consultoria",
    label: "Consultoria de interiores",
    description:
      "Aconselhamento personalizado na sua casa: paletas, materiais, disposições e ideias concretas para transformar cada divisão com harmonia.",
  },
] as const;

export const BRANDS = [
  { name: "Evo", logo: brandEvo.url },
  { name: "Harlequin", logo: brandHarlequin.url },
  { name: "Molaflex", logo: brandMolaflex.url },
  { name: "Piubelle", logo: brandPiubelle.url },
  { name: "Yankee Candle", logo: brandYankee.url },
  { name: "Clayre & Eef", logo: brandClayre.url },
  { name: "Bizzotto", logo: brandBizzotto.url },
] as const;


