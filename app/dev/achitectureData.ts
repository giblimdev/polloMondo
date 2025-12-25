type PageRoute = {
  category: string;
  name: string;
  path: string;
  status: "progress" | "todo";
};

const pages: PageRoute[] = [
  // Auth
  {
    category: "Auth",
    name: "Login",
    path: "/auth/login",
    status: "progress",
  },
  {
    category: "Auth",
    name: "Register",
    path: "/auth/register",
    status: "todo",
  },

  // Dashboard General
  {
    category: "App",
    name: "Dashboard Home",
    path: "/dashboard",
    status: "todo",
  },

  // Lots (Flocks)
  {
    category: "Lots",
    name: "Liste des lots",
    path: "/dashboard/lots",
    status: "todo",
  },
  {
    category: "Lots",
    name: "Nouveau lot (Wizard)",
    path: "/dashboard/lots/new",
    status: "todo",
  },
  {
    category: "Lots",
    name: "Détail lot (Cycle)",
    path: "/dashboard/lots/[id]",
    status: "todo",
  },

  // Production
  {
    category: "Prod",
    name: "Saisie Journalière",
    path: "/dashboard/production/daily",
    status: "todo",
  },

  // Santé
  {
    category: "Santé",
    name: "Carnet Sanitaire",
    path: "/dashboard/health",
    status: "todo",
  },
];
