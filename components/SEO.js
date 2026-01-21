import Head from "next/head";

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Kamwi Siyauya" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
