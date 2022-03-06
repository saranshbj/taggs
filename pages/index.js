import Head from "next/head";
import Navbar from "/components/navbar";
import Section2 from "../components/section2";
import Footer from "../components/footer";
import Output from "../components/output";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://rapidtags.io/api/generator?query=top%2010%20cars&type=YouTube"
  );
  const data = (await res.json()).tags;

  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {

  return (
    <>
      {/* Head Section Starts From Here */}
      <Head>
        <title>YThub - Tag generator for youtube</title>n
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* Head Section Ends Here */}
      <div className="h-full mx-auto bg-white">
        <Navbar />
        <section className="w-full h-full">
          {/* Hero Section Starts From Here*/}
          <div className="bg-gradient-to-t from-violet-300 via-violet-100 to-stone-100 w-full space-y-10 py-12 es:px-5 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-5">
            {/* Hero Section Text */}
            <h1 className="font-poppins text-7xl md:text-5xl es:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-l from-color2 to-violet-700 drop-shadow-md shadow-violet-300 antialiased pb-3 tracking-tight">
              Tag Generator For Youtube
            </h1>
            {/* Hero Section Text Ends */}
            {/* Hero Section Input Area and Button  */}
            <form className="m-4 shadow-lg shadow-violet-300 w-full h-14 es:h-12 rounded-lg max-w-3xl md:max-w-2xl flex items-center justify-center overflow-hidden">
              <input
                className="w-full h-full focus:outline-none border-slate-30 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 rounded-l-lg  es:py-3 p-4 mr-0 bg-white select-none z-10"
                placeholder="Enter Your Keyword..."
              />

              <button className="px-6 es:px-3 select-none h-full bg-gradient-to-l from-color2 to-violet-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-r-lg grid place-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 0 24 24"
                  width="30px"
                  fill="#FFFFFF"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </button>
            </form>
            <Output data={data} />
            {/* Hero Section Input Area and Button Ends Here */}
          </div>
          {/* Hero Section Ends Here*/}
        </section>
        {/* Section 2 Starts here */}
        <Section2 />
        {/* Section 2 Ends here */}
        {/* Section 3 Starts Here */}
        <Footer />
        {/* Section 3 Ends Here */}
      </div>
    </>
  );
}
