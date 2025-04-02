import Image from "next/image";
import Logo from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex justify-between items-center">
          <Image className="h-12 w-12" src={Logo} alt="SAAS Logo" />
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>

          <nav className="hidden sm:flex gap-6 items-center">
            <Link
              className="text-white/70 hover:text-white transition"
              href="#"
            >
              Features
            </Link>
            <Link
              className="text-white/70 hover:text-white transition"
              href="#"
            >
              Updates
            </Link>
            <Link
              className="text-white/70 hover:text-white transition"
              href="#"
            >
              Help
            </Link>
            <Link
              className="text-white/70 hover:text-white transition"
              href="#"
            >
              About
            </Link>
            <Link
              className="text-white/70 hover:text-white transition"
              href="#"
            >
              Customers
            </Link>
            <button className="bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
