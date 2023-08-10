export default function Card({ product }) {
  return (
    <div className="w-r h-s flex py-2 px-4">
      <img className="w-1/2 m-1.5" src={product.image} alt={product.title} />
      <div className="flex flex-col ml-2 mt-8 ml-6">
        <h1 className="text-5xl font-semibold mb-6">{product.title}</h1>
        <p className="text-lg mr-20 text-justify"> {product.description}</p>
      </div>
    </div>
  );
}
