//@/app/public/layout.tsx
/*
  Layout principal de l'espace public.
  Propose une navigation vers :
  - Recettes de cuisine (@/app/public/recettes/page.tsx)
  - Guide d'élevage pour poules pondeuses (@/app/public/guide-elevage/page.tsx)
*/
import type { ReactNode } from "react";
import PublicNav from "@/app/public/PublicNav";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Home, Mail, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

export default function PublicLayout({ children }: { children: ReactNode }) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-background to-muted/20">
      {/* Lien d'évitement pour l'accessibilité */}
      <a
        href="#public-main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:ring-2 focus:ring-ring"
      >
        Aller au contenu principal
      </a>

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <PublicNav />
      </header>

      <main
        id="public-main"
        className="flex-1 container mx-auto px-4 py-6 md:py-8 max-w-6xl"
      >
        {children}
      </main>
    </div>
  );
}
