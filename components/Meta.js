import Head from 'next/head';

function Meta({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Developed by Parimal Nakrani" />
      <link
        rel="icon"
        href="https://www.google.co.uk/images/branding/googleg/1x/googleg_standard_color_128dp.png"
      />
    </Head>
  );
}

export default Meta;
