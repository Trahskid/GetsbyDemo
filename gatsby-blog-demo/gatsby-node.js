
const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
      },
    });
  });
};

// Erstelle Slugs für Markdown-Dateien
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = `/blog/${node.frontmatter.title.toLowerCase().replace(/ /g, "-")}/`;
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
