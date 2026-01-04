import GoHome from "@/components/common/GoHome";
import Link from "next/link";
import React from "react";

type NavItem = {
  title: string;
  href: string;
  description: string;
};

type NavCategory = {
  title: string;
  description: string;
  items: NavItem[];
};

const PUBLIC_PAGES: NavCategory[] = [
  {
    title: "Élevage",
    description: "Tout sur la conduite des pondeuses.",
    items: [
      {
        title: "Guide d’élevage",
        href: "/public/guide-elevage",
        description: "Cycle de vie, étapes, actions clés.",
      },
      {
        title: "Conduite en lots",
        href: "/public/conduite-lots",
        description: "Bandes, vide sanitaire, continuité de production.",
      },
      {
        title: "Alimentation",
        href: "/public/alimentation",
        description: "Phases, eau, stockage, distribution.",
      },
    ],
  },
  {
    title: "Infrastructures",
    description: "Bâtiments, réseaux et équipements.",
    items: [
      {
        title: "Bâtiments & installations",
        href: "/public/installations",
        description: "Pièces, usages, eau, électricité.",
      },
      {
        title: "Matériel",
        href: "/public/materiel",
        description: "Équipements et consommables.",
      },
    ],
  },
  {
    title: "Vente",
    description: "Commercialisation et valorisation.",
    items: [
      {
        title: "Vente & marketing",
        href: "/public/vente-marketing",
        description: "Canaux, prix, com, planning.",
      },
      {
        title: "Recettes",
        href: "/public/recettes",
        description: "Idées cuisine pour valoriser.",
      },
    ],
  },
  {
    title: "Réglementation",
    description: "Normes et documents.",
    items: [
      {
        title: "Réglementation",
        href: "/public/reglementation",
        description: "Biosécurité, obligations, checklists.",
      },
      {
        title: "Base documentaire",
        href: "/user/base-documentaire",
        description: "Ressources et modèles (connexion).",
      },
    ],
  },
  {
    title: "Aide",
    description: "Support et documentation.",
    items: [
      {
        title: "Aide application",
        href: "/public/aide",
        description: "Docs, tutoriels, dépannage.",
      },
      {
        title: "FAQ",
        href: "/public/faq",
        description: "Questions fréquentes.",
      },
      {
        title: "Contact",
        href: "/public/contact",
        description: "Contacter le support.",
      },
    ],
  },
];

export default function Page() {
  return (
    <main style={styles.main}>
      <section style={styles.grid} aria-label="Navigation pages publiques">
        {PUBLIC_PAGES.map((category) => (
          <div
            key={category.title}
            style={styles.card}
            aria-label={`Catégorie ${category.title}`}
          >
            <div style={styles.cardBody}>
              <h2 style={styles.h2}>{category.title}</h2>
              <p style={styles.cardText}>{category.description}</p>

              <div style={styles.items} aria-label={`Pages ${category.title}`}>
                {category.items.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    style={styles.subLink}
                  >
                    <div style={styles.subLinkText}>
                      <span style={styles.subTitle}>{subItem.title}</span>
                      <span style={styles.subDesc}>{subItem.description}</span>
                    </div>
                    <span style={styles.subCta} aria-hidden="true">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    maxWidth: 1000,
    margin: "0 auto",
    padding: "32px 16px",
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
    lineHeight: 1.5,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 14,
    marginTop: 18,
  },

  card: {
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 16,
    background: "#fff",
    color: "inherit",
  },

  cardBody: { display: "grid", gap: 10 },

  h2: { margin: 0, fontSize: 18 },

  cardText: { margin: 0, color: "#555" },

  items: {
    display: "grid",
    gap: 8,
    marginTop: 6,
  },

  subLink: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10,
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid #f1f5f9",
    textDecoration: "none",
    color: "inherit",
    background: "#fafafa",
  },

  subLinkText: {
    display: "grid",
    gap: 2,
  },

  subTitle: {
    fontSize: 14,
    fontWeight: 600,
  },

  subDesc: {
    fontSize: 13,
    color: "#666",
  },

  subCta: {
    fontSize: 16,
    color: "#111",
    lineHeight: 1,
    paddingTop: 2,
  },
};
