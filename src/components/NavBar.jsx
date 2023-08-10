import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <nav className="sticky z-10 top-0 align-center justify-center flex font-semibold text-xl bg-tab py-5">
      <div className="cursor-pointer text-gray-400 flex  w-r justify-between px-8">
        <Link
          to="Home"
          spy={true}
          smooth={true}
          offset={-90}
          className="flex gap-2"
        >
          <i class="fa-regular fa-circle fa-2x" />
          <h1 className="hover:text-gray-300 transistion duration-300 text-3xl">
            BRAND
          </h1>
        </Link>
        <div className=" space-x-4 text-2xl">
          {["About", "Products", "Find Us", "Contact Us"].map((title) => (
            <Link
              key={title}
              to={title}
              spy={true}
              smooth={true}
              offset={-85}
              className="py-7 px-4 hover:bg-tab-dark hover:text-gray-300 cursor-pointer transition duration-700"
            >
              {title}
            </Link>
          ))}
        </div>
        <div className="gap-6 flex fa-2x">
          {["twitter", "instagram", "facebook"].map((company) => (
            <i
              className={`fa-brands hover:text-gray-300 transition duration-300 fa-${company}`}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
