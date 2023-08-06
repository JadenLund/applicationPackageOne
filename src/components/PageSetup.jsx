import NavBar from "./NavBar";
import Header from "./Header";
import About from "./About";
import Collection from "./Collection";
import Marquee from "./Marquee";
import Find from "./Find";
import Contact from "./Contact";

export default function PageSetup() {
  const components = [Header, About, Collection, Marquee, Find, Contact];
  return (
    <div>
      <NavBar />
      {components.map((Comp, index) => (
        <div key={index} className="flex justify-center items-center">
          <div className="w-r m-6">
            <Comp />
          </div>
        </div>
      ))}
    </div>
  );
}
