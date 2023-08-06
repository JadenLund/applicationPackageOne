export default function Card({ product }) {
  return (
    <div className="w-r h-s flex  py-2 px-4">
      <img className="w-1/2" src={product.image} alt={product.title} />
      <div className="flex flex-col ml-2">
        <h1 className="text-3xl font-semibold">{product.title}</h1>
        <p className="text-lg">{product.description}</p>
      </div>
    </div>
  );
}
