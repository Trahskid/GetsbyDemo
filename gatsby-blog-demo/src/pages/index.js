import React from "react";
import { graphql, Link } from "gatsby";
import * as styles from "../styles/index.module.css";

const IndexPage = ({ data }) => (
    <div className={styles.container}>
        <h1 className={styles.title}>Blog Übersicht</h1>
        <ul className={styles.blogList}>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <li key={node.fields.slug} className={styles.blogListItem}>
                    <Link to={node.fields.slug} className={styles.blogLink}>
                        {node.frontmatter.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export const query = graphql`
    query {
        allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
`;

export default IndexPage;
