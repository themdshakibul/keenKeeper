import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <section>
      <footer className="bg-[#244d3f] text-white">
        <div className="container mx-auto px-2  flex flex-col items-center justify-center space-y-5 text-center pt-20 pb-10">
          <aside className="space-y-5">
            <h1 className="text-4xl md:text-6xl font-bold">KeenKeeper</h1>
            <p className="font-semibold ">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
          </aside>
          <h4 className="text-xl font-semibold">Social Links</h4>
          <nav className="flex items-center gap-5">
            <div className="bg-white p-3 rounded-full cursor-pointer">
              <AiFillInstagram size={25} color="black" />
            </div>
            <div className="bg-white p-3 rounded-full cursor-pointer">
              <FaFacebookSquare size={25} color="black" />
            </div>
            <div className="bg-white p-3 rounded-full cursor-pointer">
              <RiTwitterXLine size={25} color="black" />
            </div>
          </nav>
          <hr className="border border-gray-200/10 w-full my-5" />
          <div className="flex flex-col md:flex-row gap-5  items-center justify-between w-full opacity-50">
            <p>© {new Date().getFullYear()} KeenKeeper.All right reserved</p>
            <div className="flex items-center gap-5">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Cookies</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
