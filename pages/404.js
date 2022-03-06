import Navbar from "../components/navbar";
import Link from "next/link";
import Image from "next/image";

const Error = () => {
    return ( 
        <div>
            <Navbar/>
            <div className="flex px-10 flex-col space-y-5 text-center justify-start items-center md:min-h-[calc(100vh-4rem)] min-h-[calc(100vh-5rem)]">
                <Image className="z-[-1]" src="/images/error.svg" alt="error-404" width={400} height={400} />
                <h1 className="text-zinc-600 font-poppins font-bold text-4xl">Error 404</h1>
                <p className="text-xl text-zinc-600">The page you are looking for doesn&apos;t exists</p>
                <Link href="/">
                   <a className="cursor-pointer font-poppins font-semibold text-white text-base py-3 px-5 bg-gradient-to-l from-color2 to-violet-500 rounded-lg">Return To Home</a>
               </Link>
            </div>

        </div>
     );
}
 
export default Error;