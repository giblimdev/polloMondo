// @/components/common/gohome.tsx
/*
Composant réutilisable présent sur chaque page pour retourner à l'accueil
*/

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function GoHome() {
  return (
    <Link href="/">
      <Button
        variant="outline"
        size="default"
        className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
      >
        <Home className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
        <span className="relative z-10">Accueil</span>
        <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/10 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </Button>
    </Link>
  );
}
