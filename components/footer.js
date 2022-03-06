import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 space-y-6 py-8 ">
       <div className="flex es:flex-col es:space-y-8 justify-center items-center es:space-x-0 space-x-20 md:space-x-10">
          <Link href="/" className="footer-links">
            <a>
              Title Generator 
            </a>
          </Link>
          <Link href="/" className="footer-links">
            <a>
              Description Generator
            </a>
          </Link>
          <Link href="/" className="footer-links">
            <a>
              Tag Extractor
            </a>
          </Link>
        </div>
      <hr className="w-[90%] border-1 border-slate-700 mx-auto "/>
      <div className="text-slate-300 font-poppins text-center md:text-sm">
        <span>© 2021 Copyright : </span>
        <Link href="/" className="text-slate-300 font-poppins font-semibold">
            <a>
            YThub
            </a>
          </Link>
      </div>
    </footer>
  );
};

export default Footer;
