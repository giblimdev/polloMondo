"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const EUR_TO_COP = 4500; // 1€ = 4500 COP

function clampNumber(n: number, min: number, max: number) {
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, n));
}

function formatEUR(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

function formatCOP(value: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);
}

function formatBothFromEUR(eur: number) {
  const cop = eur * EUR_TO_COP;
  return `${formatEUR(eur)} • ${formatCOP(cop)}`;
}

function formatBothFromCOP(cop: number) {
  const eur = cop / EUR_TO_COP;
  return `${formatEUR(eur)} • ${formatCOP(cop)}`;
}

function HelpTip({ text }: { text: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="inline-flex h-5 w-5 items-center justify-center rounded-full border text-xs text-muted-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Aide"
        >
          ?
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">{text}</TooltipContent>
    </Tooltip>
  );
}

function Metric({
  label,
  value,
  hint,
  tone = "neutral",
}: {
  label: string;
  value: string;
  hint?: string;
  tone?: "neutral" | "good" | "bad";
}) {
  const toneClass =
    tone === "good"
      ? "border-emerald-200/60 bg-emerald-50/60 dark:border-emerald-900/50 dark:bg-emerald-950/40"
      : tone === "bad"
      ? "border-rose-200/60 bg-rose-50/60 dark:border-rose-900/50 dark:bg-rose-950/40"
      : "border-border bg-card";

  return (
    <Card className={toneClass}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold tabular-nums">{value}</div>
        {hint ? (
          <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}

export default function Page() {
  // Production (sliders + inputs)
  const [nbPoules, setNbPoules] = React.useState<number>(100);
  const [tauxPonte, setTauxPonte] = React.useState<number>(0.85);

  // Prix pilotés en COP (pas = 10 COP)
  const [prixOeufCOP, setPrixOeufCOP] = React.useState<number>(1350); // ~0,30€
  const [prixAlimentKgCOP, setPrixAlimentKgCOP] = React.useState<number>(2700); // ~0,60€

  // Paramètre coût (input pour précision)
  const [consoAlimentKg, setConsoAlimentKg] = React.useState<number>(0.12);

  // Bornes UX
  const poules = clampNumber(nbPoules, 0, 200000);
  const ponte = clampNumber(tauxPonte, 0, 1.2);
  const conso = clampNumber(consoAlimentKg, 0, 2);

  const prixOeufEUR = prixOeufCOP / EUR_TO_COP;
  const prixAlimentKgEUR = prixAlimentKgCOP / EUR_TO_COP;

  // Calculs (en EUR)
  const oeufsJourFloat = poules * ponte;
  const oeufsJour = Math.round(oeufsJourFloat); // ENTIER demandé
  const revenuJourEUR = oeufsJour * prixOeufEUR;
  const coutAlimentJourEUR = poules * conso * prixAlimentKgEUR;
  const profitJourEUR = revenuJourEUR - coutAlimentJourEUR;

  const rentabiliteOK = profitJourEUR >= 0;
  const margePct =
    revenuJourEUR > 0 ? (profitJourEUR / revenuJourEUR) * 100 : 0;

  const prixOeufSeuilEUR = oeufsJour > 0 ? coutAlimentJourEUR / oeufsJour : 0;

  return (
    <TooltipProvider>
      <div className="mx-auto w-full max-w-5xl space-y-6 p-4 md:p-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight">
              Rentabilité journalière
            </h1>
            <p className="text-sm text-muted-foreground">
              Ajuste les curseurs. Les prix bougent par pas de 10 COP et tout
              est affiché en € + COP.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {rentabiliteOK ? (
              <Badge className="bg-emerald-600 text-white hover:bg-emerald-600">
                Rentable
              </Badge>
            ) : (
              <Badge variant="destructive">Non rentable</Badge>
            )}
            <Badge variant="secondary" className="tabular-nums">
              Marge: {Number.isFinite(margePct) ? margePct.toFixed(1) : "0.0"}%
            </Badge>
            <Badge variant="outline" className="tabular-nums">
              1€ = 4500 COP
            </Badge>
          </div>
        </div>

        {rentabiliteOK ? (
          <Alert className="border-emerald-200/60 bg-emerald-50/60 dark:border-emerald-900/50 dark:bg-emerald-950/40">
            <AlertTitle>OK</AlertTitle>
            <AlertDescription>
              Profit positif. Teste différentes valeurs (prix, poules, ponte)
              pour voir l’impact.
            </AlertDescription>
          </Alert>
        ) : (
          <Alert variant="destructive">
            <AlertTitle>À corriger</AlertTitle>
            <AlertDescription>
              Profit négatif. Augmente le prix de l’œuf, diminue le prix de
              l’aliment, ou améliore le taux de ponte.
            </AlertDescription>
          </Alert>
        )}

        {/* KPIs */}
        <div className="grid gap-4 md:grid-cols-4">
          <Metric
            label="Profit / jour"
            value={formatBothFromEUR(profitJourEUR)}
            hint={`Revenu ${formatBothFromEUR(
              revenuJourEUR
            )} − Aliment ${formatBothFromEUR(coutAlimentJourEUR)}`}
            tone={rentabiliteOK ? "good" : "bad"}
          />
          <Metric
            label="Œufs / jour"
            value={String(oeufsJour)}
            hint={`${poules} poules × ${ponte.toFixed(2)} (arrondi)`}
          />
          <Metric
            label="Prix œuf seuil"
            value={formatBothFromEUR(prixOeufSeuilEUR)}
            hint="Prix minimum pour que profit = 0"
          />
          <Metric
            label="Conso aliment / jour"
            value={`${(poules * conso).toFixed(2)} kg`}
            hint="Poules × conso par poule"
          />
        </div>

        {/* Contrôles */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Production</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Poules */}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Label>Nombre de poules</Label>
                    <HelpTip text="Le nombre total de poules pondeuses. Plus il est élevé, plus la production (et la consommation d’aliment) augmente." />
                  </div>
                  <div className="text-sm tabular-nums">{poules}</div>
                </div>

                <Slider
                  value={[poules]}
                  onValueChange={(v) => setNbPoules(v[0])}
                  min={0}
                  max={5000}
                  step={1}
                />

                <p className="text-xs text-muted-foreground">
                  Curseur (0 → 5000, pas 10). Utilise le champ pour saisir une
                  valeur exacte.
                </p>

                <Input
                  type="number"
                  min={0}
                  value={nbPoules}
                  onChange={(e) => setNbPoules(Number(e.target.value || 0))}
                />
              </div>

              <Separator />

              {/* Ponte */}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Label>Taux de ponte (œuf/poule/jour)</Label>
                    <HelpTip text="Production moyenne par poule et par jour. Exemple: 0,85 = ~85 œufs/jour pour 100 poules." />
                  </div>
                  <div className="text-sm tabular-nums">{ponte.toFixed(2)}</div>
                </div>

                <Slider
                  value={[ponte]}
                  onValueChange={(v) => setTauxPonte(v[0])}
                  min={0}
                  max={1.2}
                  step={0.01}
                />

                <p className="text-xs text-muted-foreground">
                  Le nombre d’œufs/jour est arrondi à l’entier pour simplifier
                  la lecture.
                </p>

                <Input
                  type="number"
                  min={0}
                  max={1.2}
                  step={0.01}
                  value={tauxPonte}
                  onChange={(e) => setTauxPonte(Number(e.target.value || 0))}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Prix & coûts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Prix oeuf (COP step 10) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Label>Prix de l’œuf</Label>
                    <HelpTip text="Prix de vente à l’unité. Le curseur bouge par pas de 10 COP, et l’équivalent € est affiché." />
                  </div>
                  <div className="text-sm tabular-nums">
                    {formatBothFromCOP(prixOeufCOP)}
                  </div>
                </div>

                <Slider
                  value={[prixOeufCOP]}
                  onValueChange={(v) => setPrixOeufCOP(v[0])}
                  min={0}
                  max={4500} // 1€ en COP
                  step={10} // PAS 10 COP
                />

                <p className="text-xs text-muted-foreground">
                  Revenu/jour = œufs/jour × prix de l’œuf.
                </p>
              </div>

              <Separator />

              {/* Prix aliment (COP step 10) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Label>Prix de l’aliment (par kg)</Label>
                    <HelpTip text="Coût d’achat de l’aliment. Le curseur bouge par pas de 10 COP, et l’équivalent € est affiché." />
                  </div>
                  <div className="text-sm tabular-nums">
                    {formatBothFromCOP(prixAlimentKgCOP)} / kg
                  </div>
                </div>

                <Slider
                  value={[prixAlimentKgCOP]}
                  onValueChange={(v) => setPrixAlimentKgCOP(v[0])}
                  min={0}
                  max={13500} // 3€ en COP
                  step={10} // PAS 10 COP
                />

                <p className="text-xs text-muted-foreground">
                  Coût aliment/jour = poules × conso × prix/kg.
                </p>
              </div>

              <Separator />

              {/* Conso */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="conso">
                    Consommation aliment (kg/poule/jour)
                  </Label>
                  <HelpTip text="Consommation moyenne quotidienne d’aliment par poule. Exemple: 0,12 kg = 120 g/jour." />
                </div>
                <Input
                  id="conso"
                  type="number"
                  min={0}
                  step={0.01}
                  value={consoAlimentKg}
                  onChange={(e) =>
                    setConsoAlimentKg(Number(e.target.value || 0))
                  }
                />
                <p className="text-xs text-muted-foreground">
                  Ce champ influence le coût total d’aliment par jour.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
}
