import { storeBenefitData } from "./Information";
export default function About() {
  return (
    <div>
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fadein to-fadeout">
        Who We are
      </h1>
      <p>
        Since 2015, our vape shop has been dedicated to offering a diverse range
        of high-quality vaping products and accessories, tailored to meet the
        unique needs of each customer.
      </p>
      <div className="grid cols-3">
        {storeBenefitData.map((info, index) => (
          <div key={`${info.title}_${index}`}>
            <img src={info.icon} />
            <h1>{info.title}</h1>
            <p>{info.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
