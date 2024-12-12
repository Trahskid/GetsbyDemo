module.exports = {
  siteMetadata: {
    title: "Gatsby Blog Demo",
    description: "Ein einfacher Blog mit Gatsby und Markdown",
    author: "Dein Name",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`, // Pfad zu den Markdown-Dateien
      },
    },
    `gatsby-transformer-remark`, // Wandelt Markdown in HTML um
  ],
};
