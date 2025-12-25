// app/admin/page.tsx
import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  Package,
  ClipboardList,
  Thermometer,
  Package2,
  DollarSign,
  BarChart3,
  Users,
  Settings,
} from "lucide-react";

export default function AdminPage() {
  const modules = [
    {
      id: "buildings",
      title: "Gestion des bâtiments",
      description: "Gérer les infrastructures et les installations",
      icon: Building2,
      href: "/admin/buildings",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950",
    },
    {
      id: "batches",
      title: "Gestion des lots",
      description: "Suivre et gérer les lots de production",
      icon: Package,
      href: "/admin/batches",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950",
    },
    {
      id: "daily-production",
      title: "Production quotidienne",
      description: "Enregistrer la production journalière",
      icon: ClipboardList,
      href: "/admin/daily-production",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950",
    },
    {
      id: "environmental",
      title: "Monitoring environnemental",
      description: "Surveiller les conditions environnementales",
      icon: Thermometer,
      href: "/admin/environmental",
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950",
    },
    {
      id: "inventory",
      title: "Gestion des stocks et inventaire",
      description: "Gérer les stocks et l'inventaire",
      icon: Package2,
      href: "/admin/inventory",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-950",
    },
    {
      id: "finance",
      title: "Finance et comptabilité",
      description: "Gérer les finances et la comptabilité",
      icon: DollarSign,
      href: "/admin/finance",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-950",
    },
    {
      id: "reports",
      title: "Rapports et analyses",
      description: "Générer des rapports et analyses détaillés",
      icon: BarChart3,
      href: "/admin/reports",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-950",
    },
    {
      id: "users",
      title: "Gestion des utilisateurs",
      description: "Gérer les utilisateurs et les permissions",
      icon: Users,
      href: "/admin/users",
      color: "text-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-950",
    },
    {
      id: "settings",
      title: "Paramètres et configuration",
      description: "Configurer les paramètres de l'application",
      icon: Settings,
      href: "/admin/settings",
      color: "text-slate-600",
      bgColor: "bg-slate-50 dark:bg-slate-950",
    },
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Tableau de bord Admin
        </h1>
        <p className="text-muted-foreground text-lg">
          Gérez tous les aspects de votre exploitation agricole
        </p>
      </div>

      {/* Modules Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Link key={module.id} href={module.href}>
              <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer border-2 hover:border-primary/50">
                <CardHeader className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${module.bgColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className={`h-6 w-6 ${module.color}`} />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {module.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {module.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
