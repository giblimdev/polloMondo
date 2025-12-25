import React from 'react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  LayoutDashboard, 
  Bird, 
  CalendarDays, 
  Stethoscope, 
  Coins, 
  Settings, 
  LogIn 
} from 'lucide-react' // Assurez-vous d'avoir lucide-react installé

export default function DevPage() {
  const modules = [
    {
      title: "Gestion des Troupeaux",
      description: "Suivi des lots, production d'œufs et mortalité.",
      icon: <Bird className="h-6 w-6 mb-2 text-orange-500" />,
      href: "/dashboard/lots",
      color: "bg-orange-50/50 hover:bg-orange-50"
    },
    {
      title: "alimentation & Eau",
      description: "Suivi des lots, production d'œufs et mortalité.",
      icon: <Bird className="h-6 w-6 mb-2 text-orange-500" />,
      href: "/dashboard/lots",
      color: "bg-orange-50/50 hover:bg-orange-50"
    },    {
      title: "Santé & Soins",
      description: "Traitements, vaccins et biosécurité.",
      icon: <Stethoscope className="h-6 w-6 mb-2 text-green-500" />,
      href: "/dashboard/health",
      color: "bg-green-50/50 hover:bg-green-50"
    },
    
    {
      title: "Calendrier & Tâches",
      description: "Planification quotidienne, vaccinations et maintenance.",
      icon: <CalendarDays className="h-6 w-6 mb-2 text-blue-500" />,
      href: "/dashboard/calendar",
      color: "bg-blue-50/50 hover:bg-blue-50"
    },
    {
      title: "Finances",
      description: "Dépenses, ventes et analyse de rentabilité.",
      icon: <Coins className="h-6 w-6 mb-2 text-yellow-500" />,
      href: "/dashboard/finance",
      color: "bg-yellow-50/50 hover:bg-yellow-50"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50/50 p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="flex justify-between items-center border-b pb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Poultry Manager</h1>
            <p className="text-gray-500 mt-2">Environnement de Développement • Next.js 15</p>
          </div>
          <div className="flex gap-3">
             <Link href="/auth/login">
              <Button variant="outline">
                <LogIn className="mr-2 h-4 w-4" /> Connexion
              </Button>
            </Link>
            <Link href="/admin">
               <Button variant="secondary">
                <Settings className="mr-2 h-4 w-4" /> Admin
              </Button>
            </Link>
          </div>
        </header>

        {/* Modules Grid */}
        <section>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <LayoutDashboard className="h-5 w-5" />
            Modules Principaux
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module) => (
              <Link key={module.title} href={module.href} className="block group">
                <Card className={`h-full transition-all duration-200 border-2 border-transparent hover:border-gray-200 ${module.color}`}>
                  <CardHeader>
                    {module.icon}
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Status / Dev Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Stats Placeholder */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>État du Système</CardTitle>
              <CardDescription>Vue d'ensemble technique</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <span className="font-medium">Base de données (Prisma)</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Connecté</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <span className="font-medium">Authentification (Better-Auth)</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Configuré</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dev Links */}
          <Card>
            <CardHeader>
              <CardTitle>Pages Techniques</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/design-system" className="block p-2 hover:bg-gray-100 rounded text-sm text-blue-600">
                → Design System / UI Kit
              </Link>
              <Link href="/api/health" className="block p-2 hover:bg-gray-100 rounded text-sm text-blue-600">
                → API Health Check
              </Link>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  )
}
