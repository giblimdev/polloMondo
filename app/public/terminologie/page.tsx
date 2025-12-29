// @/app/public/terminologie/page.tsx
"use client";

import GoHome from "@/components/common/GoHome";
import React, { useState, useEffect } from "react";
import {
  lexiqueComplet,
  rechercherTerme,
  obtenirTraduction,
  TermeTraduit,
  TableBDD,
  ChampBDD,
} from "@/app/public/terminologie/terminologieData";

export default function TerminologiePage() {
  const [langueAffichage, setLangueAffichage] = useState<"fr" | "en" | "es">(
    "fr"
  );
  const [recherche, setRecherche] = useState("");
  const [resultatsRecherche, setResultatsRecherche] = useState<TermeTraduit[]>(
    []
  );
  const [sectionActive, setSectionActive] = useState<string>(
    "terminologieGenerale"
  );
  const [showTablesBDD, setShowTablesBDD] = useState(false);
  const [showRoles, setShowRoles] = useState(false);

  // Effet pour la recherche
  useEffect(() => {
    if (recherche.trim() === "") {
      setResultatsRecherche([]);
    } else {
      const resultats = rechercherTerme(recherche, langueAffichage);
      setResultatsRecherche(resultats);
    }
  }, [recherche, langueAffichage]);

  // Obtenir le nom de la section en fonction de la langue
  const getSectionName = (sectionId: string): string => {
    const nomsSections: Record<string, Record<"fr" | "en" | "es", string>> = {
      terminologieGenerale: {
        fr: "Terminologie Générale",
        en: "General Terminology",
        es: "Terminología General",
      },
      productionOeufs: {
        fr: "Production & Œufs",
        en: "Production & Eggs",
        es: "Producción & Huevos",
      },
      alimentation: {
        fr: "Alimentation",
        en: "Feeding",
        es: "Alimentación",
      },
      santeBienEtre: {
        fr: "Santé & Bien-être",
        en: "Health & Welfare",
        es: "Salud & Bienestar",
      },
      environnement: {
        fr: "Environnement",
        en: "Environment",
        es: "Medio Ambiente",
      },
      analyseIndicateurs: {
        fr: "Analyse & Indicateurs",
        en: "Analysis & Indicators",
        es: "Análisis & Indicadores",
      },
      techniqueSysteme: {
        fr: "Technique & Système",
        en: "Technical & System",
        es: "Técnico & Sistema",
      },
      gestionAdministration: {
        fr: "Gestion & Administration",
        en: "Management & Administration",
        es: "Gestión & Administración",
      },
      qualiteCertification: {
        fr: "Qualité & Certification",
        en: "Quality & Certification",
        es: "Calidad & Certificación",
      },
      tempsPeriodes: {
        fr: "Temps & Périodes",
        en: "Time & Periods",
        es: "Tiempo & Períodos",
      },
      unitesMesure: {
        fr: "Unités de Mesure",
        en: "Units of Measurement",
        es: "Unidades de Medida",
      },
    };

    return nomsSections[sectionId]?.[langueAffichage] || sectionId;
  };

  // Rendu d'un terme
  const renderTerme = (terme: TermeTraduit) => (
    <div
      key={`${terme.fr}-${terme.en}`}
      className="mb-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200"
    >
      <div className="flex flex-wrap gap-4 mb-2">
        <div className="flex-1 min-w-50">
          <div className="font-semibold text-gray-700 mb-1">Français</div>
          <div className="text-lg font-bold text-blue-700">{terme.fr}</div>
        </div>
        <div className="flex-1 min-w-50">
          <div className="font-semibold text-gray-700 mb-1">Anglais</div>
          <div className="text-lg font-medium text-green-700">{terme.en}</div>
        </div>
        <div className="flex-1 min-w-50">
          <div className="font-semibold text-gray-700 mb-1">Espagnol</div>
          <div className="text-lg font-medium text-red-700">{terme.es}</div>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-gray-300">
        <div className="font-semibold text-gray-700 mb-1">
          {langueAffichage === "fr"
            ? "Définition"
            : langueAffichage === "en"
            ? "Definition"
            : "Definición"}
        </div>
        <div className="text-gray-800">{terme.definition}</div>
      </div>
    </div>
  );

  // Rendu d'une table BDD
  const renderTableBDD = (table: TableBDD) => (
    <div
      key={table.en}
      className="mb-3 p-3 bg-gray-50 rounded border border-gray-300"
    >
      <div className="font-mono text-sm flex flex-wrap gap-4">
        <div className="flex-1">
          <span className="font-semibold">FR:</span> {table.fr}
        </div>
        <div className="flex-1">
          <span className="font-semibold">EN:</span> {table.en}
        </div>
        <div className="flex-1">
          <span className="font-semibold">ES:</span> {table.es}
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-600">
        {langueAffichage === "fr"
          ? "Description: "
          : langueAffichage === "en"
          ? "Description: "
          : "Descripción: "}
        {table.description}
      </div>
    </div>
  );

  // Sections disponibles
  const sections = [
    { id: "terminologieGenerale", data: lexiqueComplet.terminologieGenerale },
    { id: "productionOeufs", data: lexiqueComplet.productionOeufs },
    { id: "alimentation", data: lexiqueComplet.alimentation },
    { id: "santeBienEtre", data: lexiqueComplet.santeBienEtre },
    { id: "environnement", data: lexiqueComplet.environnement },
    { id: "analyseIndicateurs", data: lexiqueComplet.analyseIndicateurs },
    { id: "techniqueSysteme", data: lexiqueComplet.techniqueSysteme },
    { id: "gestionAdministration", data: lexiqueComplet.gestionAdministration },
    { id: "qualiteCertification", data: lexiqueComplet.qualiteCertification },
    { id: "tempsPeriodes", data: lexiqueComplet.tempsPeriodes },
    { id: "unitesMesure", data: lexiqueComplet.unitesMesure },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📚 Lexique Technique - Application d'Élevage Avicole
          </h1>
          <p className="text-gray-600 mb-6">
            Dictionnaire trilingue (Français/Anglais/Espagnol) des termes
            techniques utilisés dans l'application
          </p>
        </div>

        {/* Barre de recherche et contrôles */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder={
                  langueAffichage === "fr"
                    ? "Rechercher un terme..."
                    : langueAffichage === "en"
                    ? "Search a term..."
                    : "Buscar un término..."
                }
                value={recherche}
                onChange={(e) => setRecherche(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {recherche && (
                <div className="mt-2 text-sm text-gray-500">
                  {resultatsRecherche.length}{" "}
                  {langueAffichage === "fr"
                    ? "résultats trouvés"
                    : langueAffichage === "en"
                    ? "results found"
                    : "resultados encontrados"}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-700">
                  {langueAffichage === "fr"
                    ? "Langue:"
                    : langueAffichage === "en"
                    ? "Language:"
                    : "Idioma:"}
                </span>
                <select
                  value={langueAffichage}
                  onChange={(e) =>
                    setLangueAffichage(e.target.value as "fr" | "en" | "es")
                  }
                  className="p-2 border border-gray-300 rounded"
                >
                  <option value="fr">🇫🇷 Français</option>
                  <option value="en">🇬🇧 English</option>
                  <option value="es">🇪🇸 Español</option>
                </select>
              </div>

              <button
                onClick={() => setShowTablesBDD(!showTablesBDD)}
                className={`px-4 py-2 rounded-lg ${
                  showTablesBDD
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {showTablesBDD ? "📊 Masquer BDD" : "📊 Afficher BDD"}
              </button>

              <button
                onClick={() => setShowRoles(!showRoles)}
                className={`px-4 py-2 rounded-lg ${
                  showRoles
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {showRoles ? "👥 Masquer Rôles" : "👥 Afficher Rôles"}
              </button>
            </div>
          </div>

          {/* Résultats de recherche */}
          {recherche && resultatsRecherche.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">
                {langueAffichage === "fr"
                  ? "Résultats de recherche:"
                  : langueAffichage === "en"
                  ? "Search results:"
                  : "Resultados de búsqueda:"}
              </h2>
              {resultatsRecherche.map(renderTerme)}
            </div>
          )}

          {/* Navigation des sections */}
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">
              {langueAffichage === "fr"
                ? "Catégories:"
                : langueAffichage === "en"
                ? "Categories:"
                : "Categorías:"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setSectionActive(section.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    sectionActive === section.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {getSectionName(section.id)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Section principale */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                {getSectionName(sectionActive)}
              </h2>
              <div className="space-y-4">
                {sections
                  .find((s) => s.id === sectionActive)
                  ?.data.map(renderTerme)}
              </div>
            </div>

            {/* Tables BDD (si activé) */}
            {showTablesBDD && (
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  🗄️ Base de Données - Tables Principales
                </h2>
                <div className="space-y-2">
                  {lexiqueComplet.tablesPrincipales.map(renderTableBDD)}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    📝 Champs Communs
                  </h3>
                  <div className="space-y-2">
                    {lexiqueComplet.champsCommuns.map((champ: ChampBDD) => (
                      <div
                        key={champ.en}
                        className="mb-3 p-3 bg-blue-50 rounded border border-blue-200"
                      >
                        <div className="font-mono text-sm flex flex-wrap gap-4">
                          <div className="flex-1">
                            <span className="font-semibold">FR:</span>{" "}
                            {champ.fr}
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold">EN:</span>{" "}
                            {champ.en}
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold">ES:</span>{" "}
                            {champ.es}
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          {langueAffichage === "fr"
                            ? "Description: "
                            : langueAffichage === "en"
                            ? "Description: "
                            : "Descripción: "}
                          {champ.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Rôles (si activé) */}
            {showRoles && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  🏗️ Architecture des Rôles (RBAC)
                </h2>
                <div className="space-y-6">
                  {lexiqueComplet.rolesRBAC.map((role) => (
                    <div
                      key={role.id}
                      className="border border-gray-300 rounded-lg p-5"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {role.nom}
                          </h3>
                          <div className="text-sm text-gray-600 mt-1">
                            Niveau {role.niveau} - {role.description}
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {role.id}
                        </span>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-700 mb-2">
                          {langueAffichage === "fr"
                            ? "Utilisateurs types:"
                            : langueAffichage === "en"
                            ? "Typical users:"
                            : "Usuarios típicos:"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {role.utilisateursTypes.map((type, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-700 mb-2">
                          {langueAffichage === "fr"
                            ? "Permissions principales:"
                            : langueAffichage === "en"
                            ? "Main permissions:"
                            : "Permisos principales:"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {role.permissions.slice(0, 5).map((perm, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm"
                            >
                              {perm.id}
                            </span>
                          ))}
                          {role.permissions.length > 5 && (
                            <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-sm">
                              +{role.permissions.length - 5} autres...
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="text-sm text-gray-500">
                        <strong>
                          {langueAffichage === "fr"
                            ? "Interface:"
                            : langueAffichage === "en"
                            ? "Interface:"
                            : "Interfaz:"}
                        </strong>{" "}
                        {role.interface}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Barre latérale - Statistiques et infos */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                📊 Statistiques du Lexique
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-700">
                    {Object.values(lexiqueComplet).reduce((total, section) => {
                      if (Array.isArray(section)) {
                        return total + section.length;
                      }
                      return total;
                    }, 0)}
                  </div>
                  <div className="text-gray-600">
                    {langueAffichage === "fr"
                      ? "Termes techniques"
                      : langueAffichage === "en"
                      ? "Technical terms"
                      : "Términos técnicos"}
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-700">
                    3 langues
                  </div>
                  <div className="text-gray-600">
                    {langueAffichage === "fr"
                      ? "Support multilingue"
                      : langueAffichage === "en"
                      ? "Multilingual support"
                      : "Soporte multilingüe"}
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-700">
                    {sections.length}
                  </div>
                  <div className="text-gray-600">
                    {langueAffichage === "fr"
                      ? "Catégories thématiques"
                      : langueAffichage === "en"
                      ? "Thematic categories"
                      : "Categorías temáticas"}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-300">
                  <h4 className="font-semibold mb-3">
                    {langueAffichage === "fr"
                      ? "Raccourcis rapides:"
                      : langueAffichage === "en"
                      ? "Quick links:"
                      : "Accesos rápidos:"}
                  </h4>
                  <div className="space-y-2">
                    {[
                      { id: "terminologieGenerale", emoji: "🏷️" },
                      { id: "productionOeufs", emoji: "🥚" },
                      { id: "alimentation", emoji: "🍽️" },
                      { id: "santeBienEtre", emoji: "🏥" },
                      { id: "techniqueSysteme", emoji: "🔧" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setSectionActive(item.id)}
                        className="w-full text-left p-3 hover:bg-gray-100 rounded-lg flex items-center gap-3"
                      >
                        <span className="text-xl">{item.emoji}</span>
                        <span>{getSectionName(item.id)}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Outil de traduction */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                🔍 Outil de Traduction
              </h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder={
                    langueAffichage === "fr"
                      ? "Entrez un terme..."
                      : langueAffichage === "en"
                      ? "Enter a term..."
                      : "Ingrese un término..."
                  }
                  id="translationInput"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                  onClick={() => {
                    const input = document.getElementById(
                      "translationInput"
                    ) as HTMLInputElement;
                    if (input.value) {
                      const translation = obtenirTraduction(
                        input.value,
                        langueAffichage,
                        langueAffichage === "fr"
                          ? "en"
                          : langueAffichage === "en"
                          ? "es"
                          : "fr"
                      );
                      if (translation) {
                        alert(
                          `${
                            langueAffichage === "fr"
                              ? "Traduction:"
                              : langueAffichage === "en"
                              ? "Translation:"
                              : "Traducción:"
                          } ${translation}`
                        );
                      } else {
                        alert(
                          langueAffichage === "fr"
                            ? "Terme non trouvé"
                            : langueAffichage === "en"
                            ? "Term not found"
                            : "Término no encontrado"
                        );
                      }
                    }
                  }}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  {langueAffichage === "fr"
                    ? "Trouver la traduction"
                    : langueAffichage === "en"
                    ? "Find translation"
                    : "Buscar traducción"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pied de page avec GoHome */}
        <div className="mt-8 pt-6 border-t border-gray-300 flex justify-between items-center">
          <div className="text-gray-600 text-sm">
            {langueAffichage === "fr"
              ? "Lexique mis à jour le 30 décembre 2025"
              : langueAffichage === "en"
              ? "Lexicon updated on December 30, 2025"
              : "Léxico actualizado el 30 de diciembre de 2025"}
          </div>
          <GoHome />
        </div>
      </div>
    </div>
  );
}
