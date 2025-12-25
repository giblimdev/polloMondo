// @/app/dev/Schema.tsx
"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Table,
  Key,
  Link as LinkIcon,
  Database,
  Search,
  TrendingUp,
  DollarSign,
  Activity,
  Package,
  Settings as SettingsIcon,
  FileText,
  Shield,
  Building2,
} from "lucide-react";

import {
  schema,
  getTablesByCategory,
  getSchemaStats,
  type TableSchema,
} from "./schemaData";

// Icônes par catégorie
const categoryIcons: Record<string, React.ReactNode> = {
  Authentification: <Shield size={20} className="text-blue-500" />,
  Infrastructure: <Building2 size={20} className="text-purple-500" />,
  Production: <TrendingUp size={20} className="text-green-500" />,
  Finance: <DollarSign size={20} className="text-yellow-500" />,
  Santé: <Activity size={20} className="text-red-500" />,
  Inventaire: <Package size={20} className="text-orange-500" />,
  Configuration: <SettingsIcon size={20} className="text-gray-500" />,
  Analyse: <FileText size={20} className="text-indigo-500" />,
  Audit: <Shield size={20} className="text-pink-500" />,
  Référence: <Database size={20} className="text-teal-500" />,
};

export default function Schema() {
  const [searchTerm, setSearchTerm] = useState("");
  const stats = getSchemaStats();
  const tablesByCategory = getTablesByCategory();

  // Filtrer les tables par terme de recherche
  const filteredSchema = schema.filter(
    (table) =>
      table.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      table.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      table.columns.some((col) =>
        col.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="container mx-auto p-8 max-w-7xl">
      {/* En-tête */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold flex items-center gap-3 mb-2">
          <Database className="text-primary" size={40} />
          Schéma de Base de Données - PolloMondo
        </h1>
        <p className="text-muted-foreground text-lg">
          Application de gestion d&apos;élevage de poules pondeuses
        </p>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="border rounded-lg p-4 bg-primary/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Tables</p>
                <p className="text-3xl font-bold">{stats.totalTables}</p>
              </div>
              <Table className="text-primary" size={32} />
            </div>
          </div>
          <div className="border rounded-lg p-4 bg-blue-500/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Colonnes</p>
                <p className="text-3xl font-bold">{stats.totalColumns}</p>
              </div>
              <Database className="text-blue-500" size={32} />
            </div>
          </div>
          <div className="border rounded-lg p-4 bg-green-500/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Relations</p>
                <p className="text-3xl font-bold">{stats.totalRelations}</p>
              </div>
              <LinkIcon className="text-green-500" size={32} />
            </div>
          </div>
        </div>
      </div>

      {/* Barre de recherche */}
      <div className="mb-6">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            size={20}
          />
          <Input
            type="text"
            placeholder="Rechercher une table ou une colonne..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
            className="pl-10"
          />
        </div>
      </div>

      {/* Onglets */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">Toutes les tables</TabsTrigger>
          <TabsTrigger value="category">Par catégorie</TabsTrigger>
          <TabsTrigger value="relations">Relations</TabsTrigger>
        </TabsList>

        {/* Onglet: Toutes les tables */}
        <TabsContent value="all">
          <Accordion type="single" collapsible className="space-y-4">
            {filteredSchema.map((table, index) => (
              <TableAccordion key={table.name} table={table} index={index} />
            ))}
          </Accordion>
        </TabsContent>

        {/* Onglet: Par catégorie */}
        <TabsContent value="category">
          <div className="space-y-6">
            {Array.from(tablesByCategory.entries()).map(
              ([category, tables]) => (
                <div key={category} className="border rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    {categoryIcons[category] || <Database size={20} />}
                    {category}
                    <Badge variant="secondary" className="ml-2">
                      {tables.length} table{tables.length > 1 ? "s" : ""}
                    </Badge>
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {tables.map((table, index) => (
                      <TableAccordion
                        key={table.name}
                        table={table}
                        index={index}
                      />
                    ))}
                  </Accordion>
                </div>
              )
            )}
          </div>
        </TabsContent>

        {/* Onglet: Relations */}
        <TabsContent value="relations">
          <RelationsView />
        </TabsContent>
      </Tabs>

      {/* Légende */}
      <div className="mt-8 p-6 border rounded-lg bg-muted/50">
        <h3 className="font-semibold mb-4 text-lg">Légende</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Key size={16} className="text-yellow-600" />
            <span>Clé primaire</span>
          </div>
          <div className="flex items-center gap-2">
            <LinkIcon size={16} className="text-blue-600" />
            <span>Clé étrangère</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="destructive" className="text-xs">
              Required
            </Badge>
            <span>Champ obligatoire</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              Unique
            </Badge>
            <span>Valeur unique</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant pour afficher une table dans un accordéon
function TableAccordion({
  table,
  index,
}: {
  table: TableSchema;
  index: number;
}) {
  return (
    <AccordionItem
      value={`table-${index}`}
      className="border rounded-lg overflow-hidden"
    >
      <AccordionTrigger className="px-6 py-4 hover:bg-muted/50">
        <div className="flex items-center gap-3 text-left w-full">
          <Table className="text-primary shrink-0" size={24} />
          <div className="flex-1">
            <div className="font-bold text-lg">{table.name}</div>
            {table.description && (
              <div className="text-sm text-muted-foreground">
                {table.description}
              </div>
            )}
          </div>
          <div className="flex gap-2 flex-wrap">
            {table.category && (
              <Badge variant="outline" className="flex items-center gap-1">
                {categoryIcons[table.category]}
                {table.category}
              </Badge>
            )}
            <Badge variant="secondary">{table.columns.length} colonnes</Badge>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="px-0">
        <div className="divide-y">
          {table.columns.map((column) => (
            <div
              key={column.name}
              className="px-6 py-3 hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 flex-wrap">
                  {column.isPrimaryKey && (
                    <Key size={16} className="text-yellow-600 shrink-0" />
                  )}
                  {column.isForeignKey && (
                    <LinkIcon size={16} className="text-blue-600 shrink-0" />
                  )}
                  <span className="font-medium">{column.name}</span>
                  {column.isRequired && (
                    <Badge variant="destructive" className="text-xs">
                      Required
                    </Badge>
                  )}
                  {column.isUnique && (
                    <Badge variant="secondary" className="text-xs">
                      Unique
                    </Badge>
                  )}
                  {column.hasDefault && (
                    <Badge variant="outline" className="text-xs">
                      Default
                    </Badge>
                  )}
                </div>

                <div className="text-right ml-4">
                  <div className="font-mono text-sm text-muted-foreground">
                    {column.type}
                    {column.isArray && "[]"}
                  </div>
                  {column.references && (
                    <div className="text-xs text-blue-600 flex items-center gap-1 justify-end mt-1">
                      <LinkIcon size={12} />→ {column.references}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

// Composant pour afficher les relations
function RelationsView() {
  const relations = schema.flatMap((table) =>
    table.columns
      .filter((col) => col.isForeignKey && col.references)
      .map((col) => ({
        from: table.name,
        to: col.references!,
        column: col.name,
        category: table.category,
      }))
  );

  return (
    <div className="space-y-4">
      <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <h3 className="font-semibold mb-2 flex items-center gap-2">
          <LinkIcon className="text-blue-600" />
          {relations.length} relations détectées
        </h3>
        <p className="text-sm text-muted-foreground">
          Visualisation de toutes les clés étrangères du schéma
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {relations.map((rel, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-card"
          >
            <div className="flex items-center justify-between mb-2">
              <Badge variant="outline">{rel.category}</Badge>
              <LinkIcon size={16} className="text-blue-600" />
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-bold">{rel.from}</span>
              <span className="text-muted-foreground">({rel.column})</span>
              <span className="text-blue-600">→</span>
              <span className="font-bold">{rel.to}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
