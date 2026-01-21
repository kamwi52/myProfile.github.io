import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";

export default function Post({ frontmatter, content }) {
  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map(file => ({
    params: { slug: file.replace(".md", "") }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join("posts", `${params.slug}.md`);
  const file = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(file);
  return {
    props: {
      frontmatter: data,
      content: marked(content)
    }
  };
}
