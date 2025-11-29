
export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  crew: string[]; // Changed from services to crew (roles)
  description: string;
  coverImage: string;
  gallery: string[];
}

export const projectsData: Project[] = [
  { 
    id: 'clinica-vida', 
    title: 'Clínica Vida', 
    category: 'Medical Branding', 
    client: 'Grupo Vida',
    year: '2024',
    crew: ['Brand Strategist', 'Interior Architect', 'Project Director'],
    description: 'Redefinimos la experiencia médica eliminando la frialdad clínica. Creamos un entorno visual que comunica empatía y precisión tecnológica.',
    coverImage: 'https://picsum.photos/1200/800?random=1',
    gallery: [
        'https://picsum.photos/1200/800?random=101',
        'https://picsum.photos/800/1200?random=102',
        'https://picsum.photos/1200/800?random=103'
    ]
  },
  { 
    id: 'legal-corp', 
    title: 'Legal Corp', 
    category: 'Corporate Identity', 
    client: 'Legal Corp Int.',
    year: '2023',
    crew: ['Creative Director', 'Senior UI Designer', 'Frontend Developer'],
    description: 'Transformamos una firma tradicional en una marca legal contemporánea. Minimalismo suizo aplicado a la burocracia legal.',
    coverImage: 'https://picsum.photos/1200/800?random=2',
    gallery: [
        'https://picsum.photos/1200/800?random=201',
        'https://picsum.photos/800/1200?random=202',
        'https://picsum.photos/1200/800?random=203'
    ]
  },
  { 
    id: 'estacion-cafe', 
    title: 'Estación Café', 
    category: 'Social Media', 
    client: 'Estación Café',
    year: '2024',
    crew: ['Content Strategist', 'Social Media Manager', 'Food Photographer'],
    description: 'No vendemos café, vendemos la pausa. Una estrategia de contenido sensorial que aumentó el tráfico físico en un 40%.',
    coverImage: 'https://picsum.photos/1200/800?random=3',
    gallery: [
        'https://picsum.photos/1200/800?random=301',
        'https://picsum.photos/800/1200?random=302',
        'https://picsum.photos/1200/800?random=303'
    ]
  },
  { 
    id: 'derma-studio', 
    title: 'Derma Studio', 
    category: 'Video Production', 
    client: 'Dra. Sofia M.',
    year: '2023',
    crew: ['Art Director', 'Director of Photography', 'Video Editor'],
    description: 'Producción audiovisual high-end para resaltar la textura y la realidad de la piel. Belleza sin filtros.',
    coverImage: 'https://picsum.photos/1200/800?random=4',
    gallery: [
        'https://picsum.photos/1200/800?random=401',
        'https://picsum.photos/800/1200?random=402'
    ]
  },
  { 
    id: 'fit-balance', 
    title: 'Fit Balance', 
    category: 'Launch Campaign', 
    client: 'FitBalance App',
    year: '2024',
    crew: ['Growth Marketer', 'Paid Media Specialist', 'Copywriter'],
    description: 'Lanzamiento de app de bienestar. Una campaña agresiva en medios digitales centrada en resultados reales.',
    coverImage: 'https://picsum.photos/1200/800?random=5',
    gallery: [
        'https://picsum.photos/1200/800?random=501',
        'https://picsum.photos/800/1200?random=502'
    ]
  },
  { 
    id: 'apex-finance', 
    title: 'Apex Finance', 
    category: 'Rebranding', 
    client: 'Apex Global',
    year: '2023',
    crew: ['Brand Strategist', 'Logo Designer', 'Project Director'],
    description: 'Construyendo confianza a través del diseño. Apex necesitaba verse tan robusto como sus finanzas.',
    coverImage: 'https://picsum.photos/1200/800?random=6',
    gallery: [
        'https://picsum.photos/1200/800?random=601',
        'https://picsum.photos/800/1200?random=602'
    ]
  },
  { 
    id: 'novatex', 
    title: 'Novatex', 
    category: 'Industrial', 
    client: 'Industrias Novatex',
    year: '2022',
    crew: ['B2B Consultant', '3D Generalist', 'Catalog Designer'],
    description: 'El sector industrial no tiene por qué ser aburrido. Elevamos la percepción de una fábrica textil a un hub de innovación.',
    coverImage: 'https://picsum.photos/1200/800?random=7',
    gallery: [
        'https://picsum.photos/1200/800?random=701',
        'https://picsum.photos/800/1200?random=702'
    ]
  },
  { 
    id: 'hyundai-latam', 
    title: 'Hyundai', 
    category: 'Automotive', 
    client: 'Hyundai Latam',
    year: '2023',
    crew: ['Event Producer', 'Senior Photographer', 'Post-Producer'],
    description: 'Capturando el movimiento. Cobertura de lanzamiento de nuevos modelos para la región centroamericana.',
    coverImage: 'https://picsum.photos/1200/800?random=8',
    gallery: [
        'https://picsum.photos/1200/800?random=801',
        'https://picsum.photos/800/1200?random=802'
    ]
  }
];
