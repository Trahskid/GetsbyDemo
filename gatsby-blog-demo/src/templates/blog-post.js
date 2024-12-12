import React from "react";
import { graphql, Link } from "gatsby";
import * as styles from "../styles/blogPost.module.css";

const BlogPost = ({ data }) => {
    const post = data.markdownRemark;

    return (
        <>
            <h1 className={styles.title}>{post.frontmatter.title}</h1>
            <div className={styles.container}>
                <p className={styles.date}>{post.frontmatter.date}</p>
                <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
                <Link to="/" className={styles.link}>
                    ← Zurück zur Übersicht
                </Link>
            </div>
        </>
    );
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`;

export default BlogPost;
