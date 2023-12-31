import { Link } from "react-scroll";
export default function BNavBar() {
  return (
    <div className="-mt-8 text-center text-gray-400 ">
      <Link to="Home" spy={true} smooth={true} offset={-90}>
        <span className="transition duration-300 text-7xl text-gray-300 hover:text-gray-100 cursor-pointer justify-center flex">
          Brand
        </span>
      </Link>

      <div className="my-4 space-x-4 text-xl">
        {["About", "Products", "Find Us", "Contact Us"].map((title) => (
          <Link
            key={title}
            to={title}
            spy={true}
            smooth={true}
            offset={-90}
            className="cursor-pointer hover:text-gray-300 transition duration-300 "
          >
            {title}
          </Link>
        ))}
      </div>
      <div className="justify-center flex gap-6 flex fa-2x ">
        {["twitter", "instagram", "facebook"].map((company) => (
          <i
            className={`fa-brands cursor-pointer hover:text-gray-300 transition duration-300 fa-${company}`}
          />
        ))}
      </div>
      <p class="mt-4 text-center text-gray-500 text-md">
        &copy;2023 Brand Corp. All rights reserved.
      </p>
    </div>
  );
}
