import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";

const About = () => {
    
    return ( 
        <div className="">
            <Navbar/>
            <div className="h-screen m-10 md:m-5 bg-color1 rounded-3xl overflow-hidden">
            <h1 className="grid place-content-center py-5 md:text-4xl text-6xl text-white font-extrabold bg-gradient-to-l from-color2 to-violet-600">ABOUT US</h1>
            </div>
            <Footer/>
        </div>
     );
}
 
export default About;