import React from "react";
import HeaderNav from "./HeaderNav";
import IsConnected from "./IsConnected";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="border-b sticky top-0 bg-background z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 gap-4">
          {/* Logo - fixé à gauche */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Navigation - centré et flexible */}
          <div className="flex-1 flex justify-center">
            <HeaderNav />
          </div>

          {/* Bouton connexion/Avatar - fixé à droite */}
          <div className="shrink-0">
            <IsConnected />
          </div>
        </div>
      </div>
    </header>
  );
}
