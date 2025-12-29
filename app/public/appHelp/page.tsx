import React from "react";

export default function Page() {
  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.h1}>Scénarios — Lots de pondeuses</h1>
        <p style={styles.lead}>
          Cette page décrit la création d’un lot, la génération des données
          prédites, puis le suivi terrain avec saisie des observations.
        </p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.h2}>
          Scénario 1 — Création du lot et génération des prédictions
        </h2>

        <article style={styles.card}>
          <h3 style={styles.h3}>Contexte</h3>
          <p style={styles.p}>
            L’utilisateur est un éleveur (membre d’une équipe/ferme) et souhaite
            démarrer un nouveau lot de poules pondeuses. Un modèle de cycle de
            vie (LifeCircle) existe déjà, composé de phases (Phase) prédéfinies.
          </p>
        </article>

        <article style={styles.card}>
          <h3 style={styles.h3}>Étapes</h3>

          <h4 style={styles.h4}>1) Création du lot</h4>
          <ul style={styles.ul}>
            <li style={styles.li}>Ouvre la section « Lots » du bâtiment.</li>
            <li style={styles.li}>Clique sur « Créer un lot ».</li>
            <li style={styles.li}>
              Remplit le formulaire, par exemple :
              <ul style={styles.ulNested}>
                <li style={styles.li}>Nom : « Lot Pondeuses Avril 2024 »</li>
                <li style={styles.li}>Bâtiment : « Bâtiment A »</li>
                <li style={styles.li}>Type de volaille : Pondeuses</li>
                <li style={styles.li}>Date de démarrage : 01/04/2024</li>
                <li style={styles.li}>Nombre de poussins : 5000</li>
                <li style={styles.li}>Âge initial : 1 jour (ou 0)</li>
              </ul>
            </li>
            <li style={styles.li}>Soumet le formulaire.</li>
          </ul>

          <h4 style={styles.h4}>2) Génération des données prédites</h4>
          <ul style={styles.ul}>
            <li style={styles.li}>
              Récupère le LifeCircle correspondant au type « pondeuse ».
            </li>
            <li style={styles.li}>
              Pour chaque Phase, génère pour le lot :
              <ul style={styles.ulNested}>
                <li style={styles.li}>
                  Des événements (Event) prédits (source ={" "}
                  <code>predicted</code>)
                </li>
                <li style={styles.li}>
                  Des tâches (Task) planifiées (source = <code>predicted</code>)
                </li>
                <li style={styles.li}>
                  Des paramètres d’élevage (BreedingParams) prédits (source ={" "}
                  <code>predicted</code>)
                </li>
              </ul>
            </li>
          </ul>
        </article>

        <article style={styles.card}>
          <h3 style={styles.h3}>Exemples de données générées</h3>

          <h4 style={styles.h4}>Événements (Event)</h4>
          <ul style={styles.ul}>
            <li style={styles.li}>
              Objectif de poids à J7 : 80 g ; consommation : 15 g/j ; ponte :
              0%.
            </li>
            <li style={styles.li}>
              Objectif de poids à J14 : 150 g ; consommation : 28 g/j ; ponte :
              0%.
            </li>
          </ul>

          <h4 style={styles.h4}>Tâches (Task)</h4>
          <ul style={styles.ul}>
            <li style={styles.li}>Jour 1 : Vaccination Marek.</li>
            <li style={styles.li}>Jour 10 : Décrochage bec.</li>
          </ul>

          <h4 style={styles.h4}>Paramètres d’élevage (BreedingParams)</h4>
          <ul style={styles.ul}>
            <li style={styles.li}>
              Semaine 1–2 : Température 33°C ; humidité 60% ; lumière 23h.
            </li>
            <li style={styles.li}>
              Semaine 3–4 : Température 30°C ; humidité 55% ; lumière 20h.
            </li>
          </ul>
        </article>

        <article style={styles.card}>
          <h3 style={styles.h3}>Visualisation</h3>
          <p style={styles.p}>
            Dans le détail du lot, l’utilisateur voit un calendrier contenant
            les événements et tâches prévus, ainsi que les paramètres d’élevage
            recommandés.
          </p>
        </article>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>
          Scénario 2 — Suivi, saisie des observations et analyse des écarts
        </h2>

        <article style={styles.card}>
          <h3 style={styles.h3}>Contexte</h3>
          <p style={styles.p}>
            Le lot est en cours d’élevage. L’utilisateur réalise un suivi
            quotidien ou hebdomadaire et compare le réel au prédit.
          </p>
        </article>

        <article style={styles.card}>
          <h3 style={styles.h3}>Étapes de suivi</h3>

          <h4 style={styles.h4}>1) Paramètres d’élevage</h4>
          <ul style={styles.ul}>
            <li style={styles.li}>
              Consulte les paramètres prédits (température, humidité, lumière…).
            </li>
            <li style={styles.li}>
              Ajuste selon la réalité et saisit une observation (source ={" "}
              <code>observed</code>).
            </li>
            <li style={styles.li}>
              Point à clarifier : rattachement des observations (au Lot
              directement, et/ou à la Phase), et comment faire le lien avec la
              ligne prédite correspondante.
            </li>
          </ul>

          <h4 style={styles.h4}>2) Événements (mesures)</h4>
          <ul style={styles.ul}>
            <li style={styles.li}>
              Exemple à J7 : l’utilisateur mesure 85 g (observé) vs objectif 80
              g (prédit).
            </li>
            <li style={styles.li}>
              Enregistre la valeur observée (source = <code>observed</code>) et
              affiche l’écart.
            </li>
          </ul>

          <h4 style={styles.h4}>3) Tâches</h4>
          <ul style={styles.ul}>
            <li style={styles.li}>
              Consulte les tâches planifiées du jour (ex : vaccination
              Newcastle).
            </li>
            <li style={styles.li}>
              Marque la tâche comme réalisée (au choix : mise à jour de la tâche
              prédite, ou création d’une exécution observée).
            </li>
          </ul>
        </article>

        <article style={styles.card}>
          <h3 style={styles.h3}>Remarque modèle de données</h3>
          <p style={styles.p}>
            Si <code>Event</code>, <code>Task</code> et{" "}
            <code>BreedingParams</code> ont seulement un champ{" "}
            <code>source</code>, le lien entre une prédiction et son observation
            peut rester ambigu. Une solution est d’ajouter une relation
            explicite (ex : <code>predictedEventId</code>) côté observation,
            pour rattacher clairement le réel au planifié.
          </p>
        </article>
      </section>
    </main>
  );
}

const styles = {
  main: {
    maxWidth: 980,
    margin: "0 auto",
    padding: "32px 16px",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
    lineHeight: 1.6,
  },
  header: { marginBottom: 24 },
  h1: { fontSize: 28, margin: "0 0 8px" },
  lead: { margin: 0, color: "#444" },

  section: { marginTop: 28 },
  h2: { fontSize: 20, margin: "0 0 12px" },

  card: {
    border: "1px solid #e5e7eb",
    borderRadius: 10,
    padding: 16,
    marginTop: 12,
    background: "#fff",
  },

  h3: { fontSize: 16, margin: "0 0 8px" },
  h4: { fontSize: 14, margin: "12px 0 8px", color: "#111" },

  p: { margin: 0, color: "#222" },

  ul: { margin: "8px 0 0", paddingLeft: 18 },
  ulNested: { marginTop: 6, paddingLeft: 18 },
  li: { marginTop: 6 },
};
