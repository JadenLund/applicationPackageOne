import { Link } from "react-scroll";

export default function NavBar() {
  const durationFn = function (deltaTop) {
    return deltaTop;
  };
  return (
    <nav className="sticky z-10 top-0 font-semibold text-xl bg-tab grid grid-cols-3 items-center">
      <a
        href="home"
        className="flex no-underline text-gray-400 hover:text-gold"
      >
        <img
          className="h-8 w-8 "
          src="https://www.freeiconspng.com/thumbs/letter-j-icon-png/letter-j-icon-png-26.png"
        />
        <span>BRAND</span>
      </a>
      <div className="flex sm:justify-center space-x-8 ">
        {[
          ["Home", "home"],
          ["About", "about"],
          ["Products", "products"],
          ["Find Us", "find"],
        ].map(([title, url]) => (
          <Link
            to={url}
            spy={true}
            smooth={true}
            offset={-60}
            className="p-2 hover:text-gold no-underline text-gray-400"
          >
            {title}
          </Link>
        ))}
      </div>
      <div className="flex space-x-8 justify-end"></div>
    </nav>
  );
}
