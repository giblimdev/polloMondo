//@/app/dev/page.tsx
/* page d'aide au developpement presentant les feature, les pages à créer, le schema prisma */ 
import React from 'react'
import Link from 'next/link'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  LayoutTemplate, 
  Database, 
  ShieldCheck,
  Hammer
} from 'lucide-react'

// Types pour notre roadmap
type Status = 'todo' | 'progress' | 'done'

interface Feature {
  id: string
  name: string
  description: string
  priority: 'High' | 'Medium' | 'Low'
  status: Status
}

interface PageRoute {
  path: string
  name: string
  category: string
  status: Status
}

export default function DevPage() {
  
  // 1. Liste des fonctionnalités basées sur votre document Word
  const features: Feature[] = [
    { id: '1', name: 'Authentification', description: 'Login, Register, Reset Password avec Better-Auth', priority: 'High', status: 'progress' },
    { id: '2', name: 'Gestion des Troupeaux (Flocks)', description: 'CRUD complet des lots, calcul âge automatique', priority: 'High', status: 'todo' },
    { id: '3', name: 'Production Quotidienne', description: 'Saisie œufs (bons, cassés), mortalité, aliment', priority: 'High', status: 'todo' },
    { id: '4', name: 'Calendrier & Planning', description: 'Vue agenda, tâches récurrentes, vaccinations', priority: 'Medium', status: 'todo' },
    { id: '5', name: 'Santé (Health)', description: 'Suivi vétérinaire, traitements, autopsies', priority: 'Medium', status: 'todo' },
    { id: '6', name: 'Finances', description: 'Tableau des dépenses et ventes (œufs/réformes)', priority: 'Low', status: 'todo' },
  ]

  // 2. Structure des pages à créer
  const pages: PageRoute[] = [
    // Auth
    { category: 'Auth', name: 'Login', path: '/auth/login', status: 'progress' },
    { category: 'Auth', name: 'Register', path: '/auth/register', status: 'todo' },
    
    // Dashboard General
    { category: 'App', name: 'Dashboard Home', path: '/dashboard', status: 'todo' },
    
    // Lots (Flocks)
    { category: 'Lots', name: 'Liste des lots', path: '/dashboard/lots', status: 'todo' },
    { category: 'Lots', name: 'Nouveau lot (Wizard)', path: '/dashboard/lots/new', status: 'todo' },
    { category: 'Lots', name: 'Détail lot (Cycle)', path: '/dashboard/lots/[id]', status: 'todo' },
    
    // Production
    { category: 'Prod', name: 'Saisie Journalière', path: '/dashboard/production/daily', status: 'todo' },
    
    // Santé
    { category: 'Santé', name: 'Carnet Sanitaire', path: '/dashboard/health', status: 'todo' },
  ]

  // Helper pour les badges de statut
  const getStatusBadge = (status: Status) => {
    switch (status) {
      case 'done': return <Badge variant="default" className="bg-green-600"><CheckCircle2 className="w-3 h-3 mr-1"/> Fait</Badge>
      case 'progress': return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100"><Clock className="w-3 h-3 mr-1"/> En cours</Badge>
      case 'todo': return <Badge variant="outline" className="text-gray-500"><Circle className="w-3 h-3 mr-1"/> À faire</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* En-tête */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Hammer className="h-8 w-8 text-orange-500" />
              Dev Dashboard
            </h1>
            <p className="text-slate-500 mt-2">Suivi du développement - Application Élevage Poules Pondeuses</p>
          </div>
          <div className="flex gap-2 text-sm text-slate-500 bg-white p-3 rounded-lg border shadow-sm">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-blue-500" /> Prisma
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-green-500" /> Better-Auth
            </div>
          </div>
        </div>

        {/* Section 1: Fonctionnalités (Features) */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Fonctionnalités Clés (Backlog)</CardTitle>
              <CardDescription>État d'avancement des modules métier</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {features.map((feature) => (
                  <div key={feature.id} className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900">{feature.name}</span>
                        <Badge variant="outline" className="text-xs">{feature.priority}</Badge>
                      </div>
                      <p className="text-sm text-slate-500">{feature.description}</p>
                    </div>
                    <div>
                      {getStatusBadge(feature.status)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 2: Structure des Pages (Sitemap) */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LayoutTemplate className="h-5 w-5" />
                Structure des Pages & Routes
              </CardTitle>
              <CardDescription>Navigation et état d'implémentation des vues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-100 text-slate-600 font-medium">
                    <tr>
                      <th className="p-4">Catégorie</th>
                      <th className="p-4">Nom de la page</th>
                      <th className="p-4">Route (Path)</th>
                      <th className="p-4 text-right">Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pages.map((page, i) => {
                      // On vérifie si c'est une route dynamique (contient des crochets)
                      const isDynamic = page.path.includes('[') || page.path.includes(']');
                      
                      return (
                        <tr key={i} className="border-t hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-medium text-slate-700">{page.category}</td>
                          <td className="p-4">{page.name}</td>
                          <td className="p-4 font-mono text-xs text-blue-600">
                            {isDynamic ? (
                              <span className="text-slate-400" title="Route dynamique (non cliquable)">
                                {page.path}
                              </span>
                            ) : (
                              <Link href={page.path} className="hover:underline">
                                {page.path}
                              </Link>
                            )}
                          </td>
                          <td className="p-4 text-right">
                            {getStatusBadge(page.status)}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 3: Notes Dev */}
        <section>
          <Card className="bg-slate-900 text-slate-50 border-slate-800">
            <CardHeader>
              <CardTitle>Notes Techniques</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-300 mb-1">Commandes utiles :</h4>
                <code className="block bg-slate-950 p-3 rounded text-xs font-mono text-green-400">
                  npx prisma studio <br/>
                  npx shadcn@latest add [component]
                </code>
              </div>
              <p className="text-sm text-slate-400">
                Rappel : Pour la gestion d'état globale (ex: lot sélectionné), utiliser le store Zustand `useFarmStore`.
              </p>
            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  )
}
