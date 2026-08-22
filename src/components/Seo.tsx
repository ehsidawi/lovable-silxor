import { Helmet } from "react-helmet-async";

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
    </Helmet>
  );
};

export default Seo;
