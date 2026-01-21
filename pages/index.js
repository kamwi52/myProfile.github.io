import Layout from "../components/Layout";
import SEO from "../components/SEO";
import GitHubProjects from "../components/GitHubProjects";

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Behind the Code | Kamwi Siyauya"
        description="Senior IT Specialist & EdTech Engineer"
      />
      <h1>Behind the Code</h1>
      <p>
        Senior I.T. Specialist and Full-Stack Developer specializing in
        Education & Technology.
      </p>
      <GitHubProjects />
    </Layout>
  );
}
