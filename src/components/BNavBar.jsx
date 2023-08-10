import { Link } from "react-scroll";
export default function BNavBar() {
  return (
    <div>
      <h1 className="text-3xl">Brand</h1>
      <div className=" space-x-4 text-md">
        {["Home", "About", "Products", "Find Us", "Contact Us"].map((title) => (
          <Link
            key={title}
            to={title}
            spy={true}
            smooth={true}
            offset={-80}
            className="cursor-pointer"
          >
            {title}
          </Link>
        ))}
      </div>
      <div className="gap-6 flex fa-2x">
        <i className="fa-brands fa-twitter" />
        <i className="fa-brands fa-instagram" />
        <i className="fa-brands fa-facebook" />
      </div>
      <p class="text-center text-gray-500 text-xs">
        &copy;2023 Brand Corp. All rights reserved.
      </p>
    </div>
  );
}
