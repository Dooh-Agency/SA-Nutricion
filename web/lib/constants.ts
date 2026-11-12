export const CONTACT = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34665985026",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsapp}`;
  },
  get whatsappUrlWithMessage() {
    return (msg: string) =>
      `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(msg)}`;
  },
  email: process.env.NEXT_PUBLIC_EMAIL ?? "hola@solealvarez.com",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "solealvarez.nutricion",
  get instagramUrl() {
    return `https://www.instagram.com/${this.instagram}/`;
  },
  address: "Centro Kos · Centro Platino, local 7 · Rancho Park, Elviria, Marbella",
};

export const SERVICES = [
  {
    id: "nutricion-intestinal",
    number: "01",
    title: "Nutrición y salud intestinal",
    shortDescription:
      "Abordaje integrativo del sistema digestivo y microbiota para recuperar tu bienestar desde adentro.",
    description:
      "La salud intestinal es el eje central del bienestar. Trabajo con vos para identificar desequilibrios digestivos, mejorar tu microbiota y diseñar un plan alimentario que tu cuerpo pueda absorber y aprovechar al máximo. Sin restricciones innecesarias, con ciencia y escucha activa.",
    bullets: [
      "Síndrome de intestino irritable (SII)",
      "Permeabilidad intestinal aumentada",
      "Disbiosis y desequilibrios de microbiota",
      "Alergias e intolerancias alimentarias",
      "Estreñimiento crónico y tránsito lento",
      "Reflujo y acidez recurrente",
    ],
    accentColor: "#5b6569",
    whatsappMessage:
      "Hola Sol, me gustaría consultar sobre nutrición y salud intestinal.",
  },
  {
    id: "lactancia",
    number: "02",
    title: "Lactancia materna",
    shortDescription:
      "Acompañamiento especializado para que la lactancia sea una experiencia positiva para vos y tu bebé.",
    description:
      "Como puericultora y licenciada en nutrición, te acompaño en todo el proceso de lactancia materna: desde los primeros días hasta el destete. Trabajo tanto la nutrición materna como el soporte práctico y emocional que necesitás para que la experiencia sea plena.",
    bullets: [
      "Producción y calidad de la leche materna",
      "Nutrición durante la lactancia",
      "Dificultades del inicio (agarre, grietas, congestión)",
      "Lactancia prolongada",
      "Introducción de alimentación complementaria",
      "Destete progresivo y respetuoso",
    ],
    accentColor: "#fcba63",
    whatsappMessage:
      "Hola Sol, me gustaría consultar sobre lactancia materna.",
  },
  {
    id: "maternidad",
    number: "03",
    title: "Acompañamiento en la maternidad",
    shortDescription:
      "Nutrición y contención integral durante el embarazo, posparto y toda la etapa materna.",
    description:
      "La maternidad transforma todo: el cuerpo, las emociones, la identidad. Te acompaño con una mirada integrativa que contempla la nutrición durante el embarazo y el posparto, el bienestar emocional y la construcción de nuevos hábitos que sostengan esta etapa hermosa y exigente.",
    bullets: [
      "Nutrición en el embarazo trimestre a trimestre",
      "Recuperación nutricional en el posparto",
      "Manejo de náuseas y cambios del primer trimestre",
      "Aumento de peso saludable en el embarazo",
      "Alimentación en la diabetes gestacional",
      "Bienestar emocional y relación con la comida",
    ],
    accentColor: "#f6d3b5",
    whatsappMessage:
      "Hola Sol, me gustaría consultar sobre acompañamiento en la maternidad.",
  },
  {
    id: "educacion",
    number: "04",
    title: "Educación nutricional",
    shortDescription:
      "Aprendé a alimentarte bien de forma definitiva: sin dietas, con herramientas reales y sostenibles.",
    description:
      "Más que un plan, te doy las herramientas para entender tu cuerpo y tomar decisiones alimentarias conscientes toda la vida. La educación nutricional te empodera para dejar atrás las dietas de moda y construir una relación sana, flexible y placentera con la comida.",
    bullets: [
      "Lectura e interpretación de etiquetas nutricionales",
      "Planificación de comidas semanales",
      "Alimentación saludable en familia",
      "Nutrición infantil y alimentación complementaria",
      "Hábitos alimentarios sostenibles",
      "Desmitificación de creencias sobre la alimentación",
    ],
    accentColor: "#c0c481",
    whatsappMessage:
      "Hola Sol, me gustaría consultar sobre educación nutricional.",
  },
];

export const TEAM = [
  {
    role: "Pediatra",
    description:
      "Control del crecimiento y desarrollo infantil con enfoque integrativo.",
  },
  {
    role: "Nutricionista Digestiva",
    description:
      "Especialista en patologías del aparato digestivo y microbiota.",
  },
  {
    role: "Nutricionista Infantil",
    description:
      "Acompañamiento nutricional desde el nacimiento hasta la adolescencia.",
  },
  {
    role: "Psicóloga Perinatal",
    description:
      "Soporte emocional durante el embarazo, posparto y crianza.",
  },
  {
    role: "Terapias Complementarias",
    description:
      "Osteopatía, reflexología y abordajes complementarios al tratamiento.",
  },
];
