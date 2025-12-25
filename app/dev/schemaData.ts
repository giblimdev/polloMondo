// @/app/dev/schemaData.ts
/* Definition du schema de la base de données pour l'application de gestion d'élevage de poules pondeuses */

export interface Column {
  name: string;
  type: string;
  isPrimaryKey?: boolean;
  isForeignKey?: boolean;
  references?: string;
  isRequired?: boolean;
  isUnique?: boolean;
  hasDefault?: boolean;
  isArray?: boolean;
}

export interface TableSchema {
  name: string;
  description?: string;
  columns: Column[];
  category?: string; // Pour grouper les tables par catégorie
}

export const schema: TableSchema[] = [
  {
    name: "User",
    description: "Utilisateur de l'application",
    category: "Authentification",
    columns: [
      { name: "id", type: "String", isPrimaryKey: true, hasDefault: true },
      { name: "email", type: "String", isRequired: true, isUnique: true },
      { name: "password", type: "String", isRequired: true },
      { name: "name", type: "String", isRequired: true },
      { name: "farmName", type: "String", isRequired: true },
      {
        name: "createdAt",
        type: "DateTime",
        isRequired: true,
        hasDefault: true,
      },
      { name: "updatedAt", type: "DateTime", isRequired: true },
    ],
  },
  {
    name: "Building",
    description: "Bâtiment/Élevage",
    category: "Infrastructure",
    columns: [
      { name: "id", type: "String", isPrimaryKey: true, hasDefault: true },
      { name: "name", type: "String", isRequired: true },
      { name: "capacity", type: "Int", isRequired: true },
      { name: "type", type: "String", isRequired: true },
      { name: "description", type: "String" },
    ],
  },
  {
    name: "Flock",
    description: "Troupeau (lot de poules)",
    category: "Production",
    columns: [
      { name: "id", type: "String", isPrimaryKey: true, hasDefault: true },
      { name: "name", type: "String", isRequired: true },
      { name: "breed", type: "String", isRequired: true },
      { name: "arrivalDate", type: "DateTime", isRequired: true },
      { name: "initialQuantity", type: "Int", isRequired: true },
      { name: "currentQuantity", type: "Int", isRequired: true },
      { name: "ageInWeeks", type: "Int", isRequired: true },
      {
        name: "buildingId",
        type: "String",
        isForeignKey: true,
        references: "Building",
      },
    ],
  },
  {
    name: "DailyRecord",
    description: "Enregistrement quotidien (données journalières)",
    category: "Production",
    columns: [
      { name: "id", type: "String", isPrimaryKey: true, hasDefault: true },
      { name: "date", type: "DateTime", isRequired: true, hasDefault: true },
      {
        name: "flockId",
        type: "String",
        isRequired: true,
        isForeignKey: true,
        references: "Flock",
      },
      {
        name: "userId",
        type: "String",
        isRequired: true,
        isForeignKey: true,
        references: "User",
      },
      { name: "eggsCollected", type: "Int", isRequired: true },
      { name: "brokenEggs", type: "Int", isRequired: true },
      { name: "dirtyEggs", type: "Int", isRequired: true },
      { name: "mortality", type: "Int", isRequired: true },
      { name: "feedConsumed", type: "Float", isRequired: true },
      { name: "waterConsumed", type: "Float" },
      { name: "electricityUsed", type: "Float" },
      { name: "observations", type: "String" },
      { name: "temperature", type: "Float" },
      { name: "humidity", type: "Float" },
      {
        name: "recordedAt",
        type: "DateTime",
        isRequired: true,
        hasDefault: true,
      },
    ],
  },
  {
    name: "EggProduction",
    description: "Production d'œufs par calibre",
    category: "Production",
    columns: [
      { name: "id", type: "String", isPrimaryKey: true, hasDefault: true },
      { name: "date", type: "DateTime", isRequired: true, hasDefault: true },
      {
        name: "flockId",
        type: "String",
        isRequired: true,
        isForeignKey: true,
        references: "Flock",
      },
      {
        name: "userId",
        type: "String",
        isRequired: true,
        isForeignKey: true,
        references: "User",
      },
      {
        name: "dailyRecordId",
        type: "String",
        isForeignKey: true,
        references: "DailyRecord",
        isUnique: true,
      },
      { name: "sizeS", type: "Int", isRequired: true, hasDefault: true },
      { name: "sizeM", type: "Int", isRequired: true, hasDefault: true },
      { name: "sizeL", type: "Int", isRequired: true, hasDefault: true },
      { name: "sizeXL", type: "Int", isRequired: true, hasDefault: true },
      { name: "totalWeight", type: "Float" },
      { name: "averageWeight", type: "Float" },
    ],
  },
  {
    name: "Expense",
    description: "Dépenses/Charges",
    category: "Finance",
    columns: [
      { name: "id", type: "String", isPrimaryKey: true, hasDefault: true },
      { name: "date", type: "DateTime", isRequired: true, hasDefault: true },
      {
        name: "userId",
        type: "String",
        isRequired: true,
        isForeignKey: true,
        references: "User",
      },
      { name: "category", type: "String", isRequired: true },
      { name: "description", type: "String", isRequired: true },
      { name: "amount", type: "Float", isRequired: true },
      { name: "quantity", type: "Float" },
      { name: "unitPrice", type: "Float" },
      { name: "unit", type: "String" },
      { name: "supplier", type: "String" },
      { name: "invoiceRef", type: "String" },
    ],
  },
  {
    name: "ExpenseCategory",
    description: "Catégorie de dépenses prédéfinies",
    category: "Finance",
    columns: [
      { name: "id", type: "String", isPrimaryKey: true, hasDefault: true },
      { name: "name", type: "String", isRequired: true, isUnique: true },
      { name: "description", type: "String" },
      { name: "unit", type: "String" },
    ],
  },
  {
    name: "Sale",
    description: "Ventes",
    category: "Finance",
    columns: [
      { name: "id", type: "String", isPrimaryKey: true, hasDefault: true },
      { name: "date", type: "DateTime", isRequired: true, hasDefault: true },
      {
        name: "userId",
        type: "String",
        isRequired: true,
        isForeignKey: true,
        references: "User",
      },
      { name: "customer", type: "String" },
      { name: "saleType", type: "String", isRequired: true },
      { name: "description", type: "String", isRequired: true },
      { name: "quantity", type: "Float", isRequired: true },
      { name: "unit", type: "String", isRequired: true },
      { name: "unitPrice", type: "Float", isRequired: true },
      { name: "totalAmount", type: "Float", isRequired: true },
      {
        name: "paymentStatus",
        type: "String",
        isRequired: true,
        hasDefault: true,
      },
      { name: "paymentMethod", type: "String" },
    ],
  },
  {
    name: "HealthRecord",
    description: "Santé des poules",
    category: "Santé",
    columns: [
      { name: "id", type: "String", isPrimaryKey: true, hasDefault: true },
      { name: "date", type: "DateTime", isRequired: true, hasDefault: true },
      {
        name: "flockId",
        type: "String",
        isRequired: true,
        isForeignKey: true,
        references: "Flock",
      },
      {
        name: "userId",
        type: "String",
        isRequired: true,
        isForeignKey: true,
        references: "User",
      },
      { name: "issueType", type: "String", isRequired: true },
      { name: "description", type: "String", isRequired: true },
      { name: "affectedCount", type: "Int", isRequired: true },
      { name: "mortalityCount", type: "Int" },
      { name: "treatment", type: "String" },
      { name: "medication", type: "String" },
      { name: "dosage", type: "String" },
      { name: "cost", type: "Float" },
      { name: "resolved", type: "Boolean", isRequired: true, hasDefault: true },
      { name: "resolutionDate", type: "DateTime" },
    ],
  },
  {
    name: "FeedStock",
    description: "Aliment et stock",
    category: "Inventaire",
    columns: [
      { name: "id", type: "String", isPrimaryKey: true, hasDefault: true },
      { name: "name", type: "String", isRequired: true },
      { name: "type", type: "String", isRequired: true },
      { name: "supplier", type: "String" },
      { name: "quantity", type: "Float", isRequired: true },
      { name: "minQuantity", type: "Float", isRequired: true },
      { name: "unit", type: "String", isRequired: true, hasDefault: true },
      { name: "lastPrice", type: "Float" },
      { name: "lastPurchaseDate", type: "DateTime" },
      {
        name: "userId",
        type: "String",
        isRequired: true,
        isForeignKey: true,
        references: "User",
      },
    ],
  },
  {
    name: "EggPrice",
    description: "Prix de vente par calibre",
    category: "Finance",
    columns: [
      { name: "id", type: "String", isPrimaryKey: true, hasDefault: true },
      {
        name: "userId",
        type: "String",
        isRequired: true,
        isForeignKey: true,
        references: "User",
      },
      { name: "size", type: "String", isRequired: true },
      { name: "unitPrice", type: "Float", isRequired: true },
      {
        name: "validFrom",
        type: "DateTime",
        isRequired: true,
        hasDefault: true,
      },
      { name: "validUntil", type: "DateTime" },
    ],
  },
  {
    name: "Budget",
    description: "Budgets et prévisions",
    category: "Finance",
    columns: [
      { name: "id", type: "String", isPrimaryKey: true, hasDefault: true },
      {
        name: "userId",
        type: "String",
        isRequired: true,
        isForeignKey: true,
        references: "User",
      },
      { name: "year", type: "Int", isRequired: true },
      { name: "month", type: "Int" },
      { name: "feedBudget", type: "Float" },
      { name: "energyBudget", type: "Float" },
      { name: "healthBudget", type: "Float" },
      { name: "laborBudget", type: "Float" },
      { name: "equipmentBudget", type: "Float" },
      { name: "otherBudget", type: "Float" },
      { name: "targetEggs", type: "Int" },
      { name: "targetLayingRate", type: "Float" },
    ],
  },
  {
    name: "Setting",
    description: "Paramètres de l'application",
    category: "Configuration",
    columns: [
      { name: "id", type: "String", isPrimaryKey: true, hasDefault: true },
      {
        name: "userId",
        type: "String",
        isRequired: true,
        isForeignKey: true,
        references: "User",
        isUnique: true,
      },
      { name: "currency", type: "String", isRequired: true, hasDefault: true },
      { name: "language", type: "String", isRequired: true, hasDefault: true },
      { name: "timezone", type: "String", isRequired: true, hasDefault: true },
      {
        name: "alertMortalityRate",
        type: "Float",
        isRequired: true,
        hasDefault: true,
      },
      {
        name: "alertLayingRate",
        type: "Float",
        isRequired: true,
        hasDefault: true,
      },
      {
        name: "alertFeedStock",
        type: "Int",
        isRequired: true,
        hasDefault: true,
      },
      { name: "defaultFeedPrice", type: "Float" },
      { name: "defaultElectricityPrice", type: "Float" },
      { name: "defaultWaterPrice", type: "Float" },
    ],
  },
  {
    name: "Report",
    description: "Rapports et analyses sauvegardées",
    category: "Analyse",
    columns: [
      { name: "id", type: "String", isPrimaryKey: true, hasDefault: true },
      {
        name: "userId",
        type: "String",
        isRequired: true,
        isForeignKey: true,
        references: "User",
      },
      { name: "name", type: "String", isRequired: true },
      { name: "type", type: "String", isRequired: true },
      { name: "periodStart", type: "DateTime", isRequired: true },
      { name: "periodEnd", type: "DateTime", isRequired: true },
      { name: "data", type: "Json", isRequired: true },
      {
        name: "createdAt",
        type: "DateTime",
        isRequired: true,
        hasDefault: true,
      },
    ],
  },
  {
    name: "ActivityLog",
    description: "Journal d'activité",
    category: "Audit",
    columns: [
      { name: "id", type: "String", isPrimaryKey: true, hasDefault: true },
      {
        name: "userId",
        type: "String",
        isRequired: true,
        isForeignKey: true,
        references: "User",
      },
      { name: "action", type: "String", isRequired: true },
      { name: "entity", type: "String", isRequired: true },
      { name: "entityId", type: "String" },
      { name: "description", type: "String", isRequired: true },
      { name: "details", type: "Json" },
      {
        name: "createdAt",
        type: "DateTime",
        isRequired: true,
        hasDefault: true,
      },
    ],
  },
  {
    name: "TheoreticalData",
    description: "Données théoriques/prévisionnelles",
    category: "Référence",
    columns: [
      { name: "id", type: "String", isPrimaryKey: true, hasDefault: true },
      { name: "breed", type: "String", isRequired: true, isUnique: true },
      { name: "layingRate", type: "Json", isRequired: true },
      { name: "feedConsumption", type: "Json", isRequired: true },
      { name: "eggWeight", type: "Json", isRequired: true },
      {
        name: "createdAt",
        type: "DateTime",
        isRequired: true,
        hasDefault: true,
      },
      { name: "updatedAt", type: "DateTime", isRequired: true },
    ],
  },
];

// Grouper les tables par catégorie
export const getTablesByCategory = () => {
  const categories = new Map<string, TableSchema[]>();

  schema.forEach((table) => {
    const category = table.category || "Autre";
    if (!categories.has(category)) {
      categories.set(category, []);
    }
    categories.get(category)!.push(table);
  });

  return categories;
};

// Statistiques du schéma
export const getSchemaStats = () => {
  const totalTables = schema.length;
  const totalColumns = schema.reduce(
    (acc, table) => acc + table.columns.length,
    0
  );
  const totalRelations = schema.reduce(
    (acc, table) =>
      acc + table.columns.filter((col) => col.isForeignKey).length,
    0
  );

  return { totalTables, totalColumns, totalRelations };
};
