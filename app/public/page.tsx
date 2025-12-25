import React from 'react'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Thermometer, 
  Droplets, 
  Sun, 
  Utensils, 
  Stethoscope, 
  Activity,
  AlertTriangle,
  Info
} from 'lucide-react'

export default function GuideElevagePage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* En-tête */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900">Guide Technique Élevage</h1>
          <p className="text-slate-500">Référentiel des standards pour poules pondeuses (Lohmann, ISA Brown)</p>
        </div>

        <Tabs defaultValue="alimentation" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="alimentation">Alimentation</TabsTrigger>
            <TabsTrigger value="environnement">Environnement</TabsTrigger>
            <TabsTrigger value="soins">Soins & Santé</TabsTrigger>
          </TabsList>

          {/* SECTION 1 : ALIMENTATION */}
          <TabsContent value="alimentation" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Phases d'alimentation */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-orange-500"/>
                    Phases Nutritionnelles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="relative border-l-2 border-slate-200 pl-4 space-y-4">
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900">1. Démarrage (0-6 sem)</h4>
                      <p className="text-sm text-slate-600">Objectif : Squelette & Immunité</p>
                      <ul className="mt-2 text-sm text-slate-500 list-disc list-inside">
                        <li>Protéines : 18-20%</li>
                        <li>Énergie : 2800-2900 kcal/kg</li>
                        <li>Conso : 25g ➔ 50g / jour</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900">2. Croissance (7-18 sem)</h4>
                      <p className="text-sm text-slate-600">Objectif : Poids corporel sans gras</p>
                      <ul className="mt-2 text-sm text-slate-500 list-disc list-inside">
                        <li>Protéines : 16-17%</li>
                        <li>Énergie : 2700-2800 kcal/kg</li>
                        <li>Conso : 60g ➔ 80g / jour</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">3. Ponte (19+ sem)</h4>
                      <p className="text-sm text-slate-600">Objectif : Production & Coquille</p>
                      <ul className="mt-2 text-sm text-slate-500 list-disc list-inside">
                        <li>Calcium : 3.5 - 4.0% <Badge variant="destructive" className="ml-2 text-[10px]">CRITIQUE</Badge></li>
                        <li>Protéines : 16-18%</li>
                        <li>Conso : 110g - 120g / jour</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Points de vigilance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-500"/>
                    Points de Vigilance
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                    <h4 className="font-medium text-orange-800 mb-2">Transition Alimentaire</h4>
                    <p className="text-sm text-orange-700">
                      Ne jamais changer d'aliment brutalement. Faire une transition sur <strong>3 à 5 jours</strong> en mélangeant l'ancien et le nouveau (75/25, 50/50, 25/75).
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-blue-800 mb-2">Eau de boisson</h4>
                    <p className="text-sm text-blue-700">
                      Ratio eau/aliment : <strong>2:1</strong>.
                      <br/>Une poule boit environ 200-250ml par jour en ponte.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* SECTION 2 : ENVIRONNEMENT */}
          <TabsContent value="environnement" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Température */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Thermometer className="h-5 w-5 text-red-500"/> Température
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-sm font-medium">Poussins (J1)</span>
                      <Badge variant="outline">32°C - 34°C</Badge>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-sm font-medium">Semaine 6</span>
                      <Badge variant="outline">21°C - 22°C</Badge>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="text-sm font-medium">Pondeuses</span>
                      <Badge className="bg-green-600">18°C - 24°C</Badge>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">
                      Attention : Au-dessus de 28°C, la consommation et la ponte chutent.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Lumière */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Sun className="h-5 w-5 text-yellow-500"/> Éclairage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-slate-100 p-3 rounded text-sm">
                      <strong>Règle d'or :</strong> Ne jamais augmenter la lumière en croissance, ne jamais la baisser en ponte.
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex justify-between">
                        <span>Démarrage</span>
                        <span>22h ➔ 12h / jour</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Croissance</span>
                        <span>8h - 10h / jour</span>
                      </li>
                      <li className="flex justify-between font-medium text-slate-900">
                        <span>Stimulation (16 sem)</span>
                        <span>+1h / semaine</span>
                      </li>
                      <li className="flex justify-between font-medium text-slate-900">
                        <span>Ponte (Pic)</span>
                        <span>16h / jour constantes</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>



              </Card>

              {/* Humidité & Air */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Droplets className="h-5 w-5 text-blue-400"/> Air & Humidité
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm text-slate-600">
                    <div className="flex justify-between items-center">
                      <span>Humidité Cible</span>
                      <span className="font-bold">50% - 70%</span>
                    </div>
                    <div className="space-y-2">
                      <p><strong>Signes d'alerte :</strong></p>
                      <ul className="list-disc pl-4 space-y-1 text-xs">
                        <li>Ammoniac sup. 20ppm (yeux qui piquent)</li>
                        <li>Litière croûteuse (trop humide)</li>
                        <li>Poussière excessive (trop sec)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* SECTION 3 : SOINS */}
          <TabsContent value="soins" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-6 w-6 text-green-600"/> 
                  Protocole Sanitaire Quotidien
                </CardTitle>
                <CardDescription>Actions préventives pour maintenir le troupeau en bonne santé</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  
                  {/* Routine Quotidienne */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <Activity className="w-5 h-5 text-slate-500"/> Routine Matin & Soir
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 p-3 bg-white border rounded-lg shadow-sm">
                        <span className="bg-slate-100 text-slate-600 font-bold px-2 py-1 rounded text-xs">1</span>
                        <div className="text-sm">
                          <strong>Observation générale</strong>
                          <p className="text-slate-500">Écouter les bruits respiratoires (éternuements) et observer la répartition au sol.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-white border rounded-lg shadow-sm">
                        <span className="bg-slate-100 text-slate-600 font-bold px-2 py-1 rounded text-xs">2</span>
                        <div className="text-sm">
                          <strong>Contrôle de l'eau</strong>
                          <p className="text-slate-500">Vérifier qu'aucune pipette n'est bouchée et que l'eau est propre.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-white border rounded-lg shadow-sm">
                        <span className="bg-slate-100 text-slate-600 font-bold px-2 py-1 rounded text-xs">3</span>
                        <div className="text-sm">
                          <strong>Ramassage mortalité</strong>
                          <p className="text-slate-500">Retirer les cadavres immédiatement. Noter le nombre et la cause suspectée.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Alertes Sanitaires */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2 text-red-600">
                      <AlertTriangle className="w-5 h-5"/> Signes d'Alerte Immédiate
                    </h3>
                    <div className="bg-red-50 border border-red-100 rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-center text-sm border-b border-red-200 pb-2">
                        <span className="text-red-900 font-medium">Baisse brutale consommation</span>
                        <Badge variant="destructive">-10%</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm border-b border-red-200 pb-2">
                        <span className="text-red-900 font-medium">Chute de ponte</span>
                        <Badge variant="destructive">-5% / jour</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm pb-2">
                        <span className="text-red-900 font-medium">Coquilles décolorées / molles</span>
                        <span className="text-red-700 font-bold">Urgent</span>
                      </div>
                      <p className="text-xs text-red-600 italic mt-2">
                        Si un de ces signes apparaît, contacter le vétérinaire et vérifier l'eau en priorité.
                      </p>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  )
}
