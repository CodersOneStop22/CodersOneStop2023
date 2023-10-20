import Head from "next/head";
import LoginPage from "../../components/login/login-page";

function LoginNewPage(props) {
  return (
    <div>
      <Head>
        <title>Login - Miladra OneStop Solutions</title>
        <meta
          name="description"
          content="Find a lot of great courses that allow you to evolve..."
        />
      </Head>
      <LoginPage />
    </div>
  );
}

export default LoginNewPage;