import Line from "../images/Line.png";
import { storeBenefitData } from "./Information";
export default function About() {
  return (
    <div className="text-gray-300">
      <h1 className="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fadein to-fadeout">
        Who We are
      </h1>
      <p className="text-center my-5">
        Since 2015, our vape shop has been dedicated to offering a diverse range
        of high-quality vaping products and accessories, tailored to meet the
        unique needs of each customer.
      </p>
      <img src={Line} className=" my-5" />
      <div className="flex justify-center">
        {storeBenefitData.map((info, index) => (
          <div key={`${info.title}_${index}`}>
            <img
              className="w-u flex mx-auto rounded-2xl mt-5"
              src={info.icon}
            />
            <h2 className="text-3xl font-semibold my-5 justify-center flex">
              {info.title}
            </h2>
            <p className="text-xl ">{info.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
