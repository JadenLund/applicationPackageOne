import NavBar from "./NavBar";
import Header from "./Header";
import About from "./About";
import Products from "./Products";
import Marquee from "./Marquee";
import FindUs from "./FindUs";
import Contact from "./Contact";

export default function PageSetup() {
  const components = [Header, About, Products, Marquee, FindUs, Contact];
  return (
    <div>
      <NavBar />
      {components.map((Comp, index) => (
        <div key={index} className="flex justify-center items-center">
          <div className="w-r">
            <Comp />
          </div>
        </div>
      ))}
    </div>
  );
}
