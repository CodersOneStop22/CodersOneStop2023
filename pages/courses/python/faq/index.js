import FAQLayout from  '../../../../components/layout/faq-layout';
import Head from "next/head"; 
  export function PythonFAQ() {
    return (
        <div className='bg-gradient-to-b from-SoftViolet to-SoftBlue w-screen min-h-screen flex flex-col justify-center items-center '>
      <Head>
        <title>Python FAQ's</title>
        <meta name='description' content='Python Interview Questions' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <FAQLayout />

      
    </div>
    )
  }

  export default PythonFAQ;
  