import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { getAllEvents } from '../../helpers/api-util';


import CoursesList from '../../components/courses/courses-list'

function AllCoursesPage(props) {
  const router = useRouter();
  const { events } = props;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All Courses</title>
      </Head>
      <Head>
        <title>All Courses</title>
        <meta
          name='description'
          content='Find a lot of great courses that allow you to evolve...'
        />
      </Head>
      <CoursesList></CoursesList>
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60
  };
}

export default AllCoursesPage;
