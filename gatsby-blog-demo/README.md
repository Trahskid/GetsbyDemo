# Gatsby Blog Demo

Ein einfacher Blog, der mit Gatsby.js erstellt wurde. Inhalte werden aus Markdown-Dateien generiert.

---

## 🚀 Starten des Projekts

### 1. Installation der Abhängigkeiten
Stelle sicher, dass du Node.js und npm installiert hast, und führe dann aus:

```bash
npm install
```

### 2. Entwicklungsserver starten
Starte den Entwicklungsserver, um dein Projekt lokal zu testen:

```bash
gatsby develop
```

- Standard-URL: [http://localhost:8000](http://localhost:8000)
- GraphQL-Playground: [http://localhost:8000/___graphql](http://localhost:8000/___graphql)

---

## 🛠 Wichtige Befehle

### **Projekt bereinigen**
Um Cache und alte Dateien zu entfernen:

```bash
gatsby clean
```

### **Build erstellen**
Erstelle eine Produktionsversion deines Blogs:

```bash
gatsby build
```

Die statischen Dateien werden im Ordner `public/` gespeichert.

### **Produktion lokal testen**
Um die gebaute Version zu testen:

```bash
gatsby serve
```

- Standard-URL: [http://localhost:9000](http://localhost:9000)

---

## 📂 Struktur des Projekts

- **`src/blog/`**: Enthält die Markdown-Dateien für die Blogposts.
- **`src/templates/blog-post.js`**: Vorlage für einzelne Blogpost-Seiten.
- **`gatsby-config.js`**: Konfiguration für Gatsby und Plugins.
- **`public/`**: Output der Produktions-Builds.

---

## 📋 Beispieleinträge hinzufügen

Neue Blogeinträge werden als Markdown-Dateien in `src/blog/` hinzugefügt. Ein Beispiel für einen Eintrag:

**Datei: `src/blog/beispiel-post.md`**

```markdown
---
title: "Beispiel Blogeintrag"
date: "2024-12-15"
---

Hier steht der Inhalt deines Blogposts. Du kannst Markdown verwenden, um Listen, Überschriften, Bilder und mehr hinzuzufügen.

- Markdown macht das Schreiben einfach.
- Inhalte lassen sich leicht strukturieren.

![Beispielbild](https://via.placeholder.com/600x300 "Beispielbild")
```

Weitere Beispiele:

**Datei: `src/blog/zweiter-post.md`**

```markdown
---
title: "Zweiter Blogeintrag"
date: "2024-12-10"
---

Dies ist der zweite Blogeintrag. Gatsby macht es einfach, Inhalte aus verschiedenen Quellen zu nutzen!

### Highlights dieses Eintrags
1. Schnelle Ladezeiten
2. Moderne Technologien
3. Erweiterbar durch Plugins
```

---

## 🌐 Styling anpassen

### CSS-Dateien für Styling

Das Projekt nutzt **CSS Modules**, die sich in `src/styles/` befinden. Beispiel:

**Datei: `src/styles/blogPost.module.css`**

```css
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.title {
  background-color: #663399;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  padding: 20px 0;
  margin: 0;
  width: 100vw;
}

.date {
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.content {
  line-height: 1.6;
  font-size: 1.1rem;
}
```

Für globale Styling-Optionen kannst du Gatsby’s Browser-APIs nutzen:

**Datei: `gatsby-browser.js`**

```javascript
import "./src/styles/global.css"; // Füge globale CSS-Datei hinzu
```

---

## 📦 Wichtige Abhängigkeiten

- **Gatsby.js**: Framework für die statische Website-Generierung.
- **React**: Basis für das Frontend.
- **GraphQL**: Für die Datenabfragen.
- **Markdown Plugins**:
    - `gatsby-source-filesystem`
    - `gatsby-transformer-remark`

---

## 📖 Ressourcen

- [Gatsby-Dokumentation](https://www.gatsbyjs.com/docs/)
- [GraphQL-Abfragen](https://graphql.org/learn/)
- [Markdown-Referenz](https://www.markdownguide.org/)

---

Viel Spaß mit deinem Gatsby-Blog! 😊
