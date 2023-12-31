import Vape1 from "../images/Vape1.png";
import Wave from "../images/Wave.jpg";
export default function Header() {
  return (
    <div className="relative pt-4">
      <img className="w-r h-s rounded-3xl" src={Wave} />
      <div className="absolute top-0 h-full flex items-center">
        <div className="mx-8 space-y-e lg:w-1/2 sm:w-x">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fadein to-fadeout">
            Brand Name
          </h1>
          <p className="text-gray-300 text-lg">
            Choose from our curated selection of premium e-liquids, cutting-edge
            devices, and accessories at our state-of-the-art vape shop.
          </p>
          <div className="flex">
            <div className="flex bg-white rounded-lg items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="gray"
                className="w-6 h-6 mx-3"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <input
                type="text"
                className="h-10 px-1 outline-none rounded-lg"
                placeholder="Username"
              />
            </div>
            <input
              type="button"
              className="px-e ml-2 font-semibold rounded-lg bg-gradient-to-r from-fadein to-fadeout text-white"
              value="Subscribe"
            />
          </div>
        </div>
        <img className="w-1/2 transform -scale-x-100" src={Vape1} />
      </div>
    </div>
  );
}
