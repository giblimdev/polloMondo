import GoHome from "@/components/common/GoHome";
import Link from "next/link";
import React from "react";

const PUBLIC_PAGES = [
  {
    title: "Recette",
    description: "Recettede cuisine.",
    href: "/public/recettes",
  },
  {
    title: "Guide d'Elevage",
    description: "guide d'elevage.",
    href: "/public/guideElevage",
  },
  {
    title: "App Help",
    description: "Documentation et aide d’utilisation de l’application.",
    href: "/public/apphelp",
  },
  {
    title: "FAQ",
    description: "Questions fréquentes et réponses rapides.",
    href: "pubic/faq",
  },
  {
    title: "Contact",
    description: "Contacter l’équipe support.",
    href: "/public/contact",
  },
];

export default function Page() {
  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.h1}>Page d’accueil des pages publiques</h1>
        <p style={styles.p}>
          Choisis une section ci-dessous (affichage sous forme de cards).
        </p>
      </header>

      <section style={styles.grid} aria-label="Navigation pages publiques">
        {PUBLIC_PAGES.map((item) => (
          <Link key={item.href} href={item.href} style={styles.card}>
            <div style={styles.cardBody}>
              <h2 style={styles.h2}>{item.title}</h2>
              <p style={styles.cardText}>{item.description}</p>
              <span style={styles.cta}>Ouvrir →</span>
            </div>
          </Link>
        ))}
      </section>
      <GoHome />
    </main>
  );
}

const styles = {
  main: {
    maxWidth: 1000,
    margin: "0 auto",
    padding: "32px 16px",
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
    lineHeight: 1.5,
  },
  header: { marginBottom: 18 },
  h1: { margin: 0, fontSize: 28 },
  p: { margin: "8px 0 0", color: "#444" },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 14,
    marginTop: 18,
  },

  card: {
    display: "block",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 16,
    background: "#fff",
    textDecoration: "none",
    color: "inherit",
  },
  cardBody: { display: "grid", gap: 8 },
  h2: { margin: 0, fontSize: 18 },
  cardText: { margin: 0, color: "#555" },
  cta: { fontSize: 14, color: "#111" },
};
