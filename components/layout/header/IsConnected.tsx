"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogIn, User, Settings, LogOut, Wrench } from "lucide-react";
import React from "react";

export default function IsConnected() {
  // Simuler l'état de connexion - à remplacer par votre logique d'auth
  const isConnected = false; // Changez en true pour tester l'avatar

  const user = {
    name: "Marie Dubois",
    email: "marie@example.com",
    avatar: "https://github.com/shadcn.png", // URL de l'avatar
    initials: "MD",
  };

  // Si l'utilisateur n'est pas connecté
  if (!isConnected) {
    return (
      <Button className="gap-2" size="default">
        <LogIn size={18} />
        Connexion
      </Button>
    );
  }

  // Si l'utilisateur est connecté
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-10 w-10 rounded-full hover:ring-2 hover:ring-primary hover:ring-offset-2 transition-all"
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {user.initials}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer gap-2">
          <User size={16} />
          <span>Profil</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer gap-2">
          <Wrench size={16} />
          <span>Tools</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer gap-2">
          <Settings size={16} />
          <span>Paramètres</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer gap-2 text-red-600 focus:text-red-600 focus:bg-red-50">
          <LogOut size={16} />
          <span>Déconnexion</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
