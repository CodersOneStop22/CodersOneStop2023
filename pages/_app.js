import Head from "next/head";
import Login from "./login";
import Courses from "./courses";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Miladra OneStop Solutions</title>
        <meta name="description" content="Courses & Quizzes" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Login></Login>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
