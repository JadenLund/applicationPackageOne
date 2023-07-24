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
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    src={info.image}
                    alt="Modern building architecture"
                  />
                </div>
                <div className="p-8">
                  <a
                    href="#"
                    className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                  >
                    {info.title}
                  </a>
                  <p className="mt-2 text-slate-500">{info.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
