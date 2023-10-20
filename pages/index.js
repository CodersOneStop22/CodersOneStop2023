import Head from "next/head";
import Login from "./login";
import HomeMainSection from "../components/layout/home-mainsection"
function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Miladra OneStop Solutions</title>
        <meta
          name="description"
          content="Find a lot of great courses that allow you to evolve..."
        />
      </Head>
     <HomeMainSection />
      
    </div>
  );
}

export default HomePage;
