import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = 'Shin Lee | Portfolio',
  description = 'Mission-driven engineering leader in SaaS, automation, and data analytics.',
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
    </Helmet>
  );
}


