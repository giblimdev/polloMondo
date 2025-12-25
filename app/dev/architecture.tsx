// @/app/dev/Architecture.tsx
"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Search,
  Layout,
  FolderTree,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileCode,
  Lock,
  Home,
  Bird,
  ClipboardList,
  Activity,
} from "lucide-react";

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

// Icônes par catégorie
const categoryIcons: Record<string, React.ReactNode> = {
  Auth: <Lock size={20} className="text-blue-500" />,
  App: <Home size={20} className="text-purple-500" />,
  Lots: <Bird size={20} className="text-green-500" />,
  Prod: <ClipboardList size={20} className="text-orange-500" />,
  Santé: <Activity size={20} className="text-red-500" />,
};

// Badge de statut
const StatusBadge = ({ status }: { status: "progress" | "todo" }) => {
  if (status === "progress") {
    return (
      <Badge variant="default" className="flex items-center gap-1">
        <Clock size={12} />
        En cours
      </Badge>
    );
  }
  return (
    <Badge variant="secondary" className="flex items-center gap-1">
      <AlertCircle size={12} />À faire
    </Badge>
  );
};

export default function Architecture() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrer les pages
  const filteredPages = pages.filter(
    (page) =>
      page.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Grouper par catégorie
  const pagesByCategory = filteredPages.reduce((acc, page) => {
    if (!acc[page.category]) {
      acc[page.category] = [];
    }
    acc[page.category].push(page);
    return acc;
  }, {} as Record<string, PageRoute[]>);

  // Statistiques
  const totalPages = pages.length;
  const inProgress = pages.filter((p) => p.status === "progress").length;
  const todo = pages.filter((p) => p.status === "todo").length;
  const categories = new Set(pages.map((p) => p.category)).size;

  return (
    <div className="container mx-auto p-8 max-w-7xl">
      {/* En-tête */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold flex items-center gap-3 mb-2">
          <FolderTree className="text-primary" size={40} />
          Architecture de l&apos;Application - PolloMondo
        </h1>
        <p className="text-muted-foreground text-lg">
          Vue d&apos;ensemble des pages et routes de l&apos;application
        </p>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Pages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold">{totalPages}</p>
                <Layout className="text-primary" size={32} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Catégories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold">{categories}</p>
                <FolderTree className="text-purple-500" size={32} />
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
                <p className="text-3xl font-bold">{inProgress}</p>
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
                <p className="text-3xl font-bold">{todo}</p>
                <AlertCircle className="text-orange-500" size={32} />
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
            placeholder="Rechercher une page, route ou catégorie..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
            className="pl-10"
          />
        </div>
      </div>

      {/* Onglets */}
      <Tabs defaultValue="category" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="category">Par catégorie</TabsTrigger>
          <TabsTrigger value="all">Toutes les pages</TabsTrigger>
          <TabsTrigger value="tree">Arborescence</TabsTrigger>
        </TabsList>

        {/* Vue par catégorie */}
        <TabsContent value="category">
          <div className="space-y-6">
            {Object.entries(pagesByCategory).map(
              ([category, categoryPages]) => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {categoryIcons[category] || <FileCode size={20} />}
                      {category}
                      <Badge variant="secondary" className="ml-2">
                        {categoryPages.length} page
                        {categoryPages.length > 1 ? "s" : ""}
                      </Badge>
                    </CardTitle>
                    <CardDescription>
                      Pages et routes de la catégorie {category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categoryPages.map((page, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex-1">
                            <div className="font-medium">{page.name}</div>
                            <div className="text-sm text-muted-foreground font-mono">
                              {page.path}
                            </div>
                          </div>
                          <StatusBadge status={page.status} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </TabsContent>

        {/* Vue toutes les pages */}
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>Toutes les pages</CardTitle>
              <CardDescription>
                Liste complète des {filteredPages.length} pages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {filteredPages.map((page, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      {categoryIcons[page.category] || <FileCode size={20} />}
                      <div className="flex-1">
                        <div className="font-medium">{page.name}</div>
                        <div className="text-sm text-muted-foreground font-mono">
                          {page.path}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{page.category}</Badge>
                      <StatusBadge status={page.status} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Vue arborescence */}
        <TabsContent value="tree">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FolderTree size={24} />
                Arborescence des fichiers
              </CardTitle>
              <CardDescription>
                Structure des dossiers et fichiers de l&apos;application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="font-mono text-sm space-y-1">
                <div className="font-bold">app/</div>
                {Object.entries(pagesByCategory).map(
                  ([category, categoryPages]) => (
                    <div key={category} className="ml-4">
                      <div className="font-semibold text-primary">
                        📁 {category.toLowerCase()}/
                      </div>
                      {categoryPages.map((page, index) => {
                        const segments = page.path.split("/").filter(Boolean);
                        const fileName = segments[segments.length - 1];
                        return (
                          <div
                            key={index}
                            className="ml-8 flex items-center gap-2"
                          >
                            <span className="text-muted-foreground">📄</span>
                            <span>{fileName}/page.tsx</span>
                            <StatusBadge status={page.status} />
                          </div>
                        );
                      })}
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Légende */}
      <div className="mt-8 p-6 border rounded-lg bg-muted/50">
        <h3 className="font-semibold mb-4 text-lg">Légende</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Badge variant="default" className="flex items-center gap-1">
              <Clock size={12} />
              En cours
            </Badge>
            <span>Page en cours de développement</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="flex items-center gap-1">
              <AlertCircle size={12} />À faire
            </Badge>
            <span>Page à développer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
