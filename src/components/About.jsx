import Line from "../images/Line.png";
import { Link } from "react-scroll";
import { storeBenefitData } from "./Information";
export default function About() {
  return (
    <div className="text-white text-xl">
      <h1 className="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fadein to-fadeout">
        Who We are
      </h1>
      <div className="text-center my-5 flex flex-col items-center text-xl">
        <p className="w-z -mt-2">
          Since 2015, our vape shop has been dedicated to offering a diverse
          range of high-quality vaping products and accessories, tailored to
          meet the unique needs of each customer.
        </p>
        <img src={Line} className="w-z my-5" />
      </div>
      <div className="flex justify-center grid grid-cols-3">
        {storeBenefitData.map((info, index) => (
          <div key={`${info.title}_${index}`}>
            <img
              className="w-u flex mx-auto rounded-2xl mt-5"
              src={info.icon}
            />
            <div className="ml-w w-y">
              <h2 className="text-3xl font-semibold my-5 flex">{info.title}</h2>
              <p className=" text-s-text">{info.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* this then scrolls down to the contact us section */}
      <Link
        to="Contact Us"
        spy={true}
        smooth={true}
        offset={-90}
        className="mt-8 flex justify-center text-xl"
      >
        <button className="px-e py-2 font-semibold rounded-lg bg-gradient-to-r from-fadein to-fadeout">
          Learn More
          <i class="ml-3 fa-solid fa-chevron-right"></i>
        </button>
      </Link>
    </div>
  );
}
