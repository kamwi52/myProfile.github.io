import fs from "fs";
import path from "path";
import Link from "next/link";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function Blog({ posts }) {
  return (
    <Layout>
      <SEO title="Blog | Behind the Code" description="Articles & insights" />
      <h1>Articles</h1>
      {posts.map(post => (
        <p key={post.slug}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </p>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map(file => ({
    slug: file.replace(".md", ""),
    title: file.replace(".md", "").replace(/-/g, " ")
  }));
  return { props: { posts } };
}
