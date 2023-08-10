import { Link } from "react-scroll";
export default function BNavBar() {
  return (
    <div className="-mt-8 text-center text-gray-300">
      <h1 className="text-7xl">Brand</h1>
      <div className="my-4 space-x-4 text-xl">
        {["Home", "About", "Products", "Find Us", "Contact Us"].map((title) => (
          <Link
            key={title}
            to={title}
            spy={true}
            smooth={true}
            offset={-90}
            className="cursor-pointer"
          >
            {title}
          </Link>
        ))}
      </div>
      <div className="justify-center flex gap-6 flex fa-2x ">
        <i className="fa-brands fa-twitter" />
        <i className="fa-brands fa-instagram" />
        <i className="fa-brands fa-facebook" />
      </div>
      <p class="mt-4 text-center text-gray-500 text-md">
        &copy;2023 Brand Corp. All rights reserved.
      </p>
    </div>
  );
}
