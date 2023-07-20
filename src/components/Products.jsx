import Card from "./Card";
import { productCarouselData } from "./Information";

export default function Products() {
  return (
    <div>
      <h1 className="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fadein to-fadeout">
        Some of The Best
      </h1>
      <Card>
        {productCarouselData.map((info, index) => (
          <div key={`${info.title}_${index}`}>
            {" "}
            {console.log(info)}
            <img src={info.image} />
            <h2>{info.title}</h2>
            <p>{info.description}</p>
          </div>
        ))}{" "}
      </Card>
    </div>
  );
}
