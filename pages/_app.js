import Head from "next/head";
import PageLayout from "../components/PageLayout";
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  const Layout = Component.Layout || layoutRouter(router);
  
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#947960"></meta>
      </Head>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </>
  );
}

function layoutRouter({ pathname }) {
  switch (pathname) {
    case '/':
    case '/reservation':
    case '/services':
    case '/price':
    case '/gallery':
    case '/about':
      return PageLayout;
    default:
      return React.Fragment;
  }
}

export default MyApp
