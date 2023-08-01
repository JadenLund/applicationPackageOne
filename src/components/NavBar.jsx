import { Link } from "react-scroll";

export default function NavBar() {
  const durationFn = function (deltaTop) {
    return deltaTop;
  };
  return (
    <nav className="sticky z-10 top-0 align-center justify-center flex font-semibold text-xl bg-tab py-5">
      <div className="text-gray-400 flex  w-r justify-between px-8">
        <div className="flex gap-2 ">
          <i class="fa-regular fa-circle fa-2x" />
          <h1 className="text-3xl"> BRAND</h1>
        </div>

        <div className="space-x-t text-2xl">
          {["Home", "About", "Products", "Find Us"].map((title) => (
            <Link key={title} to={title} spy={true} smooth={true} offset={-60}>
              {title}
            </Link>
          ))}
        </div>
        <div className="gap-6 flex fa-2x">
          <i className="fa-brands fa-twitter" />
          <i className="fa-brands fa-instagram" />
          <i className="fa-brands fa-facebook" />
        </div>
      </div>
    </nav>
  );
}
