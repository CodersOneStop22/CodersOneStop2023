import Head from "next/head";
import Feedback from "../../components/feedback/feedback";

function FeedbackPage(props) {
  return (
    <div>
      <Head>
        <title>Feedback and Address- Miladra OneStop Solutions</title>
        <meta
          name="description"
          content="Find a lot of great courses that allow you to evolve..."
        />
      </Head>
      <Feedback />
    </div>
  );
}

export default FeedbackPage;