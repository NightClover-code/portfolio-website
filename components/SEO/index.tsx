//importing utils
import Head from 'next/head';
//props interface
interface SE0Props {
  title: string;
  description: string;
  keywords?: string;
}
//seo
const SEO: React.FC<SE0Props> = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="shortcut icon"
        type="images/x-generic"
        href="/images/favicon.png"
      />
      <meta name="description" content={description} />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Achraf Dev" />
      <meta
        name="google-site-verification"
        content="7AMm0qMOoYISNP_Pg3TIOE8o8E_DVYgk829hyLoBA_I"
      />
    </Head>
  );
};

export default SEO;
