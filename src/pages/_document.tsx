import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/bcme.png" rel="icon" sizes="any" />

        <meta content="#F6F6F6" name="theme-color" />

        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta charSet="utf-8" />
        <meta
          content="/favicons/browserconfig.xml"
          name="msapplication-config"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="google-site-verification"
          content="xPLkKTIljMR4bmcRMMLsz-jlWSy1p2d1sinVriW0XKY"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
