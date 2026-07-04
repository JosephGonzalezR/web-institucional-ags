import type { ServicioId } from "@/config/site";
import type { CodigoPais, RedKey } from "@/config/paises";

export type Lang = "es" | "en";

export interface Messages {
  nav: Record<"nosotros" | "presencia" | "servicios" | "contacto", string>;
  hero: {
    eyebrow: string;
    badge: string;
    claim: string;
    cta: string;
    stats: { seguidores: string; cuentas: string; paises: string; webs: string };
  };
  nosotros: {
    eyebrow: string;
    titulo: string;
    parrafos: string[];
    pilares: { titulo: string; texto: string }[];
  };
  diferencial: {
    eyebrow: string;
    titulo: string;
    descripcion: string;
    items: { titulo: string; texto: string }[];
  };
  presencia: {
    eyebrow: string;
    titulo: string;
    descripcion: string;
    panelTitulo: string;
    panelTexto: string;
    statPaises: string;
    statWebs: string;
    statCuentas: string;
  };
  card: {
    sitioWeb: string;
    whatsapp: string;
    verPerfil: string;
    paginaOficial: string;
    seguidores: string;
  };
  cifras: {
    eyebrow: string;
    titulo: string;
    descripcion: string;
    comunidadTotal: string;
    totalSub: string;
    porRedTitulo: string;
    cuentas: string;
    tarjetas: { cuentas: string; webs: string; whatsapp: string; paises: string };
  };
  servicios: {
    eyebrow: string;
    titulo: string;
    descripcion: string;
    items: Record<ServicioId, { titulo: string; descripcion: string }>;
  };
  contacto: {
    eyebrow: string;
    titulo: string;
    descripcion: string;
    correoLabel: string;
    correoVentasLabel: string;
    escribir: string;
  };
  footer: {
    descripcion: string;
    presenciaTitulo: string;
    registro: string;
    derechos: string;
    operacion: string;
  };
  paises: Record<CodigoPais, { descripcion: string }>;
  redes: Record<RedKey, string>;
}

export const DICT: Record<Lang, Messages> = {
  es: {
    nav: {
      nosotros: "Nosotros",
      presencia: "Presencia",
      servicios: "Servicios",
      contacto: "Contacto",
    },
    hero: {
      eyebrow: "Servicios academicos · Peru · Chile · Argentina",
      badge: "Asesoria academica en tres paises de Sudamerica",
      claim: "Infraestructura academica con presencia en Peru, Chile y Argentina",
      cta: "Conocer AGS",
      stats: {
        seguidores: "Seguidores en redes",
        cuentas: "Cuentas activas",
        paises: "Paises",
        webs: "Sitios web",
      },
    },
    nosotros: {
      eyebrow: "Quienes somos",
      titulo: "Una organizacion academica multipais",
      parrafos: [
        "Academic Global Solutions (AGS) es una organizacion dedicada a la asesoria academica que opera de forma simultanea en Peru, Chile y Argentina. Cada pais cuenta con su propia marca, su sitio web, sus canales de contacto y su comunidad en redes sociales.",
        "Nuestra estructura combina equipos locales con una base tecnologica comun: infraestructura digital propia, atencion por canales oficiales y procesos estandarizados de trabajo. Asi mantenemos una operacion consistente en los tres mercados.",
        "Las cuentas, los sitios y las comunidades que se muestran en esta pagina reflejan el alcance de la organizacion. Las cifras corresponden a la captura inicial y se actualizan de forma periodica.",
      ],
      pilares: [
        { titulo: "Operacion local", texto: "Una marca y un equipo propio en cada pais." },
        { titulo: "Base tecnologica comun", texto: "Infraestructura digital y procesos compartidos." },
        { titulo: "Comunidad en redes", texto: "Cuentas activas en Instagram, Facebook y TikTok." },
      ],
    },
    diferencial: {
      eyebrow: "Nuestro diferencial",
      titulo: "Por que las tesis y trabajos nos eligen",
      descripcion:
        "Lo que nos distingue no es solo estar en tres paises: es como trabajamos.",
      items: [
        { titulo: "Calidad ante todo", texto: "Revision por etapas y estandares academicos exigentes en cada entrega." },
        { titulo: "Fuerte presencia en redes", texto: "Mas de 48.000 seguidores y comunidades activas en Peru, Chile y Argentina." },
        { titulo: "Mas de 5 anos en el mercado", texto: "Trayectoria y experiencia acompanando a miles de estudiantes." },
        { titulo: "Profesionales de alto nivel", texto: "Especialistas titulados por area, no generalistas." },
        { titulo: "Equipos multidisciplinarios", texto: "Cada proyecto lo trabaja el equipo experto en la materia." },
      ],
    },
    presencia: {
      eyebrow: "Presencia digital multipais",
      titulo: "Tres paises, tres marcas, una organizacion",
      descripcion:
        "Cada pais opera con su propia marca, sitio web, canal de contacto y comunidad en redes. Esta es la presencia de AGS en Sudamerica.",
      panelTitulo: "Una red que cubre tres mercados",
      panelTexto:
        "Operamos de forma simultanea en Peru, Chile y Argentina. Cada nodo de esta red es una marca con presencia digital propia.",
      statPaises: "Paises",
      statWebs: "Sitios web",
      statCuentas: "Cuentas",
    },
    card: {
      sitioWeb: "Sitio web",
      whatsapp: "WhatsApp",
      verPerfil: "Ver perfil",
      paginaOficial: "Pagina oficial",
      seguidores: "seguidores",
    },
    cifras: {
      eyebrow: "Indicadores",
      titulo: "El alcance de AGS, en numeros",
      descripcion:
        "Indicadores agregados de toda la red: comunidad en redes, cuentas activas y sitios en cada pais.",
      comunidadTotal: "Comunidad total",
      totalSub: "seguidores en las cuentas de la red AGS.",
      porRedTitulo: "Seguidores por red",
      cuentas: "cuenta(s)",
      tarjetas: {
        cuentas: "Cuentas en redes",
        webs: "Sitios web",
        whatsapp: "Lineas de WhatsApp",
        paises: "Paises",
      },
    },
    servicios: {
      eyebrow: "Servicios",
      titulo: "Que ofrece AGS",
      descripcion:
        "Asesoria academica integral para estudiantes y profesionales. Una linea de servicios comun a las tres marcas.",
      items: {
        tesis: {
          titulo: "Asesoria de tesis e investigacion",
          descripcion:
            "Planteamiento, metodologia, redaccion academica, analisis y sustentacion, con revision por etapas.",
        },
        redaccion: {
          titulo: "Trabajos y redaccion academica",
          descripcion:
            "Informes, ensayos, monografias y casos de estudio con rigor y formato institucional.",
        },
        presentacion: {
          titulo: "Presentaciones y sustentaciones",
          descripcion:
            "Diapositivas y material de apoyo para defensas y exposiciones academicas.",
        },
        datos: {
          titulo: "Datos y reportes",
          descripcion:
            "Excel avanzado, Power BI, bases de datos y visualizaciones para investigacion y gestion.",
        },
        correccion: {
          titulo: "Correccion y reduccion de IA",
          descripcion:
            "Revision de estilo, citado y coherencia, con ajuste para una redaccion natural y humana.",
        },
        acompanamiento: {
          titulo: "Acompanamiento personalizado",
          descripcion:
            "Sesiones uno a uno, diagnostico de avance y seguimiento durante todo el proceso.",
        },
      },
    },
    contacto: {
      eyebrow: "Contacto corporativo",
      titulo: "Hablemos a nivel institucional",
      descripcion:
        "Para alianzas, convenios o consultas corporativas, escribenos al correo institucional o contacta a la marca de cada pais.",
      correoLabel: "Correo institucional",
      correoVentasLabel: "Ventas y cotizaciones",
      escribir: "Escribir",
    },
    footer: {
      descripcion:
        "Academic Global Solutions es una organizacion de servicios academicos con operacion activa en tres paises de Sudamerica. Sitios, canales de contacto y comunidades en redes que respaldan su presencia.",
      presenciaTitulo: "Presencia por pais",
      registro: "Registro legal",
      derechos: "Todos los derechos reservados.",
      operacion: "Operacion en Peru, Chile y Argentina.",
    },
    paises: {
      PE: {
        descripcion:
          "Acompanamiento integral de tesis: planteamiento, metodologia, redaccion, analisis y sustentacion.",
      },
      CL: {
        descripcion:
          "Informes, ensayos, Excel, Power BI, bases de datos y programacion para estudiantes y profesionales.",
      },
      AR: {
        descripcion:
          "Trabajos practicos, informes, presentaciones, Excel, Power BI y programacion.",
      },
    },
    redes: { instagram: "Instagram", facebook: "Facebook", tiktok: "TikTok" },
  },

  en: {
    nav: {
      nosotros: "About",
      presencia: "Presence",
      servicios: "Services",
      contacto: "Contact",
    },
    hero: {
      eyebrow: "Academic services · Peru · Chile · Argentina",
      badge: "Academic advising across three countries in South America",
      claim: "Academic infrastructure with presence in Peru, Chile and Argentina",
      cta: "Discover AGS",
      stats: {
        seguidores: "Social followers",
        cuentas: "Active accounts",
        paises: "Countries",
        webs: "Websites",
      },
    },
    nosotros: {
      eyebrow: "About us",
      titulo: "A multi-country academic organization",
      parrafos: [
        "Academic Global Solutions (AGS) is an academic advising organization operating at the same time in Peru, Chile and Argentina. Each country has its own brand, website, contact channels and social media community.",
        "Our structure combines local teams with a shared technology base: our own digital infrastructure, official support channels and standardized work processes. This keeps a consistent operation across the three markets.",
        "The accounts, sites and communities shown on this page reflect the reach of the organization. The figures correspond to the initial snapshot and are updated periodically.",
      ],
      pilares: [
        { titulo: "Local operation", texto: "An own brand and team in each country." },
        { titulo: "Shared technology base", texto: "Own digital infrastructure and processes." },
        { titulo: "Social communities", texto: "Active accounts on Instagram, Facebook and TikTok." },
      ],
    },
    diferencial: {
      eyebrow: "Why AGS",
      titulo: "Why theses and assignments choose us",
      descripcion:
        "What sets us apart is not just being in three countries: it is how we work.",
      items: [
        { titulo: "Quality first", texto: "Stage-by-stage review and demanding academic standards in every delivery." },
        { titulo: "Strong social presence", texto: "Over 48,000 followers and active communities in Peru, Chile and Argentina." },
        { titulo: "5+ years in the market", texto: "A track record supporting thousands of students." },
        { titulo: "High-level professionals", texto: "Degreed specialists per field, not generalists." },
        { titulo: "Multidisciplinary teams", texto: "Each project is handled by the team that is expert in the subject." },
      ],
    },
    presencia: {
      eyebrow: "Multi-country digital presence",
      titulo: "Three countries, three brands, one organization",
      descripcion:
        "Each country runs its own brand, website, contact channel and social community. This is the presence of AGS in South America.",
      panelTitulo: "A network covering three markets",
      panelTexto:
        "We operate at the same time in Peru, Chile and Argentina. Each node of this network is a brand with its own digital presence.",
      statPaises: "Countries",
      statWebs: "Websites",
      statCuentas: "Accounts",
    },
    card: {
      sitioWeb: "Website",
      whatsapp: "WhatsApp",
      verPerfil: "View profile",
      paginaOficial: "Official page",
      seguidores: "followers",
    },
    cifras: {
      eyebrow: "Metrics",
      titulo: "The reach of AGS, in numbers",
      descripcion:
        "Aggregated indicators across the network: social community, active accounts and sites in each country.",
      comunidadTotal: "Total community",
      totalSub: "followers across the AGS network accounts.",
      porRedTitulo: "Followers by network",
      cuentas: "account(s)",
      tarjetas: {
        cuentas: "Social accounts",
        webs: "Websites",
        whatsapp: "WhatsApp lines",
        paises: "Countries",
      },
    },
    servicios: {
      eyebrow: "Services",
      titulo: "What AGS offers",
      descripcion:
        "Comprehensive academic advising for students and professionals. A common service line across the three brands.",
      items: {
        tesis: {
          titulo: "Thesis and research advising",
          descripcion:
            "Problem statement, methodology, academic writing, analysis and defense, with stage reviews.",
        },
        redaccion: {
          titulo: "Academic writing and assignments",
          descripcion:
            "Reports, essays, monographs and case studies with rigor and institutional formatting.",
        },
        presentacion: {
          titulo: "Presentations and defenses",
          descripcion:
            "Slides and support material for academic defenses and presentations.",
        },
        datos: {
          titulo: "Data and reports",
          descripcion:
            "Advanced Excel, Power BI, databases and visualizations for research and management.",
        },
        correccion: {
          titulo: "Editing and AI reduction",
          descripcion:
            "Style, citation and coherence review, adjusted for natural, human writing.",
        },
        acompanamiento: {
          titulo: "Personalized support",
          descripcion:
            "One-on-one sessions, progress diagnosis and follow-up throughout the process.",
        },
      },
    },
    contacto: {
      eyebrow: "Corporate contact",
      titulo: "Let's talk at an institutional level",
      descripcion:
        "For partnerships, agreements or corporate inquiries, write to our institutional email or contact each country's brand.",
      correoLabel: "Institutional email",
      correoVentasLabel: "Sales & quotes",
      escribir: "Write",
    },
    footer: {
      descripcion:
        "Academic Global Solutions is an academic services organization operating in three countries in South America. Sites, contact channels and social communities that back its presence.",
      presenciaTitulo: "Presence by country",
      registro: "Legal registration",
      derechos: "All rights reserved.",
      operacion: "Operating in Peru, Chile and Argentina.",
    },
    paises: {
      PE: {
        descripcion:
          "Comprehensive thesis support: problem statement, methodology, writing, analysis and defense.",
      },
      CL: {
        descripcion:
          "Reports, essays, Excel, Power BI, databases and programming for students and professionals.",
      },
      AR: {
        descripcion:
          "Assignments, reports, presentations, Excel, Power BI and programming.",
      },
    },
    redes: { instagram: "Instagram", facebook: "Facebook", tiktok: "TikTok" },
  },
};
