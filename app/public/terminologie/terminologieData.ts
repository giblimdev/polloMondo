// @/app/public/terminologieData/terminologie.ts
// Lexique trilingue complet pour application d'élevage avicole

// ============================================================================
// INTERFACES DE BASE
// ============================================================================

export interface TermeTraduit {
  fr: string;
  en: string;
  es: string;
  definition: string;
}

export interface TermeComptable extends TermeTraduit {
  classe?: string;
  formule?: string;
}

export interface ChampBDD {
  fr: string;
  en: string;
  es: string;
  description: string;
}

export interface TableBDD {
  fr: string;
  en: string;
  es: string;
  description: string;
}

export interface PermissionRole {
  id: string;
  description: string;
  module?: string;
}

export interface RoleRBAC {
  id: string;
  nom: string;
  description: string;
  niveau: number;
  utilisateursTypes: string[];
  permissions: PermissionRole[];
  restrictions: string[];
  interface: string;
}

// ============================================================================
// DONNÉES DU LEXIQUE PRINCIPAL
// ============================================================================

// 🏷️ TERMINOLOGIE GÉNÉRALE
export const terminologieGenerale: TermeTraduit[] = [
  {
    fr: "Élevage",
    en: "Farm/Poultry Farm",
    es: "Granja/Avicultura",
    definition: "Exploitation agricole spécialisée dans l'élevage de volailles",
  },
  {
    fr: "Poulailler",
    en: "Poultry House/Coop",
    es: "Gallinero",
    definition: "Bâtiment ou espace dédié à l'élevage des poules",
  },
  {
    fr: "Troupeau",
    en: "Flock",
    es: "Lote de aves",
    definition: "Groupe de poules élevées ensemble",
  },
  {
    fr: "Lot",
    en: "Batch",
    es: "Lote",
    definition:
      "Ensemble d'animaux arrivés en même temps et partageant le même cycle",
  },
  {
    fr: "Cycle de vie",
    en: "Life Cycle",
    es: "Ciclo de vida",
    definition:
      "Période complète de l'élevage d'une poule, de l'arrivée à l'abattage",
  },
  {
    fr: "Phase",
    en: "Phase/Stage",
    es: "Fase",
    definition:
      "Période spécifique dans le cycle de vie (démarrage, croissance, ponte)",
  },
  {
    fr: "Race",
    en: "Breed",
    es: "Raza",
    definition: "Type génétique de poule (ex: Lohmann, Isa Brown)",
  },
  {
    fr: "Pondeuse",
    en: "Layer",
    es: "Ponedora",
    definition: "Poule élevée pour la production d'œufs",
  },
];

// 🥚 PRODUCTION & ŒUFS
export const productionOeufs: TermeTraduit[] = [
  {
    fr: "Œuf",
    en: "Egg",
    es: "Huevo",
    definition: "Produit principal de l'élevage de poules pondeuses",
  },
  {
    fr: "Taux de ponte",
    en: "Laying Rate",
    es: "Tasa de puesta",
    definition: "Pourcentage de poules pondant un œuf dans la journée",
  },
  {
    fr: "Collecte",
    en: "Collection",
    es: "Recolección",
    definition: "Action de ramasser les œufs dans le poulailler",
  },
  {
    fr: "Calibrage",
    en: "Grading",
    es: "Calibrado",
    definition: "Tri des œufs selon leur poids en catégories (S, M, L, XL)",
  },
  {
    fr: "Calibre",
    en: "Size/Caliber",
    es: "Calibre",
    definition: "Catégorie de poids des œufs",
  },
  {
    fr: "Coquille",
    en: "Shell",
    es: "Cáscara",
    definition: "Enveloppe extérieure de l'œuf",
  },
  {
    fr: "Œuf cassé",
    en: "Broken Egg",
    es: "Huevo roto",
    definition: "Œuf dont la coquille est endommagée",
  },
  {
    fr: "Œuf sale",
    en: "Dirty Egg",
    es: "Huevo sucio",
    definition: "Œuf taché de fientes ou de saleté",
  },
  {
    fr: "Œuf commercialisable",
    en: "Sellable Egg",
    es: "Huevo comercializable",
    definition: "Œuf répondant aux critères de vente",
  },
  {
    fr: "Masse d'œufs",
    en: "Egg Mass",
    es: "Masa de huevos",
    definition: "Poids total des œufs produits",
  },
  {
    fr: "Indice de ponte",
    en: "Production Index",
    es: "Índice de producción",
    definition: "Indicateur combinant taux de ponte et poids des œufs",
  },
];

// 🍽️ ALIMENTATION
export const alimentation: TermeTraduit[] = [
  {
    fr: "Aliment",
    en: "Feed",
    es: "Pienso/Alimento",
    definition: "Nourriture spécifique pour poules",
  },
  {
    fr: "Starter",
    en: "Starter Feed",
    es: "Iniciador",
    definition: "Aliment pour poussins (0-3 semaines)",
  },
  {
    fr: "Croissance",
    en: "Grower Feed",
    es: "Crecimiento",
    definition: "Aliment pour poulettes (4-16 semaines)",
  },
  {
    fr: "Pré-ponte",
    en: "Pre-lay Feed",
    es: "Pre-puesta",
    definition: "Aliment de transition avant la ponte",
  },
  {
    fr: "Ponction",
    en: "Layer Feed",
    es: "Puesta",
    definition: "Aliment pour poules en production",
  },
  {
    fr: "Finition",
    en: "Finisher Feed",
    es: "Acabado",
    definition: "Aliment en fin de cycle",
  },
  {
    fr: "Consommation",
    en: "Consumption",
    es: "Consumo",
    definition: "Quantité d'aliment ingérée",
  },
  {
    fr: "Indice de consommation",
    en: "Feed Conversion Ratio",
    es: "Índice de conversión",
    definition: "Ratio kg d'aliment / kg d'œufs produits",
  },
  {
    fr: "Protéines",
    en: "Proteins",
    es: "Proteínas",
    definition: "Composant nutritionnel essentiel",
  },
  {
    fr: "Énergie métabolisable",
    en: "Metabolizable Energy",
    es: "Energía metabolizable",
    definition: "Énergie disponible pour l'animal",
  },
  {
    fr: "Calcium",
    en: "Calcium",
    es: "Calcio",
    definition: "Minéral essentiel pour la formation des coquilles",
  },
  {
    fr: "Phosphore",
    en: "Phosphorus",
    es: "Fósforo",
    definition: "Minéral essentiel pour le métabolisme",
  },
  {
    fr: "Complément",
    en: "Supplement",
    es: "Suplemento",
    definition: "Additif alimentaire (vitamines, minéraux)",
  },
  {
    fr: "Eau de boisson",
    en: "Drinking Water",
    es: "Agua de bebida",
    definition: "Eau disponible pour les animaux",
  },
];

// 🏥 SANTÉ & BIEN-ÊTRE
export const santeBienEtre: TermeTraduit[] = [
  {
    fr: "Mortalité",
    en: "Mortality",
    es: "Mortalidad",
    definition: "Nombre d'animaux morts",
  },
  {
    fr: "Taux de mortalité",
    en: "Mortality Rate",
    es: "Tasa de mortalidad",
    definition: "Pourcentage d'animaux morts sur une période",
  },
  {
    fr: "Vaccination",
    en: "Vaccination",
    es: "Vacunación",
    definition: "Administration d'un vaccin pour prévenir une maladie",
  },
  {
    fr: "Traitement",
    en: "Treatment",
    es: "Tratamiento",
    definition: "Administration de médicaments à des fins curatives",
  },
  {
    fr: "Vermifuge",
    en: "Dewormer",
    es: "Desparasitante",
    definition: "Produit pour éliminer les parasites internes",
  },
  {
    fr: "Antibiotique",
    en: "Antibiotic",
    es: "Antibiótico",
    definition: "Médicament pour traiter les infections bactériennes",
  },
  {
    fr: "Délai d'attente",
    en: "Withdrawal Period",
    es: "Período de retiro",
    definition: "Temps entre dernier traitement et vente des œufs/viande",
  },
  {
    fr: "Prophylaxie",
    en: "Prophylaxis",
    es: "Profilaxis",
    definition: "Traitement préventif",
  },
  {
    fr: "Pathologie",
    en: "Pathology",
    es: "Patología",
    definition: "Maladie ou trouble de santé",
  },
  {
    fr: "Symptôme",
    en: "Symptom",
    es: "Síntoma",
    definition: "Signe visible d'une maladie",
  },
  {
    fr: "Diagnostic",
    en: "Diagnosis",
    es: "Diagnóstico",
    definition: "Identification d'une maladie",
  },
  {
    fr: "Carnet sanitaire",
    en: "Health Record",
    es: "Registro sanitario",
    definition: "Document regroupant les informations de santé",
  },
  {
    fr: "Bien-être animal",
    en: "Animal Welfare",
    es: "Bienestar animal",
    definition: "État de santé physique et mental de l'animal",
  },
];

// 🌡️ ENVIRONNEMENT
export const environnement: TermeTraduit[] = [
  {
    fr: "Température",
    en: "Temperature",
    es: "Temperatura",
    definition: "Degré de chaleur dans le poulailler",
  },
  {
    fr: "Humidité",
    en: "Humidity",
    es: "Humedad",
    definition: "Taux d'humidité relative de l'air",
  },
  {
    fr: "Ventilation",
    en: "Ventilation",
    es: "Ventilación",
    definition: "Renouvellement de l'air dans le bâtiment",
  },
  {
    fr: "Éclairage",
    en: "Lighting",
    es: "Iluminación",
    definition: "Système d'éclairage artificiel",
  },
  {
    fr: "Photopériode",
    en: "Photoperiod",
    es: "Fotoperiodo",
    definition: "Durée d'éclairage quotidien",
  },
  {
    fr: "Litière",
    en: "Litter/Bedding",
    es: "Cama",
    definition: "Matériau absorbant au sol du poulailler",
  },
  {
    fr: "Densité",
    en: "Stocking Density",
    es: "Densidad",
    definition: "Nombre d'animaux par mètre carré",
  },
  {
    fr: "Qualité de l'air",
    en: "Air Quality",
    es: "Calidad del aire",
    definition: "Mesure de la pureté de l'air (ammoniac, CO2)",
  },
  {
    fr: "Ammoniac",
    en: "Ammonia",
    es: "Amoníaco",
    definition: "Gaz produit par la décomposition des fientes",
  },
  {
    fr: "Dioxyde de carbone",
    en: "Carbon Dioxide",
    es: "Dióxido de carbono",
    definition: "Gaz produit par la respiration des animaux",
  },
  {
    fr: "Capteur",
    en: "Sensor",
    es: "Sensor",
    definition: "Appareil de mesure automatique",
  },
];

// 📊 ANALYSE & INDICATEURS
export const analyseIndicateurs: TermeTraduit[] = [
  {
    fr: "Indicateur",
    en: "KPI (Key Performance Indicator)",
    es: "Indicador",
    definition: "Mesure de performance clé",
  },
  {
    fr: "Tableau de bord",
    en: "Dashboard",
    es: "Cuadro de mando",
    definition: "Interface regroupant les principaux indicateurs",
  },
  {
    fr: "Rapport",
    en: "Report",
    es: "Informe",
    definition: "Document synthétisant des informations sur une période",
  },
  {
    fr: "Tendance",
    en: "Trend",
    es: "Tendencia",
    definition: "Évolution dans le temps d'un indicateur",
  },
  {
    fr: "Objectif",
    en: "Target/Goal",
    es: "Objetivo",
    definition: "Valeur cible à atteindre pour un indicateur",
  },
  {
    fr: "Écart",
    en: "Variance/Deviation",
    es: "Desviación",
    definition: "Différence entre valeur réelle et objectif",
  },
  {
    fr: "Benchmark",
    en: "Benchmark",
    es: "Referencia",
    definition: "Comparaison avec des performances de référence",
  },
  {
    fr: "Prévision",
    en: "Forecast",
    es: "Previsión",
    definition: "Estimation de valeurs futures basée sur des données passées",
  },
  {
    fr: "Analyse",
    en: "Analysis",
    es: "Análisis",
    definition: "Étude détaillée des données",
  },
  {
    fr: "Statistique",
    en: "Statistic",
    es: "Estadística",
    definition: "Donnée chiffrée résumant une situation",
  },
  {
    fr: "Moyenne",
    en: "Average",
    es: "Media",
    definition: "Valeur centrale d'un ensemble de données",
  },
  {
    fr: "Médiane",
    en: "Median",
    es: "Mediana",
    definition: "Valeur séparant un ensemble de données en deux parties égales",
  },
  {
    fr: "Écart-type",
    en: "Standard Deviation",
    es: "Desviación estándar",
    definition: "Mesure de la dispersion des données",
  },
];

// 🔧 TECHNIQUE & SYSTÈME
export const techniqueSysteme: TermeTraduit[] = [
  {
    fr: "Base de données",
    en: "Database",
    es: "Base de datos",
    definition: "Système de stockage structuré des données",
  },
  {
    fr: "Table",
    en: "Table",
    es: "Tabla",
    definition: "Structure contenant des données similaires",
  },
  {
    fr: "Champ",
    en: "Field",
    es: "Campo",
    definition: "Élément d'information dans une table",
  },
  {
    fr: "Enregistrement",
    en: "Record",
    es: "Registro",
    definition: "Ensemble de champs relatifs à un élément",
  },
  {
    fr: "API",
    en: "API (Application Programming Interface)",
    es: "API",
    definition: "Interface permettant à des applications de communiquer",
  },
  {
    fr: "Synchronisation",
    en: "Synchronization",
    es: "Sincronización",
    definition: "Mise à jour simultanée de données entre différents systèmes",
  },
  {
    fr: "Backup/Sauvegarde",
    en: "Backup",
    es: "Copia de seguridad",
    definition: "Copie de sécurité des données",
  },
  {
    fr: "Restauration",
    en: "Restoration",
    es: "Restauración",
    definition: "Récupération des données à partir d'une sauvegarde",
  },
  {
    fr: "Interface",
    en: "Interface",
    es: "Interfaz",
    definition: "Partie de l'application visible par l'utilisateur",
  },
  {
    fr: "Responsive",
    en: "Responsive",
    es: "Responsivo",
    definition: "Adaptation de l'interface à différentes tailles d'écran",
  },
  {
    fr: "Mobile First",
    en: "Mobile First",
    es: "Móvil primero",
    definition: "Conception priorisant les appareils mobiles",
  },
  {
    fr: "Offline",
    en: "Offline",
    es: "Sin conexión",
    definition: "Fonctionnement sans connexion internet",
  },
  {
    fr: "Cloud",
    en: "Cloud",
    es: "Nube",
    definition: "Stockage et traitement des données sur serveurs distants",
  },
  {
    fr: "Local",
    en: "Local",
    es: "Local",
    definition: "Stockage et traitement des données sur l'appareil",
  },
];

// 👥 GESTION & ADMINISTRATION
export const gestionAdministration: TermeTraduit[] = [
  {
    fr: "Utilisateur",
    en: "User",
    es: "Usuario",
    definition: "Personne utilisant l'application",
  },
  {
    fr: "Rôle",
    en: "Role",
    es: "Rol",
    definition: "Ensemble de permissions attribuées à un utilisateur",
  },
  {
    fr: "Permission",
    en: "Permission",
    es: "Permiso",
    definition: "Droit d'effectuer une action spécifique",
  },
  {
    fr: "Administrateur",
    en: "Administrator",
    es: "Administrador",
    definition: "Utilisateur avec tous les droits sur l'application",
  },
  {
    fr: "Équipe",
    en: "Team",
    es: "Equipo",
    definition: "Groupe d'utilisateurs collaborant sur le même élevage",
  },
  {
    fr: "Planning",
    en: "Schedule",
    es: "Planificación",
    definition: "Organisation dans le temps des tâches à effectuer",
  },
  { fr: "Tâche", en: "Task", es: "Tarea", definition: "Action à réaliser" },
  {
    fr: "Récurente",
    en: "Recurring",
    es: "Recurrente",
    definition: "Tâche qui se répète selon une fréquence définie",
  },
  {
    fr: "Notification",
    en: "Notification",
    es: "Notificación",
    definition: "Message d'alerte ou d'information",
  },
  {
    fr: "Alerte",
    en: "Alert",
    es: "Alerta",
    definition: "Notification signalant une situation anormale",
  },
  {
    fr: "Paramètre",
    en: "Setting/Parameter",
    es: "Parámetro",
    definition: "Valeur configurable de l'application",
  },
  {
    fr: "Configuration",
    en: "Configuration",
    es: "Configuración",
    definition: "Ensemble des paramètres de l'application",
  },
  {
    fr: "Audit",
    en: "Audit",
    es: "Auditoría",
    definition: "Vérification systématique des processus et données",
  },
  {
    fr: "Log",
    en: "Log",
    es: "Registro",
    definition: "Fichier enregistrant les actions du système",
  },
];

// 📋 QUALITÉ & CERTIFICATION
export const qualiteCertification: TermeTraduit[] = [
  {
    fr: "Traçabilité",
    en: "Traceability",
    es: "Trazabilidad",
    definition: "Capacité à retracer l'historique d'un produit",
  },
  {
    fr: "Certification",
    en: "Certification",
    es: "Certificación",
    definition: "Attestation de conformité à un référentiel",
  },
  {
    fr: "Bio",
    en: "Organic",
    es: "Ecológico/Biológico",
    definition: "Conforme aux règles de l'agriculture biologique",
  },
  {
    fr: "Label",
    en: "Label",
    es: "Etiqueta",
    definition: "Signe de qualité officiel",
  },
  {
    fr: "Contrôle",
    en: "Control/Inspection",
    es: "Control",
    definition: "Vérification de la conformité",
  },
  {
    fr: "Non-conformité",
    en: "Non-conformity",
    es: "No conformidad",
    definition: "Écart par rapport aux exigences",
  },
  {
    fr: "Action corrective",
    en: "Corrective Action",
    es: "Acción correctiva",
    definition: "Mesure pour éliminer la cause d'une non-conformité",
  },
  {
    fr: "Action préventive",
    en: "Preventive Action",
    es: "Acción preventiva",
    definition: "Mesure pour éviter une non-conformité potentielle",
  },
  {
    fr: "Procédure",
    en: "Procedure",
    es: "Procedimiento",
    definition: "Description détaillée d'un processus",
  },
  {
    fr: "Instruction",
    en: "Instruction",
    es: "Instrucción",
    definition: "Directive spécifique pour une tâche",
  },
  {
    fr: "Registre",
    en: "Register",
    es: "Registro",
    definition: "Document contenant des données attestant d'activités",
  },
  {
    fr: "Conformité",
    en: "Compliance",
    es: "Conformidad",
    definition: "Respect des exigences légales et réglementaires",
  },
];

// 📅 TEMPS & PÉRIODES
export const tempsPeriodes: TermeTraduit[] = [
  { fr: "Jour", en: "Day", es: "Día", definition: "Période de 24 heures" },
  { fr: "Semaine", en: "Week", es: "Semana", definition: "Période de 7 jours" },
  {
    fr: "Mois",
    en: "Month",
    es: "Mes",
    definition: "Période d'environ 30 jours",
  },
  {
    fr: "Trimestre",
    en: "Quarter",
    es: "Trimestre",
    definition: "Période de 3 mois",
  },
  {
    fr: "Semestre",
    en: "Semester",
    es: "Semestre",
    definition: "Période de 6 mois",
  },
  { fr: "Année", en: "Year", es: "Año", definition: "Période de 12 mois" },
  {
    fr: "Quotidien",
    en: "Daily",
    es: "Diario",
    definition: "Qui se produit chaque jour",
  },
  {
    fr: "Hebdomadaire",
    en: "Weekly",
    es: "Semanal",
    definition: "Qui se produit chaque semaine",
  },
  {
    fr: "Mensuel",
    en: "Monthly",
    es: "Mensual",
    definition: "Qui se produit chaque mois",
  },
  {
    fr: "Annuel",
    en: "Annual/Yearly",
    es: "Anual",
    definition: "Qui se produit chaque année",
  },
  {
    fr: "Période",
    en: "Period",
    es: "Período",
    definition: "Intervalle de temps défini",
  },
  {
    fr: "Durée",
    en: "Duration",
    es: "Duración",
    definition: "Temps pendant lequel quelque chose se produit",
  },
  {
    fr: "Date",
    en: "Date",
    es: "Fecha",
    definition: "Jour précis dans le calendrier",
  },
  {
    fr: "Heure",
    en: "Time/Hour",
    es: "Hora",
    definition: "Moment précis dans la journée",
  },
];

// 🧮 UNITÉS DE MESURE
export const unitesMesure: TermeTraduit[] = [
  { fr: "Gramme", en: "Gram", es: "Gramo", definition: "Unité de masse (g)" },
  {
    fr: "Kilogramme",
    en: "Kilogram",
    es: "Kilogramo",
    definition: "Unité de masse (kg) = 1000 g",
  },
  { fr: "Litre", en: "Litre", es: "Litro", definition: "Unité de volume (L)" },
  {
    fr: "Mètre",
    en: "Meter",
    es: "Metro",
    definition: "Unité de longueur (m)",
  },
  {
    fr: "Mètre carré",
    en: "Square Meter",
    es: "Metro cuadrado",
    definition: "Unité de surface (m²)",
  },
  {
    fr: "Degré Celsius",
    en: "Degree Celsius",
    es: "Grado Celsius",
    definition: "Unité de température (°C)",
  },
  {
    fr: "Pourcentage",
    en: "Percentage",
    es: "Porcentaje",
    definition: "Proportion pour 100 (%)",
  },
  {
    fr: "Partie par million",
    en: "Parts Per Million",
    es: "Partes por millón",
    definition: "Unité de concentration (ppm)",
  },
  { fr: "Euro", en: "Euro", es: "Euro", definition: "Unité monétaire (€)" },
  { fr: "Heure", en: "Hour", es: "Hora", definition: "Unité de temps (h)" },
  { fr: "Jour", en: "Day", es: "Día", definition: "Unité de temps (j)" },
  {
    fr: "Semaine",
    en: "Week",
    es: "Semana",
    definition: "Unité de temps (sem)",
  },
];

// ============================================================================
// BASE DE DONNÉES
// ============================================================================

export const tablesPrincipales: TableBDD[] = [
  {
    fr: "utilisateurs",
    en: "users",
    es: "usuarios",
    description: "Gestion des comptes utilisateurs",
  },
  {
    fr: "troupeaux",
    en: "flocks",
    es: "lotes",
    description: "Informations sur les groupes d'animaux",
  },
  {
    fr: "bâtiments",
    en: "buildings",
    es: "edificios",
    description: "Structures d'élevage",
  },
  {
    fr: "relevés_quotidiens",
    en: "daily_records",
    es: "registros_diarios",
    description: "Données journalières de production",
  },
  {
    fr: "productions_oeufs",
    en: "egg_productions",
    es: "producciones_huevos",
    description: "Détails de la production d'œufs",
  },
  {
    fr: "dépenses",
    en: "expenses",
    es: "gastos",
    description: "Enregistrement des coûts",
  },
  {
    fr: "ventes",
    en: "sales",
    es: "ventas",
    description: "Enregistrement des recettes",
  },
  {
    fr: "transactions",
    en: "transactions",
    es: "transacciones",
    description: "Opérations financières",
  },
  {
    fr: "documents",
    en: "documents",
    es: "documentos",
    description: "Pièces justificatives numérisées",
  },
  {
    fr: "stocks",
    en: "inventories",
    es: "inventarios",
    description: "Gestion des stocks",
  },
  {
    fr: "soins_santé",
    en: "health_records",
    es: "registros_salud",
    description: "Suivi médical des animaux",
  },
  {
    fr: "vaccinations",
    en: "vaccinations",
    es: "vacunaciones",
    description: "Programme vaccinal",
  },
  {
    fr: "programmes_alimentaires",
    en: "feeding_programs",
    es: "programas_alimentacion",
    description: "Planning d'alimentation",
  },
  {
    fr: "capteurs",
    en: "sensors",
    es: "sensores",
    description: "Données des capteurs environnementaux",
  },
];

export const champsCommuns: ChampBDD[] = [
  { fr: "id", en: "id", es: "id", description: "Identifiant unique" },
  {
    fr: "date_création",
    en: "created_at",
    es: "fecha_creacion",
    description: "Date de création de l'enregistrement",
  },
  {
    fr: "date_modification",
    en: "updated_at",
    es: "fecha_modificacion",
    description: "Date de dernière modification",
  },
  {
    fr: "statut",
    en: "status",
    es: "estado",
    description: "État actif/inactif/archivé",
  },
  {
    fr: "quantité",
    en: "quantity",
    es: "cantidad",
    description: "Nombre ou volume",
  },
  {
    fr: "prix",
    en: "price",
    es: "precio",
    description: "Valeur monétaire unitaire",
  },
  {
    fr: "total",
    en: "total",
    es: "total",
    description: "Valeur monétaire totale",
  },
  {
    fr: "description",
    en: "description",
    es: "descripcion",
    description: "Explication détaillée",
  },
  {
    fr: "notes",
    en: "notes",
    es: "notas",
    description: "Commentaires additionnels",
  },
  {
    fr: "actif",
    en: "active",
    es: "activo",
    description: "Indicateur d'activation",
  },
  {
    fr: "supprimé",
    en: "deleted",
    es: "eliminado",
    description: "Indicateur de suppression logique",
  },
];

// ============================================================================
// TERMES TECHNIQUES SPÉCIFIQUES
// ============================================================================

export const parametresProduction: TermeTraduit[] = [
  {
    fr: "Uniformité",
    en: "Uniformity",
    es: "Uniformidad",
    definition: "Homogénéité du poids dans un lot",
  },
  {
    fr: "Pic de ponte",
    en: "Peak Production",
    es: "Pico de puesta",
    definition: "Maximum de taux de ponte atteint",
  },
  {
    fr: "Persistance",
    en: "Persistency",
    es: "Persistencia",
    definition: "Capacité à maintenir un taux de ponte élevé",
  },
  {
    fr: "Indice Haugh",
    en: "Haugh Unit",
    es: "Unidad Haugh",
    definition: "Mesure de la qualité interne de l'œuf",
  },
  {
    fr: "Épaisseur coquille",
    en: "Shell Thickness",
    es: "Espesor cáscara",
    definition: "Mesure de la résistance de la coquille",
  },
  {
    fr: "Couleur jaune",
    en: "Yolk Color",
    es: "Color yema",
    definition: "Intensité de la couleur du jaune",
  },
];

export const equipements: TermeTraduit[] = [
  {
    fr: "Pondoir",
    en: "Nesting Box",
    es: "Nidal",
    definition: "Compartiment où les poules pondent leurs œufs",
  },
  {
    fr: "Perchoir",
    en: "Perch",
    es: "Perca",
    definition: "Barre où les poules se reposent",
  },
  {
    fr: "Mangeoire",
    en: "Feeder",
    es: "Comedero",
    definition: "Conteneur pour distribuer l'aliment",
  },
  {
    fr: "Abreuvoir",
    en: "Drinker",
    es: "Bebedero",
    definition: "Dispositif pour distribuer l'eau",
  },
  {
    fr: "Tapis d'éveil",
    en: "Brooder",
    es: "Criadora",
    definition: "Équipement pour élever les poussins",
  },
  {
    fr: "Broyeur",
    en: "Grinder",
    es: "Trituradora",
    definition: "Machine pour broyer les céréales",
  },
  {
    fr: "Mélangeur",
    en: "Mixer",
    es: "Mezclador",
    definition: "Machine pour mélanger les aliments",
  },
  {
    fr: "Convoyeur",
    en: "Conveyor",
    es: "Transportador",
    definition: "Système de transport des œufs ou de l'aliment",
  },
];

// ============================================================================
// INTERFACE UTILISATEUR
// ============================================================================

export const elementsInterface: TermeTraduit[] = [
  {
    fr: "Tableau de bord",
    en: "Dashboard",
    es: "Panel de control",
    definition: "Page d'accueil avec les indicateurs clés",
  },
  {
    fr: "Menu",
    en: "Menu",
    es: "Menú",
    definition: "Liste des sections de l'application",
  },
  {
    fr: "Bouton",
    en: "Button",
    es: "Botón",
    definition: "Élément cliquable pour déclencher une action",
  },
  {
    fr: "Formulaire",
    en: "Form",
    es: "Formulario",
    definition: "Interface de saisie de données",
  },
  {
    fr: "Liste déroulante",
    en: "Dropdown",
    es: "Lista desplegable",
    definition: "Menu de sélection parmi plusieurs options",
  },
  {
    fr: "Case à cocher",
    en: "Checkbox",
    es: "Casilla de verificación",
    definition: "Élément pour sélectionner une option",
  },
  {
    fr: "Bouton radio",
    en: "Radio Button",
    es: "Botón de radio",
    definition: "Élément pour choisir une option parmi plusieurs",
  },
  {
    fr: "Champ texte",
    en: "Text Field",
    es: "Campo de texto",
    definition: "Zone de saisie de texte",
  },
  {
    fr: "Date picker",
    en: "Date Picker",
    es: "Selector de fecha",
    definition: "Outil de sélection de date",
  },
  {
    fr: "Tableau",
    en: "Table",
    es: "Tabla",
    definition: "Affichage de données en lignes et colonnes",
  },
  {
    fr: "Graphique",
    en: "Chart",
    es: "Gráfico",
    definition: "Représentation visuelle de données",
  },
  {
    fr: "Filtre",
    en: "Filter",
    es: "Filtro",
    definition: "Outil pour limiter l'affichage à certains critères",
  },
  {
    fr: "Recherche",
    en: "Search",
    es: "Búsqueda",
    definition: "Fonction pour trouver des informations spécifiques",
  },
  {
    fr: "Pagination",
    en: "Pagination",
    es: "Paginación",
    definition: "Navigation entre plusieurs pages de résultats",
  },
  {
    fr: "Onglet",
    en: "Tab",
    es: "Pestaña",
    definition: "Section d'une interface à plusieurs parties",
  },
  {
    fr: "Modal",
    en: "Modal",
    es: "Modal",
    definition: "Fenêtre superposée à l'interface principale",
  },
  {
    fr: "Notification toast",
    en: "Toast Notification",
    es: "Notificación toast",
    definition: "Message temporaire apparaissant à l'écran",
  },
  {
    fr: "Barre de progression",
    en: "Progress Bar",
    es: "Barra de progreso",
    definition: "Indicateur visuel d'avancement",
  },
  {
    fr: "Indicateur de chargement",
    en: "Loading Spinner",
    es: "Indicador de carga",
    definition: "Animation montrant qu'un traitement est en cours",
  },
];

export const actionsUtilisateur: TermeTraduit[] = [
  {
    fr: "Ajouter",
    en: "Add",
    es: "Añadir",
    definition: "Créer un nouvel élément",
  },
  {
    fr: "Modifier",
    en: "Edit",
    es: "Editar",
    definition: "Changer un élément existant",
  },
  {
    fr: "Supprimer",
    en: "Delete",
    es: "Eliminar",
    definition: "Retirer un élément",
  },
  {
    fr: "Enregistrer",
    en: "Save",
    es: "Guardar",
    definition: "Conserver les modifications",
  },
  {
    fr: "Annuler",
    en: "Cancel",
    es: "Cancelar",
    definition: "Abandonner les modifications",
  },
  {
    fr: "Exporter",
    en: "Export",
    es: "Exportar",
    definition: "Télécharger les données dans un fichier",
  },
  {
    fr: "Importer",
    en: "Import",
    es: "Importar",
    definition: "Charger des données depuis un fichier",
  },
  {
    fr: "Imprimer",
    en: "Print",
    es: "Imprimir",
    definition: "Générer une version papier",
  },
  {
    fr: "Partager",
    en: "Share",
    es: "Compartir",
    definition: "Envoyer des données à d'autres personnes",
  },
  {
    fr: "Télécharger",
    en: "Download",
    es: "Descargar",
    definition: "Récupérer un fichier sur son appareil",
  },
  {
    fr: "Uploader",
    en: "Upload",
    es: "Subir",
    definition: "Envoyer un fichier vers le système",
  },
  {
    fr: "Synchroniser",
    en: "Sync",
    es: "Sincronizar",
    definition: "Mettre à jour les données entre appareils",
  },
  {
    fr: "Configurer",
    en: "Configure",
    es: "Configurar",
    definition: "Paramétrer les options",
  },
  {
    fr: "Filtrer",
    en: "Filter",
    es: "Filtrar",
    definition: "Limiter l'affichage selon des critères",
  },
  {
    fr: "Trier",
    en: "Sort",
    es: "Ordenar",
    definition: "Organiser les données selon un ordre",
  },
  {
    fr: "Rechercher",
    en: "Search",
    es: "Buscar",
    definition: "Trouver des informations spécifiques",
  },
  {
    fr: "Valider",
    en: "Validate",
    es: "Validar",
    definition: "Confirmer la conformité ou l'exactitude",
  },
  {
    fr: "Vérifier",
    en: "Verify",
    es: "Verificar",
    definition: "Contrôler l'exactitude",
  },
  {
    fr: "Approuver",
    en: "Approve",
    es: "Aprobar",
    definition: "Donner son accord formel",
  },
  {
    fr: "Rejeter",
    en: "Reject",
    es: "Rechazar",
    definition: "Refuser ou désapprouver",
  },
];

// ============================================================================
// LEXIQUE COMPTABLE
// ============================================================================

export const terminologieComptableGenerale: TermeComptable[] = [
  {
    fr: "Comptabilité",
    en: "Accounting",
    es: "Contabilidad",
    definition: "Système d'enregistrement des opérations financières",
    classe: undefined,
  },
  {
    fr: "Journal",
    en: "Journal",
    es: "Diario",
    definition: "Registre chronologique des opérations comptables",
    classe: undefined,
  },
  {
    fr: "Grand livre",
    en: "General Ledger",
    es: "Libro mayor",
    definition: "Regroupement de tous les comptes de l'entreprise",
    classe: undefined,
  },
  {
    fr: "Balance",
    en: "Trial Balance",
    es: "Balance de comprobación",
    definition: "État récapitulatif des comptes à une date donnée",
    classe: undefined,
  },
  {
    fr: "Bilan",
    en: "Balance Sheet",
    es: "Balance general",
    definition: "État du patrimoine de l'entreprise à une date donnée",
    classe: undefined,
  },
  {
    fr: "Compte de résultat",
    en: "Income Statement",
    es: "Estado de resultados",
    definition: "État des produits et charges sur une période",
    classe: undefined,
  },
  {
    fr: "Trésorerie",
    en: "Cash Flow",
    es: "Flujo de caja",
    definition: "Mouvements d'argent entrant et sortant",
    classe: undefined,
  },
  {
    fr: "Plan comptable",
    en: "Chart of Accounts",
    es: "Plan de cuentas",
    definition: "Liste structurée des comptes utilisés",
    classe: undefined,
  },
];

export const comptesClasses: TermeComptable[] = [
  {
    fr: "Capital",
    en: "Capital",
    es: "Capital",
    definition: "Apports des propriétaires",
    classe: "10",
  },
  {
    fr: "Réserves",
    en: "Reserves",
    es: "Reservas",
    definition: "Bénéfices non distribués",
    classe: "11",
  },
  {
    fr: "Report à nouveau",
    en: "Retained Earnings",
    es: "Resultados acumulados",
    definition: "Bénéfices reportés d'une année sur l'autre",
    classe: "12",
  },
  {
    fr: "Résultat de l'exercice",
    en: "Current Year Earnings",
    es: "Resultado del ejercicio",
    definition: "Bénéfice ou perte de l'année en cours",
    classe: "12",
  },
  {
    fr: "Immobilisations",
    en: "Fixed Assets",
    es: "Activo fijo",
    definition: "Biens durables de l'entreprise",
    classe: "20",
  },
  {
    fr: "Amortissements",
    en: "Depreciation",
    es: "Amortización",
    definition: "Perte de valeur des immobilisations",
    classe: "28",
  },
  {
    fr: "Stocks",
    en: "Inventory",
    es: "Existencias",
    definition: "Marchandises et matières premières en stock",
    classe: "30",
  },
  {
    fr: "Clients",
    en: "Accounts Receivable",
    es: "Clientes",
    definition: "Créances sur les clients",
    classe: "40",
  },
  {
    fr: "Fournisseurs",
    en: "Accounts Payable",
    es: "Proveedores",
    definition: "Dettes envers les fournisseurs",
    classe: "40",
  },
  {
    fr: "Disponibilités",
    en: "Cash and Equivalents",
    es: "Disponible",
    definition: "Argent en caisse et en banque",
    classe: "50",
  },
  {
    fr: "Charges d'exploitation",
    en: "Operating Expenses",
    es: "Gastos de explotación",
    definition: "Dépenses liées à l'activité principale",
    classe: "60",
  },
  {
    fr: "Achats",
    en: "Purchases",
    es: "Compras",
    definition: "Achats de marchandises ou matières premières",
    classe: "60",
  },
  {
    fr: "Services extérieurs",
    en: "External Services",
    es: "Servicios exteriores",
    definition: "Frais de sous-traitance",
    classe: "61",
  },
  {
    fr: "Impôts et taxes",
    en: "Taxes and Duties",
    es: "Impuestos y tasas",
    definition: "Taxes diverses",
    classe: "63",
  },
  {
    fr: "Charges de personnel",
    en: "Personnel Expenses",
    es: "Gastos de personal",
    definition: "Salaires et charges sociales",
    classe: "64",
  },
  {
    fr: "Dotations aux amortissements",
    en: "Depreciation Charges",
    es: "Dotaciones amortización",
    definition: "Amortissements comptabilisés en charges",
    classe: "68",
  },
  {
    fr: "Ventes",
    en: "Sales",
    es: "Ventas",
    definition: "Chiffre d'affaires des ventes",
    classe: "70",
  },
  {
    fr: "Production stockée",
    en: "Stocked Production",
    es: "Producción almacenada",
    definition: "Production non vendue à la clôture",
    classe: "71",
  },
  {
    fr: "Production immobilisée",
    en: "Capitalized Production",
    es: "Producción inmovilizada",
    definition: "Production pour soi-même",
    classe: "72",
  },
  {
    fr: "Subventions d'exploitation",
    en: "Operating Grants",
    es: "Subvenciones explotación",
    definition: "Aides perçues pour l'exploitation",
    classe: "74",
  },
  {
    fr: "Produits financiers",
    en: "Financial Income",
    es: "Ingresos financieros",
    definition: "Revenus financiers",
    classe: "76",
  },
  {
    fr: "Charges financières",
    en: "Financial Expenses",
    es: "Gastos financieros",
    definition: "Frais financiers",
    classe: "66",
  },
  {
    fr: "Charges exceptionnelles",
    en: "Exceptional Expenses",
    es: "Gastos excepcionales",
    definition: "Dépenses non récurrentes",
    classe: "67",
  },
  {
    fr: "Produits exceptionnels",
    en: "Exceptional Income",
    es: "Ingresos excepcionales",
    definition: "Revenus non récurrents",
    classe: "77",
  },
  {
    fr: "Impôt sur les bénéfices",
    en: "Corporate Tax",
    es: "Impuesto sociedades",
    definition: "Impôt sur les bénéfices",
    classe: "69",
  },
];

// ============================================================================
// ARCHITECTURE DES RÔLES RBAC
// ============================================================================

export const rolesRBAC: RoleRBAC[] = [
  {
    id: "SUPER_ADMIN",
    nom: "Super Administrateur",
    description: "Niveau Système - Développeur/Éditeur",
    niveau: 1,
    utilisateursTypes: ["Développeur", "Éditeur logiciel", "Support technique"],
    permissions: [
      {
        id: "manage_system_configuration",
        description: "Gestion configuration système",
      },
      { id: "access_all_tenants", description: "Accès à tous les locataires" },
      { id: "manage_database", description: "Gestion base de données" },
      {
        id: "run_system_migrations",
        description: "Exécution migrations système",
      },
      { id: "view_system_logs", description: "Consultation logs système" },
      { id: "manage_api_keys", description: "Gestion clés API" },
      {
        id: "create_tenant_accounts",
        description: "Création comptes locataires",
      },
      {
        id: "delete_tenant_accounts",
        description: "Suppression comptes locataires",
      },
      { id: "manage_all_users", description: "Gestion tous les utilisateurs" },
      {
        id: "override_all_permissions",
        description: "Contournement toutes permissions",
      },
      {
        id: "impersonate_any_user",
        description: "Usurpation tout utilisateur",
      },
      { id: "export_all_data", description: "Export toutes données" },
      { id: "access_debug_tools", description: "Accès outils debug" },
    ],
    restrictions: ["Aucune"],
    interface: "Console admin complète, accès DB direct",
  },
  {
    id: "FARM_ADMIN",
    nom: "Administrateur Élevage",
    description: "Propriétaire/Gérant principal",
    niveau: 2,
    utilisateursTypes: ["Propriétaire", "Gérant", "Directeur d'exploitation"],
    permissions: [
      {
        id: "manage_farm_configuration",
        description: "Configuration ferme",
        module: "administration",
      },
      {
        id: "manage_all_flocks",
        description: "Gestion tous troupeaux",
        module: "production",
      },
      {
        id: "manage_all_buildings",
        description: "Gestion tous bâtiments",
        module: "production",
      },
      {
        id: "manage_all_equipment",
        description: "Gestion tous équipements",
        module: "production",
      },
      {
        id: "view_all_financial_data",
        description: "Consultation données financières",
        module: "finance",
      },
      {
        id: "manage_bank_accounts",
        description: "Gestion comptes bancaires",
        module: "finance",
      },
      {
        id: "approve_large_expenses",
        description: "Approbation grosses dépenses",
        module: "finance",
      },
      {
        id: "generate_financial_reports",
        description: "Génération rapports financiers",
        module: "finance",
      },
      {
        id: "manage_tax_settings",
        description: "Gestion paramètres fiscaux",
        module: "finance",
      },
      {
        id: "create_users",
        description: "Création utilisateurs",
        module: "administration",
      },
      {
        id: "modify_user_roles",
        description: "Modification rôles utilisateurs",
        module: "administration",
      },
      {
        id: "deactivate_users",
        description: "Désactivation utilisateurs",
        module: "administration",
      },
      {
        id: "view_user_activity_logs",
        description: "Consultation logs activité",
        module: "administration",
      },
      {
        id: "configure_quality_standards",
        description: "Configuration standards qualité",
        module: "qualite",
      },
      {
        id: "set_alert_thresholds",
        description: "Définition seuils alertes",
        module: "administration",
      },
      {
        id: "manage_breed_database",
        description: "Gestion base races",
        module: "production",
      },
      {
        id: "configure_integrations",
        description: "Configuration intégrations",
        module: "administration",
      },
      {
        id: "access_all_reports",
        description: "Accès tous rapports",
        module: "rapports",
      },
      {
        id: "export_all_data",
        description: "Export toutes données",
        module: "administration",
      },
      {
        id: "compare_performance_across_flocks",
        description: "Comparaison performance troupeaux",
        module: "analyse",
      },
    ],
    restrictions: ["Ne peut pas modifier le code source"],
    interface: "Dashboard complet avec tous les modules",
  },
  {
    id: "PRODUCTION_MANAGER",
    nom: "Responsable Production",
    description: "Chef d'équipe production, Responsable technique",
    niveau: 3,
    utilisateursTypes: ["Chef d'équipe production", "Responsable technique"],
    permissions: [
      {
        id: "create_flocks",
        description: "Création troupeaux",
        module: "production",
      },
      {
        id: "manage_active_flocks",
        description: "Gestion troupeaux actifs",
        module: "production",
      },
      {
        id: "plan_production_schedules",
        description: "Planification calendrier production",
        module: "production",
      },
      {
        id: "approve_daily_production_data",
        description: "Approbation données production quotidienne",
        module: "production",
      },
      {
        id: "manage_feeding_programs",
        description: "Gestion programmes alimentaires",
        module: "alimentation",
      },
      {
        id: "manage_health_programs",
        description: "Gestion programmes santé",
        module: "sante",
      },
      {
        id: "authorize_treatments",
        description: "Autorisation traitements",
        module: "sante",
      },
      {
        id: "manage_vaccination_schedules",
        description: "Gestion calendrier vaccination",
        module: "sante",
      },
      {
        id: "declare_health_issues",
        description: "Déclaration problèmes santé",
        module: "sante",
      },
      {
        id: "configure_environment_settings",
        description: "Configuration paramètres environnement",
        module: "environnement",
      },
      {
        id: "manage_equipment_maintenance",
        description: "Gestion maintenance équipements",
        module: "maintenance",
      },
      {
        id: "monitor_sensor_data",
        description: "Surveillance données capteurs",
        module: "environnement",
      },
      {
        id: "define_quality_standards",
        description: "Définition standards qualité",
        module: "qualite",
      },
      {
        id: "manage_egg_grading",
        description: "Gestion calibrage œufs",
        module: "qualite",
      },
      {
        id: "authorize_product_release",
        description: "Autorisation libération produits",
        module: "qualite",
      },
      {
        id: "generate_production_reports",
        description: "Génération rapports production",
        module: "rapports",
      },
      {
        id: "view_performance_analytics",
        description: "Consultation analytiques performance",
        module: "analyse",
      },
      {
        id: "compare_flock_performance",
        description: "Comparaison performance troupeaux",
        module: "analyse",
      },
    ],
    restrictions: [
      "cannot_manage_finances",
      "cannot_manage_users",
      "limited_to_assigned_buildings",
    ],
    interface: "Dashboard production, calendrier, rapports",
  },
  // Note: Les autres rôles peuvent être ajoutés de la même manière
];

// ============================================================================
// MATRICE DES PERMISSIONS (simplifiée)
// ============================================================================

export interface MatricePermission {
  permission: string;
  modules: string[];
  SUPER_ADMIN: boolean;
  FARM_ADMIN: boolean;
  PRODUCTION_MANAGER: boolean;
  QUALITY_MANAGER: boolean;
  FINANCE_MANAGER: boolean;
  SENIOR_FARMER: boolean;
  FARM_WORKER: boolean;
}

export const matricePermissions: MatricePermission[] = [
  {
    permission: "create_flock",
    modules: ["production"],
    SUPER_ADMIN: true,
    FARM_ADMIN: true,
    PRODUCTION_MANAGER: true,
    QUALITY_MANAGER: false,
    FINANCE_MANAGER: false,
    SENIOR_FARMER: false,
    FARM_WORKER: false,
  },
  {
    permission: "record_daily_production",
    modules: ["production"],
    SUPER_ADMIN: true,
    FARM_ADMIN: true,
    PRODUCTION_MANAGER: true,
    QUALITY_MANAGER: false,
    FINANCE_MANAGER: false,
    SENIOR_FARMER: true,
    FARM_WORKER: true,
  },
  {
    permission: "manage_vaccination_schedule",
    modules: ["sante"],
    SUPER_ADMIN: true,
    FARM_ADMIN: true,
    PRODUCTION_MANAGER: true,
    QUALITY_MANAGER: false,
    FINANCE_MANAGER: false,
    SENIOR_FARMER: true,
    FARM_WORKER: false,
  },
  {
    permission: "view_all_financials",
    modules: ["finance"],
    SUPER_ADMIN: true,
    FARM_ADMIN: true,
    PRODUCTION_MANAGER: false,
    QUALITY_MANAGER: false,
    FINANCE_MANAGER: true,
    SENIOR_FARMER: false,
    FARM_WORKER: false,
  },
  {
    permission: "define_quality_standards",
    modules: ["qualite"],
    SUPER_ADMIN: true,
    FARM_ADMIN: true,
    PRODUCTION_MANAGER: false,
    QUALITY_MANAGER: true,
    FINANCE_MANAGER: false,
    SENIOR_FARMER: false,
    FARM_WORKER: false,
  },
];

// ============================================================================
// EXPORT GLOBAL
// ============================================================================

export const lexiqueComplet = {
  // Sections principales
  terminologieGenerale,
  productionOeufs,
  alimentation,
  santeBienEtre,
  environnement,
  analyseIndicateurs,
  techniqueSysteme,
  gestionAdministration,
  qualiteCertification,
  tempsPeriodes,
  unitesMesure,

  // Base de données
  tablesPrincipales,
  champsCommuns,

  // Termes techniques
  parametresProduction,
  equipements,

  // Interface utilisateur
  elementsInterface,
  actionsUtilisateur,

  // Comptabilité
  terminologieComptableGenerale,
  comptesClasses,

  // Rôles et permissions
  rolesRBAC,
  matricePermissions,
};

// Fonctions utilitaires
export function rechercherTerme(
  terme: string,
  langue: "fr" | "en" | "es" = "fr"
): TermeTraduit[] {
  const resultats: TermeTraduit[] = [];
  const sections = [
    terminologieGenerale,
    productionOeufs,
    alimentation,
    santeBienEtre,
    environnement,
    analyseIndicateurs,
    techniqueSysteme,
    gestionAdministration,
    qualiteCertification,
    tempsPeriodes,
    unitesMesure,
    parametresProduction,
    equipements,
    elementsInterface,
    actionsUtilisateur,
  ];

  sections.forEach((section) => {
    section.forEach((termeObj) => {
      if (
        termeObj[langue].toLowerCase().includes(terme.toLowerCase()) ||
        termeObj.definition.toLowerCase().includes(terme.toLowerCase())
      ) {
        resultats.push(termeObj);
      }
    });
  });

  return resultats;
}

export function obtenirTraduction(
  terme: string,
  langueSource: "fr" | "en" | "es",
  langueCible: "fr" | "en" | "es"
): string | undefined {
  const sections = [
    terminologieGenerale,
    productionOeufs,
    alimentation,
    santeBienEtre,
    environnement,
    analyseIndicateurs,
    techniqueSysteme,
    gestionAdministration,
    qualiteCertification,
    tempsPeriodes,
    unitesMesure,
    parametresProduction,
    equipements,
    elementsInterface,
    actionsUtilisateur,
  ];

  for (const section of sections) {
    const termeTrouve = section.find((t) => t[langueSource] === terme);
    if (termeTrouve) {
      return termeTrouve[langueCible];
    }
  }

  return undefined;
}

// Export par défaut
export default lexiqueComplet;
