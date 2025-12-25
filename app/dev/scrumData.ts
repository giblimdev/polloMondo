interface Feature {
  id: string;
  name: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  status: "progress" | "todo";
}

const features: Feature[] = [
  {
    id: "1",
    name: "Authentification",
    description: "Login, Register, Reset Password avec Better-Auth",
    priority: "High",
    status: "progress",
  },
  {
    id: "2",
    name: "Gestion des Troupeaux (Flocks)",
    description: "CRUD complet des lots, calcul âge automatique",
    priority: "High",
    status: "todo",
  },
  {
    id: "3",
    name: "Production Quotidienne",
    description: "Saisie œufs (bons, cassés), mortalité, aliment",
    priority: "High",
    status: "todo",
  },
  {
    id: "4",
    name: "Calendrier & Planning",
    description: "Vue agenda, tâches récurrentes, vaccinations",
    priority: "Medium",
    status: "todo",
  },
  {
    id: "5",
    name: "Santé (Health)",
    description: "Suivi vétérinaire, traitements, autopsies",
    priority: "Medium",
    status: "todo",
  },
  {
    id: "6",
    name: "Finances",
    description: "Tableau des dépenses et ventes (œufs/réformes)",
    priority: "Low",
    status: "todo",
  },
];
