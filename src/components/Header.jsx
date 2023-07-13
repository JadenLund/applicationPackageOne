import Vape1 from "../images/Vape1.png";
import Wave from "../images/Wave.jpg";
export default function Header() {
  return (
    <div className="relative">
      <img className="rounded-3xl flex bg-image" src={Wave} />
      <div className="content absolute top-0 h-full">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fadein to-fadeout">
          Brand Name
        </h1>
        <p className="inline-block align-middle text-gray-200">
          Choose from our curated selection fo premium e-liquids, cutting-edge
          devices, and accessories at our state of the art vape shop.
        </p>
        <img className="w-6/12 absolute right-0" src={Vape1} />
      </div>
      <input class="" id="username" type="text" placeholder="Username" />
      <button className="">Subscribe</button>
    </div>
  );
}
