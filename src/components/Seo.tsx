import { Helmet } from "react-helmet-async";
import { structuredData } from "@/lib/structuredData";

const SITE = "https://silxor.com";

type SeoProps = {
  title: string;
  description: string;
  path: string;
};

/** Route level title, description, canonical, and Open Graph tags. */
const Seo = ({ title, description, path }: SeoProps) => {
  const url = `${SITE}${path === "/" ? "/" : path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <script type="application/ld+json">{JSON.stringify(structuredData(path, title, description)).replace(/</g, "\\u003c")}</script>
    </Helmet>
  );
};

export default Seo;
