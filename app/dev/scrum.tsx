// @/app/dev/Scrum.tsx
"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Target,
  Clock,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  List,
  LayoutGrid,
} from "lucide-react";

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

// Badge de priorité
const PriorityBadge = ({
  priority,
}: {
  priority: "High" | "Medium" | "Low";
}) => {
  const variants = {
    High: {
      variant: "destructive" as const,
      icon: <AlertTriangle size={12} />,
      label: "Haute",
    },
    Medium: {
      variant: "default" as const,
      icon: <TrendingUp size={12} />,
      label: "Moyenne",
    },
    Low: {
      variant: "secondary" as const,
      icon: <Target size={12} />,
      label: "Basse",
    },
  };

  const config = variants[priority];

  return (
    <Badge variant={config.variant} className="flex items-center gap-1">
      {config.icon}
      {config.label}
    </Badge>
  );
};

// Badge de statut
const StatusBadge = ({ status }: { status: "progress" | "todo" }) => {
  if (status === "progress") {
    return (
      <Badge variant="default" className="flex items-center gap-1 bg-blue-500">
        <Clock size={12} />
        En cours
      </Badge>
    );
  }
  return (
    <Badge variant="outline" className="flex items-center gap-1">
      <CheckCircle2 size={12} />À faire
    </Badge>
  );
};

// Carte de fonctionnalité
const FeatureCard = ({ feature }: { feature: Feature }) => (
  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between gap-2">
        <CardTitle className="text-lg">{feature.name}</CardTitle>
        <PriorityBadge priority={feature.priority} />
      </div>
      <CardDescription>{feature.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">#{feature.id}</span>
        <StatusBadge status={feature.status} />
      </div>
    </CardContent>
  </Card>
);

export default function Scrum() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrer les fonctionnalités
  const filteredFeatures = features.filter(
    (feature) =>
      feature.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feature.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Grouper par statut pour la vue Kanban
  const inProgress = filteredFeatures.filter((f) => f.status === "progress");
  const todo = filteredFeatures.filter((f) => f.status === "todo");

  // Statistiques
  const totalFeatures = features.length;
  const highPriority = features.filter((f) => f.priority === "High").length;
  const inProgressCount = features.filter(
    (f) => f.status === "progress"
  ).length;
  const todoCount = features.filter((f) => f.status === "todo").length;

  return (
    <div className="container mx-auto p-8 max-w-7xl">
      {/* En-tête */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold flex items-center gap-3 mb-2">
          <Target className="text-primary" size={40} />
          Backlog Produit - PolloMondo
        </h1>
        <p className="text-muted-foreground text-lg">
          Gestion des fonctionnalités et suivi du développement
        </p>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Fonctionnalités
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold">{totalFeatures}</p>
                <List className="text-primary" size={32} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Priorité Haute
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold">{highPriority}</p>
                <AlertTriangle className="text-red-500" size={32} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                En cours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold">{inProgressCount}</p>
                <Clock className="text-blue-500" size={32} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                À faire
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold">{todoCount}</p>
                <CheckCircle2 className="text-green-500" size={32} />
              </div>
            </CardContent>
          </Card>
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
            placeholder="Rechercher une fonctionnalité..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
            className="pl-10"
          />
        </div>
      </div>

      {/* Onglets */}
      <Tabs defaultValue="kanban" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="kanban" className="flex items-center gap-2">
            <LayoutGrid size={16} />
            Kanban
          </TabsTrigger>
          <TabsTrigger value="list" className="flex items-center gap-2">
            <List size={16} />
            Liste
          </TabsTrigger>
          <TabsTrigger value="priority" className="flex items-center gap-2">
            <AlertTriangle size={16} />
            Par priorité
          </TabsTrigger>
        </TabsList>

        {/* Vue Kanban */}
        <TabsContent value="kanban">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Colonne En cours */}
            <div>
              <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Clock className="text-blue-600" />
                  En cours
                  <Badge variant="secondary">{inProgress.length}</Badge>
                </h3>
              </div>
              <div className="space-y-4">
                {inProgress.length > 0 ? (
                  inProgress.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} />
                  ))
                ) : (
                  <p className="text-center text-muted-foreground py-8">
                    Aucune fonctionnalité en cours
                  </p>
                )}
              </div>
            </div>

            {/* Colonne À faire */}
            <div>
              <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-950/20 border-2 border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <CheckCircle2 className="text-gray-600" />À faire
                  <Badge variant="secondary">{todo.length}</Badge>
                </h3>
              </div>
              <div className="space-y-4">
                {todo.length > 0 ? (
                  todo.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} />
                  ))
                ) : (
                  <p className="text-center text-muted-foreground py-8">
                    Aucune fonctionnalité à faire
                  </p>
                )}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Vue Liste */}
        <TabsContent value="list">
          <div className="space-y-4">
            {filteredFeatures.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </TabsContent>

        {/* Vue par priorité */}
        <TabsContent value="priority">
          <div className="space-y-6">
            {["High", "Medium", "Low"].map((priority) => {
              const priorityFeatures = filteredFeatures.filter(
                (f) => f.priority === priority
              );
              if (priorityFeatures.length === 0) return null;

              const bgColors = {
                High: "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800",
                Medium:
                  "bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800",
                Low: "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800",
              };

              return (
                <div key={priority}>
                  <div
                    className={`mb-4 p-4 border-2 rounded-lg ${
                      bgColors[priority as keyof typeof bgColors]
                    }`}
                  >
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      <PriorityBadge
                        priority={priority as "High" | "Medium" | "Low"}
                      />
                      Priorité{" "}
                      {priority === "High"
                        ? "Haute"
                        : priority === "Medium"
                        ? "Moyenne"
                        : "Basse"}
                      <Badge variant="secondary">
                        {priorityFeatures.length}
                      </Badge>
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {priorityFeatures.map((feature) => (
                      <FeatureCard key={feature.id} feature={feature} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>

      {/* Légende */}
      <div className="mt-8 p-6 border rounded-lg bg-muted/50">
        <h3 className="font-semibold mb-4 text-lg">Légende</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Statuts</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <StatusBadge status="progress" />
                <span>Fonctionnalité en développement</span>
              </div>
              <div className="flex items-center gap-2">
                <StatusBadge status="todo" />
                <span>Fonctionnalité à développer</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Priorités</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <PriorityBadge priority="High" />
                <span>Fonctionnalité critique</span>
              </div>
              <div className="flex items-center gap-2">
                <PriorityBadge priority="Medium" />
                <span>Fonctionnalité importante</span>
              </div>
              <div className="flex items-center gap-2">
                <PriorityBadge priority="Low" />
                <span>Fonctionnalité secondaire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
