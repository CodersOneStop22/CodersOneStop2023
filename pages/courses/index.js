import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import CoursesList from '../../components/courses/courses-list'

function AllCoursesPage(props) {
  const router = useRouter();
  

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



export default AllCoursesPage;
