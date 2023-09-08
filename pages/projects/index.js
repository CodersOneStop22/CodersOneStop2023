import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import ProjectsList from "../../components/projects/projects-list";

function AllProjectsPage() {
  return (
    <Fragment>
      <Head>
        <title>All Projects</title>
      </Head>
      <Head>
        <title>All Projects</title>
        <meta
          name="description"
          content="Find a lot Projects that allow you to evolve..."
        />
      </Head>
      <ProjectsList></ProjectsList>
    </Fragment>
  );
}

export default AllProjectsPage;
