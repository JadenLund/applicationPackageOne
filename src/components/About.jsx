import product from "./../images/product.png";
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
        <div>
          <img src={product} />
          <h2>Premium Products</h2>
          <p>
            We provide premium products, ensuring you have access to the latest
            and highest quality curated options.
          </p>
        </div>
      </div>
    </div>
  );
}
